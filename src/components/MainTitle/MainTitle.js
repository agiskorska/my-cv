import React from 'react';
import styles from './MainTitle.module.scss';
import { motion } from "framer-motion";
  
const MainTitle = () => {
  const [isVisible, setIsVisible] = React.useState(1);
  return (
    <motion.div className={styles.root} animate={{opacity : isVisible ? 1 : 0}} transition={{ duration: 3 }} onClick={() => setIsVisible(0)}>
        <div className={styles.top}>
            <span className={styles.spantop}>Agi Skorska</span>
        </div>
        <div className={styles.bottom}> 
            <span className={styles.bottom}>Web Development</span>
        </div>
    </motion.div>
  )
}

export default MainTitle;