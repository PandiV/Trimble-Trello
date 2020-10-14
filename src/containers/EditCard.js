import { connect } from "react-redux";
import EditCard from "layouts/Dashboard/ProjectBoard/BoardList/Card/EditCard";
import { bindActionCreators } from "redux";
import { updateDesc, addCommentsFromTask } from "actions/tasks";
import { deleteTaskFromStatus } from "actions/status";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateDesc,
      addCommentsFromTask,
      deleteTaskFromStatus,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(EditCard);
