import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-height: 115vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  @media screen and (max-width: 900px) {
    max-height: 1305vh;
  }
`;

export const DivForm = styled.div`
  width: 95%;
  max-width: 1200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const H = styled.h1`
  color: white;
  font-size: xx-large;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ContactForm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 25%;
  }
`;

export const Contact = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 50%;
  height: auto;
  @media screen and (max-width: 768px) {
    width: 30%;
    height: auto;
  }
`;

export const Forms = styled.form`
  width: 50%;
  height: 80%;
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const SpanT = styled.span`
  color: white;
  margin-top: 5px;
`;

export const Span = styled.span`
  margin-top: 5px;
`;
export const ErrorSpan = styled.span`
  color: red;
`;
export const Icons = styled.div`
  width: 200px;
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
export const DivInp = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 900px) {
    width: 90%;
    height: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
`;

export const ImputT = styled.input`
  width: 100%;
  height: auto;
  border: none;
  border-bottom: 2px solid white;
  background-color: transparent;
  color: wheat;
  font-size: medium;

  &:focus {
    border-bottom: 2px solid red;
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const Area = styled.textarea`
  width: 100%;
  height: 150px;
  &:focus {
    border: 2px solid red;
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const DivS = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: end;
`;

export const Button = styled.input`
  width: 160px;
  height: 50px;
  background-color: #000;
  border-color: white;
  color: white;
  font-size: large;
  cursor: pointer;
`;
