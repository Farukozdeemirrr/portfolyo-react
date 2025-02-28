import React from 'react'
import ProjectItem from '../components/ProjectItem.js';
import { ProjectList } from '../helpers/ProjectList';


function Projects() {
  return (
    <div className='projects' >
      <h1>Projelerim</h1>
      <div className='projectList'>
        {ProjectList.map((project)=>{
          return <ProjectItem name={project.name} image={project.image}/>
        })}
      </div>
    </div>
  )
}

export default Projects