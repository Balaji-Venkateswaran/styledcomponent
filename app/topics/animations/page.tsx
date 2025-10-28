'use client';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

// 🎞 Define animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f7fbff; /* light background */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;
   h2 {
    color: #000; 
  }
`;

const FadeInCard = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 14px;
  width: 340px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out;
  color: #000; 

  h3 {
    color: #000; 
    margin-bottom: 0.5rem;
  }
    

  p {
    color: #333;
    line-height: 1.5;
  }
`;

const BounceButton = styled.button`
  background: #7fba00;
  color: #fff;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  animation: ${bounce} 2s infinite;
  transition: background 0.2s ease;

  &:hover {
    background: #6aa200;
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

export default function AnimationDemo() {
  return (
    <Wrapper>
      <h2>Animations with Styled Components</h2> 
      
      <FadeInCard>
        <h3>Fade-In Card</h3>
        <p>
          This card smoothly fades and slides into view using a
          <code> keyframes </code> animation.
        </p>
      </FadeInCard>

      <BounceButton>Bounce Animation</BounceButton>

      <StyledLink href="/">Back to Home</StyledLink>
    </Wrapper>
  );
}
