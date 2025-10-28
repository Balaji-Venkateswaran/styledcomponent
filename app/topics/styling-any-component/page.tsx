'use client';
import styled from 'styled-components';
import Link from 'next/link';

const Card = ({
  title,
  desc,
  className,
}: {
  title: string;
  desc: string;
  className?: string;
}) => (
  <div className={className}>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

const StyledCard = styled(Card)`
  background: #ffffff;
  padding: 1.8rem;
  border-radius: 14px;
  width: 320px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  h3 {
    color: #000;
    margin-bottom: 0.4rem;
  }

  p {
    color: #000;
    line-height: 1.5;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
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

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f7fbff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h2 {
    color: #000;
  }
`;

export default function StylingAnyComponent() {
  return (
    <PageWrapper>
      <h2>Styling Any Component Example</h2>

      <StyledCard
        title="Styled Custom Component"
        desc="This card is a normal React component wrapped with styled()!"
      />

      <StyledLink href="/">Back to Home</StyledLink>
    </PageWrapper>
  );
}
