import React from "react";
import {connect } from 'react-redux';
import * as actions from '../actions';


const Counter = ({counter, inc,dec,rst,rnd}) => {
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button className="btn btn-primary" onClick={inc}>INC</button>
      <button className="btn btn-primary" onClick={dec}>DEC</button>
      <button className="btn btn-primary" onClick={rst}>RESET</button>
      <button className="btn btn-primary" onClick={rnd}>RND</button>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    counter: state
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);

// }
export default connect(mapStatetoProps, actions)(Counter);
