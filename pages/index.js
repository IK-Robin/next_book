import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import { Maincontainer } from '../container'
import styled from '../styles/app.module.scss'
function Home() {
  return (
    <div className={styled.app}>
     
   
<Maincontainer/>

<Navbar/>
<Link href={'home'}>
  <a > go to home</a>
</Link>


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
    </div>
  )
}

export default Home