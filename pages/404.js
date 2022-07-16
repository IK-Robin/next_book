import Link from 'next/link'

function ErrorPage() {
  return (
    <div>
        <h1> This page Can't find </h1>
        <Link href={'/'}>
            <a> Go to Home page</a>
        </Link>
    </div>
  )
}

export default ErrorPage