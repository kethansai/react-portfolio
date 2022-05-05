import React, { useState } from 'react'
import './Skills.css';
import { DiJavascript1 } from 'react-icons/di';
import {
    SiTypescript, SiAzuredevops, SiJquery, SiMongodb, SiMysql,
    SiHtml5, SiCss3, SiBootstrap, SiPhp, SiPython, SiJava, SiTableau, SiPowerbi, SiTailwindcss
} from 'react-icons/si';
import { FaAngular, FaReact, FaNodeJs, FaVuejs, FaGitAlt } from 'react-icons/fa';
import { AiFillApi } from 'react-icons/ai';

const Skills = () => {
    const [skill, setSkill] = useState({id:"",perc:"",exp:"",flag:false});
    let skills = [
        { id: 1, name: "Node JS", percentage: "70%", exp: "1.0", icon: <FaNodeJs className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 2, name: "Angular 9+", percentage: "85%", exp: "1.8", icon: <FaAngular className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 3, name: "React JS", percentage: "86%", exp: "1.2", icon: <FaReact className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 4, name: "Vue JS", percentage: "68%", exp: "0.5", icon: <FaVuejs className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 5, name: "Git", percentage: "68%", exp: "0.5", icon: <FaGitAlt className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 6, name: "TypeScript", percentage: "89%", exp: "1.8", icon: <SiTypescript className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 7, name: "JavaScript", percentage: "82%", exp: "2.0", icon: <DiJavascript1 className='text-2xl w-8 -ml-3 h-5 -my-5'/> },
        { id: 8, name: "Azure Devops", percentage: "65%", exp: "0.8", icon: <SiAzuredevops className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 9, name: "JQuery", percentage: "73%", exp: "1.2", icon: <SiJquery className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 10, name: "MongoDB", percentage: "62%", exp: "0.6", icon: <SiMongodb className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 11, name: "MYSQL", percentage: "88%", exp: "2.3", icon: <SiMysql className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 12, name: "Rest API's", percentage: "95%", exp: "0.8", icon: <AiFillApi className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 13, name: "HTML5", percentage: "96%", exp: "3.5", icon: <SiHtml5 className='text-2xl w-8 -ml-3 h-5 -my-5' />},
        { id: 14, name: "CSS3", percentage: "87%", exp: "3.5", icon: <SiCss3 className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 15, name: "Bootstrap", percentage: "90%", exp: "2.3", icon: <SiBootstrap className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 16, name: "Tailwind", percentage: "86%", exp: "0.9", icon: <SiTailwindcss className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 17, name: "PHP", percentage: "92%", exp: "1.8", icon: <SiPhp className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 18, name: "Python", percentage: "64%", exp: "0.9", icon: <SiPython className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 19, name: "Java", percentage: "80%", exp: "0.8", icon: <SiJava className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 20, name: "Tableau", percentage: "56%", exp: "0.2", icon: <SiTableau className='text-2xl w-8 -ml-3 h-5 -my-5' /> },
        { id: 21, name: "PowerBi", percentage: "63%", exp: "0.2", icon: <SiPowerbi className='text-2xl w-8 -ml-3 h-5 -my-5' />},
    ];
    const showRatings = (id) => {
        let data = skills.filter(item => item.id === id)[0];
        setSkill({ id:id,perc: data.percentage, exp: data.exp, flag: true });
    }
  return (
      <div id="skills">
          <h1 className='text-4xl text-center font-bold pt-20 text-cyan-800'>SKILLS</h1>
          <div className='flex flex-col items-center justify-between space-y-6
                          rounded-lg max-w-5xl m-auto px-6 md:px-12 py-8'>
              <div className={skill.flag ? "relative pt-1 w-10/12":"hidden"}>
                  <div className="flex mb-2 items-center justify-between">
                      <div>
                          <span className="text-md font-semibold inline-block py-1 px-2 uppercase rounded-lg text-cyan-800 bg-orange-300">
                              {skill.exp !== "" ?
                                  'EXP: ' + (skill.exp.split('.')[0] !== '0' ? skill.exp.split('.')[0] + ' Years + ':'' )+ skill.exp.split('.')[1] + ' Months ' : null}
                          </span>
                      </div>
                      <div className="text-right">
                          <span className="text-xl font-semibold inline-block text-teal-600">
                              {skill.perc}
                          </span>
                      </div>
                  </div>
                  <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-pink-300">
                      <div style={{width:skill.perc}} className="shadow-none pbar flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-600"></div>
                  </div>
              </div>

              <div>
                  {
                      skills.map(item => (
                          <div key={item.id} itemID={item.id}
                              className={skill.id !== item.id ?
                                  "float-left flex items-center mx-2 my-2 text-center py-2 px-4 font-bold cursor-pointer bg-cyan-800 hover:bg-orange-300 text-white hover:text-cyan-800" :
                                  "float-left flex items-center mx-2 my-2 text-center py-2 px-4 font-bold cursor-pointer bg-orange-300 text-cyan-800"}
                              onClick={() => showRatings(item.id)}>
                              {item.icon}
                              {item.name}
                          </div>
                      ))
                  }
              </div>
          </div>
    </div>
  )
}

export default Skills