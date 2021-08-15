import React, { useState } from 'react';
import styled from 'styled-components';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  position: absolute;
  ${(props) => props.prev && 'left: 10px;'}
  ${(props) => props.next && 'right: 10px;'}

  top: calc(50% - 15px);
  background: white;
  color: black;
  border-radius: 10px;

  &:hover {
    background-color: #199615;
    color: white;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Image = ({ index, tag }) => {
  const allImages = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 750, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  if (!allImages?.allImageSharp?.edges?.[index]?.node?.fluid) {
    return <div>Picture not found</div>;
  }

  // Filter out wrong tags
  const images = allImages?.allImageSharp?.edges
    .filter((image) => image.node.fluid.src.includes(tag))
    .sort((imageA, imageB) => {
      imageA = imageA.node.fluid.src;
      imageB = imageB.node.fluid.src;

      const imageANum = parseInt(imageA.charAt(imageA.length - 5)); // (...)1.jpeg
      const imageBNum = parseInt(imageB.charAt(imageB.length - 5));

      return imageANum - imageBNum;
    });

  return <Img className="no-select" fluid={images[index].node.fluid} />;
};

Image.propTypes = {
  index: PropTypes.number,
  tag: PropTypes.string,
};

const ImageSlider = ({ numImages, tag }) => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    if (index > 0) setIndex(index - 1);
  };
  const handleNext = () => {
    if (index < numImages - 1) setIndex(index + 1);
  };

  return (
    <Container>
      <Image index={index} tag={tag} />

      {index > 0 && (
        <Button
          prev
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
      )}

      {index < numImages - 1 && (
        <Button
          next
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      )}
    </Container>
  );
};

ImageSlider.propTypes = {
  numImages: PropTypes.number,
  tag: PropTypes.string,
};

export default ImageSlider;
