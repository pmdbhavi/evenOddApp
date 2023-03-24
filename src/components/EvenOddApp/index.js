import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="contain">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {count % 2 === 0 ? 'Even' : 'Odd'}</p>
          <button className="button" type="button" onClick={this.increment}>
            Increment
          </button>
          <p className="paragraph">
            * Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
