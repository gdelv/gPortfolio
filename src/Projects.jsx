import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { DiJavascript } from "react-icons/di";
const greenEnergyPic = require('./images/greenEnergy.png')
const predictionWorldPic = require('./images/predictionWorld.png')

const Projects = () => {
    const projects = [
        {
            title: "Green Energy",
            description: "My first website created using HTML, CSS and JavaScript.",
            img: greenEnergyPic,
            webLink: "https://gdelv.github.io/fireWebsite/",
            repoLink: "https://github.com/gdelv/fireWebsite",
            technologyUsed: [
                {
                    name: 'HTML',
                    logo: <FaHtml5 size='3em' />
                },
                {
                    name: 'CSS',
                    logo: <FaCss3Alt size='3em' />
                },
                {
                    name: 'JavaScript',
                    logo: <DiJavascript size='3em' />
                }
            ]
        },
        {
            title: "Prediction World",
            description: "Created a website using React and RESTful API data to post future predictions",
            img: predictionWorldPic,
            webLink: "http://www.predictionworld.surge.sh/",
            repoLink: "https://github.com/gdelv/fantasyTALK",
            technologyUsed: [
                {
                    name: 'HTML',
                    logo: <FaHtml5 size='3em' />
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
                    name: 'React',
                    logo: <FaReact size='3em' />
                }
            ]
        }
    ]
    return (
        <div className='projects-container' id='projects'>
            <h4>Projects:</h4>
            {projects.map(project => {
                return (
                    <div className='project'>
                        <img src={project.img} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className='tech-button-container'>
                            <form action={project.webLink} target='_blank'>
                                <button type='submit'>Web Link</button>
                            </form>

                            <form action={project.repoLink} target='_blank'>
                                <button type='submit'>Repo Link</button>
                            </form>

                        </div>
                        <div className='tech-container'>
                            {project.technologyUsed.map(tech => {
                                return (
                                    <div className='tech'>
                                        {tech.logo}
                                        <p>{tech.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects