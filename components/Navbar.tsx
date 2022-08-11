import Link from "next/link";
import React from "react";
// import "@styles/Navbar.module.sass";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
