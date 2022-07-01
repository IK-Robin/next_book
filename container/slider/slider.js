import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import data from './data';
import styled from './slider.module.scss';

function Slider () {

  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

useEffect(() => {
const lastIndex = people.length -1;


if( index < 0 ) {
  setIndex(lastIndex);
}

if (index > lastIndex) {
  setIndex(0);
}


}, [index, people]);

useEffect(() => {

  const timout = setInterval(() => {
      setIndex(index + 1)
  }, 3000);

  return () => {
  clearInterval(timout)
  }
}, [index])


  return (
    <section className={styled.section}>
      
      <div className={styled.section_center}>
        {people.map((persone, personeIndex)=>{
          const {id,name,image,title,quote } = persone;
          let position = `${styled.nextSlide}`;
          if (personeIndex === index) {
            position = styled.activeSlide;
          }
          if (
            personeIndex === index - 1 ||
            (index === 0 && personeIndex === people.length - 1)
          ) {
            position = styled.lastSlide;
          }
          return(
            <article key={personeIndex} className={`${position} ${styled.article}`} > 
              <Image  src={image} layout='fill' alt={name }className={styled.imgDev} />
             <div className={styled.slyderP}>
             <h4> {name}</h4>
              <p className={styled.title}>{title}</p>
              <p className={styled.text}>{quote}</p>
              <FaQuoteRight className="icon" />
             </div>
            </article>
          )
        })}
          <button className={styled.prev}  onClick={()=> setIndex( index -1 )}>
          <FiChevronLeft />
        </button>
        <button className={styled.next}  onClick={()=> setIndex( index +1 )}>
          <FiChevronRight />
        </button>
      </div>
    </section>

  )
}
export default Slider;