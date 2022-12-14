import React , {Component} from 'react'

class Counter extends Component {
  state = {
    count:0
  };

    formatCount() {
    const {count} = this.state;
    return count === 0 ? "Zero" :this.state.count;
  }

render() {
  let classes = "badge m-2 badge-";
  classes += this.state.count ===0

  return (
    <div>
      <span className="badge badge-primary m-2">{this.formatCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
    </div>
  ); 
}
}
export default Counter