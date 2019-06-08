import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';
import { Icon } from 'react-icons-kit';
import Box from '../../../../../reusecore/src/elements/Box';
import Text from '../../../../../reusecore/src/elements/Text';
import Heading from '../../../../../reusecore/src/elements/Heading';
import Image from '../../../../../reusecore/src/elements/Image';
import Container from '../../../components/UI/Container';

import {
  SkillItem,
  SkillDetails,
  SkillProgress,
  SuccessRate,
  ProgressBar,
  SkillIcon,
  SkillAbout,
} from './skill.style';
import { SKILLS } from '../../../data/Portfolio/data';
import { ic_thumb_up } from 'react-icons-kit/md/ic_thumb_up';

const SkillSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  row,
  col,
  skillTitle,
  skillDescription,
  skillSuccessRate,
  successRateText,
}) => {
  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="For Property Developers" />
          <Text
            {...secDescription}
            content="TokenProp facilitates Developers and Property Owners to raise the Capital they need quickly and more efficiently"
          />
        </Box>

        <Box {...row}>
          {SKILLS.map((item, index) => (
            <Box {...col} key={`skill-item-${index}`}>
              <SkillItem>
                <SkillDetails>
                  <SkillIcon>
                    <Image src={item.icon} alt={`skill-icon-${index + 1}`} />
                  </SkillIcon>
                  <SkillAbout>
                    <Heading content={item.title} {...skillTitle} />
                    <Text content={item.description} {...skillDescription} />
                  </SkillAbout>
                </SkillDetails>
                <SkillProgress>
                  <SuccessRate>
                    <Icon
                      icon={ic_thumb_up}
                      size={12}
                      className="skill_success_icon"
                    />
                    <Text
                      as="span"
                      content={`${item.successRate}% `}
                      {...skillSuccessRate}
                    />
                    <Text
                      as="span"
                      content="Success Rate"
                      {...skillSuccessRate}
                      {...successRateText}
                    />
                  </SuccessRate>
                  <ProgressBar>
                    <Line
                      percent={item.successRate}
                      strokeWidth="1.8"
                      trailWidth="1.8"
                      strokeColor="#3444f1"
                      trailColor="#e3e7f2"
                    />
                  </ProgressBar>
                </SkillProgress>
              </SkillItem>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

SkillSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  skillTitle: PropTypes.object,
  skillDescription: PropTypes.object,
  skillSuccessRate: PropTypes.object,
  successRateText: PropTypes.object,
};

SkillSection.defaultProps = {
  sectionWrapper: {
    pt: ['100px', '120px', '140px', '150px', '180px'],
    pb: ['150px', '160px', '160px', '180px', '210px'],
    bg: '#B8B9BB',
  },
  secTitleWrapper: {
    mb: ['65px', '65px', '80px', '90px', '105px'],
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center',
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
    width: '600px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-15px', '-15px', '-15px', '-25px', '-25px'],
    mr: ['-15px', '-15px', '-15px', '-25px', '-25px'],
  },
  col: {
    width: [1, 1, 1 / 2],
    pl: ['15px', '15px', '15px', '25px', '25px'],
    pr: ['15px', '15px', '15px', '25px', '25px'],
    mb: ['30px', '30px', '30px', '50px', '50px'],
  },
  skillTitle: {
    fontSize: ['16px', '18px', '18px', '20px', '20px'],
    fontWeight: '600',
    color: '#302b4e',
    mb: '12px',
  },
  skillDescription: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
  },
  skillSuccessRate: {
    fontSize: ['15px', '15px', '14px', '15px', '16px'],
    fontWeight: '400',
    color: '#302b4e',
    lineHeight: '1.5',
    mb: '0',
  },
  successRateText: {
    ml: '.3em',
    display: ['none', 'none', 'none', 'none', 'inline-block'],
  },
};

export default SkillSection;
