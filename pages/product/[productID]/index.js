import { useRouter } from 'next/router';
function Product() {
  const router = useRouter();
  const productId  = router.query.productID;

  return (
    <div> product page number { productId} </div>
  )
}

export default Product