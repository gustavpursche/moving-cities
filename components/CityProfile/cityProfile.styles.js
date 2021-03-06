import { css } from '@emotion/react';

export const container = css`
  position: relative;
`;

export const title = css`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;

export const blocksContainer = css`
  max-width: 66.2rem;
`;

export const toCountryLink = css`
  border: 1px solid currentColor;
  border-radius: 2rem;
  align-items: center;
  display: flex;
  flex-grow: 0;
  font-size: 1.7rem;
  line-height: 1.2;
  max-width: 25rem;
  padding: 0.75rem 1.25rem;
  width: max-content;

  @media (min-width: 768px) {
    padding: 0.5rem 1.5rem;
    position: absolute;
    right: 0;
    top: 0;
  }

  :hover,
  :focus {
    background-color: var(--color-red);
    cursor: pointer;
  }
`;

export const toCountryProfileIcon = css`
  flex-shrink: 0;
  margin-right: 0.5rem;
`;

export const toCountryProfileLabel = css``;
