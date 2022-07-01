import { Container } from 'react-bootstrap'

function Containers({fluid,children  }) {
  return (
<Container className={fluid} >
   {children }
</Container>
  )
}

export default Container