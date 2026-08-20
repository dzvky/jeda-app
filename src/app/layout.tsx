// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Jeda.',
  description: 'Satu tarikan napas untuk hari ini.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}