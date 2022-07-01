import { useRouter } from 'next/router';

function Review() {
 const router = useRouter();
 const {productID, reviewId} = router.query;
    return (
    <div> produt id {productID} The reviwe id is {reviewId} </div>
  )
}

export default Review