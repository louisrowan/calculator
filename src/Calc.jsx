const React = require('react')
const Keypad = require('./Keypad')
const Status = require('./Status')
const OperationPad = require('./OperationPad')

const Calc = React.createClass({
  getInitialState: function(){
    return {
      lastNum: '',
      currentOperation: '',
      currentNum: '',
      statusBar: ''
    }
  },
  setVal: function(e){
    if ( e === 'clear') {
      this.setState({ statusBar: '', currentOperation: '', currentNum: '', lastNum: '' })
    } else if ( e === '*' || e === '-' || e === '+' || e === '/'){
      this.setState({ lastNum: this.state.statusBar, currentOperation: e, currentNum: ''})
    } else if ( e === '=' ) {
      this.setState({ currentNum: this.state.statusBar })
      let answer
      if ( this.state.currentOperation === '+'){
        answer = parseInt(this.state.lastNum, 10) + parseInt(this.state.statusBar, 10)
      } else if (this.state.currentOperation === '-'){
        answer = parseInt(this.state.lastNum, 10) - parseInt(this.state.statusBar, 10)
      } else if (this.state.currentOperation === '*'){
        answer = parseInt(this.state.lastNum, 10) * parseInt(this.state.statusBar, 10)
      } else {
        answer = parseInt(this.state.lastNum, 10) / parseInt(this.state.statusBar, 10)
      }
      this.setState({ statusBar: answer, lastNum: '', currentNum: '', currentOperation: ''})
    } else {
      this.setState({ statusBar: this.state.currentNum + e, currentNum: this.state.currentNum + e })
    }
  },
  handleClick: function(val){
    this.setVal(val)
  },
  render(){
    return (
      <div className='calculator-box'>
        <Status val={this.state.statusBar} />
        <Keypad numClick={this.handleClick} />
        <OperationPad numClick={this.handleClick} />
      </div>
    )
  }
})

module.exports = Calc