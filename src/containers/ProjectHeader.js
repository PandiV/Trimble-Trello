import { connect } from "react-redux";
import ProjectHeader from "layouts/Dashboard/ProjectHeader";

const mapStateToProps = (state) => ({
  sprintName: state.status.sprintName,
});

export default connect(mapStateToProps, null)(ProjectHeader);
