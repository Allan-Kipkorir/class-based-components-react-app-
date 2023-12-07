import classes from './User.module.css';
import { Component } from 'react';
//this is a class based component
class User extends Component{
  render(){
    return (<li className={classes.user}>{this.props.name}</li>)
  }
}
//this is a functional component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
