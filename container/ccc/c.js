import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Booklistmap, H4 } from '../../components';
import styled from '../../styles/book_list.module.scss';
import cdaa from './cdata';

function C() {
  
  const [cData, setCData] =
    useState(cdaa);
  return (
 
     <Container fluid >
      <Container>
        <section
          className={styled.bookList}
        >
          <div
            className={
              styled.block_title
            }
          > 
            <H4
              text={
                `TODAYS' FREE BOOKS AND DEALS`
              }
              span="(view all)"
            />
          </div>
          <Booklistmap  tours={cData} classNames={`app__flex ${styled.bookSection}`} slice={4} />
        </section>
      </Container>
    </Container>
 
  );
}

export default C;
