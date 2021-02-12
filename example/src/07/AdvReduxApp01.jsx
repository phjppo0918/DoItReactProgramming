import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false, user: {name: '테테테', age: 34}});

  render() {
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}

export default AdvReduxApp;
