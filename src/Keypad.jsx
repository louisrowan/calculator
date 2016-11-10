const React = require('react')
const Number = require('./Number')

const Keypad = React.createClass({
  render(){
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const numClick = this.props.numClick
    return (
      <div className='keypad-div'>
        {numbers.map(function(n, i){ return <Number num={n} key={i} numClick={numClick} /> })}
        <Number num={'clear'} numClick={numClick} />
      </div>
    )
  }
})

module.exports = Keypad