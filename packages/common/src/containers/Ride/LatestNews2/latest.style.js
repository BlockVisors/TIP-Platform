import styled from 'styled-components';
import BannerBG from '../../../assets/image/crypto/banner-bg.png';


const FeatureSectionWrapper = styled.section`
  padding: 220px 0 120px 0;
  background-image: url(${BannerBG});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  @media (max-width: 990px) {
    padding: 160px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 160px 0 30px 0;
  }
  .row {
    margin-right: -40px;
    @media (max-width: 1440px) {
      margin-right: -30px;

    }
    @media (max-width: 768px) {
      margin-right: -15px;
    }
    @media (max-width: 480px) {
      margin-right: 0px;
    }
  }
  .col {
    margin-right: 40px;
    width: calc(100% / 2 - 40px);
    &:last-child {
      margin-right: 0px;
    }
    @media (max-width: 1440px) {
      margin-right: 30px;
      width: calc(100% / 2 - 30px);
    }
    @media (max-width: 768px) {
      margin-right: 15px;
      width: calc(100% / 2 - 15px);
    }
    @media (max-width: 480px) {
      margin-right: 0px;
      width: 100%;
      margin-bottom: 15px;
    }
  }
  .feature__block {
    padding: 20px 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: 10;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .rideLatest {
    button {
      background: transparent;
      border: 0;
      box-shadow: 0;
      padding: 0;
      margin: 0;
      > span {
        background: transparent;
        padding: 0;
        margin: 0;
      }
    }
  }
`;

export default FeatureSectionWrapper;
