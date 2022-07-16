import { Booklist2 } from 'container';
import Image from 'next/image';
import { useState } from 'react';
import {
  Button,
  Container,
  Row
} from 'react-bootstrap';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { FaBookReader } from 'react-icons/fa';
import styled from 'styles/download.module.scss';
import data from './data';
function Downlaods() {
  const [bookdata, setBookdata] =
    useState(data);

  return (
    <Container fluid>
      <Container>
        <section
          className={styled.download}
        >
          <Row>
            {bookdata
              .slice(0, 1)
              .map((itme, index) => {
                const {
                  id,
                  name,
                  writer,
                  image,
                  downloado,
                  date,
                  page,
                  quote
                } = itme;
                return (
                  <div key={index.id} className={`d-flex  justify-content-center2 d_column `}>
                    <div className={`col-xs-12 col-sm-4  ${styled.down_column} `}>
                     <div className={`${styled.downloads}`}>                     <Image
                        src={image}
                        // width={200}
                        // height={250}
                        layout="fill"
                      />
                     </div>
                      <div>
                        <h6> published :{date}</h6>
                        <h6> page : {page}</h6>
                      </div>
                    </div>

                    {/* right Side */}

                    <div
                      className={
                       `${ styled.right}  `
                      }
                    >
                      <div
                        className={
                          styled.bookname
                        }
                      >
                        <h1>{name}</h1>
                        <h5>{writer} </h5>

                        <Row >
                          <div className={`d-flex justify-content-between ${styled.d_btn}`} >
                          <Button > <AiOutlineCloudDownload/> Free Download </Button>
                            <Button >< FaBookReader/> read online </Button>
                          </div>
                          <div className={styled.desc}>
                            <p> {downloado} </p>
                            <p>{quote} </p>

                          </div>
                                                </Row>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Row>
          <Row>
            <Booklist2/>
          </Row>
        </section>
      </Container>
    </Container>
  );
}

export default Downlaods;
