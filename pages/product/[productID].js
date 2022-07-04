import { useRouter } from 'next/router';

function productID() {
    const router = useRouter();
    const productIds = router.query.productID;
  return (
    <div>This is product pages id {productIds}</div>
  )
}

export default productID