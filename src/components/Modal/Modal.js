import React from 'react'
import ReactDOM from 'react-dom';

const ModalStyles = {
    transform: 'translate(-50%,-50%)'
}
const OverLayStyles = {
    backgroundColor: 'rgba(0,0,0,.7)'
}
const Modal = ({ flag, src, onClose }) => {
    if (!flag) return null;
    return ReactDOM.createPortal(
    <>
            <div style={OverLayStyles} className='fixed top-0 left-0 bottom-0 right-0 z-1000' >
                <div style={ModalStyles} className='top-2/4 left-2/4 w-10/12 md:w-6/12 bg-white fixed p-6 z-1000'>
                    <img src={src} className='w-full h-full' />
                    <ul className='flex justify-around space-y-2 items-center'>
                        <li><a href={src} download>Download</a></li>
                        <li><a className='cursor-pointer' onClick={onClose}>close</a></li>
                    </ul>
                </div>
            </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal