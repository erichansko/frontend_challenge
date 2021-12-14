import React from 'react';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};

const Layout = ({children}: Props) => {
  return (
    <div className="container min-h-screen mx-auto px-4">
      <div className="flex justify-between py-2 items-center">
        <h1 className="text-3xl font-bold text-purple-700">
          <Link href="/">Qogita</Link>
        </h1>
        <div>
          <ul className="flex gap-4">
            <li className="px-3 font-semibold text-purple-500 hover:text-purple-700">
              <Link href="/">
                Products
              </Link>
            </li>
            <li className="px-3 font-semibold text-purple-500 hover:text-purple-700">
              <Link href="/cart">
                Your Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-32">
        {children}
      </div>
    </div>
  );
};

export default Layout;
