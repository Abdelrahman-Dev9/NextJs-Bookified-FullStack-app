"use client";

import { cn } from "@/lib/utils";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Library", href: "/" },
  { label: "Add New", href: "/books/new" },
];

const NavBar = () => {
  const pathName = usePathname();
  const { user } = useUser();

  return (
    <header className="w-full fixed top-0 z-50 bg-(--bg-primary)">
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
          <div className="flex gap-7.5 items-center">
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
              <div className="nav-user-link">
                <UserButton />
                {user?.firstName && (
                  <Link href="/subscriptions" className="nav-user-name">
                    {user.firstName}
                  </Link>
                )}
              </div>
            </SignedIn>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
