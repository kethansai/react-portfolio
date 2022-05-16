import React from 'react'
import { ImWhatsapp, ImFacebook } from 'react-icons/im'
import { FaLinkedinIn } from 'react-icons/fa'
import profilePic from '../../../../asset/ProfilePic.png'

const Home = () => {
  return (
    <div id='home' className='snap-center'>
          <div className='max-w-lg md:max-w-3xl md:pt-48 px-4 md:px-0 m-auto py-12 md:min-h-screen'>
            <div className='relative'>
              <div className='absolute z-0 inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 rounded-md'>
              </div>
              <div className='flex flex-col space-y-6 md:flex-row items-center justify-center relative card m-2 p-12 pt-24 bg-gray-800 md:h-auto rounded-xl shadow-2xl'>
                  {/* <div className='order-1 md:order-2 w-full'>
                    <img src={profilePic} className='rounded-3xl w-56 h-56 md:h-1/2  m-auto'/>
                  </div> */}
                  <div className='order-2 md:order-1 w-full'>
                    <div className='text-white text-3xl md:mb-12 md:text-5xl font-bold text-center'>
                        Kethan Vemuri
                    </div>
                    <div className='text-white py-5 px-4 md:px-10 text-center'>
                      A Full-stack developer that crafts beautiful websites with good functionality and better security that help you grow your business online
                    </div>
                    <div className='mt-5 w-1/2 md:w-1/3 mx-auto shadow-xl text-center rounded-full hover:bg-cyan-700 bg-orange-400 text-white font-bold py-3'>
                      <a href='mailto:kethansai77@gmail.com'>Hire Me</a>
                    </div>
                    <ul className='m-auto  mt-16 md:mt-12 flex justify-center text-white'>
                        <li className='mr-3 animate-[bounce_1s_ease_1s_infinite]'>
                            <a target="_blank" href='https://www.facebook.com/kethan.sai.735/'>
                                <ImFacebook className='text-3xl hover:text-sky-400 transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-110' />
                            </a>
                        </li>
                        <li className='mx-3 animate-[bounce_1s_ease_1.3s_infinite]'>
                            <a target="_blank" href='https://wa.me/917989216155?text=Hi Kethan Vemuri'>
                                <ImWhatsapp className='text-3xl hover:text-green-500 transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-110' />
                            </a>
                        </li>
                        <li className='ml-3 animate-[bounce_1s_ease_1.6s_infinite]'>
                            <a target="_blank" href='https://www.linkedin.com/in/kethan-vemuri-079496144/'>
                                <FaLinkedinIn className='text-3xl hover:text-blue-400 transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-110' />
                            </a>
                        </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Home