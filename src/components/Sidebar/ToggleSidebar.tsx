import Link from "next/link";

type Props = {
  setActive?: () => void;
};

export default function ToggleSidebar({ setActive }: Props) {
  return (
    <div className="flex items-center justify-center p-2">
      <div className="flex-1 logo overflow-hidden">
        <Link href="/" className="btn btn-ghost text-xl">
          Nurd Studio
        </Link>
      </div>
      <label
        htmlFor="my-drawer"
        aria-label="open sidebar"
        className="btn btn-ghost"
        onClick={setActive}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:inline-block hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="open menu"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="inline-block w-6 h-6 stroke-current md:hidden"
          aria-label="close"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </label>
    </div>
  );
}
