import { useSession } from 'next-auth/react';

function Home() {
  const { data, status } = useSession();

  console.log({ data, status });

  return <h2>Home Page</h2>;
}

export default Home;

// Provider 때문에 useSession을 사용해서 현재 auth 상태를 알 수 있다.
// 그리고 네트워크 탭을 보면, 새로고침 할 때 마다 session get request를 하는 것을 확인할 수 있다
