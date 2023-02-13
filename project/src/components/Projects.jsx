import React from 'react'

function Projects(props) {
  const {name, desc, stack, gitHubUrl, website, imgURL} = props
  return (
    <section className="project">
      <img src={imgURL} alt="" />
      <div className="content">
        <h2>{name}</h2>
        <p className="desc">{desc}</p>
        <div className="stack">
          Built with
          <span>{stack}</span>
        </div>
        <div className="project-links">
          <a href={gitHubUrl.url} target="_blank" rel="noopener noreferrer">
            {gitHubUrl.icon}
          </a>
          <a href={website.url} target="_blank" rel="noopener noreferrer">
            {website.icon}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects