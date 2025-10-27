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
  background: #7fba00;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.25s ease;

  /* 🎨 Pseudo-selectors */
  &:hover {
    background: #6aa200;
    transform: translateY(-2px);
  }

  &:active {
    background: #5c9200;
    transform: translateY(1px);
  }

  &:focus {
    outline: 3px solid #c9f09f;
    outline-offset: 2px;
  }
`;

const InfoBox = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  width: 360px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  ul {
    padding-left: 1.2rem;
    color: #333;
  }

  li {
    margin-bottom: 0.5rem;
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

export default function PseudoSelectorsPage() {
  return (
    <PageWrapper>
      <Title>Pseudo-Selectors in Styled Components</Title>

      <Button>Hover, Focus, or Click Me </Button>

      <InfoBox>
        <h4>Explanation</h4>
        <ul>
          <li><strong>&:hover</strong> — When you move your mouse over the button.</li>
          <li><strong>&:active</strong> — When you press down the button.</li>
          <li><strong>&:focus</strong> — When the button is selected.</li>
        </ul>
      </InfoBox>

      <BackLink href="/">Back to Home</BackLink>
    </PageWrapper>
  );
}
