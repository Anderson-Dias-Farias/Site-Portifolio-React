import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 33vh;
  backdrop-filter: blur(3px);
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
  display: none;
  transition:.5s;
  transform: translateX(50px);
  margin-top: 40vh;

  > svg {
    
    transform:rotate(45deg);
    transition:.7s;
    
    
  }
  ${({ isVisible }) =>
    isVisible &&
    css`
      display: flex;
      pointer-events: auto;
      transform: translateX(0px);

      >svg{
        transform:rotate(0deg);
      }
    `}
`;

export const ContainerList = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  color: #fff;
`;

export const Button = styled.button`
  width: auto;
  height: auto;
  border: none;
  margin-top: 10px;
`;
export const Menu = styled.a``;
