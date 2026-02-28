"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Library", href: "/" },
  { label: "Add New", href: "/books/new" },
];

const NavBar = () => {
  const pathName = usePathname();

  return (
    <header className="w-full fixed top-0 z-50 bg-[var(--bg-primary)]">
      <div className="wrapper navbar-height py-4 flex justify-between items-center">
        <Link href="/" className="flex gap-1 items-center">
          <Image src={logo} alt="Bookfied" width={42} height={26} priority />
          <span className="logo-text">Bookfied</span>
        </Link>

        <nav className="w-fit flex gap-7 items-center">
          {navItems.map(({ label, href }) => {
            const active =
              pathName === href || (href !== "/" && pathName.startsWith(href));

            return (
              <Link
                href={href}
                key={label}
                className={cn(
                  "nav-link-base",
                  active ? "nav-link-active" : "text-black  hover:opacity-70"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
