import { connect } from "react-redux";
import Header from "layouts/Dashboard/Header";
import { bindActionCreators } from "redux";
import { resetUsers } from "actions/users";

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      resetUsers
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
