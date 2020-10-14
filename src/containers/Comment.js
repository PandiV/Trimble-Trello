import { connect } from "react-redux";
import Comment from "layouts/Dashboard/ProjectBoard/BoardList/Card/EditCard/CommentsHistory/Comment";

const mapStateToProps = (state, props) => {
  return state.comments.byId[props.id];
};

export default connect(mapStateToProps, null)(Comment);
