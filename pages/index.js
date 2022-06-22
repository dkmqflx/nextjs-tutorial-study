import { useSession } from 'next-auth/react';

function Home() {
  const { data, status } = useSession();
  console.log({ data });
  //id가 추가된 것을 확인할 수 있다

  return <h2>Home Page</h2>;
}

export default Home;
