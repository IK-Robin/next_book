import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Booklistmap, H4 } from '../../components';
import styled from '../../styles/book_list.module.scss';
import data from './popular_data';
function PopularClassic() {

    const [populardata, setPopulardata] = useState(data);
  return (
    <Container fluid >
    <Container>
        <section className={styled.bookList}>
    <div className={styled.block_title}>
        <H4 text={'popular classic'} span={'(viwe all)'}/>
    </div>
    
    <Booklistmap  tours={populardata} classNames={`app__flex ${styled.bookSection}`} slice={4} />
        </section>
    </Container>
    </Container>
  )
}

export default PopularClassic