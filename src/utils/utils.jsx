export function getTable (stateSetter, url) {
  fetch(url)
    .then(data => {
      if (data.ok) {
        return data.json()
      } else {
        return false
      }
    })
    .then((data) => {
      stateSetter(data);
      return true
    })
}

export function getEntity (stateSetter, url) {
  fetch(url)
    .then(data => data.json(), error => console.log('error fetching: ' + error))
    .then((data) => {
      stateSetter(data)
    })
}

export function renderButtons (stateSetter, page, results) {
  function handleNext() {
    if (results.next) {
      stateSetter(page+1)
    }
  }
  function handlePrev() {
    if (results.previous) {
      stateSetter(page-1)
    }
  }
  return (
  <div className="nextPrevButtons">
    <button onClick={handlePrev}>Previous</button>
    <button onClick={handleNext}>Next</button>
  </div>
  )

}