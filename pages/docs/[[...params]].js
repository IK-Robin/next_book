import { useRouter } from 'next/router';

function Params () {
    const router = useRouter();
    const {params = []} = router.query;
    if(params.length = 1) {
        return <h1> This is params {params[0]} consept {params[0]} </h1>
    }
  return (
    <div>Params </div>
  )
}

export default Params 