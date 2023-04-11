import {Component} from 'react'
import './index.css'

export default class CoinToss extends Component {
  constructor(props) {
    super(props)

    this.state = {
      heads: 0,
      tails: 0,
      face: 'heads',
    }
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState({face: 'heads'})
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState({face: 'tails'})
    }
  }

  render() {
    const {heads, tails, face} = this.state
    const totalCount = heads + tails
    return (
      <div className="coin-container">
        <div className="main-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          {face === 'heads' ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="heads"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="heads"
              alt="toss result"
            />
          )}
          <button type="button" className="toss-coin" onClick={this.tossCoin}>
            Toss coin
          </button>
          <div className="calculations">
            <p>Total: {totalCount}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails} </p>
          </div>
        </div>
      </div>
    )
  }
}
