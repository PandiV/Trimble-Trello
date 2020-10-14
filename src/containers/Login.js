import { connect } from "react-redux";
import Login from "layouts/Login";
import { bindActionCreators } from "redux";
import { userAuthentication, resetUsers } from "actions/users";

const mapStateToProps = state => ({
  shouldRedirect: getRedirectStatus(
    state.users.currentUser,
    state.users.userList
  )
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      userAuthentication,
      resetUsers
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const getRedirectStatus = (currentUser, userList) => {
  if (currentUser.length === 0) {
    return false;
  }

  return userList.some(
    ({ username, isLoggedIn }) => username === currentUser && isLoggedIn
  );
};
