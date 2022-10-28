import resumeImg from './Resume_10_19_20221024_1.jpg'
import {FaDownload} from 'react-icons/fa'
import styles from './Resume.module.css'


export function Resume(){
    
    return(
        <div className={styles.mainBody}>

            <div className={styles.paddingDiv}>
                <div className={styles.title}>
                    <div className={styles.title_underLine}>
                        <p className={styles.title}>Resume</p>
                    </div>
                </div>
                <img className={styles.pdf} src={resumeImg} alt="Resume"/>   
                <div>
                    <a href="Resume.pdf" className={styles.button} target="_blank"><div className={styles.button_content}><FaDownload/><p>Download</p></div></a>
                </div>
            </div>
        </div>
    );
        
}

export default Resume;