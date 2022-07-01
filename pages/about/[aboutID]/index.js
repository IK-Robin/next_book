import { useRouter } from 'next/router';


function About() {
    const router = useRouter();
    const {aboutID} = router.query;
  return (
    <div> About id Page {aboutID} </div>
  )
}

export default About