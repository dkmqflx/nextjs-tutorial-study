import { useRouter } from 'next/router';

function ProductDetail() {
  const router = useRouter();
  const productid = router.query.productId;

  return <div>ProductDetail {productid}</div>;
}

export default ProductDetail;
