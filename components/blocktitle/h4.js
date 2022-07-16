
import Link from 'next/link'
import styled from './titleh4.module.scss'
function Titleh4({ text, span,  }) {
  return (
    <h4 className={styled.block_title} >
        {text} <Link href={'/'}>
        <a> {span}</a>
        </Link>
        
    </h4>
  )
}

export default Titleh4