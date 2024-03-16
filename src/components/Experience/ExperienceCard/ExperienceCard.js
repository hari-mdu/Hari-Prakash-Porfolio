import React from 'react';

import './ExperienceCard.css';

const ExperienceCard = ({exp}) => {
  return (
    <div className='expCard'>
      <div className='expCardTop'>
        <img  className='expCardLogo'src={exp.img} alt={`${exp.company} logo`}/>
        <div className='expCardBody'>
          <div className='expCardRole'>{exp.role}</div>
          <div className='expCardCompany'>{exp.company}</div>
          <div className='expCardDate'>{exp.date}</div>
        </div>
      </div>
      <div className='expCardDesc'>
        {exp?.desc && 
          <span className='expCardDescBody'>{exp?.desc}</span>
        }  
        {exp?.skills &&
          <>
            <br />
            <div className='expCardDescSkills'>
              <b>Skills:</b>
              <div className='expCardDescSkillsList'>
                {
                  exp?.skills?.map((skill, index) => (
                    <div className='expCardDescSkill' key={index}>• {skill}</div>
                  ))
                }
              </div>
            </div>
          </>
        }     
      </div>
      {/* <div style={{display: "flex"}}> */}
        {exp?.doc &&
          <a href={exp?.doc} className='certi' target='new'>
            View Cetificate
          </a>
        }
        {exp?.doc1 &&
          <a href={exp?.doc1} className='certi' target='new'>
            View Cetificate
          </a>
        }
      {/* </div> */}
    </div>
  )
}

export default ExperienceCard