import { connect } from "react-redux";
import ProjectBoard from "layouts/Dashboard/ProjectBoard";

const mapStateToProps = (state) => ({
  list: state.status.allIds.map((data) => state.status.byId[data]),
});

export default connect(mapStateToProps, null)(ProjectBoard);
