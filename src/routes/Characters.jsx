import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import {getTable, renderButtons} from '../utils/utils'
import {apiBase} from '../const/const'

export default function Characters() {
  
  const [charData, setCharacterData] = useState([])
  const [page, setPage] = useState(1)
  
  let url = `${apiBase}people/?page=${page}`

  useEffect(() => {
    getTable(setCharacterData, url)
  }, [page])

  return (
    <main className="tablePage">
      <div className="breadCrumbs"><p className="breadcrumb"><Link to="/">Home</Link> / Characters</p></div>
      <h2>Characters</h2>
      {charData.results?<div className="dataTable">
        <div className="colNames">
          <span className="colSpan">Name</span>
          <span className="colSpan">Mass</span>
          <span className="colSpan">Birth year</span>
        </div>

        <div className="tableBody">
        {charData?.results?.map((el, number) => {
          return <div className="tableCol" key={el.name}>
            <Link to={`/characters/${el.url.match(/\d+/)[0]}`}>
              <span className="colSpan">{el.name}</span>
              <span className="colSpan">{el.mass}</span>
              <span className="colSpan">{el.birth_year}</span>
            </Link>
          </div>
        })}
        </div>

        {renderButtons(setPage, page, charData)}

      </div>
      :'Loading...'}
      <Outlet />
    </main>
  );
}