const React = require('react')

const Number = React.createClass({
  render() {
    return (
      <div className='num-div'>
        <button onClick={() => { this.props.numClick(this.props.num) }} >{this.props.num}</button>
      </div>
    )
  }
})

module.exports = Number