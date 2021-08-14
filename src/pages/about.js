import * as React from 'react';
import Layout from '../components/layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBaby,
  faSchool,
  faPaw,
  faVideo,
  faHandshake,
  faChalkboardTeacher,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';

import { StaticImage } from 'gatsby-plugin-image';

import styled from 'styled-components';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
      <VerticalTimeline layout='1-column-left'>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={
            <FontAwesomeIcon size={'fa-lg'} icon={faVideo} className="icon" />
          }
        >
          <Header>Senior Developer</Header>
          <SubHeader>Atlanta, GA - February 2021</SubHeader>
          <p>
            <ExternalLink target="_blank" href="https://www.warnermedia.com/us">
              WarnerMedia
            </ExternalLink>{' '}
            promoted me to Senior Systems/Software Developer. I became more
            involved in the design and planning of our applications and
            spearhead our team internship program.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={
            <FontAwesomeIcon size={'fa-lg'} icon={faVideo} className="icon" />
          }
        >
          <Header>Adopted Morty</Header>
          <SubHeader>Atlanta, GA - September 2020</SubHeader>
          <p></p>
          <StaticImage
            alt="Me and Morty"
            src="../images/morty1.jpeg"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={
            <FontAwesomeIcon size={'fa-lg'} icon={faVideo} className="icon" />
          }
        >
          <Header>Junior Developer</Header>
          <SubHeader>Atlanta, GA - End of 2019</SubHeader>
          <p>
            <ExternalLink target="_blank" href="https://www.warnermedia.com/us">
              WarnerMedia
            </ExternalLink>{' '}
            hired me full-time as a Junior Systems/Software Developer. I
            started using AWS and improveed my ReactJS and NodeJS skill.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={
            <FontAwesomeIcon size={'fa-lg'} icon={faVideo} className="icon" />
          }
        >
          <Header>WarnerMedia Internship II</Header>
          <SubHeader>Atlanta, GA - Summer 2019</SubHeader>
          <p>
            Started my second internship with{' '}
            <ExternalLink target="_blank" href="https://www.warnermedia.com/us">
              WarnerMedia
            </ExternalLink>{' '}
            (formerly Turner Broadcasting) as a Web Development Intern in the
            Media Supply Chain Organization. Rebuilt the front-end for the
            internal WarnerMedia application that keeps track of all movies and
            episodes that have aired on a Turner TV Broadcast or Streaming
            Service.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={
            <FontAwesomeIcon size={'fa-lg'} icon={faBolt} className="icon" />
          }
        >
          <Header>Partner Software Internship II</Header>
          <SubHeader>Athens, GA - End of 2018 and Start of 2019</SubHeader>
          <p>
            Started my second internship with{' '}
            <ExternalLink
              target="_blank"
              href="https://www.partnersoftware.com/"
            >
              Partner Software
            </ExternalLink>{' '}
            Developed a feature that bundles up the applications logs and sends
            them to a company slack channel on application crash. With this
            improved system, we no longer needed to coordinate with clients to
            find out why their app crashed and we were able to fix bugs 3x-4x
            faster in most cases.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={
            <FontAwesomeIcon size={'fa-lg'} icon={faVideo} className="icon" />
          }
        >
          <Header>Turner Broadcasting Internship I</Header>
          <SubHeader>Atlanta, GA - Summer 2018</SubHeader>
          <p>
            Started my first internship with{' '}
            <ExternalLink target="_blank" href="https://www.warnermedia.com/us">
              Turner Broadcasting
            </ExternalLink>{' '}
            as a Web Development Intern in the Global Technology Organization.
          </p>
          <p>
            This is when I got my first taste of web development. I learned how
            to navigate my way around a professional codebase and strengthened
            my HTML, CSS, and JavaScript skills.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={
            <FontAwesomeIcon size={'fa-lg'} icon={faBolt} className="icon" />
          }
        >
          <Header>Partner Software Internship I</Header>
          <SubHeader>Athens, GA - 2018</SubHeader>
          <p>
            Started my first internship with{' '}
            <ExternalLink
              target="_blank"
              href="https://www.partnersoftware.com/"
            >
              Partner Software
            </ExternalLink>{' '}
            as a Development Intern.
          </p>
          <p>
            Got my first taste of working in an Agile environment, migrated code
            from depreciated bean shell scripts to modern Java classes for
            improved maintainability and improved the UI for electrical grid
            mapping system.
          </p>
          <p>
            Made some of my best computer science friends here and learned what
            it&apos;s like to do computer science professionally
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: '7px solid  #199615' }}
          iconStyle={iconStyle}
          icon={
            <FontAwesomeIcon
              size={'fa-lg'}
              icon={faChalkboardTeacher}
              className="icon"
            />
          }
        >
          <Header>Kids 4 Coding</Header>
          <SubHeader>Lawrenceville, GA - Summer 2017</SubHeader>
          <p>
            Joined{' '}
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
          icon={
            <FontAwesomeIcon
              size={'fa-lg'}
              icon={faHandshake}
              className="icon"
            />
          }
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
          icon={
            <FontAwesomeIcon size={'fa-lg'} icon={faPaw} className="icon" />
          }
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
          icon={
            <FontAwesomeIcon size={'fa-lg'} icon={faSchool} className="icon" />
          }
        >
          <Header>Highschool</Header>
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
          icon={
            <FontAwesomeIcon size={'fa-lg'} icon={faBaby} className="icon" />
          }
        >
          <Header>Birth</Header>
          <SubHeader>March 26, Atlanta, GA</SubHeader>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Layout>
  );
};

export default AboutPage;
