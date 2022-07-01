import styled from './input.module.scss'
function Input({labelFor,value,placeholder, type}) {
  return (
    <>
       <div className={` ${styled.input}`}>
       <label for={labelFor} > {labelFor}</label>
        <input type={type}  placeholder={placeholder} value={value} />
       </div>
 


</>

  )
}

export default Input