import { connect } from "react-redux";
import BoardList from "layouts/Dashboard/ProjectBoard/BoardList";
import { bindActionCreators } from "redux";
import { swapStatus, swapTasks, deleteStatus } from "actions/status";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ swapStatus, swapTasks, deleteStatus }, dispatch);
};

export default connect(null, mapDispatchToProps)(BoardList);
