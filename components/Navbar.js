import Link from 'next/link';
// import { signIn, signOut } from 'next-auth/client';
import { signIn, signOut } from 'next-auth/react';
// 자동으로 signIn, signOut으로 가게 해준다

function Navbar() {
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className={`main-nav`}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>

        <li>
          <Link href="/api/auth/signin">
            <a
              onClick={(e) => {
                e.preventDefault();
                // signIn();
                signIn('github'); // 자동으로 토큰이 생긴다.
              }}
            >
              Sign In
            </a>
          </Link>
        </li>

        <li>
          <Link href="/api/auth/signout">
            <a
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
