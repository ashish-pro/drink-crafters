import { useRef, useState } from "react";
import useClickOutside from "../../hook/useClickOutside";
import CustomLink from "../../Reusuable Components/CustomLink";
import Button from "../../Reusuable Components/Button";
import Themes from "./Themes";
import Tooltip from "../../Reusuable Components/Tooltip";

type Props = {};

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let MobileNavRef: React.RefObject<HTMLElement> = useRef(null);

  const closeMenu = (): void => {
    setIsOpen(false);
    if (document.title !== "DrinkCrafters") {
      document.title = "DrinkCrafters";
    }
  };

  useClickOutside(MobileNavRef, closeMenu);
  return (
    <header data-overlay={isOpen} className="navbar bg-base-100 px-4 xl:px-32">
      <div className="w-full flex justify-between lg:flex-1 lg:w-auto">
        <CustomLink
          onClick={() => (document.title = "DrinkCrafters")}
          pathTo="/"
          className="normal-case btn-ghost text-xl"
        >
          DrinkCrafters
        </CustomLink>
        <Button
          onClick={() => setIsOpen(true)}
          className="btn-circle btn-md btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-base-content"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </Button>
      </div>
      <nav
        ref={MobileNavRef}
        className={`flex-none ${
          isOpen ? "mobile-nav show" : "mobile-nav"
        } lg:flex`}
      >
        <Button
          onClick={closeMenu}
          className="absolute btn-square btn-ghost lg:hidden top-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            className="fill-base-content"
          >
            <path d="M0,0h24v24H0V0z" fill="none" />
            <path d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z" />
          </svg>
        </Button>
        <ul className="menu menu-horizontal px-1 gap-2 lg:gap-3 items-center">
          <li>
            <CustomLink onClick={closeMenu} className="btn-ghost " pathTo="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </CustomLink>
          </li>
          <li>
            <CustomLink
              onClick={closeMenu}
              className="btn-ghost"
              pathTo="/about"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              About
            </CustomLink>
          </li>

          <li>
            <Themes />
          </li>

          <Tooltip
            className="tooltip-bottom"
            toolTipText="Open's My GitHub Profile"
          >
            <li>
              <a
                onClick={closeMenu}
                href="https://github.com/ashish-pro"
                target="_blank"
                className="btn-ghost btn lg:indent-[-9999px] lg:btn-square lg:gap-0 place-content-center"
              >
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="inline-block h-5 w-5 fill-current md:h-6 md:w-6"
                >
                  <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path>
                </svg>
                GitHub
              </a>
            </li>
          </Tooltip>
        </ul>
      </nav>
    </header>
  );
}
