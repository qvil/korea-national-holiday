import React from "react";
import styled from "styled-components";
// import styled, { keyframes } from "styled-components";
import flag from "images/flag.png";

// const flutter = keyframes`
//   100% {
//     transform: translateY(5px) rotate(0.01deg);
//   }
// `;
const flagHeight = 60;
const StyledFlag = styled.div`
  background-image: url(${flag});
  width: 90px;
  height: ${flagHeight}px;
  border: 1px solid black;
  top: ${flagHeight}px;
  transition: 1s;
  &:hover {
    margin-bottom: ${flagHeight * 2}px;
  }
  margin-bottom: ${props => (props.up ? flagHeight * 2 : 0)}px;
`;

/**
 * How to relatively resize image
 */
// const EnhancedFlag = StyledFlag.withComponent("img").extend`
//   src: ${flag};
//   max-width: 100%;
//   max-height: 100%;
//   object-fit: fill;
// `;

// animation: ${flutter} 1s linear infinite;
// animation: ${flutter} 1s ease-int-out infinite alternate;

const FlagPole = styled.div`
  background-color: black;
  width: 5px;
  height: ${flagHeight * 3}px;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Flag = ({ up }) => {
  return (
    <Container>
      <FlagPole />
      <StyledFlag up={up} />
      {/* <EnhancedFlag /> */}
    </Container>
  );
};

export default Flag;
