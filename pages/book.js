import Image from 'next/image';
import { useState } from 'react';
import { client, urlFor } from './client';

function Book({res}) {
    const [bookList, setBookList] = useState([res])

    // useEffect(() => {
    //     const query = '*[_type == "booklist"]';
    //     client.fetch(query).then((data) => {
    //         setBookList(data);
    //     });
    // }, []);


  return (
    <div>
        {bookList.map((book,index) => {

             return (
               <div key={index}>
                   <h1> {book.bookTitle}  </h1>
                   <Image src={urlFor(book.imgUrl).url()}width= {500} height={500} />
               </div>
            );
        })}
    </div>
  )
}

export default Book


    // useEffect(() => {
    //     const query = '*[_type == "booklist"]';
    //     client.fetch(query).then((data) => {
    //         setBookList(data);
    //     });
    // }, []);
export async function getServerSideProps() {
  const query = `*[_type == "booklist"][0]`;
  const res = await client.fetch(query);
 
  return {
    props: {
    res
  },

  };
}