import Link from 'next/link';
// import { signIn, signOut } from 'next-auth/client';
import { signIn, signOut, useSession } from 'next-auth/react';
// 자동으로 signIn, signOut으로 가게 해준다

// 유저의 로그인 상태에 따라 로그인, 로그아웃 버튼이 보이도록 처리한다.

function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className={`main-nav ${!session && status === 'loading' ? 'loading' : 'loaded'}`}>
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

        {!session && status !== 'authenticated' && (
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
        )}

        {session && status !== 'unauthenticated' && (
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
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
