import Link from 'next/link'
import { Maincontainer } from '../container'
import styled from '../styles/app.module.scss'
function Home() {
  return (
    <div className={styled.app}>
     
   
<Maincontainer/>

<Link href={'/home'}>
  <a > go to home</a>
</Link>


    </div>
  )
}

export default Home