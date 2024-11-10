import React from 'react';
import styled from 'styled-components';

const CompassIcon = () => {
  return (
    <CompassContainer>
      <CompassCircle />
      <CompassLines />
      <CompassText />
    </CompassContainer>
  );
};

const CompassContainer = styled.div`
  position: relative;
  width: 200px; /* Adjust size as needed */
  height: 200px;
  background-color: #1e212d; /* Adjust background color */
`;

const CompassCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #007bff; /* Adjust border color */
  background-color: #1e212d;
`;

const CompassLines = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 75px;
    background-color: #007bff;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const CompassText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  color: #fff;
  text-align: center;

  & > div {
    margin-bottom: 5px;
  }
`;

export default CompassIcon;