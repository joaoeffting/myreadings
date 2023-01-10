import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex bg-slate-500 pl-10">
      <div>
        <Link href="/">My Readings</Link>
      </div>
      <div className="ml-5">
        <Link href="/books">Books</Link>
      </div>
    </div>
  );
};

export default Header;
