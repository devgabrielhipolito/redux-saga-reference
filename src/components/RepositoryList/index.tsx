import { connect } from "react-redux";
import { ApplicationState } from "../../redux/store";

import { Repository } from "../../redux/store/ducks/repositories/types";
import * as RepositoriesActions from "../../redux/store/ducks/repositories/actions";
import { FC } from "react";
import { bindActionCreators, Dispatch } from "redux";

interface StateProps {
  repositories: Repository[];
}
interface DispatchProp {
  loadRequest(): void,
  
}

interface OnwProps {

}
type Props = StateProps & DispatchProp & OnwProps;

export const RepositoryList: FC<Props> = ({ loadRequest }) => {

  loadRequest()
  return (
    <>
      <p>Hello</p>
    </>
  );
};

const mapStateProps = (state: ApplicationState) => ({
  repo: state.repositories.data,
});

const  mapDispatchProps  = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateProps,mapDispatchProps)(RepositoryList);
