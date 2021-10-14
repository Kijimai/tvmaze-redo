//Searchable movies and tv shows
//click to show more info about the show
//Save to watch list -- saved on localstorage
//when movie item is clicked inside the watch list, go to page with remove or rating system

import React from "react"
import Main from "./components/Main"
import Error from "./components/Error"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
