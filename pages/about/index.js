import Link from "next/link"
import Abouts from "./[aboutID]/abouts/[aboutsID]"

function About() {
  return (
    <div>
<p> About</p>
      <div>
        <div>
        <Link href={'/'}>
            <a> go to main pages</a>
        </Link>
        </div>
     

      <div>
      <Link href={'./aboutID/abouts/aboutsID'}>
        <div>
        <Abouts/>
          </div>     
        </Link>
      </div>
      </div>
    </div>
  )
}

export default About