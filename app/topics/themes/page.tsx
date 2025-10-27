'use client';
import styled, { ThemeProvider } from 'styled-components';
import Link from 'next/link';

const lightTheme = { bg: '#f4faff', text: '#0b2447', accent: '#7fba00' };

const Wrapper = styled.div`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  padding: 3rem;
  min-height: 100vh;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.accent};
  border: none;
  padding: 0.6rem 1.2rem;
  color: white;
  border-radius: 8px;
`;

export default function ThemeDemo() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Wrapper>
        <h2>Theme Example</h2>
        <Button>Primary Button</Button>
        <p><Link href="/">⬅ Back to Home</Link></p>
      </Wrapper>
    </ThemeProvider>
  );
}
