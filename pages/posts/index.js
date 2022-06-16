import Link from 'next/link';

function PostList({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`posts/${post.id}`} passHref>
            <h2>
              {post.id} {post.title}
            </h2>
          </Link>

          <hr />
        </div>
      ))}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}

/*
to implement this component though we first need the post data 

you could of course make use of the use effect hook to fetch the data 

but that would not help pre-render a list of posts 

what we need is the get static props function
*/

/*
if we view the page source the three posts are present 

so we have successfully pre-rendered the post list page
*/

/*
- getStaticProps receives an argument the convention is to call it context

- but you can call it anything you want to this context

- parameter is an object which contains a key called params

*/
