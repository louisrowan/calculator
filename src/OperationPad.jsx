const React = require('react')
const Operation = require('./Operation')

const OperationPad = React.createClass({
  render() {
    const operations = ['*', '-', '+', '/', '=']
    const numClick = this.props.numClick
    return (
      <div className='operation-div'>
        {operations.map(function(o, i) { return <Operation op={o} key={i} numClick={numClick} /> })}
      </div>
    )
  }
})

module.exports = OperationPad