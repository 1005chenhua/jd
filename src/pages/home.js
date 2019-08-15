import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '@/redux/actions';

const Home = ({ user, onClick }) => {
  return (
    <>
      <div>{user.name}</div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(getUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
