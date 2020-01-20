import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa'
import { DiJavascript, DiRuby, DiPostgresql } from "react-icons/di";


const Languages = () => {
    const languages = [
        {
            name:'HTML',
            logo: <FaHtml5 size='3em'/>
        },
        {
            name: 'CSS',
            logo: <FaCss3Alt size='3em' />
        },
        {
            name: 'JavaScript',
            logo: <DiJavascript size='3em' />
        },
        {
            name: 'GitHub',
            logo: <FaGithub size='3em' />   
        },
        {
            name: 'Node.js',
            logo: <FaNodeJs size='3em' />
        },
        {
            name: 'React.js',
            logo: <FaReact size='3em' />
        },
        {
            name: 'Ruby',
            logo: <DiRuby size='3em' />
        },
        {
            name: 'PostgreSQL',
            logo: <DiPostgresql size='3em' />
        }
        

    ]
    return (
        <>  
            <div className='languages'>
            <h4>Languages:</h4>
            <div className='languages-container'>
                {languages.map(language => {
                    return (
                        <div className='language-logo-container'>
                            {language.logo}
                        <p>{language.name}</p>
                        </div>
                    )
                })}
                </div>
                
            </div>
        </>
    )
}

export default Languages