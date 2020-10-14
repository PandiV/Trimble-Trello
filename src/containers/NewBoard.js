import { connect } from "react-redux";
import NewBoard from "layouts/Dashboard/ProjectBoard/NewBoard";
import { bindActionCreators } from "redux";
import { addNewStatus } from "actions/status";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addNewStatus,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(NewBoard);
