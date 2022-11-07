// Write your JS code here

import './index.css'
import Header from '../Header'

const Home = () => {
  const hello = 'hello'
  return (
    <div className="home-route-container">
      <Header />
      <div className="content">
        <div className="content-content">
          <h1>Clothes That Get You Noticed</h1>
          <p>
            fashion is a part of the daily air and it does not quite help that
            it changes at the time clothes have always been a makes you been
            seen and heard that way you are so , celebrate the seasons new and
            exciting fashion in your own way
          </p>
          <button type="button" className="shopnow-button">
            Shop Now
          </button>
        </div>
        <img
          className="clothes-that-get-you-noticed-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  )
}

export default Home
