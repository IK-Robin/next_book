import { createContext } from "react"
import Booklist2 from "./booklist2/booklist2"
import Booklist from "./booksList/booklist"
import C from "./ccc/c"
import PopularClassic from "./popular_clacssic/popular_classic"
import RequestABook from './requestabook/request_a_book'
import Slider from "./slider/slider"
import Trendingbook from "./trendingbooks/trendingbook"
export const Hide = createContext();
function maincontainer() {
  return (
<>
<Hide.Provider value={'hide'}>
  <Slider/>
    <Booklist/>
    <Booklist2/>
    <C/>
    <Trendingbook/>
    <PopularClassic/>
  <RequestABook/>
  </Hide.Provider>

</>
  
  



  )
}

export default maincontainer