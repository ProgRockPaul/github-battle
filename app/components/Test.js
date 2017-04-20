var React = require('react');
var ReactDOM = require('react-dom');

class Test extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedGuitar: 'All'
    };

// we don't know what 'this' is bound to until the updateGuitar function is invoked
// the .bind property returns a brand new function bound to context keyword 'this'
//whenever you create a new function, this is undefined.
// to define it you must
    this.updateGuitar = this.updateGuitar.bind(this);
  }
  updateGuitar(git){
    this.setState(function (){
      return {
        selectedGuitar: git
      }
    });
  }
  render() {
    // console.log('Right here', this)

    var guitars = ['All', 'Schecter', 'Ibanez', 'Gibson'];

    return (
      <ul className='languages'>
        {guitars.map(function (git){
          return (
            <li
            onClick={this.updateGuitar}
            key={git}>
              {git}
            </li>
          )
        })}
      </ul>
    )
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('test')
);
