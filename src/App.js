import React, { useState, useEffect } from "react";
import APOD from "./containers/APOD";
import LineChart from "./containers/LineChart";
import './App.css';

const App = () => {
  const [apod, setApod] = useState({})

  useEffect(() => {
    APOD.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  return (
    <><div className="App">
      <header>
        <img class="logo" src="https://www.pngrepo.com/png/275999/512/rocket.png" alt="fusée" height="50px" width="50px" ></img>
        <h2>NASA'S DASHBOARD</h2>
      </header>
    </div>

      <div className="APOD">
        {apod && (
          <><article>
            <img src={apod.url}
              alt="APOD" />
          </article>
            <div className="rect1">
              <p className="description"> {apod.explanation}</p>
            </div></>
        )}
      </div>
      <div className="rect">
        <div className="rect2">
          <h1 className="txt"> {apod.date}</h1>
        </div>
        <div className="rect2">
          <h1 className="txt"> {apod.title}</h1>
        </div>
        <div className="rect2">
          <LineChart />
        </div>
      </div>

      <div className="API">
        <h1 className="txt">API</h1>
      </div>
    </>
  )
}

export default App