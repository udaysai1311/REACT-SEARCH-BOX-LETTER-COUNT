import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {value: 0}

  onEnter = event => {
    console.log(event.target.which)
    this.setState(prevState => ({value: prevState.value + 1}))
  }

  render() {
    const {value} = this.state
    return (
      <div className="bg">
        <div className="written-part-container">
          <h1 className="head">
            Calculate the Letters
            <br /> you enter
          </h1>
          <label htmlFor="search1" className="label">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            id="search1"
            placeholder="Enter the phrase"
            onChange={this.onEnter}
            className="input-box"
          />
          <div className="count">
            <p>No.of letters: {value}</p>
          </div>
        </div>
        <div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
