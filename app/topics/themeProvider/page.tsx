'use client';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';

const lightTheme = {
  bg: '#f4faff',
  text: '#0b2447',
  accent: '#7fba00',
};

const darkTheme = {
  bg: '#0b2447',
  text: '#ffffff',
  accent: '#7fba00',
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.accent};
  color: white;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background: #6aa200;
  }
`;

const ToggleButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.text};
  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.bg};
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

export default function ThemeDemo() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Wrapper>
        <h2>Theming with ThemeProvider</h2>
        <p>
          The current theme is: <strong>{isDark ? 'Dark 🌙' : 'Light ☀️'}</strong>
        </p>

        <Button>Primary Action</Button>
        <ToggleButton onClick={() => setIsDark(!isDark)}>
          Toggle Theme
        </ToggleButton>

        <StyledLink href="/">Back to Home</StyledLink>
      </Wrapper>
    </ThemeProvider>
  );
}
