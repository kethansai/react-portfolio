import React, { useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import './Contactme.css'
import { ImPhone, ImWhatsapp, ImFacebook, ImLocation2 } from 'react-icons/im'
import { SiGmail } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
const Contactme = () => {
    const form = useRef();
    const publickKey = "ur8U7qvUqrvEdqVzw";
    const [alert, setAlert] = useState();
    const sendMail = (e) => {
        e.preventDefault();
        emailjs.sendForm('portfolio_kethansai', 'template_wavpk94', form.current,publickKey)
            .then((result) => {
                // console.log(result);
                if (result.status === 200) {
                    setAlert(
                        <div className="alert-toast z-100 fixed top-0 right-0 m-8 w-5/6 md:w-full max-w-sm">
                            <input type="checkbox" className="hidden" id="footertoast" />

                            <label className="close cursor-pointer flex items-start justify-between w-full px-4 pt-4 font-bold bg-white h-16 rounded shadow-2xl text-cyan-800" title="close" htmlFor="footertoast">
                                &#128578; Message Successfull sent

                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                </svg>
                            </label>
                        </div>
                    )
                }
            }, (error) => {
                console.log(error.text);
                setAlert(<div className="alert-toast z-100 fixed top-0 right-0 m-8 w-5/6 md:w-full max-w-sm">
                    <input type="checkbox" className="hidden" id="footertoast" />

                    <label className="close cursor-pointer flex items-start justify-between w-full px-4 pt-4 font-bold bg-white h-16 rounded shadow-2xl text-cyan-800" title="close" htmlFor="footertoast">
                        &#128533; Failed to send Message!

                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                    </label>
                </div>)
            });
    }
    return (
        <div id="contactme">
            { alert }
      <div className='flex pt-10 justify-center items-center md:bg-gray-900 mx-4 md:mx-0 md:py-20 '>
            <div className='flex flex-col md:flex-row justify-between overflow-hidden md:overflow-visible
                                space-y-6 bg-gray-900 md:bg-none w-full max-w-4xl p-8 rounded-xl md:rounded-none shadow-lg md:shadow-none text-white'>
              <div className='flex flex-col justify-around'>
                  <div>
                      <h1 className='font-bold text-4xl tracking-wider hover:underline underline-offset-8'>Contact Me</h1>
                  </div>
                  <div className='flex mt-12 md:mt-0 flex-col space-y-4'>
                      <div className='inline-flex space-x-2 items-center'>
                          <ImPhone className='text-xl text-teal-300' />
                          <div className='text-cyan-100 text-sm '>+91 79892 16155</div>
                      </div>
                      <div className='inline-flex space-x-2 items-center'>
                          <SiGmail className='text-xl text-teal-300' />
                          <div className='text-cyan-100 text-sm '>kethansai77@gmail.com</div>
                      </div>
                      <div className='inline-flex space-x-2 items-center'>
                          <ImLocation2 className='text-xl text-teal-300' />
                          <div className='text-cyan-100 text-sm '>10-33, Nallapareddigari Palli, Bhakarapeta,<br/> Chittoor District, Andhra Pradesh - 517194</div>
                      </div>
                  </div>
                    <ul className='md:hidden m-auto mt-12 md:mt-20 flex'>
                        <li className='mx-3'>
                            <a target="_blank" href='https://www.facebook.com/kethan.sai.735/'>
                                <ImFacebook className='text-3xl hover:text-sky-400 transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-110' />
                            </a>
                        </li>
                        <li className='mx-3'>
                            <a target="_blank" href='https://wa.me/917989216155?text=Hi Kethan Vemuri'>
                                <ImWhatsapp className='text-3xl hover:text-green-500 transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-110' />
                            </a>
                        </li>
                        <li className='mx-3'>
                            <a target="_blank" href='https://www.linkedin.com/in/kethan-vemuri-079496144/'>
                                <FaLinkedinIn className='text-3xl hover:text-blue-400 transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-110' />
                            </a>
                        </li>
                    </ul>
                </div>
              <div className='relative'>
                  <div className='md:hidden absolute z-0 -top-16 md:-top-20 -right-20 w-32 h-32 rounded-full bg-teal-400'></div>
                  <div className='md:hidden absolute z-0 -left-20 -bottom-20 w-32 h-32 rounded-full bg-teal-400'></div>
                  <div className='relative z-10 bg-white text-gray-600 rounded-xl shadow-2xl p-8'>
                            <form ref={form} className='flex flex-col space-y-4 md:space-y-0' onSubmit={sendMail}>
                          <div>
                              <label htmlFor='name' className='text-sm font-bold'>Your name</label>
                              <input type="text" id='name' name='name' placeholder='Your name'
                                  className='ring-1 mt-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-500' />
                          </div>
                          <div>
                              <label htmlFor='email' className='text-sm font-bold'>Your email</label>
                              <input type="email" id='email' name='email' placeholder='Your email address'
                                  className='ring-1 mt-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-500' />
                          </div>
                          <div>
                              <label htmlFor='message' className='text-sm font-bold'>Message</label>
                                    <textarea id='message' name='message' placeholder='Enter your message here'
                                  className='ring-1 mt-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-500' />
                          </div>
                          <div>
                              <input type="submit" name='submit' value="SUBMIT"
                                  className='rounded-xl font-bold shadow-md hover:shadow-2xl bg-orange-400 text-white py-3 w-full' />
                          </div>
                      </form>
                  </div>
              </div>
          </div>
            </div>
        </div>
  )
}

export default Contactme