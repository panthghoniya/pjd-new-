import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../../common components/layout/Navbar';
import Footer from '../../common components/layout/footer';
import ProductHero from './producthero';
import { ChevronDown, SlidersHorizontal, X, ArrowRight } from 'lucide-react';
import initialProducts from '../../data/products.json';

const categories = [
    { label: 'All Products', value: 'All' },
    { label: 'Food Grade Salt', value: 'Food Grade Salt' },
    { label: 'Industrial Grade Salt', value: 'Industrial Grade Salt' }
];

const ProductListing = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    const filteredProducts = selectedCategory === 'All'
        ? initialProducts
        : initialProducts.filter(p => p.category === selectedCategory);

    const getCount = (val) =>
        val === 'All'
            ? initialProducts.length
            : initialProducts.filter(p => p.category === val).length;

    return (
        <>
            <Helmet>
                <title>Salt Products | PDJ Trade Connect — Edible & Industrial Salt India</title>
                <meta name="description" content="Browse PDJ Trade Connect's full range of salt products — edible salt, industrial salt, Himalayan pink salt, bath salt, salt lamps. Bulk export available worldwide." />
                <meta name="keywords" content="salt products india, edible salt buy, industrial salt catalog, Himalayan pink salt bulk, bath salt supplier, salt lamp exporter india" />
                <link rel="canonical" href="https://pdjtrade.com/product" />
                <meta property="og:title" content="Salt Products | PDJ Trade Connect" />
                <meta property="og:description" content="Browse our full range — edible salt, industrial salt, Himalayan pink salt, bath salt & lamps. Bulk export available." />
                <meta property="og:url" content="https://pdjtrade.com/product" />
            </Helmet>
            <Navbar />
            <div className="bg-brand-background min-h-screen font-sans">
                <ProductHero />

                <div className="max-w-[110rem] mx-auto px-4 md:px-10 py-12 md:py-20">

                    {/* Mobile Filter Toggle */}
                    <div className="flex items-center justify-between mb-6 lg:hidden">
                        <p className="text-brand-dark/60 text-sm font-medium">
                            Showing <span className="font-bold text-brand-dark">{filteredProducts.length}</span> products
                        </p>
                        <button
                            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-brand-dark/20 text-sm font-semibold text-brand-dark hover:border-brand-accent hover:text-brand-accent transition-all"
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            Filters
                            {selectedCategory !== 'All' && (
                                <span className="w-5 h-5 rounded-full bg-brand-accent text-white text-xs flex items-center justify-center">1</span>
                            )}
                        </button>
                    </div>

                    {/* Mobile Filter Drawer */}
                    {mobileFilterOpen && (
                        <div className="lg:hidden mb-6 bg-white rounded-2xl p-5 border border-brand-dark/10 shadow-lg animate-in slide-in-from-top-4 duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-brand-dark">Filter by Category</h3>
                                <button onClick={() => setMobileFilterOpen(false)} className="text-brand-dark/40 hover:text-brand-dark transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {categories.map(cat => (
                                    <button
                                        key={cat.value}
                                        onClick={() => { setSelectedCategory(cat.value); setMobileFilterOpen(false); }}
                                        className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${selectedCategory === cat.value
                                                ? 'bg-brand-dark text-white border-brand-dark'
                                                : 'border-brand-dark/15 text-brand-dark/70 hover:border-brand-accent hover:text-brand-accent'
                                            }`}
                                    >
                                        {cat.label}
                                        <span className={`ml-1.5 text-xs ${selectedCategory === cat.value ? 'text-white/70' : 'text-brand-dark/40'}`}>
                                            ({getCount(cat.value)})
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                        {/* ── SIDEBAR ── */}
                        <aside className="hidden lg:flex flex-col gap-6 w-[260px] xl:w-[280px] flex-shrink-0 sticky top-28">

                            {/* Filter Header */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-xl bg-brand-dark flex items-center justify-center">
                                        <SlidersHorizontal className="w-4 h-4 text-white" />
                                    </div>
                                    <h2 className="font-bold text-lg text-brand-dark font-heading">Filters</h2>
                                </div>
                                {selectedCategory !== 'All' && (
                                    <button
                                        onClick={() => setSelectedCategory('All')}
                                        className="text-xs font-semibold text-brand-accent hover:text-brand-dark transition-colors flex items-center gap-1"
                                    >
                                        <X className="w-3 h-3" /> Clear
                                    </button>
                                )}
                            </div>

                            {/* Category Filter Card */}
                            <div className="bg-white rounded-2xl border border-brand-dark/8 shadow-sm overflow-hidden">
                                {/* Card Header */}
                                <div className="px-5 py-4 border-b border-brand-dark/6">
                                    <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-dark/50">
                                        Product Category
                                    </h3>
                                </div>

                                {/* Category Items */}
                                <div className="p-3 flex flex-col gap-1">
                                    {categories.map((cat, idx) => {
                                        const isActive = selectedCategory === cat.value;
                                        const count = getCount(cat.value);
                                        return (
                                            <button
                                                key={cat.value}
                                                onClick={() => setSelectedCategory(cat.value)}
                                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-200 group ${isActive
                                                        ? 'bg-brand-dark text-white shadow-md'
                                                        : 'text-brand-dark/70 hover:bg-brand-dark/5 hover:text-brand-dark'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    {/* Dot indicator */}
                                                    <span className={`w-2 h-2 rounded-full flex-shrink-0 transition-all duration-200 ${isActive ? 'bg-white' : 'bg-brand-dark/20 group-hover:bg-brand-accent'
                                                        }`} />
                                                    <span className={`text-sm font-semibold leading-snug ${isActive ? 'text-white' : ''}`}>
                                                        {cat.label}
                                                    </span>
                                                </div>
                                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 transition-all duration-200 ${isActive
                                                        ? 'bg-white/20 text-white'
                                                        : 'bg-brand-dark/8 text-brand-dark/50 group-hover:bg-brand-accent/10 group-hover:text-brand-accent'
                                                    }`}>
                                                    {count}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Inquiry CTA Card */}
                            <div className="bg-brand-dark rounded-2xl p-5 text-white">
                                <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Need Help?</p>
                                <h4 className="font-bold text-base font-heading mb-1 leading-snug">Looking for a Custom Order?</h4>
                                <p className="text-white/60 text-xs mb-4 leading-relaxed">
                                    Contact us for bulk pricing, custom packaging & export inquiries.
                                </p>
                                <Link
                                    to="/contact"
                                    className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 rounded-xl px-4 py-2.5 transition-all duration-200 w-full justify-center"
                                >
                                    Send Inquiry <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </aside>

                        {/* ── MAIN CONTENT ── */}
                        <div className="flex-1 min-w-0 flex flex-col">

                            {/* Top Bar */}
                            <div className="hidden lg:flex flex-row justify-between items-center mb-8 pb-5 border-b border-brand-dark/10 gap-4">
                                <div>
                                    <p className="text-brand-dark/50 text-sm">
                                        Showing <span className="font-bold text-brand-dark">{filteredProducts.length}</span> products
                                        {selectedCategory !== 'All' && (
                                            <span className="ml-2 text-brand-accent font-semibold">in "{selectedCategory}"</span>
                                        )}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-brand-dark/60 cursor-pointer hover:text-brand-accent transition-colors select-none">
                                    <span>Sort by:</span>
                                    <span className="font-semibold text-brand-dark">Featured</span>
                                    <ChevronDown className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Product Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
                                {filteredProducts.map((product) => (
                                    <Link to={`/product/${product.id}`} key={product.id} className="group flex flex-col relative">
                                        {/* Badge */}
                                        {/* {product.badge && (
                                            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-brand-dark shadow-sm border border-brand-dark/10">
                                                {product.badge}
                                            </div>
                                        )} */}
                                        {/* Card Image */}
                                        <div className="relative bg-brand-dark/5 rounded-[2rem] aspect-[4/5] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.07)] group-hover:bg-white mb-5">
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                                            />
                                        </div>
                                        {/* Product Info */}
                                        <div className="flex flex-col items-center text-center px-3">
                                            <p className="text-xs text-brand-dark/40 font-semibold uppercase tracking-wider mb-1">{product.category}</p>
                                            <h3 className="font-heading font-semibold text-lg text-brand-dark group-hover:text-brand-accent transition-colors leading-snug">{product.name}</h3>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {filteredProducts.length === 0 && (
                                <div className="mt-20 text-center text-brand-dark/50">
                                    <p className="text-lg font-semibold mb-2">No products found</p>
                                    <p className="text-sm">Try selecting a different category.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Promotional Banner */}
                    {/* <div className="mt-24 md:mt-32 relative bg-[#3B5A51] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-10 md:p-16 lg:p-20 shadow-2xl">
                        <div className="relative z-10 md:w-1/2 text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
                                Stay Updated,<br />
                                <span className="text-[#A8D5BA]">Stay Radiant.</span>
                            </h2>
                            <p className="text-white/80 text-lg mb-10 max-w-md mx-auto md:mx-0">
                                Be the first to know about new products, exclusive offers, and expert tips.
                            </p>
                            <div className="flex bg-white rounded-full p-2 max-w-md mx-auto md:mx-0 shadow-lg">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="bg-transparent px-6 py-3 w-full outline-none text-brand-dark placeholder:text-brand-dark/40"
                                />
                                <button className="bg-brand-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-accent transition-colors whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-0 w-full md:w-[45%] h-full pointer-events-none flex items-center justify-center p-6">
                            <img
                                src="https://i.pinimg.com/736x/8e/b3/c1/8eb3c19f37fdda88e792857c430aa104.jpg"
                                alt="Decorative"
                                className="w-full h-full object-contain object-center"
                            />
                        </div>
                    </div> */}

                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductListing;
