'use client';
import styled from 'styled-components';
import Link from 'next/link';

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

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  color: white;
  background: #7fba00;
  font-weight: 500;
  transition: all 0.25s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Button)`
  background: #0b2447;
`;

const DangerButton = styled(Button)`
  background: #ff4d4d;
`;

const OutlineButton = styled(Button)`
  background: transparent;
  color: #7fba00;
  border: 2px solid #7fba00;

  &:hover {
    background: #7fba00;
    color: white;
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

export default function ExtendingStylesPage() {
  return (
    <PageWrapper>
      <Title>Extending Styles Example</Title>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button>Primary</Button>
        <SecondaryButton>Secondary</SecondaryButton>
        <DangerButton>Danger</DangerButton>
        <OutlineButton>Outline</OutlineButton>
      </div>

      <BackLink href="/">Back to Home</BackLink>
    </PageWrapper>
  );
}
