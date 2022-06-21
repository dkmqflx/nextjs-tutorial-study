import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

// /api/auth/signin
// next js에서 제공하는 login 페이지
// login 하면 Cookies에서 값이 생긴 것을 확인할 수 있다.
// next-auth가 jwt를 사용하기 때문이다

// /api/auth/signout
// log out 페이지
// log out 버튼 누르면 쿠키 삭제되는 것을 확인할 수 있다.
