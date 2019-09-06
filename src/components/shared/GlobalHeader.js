import React from 'react'
import { Link } from 'react-router-dom'

class GlobalHeader extends React.Component {
  render() {
    return (
      <div>
        <h1>Global Header</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/dogs'>Dogs</Link>
          </li>
          <li>
            <Link to='/dogswithhooks'>Dogs with Hooks</Link>
          </li>

          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/starfish'>Starfish with Styles</Link>
          </li>
          <li>
            <Link to='/baboon'>Baboon Bootstrap Demo</Link>
          </li>
          <li>
            <Link to='/meerkat'>Meerkat useMediaQuery Responsive Demo</Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default GlobalHeader
