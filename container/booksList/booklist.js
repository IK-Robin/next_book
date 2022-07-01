import Image from 'next/image';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { H4 } from '../../components';
import styled from './booklist.module.scss';
import people from './booksdata';
function Booklist() {
  const [booklist, setBooklist] =
    useState(people);
  return (
    <>
   <Container fluid >
   <Container  >
        <section
          className={styled.bookList}
        >
          <div className={styled.block_title}>
            <H4
              text="Top books of the week"
              span="( view all )"
            />
          </div>

          <div
            className={`app__flex ${styled.bookSection}`}
          >
            {booklist.slice(0,8).map(
              (books, index) => {
                const {
                  id,
                  name,
                  title,
                  image,
                } = books;
                return (
                  <div
                  
                    className={` ${styled.booksItme}`}
                  >
                    <div className={styled.imgWidth}>
                      <Image
                        src={image}
                        // width={278}
                        
                        // height={170}
                        layout='fill'
                      />
                    <div>
                    <H4 text={name} />
                    </div>
                    </div>

                  
                  </div>
                );
              }
            )}
          </div>
        </section>
      </Container>
   </Container>
    </>
  );
}

export default Booklist;



