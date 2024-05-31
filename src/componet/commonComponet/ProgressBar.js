import React, { useEffect, useState } from 'react';
import '../../styles/ProgressBar.css';

const ProgressBar = (props) => {
    const [loding, setLoding] = useState(0);
    useEffect(() => {
        setLoding(props.loding)
        setTimeout(() => {
            setLoding(props.loding+1)
            setLoding(0)
        }, [700])
    }, [props.loding])

    const setColor = () => {
        if (loding === 0) {
            return '#fff'
        }
        else{
            return props.progressbarColor
        }
    }
    return (
        <div className='contenir'>
            <div className='progress-bar'>
                <div className='progress-bar-fill' style={{ transform: `translate(${loding - 100}%)`, backgroundColor: setColor() }} >
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;