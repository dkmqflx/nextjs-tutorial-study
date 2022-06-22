import { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';

function Dashboard() {
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn();
    }
  }, [status]);

  if (status === 'loading') {
    return <h2>Loading...</h2>;
  }

  return <h1>Dashboard page</h1>;
}

export default Dashboard;

/*
login 하지 않았으면 dashboard 페이지에 접근하지 못하도록 한다.
대신 signIn 페이지로 이동시킨다
*/
