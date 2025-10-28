'use client';
import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f7fbff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background: #ffffff;
  width: 300px;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  h3 {
    color: #0b2447;
  }

  p {
    color: #333;
  }

  @media (max-width: 768px) {
    width: 90%;
    background: #e9f7ef;
  }
`;

const Button = styled.button`
  background: #7fba00;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  font-weight: 600;
  margin-top: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #6aa200;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`;

const StyledLink = styled(Link)`
  color: #7fba00;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

export default function ResponsiveDemo() {
  return (
    <Wrapper>
      <h2 style={{ color: '#000' }}>Responsive Design Example</h2>
      <p style={{ color: '#333', maxWidth: '600px' }}>
        This example shows how media queries work directly inside styled
        components to make layouts mobile-friendly.
      </p>

      <CardContainer>
        <Card>
          <h3>Desktop & Tablet View</h3>
          <p>Each card is 300px wide on large screens.</p>
          <Button>Learn More</Button>
        </Card>

        <Card>
          <h3>Mobile View</h3>
          <p>
            On screens smaller than 768px, cards stretch to 90% width and use a
            light green background.
          </p>
          <Button>Try It</Button>
        </Card>
      </CardContainer>

      <StyledLink href="/">Back to Home</StyledLink>
    </Wrapper>
  );
}
