import "@/styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "technical assessment",
  description: "distance.so technical assessment",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
        {modal}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
