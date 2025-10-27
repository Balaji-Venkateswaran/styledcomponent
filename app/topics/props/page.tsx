'use client';
import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f7fbff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Title = styled.h2`
  color: #0b2447;
`;

const Button = styled.button<{ primary?: boolean; outline?: boolean }>`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.25s ease;

  background: ${({ primary, outline }) =>
    outline ? 'transparent' : primary ? '#7fba00' : '#0b2447'};

  color: ${({ outline, primary }) =>
    outline ? (primary ? '#7fba00' : '#0b2447') : 'white'};

  border: ${({ outline, primary }) =>
    outline ? (primary ? '2px solid #7fba00' : '2px solid #0b2447') : 'none'};

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: #7fba00;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

export default function PropsPage() {
  const [isPrimary, setIsPrimary] = useState(true);

  return (
    <PageWrapper>
      <Title>Props-Based Styling Example</Title>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button primary>Primary Button</Button>
        <Button>Default Button</Button>
        <Button outline primary>Outline Primary</Button>
        <Button outline>Outline Secondary</Button>
      </div>

      <Button
        primary={isPrimary}
        onClick={() => setIsPrimary(!isPrimary)}
        style={{ marginTop: '1.5rem' }}
      >
        {isPrimary ? 'Switch to Secondary' : 'Switch to Primary'}
      </Button>

      <BackLink href="/">Back to Home</BackLink>
    </PageWrapper>
  );
}
