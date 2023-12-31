import { styled } from "styled-components";

export const Container = styled.header`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Content = styled.div`
  max-width: 1350px;
  height: 72px;
  padding: 0 10px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  position: relative;
`;