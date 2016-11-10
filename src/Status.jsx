const React = require('react')

const Status = React.createClass({
  render(){
    return (
      <div className='status-div'>
        <input value={this.props.val} />
      </div>
    )
  }
})

module.exports = Status