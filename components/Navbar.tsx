import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Lynzie</a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
