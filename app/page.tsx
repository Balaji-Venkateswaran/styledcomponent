'use client';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f7fbff;
`;

const Title = styled.h1`
  color: #0b2447;
  margin-bottom: 2rem;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  padding: 0.8rem 1.4rem;
  border-radius: 10px;
  background: #7fba00;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s ease;
  &:hover {
    background: #6aa200;
  }
`;

export default function Home() {
  return (
    <Container>
      <Title>Styled-Components Learning Hub 💅</Title>
      <Nav>
        <NavLink href="/topics/basics">Styled Basics</NavLink>
        <NavLink href="/topics/themes">Themes</NavLink>
        <NavLink href="/topics/globals">Global Styles</NavLink>
        <NavLink href="/topics/nesting">Nesting</NavLink>
      </Nav>
    </Container>
  );
}
