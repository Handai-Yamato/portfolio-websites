import { css } from "styled-components";

export const sm = (first, ...interpolations) => css`
  @media (min-width: 640px) {
    ${css(first, ...interpolations)}
  }
`;

export const md = (first, ...interpolations) => css`
  @media (min-width: 768px) and (max-width: 1023px) {
    ${css(first, ...interpolations)}
  }
`;
export const lg = (first, ...interpolations) => css`
  @media (min-width: 1024px) {
    ${css(first, ...interpolations)}
  }
`;
