'use client';
import styled, { css } from 'styled-components';
import Link from 'next/link';

const baseCard = css`
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-4px);
  }
`;

const NotificationCard = styled.div<{
  type?: 'success' | 'error' | 'warning';
}>`
  ${baseCard};
  background: ${({ type }) =>
    type === 'success'
      ? '#e8f5e9'
      : type === 'error'
      ? '#ffebee'
      : type === 'warning'
      ? '#fff8e1'
      : '#f5f5f5'};
  border-left: 6px solid
    ${({ type }) =>
      type === 'success'
        ? '#7fba00'
        : type === 'error'
        ? '#ff4d4d'
        : type === 'warning'
        ? '#ff9800'
        : '#ccc'};
  color: #000;

  h3 {
    margin-bottom: 0.3rem;
    font-size: 1.1rem;
  }

  p {
    color: #444;
    margin: 0;
  }

  /* 📱 Responsive pattern */
  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 1rem;
  }
`;

const ActionButton = styled.button`
  background: #7fba00;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-weight: 600;
  margin-top: 0.8rem;
  transition: background 0.3s ease;
  text-decoration: none;

  &:hover {
    background: #6aa200;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f7fbff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export default function AdvancedPatternDemo() {
  return (
    <Wrapper>
      <h2 style={{ color: '#000' }}>⚙️ Advanced Patterns in Styled Components</h2>
      <p style={{ color: '#333', maxWidth: '600px', textAlign: 'center' }}>
        This example demonstrates reusable mixins, dynamic props, polymorphism,
        and responsive styles — all inside styled-components.
      </p>

      <NotificationCard type="success">
        <h3>✅ Success Notification</h3>
        <p>Your profile has been updated successfully.</p>
        <ActionButton as={Link} href="/">
          Go Home
        </ActionButton>
      </NotificationCard>

      <NotificationCard type="error">
        <h3>❌ Error Notification</h3>
        <p>Something went wrong while saving your data.</p>
        <ActionButton as="a" href="/topics/advanced-patterns" target="_blank">
          Retry
        </ActionButton>
      </NotificationCard>

      <NotificationCard type="warning">
        <h3>⚠️ Warning Notification</h3>
        <p>Your session is about to expire. Please save your work.</p>
        <ActionButton>Extend Session</ActionButton>
      </NotificationCard>
    </Wrapper>
  );
}
