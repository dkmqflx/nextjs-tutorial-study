import { useRouter } from 'next/router';

function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <div>
      product {productId}, Review {reviewId}
    </div>
  );
}

export default Review;

// file name으로 nested dynamics routes
