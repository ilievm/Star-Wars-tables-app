import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import {getTable, renderButtons} from '../utils/utils'
import {apiBase} from '../const/const'

export default function Characters() {
  
  const [shipData, setCharacterData] = useState([])
  const [page, setPage] = useState(1)
  
  let url = `${apiBase}planets/?page=${page}`

  useEffect(() => {
    getTable(setCharacterData, url)
  }, [page])

  return (
    <main className="tablePage">
      <div className="breadCrumbs"><p className="breadcrumb"><Link to="/">Home</Link> / Planets</p></div>
      <h2>Planets</h2>
      {shipData.results?<div className="dataTable">
        <div className="colNames">
        <span className="colSpan">Name</span>
          <span className="colSpan">Gravity</span>
          <span className="colSpan">Diameter</span>
        </div>

        <div className="tableBody">
        {shipData?.results?.map((el, number) => {
          return <div className="tableCol" key={el.name}>
            <Link to={`/planets/${el.url.match(/\d+/)[0]}`}>
              <span className="colSpan">{el.name}</span>
              <span className="colSpan">{el.gravity}</span>
              <span className="colSpan">{el.diameter}</span>
            </Link>
          </div>
        })}
        </div>

        {renderButtons(setPage, page, shipData)}

      </div>
      :'Loading...'}
      <Outlet />
    </main>
  );
}