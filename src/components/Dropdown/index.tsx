import { ChevronDown } from "../Icons/regular";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
  children: React.ReactElement;
};

export default function Dropdown({ children }: Props) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  const handleClickShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const optSelect = document.querySelector(".optionSelect");
    optSelect?.addEventListener("click", () => setShow(false));
  }, []);

  useOnClickOutside(ref, () => setShow(false));

  return (
    <div className="px-3 relative" ref={ref}>
      <div
        tabIndex={0}
        role="button"
        onClick={handleClickShow}
        className="btn btn-circle btn-sm bg-transparent border-none"
      >
        <ChevronDown
          className={`w-4 h-4 duration-300 ${show ? "rotate-180" : ""}`}
        />
      </div>
      <div
        tabIndex={0}
        className={`z-[2] flex flex-col absolute p-2 shadow bg-base-100 rounded-box w-60 ${
          show ? "flex" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
