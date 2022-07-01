import Link from 'next/link'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { H4 } from '../../components'
import Maphs from '../../components/maphs'
import styled from './rating.module.scss'
import Ratings from './ratings'
import data from './rating_data'
const comp = Ratings;

function Rating() {
    const [ratingDAta, setRatingDAta] = useState(data)
  return (
<Container fluid >
   <div className='section_title'>
        <H4 text={'Read Customers Thoughts'}/>
   </div>
    <Container className={`app__flex  ${styled.flexcontainer}`}>
 
        <section className={styled.section}>
    

      <Maphs data={ratingDAta} className={`app__flex  ${styled.rating}` } Components={comp} slice={3} />
       <Link href={''} >
        <a className={styled.link}> view more  rating</a>
       </Link>
        </section>
      
     
    </Container>

</Container>
  )
}

export default Rating