import * as React from 'react';
import Layout from '../components/layout';
import ImageSlider from '../components/ImageSlider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBaby,
  faSchool,
  faPaw,
  faBriefcase,
  faHandshake,
  faChalkboardTeacher,
  faUtensils,
  faGraduationCap,
  faBicycle,
} from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { StaticImage } from 'gatsby-plugin-image';

const Header = styled.h3`
  margin: 0;
  font-weight: 800;
`;

const SubHeader = styled.h5`
  font-style: italic;
  margin: 0;
`;

const ExternalLink = styled.a`
  color: white;
`;

const AboutPage = () => {
  const iconStyle = {
    background: '#199615',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
  };

  const contentStyle = { background: '#199615', color: '#fff' };

  return (
    <Layout wide page="about" pageTitle="About Me">
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={<FontAwesomeIcon icon={faBriefcase} className="icon" />}
        >
          <Header>Senior Developer</Header>
          <SubHeader>Atlanta, GA - February 2021</SubHeader>
          <p>
            <ExternalLink target="_blank" href="https://www.warnermedia.com/us">
              WarnerMedia
            </ExternalLink>{' '}
            promoted me to Senior Systems/Software Developer.
          </p>
          <p>
            I became more involved in the design and planning of our
            applications and spearheaded our team internship program.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={<FontAwesomeIcon icon={faPaw} className="icon" />}
        >
          <Header>Adopted Morty</Header>
          <SubHeader>Atlanta, GA - September 2020</SubHeader>
          <p></p>
          <ImageSlider numImages={3} tag="morty" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={<FontAwesomeIcon icon={faUtensils} className="icon" />}
        >
          <Header>Started Cooking</Header>
          <SubHeader>Atlanta, GA - Summer 2020</SubHeader>
          <p>
            Discovered my passion for cooking after being forced to cook for
            myself every day due to COVID-19
          </p>
          <p></p>
          <ImageSlider numImages={3} tag="food" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={<FontAwesomeIcon icon={faBriefcase} className="icon" />}
        >
          <Header>Junior Developer</Header>
          <SubHeader>Atlanta, GA - End of 2019</SubHeader>
          <p>
            <ExternalLink target="_blank" href="https://www.warnermedia.com/us">
              WarnerMedia
            </ExternalLink>{' '}
            hired me full-time as a Junior Systems/Software Developer. I started
            using AWS and improveed my ReactJS and NodeJS skill.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={<FontAwesomeIcon icon={faBicycle} className="icon" />}
        >
          <Header>Started Cycling</Header>
          <SubHeader>Atlanta, GA - Summer 2019</SubHeader>
          <p>Discovered my love for cycling.</p>
          <p></p>
          <StaticImage
            alt="bicycle in the grass"
            src="../images/bicycle1.jpeg"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={<FontAwesomeIcon icon={faGraduationCap} className="icon" />}
        >
          <Header>Graduated College</Header>
          <SubHeader>Athens, GA - Summer 2019</SubHeader>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={<FontAwesomeIcon icon={faChalkboardTeacher} className="icon" />}
        >
          <Header>Kids 4 Coding</Header>
          <SubHeader>Lawrenceville, GA - Summer 2017</SubHeader>
          <p>
            <ExternalLink target="_blank" href="https://www.kids4coding.com/">
              Kids 4 Coding
            </ExternalLink>{' '}
            summer camp as a Technology Instructor.
          </p>
          <p>
            Instructed fundamental coding concepts of JavaScript and Python to
            kids ages 8-15.
          </p>
          <p>
            Developed a Web Application in NodeJS and VanillaJS to measure
            students&apos; activity in real time to provide visibility to
            classroom engagement and progress.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={<FontAwesomeIcon icon={faHandshake} className="icon" />}
        >
          <Header>Joined Tau Epsilon Phi Fraternity</Header>
          <SubHeader>Athens, GA - 2015</SubHeader>
          <p>
            Joined my college fraternity where I served as Philanthropy Chair
            and Vice President of Recruitment.
          </p>
          <p>
            As Philanthropy Chair I planned a Battle of the Bands event that
            raised over $10k to help provide school supplies for low-incomne
            children in Georgia.
          </p>
          <p>
            As Vice President of Recruitment I recruited and inducted over 30
            members into our fraternity.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={<FontAwesomeIcon icon={faSchool} className="icon" />}
        >
          <Header>College</Header>
          <SubHeader>Athens, GA - 2015</SubHeader>
          <p>
            Started college at The University of Georgia <br /> (Go Dawgs!)
          </p>

          <p>
            As a freshman, I was determined to be a financial consultant but I
            decided to take an entry-level Java course and fell in love with
            coding.
          </p>
          <p>
            When I realized I was using my computer science homework to
            procrastinate doing any other homework I decided to change my major.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={<FontAwesomeIcon icon={faSchool} className="icon" />}
        >
          <Header>High School</Header>
          <SubHeader>Atlanta, GA</SubHeader>
          <p>Highschool is when I first started learning HTML and CSS. </p>
          <p>
            I was also a 4 time state champion Ultimate Frisbee player and
            founded the local chapter of my youth group.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={<FontAwesomeIcon icon={faBaby} className="icon" />}
        >
          <Header>Birth</Header>
          <SubHeader>March 26, Atlanta, GA</SubHeader>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Layout>
  );
};

export default AboutPage;
