import styled, { keyframes } from "styled-components";

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  &.frame-in {
    animation: ${frameInAnimation} 3s forwards;
  }

    &.frame-out {
    animation: ${frameInAnimation} 2s backwards;
  }
`;
