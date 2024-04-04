import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { sidebarMenu } from "./data";

type Props = {
  handleClick: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function SidebarList({ handleClick }: Props) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname.split("/")[1] === href.split("/")[1];

  return (
    <ul className="menu rounded-box mt-5 px-3">
      {sidebarMenu.map((item) => {
        return (
          <Fragment key={item.id}>
            {item.subTitle && (
              <li className="w-full">
                <h2 className="menu-title font-light flex relative items-center w-full px-4 before:hidden before:s-0 before:w-7 before:bg-base-200 before:h-0.5 before:absolute before:top-4 whitespace-nowrap">
                  {item.subTitle}
                </h2>
              </li>
            )}
            <li className="w-full mb-2">
              {!item.subMenu || !item.subMenu.length ? (
                <Link
                  href={item.href}
                  className={`flex items-center text-base py-3 px-4 hover:bg-base-300 focus:!bg-base-300 ${
                    isActive(item.href) ? "bg-base-200" : ""
                  }`}
                  onClick={handleClick}
                >
                  {item?.icon}
                  <span className="flex-grow side-close px-2 whitespace-nowrap">
                    {item.title}
                  </span>
                </Link>
              ) : (
                <details
                  className={`[details[open]&>summary]:bg-base-200 [details[open]&>summary]:hover:bg-base-300 [details&>summary]:hover:bg-base-300`}
                >
                  <summary className="py-3 px-4 flex items-center">
                    {item?.icon}
                    <span className="flex-grow side-close px-2 whitespace-nowrap">
                      {item.title}
                    </span>
                  </summary>
                  {/* <ul className="side-close py-4 space-y-1">
                    {item.subMenu?.map((itm) => {
                      return (
                        <li key={itm.id}>
                          <Link
                            href={itm.href}
                            className={`flex items-baseline text-inherit before:bg-base-content/80 before:w-1.5 before:h-1.5 before:block before:rounded-full before:me-2 p-2 rounded-lg whitespace-nowrap hover:bg-base-300 focus:!bg-base-300 ${
                              isActive(itm.href) ? "bg-base-200" : ""
                            }`}
                            onClick={handleClick}
                          >
                            {itm.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul> */}
                </details>
              )}
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
}
