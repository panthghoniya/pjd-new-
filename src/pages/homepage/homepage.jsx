import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import Mmm from './mmm';
import Fourth from './4th';
import Customization from './Customization';
import Fifth from './5th';
import LogoSection from './country';
import Testimonials from './certificate';
import FAQ from './FAQ';
import IndustryWeServe from './industryweserve';
import Footer from '../../common components/layout/footer';

const Homepage = () => {
    return (
        <>
            <Helmet>
                <title>PDJ Trade Connect | Salt Manufacturer & Exporter India</title>
                <meta name="description" content="PDJ Trade Connect is India's premier salt manufacturer and global exporter. We supply edible salt, industrial salt, Himalayan pink salt, bath salt and salt lamps to 50+ countries." />
                <meta name="keywords" content="salt manufacturer india, salt exporter india, edible salt supplier, industrial salt india, Himalayan pink salt exporter, PDJ trade connect" />
                <link rel="canonical" href="https://pdjtrade.com/" />
                <meta property="og:title" content="PDJ Trade Connect | Salt Manufacturer & Exporter India" />
                <meta property="og:description" content="India's premier salt manufacturer and global exporter. Edible, industrial, Himalayan, bath salt & lamps shipped to 50+ countries." />
                <meta property="og:url" content="https://pdjtrade.com/" />
                <meta property="og:type" content="website" />
            </Helmet>

            <Hero />
            <Mmm />
            <Customization />
            <Fourth />
            <Fifth />
             <IndustryWeServe />
            <LogoSection />
            <Testimonials />
            <FAQ />
            <Footer />
        </>
    );
};

export default Homepage;