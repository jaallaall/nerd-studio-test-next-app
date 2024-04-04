import Loading from "@/components/Loading";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Suspense } from "react";

type ProvidersProps = {
  children: React.ReactNode;
  //   session?: Session | null;
};

export default function AppProvider({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="winter"
      enableSystem
      disableTransitionOnChange
    >
      <input id="my-drawer" type="checkbox" className="drawer-toggle peer" />
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="fixed top-0 left-0 right-0 bottom-0 hidden z-50 peer-checked:max-md:flex peer-checked:backdrop-blur-sm"
      />
      <aside className="drawer-sidebar z-50 fixed top-0 bottom-0 s-0 duration-300 ease-in-out w-60 md:w-72 rtl:max-md:translate-x-full ltr:max-md:-translate-x-full peer-checked:max-md:translate-x-0 peer-checked:md:w-72 peer-checked:[.close&_]:md:w-[80px] peer-checked:[.close&_.side-close]:md:hidden peer-checked:[.close&_summary]:after:md:hidden peer-checked:[.close&_.logo]:md:hidden peer-checked:[.close&_.menu-title]:md:text-white/0 peer-checked:[.close&_.menu-title]:md:before:block">
        <Sidebar />
      </aside>

      <div className="md:ms-72 peer-checked:md:ms-[80px] duration-300 ease-in-out">
        {/* <header className="navbar py-1.5 px-2 md:px-6 relative z-40">
          <Navbar />
        </header> */}

        <main className="md:pt-8 md:pb-4 md:px-6 pt-4 pb-2 px-2">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
}
