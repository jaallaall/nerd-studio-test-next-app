import AppProvider from "./Provider";

// globals styles
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={"font-dana"} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col has-[.drawer-toggle:checked]:max-md:overflow-hidden">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
