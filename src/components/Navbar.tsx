import React, { useEffect } from "react";
import { FaMosque } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsOpen(false);
      }
    };
    document.querySelector("main")?.addEventListener("click", () => {
      setIsOpen(false);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  function handleAnchorScroll(
    event: React.MouseEvent<HTMLAnchorElement>
  ): void {
    event.preventDefault();
    const link = event.currentTarget as HTMLAnchorElement;
    const anchorId = new URL(link.href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    if (anchor) {
      window.scrollTo({
        top: anchor.offsetTop - 120,
        behavior: "smooth",
      });
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`navbar${
        isScrolled === true || isOpen === true ? " navbar-scroll" : ""
      }`}
    >
      <div className="container flex items-center justify-between py-4 mx-auto lg:max-w-7xl">
        <div className="flex items-center gap-4">
          <div>
            <FaMosque className="w-12 h-12" />
          </div>
          <div>
            <h4 className={`text-sm`}>المسجد الكندري</h4>
            <h4 className={`text-lg font-bold`}>Masjid Al-Kandari</h4>
          </div>
        </div>
        <button
          className="px-4 py-2 lg:hidden focus:outline-none"
          onClick={toggleNavbar}
        >
          <FaBars className="w-8 h-8 p-2 border border-white rounded-lg nav-toggle" />
        </button>
        {/* Links (desktop) */}
        <div className="hidden space-x-8 lg:flex">
          {navLink.map((value, index) => (
            <a
              href={`#${value.link}`}
              className="hover:text-gray-400"
              key={index}
              onClick={handleAnchorScroll}
            >
              {value.name}
            </a>
          ))}
        </div>
      </div>
      {/* Links (mobile) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{ height: isOpen ? "auto" : "0" }}
      >
        <div className="flex flex-col px-4 py-8 space-y-6 min-h-[200px] ">
          {navLink.map((value, index) => (
            <a
              href={`#${value.link}`}
              className="hover:text-gray-400"
              key={index}
              onClick={handleAnchorScroll}
            >
              {value.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

const navLink = [
  {
    name: "Beranda",
    link: "#",
  },
  {
    name: "Fitur",
    link: "feature",
  },
  {
    name: "Kegiatan",
    link: "activity",
  },
  {
    name: "Foto",
    link: "photo",
  },
  {
    name: "Lokasi",
    link: "location",
  },
];
