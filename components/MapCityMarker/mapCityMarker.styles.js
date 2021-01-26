import { css, cx } from '@emotion/react';

const ICON_BASE = css`
  cursor: pointer;
  filter: drop-shadow(0 0 0.2rem var(--color-yellow));
`;

export const container = css`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const icon = css`
  ${ICON_BASE}
  height: 1.5rem;
  width: 1.5rem;
`;

export const profileIcon = css`
  ${ICON_BASE}
  height: 2rem;
  width: 2rem;
`;

export const name = css`
  color: var(--color-blue);
  font-family: var(--font-sans);
  font-size: 1.1rem;
`;