// Write your JS code here
import './index.css'

const Header = () => {
  const hello = 'hi'

  return (
    <nav>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="header-logo-image"
      />
      <ul className="navbar-options">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <li>
          <button className="logout-button" type="button">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
