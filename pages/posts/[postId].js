import { useRouter } from 'next/router';

function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading ... </h1>;
  }
  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export default Post;

export async function getStaticPaths() {
  // const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // const data = await response.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });

  return {
    paths: [
      {
        params: { postId: '1' },
      },
      {
        params: { postId: '2' },
      },
      {
        params: { postId: '3' },
      },
    ],
    // paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating pages for /posts/${params.postId}`);

  return {
    props: {
      post: data,
    },
  };
}

/*

- we need to return an object
- this object must contain a paths key
- this key determines which paths will be statically generated at build time
- the key is an array of objects
- each object contains a params key which in turn is an object that contains the route parameter with its value
- so object the route parameter is post id we need to specify a value

- there is one last thing the returned object must contain another key called fallback
- we will talk more about what role this key plays in the near future but for now set its value to false

- if i view page source we see the data here as well we have successfully pre-rendered a page with dynamic parameters
*/
