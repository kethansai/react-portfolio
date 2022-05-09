import React, { useState } from 'react'
import tcsLogo from '../../../../asset/logos/tcs-logo.png';
import gfLogo from '../../../../asset/logos/gf-logo.png';
import Certificate from '../../../../asset/logos/certificate.png';
import GFCertificate from '../../../../asset/certificate-files/GF_Experience-certificate.jpg';
import SSCertificate from '../../../../asset/certificate-files/SS-certificate.jpg';
import Modal from '../../../Modal/Modal';

const Experience = () => {
  const [flag, setFlag] = useState(false);
  const [cert, setCert] = useState(false);
  return (
    <div id='experience'>
      <div className='text-white pt-20 py-12 px-4 md:px-52'>
        <div className='text-4xl font-bold mb-8 uppercase text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 w-64 px-6 py-4 m-auto border-y-8 border-orange-400'>Experience</div>
        <div className='grid grid-cols-5 md:grid-cols-9'>

          {/* Stack 1 - Tata Consultancy Services */}
          <div className='col-span-4 bg-gray-800 mt-10 md:mt-8 shadow-xl rounded-xl px-8 py-10 hover:shadow-2xl shadow-cyan-500 hover:shadow-indigo-500'>
            <div className='flex items-center'>
              <img src={tcsLogo} alt='Tcs Logo' className='w-12 h-8 md:w-16 md:h-12 ml-1 mr-2' />
              <div className='w-11/12'>
                <h3 className='text-xl font-bold text-white'>Tata Consultancy Services</h3>
                <p className='text-sm font-bold text-white'> Assistant System Engineer - Developer</p>
                <p className='text-xs font-bold text-white'> (APR-2021 - Current) - 1 Year</p>
              </div>
            </div>
            <ul className='text-xs list-disc font-bold mx-4 mt-3 text-gray-200'>
              <li>Working for Manpowergroup client under bullhorn customization project.</li>
              <li>Technologies Angular 9, JavaScript, DevOps, Spring.</li>
            </ul>
          </div>
          <div className='col-span-1 order-first md:order-none relative flex justify-center items-center'>
            <div className='h-full bg-gray-900 w-4'></div>
            <div className='absolute w-7 h-7 bg-gray-900 md:bg-white rounded-full text-xs font-bold px-2 py-2 text-cyan-700'>
              <div className='rounded-full w-3 h-3 bg-white md:bg-gray-900'></div>
            </div>
          </div>
          <div className='hidden md:block col-span-4 w-full h-full'></div>
        </div>
        <div className='grid grid-cols-5 md:grid-cols-9'>
          {/* Stack 2 - Global foundries */}
          <div className='hidden md:block col-span-4 w-full h-full'></div>
          <div className='col-span-1 relative flex justify-center items-center'>
            <div className='h-full bg-gray-900 w-4'></div>
            <div className='absolute w-7 h-7 bg-gray-900 md:bg-white rounded-full text-xs font-bold px-2 py-2 text-cyan-700'>
              <div className='rounded-full w-3 h-3 bg-white md:bg-gray-900'>
                <div className='rounded-full w-px h-px p-1.5 bg-orange-400'></div>
              </div>
            </div>
          </div>
          <div className='col-span-4 bg-gray-800 mt-10 md:mt-0 shadow-xl rounded-xl px-8 py-10 hover:shadow-2xl shadow-pink-500 hover:shadow-indigo-500'>
            <div className='relative flex items-center'>
              <img src={gfLogo} alt='GF Logo' className='w-16 h-12' />
              <div>
                <h3 className='text-xl font-bold text-white'>GlobalFoundries - Internship</h3>
                <p className='text-sm font-bold text-white'> Java Developer</p>
                <p className='text-xs font-bold text-white'> (Sept 2020 - Apr 2021) - 8 Months</p>
              </div>
              <img src={Certificate} alt='Certificate icon' className='cursor-pointer absolute w-10 h-10 top-8 md:top-2 right-2' onClick={() => { setFlag(true); setCert(GFCertificate) }} />
            </div>
            <ul className='text-xs list-disc font-bold mx-4 mt-3 text-gray-200'>
              <li>worked for Wafer distribution system application project.</li>
              <li>Technologies Java structs Framework, JavaScript, MySQL.</li>
            </ul>
          </div>
        </div>
        <div className='grid grid-cols-5 md:grid-cols-9'>
          {/* Stack 1 - Tata Consultancy Services */}
          <div className='col-span-4 bg-gray-800 mt-10 md:mt-0 shadow-xl rounded-xl px-8 py-10 hover:shadow-2xl shadow-green-500 hover:shadow-indigo-500'>
            <div className='relative'>
              <div>
                <h3 className='text-xl font-bold text-white'>Stickman Services - Internship</h3>
                <p className='text-sm font-bold text-white'> Assistant Engineer</p>
                <p className='text-xs font-bold text-white'> (MAR 2020 - MAY 2020) - 3 Months</p>
              </div>
              <img src={Certificate} alt='Certificate icon' className='cursor-pointer absolute w-10 h-10 top-8 md:top-2 right-2' onClick={() => { setFlag(true); setCert(SSCertificate) }} />
            </div>
              <ul className='text-xs list-disc font-bold mx-4 mt-3 text-gray-200'>
              <li>Second hand car selling application, under this project worked as component designer.</li>
              <li>Technologies HTML, JavaScript, CSS.</li>
            </ul>
          </div>
          <div className='col-span-1 order-first md:order-none relative flex justify-center items-center'>
            <div className='h-full bg-gray-900 w-4'></div>
            <div className='absolute w-7 h-7 bg-gray-900 md:bg-white rounded-full text-xs font-bold px-2 py-2 text-cyan-700'>
              <div className='rounded-full w-3 h-3 bg-white md:bg-gray-900'>
                <div className='rounded-full w-px h-px p-1.5 bg-orange-400'></div>
              </div>
            </div>
          </div>
          <div className='hidden md:block col-span-4 w-full h-full'></div>
        </div>
      </div>

      
      {flag && <Modal src={cert} flag={flag} onClose={()=>setFlag(false)}/>}
    </div>
  )
}

export default Experience