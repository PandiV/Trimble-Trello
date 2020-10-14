import React from "react";
import "assets/scss/styles.scss";
//Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./store";

//Routes
import Routes from "containers/Routes";
import Loader from "components/Loader";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
