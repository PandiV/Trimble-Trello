import { connect } from "react-redux";
import Card from "layouts/Dashboard/ProjectBoard/BoardList/Card";
import { bindActionCreators } from "redux";
import { swapTasks } from "actions/status";

const mapStateToProps = (state, props) => {
  return state.tasks.byId[props.id];
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      swapTasks,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
