import React from "react";
import { Button } from 'bootstrap-react'
import { Link } from 'react-router-dom'

function error404() {
  return (
    <div>
      <h1>404 | This page could not be found</h1>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go to Home
      </ Button>
    </div>
  )
}

export default error404