import './Resume.css'
import resumeImg from './Resume_10_19_20221024_1.jpg'
import {FaDownload} from 'react-icons/fa'


export function Resume(){
    
    return(
        <div className='mainBody'>
            <div className='header'/>

            <div className='paddingDiv'>
                <div className='title'>
                    <div className='title-underLine'>
                        <p className='title'>Resume</p>
                    </div>
                </div>
                <img className='pdf' src={resumeImg} alt="Resume"/>   
                <div>
                    <a href="Resume.pdf" class="button"><FaDownload/>Download</a>
                </div>
            </div>
            
            <div className='footer'/>
        </div>
    );
        
}

export default Resume;