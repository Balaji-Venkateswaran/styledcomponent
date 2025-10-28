'use client';
import styled, { css } from 'styled-components';
import Link from 'next/link';

const cardStyle = css`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const buttonStyle = css`
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f7fbff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Card = styled.div`
  ${cardStyle}; 
  width: 320px;
  text-align: center;
`;

const PrimaryButton = styled.button`
  ${buttonStyle}; 
  background: #7fba00;
  color: white;

  &:hover {
    background: #6aa200;
  }
`;

const SecondaryButton = styled.button`
  ${buttonStyle};
  background: #0b2447;
  color: white;

  &:hover {
    background: #091a33;
  }
`;

const StyledLink = styled(Link)`
  color: #7fba00;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

export default function MixinsExample() {
  return (
    <Wrapper>
      <h2 style={{ color: '#000' }}>Mixins and Helper Functions</h2>
      <p style={{ color: '#333', textAlign: 'center', width: '340px' }}>
        Mixins help define reusable CSS snippets so you can keep your code DRY
        (Don’t Repeat Yourself).
      </p>

      <Card>
        <h3 style={{ color: '#000' }}>Reusable Card</h3>
        <p style={{ color: '#000' }}>This card uses a reusable card shadow and padding mixin.</p>
      </Card>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <PrimaryButton>Primary Button</PrimaryButton>
        <SecondaryButton>Secondary Button</SecondaryButton>
      </div>

      <StyledLink href="/">Back to Home</StyledLink>
    </Wrapper>
  );
}
