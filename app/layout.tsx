import './globals.css';
import StyledComponentsRegistry from './registry';

export const metadata = {
  title: 'Next + Styled Components',
  description: 'Styled Components setup in Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
