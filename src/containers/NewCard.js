import { connect } from "react-redux";
import NewCard from "layouts/Dashboard/ProjectBoard/BoardList/NewCard";
import { bindActionCreators } from "redux";
import { addNewTaskFromStatus } from "actions/status";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addNewTaskFromStatus,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(NewCard);
