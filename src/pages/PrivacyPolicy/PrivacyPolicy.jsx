import React, { useEffect } from 'react';
import Navbar from '../../common components/layout/Navbar';
import Footer from '../../common components/layout/footer';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | PDJ Trade Connect</title>
        <meta name="description" content="Privacy Policy of PDJ Trade Connect - leading salt manufacturer and exporter in India." />
      </Helmet>

      <Navbar />

      <div className="bg-brand-background min-h-screen pt-32 pb-24 font-sans text-brand-dark">
        <div className="container mx-auto px-6 md:px-10 lg:max-w-6xl">
          
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-brand-dark">Privacy Policy</h1>
            <p className="text-brand-dark/70 text-lg">Effective Date: July 1, 2026</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-14 lg:p-20 shadow-[0_15px_40px_rgba(45,79,68,0.06)] border border-brand-dark/10 space-y-10 md:space-y-14 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">1. Introduction</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg mb-4">
                Welcome to the Privacy Policy of PDJ Trade Connect ("we", "us", or "our"). We are committed to protecting your privacy and ensuring that your personal information is handled safely and responsibly in compliance with global data protection regulations. 
              </p>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg">
                As a leading manufacturer, processor, and exporter of industrial and edible salts, we operate primarily in the B2B sector. This Privacy Policy outlines how we collect, use, store, and disclose your personal data when you visit our website, communicate with our sales and support teams, or engage in business transactions with us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">2. Information We Collect</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg mb-4">
                We may collect, use, store, and transfer various kinds of personal data about you, which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-brand-dark/80 text-base md:text-lg">
                <li><strong>Identity Data:</strong> Includes first name, last name, username, title, and the name of the company or organization you represent.</li>
                <li><strong>Contact Data:</strong> Includes billing address, delivery address, email address, telephone numbers, and business contact information.</li>
                <li><strong>Financial Data:</strong> Includes bank account and payment card details required for processing bulk orders and export transactions.</li>
                <li><strong>Transaction Data:</strong> Includes details about payments to and from you, purchase history, order specifications (e.g., salt grade, iodine content, grain size, packaging), and logistics preferences.</li>
                <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting, operating system, and platform used to access our website.</li>
                <li><strong>Usage Data:</strong> Includes information about how you use our website, products, and services.</li>
                <li><strong>Marketing and Communications Data:</strong> Includes your preferences in receiving marketing from us and your communication preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">3. How We Collect Your Data</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg mb-4">
                We use different methods to collect data from and about you, including through:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-brand-dark/80 text-base md:text-lg">
                <li><strong>Direct Interactions:</strong> You may give us your Identity, Contact, and Financial Data by filling in forms on our website or by corresponding with us by post, phone, email, or at trade exhibitions. This includes personal data you provide when you request a quotation, apply for our products, or request marketing to be sent to you.</li>
                <li><strong>Automated Technologies:</strong> As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions, and patterns. We collect this personal data by using cookies, server logs, and other similar technologies.</li>
                <li><strong>Third Parties or Publicly Available Sources:</strong> We may receive personal data about you from various third parties, such as analytics providers, trade directories, and logistics partners.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">4. How We Use Your Personal Data</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-brand-dark/80 text-base md:text-lg">
                <li><strong>Performance of a Contract:</strong> Where we need to process inquiries, provide quotations, manufacture customized salt orders, arrange shipping, and execute the contract we are about to enter into or have entered into with you.</li>
                <li><strong>Legitimate Interests:</strong> Where it is necessary for our legitimate interests (or those of a third party), such as managing our business relationship, improving our website, and ensuring supply chain efficiency, provided your interests and fundamental rights do not override those interests.</li>
                <li><strong>Legal Obligation:</strong> Where we need to comply with a legal or regulatory obligation, such as customs declarations, tax reporting, and export compliance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">5. Disclosures of Your Personal Data</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg mb-4">
                We may have to share your personal data with the parties set out below for the purposes outlined in Section 4:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-brand-dark/80 text-base md:text-lg">
                <li><strong>Internal Third Parties:</strong> Other entities within the PDJ Trade Connect group acting as joint controllers or processors.</li>
                <li><strong>External Third Parties:</strong> Service providers acting as processors, including freight forwarders, shipping lines, customs brokers, third-party inspection agencies (e.g., SGS), banks, and IT support services.</li>
                <li><strong>Professional Advisers:</strong> Acting as processors or joint controllers including lawyers, bankers, auditors, and insurers who provide consultancy, banking, legal, insurance, and accounting services.</li>
                <li><strong>Regulators and Authorities:</strong> Government entities, customs authorities, and tax authorities who require reporting of processing activities in certain circumstances.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">6. International Transfers</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg">
                As an international exporter, we frequently engage in cross-border transactions. Whenever we transfer your personal data out of your resident country, we ensure a similar degree of protection is afforded to it by ensuring at least one of the legal safeguards is implemented, such as transferring data only to countries deemed to provide an adequate level of protection or using specific contracts approved by relevant regulatory bodies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">7. Data Security</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg">
                We have put in place appropriate technical and organizational security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">8. Data Retention</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg">
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">9. Your Legal Rights</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-brand-dark/80 text-base md:text-lg">
                <li>Request access to your personal data.</li>
                <li>Request correction of the personal data that we hold about you.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing of your personal data.</li>
                <li>Request the transfer of your personal data to you or to a third party.</li>
                <li>Withdraw consent at any time where we are relying on consent to process your personal data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-brand-accent">10. Contact Details</h2>
              <p className="text-brand-dark/80 leading-relaxed text-base md:text-lg">
                If you have any questions about this Privacy Policy, including any requests to exercise your legal rights, please contact our Data Privacy Manager using the details set out below:
              </p>
              <div className="mt-6 bg-brand-background/50 p-6 rounded-xl border border-brand-dark/5">
                <p className="text-brand-dark/80 text-base md:text-lg mb-2"><strong>Company Name:</strong> PDJ Trade Connect</p>
                <p className="text-brand-dark/80 text-base md:text-lg mb-2"><strong>Email Address:</strong> support@pdjtrade.com</p>
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

export default PrivacyPolicy;
