import React, { useEffect } from 'react';
import Navbar from '../../common components/layout/Navbar';
import Footer from '../../common components/layout/footer';
import { Helmet } from 'react-helmet-async';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | PDJ Trade Connect</title>
        <meta name="description" content="Terms and Conditions of PDJ Trade Connect - leading salt manufacturer and exporter in India." />
      </Helmet>

      <Navbar />

      <div className="bg-brand-background min-h-screen pt-32 pb-24 font-sans text-brand-dark">
        <div className="container mx-auto px-6 md:px-10 lg:max-w-6xl">
          
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-brand-dark">Terms & Conditions</h1>
            <p className="text-brand-dark/70 text-lg">Effective Date: July 1, 2026</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-14 lg:p-20 shadow-[0_15px_40px_rgba(45,79,68,0.06)] border border-brand-dark/10 space-y-10 md:space-y-14 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">1. Acceptance of Terms</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg mb-4">
                These Terms and Conditions ("Terms") govern your use of the PDJ Trade Connect website, and constitute a legally binding agreement between you ("Buyer", "Client", or "User") and PDJ Trade Connect ("Seller", "we", "us", or "our"). By accessing our website, requesting a quotation, or placing an order for our industrial and edible salt products, you agree to be bound by these Terms. 
              </p>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg">
                If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms. If you do not agree with these Terms, you must not use our services or purchase our products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">2. Product Specifications and Customizations</h2>
              <ul className="list-disc pl-6 space-y-3 text-brand-dark/80 text-base md:text-lg">
                <li><strong>Quality Standards:</strong> We guarantee that our products meet the specifications outlined in our official Product Data Sheets, including purity levels (NaCl), iodine content, moisture, and grain size.</li>
                <li><strong>Customization:</strong> We offer bespoke manufacturing options. Any custom specifications (e.g., precise iodine fortification, specific anti-caking agents, private labeling) must be agreed upon in writing in the Proforma Invoice (PI) or Sales Contract before production commences.</li>
                <li><strong>Compliance:</strong> Our edible salts comply with FSSAI, HALAL, and general international food safety standards. It is the Buyer's responsibility to inform us of any specific regulatory compliance required by the destination country prior to order confirmation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">3. Minimum Order Quantity (MOQ) and Ordering</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg mb-4">
                As a B2B bulk manufacturer, our standard Minimum Order Quantity (MOQ) is generally one full container load (FCL), which typically holds approximately 28 Metric Tons (MT) depending on the packaging and shipping regulations.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-brand-dark/80 text-base md:text-lg">
                <li>Orders are only considered confirmed once the Buyer has signed and returned the Proforma Invoice and fulfilled the initial payment terms (e.g., advance payment or LC issuance).</li>
                <li>We reserve the right to decline or cancel orders if the required raw materials become unavailable or due to unforeseen manufacturing constraints.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">4. Pricing and Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-3 text-brand-dark/80 text-base md:text-lg">
                <li><strong>Pricing:</strong> All prices quoted are subject to validity periods. Salt is a commodity, and prices may fluctuate based on raw material costs, freight rates, and currency exchange rates. Prices will be finalized upon the issuance of the Proforma Invoice.</li>
                <li><strong>Payment Methods:</strong> We accept payments via Telegraphic Transfer (T/T), Letter of Credit (L/C) at sight from first-class international banks, and other mutually agreed methods.</li>
                <li><strong>Standard Terms:</strong> A standard payment structure often involves an advance payment percentage with the balance payable against scanned copies of shipping documents (B/L), unless otherwise specified in the contract.</li>
                <li><strong>Taxes and Duties:</strong> The Buyer is responsible for all import duties, taxes, and customs clearance charges at the destination port.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">5. Shipping, Delivery, and Risk of Loss</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg mb-4">
                We deliver globally based on standard Incoterms (e.g., FOB Mundra Port, CIF, CFR). The applicable Incoterm will be explicitly stated in the Sales Contract.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-brand-dark/80 text-base md:text-lg">
                <li><strong>Lead Times:</strong> Estimated dispatch times will be provided upon order confirmation. We strive to meet all deadlines; however, delays caused by shipping lines, port congestion, or customs are beyond our control and do not constitute a breach of contract.</li>
                <li><strong>Risk of Loss:</strong> The transfer of risk from the Seller to the Buyer is determined by the agreed Incoterms. We highly recommend that Buyers secure adequate marine insurance for CIF/CFR shipments.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">6. Inspection and Quality Assurance</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg">
                We maintain rigorous internal quality control. Furthermore, we welcome and facilitate Third-Party Inspections (e.g., SGS, Geo-Chem) at the port of loading before dispatch. The cost of such third-party inspections shall be borne by the Buyer unless negotiated otherwise. The findings of the mutually agreed inspection agency at the loading port shall be considered final and binding regarding the quality and quantity of the goods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">7. Claims and Discrepancies</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg mb-4">
                Any claims regarding quality discrepancies, damages, or shortages must be submitted in writing within 15 days of the vessel's arrival at the destination port, accompanied by supporting evidence (e.g., photos, independent inspection reports).
              </p>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg">
                PDJ Trade Connect will not entertain claims for damages incurred during transit if the goods were sold under FOB or CFR terms, as the risk transfers to the buyer once goods are loaded onto the vessel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">8. Force Majeure</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg">
                Neither party shall be held liable for any failure or delay in fulfilling their obligations under this agreement if such failure is caused by circumstances beyond their reasonable control. This includes, but is not limited to, acts of God, natural disasters (floods, earthquakes), wars, strikes, port closures, government restrictions, pandemics, and severe logistical disruptions. In such events, the affected party shall promptly notify the other, and timelines for performance shall be reasonably extended.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">9. Limitation of Liability</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg">
                To the maximum extent permitted by law, PDJ Trade Connect's total liability arising out of or in connection with any order or contract, whether in contract, tort, or otherwise, shall be strictly limited to the total purchase price paid by the Buyer for the specific batch of goods in question. Under no circumstances shall PDJ Trade Connect be liable for any indirect, consequential, special, punitive, or incidental damages, including but not limited to loss of profits, loss of business opportunity, or production downtime.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">10. Governing Law and Jurisdiction</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg">
                These Terms and Conditions, and any disputes arising out of or relating to them, shall be governed by and construed in accordance with the laws of India. Any legal actions, suits, or proceedings arising out of this agreement shall be brought exclusively before the competent courts of Gandhidham, Gujarat, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">11. Contact Information</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg">
                If you have any questions, concerns, or require clarification regarding these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-6 bg-brand-background/50 p-6 rounded-xl border border-brand-dark/5">
                <p className="text-brand-dark/80 text-base md:text-lg mb-2"><strong>Company Name:</strong> PDJ Trade Connect</p>
                <p className="text-brand-dark/80 text-base md:text-lg mb-2"><strong>Email Address:</strong> info@pdjtradeconnect.com, support@pdjtradeconnect.com</p>
                <p className="text-brand-dark/80 text-base md:text-lg mb-2"><strong>Phone Number:</strong> +91 9687474747</p>
                <p className="text-brand-dark/80 text-base md:text-lg"><strong>Postal Address:</strong> Plot NO. 129, Sector 12B, Gandhidham, Kachchh, Gujarat 370201, India</p>
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsConditions;
