import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import styled from './navbar.module.scss';
function Navbar() {
    
    const [toggle, setToggle] = useState(false);
    return (
        <nav className={styled.app__navbar}>
            <div className={styled.app__navbar_logo}>
                {/* <Image Width="90" height="20" className={styled.img} widtd  src={images.logo} alt="logo" /> */}
                <motion.div  >
                <h4> IKR Books</h4>
       

                </motion.div>
            </div>
            <ul className={styled.app__navbar_links}>
                {['Home', 'About', 'work', 'skill', 'contact'].map((item) => {
                    return (
                        <li key={`link-${item}`} className={`app__flex ${styled.p_text} ` }>
                            <div />
                 {/* <Link href={`./home`}>
                 <a >{item} </a>
                 </Link> */}
                 <Link href={ `${item.toString().toLocaleLowerCase()}`}>
  <a > 
    {item}
  </a>
</Link>
                        </li>
                    );
                })}
            </ul>

            <div className={styled.app__navbar__manu}>
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />

                        <ul>
                            {['Home', 'About', 'work', 'skill', 'contact'].map((item) => {
                                return (
                                    <li key={item} className={`app__flex ${styled.p_text} ` }>
                                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                                            {item}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
