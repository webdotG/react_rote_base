import { Link } from "react-router-dom"
import { Home } from "./Homepage"

const Notfound = () => {
  return (
    <div>
      <h1>page doesn't exist, link to <Link to='/'>home page</Link> </h1>
    </div>
  )
}

export {Notfound}