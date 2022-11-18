import styled, { css } from "styled-components";

export const ThemedTextStyles = css`
  color: ${({ theme }) => theme.color.brand};
  font-family: ${({ theme }) => theme.font.body};
`;

export const ThemedText = styled.p`
  ${ThemedTextStyles}
`;

export const ThemedTitle = styled.h1`
  ${ThemedTextStyles}
`;

export const ThemedButton = styled.button`
  ${ThemedTextStyles}
`;

export const ThemedSectionStyes = css`
  padding: ${({ theme }) => theme.spacing.section};
  background: ${({ theme }) => theme.color.background};
`;

export const ThemedSection = styled.section`
  ${ThemedSectionStyes}
`;

export const ThemedArticle = styled.section`
  ${ThemedSectionStyes}
`;
