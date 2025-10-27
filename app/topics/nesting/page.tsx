'use client';
import styled from 'styled-components';
import Link from 'next/link';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f7fbff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  width: 360px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: #0b2447;
    margin-bottom: 0.5rem;
  }

  p {
    color: #555;
    line-height: 1.5;
  }

  &:hover h3 {
    color: #7fba00;
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

export default function NestingPage() {
  return (
    <PageWrapper>
      <Card>
        <h3>Styled Components Nesting</h3>
        <p>
          This card demonstrates nested styling. Both the <code>&lt;h3&gt;</code> and <code>&lt;p&gt;</code> tags are styled inside this Card component.
        </p>
        <p>
          When you hover the card, the title color changes using a nested selector.
        </p>
      </Card>

      <BackLink href="/">Back to Home</BackLink>
    </PageWrapper>
  );
}
