import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import {getEntity} from '../utils/utils'

export default function Character() {
  let params = useParams();
  let url = `https://swapi.dev/api/starships/${params.starshipNum}/`

  const [entityData, setCharacterData] = useState({})

  useEffect(() => {
    getEntity(setCharacterData, url);
  }, [])

  return (
    <div className="tablePage">
      <div className="breadCrumbs"><p className="breadcrumb"><Link to="/">Home</Link> / <Link to="/starships">Starships</Link> / {entityData?.name}</p></div>

      {entityData.length?
      <div className="dataTable">
        <div className="listOfEntities">
          <div className="entry">
            <span className="colSpan">Name </span><span className="colSpan">{entityData?.name}</span>
          </div>
          <div className="entry">
            <span className="colSpan">Model </span><span className="colSpan">{entityData?.model}</span>  
          </div>
          <div className="entry">
            <span className="colSpan">MGLT </span><span className="colSpan">{entityData?.MGLT}</span>  
          </div>
          <div className="entry">
            <span className="colSpan">Consumables </span><span className="colSpan">{entityData?.consumables}</span>  
          </div>
          <div className="entry">
            <span className="colSpan">Cargo Capacity </span><span className="colSpan">{entityData?.cargo_capacity}</span>  
          </div>
          <div className="entry">
            <span className="colSpan">Crew </span><span className="colSpan">{entityData?.crew}</span>  
          </div>
        </div>
      </div>:
      <div>Loading...</div>}
    </div>
  )
}