import React from 'react';
import photoOfCalvin from './PhotoOfCalvin.jpg'
import styles from './MainPage.module.css'


export function MainPage(){

    return (
        <div className='mainBody'>               
            <div className='content'>
                <div id='section1' className={`${styles.main_flex1}`}>
                    <div className={styles.main_title_Left}>
                        <h1>Welcome</h1>
                        <p className={`${styles.text}`}>
                            Hello! Welcome to my website. My name is Calvin Han, a fullstack developer who is 
                            currently developing more on his frontend skills. If you Have any comments please feel
                            free to message me!
                        
                        </p>
                    </div> 
                    <img className={`${styles.image}`} src={photoOfCalvin} alt='CalvinHan'/>
                </div>
                <div id='section2' className={`${styles.main_flex2}`}>
                    <h1>Skills</h1>
                    {/* <p className={`${styles.text}`}>
                        Languages:  JavaScript, Java, C++, PHP, HTML, OCaml, C, CSS, LaTeX
                        Frameworks: Java Spring Boot, Reactjs, Angular
                        Software:   Jira, Confluence, Vim, Eclipse, Microsoft Office, Visual Studio, Atom
                    </p> */}
                    <ul className={`${styles.list}`}>
                        <li>Languages:  JavaScript, Java, C++, PHP, HTML, OCaml, C, CSS, LaTeX</li>
                        <li>Frameworks: Java Spring Boot, Reactjs, Angular</li>
                        <li>Software:   Jira, Confluence, Vim, Eclipse, Microsoft Office, Visual Studio, Atom</li>
                    </ul>
                </div>
                <div id='section2' className={`${styles.main_flex1}`}>
                    yes
                </div>
            </div>
        </div>
        
    )

}


export default MainPage;