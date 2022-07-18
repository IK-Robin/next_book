import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Booklistmap, H4 } from '../../components';
import styled from '../../styles/book_list.module.scss';
import data from './booksdata';
function Booklist2() {
    const [bookList, setBookList] = useState(data)
  return (
  
       <Container fluid className='bg-light'>
       <Container  >
            <section
              className={styled.bookList}
            >
              <div className={styled.block_title}>
              <H4 text = {'Current affier'} href={'download'} span='(view all)'/>
       

              </div>
    

    <h1>

      
      </h1>
            
              <Booklistmap  tours={bookList} classNames={`app__flex ${styled.bookSection}`} slice={4} />
     
            </section>
          </Container>
       </Container>
        
  )
}

export default Booklist2