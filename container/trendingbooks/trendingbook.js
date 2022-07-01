import { useState } from 'react';
import { Booklistmap, Container, H4 } from '../../components';
import styled from '../../styles/book_list.module.scss';
import tdatas from './treandin_data';
function Trendingbook() {
    const [tdata, setTdata] = useState(tdatas)
  return (
<Container fluid={'fluid bg-light'}  >
<Container>
    <section className={styled.bookList}>
<div className={styled.block_title}>
    <H4 text={'Trending Books'} span={'(viwe all)'}/>
</div>

<Booklistmap  tours={tdata} classNames={`app__flex ${styled.bookSection}`} slice={4} />
    </section>
</Container>
</Container>
  )
}

export default Trendingbook