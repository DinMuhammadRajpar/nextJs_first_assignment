import React from "react";
import Link from "next/link";

 export const Navbar = () => {
  return (
    <div className="bg-black text-white py-5 flex items-center justify-between px-4">
      <div>
        <ul>
          <li><a href="http://localhost:3000"><h3>GIAIC</h3></a></li>
        </ul>
      </div>
      <ul className="flex gap-4 ml-6">
        <Link href="http://localhost:3000">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/apply">Apply</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </div>
  );
};

// export default Navbar
