import React from 'react';
import photoOfCalvin from './PhotoOfCalvin.jpg'
import styles from './MainPage.module.css'


export function MainPage(){

    return (
        <div className='mainBody'>               
            <div className='content'>
                <div id='section1' className={`${styles.main_flex1}`}>
                    <div className={styles.main_title_Left}>
                        <h1 className={`${styles.textLineUp}`}>Welcome</h1>
                        <p></p>
                    </div> 
                </div>
                <div id='section2' className={`${styles.main_flex2}`}>
                    yes
                </div>
                <div id='section2' className={`${styles.main_flex1}`}>
                    yes
                </div>
            </div>
        </div>
        
    )

}


export default MainPage;