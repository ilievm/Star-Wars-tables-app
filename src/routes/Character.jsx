import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import {getEntity} from '../utils/utils'

export default function Character() {
  let params = useParams();
  
  const [entityData, setEntityData] = useState({})
  
  useEffect(() => {
    let url = `https://swapi.dev/api/people/${params.characterNum}/`
    getEntity(setEntityData, url);
  }, [])

  useEffect(() => {
  }, [entityData])

  return (
    <div className="tablePage">
      <div className="breadCrumbs"><p className="breadcrumb"><Link to="/">Home</Link> / <Link to="/planets">Characters</Link> / {entityData?.name}</p></div>

      {entityData?
      <div className="dataTable">
        <div className="listOfEntities">
          <div className="entry">
            <span className="colSpan">Name </span><span className="colSpan">{entityData?.name}</span>
          </div>
          <div className="entry">
            <span className="colSpan">Birth Year </span><span className="colSpan">{entityData?.birth_year}</span>
          </div>
          <div className="entry">
            <span className="colSpan">Eye Color </span><span className="colSpan">{entityData?.eye_color}</span>  
          </div>
          <div className="entry">
            <span className="colSpan">Gender </span><span className="colSpan">{entityData?.gender}</span>  
          </div>
          <div className="entry">
            <span className="colSpan">Hair Color </span><span className="colSpan">{entityData?.hair_color}</span>  
          </div>
          <div className="entry">
            <span className="colSpan">Height </span><span className="colSpan">{entityData?.height}</span>  
          </div>
          <div className="entry">
            <span className="colSpan">Mass </span><span className="colSpan">{entityData?.mass}</span>  
          </div>
        </div>
      </div>:
      <div>Loading...</div>}
    </div>
  )
}