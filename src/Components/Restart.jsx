import React, { useRef } from 'react';
import { MdRefresh } from "react-icons/md";

const Restart=({
    onRestart=()=>{},
    className='',
})=>{
    const buttonRef=useRef(null)
const handdleClick=()=>{
    buttonRef.current?.blur();
    onRestart();
}


    return (
        <button
            ref={buttonRef}
            onClick={handdleClick}
            className={`block rounded px-8 py-2 hover:bg-gray-200 ${className}`}>
            <MdRefresh className="inline-block" />
        </button>
    );
};

export default Restart;
