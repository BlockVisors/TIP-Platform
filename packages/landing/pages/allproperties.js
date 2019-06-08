
import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from './../../common/src/theme/crypto';
import { ResetCSS } from './../../common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from './../../common/src/containers/Crypto/crypto.style';
import { DrawerProvider } from './../../common/src/contexts/DrawerContext';
import Navbar from './../../common/src/containers/Crypto/Navbar';
import Banner from './../../common/src/containers/Crypto/BannerSection2';
import BannerSlider from './../../common/src/containers/Crypto/BannerSlider';
import Transactions from './../../common/src/containers/Crypto/Transaction';
import ControlSections from './../../common/src/containers/Crypto/ControlSection';
import TrustedProofSections from './../../common/src/containers/Crypto/TrustedProof';
import ScalableSections from './../../common/src/containers/Crypto/ScalableSection';
import SlideSections from './../../common/src/containers/Crypto/CryptoSlides';
import BetaSections from './../../common/src/containers/Crypto/BetaSection';
//import Footer from './../../common/src/containers/Crypto/Footer';

//import NavbarSaas from './../../common/src/containers/Saas/Navbar';
import BannerSection from './../../common/src/containers/Saas/BannerSection';
import FeatureSection from './../../common/src/containers/Saas/FeatureSection';
import VisitorSection from './../../common/src/containers/Saas/VisitorSection';
import ServiceSection from './../../common/src/containers/Saas/ServiceSection';
import FaqSection from './../../common/src/containers/Saas/FaqSection';
//import FooterSaas from './../../common/src/containers/Saas/Footer';
import PricingSection from './../../common/src/containers/Saas/PricingSection';
//import TrialSection from './../../common/src/containers/Saas/TrialSection';
import TimelineSection from './../../common/src/containers/Saas/TimelineSection';
import TestimonialSection from './../../common/src/containers/Saas/TestimonialSection';
import WhatIsSection from './../../common/src/containers/Saas/PartnerSection';
//import { DrawerProvider } from './../../common/src/contexts/DrawerContext';
import TPWorksSection from './../../common/src/containers/Portfolio/Process2';
import DeveloperSection from './../../common/src/containers/Portfolio/Skill2';
import ClientsSection from './../../common/src/containers/Portfolio/Clients2';
import TeamSection from './../../common/src/containers/Agency/TeamSection';
import VideoSection from './../../common/src/containers/Agency/VideoSection';
import NewsletterSection from './../../common/src/containers/Agency/NewsletterSection';
import BlogSection from './../../common/src/containers/Agency/BlogSectionAllProp';
import FooterRideshare from './../../common/src/containers/Ride/Footer';
import Video2Section from './../../common/src/containers/Agency/VideoSection2';
import FeaturedProp from 'common/src/containers/SaasThree/Partner';
import PlatformFeature from 'common/src/containers/Hosting/Features';



export default () => {
  return (
    <ThemeProvider theme={cryptoTheme}>
      <Fragment>
        <Head>
          <title>Cryptocurrency | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />

          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Avenir:300,400,500,600,700|Heebo:300,400,500,700"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <BlogSection />
           <FooterRideshare />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
