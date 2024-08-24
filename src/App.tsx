import { useState } from "react";
import { RepositoryList } from "./components/RepositoryList";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <RepositoryList />
      </Provider>
    </>
  );
}

export default App;
