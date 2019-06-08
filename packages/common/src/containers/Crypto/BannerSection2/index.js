import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../../reusecore/src/elements/Box';
import Text from '../../../../../reusecore/src/elements/Text';
import Heading from '../../../../../reusecore/src/elements/Heading';
import Button from '../../../../../reusecore/src/elements/Button';
import Image from '../../../../../reusecore/src/elements/Image';
import FeatureBlock from '../../../components/FeatureBlock';
import Container from '../../../components/UI/Container';
import Particles from '../../Agency/Particle';
import { Icon } from 'react-icons-kit';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { facebook2 } from 'react-icons-kit/icomoon/facebook2';
//import BannerBG from '../../../assets/image/crypto/white_bg1.svg';
import BannerBG from '../../../assets/image/crypto/banner-bg.png';

import BannerWrapper, { BgImageWrapper } from './bannerSection.style';
import { EmailInputWrapper } from '../../Ride/Banner/banner.style';
import Input from 'reusecore/src/elements/Input';
import Link from 'next/link';



const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
  button
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <Button title="Get Started" {...btnStyle} />
      <Button
        title="Get Whitepaper"
        variant="textButton"
        icon={<i className="flaticon-next" />}
        {...outlineBtnStyle}
      />
    </Fragment>
  );
  const ButtonGroup2 = () => (
    <Fragment>
      <Button title="Buy TPROP" {...btnStyle} />
      <Button
        title="Get One Pager"
        variant="textButton"
        icon={<i className="flaticon-next" />}
        {...outlineBtnStyle}
      />
    </Fragment>
  );
  const ShareButtonGroup = () => (
    <Fragment>
      <Button
        title="Share on Twitter"
        variant="textButton"
        iconPosition="left"
        icon={<Icon icon={socialTwitter} />}
        {...outlineBtnStyle}
        className="btnWithoutColor"
      />
      <Button
        title="Share on Facebook"
        variant="textButton"
        iconPosition="left"
        icon={<Icon icon={facebook2} />}
        {...outlineBtnStyle}
        className="btnWithoutColor"
      />
    </Fragment>
  );
  return (
    <BannerWrapper id="banner_section">
      <Particles />
      <BgImageWrapper>
        <Image src={BannerBG} alt="banner background" />
      </BgImageWrapper>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={
                <Heading
                  content="All Properties"
                  {...title}
                />
              }
              description={
                <Text
                  content="See all property invesments on our platform below"
                  {...description}
                />
              }
        
            />
            <EmailInputWrapper>
              <Input
                inputType="email"
                placeholder="Enter info"
                iconPosition="left"
              />
              <Link href="#fare_section">
                <a>
                  <Button title="Search Properties" {...button} />
                </a>
              </Link>
            </EmailInputWrapper>
            {/* <FeatureBlock button={<ButtonGroup2 />} />
            <FeatureBlock button={<ShareButtonGroup />} /> */}
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '100%', '60%', '65%'],
  },
  title: {
    fontSize: ['26px', '34px', '42px', '42px', '47px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
  },
  description: {
    fontSize: ['14px', '16px', '18px', '18px', '20px'],
    color: '#fff',
    lineHeight: '30px',
    mb: '80px',
    maxWidth: '550px',
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '15px',
    fontWeight: '700',
    borderRadius: '6px',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
    p: '5px 10px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    minHeight: '48px',
    pt: '0px',
    pb: '0',
  },
};

export default BannerSection;
