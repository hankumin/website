import './Resume.css'
import resumeImg from './Resume_10_19_20221024_1.jpg'
import {FaDownload} from 'react-icons/fa'

const onHandleClick = () => {
    fetch('https://hankumin.github.io/website/public/Resume.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Calvin_Han_Resume.pdf';
            alink.click();
        })
    })
}

// const initialState = {
//     downloadedFlag: 'false'
// }

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
                    <button className='download' onClick={onHandleClick}><FaDownload /> Download</button>
                </div>
            </div>
            
            <div className='footer'/>
        </div>
    );
        
}

export default Resume;