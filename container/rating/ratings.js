import Image from "next/image"
import { AiFillStar } from "react-icons/ai"
import { BsStarHalf } from "react-icons/bs"
import { H4 } from "../../components"
import styled from './rating.module.scss'

function Ratings({id,name,rating,img,date}) {
  return ( 
    <div className={styled.rating_item}>
      <div className={`app__flex ${styled.rating_img}`}>
      <div>
      <Image src={img} width={30} height={30}/>
      </div>
       <div>
       <H4 text={name}/> 
       </div>  
      
      </div>
     <div>
     <div className={`app__flex ${styled.star}`}> 
       <div>
       <AiFillStar style={{
          color:'blue'
        }}  />
        <AiFillStar style={{
          color:'blue'
        }}  />
        <AiFillStar style={{
          color:'blue'
        }}  />
        <AiFillStar style={{
          color:'blue'
        }}  />
        <BsStarHalf className={styled.star} />
       </div>
       <div className={styled.date}>
     <H4 text={date}/>
       </div>
        
      </div>
  
        <p >
            {rating}
        </p> 
     </div>

    </div>
  )
} 

export default Ratings;