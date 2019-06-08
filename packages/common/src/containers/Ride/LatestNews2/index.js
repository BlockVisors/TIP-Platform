import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Button from 'reusecore/src/elements/Button';
import Heading from 'reusecore/src/elements/Heading';
import FeatureBlock from '../../../components/FeatureBlock';
import { LatestNews } from '../../../data/Ride';
import Container from '../../../components/UI/Container';
import FeatureSectionWrapper from './latest.style';

const FeatureSection = ({
  row,
  col,
  secTitleWrapper,
  secTitle,
  secDescription,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  btnStyle,
}) => {
  return (
    <FeatureSectionWrapper id="news_section">
      <Container noGutter mobileGutter className="container">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Latest News" />
          <Text
            {...secDescription}
            content="Be updated with latest news for exciting prizes, coupons and many more!"
          />
        </Box>
        <Box className="row" {...row} className="row">
          {LatestNews.map((latest, index) => (
            <Box className="col" {...col} key={index}>
              <FeatureBlock
                icon={<img src={latest.img} alt={latest.title} />}
                iconStyle={iconStyle}
                contentStyle={contentStyle}
                title={<Heading content={latest.title} {...featureTitle} />}
                description={
                  <Text content={latest.description} {...featureDescription} />
                }
                button={
                  <Link href="#1">
                    <a>
                      <Button title={latest.buttonText} {...btnStyle} />
                    </a>
                  </Link>
                }
                className="rideLatest"
              />
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
  btnStyle: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  secTitleWrapper: {
    mb: ['65px', '65px', '80px', '90px', '90px'],
    boxShadow: '22px',
  },
  secTitle: {
    fontSize: ['20px', '24px', '24px', '32px', '40px'],
    fontWeight: '600',
    color: '#fff',
    lineHeight: '1.34',
    mb: ['12px', '14px', '14px', '14px', '20px'],
    textAlign: 'center',
    fontFamily: 'Avenir',
  },
  secDescription: {
    fontSize: ['14px', '18px'],
    fontWeight: '400',
    color: '#f1f1f1',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
    width: '500px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
    fontFamily: 'Avenir',
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 2],
  },
  // feature content default style
  contentStyle: {
    textAlign: 'left',
    mt: ['30px', '30px'],
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '24px'],
    lineHeight: '1.5',
    fontWeight: '600',
    color: '#f1f1f1',
    textAlign: 'left',
    fontFamily: 'Avenir',
    mb: '0px',
  },
  // feature description default style
  featureDescription: {
    lineHeight: ['28px', '32px', '32px', '32px', '32px'],
    mt: ['7px', '7px', '7px', '7px', '7px'],
    mb: ['7px', '7px', '7px', '7px', '7px'],
    textAlign: ['left', 'left'],
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#f1f1f1',
    fontFamily: 'Avenir',
  },
  btnStyle: {
    lineHeight: ['28px', '32px', '32px', '32px', '32px'],
    fontSize: ['15px', '16px'],
    fontWeight: '700',
    color: '#190533',
    fontFamily: 'Avenir',
  },
};

export default FeatureSection;
