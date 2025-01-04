import React from "react";

export type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en">
        <body className={`font-sans antialiased`}>{children}</body>
      </html>
    </>
  );
}
