import React from 'react'
import { ImWhatsapp, ImFacebook } from 'react-icons/im'
import { FaLinkedinIn } from 'react-icons/fa'

const Home = () => {
  return (
    <div id='home'>
          <div className='max-w-2xl pt-20 px-4 md:px-0 m-auto py-12'>
            <div className='relative'>
              <div className='absolute z-0 inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 rounded-md'>
              </div>
              <div className='relative card m-2 p-12 bg-white md:h-auto rounded-xl shadow-2xl'>
                    <div className='text-cyan-800 text-3xl font-bold text-center'>
                        Kethan Vemuri
                    </div>
                    <div className='text-cyan-800 py-5 px-4 md:px-10 text-center'>
                      Full-stack developer who crafts beautiful websites and good functionality with more security that help your business grow online
                    </div>
                    <div className='mt-5 w-1/2 md:w-1/3 mx-auto shadow-xl text-center rounded-full bg-cyan-700 hover:bg-orange-400 text-white font-bold py-3'>
                      <a href='mailto:kethansai77@gmail.com'>Hire Me</a>
                    </div>
                    <ul className='m-auto  mt-16 md:mt-12 flex justify-center text-cyan-800'>
                        <li className='mr-3'>
                            <a target="_blank" href='https://www.facebook.com/kethan.sai.735/'>
                                <ImFacebook className='text-3xl hover:text-sky-400 transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-110' />
                            </a>
                        </li>
                        <li className='mx-3'>
                            <a target="_blank" href='https://wa.me/917989216155?text=Hi Kethan Vemuri'>
                                <ImWhatsapp className='text-3xl hover:text-green-500 transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-110' />
                            </a>
                        </li>
                        <li className='ml-3'>
                            <a target="_blank" href='https://www.linkedin.com/in/kethan-vemuri-079496144/'>
                                <FaLinkedinIn className='text-3xl hover:text-blue-400 transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-110' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Home