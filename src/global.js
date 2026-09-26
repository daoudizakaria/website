import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    background-color: ${({ theme }) => theme.body};
  }

  body {
    align-items: stretch;
    min-height: 100vh;
    width: 100%;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    background-image:
      radial-gradient(ellipse 80% 50% at 50% -20%, var(--bg-glow-1), transparent 55%),
      radial-gradient(ellipse 60% 40% at 100% 0%, var(--bg-glow-2), transparent 45%),
      linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-mid) 45%, var(--bg-lift) 100%);
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: color 0.25s linear, background-color 0.25s linear;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  ::selection {
    background: rgba(96, 165, 250, 0.35);
    color: var(--text-primary);
  }
`;
