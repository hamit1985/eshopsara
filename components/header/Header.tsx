import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">
            SaraCouture
          </Link>
          <ul className="flex">
            <li>
              <Link className="btn btn-ghost rounded-btn" href="/cart">
                Cart
              </Link>
              <Link className="btn btn-ghost rounded-btn" href="/signin">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
