import ReactQueryProvider from "@/providers/ReactQueryProvider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

export type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  // TODO: Put a preloader in this website that shows while assets and most especially javascript is loading
  return (
    <>
      <html lang="en">
        <body className={``}>
          <ReactQueryProvider>
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{
                style: {
                  border: "1px solid #E4E7EC",
                  borderRadius: 15,
                  padding: "16px",
                  color: "#000",
                  fontSize: 15,
                  fontWeight: 400,
                },
                duration: 2000,
              }}
            />
            <NextTopLoader color="#4BD2E4" showSpinner={false} />
            <main className="">{children}</main>
          </ReactQueryProvider>
        </body>
      </html>
    </>
  );
}
