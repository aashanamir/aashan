import React from 'react';
import Arrow from "../../shared/Arrow";
import "./style.scss";

const Showcase = ({data , transition}) => {
  return (
    <div className='projects-showcase'>
      {
        data.map((project)=>{
          return  <div key={project.id}
          className={`showcase-item ${transition === "zoomin" ? "zoomin" : transition === "zoomout" ? "zoomout" : ""}`}>
              <a href={project.url} target='_blank'>
                <div className="meta-data">
                    <h3>{project.name}</h3>
                    <div className="go-to-cta">
                        <span className='text'>Project Details</span>
                        <Arrow/>
                    </div>
                </div>
                </a>
                <img src={project.media.thumbnail} alt={project.name} />
            </div>
        })
      }
    </div>
  )
}

export default Showcase
