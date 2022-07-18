import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Container,
  Row
} from 'react-bootstrap';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import styled from '../../../styles/footer.module.scss';

function Footer() {
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, [])
  

  return (
    <>
      <Container fluid className={styled.footer}>
        <Row className="">
          <div className={`${styled.footerTop} col-md-4 col-sm-4  d-flex align-items-center justify-content-around `}>
            <Link href={'./[about]'}>
            <div>About US </div>
            </Link>
            <div> Contact Us </div>
            <div>Privecy policy </div>
            <div>follow us </div>
          </div>
          <hr/>
        </Row>
        {/* <Row className={styled.footerText}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        </Row> */}
        <Row>
          <div className={`${styled.social} d-flex justify-content-center align-item-center`}>
            <Link href={'https://www.google.com/' } >
              <a> <FaFacebookF title='Facebook' /></a>
            </Link>
            <Link href={'https://www.google.com/' }>
          <a> <AiOutlineTwitter title='twitter'/></a>
            </Link>
            <Link href={'https://www.google.com/' }>
             <a> <FaPinterestP title='pinterest'/></a>
            </Link>
            <Link href={'https://www.google.com/' }>
              <a ><AiFillLinkedin title='linkdin' /></a>
            </Link>
            <Link href={'https://www.google.com/' }>
              <a><BsInstagram title='instagram'/></a>
            </Link>
          </div>
        </Row>
        <Row className={`d-flex justify-content-center ${styled.copy}`}>
      <div>       <h6><span> &copy;</span> {date} IKR Books All Rights Reserved. </h6></div>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
