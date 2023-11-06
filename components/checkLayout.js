import React from 'react';
import { connect } from 'react-redux';
import { user, company } from '../actions/Layout';



const Counter = ({ count, user, company }) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={user}>USER</button>
      <button onClick={company}>COMPANY</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = {
  user,
  company
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);