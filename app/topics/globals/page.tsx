'use client';
import { createGlobalStyle } from 'styled-components';
import Link from 'next/link';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fffbe6;
    font-family: 'Segoe UI', sans-serif;
  }
`;

export default function GlobalDemo() {
  return (
    <>
      <GlobalStyle />
      <div style={{ padding: '3rem' }}>
        <h2>Global Style Example</h2>
        <p>This page has a custom background applied via createGlobalStyle.</p>
        <Link href="/">⬅ Back to Home</Link>
      </div>
    </>
  );
}
