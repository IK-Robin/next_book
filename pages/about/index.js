import Link from "next/link"
import Abouts from "./[aboutID]/abouts/[aboutsID]"

function About() {
  return (
    <div>About

        <Link href={'/'}>
            <a> go to main pages</a>
        </Link>
        <Link href={'./aboutID/abouts/aboutsID'}>
        <a>      <Abouts/></a>
        </Link>
    </div>
  )
}

export default About