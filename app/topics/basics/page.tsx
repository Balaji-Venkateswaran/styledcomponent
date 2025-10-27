'use client';
import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.div`
  padding: 3rem;
  background-color: #f7fbff;
  min-height: 100vh;  
  color: #0b2447; 
`;

const Title = styled.h2`
  color: #0b2447;
`;

const Back = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  color: #7fba00;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Basics() {
  return (
    <Wrapper>
      <Title>Styled Components Basics</Title>
      <p>Learn how to create and use styled components in Next.js.</p>
      <Back href="/">Back to Home</Back>
    </Wrapper>
  );
}
