function UserList({ users }) {
  return (
    <>
      <h1>List of Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data); // browser에서는 로그 안찍히고 터미넬에서 로그 찍히는 것 확인할 수 있다.

  // return한 데이터를 build time에 props로 받을 수 있다.
  return {
    props: {
      users: data,
    },
  };
}

/*

in next js when you export a page component

you can also export an async function called getStaticProps 

if you do export that function, it will run at build time in production

and inside the function you can fetch external data and send it as props to the page

*/
