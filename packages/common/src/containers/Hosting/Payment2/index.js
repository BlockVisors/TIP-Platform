import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Image from 'reusecore/src/elements/Image';
import Container from '../../../components/UI/Container';

import CardImage from '../../../assets/image/hosting/pay-card.png';
import PayLogos from '../../../assets/image/hosting/pay-logo.png';

const PaymentSection = ({
  sectionWrapper,
  row,
  col,
  title,
  subTitle,
  description,
  city,
  button,
  textArea,
  imageArea,
  imageOne,
  imageTwo,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...row}>
          <Box {...col} {...textArea}>
            <Fade bottom cascade>
              <Heading
                {...title}
                content="Property Name"
              />
              <Heading
                {...subTitle}
                content="We have supported all payment gateways on domain hosting"
              />
              <Text
                {...city}
                content="Dubai, UAE"
              />
              <Text
                {...description}
                content="Luxurious condo building offering top of the class amenities. New construction in 2018."
              />
              <Box>
                <Link href="#">
                  <a>
                    <Button {...button} title="BUY NOW" />
                  </a>
                </Link>
              </Box>
            </Fade>
          </Box>
          <Box {...col} {...imageArea}>
            <Fade right>
              <Image {...imageOne} src={CardImage} alt="Card Image" />
            </Fade>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

PaymentSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageOne: PropTypes.object,
  imageTwo: PropTypes.object,
};

PaymentSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '120px', '180px'],
    pb: ['30px', '30px', '30px', '68px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%'],
    mb: ['40px', '40px', '0', '0', '0'],
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '58%'],
  },
  title: {
    fontSize: ['26px', '38px', '38px', '48px', '48px'],
    fontWeight: '300',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '40px',
  },
  subTitle: {
    fontSize: ['18px', '24px', '24px', '30px', '30px'],
    fontWeight: '200',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '40px',
  },
  description: {
    fontSize: '16px',
    color: 'textColor',
    lineHeight: '1.75',
    mb: '33px',
  },
  city: {
    fontSize: '18x',
    fontWeight: '600',
    color: 'textColor',
    lineHeight: '1.75',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  imageOne: {
    mb: '40px',
    ml: 'auto',
    mr: 'auto',
  },
  imageTwo: {
    ml: 'auto',
    mr: 'auto',
  },
};

export default PaymentSection;
