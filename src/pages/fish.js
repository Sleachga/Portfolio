import * as React from "react";
import Layout from "../components/layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

const Challenges = () => {
  return (
    <Layout page="fish" pageTitle="Feed the Fish">
      <p>
        In construction (don&apos;t worry... they'll be swimming soon) <FontAwesomeIcon icon={faWrench} />
      </p>
    </Layout>
  );
};

// TODO: maybe put a box bottom left that explains this page (click)

export default Challenges;
