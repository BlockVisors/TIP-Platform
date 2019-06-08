// import React, { Fragment } from 'react';
// import Head from 'next/head';
// import Sticky from 'react-stickynode';
// import { ThemeProvider } from 'styled-components';
// import { agencyTheme } from 'common/src/theme/agency';
// import { ResetCSS } from 'common/src/assets/css/style';
// import {
//   GlobalStyle,
//   AgencyWrapper,
// } from 'common/src/containers/Agency/agency.style';
// import Navbar from 'common/src/containers/Agency/Navbar';
// import BannerSection from 'common/src/containers/Agency/BannerSection';
// import FeatureSection from 'common/src/containers/Agency/FeatureSection';
// import AboutUsSection from 'common/src/containers/Agency/AboutUsSection';
// import WorkHistory from 'common/src/containers/Agency/WorkHistory';
// import BlogSection from 'common/src/containers/Agency/BlogSection';
// import TestimonialSection from 'common/src/containers/Agency/TestimonialSection';
// import TeamSection from 'common/src/containers/Agency/TeamSection';
// import VideoSection from 'common/src/containers/Agency/VideoSection';
// import NewsletterSection from 'common/src/containers/Agency/NewsletterSection';
// import QualitySection from 'common/src/containers/Agency/QualitySection';
// import Footer from 'common/src/containers/Agency/Footer';
// import { DrawerProvider } from 'common/src/contexts/DrawerContext';
// import FaqSection from 'common/src/containers/Agency/FaqSection';
// export default () => {
//   return (
//     <ThemeProvider theme={agencyTheme}>
//       <Fragment>
//         {/* Start agency head section */}
//         <Head>
//           <title>Agency | A react next landing page</title>
//           <meta name="theme-color" content="#10ac84" />
//           <meta name="Description" content="React next landing page" />
//           {/* Load google fonts */}
//           <link
//             href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
//             rel="stylesheet"
//           />
//         </Head>
//         <ResetCSS />
//         <GlobalStyle />
//         {/* End of agency head section */}
//         {/* Start agency wrapper section */}
//         <AgencyWrapper>
//           <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
//             <DrawerProvider>
//               <Navbar />
//             </DrawerProvider>
//           </Sticky>
//           <BannerSection />
//           <FeatureSection />
//           <AboutUsSection />
//           <WorkHistory />
//           <BlogSection />
//           <QualitySection />
//           <VideoSection />
//           <TestimonialSection />
//           <TeamSection />
//           <FaqSection />
//           <NewsletterSection />
//           <Footer />
//         </AgencyWrapper>
//         {/* End of agency wrapper section */}
//       </Fragment>
//     </ThemeProvider>
//   );
// };

import React, { Fragment, Component } from 'react';
// import Profile from './Profile.jsx';
// import Signin from './Signin.jsx';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from './../../common/src/theme/crypto';
import { ResetCSS } from './../../common/src/assets/css/style';
//import bootstrap from 'bootstrap/dist/css/bootstrap.css';
//import style from './styles/style.css';
import {
  GlobalStyle,
  ContentWrapper,
} from './../../common/src/containers/Crypto/crypto.style';
import { DrawerProvider } from './../../common/src/contexts/DrawerContext';
import Navbar from './../../common/src/containers/Crypto/Navbar';
import Banner from './../../common/src/containers/Crypto/BannerSection';
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
import BlogSection from './../../common/src/containers/Agency/BlogSection';
import FooterRideshare from './../../common/src/containers/Ride/Footer';
import Video2Section from './../../common/src/containers/Agency/VideoSection2';
import FeaturedProp from 'common/src/containers/SaasThree/Partner';
import PlatformFeature from 'common/src/containers/Hosting/Features';
import TestNews from 'common/src/containers/Portfolio/Testimonial2';
import FeatureSectionApp from 'common/src/containers/App/FeatureSection';
import InfoSection from 'common/src/containers/Hosting/Info';
import FooterwContact from './../../common/src/containers/Ride/FooterwContact';
import BSApp from './App.jsx';
//import { render } from 'art-template';

// export default () => {

  class Index extends Component {

      constructor(props) {
        super(props);
        this.state = {
          // done: props.done,
          // critical: props.critical
        };
    
        // this.markAsDone = this.markAsDone.bind(this);
        // this.removeTodo = this.removeTodo.bind(this);
        // this.markCritical = this.markCritical.bind(this);
      };

      render() {
  return (
    <ThemeProvider theme={cryptoTheme}>
      <Fragment>
        <Head>
          <title>TokenProp | Token Investment Portal</title>
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
          <FeatureSectionApp />
          <PlatformFeature />
          <FeaturedProp />
          <BlogSection />
          <TPWorksSection />
          <TestNews />
           <FooterwContact />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
 }

export default Index;