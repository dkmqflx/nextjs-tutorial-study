import { useRouter } from 'next/router';

function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.description}</p>
      <hr />
    </div>
  );
}

export default Product;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`http://localhost:4000/products/${params.productId}`);
  const data = await response.json();
  console.log(`Generating page for /products/${params.productId}`);

  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true,
  };
}

/*
for only product id equal to one

and also set fallback to true

so pages for product id 2 and 3 are not generated at build time

but are generated when a request is made
*/
