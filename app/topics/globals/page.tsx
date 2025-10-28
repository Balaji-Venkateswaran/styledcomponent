'use client';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Link from 'next/link';

const theme = {
  bg: '#fefefe',
  text: '#0b2447',
  accent: '#7fba00',
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
  }

  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline;
  }

  * {
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 1.5rem;
  text-align: center;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  width: 400px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background: ${({ theme }) => theme.accent};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;

  &:hover {
    background: #6aa200;
  }
`;

export default function GlobalDemoPage() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle /> {/* Inject global styles once */}
      <Wrapper>
        <h1>🌍 Global Styles Example</h1>
        <p>
          This entire page shares the same font, background, and colors —
          defined once using <strong>createGlobalStyle()</strong>.
        </p>

        <Card>
          <h2>Inside a Card</h2>
          <p>
            Even though this text is inside a component, it follows global text
            color and font.
          </p>
          <Button>Click Me</Button>
        </Card>

        <p>
        <Link href="/">Back to Home</Link>
        </p>
      </Wrapper>
    </ThemeProvider>
  );
}
