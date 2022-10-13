import styled from "styled-components";

export const Centro = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  font-size: large;
  @media screen and (max-width: 768px) {
    top: 70px;
  }
`;

export const H1 = styled.h1`
  font-size: xx-large;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: medium;
  }
`;

export const Box = styled.div`
  position: relative;
  margin: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const Wraper = styled.div`
  display: inline-flex;
`;

export const Wrapers = styled.div`
  display: block;
`;
