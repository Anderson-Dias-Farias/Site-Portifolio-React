import { css } from "styled-components";
import styled from "styled-components";

export const Containers = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: center;
  align-items: center;
  transition: 0.9s;
  position: fixed;
  z-index: 200;
  top: 0;

  ${({ scrolled  }) =>
    scrolled  &&
    css`
      background: rgba(0, 0, 0, 0.9);
    `}

    ${( {menuVisible} ) =>
    menuVisible  &&
    css`
      background: rgba(0, 0, 0);
    `}
`;

export const Head = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const Logo = styled.img`
  width: auto;
  height: auto;
  margin-left: 10px;
`;

export const Navs = styled.div`
  display: flex;
  width: 600px;
  height: 8vh;
  margin-right: 10px;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 680px) {
    display: none;
  }
`;

export const Menu = styled.a`
  font-size: larger;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
`;

export const Hamburguer = styled.div`
  display: none;
  @media screen and (max-width: 680px) {
    width: 100px;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Icons = styled.div`
  width: 150px;
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
export const Icon = styled.img`
  width: 30px;
  height: auto;
  padding-right: 10px;
`;
export const Button = styled.button`
  width: 150px;
  height: 50px;
  background: #121212;
  color: #fff;
  border: 1px solid #fff;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: linear-gradient(rgb(81, 99, 149, 0.5), rgba(97, 67, 133, 0.5));
  }
`;
