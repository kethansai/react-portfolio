import React, { useEffect, useState } from 'react'
import Modal from '../../../Modal/Modal';

import CIBMDS from '../../../../asset/certificate-files/course/Coursera_IBMDatascience.png'
import IWD from '../../../../asset/certificate-files/course/Internshala_WebDevelopment.png'
import LM from '../../../../asset/certificate-files/course/Linkedin_Manager.png'
import LSQL from '../../../../asset/certificate-files/course/LinkedIn_SQL.png'
import UACSS from '../../../../asset/certificate-files/course/Udemy_AdvancedCSS.png'
import UGM from '../../../../asset/certificate-files/course/Udemy_gitMaster.png'

const certificates = [
  { name: "IBM Data Science", src: CIBMDS },
  { name: "Full stack Web Development", src: IWD },
  { name: "Advance your skills as a manager", src: LM },
  { name: "Essentials of SQL", src: LSQL },
  { name: "Advanced CSS", src: UACSS },
  { name: "Git Master", src: UGM },
];

const Certifiaction = () => {
  
  const [flag, setFlag] = useState(false);
  const [cert, setCert] = useState(false);

  const [image, setImage] = useState({ name: "", src: '' });
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setImage(certificates[index]);
  },[index])
  
  const prev = () => {
    if (index !== 0) {
      setIndex(index - 1)
    }
  }

  const next = () => {
    if (index < certificates.length-1) {
      setIndex(index + 1)
    }
  }

  return (
    <div id='certifications' className='md:min-h-screen py-20 mb-40 md:mb-0'>
      <h1 className='text-center text-4xl md:text-6xl py-3 w-1/2 m-auto bg-white uppercase font-bold md:tracking-wide'>Certifications</h1>
      <div className='relative mt-28'>
        <img src={image.src} onClick={() => { setFlag(true); setCert(image.src) }} className='w-9/12 md:w-4/12 m-auto border-8 shadow-2xl shadow-gray-900 aspect-video border-white cursor-pointer' />
      <div className='flex justify-between items-center -mt-36 md:-mt-52 mx-5 md:mx-96'>
          <div onClick={() => prev()} className={`${index ? 'bg-violet-600':'bg-gray-500'} shadow-pink-500 rounded-full h-10 w-10 md:h-16 md:w-16 text-white text-center md:pr-1 shadow-2xl cursor-pointer md:text-4xl pt-1.5 pr-1 md:pt-2`}>&#9001;</div>
          <div onClick={() => next()} className={`${index != certificates.length-1 ? 'bg-violet-600' : 'bg-gray-500'} shadow-pink-500 rounded-full h-10 w-10 md:h-16 md:w-16 text-white text-center md:pl-5 shadow-2xl cursor-pointer md:text-4xl pt-2 pl-2  md:pt-2.5`}>&#12297;</div>
      </div>
      </div>
      {flag && <Modal src={cert} flag={flag} onClose={() => setFlag(false)} />}
    </div>
  )
}

export default Certifiaction