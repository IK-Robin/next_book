import Link from 'next/link';
import { useRouter } from 'next/router';
function Abouts() {
    const router = useRouter();
    const {aboutsID,aboutID} = router.query;
  return (
    <div> The about id is {aboutID} Abouts id  
        {aboutsID} 

        <Link href={'/'}>
            <a> go to home</a>

        </Link>
    </div>
  )
}

export default Abouts