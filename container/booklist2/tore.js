import Image from 'next/image';
import { useContext } from 'react';
import { H4 } from '../../components';
import styled from '../../styles/book_list.module.scss';

import { Hide } from '../maincontainer';

function Tour({
  id, image, info, name, price, removeTour
}) {
  const hide = useContext(Hide)
  return (

    <div
      className={` ${styled.booksItme}`}
    >
      <div
        className={styled.imgWidth}
      >
        <Image
          src={image}
          // width={278}
          // height={170}
          layout="fill" />
        {/* <div className={hide}>
          
        </div> */}
       
      </div>
      <H4 text={name} />
    </div>

  );
}

export default Tour;
