import { Reducer } from "redux";
import { RepositoriesState, RepositoriesTypes } from "./types";
const INITIAL_STATE: RepositoriesState = {
  data: [
    {
      name: "Gabriel",
      id: 2,
    },
  ],
  loading: false,
  error: false,
};

const reducer: Reducer<RepositoriesState> = (
  state = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case RepositoriesTypes.LOAD_SUCESS:
      return { ...state, loading: false, data: action.payload.data };

    case RepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };

    default:
      return state;
  }
};

export default reducer;
