'use client';
import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.div`
  padding: 4rem;
  background: #f4faff;
  min-height: 100vh;
`;

const Title = styled.h2`
  color: #0b2447;
`;

const List = styled.ul`
  margin-top: 2rem;
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  margin: 1rem 0;
`;

const TopicLink = styled(Link)`
  color: #7fba00;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function TopicsPage() {
  return (
    <Wrapper>
      <Title>Select a Topic</Title>
      <List>
        <Item><TopicLink href="/topics/basics">Styled Basics</TopicLink></Item>
        <Item><TopicLink href="/topics/themes">Themes</TopicLink></Item>
        <Item><TopicLink href="/topics/globals">Global Styles</TopicLink></Item>
        <Item><TopicLink href="/topics/nesting">Nesting</TopicLink></Item>
        <Item><TopicLink href="/topics/pseudo-selectors">Pseudo-Selectors</TopicLink></Item>
        <Item><TopicLink href="/topics/props">Props</TopicLink></Item>
        <Item><TopicLink href="/topics/extending-styles">Extending Styles</TopicLink></Item>


      </List>
    </Wrapper>
  );
}
