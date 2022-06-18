import useSWR from 'swr';

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard');
  const data = await response.json();
  return data;
};

function DashboardSWR() {
  const { data, error } = useSWR('dashboard', fetcher);

  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';

  return (
    <div>
      <h2>SWR Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
}

export default DashboardSWR;

/*

db.json에서 값을 변경시키면, dashborad.js에서는 새로고침해야지 바뀐 값이 적용되지만 

swr에서는 ui 관련된 값이 바뀌면 자동으로 바뀐 ui가 화면에 렌더링 된다.


*/
