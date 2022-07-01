import Link from "next/link"

function Product() {
  return (
    <div>
     <h2>
        <Link href={'product/1'}>
            <a > product 1</a>
        </Link>
     </h2>
     <h2>
        <Link href={'product/2'}>
            <a > product 2</a>
        </Link>
     </h2>


    </div>
  )
}

export default Product