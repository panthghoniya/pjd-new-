import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Share2, Check, Package, CheckCircle2, Layers, Ruler, Beaker } from 'lucide-react';
import Navbar from '../../common components/layout/Navbar';
import Footer from '../../common components/layout/footer';
import productsArray from '../../data/products.json';

// Build a lookup map: { 1: {...}, 2: {...}, ... }
const productsData = productsArray.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});

const Innerproduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData[id] || productsData[1];

  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedWeight, setSelectedWeight] = useState("1 kg");
  const [customWeight, setCustomWeight] = useState("");
  const [activeTab, setActiveTab] = useState("Overview");
  const [copied, setCopied] = useState(false);

  const weights = ["500 g", "1 kg", "5 kg", "25 kg", "Custom Bulk"];

  const handleInquiry = () => {
    const finalWeight = selectedWeight === "Custom Bulk"
      ? (customWeight ? `${customWeight} kg (Custom)` : null)
      : selectedWeight;

    if (selectedWeight === "Custom Bulk" && !customWeight) {
      alert("Please enter a custom weight in kg before sending inquiry.");
      return;
    }

    const params = new URLSearchParams({
      product: product.name,
      weight: finalWeight || selectedWeight,
      sku: product.sku,
    });
    navigate(`/contact?${params.toString()}#contact-form`);
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(product.images[0]);
    setActiveTab("Overview");
  }, [id]);

  // Parse packaging options string into array
  const parsePackagingOptions = (str) => {
    if (!str) return [];
    return str.split('|').map(s => s.trim()).filter(Boolean);
  };

  return (
    <>
      {/* Dynamic SEO per product */}
      <Helmet>
        <title>{product.name} | PDJ Trade Connect — Salt Manufacturer India</title>
        <meta name="description" content={`Buy ${product.name} from PDJ Trade Connect — India's leading salt manufacturer and exporter. ${product.description?.slice(0, 120) || 'Premium quality, bulk export available worldwide.'}`} />
        <meta name="keywords" content={`${product.name}, ${product.category} india, salt exporter india, buy ${product.name} bulk, PDJ trade connect`} />
        <link rel="canonical" href={`https://pdjtrade.com/product/${product.id}`} />
        <meta property="og:title" content={`${product.name} | PDJ Trade Connect`} />
        <meta property="og:description" content={`${product.name} — premium quality salt from India. Bulk export available. ${product.description?.slice(0, 100) || ''}`} />
        <meta property="og:image" content={product.images?.[0] || 'https://pdjtrade.com/og-image.jpg'} />
        <meta property="og:url" content={`https://pdjtrade.com/product/${product.id}`} />
        <meta property="og:type" content="product" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "sku": product.sku,
          "image": product.images,
          "brand": { "@type": "Brand", "name": "PDJ Trade Connect" },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "INR",
            "seller": { "@type": "Organization", "name": "PDJ Trade Connect" }
          }
        })}</script>
      </Helmet>

      <Navbar />

      {/* Page Content */}
      <div className="bg-brand-background min-h-screen pt-20 md:pt-28 pb-16 md:pb-24 font-sans text-brand-dark">
        <div className="max-w-[110rem] mx-auto px-4 md:px-10">

          {/* Breadcrumb Header */}
          <div className="text-center mb-10 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-3xl md:text-5xl font-bold font-heading mb-3 md:mb-4 text-brand-dark md:pt-10">Product Details</h1>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-brand-dark/60 font-medium">
              <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <span>/</span>
              <Link to="/product" className="hover:text-brand-accent transition-colors">Products</Link>
              <span>/</span>
              <span className="text-brand-dark">{product.name}</span>
            </div>
          </div>

          {/* Top Section: Image & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 max-w-7xl mx-auto">

            {/* Left: Images */}
            <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="w-full aspect-[4/5] md:aspect-square rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-sm border border-brand-dark/10 overflow-hidden">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-3 md:gap-4">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${activeImage === img ? 'border-brand-dark shadow-md scale-105' : 'border-transparent hover:border-brand-accent/50 opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="flex flex-col justify-start animate-in fade-in slide-in-from-right-8 duration-700">
              <p className="text-brand-dark/50 text-xs md:text-sm mb-2 uppercase tracking-widest font-semibold">{product.category}</p>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-black leading-tight">{product.name}</h2>
              </div>

              <div className="flex items-center gap-2 mb-4 text-brand-dark/60 font-medium text-sm md:text-base">
                <span className="uppercase tracking-widest text-xs font-bold text-brand-dark">SKU:</span>
                <span>{product.sku}</span>
              </div>

              {/* Tagline */}
              <p className="text-brand-dark/70 leading-relaxed mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
                {product.tagline}
              </p>

              {/* Weight Options */}
              <div className="mb-6 md:mb-8">
                <h4 className="text-xs md:text-sm font-bold text-brand-black mb-3 md:mb-4 uppercase tracking-widest">Weight / Packaging</h4>
                <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                  {weights.map(weight => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`px-6 py-2.5 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border-2 ${selectedWeight === weight
                          ? 'bg-brand-dark text-white border-brand-dark shadow-md scale-105'
                          : 'bg-transparent text-brand-dark/70 border-brand-dark/20 hover:border-brand-accent hover:text-brand-accent'
                        }`}
                    >
                      {weight}
                    </button>
                  ))}
                </div>

                {/* Custom Bulk Input */}
                {selectedWeight === "Custom Bulk" && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-300 max-w-sm">
                    <div className="relative">
                      <input
                        type="number"
                        min="1"
                        value={customWeight}
                        onChange={(e) => setCustomWeight(e.target.value)}
                        placeholder="Enter custom weight"
                        className="w-full bg-white border-2 border-brand-dark/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-brand-accent pr-16 shadow-sm transition-all text-brand-dark font-bold"
                      />
                      <span className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-dark/50 font-bold text-sm pointer-events-none">kg</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Inquiry Action */}
              <div className="flex items-center gap-3 md:gap-4">
                <button
                  onClick={handleInquiry}
                  className="flex-1 bg-brand-dark hover:bg-brand-black text-white py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-[0_10px_20px_rgba(45,79,68,0.2)] hover:shadow-[0_15px_30px_rgba(45,79,68,0.3)] transform hover:-translate-y-1"
                >
                  Send Inquiry
                </button>
                <button
                  onClick={handleShare}
                  title={copied ? 'Link Copied!' : 'Copy product link'}
                  className={`relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border-2 transition-all duration-300 flex-shrink-0 ${copied
                      ? 'border-brand-accent bg-brand-accent text-white scale-110'
                      : 'border-brand-dark/20 text-brand-dark/50 hover:text-brand-accent hover:border-brand-accent hover:bg-brand-accent/5'
                    }`}
                >
                  {copied ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
                  {copied && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-200">
                      Copied!
                    </span>
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* Bottom Section: Tabs */}
          <div className="py-8 md:py-10 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="flex items-center justify-start md:justify-center gap-4 md:gap-16 border-b-2 border-brand-dark/10 mb-8 md:mb-12 overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar pb-1">
              {['Overview', 'Product Specifications'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 md:pb-3 text-sm md:text-2xl font-bold capitalize transition-all duration-300 relative whitespace-nowrap flex-shrink-0 ${activeTab === tab ? 'text-brand-dark' : 'text-brand-dark/50 hover:text-brand-dark/70'
                    }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute -bottom-[6px] left-0 w-full h-[3px] bg-brand-dark rounded-t-full"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="text-brand-dark/70 leading-relaxed text-left text-sm sm:text-base md:text-lg">

              {/* Description Tab */}
              {activeTab === 'Overview' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <p className="mb-6 md:mb-8 text-brand-dark/70 leading-relaxed">
                    {product.Overview}
                  </p>

                  {/* Key Features in Description */}
                  {product.keyFeatures && product.keyFeatures.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-bold text-brand-dark text-base md:text-lg mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                        Key Features
                      </h3>
                      <ul className="text-left space-y-3 md:space-y-4 text-brand-dark/70">
                        {product.keyFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 md:gap-4">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-accent/10 text-brand-dark flex items-center justify-center flex-shrink-0 mt-0.5 text-xs md:text-sm font-bold">✓</div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Applications */}
                  {product.applications && product.applications.length > 0 && (
                    <div className="mt-8">
                      <h3 className="font-bold text-brand-dark text-base md:text-lg mb-4 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-brand-accent" />
                        Applications
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <span key={idx} className="px-4 py-2 bg-brand-dark/5 rounded-full text-sm font-medium text-brand-dark border border-brand-dark/10">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Additional Information Tab */}
              {activeTab === 'Product Specifications' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {product.additionalInfo && Object.keys(product.additionalInfo).length > 0 ? (
                    <div className="bg-white rounded-2xl border border-brand-dark/10 shadow-sm overflow-hidden">
                      <table className="w-full text-left border-collapse">
                        <tbody>
                          {Object.entries(product.additionalInfo).map(([key, value], idx) => (
                            <tr key={key} className={`border-b border-brand-dark/5 hover:bg-brand-background/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-brand-background/30'}`}>
                              <th className="py-4 md:py-5 px-6 font-bold text-brand-dark text-sm md:text-base w-1/3 md:w-1/4 align-top border-r border-brand-dark/10">
                                {key}
                              </th>
                              <td className="py-4 md:py-5 px-6 text-brand-dark/80 text-sm md:text-base align-top font-medium">
                                {typeof value === 'string' && value.includes('|') ? (
                                  <ul className="space-y-1.5">
                                    {value.split('|').map((item, i) => (
                                      <li key={i} className="flex items-start gap-2">
                                        <span className="text-brand-accent mt-0.5">•</span>
                                        {item.trim()}
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  value
                                )}
                              </td>
                            </tr>
                          ))}
                          {/* Applications Row */}
                          {product.applications && product.applications.length > 0 && (
                            <tr className={`hover:bg-brand-background/50 transition-colors ${Object.keys(product.additionalInfo).length % 2 === 0 ? 'bg-white' : 'bg-brand-background/30'}`}>
                              <th className="py-4 md:py-5 px-6 font-bold text-brand-dark text-sm md:text-base w-1/3 md:w-1/4 align-top border-r border-brand-dark/10">
                                Applications
                              </th>
                              <td className="py-4 md:py-5 px-6 align-top">
                                <div className="flex flex-wrap gap-2">
                                  {product.applications.map((app, idx) => (
                                    <span key={idx} className="px-3 py-1.5 bg-brand-dark/5 border border-brand-dark/10 rounded-lg text-xs md:text-sm font-semibold text-brand-dark">
                                      {app}
                                    </span>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="bg-white rounded-2xl p-10 border border-brand-dark/5 text-center">
                      <p className="text-brand-dark/50 italic text-lg font-medium">No additional information available for this product.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="py-12 md:py-16 max-w-7xl mx-auto animate-in fade-in duration-1000 delay-500">

            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
              <div>
                <p className="text-brand-accent font-bold tracking-[0.2em] uppercase mb-2 text-xs md:text-sm">Explore More</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-brand-dark leading-tight">
                  Related <span className="text-brand-accent">Products</span>
                </h2>
              </div>
              <Link
                to="/product"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark/60 hover:text-brand-accent transition-colors whitespace-nowrap group"
              >
                View All Products
                <span className="w-7 h-7 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300">
                  <svg className="w-3.5 h-3.5 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </span>
              </Link>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {Object.values(productsData)
                .filter(p => p.id !== Number(id))
                .slice(0, 4)
                .map(relatedProduct => (
                  <Link
                    key={relatedProduct.id}
                    to={`/product/${relatedProduct.id}`}
                    className="group flex flex-col bg-white rounded-[1.75rem] border border-brand-dark/8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 p-3"
                  >
                    {/* Image — own overflow-hidden + rounded */}
                    <div className="relative w-full aspect-[4/5] rounded-[1.25rem] overflow-hidden bg-brand-background mb-4">
                      <img
                        src={relatedProduct.images[0]}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt={relatedProduct.name}
                      />
                      {/* Dark gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.25rem]" />

                      {/* Badge */}
                      {relatedProduct.badge && (
                        <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-brand-dark shadow-sm">
                          {relatedProduct.badge}
                        </div>
                      )}

                      {/* View Details pill on hover */}
                      <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span className="flex items-center gap-1.5 px-4 py-1.5 bg-white rounded-full text-xs font-bold text-brand-dark shadow-md">
                          View Details
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="px-2 pb-2 flex flex-col gap-1">
                      <p className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.15em]">
                        {relatedProduct.category}
                      </p>
                      <h3 className="font-bold text-brand-dark text-base leading-snug group-hover:text-brand-accent transition-colors duration-300">
                        {relatedProduct.name}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Innerproduct;
