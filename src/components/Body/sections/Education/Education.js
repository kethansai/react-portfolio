import React from 'react'
import svceLogo from '../../../../asset/logos/svce-logo.png'
import narayanaLogo from '../../../../asset/logos/narayana-logo.png'
import zphsLogo from '../../../../asset/logos/school-logo.png'
const Education = () => {
  return (
      <div id="education">
          <div className=' pt-20 py-12 md:px-44'>
              <h2 className='uppercase text-3xl text-center text-cyan-800 md:text-white font-bold'>Education</h2>
              <div className='flex py-4 flex-col md:flex-row mt-6 space-y-6 md:space-y-0 md:space-x-6 space-x-0 justify-center items-center '>
                  <div className='relative w-9/12 md:w-1/3'>
                      <div className='absolute z-0 inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 rounded-md'>
                      </div>
                      <div className='relative card m-2 px-6 py-10 bg-gray-800 md:h-auto rounded-xl shadow-2xl text-white'>
                            <img src={svceLogo} className='md:w-32 w-48 mb-6 md:mb-4 m-auto md:h-32'/>
                            <div className='text-xl font-bold text-center'>
                                Sri Venkateswara College of Engineering    
                            </div>
                            <div className='font-bold text-center'>
                              <br className='hidden xl:block' /> Computer Science and Engineering (CSE)<br/>
                                First Class - 69.13%
                            </div>
                            <div className='font-bold text-center'>
                                Karakambadi road, Tirupati - 517502.
                            </div>
                        </div>
                    </div>
                  <div className='relative w-9/12 md:w-1/3'>
                      <div className='absolute z-0 inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 rounded-md'>
                      </div>
                      <div className='relative card m-2 px-6 py-10 bg-gray-800 md:h-auto rounded-xl shadow-2xl text-white'>
                        <img src={narayanaLogo} className='md:w-32 w-48 mb-6 md:mb-4 m-auto md:h-32'/>
                        <div className='text-xl font-bold text-center'>
                            Narayana Junior College
                        </div>
                        <div className='font-bold text-center'>
                            <br/>Maths Physics and Chemistry (MPC)<br/>
                            First Class with distinction - 93.00%
                        </div>
                        <div className='font-bold text-center'>
                            Gandhi road, Tirupati - 517501.
                        </div>
                    </div>
                </div>
                  <div className='relative w-9/12 md:w-1/3'>
                      <div className='absolute z-0 inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 rounded-md'>
                      </div>
                      <div className='relative card px-6 py-10 m-2 z-10 bg-gray-800 md:h-auto rounded-md shadow-2xl text-white'>
                          <img src={zphsLogo} className='md:w-32 w-48 mb-6 md:mb-4 m-auto md:h-32' />
                          <div className='text-xl font-bold text-center'>
                              Zilla Parishad High School
                          </div>
                          <div className='font-bold text-center'>
                              <br />Secondary School Education (SSC)<br />
                              First Class with distinction - 9 CGPA
                          </div>
                          <div className='font-bold text-center'>
                              Bhakarapet, Tirupati - 517194.
                          </div>
                      </div>
                  </div>
            </div>
          </div>
    </div>
  )
}

export default Education