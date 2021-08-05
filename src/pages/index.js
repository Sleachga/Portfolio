import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

import styled from "styled-components";
import "./css/fonts.css";
import "./css/global.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import Typewriter from "typewriter-effect";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.div`
  padding-right: 4px;
`;

const IndexPage = () => {
  return (
    <Layout pageTitle="Hey there 👋">
      <div>
        <p>I'm Sanford. I'm a full-stack Javascript developer.</p>
        <Container>
          <Text>Welcome to my</Text>
          <Typewriter
            options={{
              strings: [
                " personal site",
                " blog",
                " portfolio",
                " creative space",
              ],
              deleteSpeed: 20,
              autoStart: true,
              delay: 50,
              cursor: "",
              loop: true,
            }}
          />
        </Container>
      </div>
      <p>
        Click on the links above <FontAwesomeIcon icon={faArrowUp} /> to learn
        more about me
      </p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/profile.jpeg"
      />
    </Layout>
  );
};

export default IndexPage;
