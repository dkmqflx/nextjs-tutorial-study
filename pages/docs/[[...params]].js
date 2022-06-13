import { useRouter } from 'next/router';

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log({ params });

  /*
  const { params  } = router.query;

  you can see that initially harams is undefined
  and this is because of the pre-rendering
  feature in next.js
   */

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }

  return <h1>Docs Home Page</h1>;
}

export default Doc;

/*


/docs/feature1
/docs/feature1/concept1
/docs/feature1/concept1/example1

=> 모두 match 된다.

you can see that initially harams is undefined
and this is because of the pre-rendering
feature in next.js

*/
