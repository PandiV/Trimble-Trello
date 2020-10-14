import { connect } from "react-redux";
import Routes from "routes";

const mapStateToProps = state => ({
  isAuthenticated: state.users.currentUser.length > 0
});

export default connect(mapStateToProps, null)(Routes);
