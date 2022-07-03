
import Link from 'next/link'
import styled from './titleh4.module.scss'
function Titleh4({ text, span, link }) {
  return (
    <h4 className={styled.block_title} >
        {text} <Link href={`${link}`}>
        <a> {span}</a>
        </Link>
        
    </h4>
  )
}

export default Titleh4