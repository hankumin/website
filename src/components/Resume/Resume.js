import React from 'react';
import './Resume.css'
import resumeImg from './Resume_10_19_20221024_1.jpg'

const onHandleClick = () => {
    fetch('../../../public/Resume.pdf').then(response => {
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
            <div>
                <img className='pdf' src={resumeImg} alt="Resume"/>   
            </div>
            <div>
                <button onClick={onHandleClick}>Download</button>
            </div>
        </div>
    );
        
}

export default Resume;