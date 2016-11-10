const React = require('react')

const Operation = React.createClass({
  render() {
    return (
      <div className='num-div'>
        <button onClick={() => { this.props.numClick(this.props.op) }} >{this.props.op}</button>
      </div>
    )
  }
})

module.exports = Operation