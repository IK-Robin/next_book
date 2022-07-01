// import Ratings from "./ratings"
// const ratingss =Ratings

function Maphs({Components, data, slice,className}) {
  return (
   <div className={className}>
    {data.slice(0, slice).map((item,index) => {
        return <Components key={index} {...item}/>
    })}
   </div>
  )
}

export default Maphs