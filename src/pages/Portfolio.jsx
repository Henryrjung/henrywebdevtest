import React from 'react'
import './Portfolio.scss'
import Project from '../components/project/Project'
import API from '../api/Api.json'

export default function Portfolio() {
  const projects = API.projects
  return (
    <div className='portfolio'>
      <h1>Portfolio</h1>
      <div className="projects">
        {projects.map(project => {
          return(
            <Project project={project} />
          )
        })}
      </div>
    </div>
  )
}
