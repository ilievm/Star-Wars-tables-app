import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import {getEntity} from '../utils/utils'

export default function Planet() {
  let params = useParams();
  let url = `https://swapi.dev/api/planets/${params.planetNum}/`

  const [entityData, setEntityData] = useState({})

  useEffect(() => {
    getEntity(setEntityData, url);
  }, [])

  useEffect(() => {
  }, [entityData])

  return (
    <div className="tablePage">
      <div className="breadCrumbs"><p className="breadcrumb"><Link to="/">Home</Link> / <Link to="/planets">Planets</Link> / {entityData?.name}</p></div>

      {entityData?
      <div className="dataTable">
        <div className="listOfEntities">
          <div className="entry">
            <span className="colSpan">Name </span><span className="colSpan">{entityData?.name}</span>
          </div>
          <div className="entry">
            <span className="colSpan">Climate </span><span className="colSpan">{entityData?.climate}</span>
          </div>
          <div className="entry">
            <span className="colSpan">Gravity </span><span className="colSpan">{entityData?.gravity}</span>  
          </div>
          <div className="entry">
            <span className="colSpan">Orbital Period </span><span className="colSpan">{entityData?.orbital_period}</span>  
          </div>
          <div className="entry">
            <span className="colSpan">Population </span><span className="colSpan">{entityData?.population}</span>  
          </div>
          <div className="entry">
            <span className="colSpan">Terrain </span><span className="colSpan">{entityData?.terrain}</span>  
          </div>
        </div>
      </div>:
      <div>Loading...</div>}
    </div>
  )
}