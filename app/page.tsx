// 'use client';
// import styled from 'styled-components';
// import Link from 'next/link';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background: #f7fbff;
// `;

// const Title = styled.h1`
//   color: #0b2447;
//   margin-bottom: 2rem;
// `;

// const Nav = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const NavLink = styled(Link)`
//   padding: 0.8rem 1.4rem;
//   border-radius: 10px;
//   background: #7fba00;
//   color: #fff;
//   text-decoration: none;
//   font-weight: 500;
//   transition: background 0.2s ease;
//   &:hover {
//     background: #6aa200;
//   }
// `;

// export default function Home() {
//   return (
//     <Container>
//       <Title>Styled-Components Learning Hub</Title>
//       <Nav>
//         <NavLink href="/topics/basics">Styled Basics</NavLink>
//         <NavLink href="/topics/themes">Themes</NavLink>
//         <NavLink href="/topics/globals">Global Styles</NavLink>
//         <NavLink href="/topics/nesting">Nesting</NavLink>
//         <NavLink href="/topics/pseudo-selectors">Pseudo-Selectors</NavLink>
//         <NavLink href="/topics/props">Props</NavLink>
//         <NavLink href="/topics/extending-styles">Extending Styles</NavLink>
//         <NavLink href="/topics/styling-any-component">Styling Any Component</NavLink>
//         <NavLink href="/topics/themeProvider">Theme Provider</NavLink>

//       </Nav>
//     </Container>  
//   );
// }


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
  padding: 2rem;
`;

const Title = styled.h1`
  color: #0b2447;
  margin-bottom: 2rem;
`;

const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
`;

const NavLink = styled(Link)`
  flex: 1 1 calc(25% - 1.5rem); /* 4 buttons per row */
  min-width: 200px;
  text-align: center;
  padding: 1.2rem 1rem;
  border-radius: 12px;
  background: #7fba00;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.25s ease, transform 0.2s ease;

  &:hover {
    background: #6aa200;
    transform: translateY(-3px);
  }
`;

export default function Home() {
  return (
    <Container>
      <Title>Styled-Components Learning Hub</Title>
      <Nav>
        <NavLink href="/topics/basics">Styled Basics</NavLink>
        <NavLink href="/topics/themes">Themes</NavLink>
        <NavLink href="/topics/globals">Global Styles</NavLink>
        <NavLink href="/topics/nesting">Nesting</NavLink>
        <NavLink href="/topics/pseudo-selectors">Pseudo-Selectors</NavLink>
        <NavLink href="/topics/props">Props</NavLink>
        <NavLink href="/topics/extending-styles">Extending Styles</NavLink>
        <NavLink href="/topics/styling-any-component">Styling Any Component</NavLink>
        <NavLink href="/topics/themeProvider">Theme Provider</NavLink>
        <NavLink href="/topics/animations">Animations</NavLink>
        <NavLink href="/topics/mixins">Mixins</NavLink>
        <NavLink href="/topics/responsive">Responsive Design</NavLink>
        <NavLink href="/topics/advanced-patterns">Advanced Patterns</NavLink>
        <NavLink href="/topics/miniProject">Mini Project</NavLink>
      </Nav>
    </Container>
  );
}

