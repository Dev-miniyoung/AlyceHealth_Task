import React from "react";
import HomePresenter from "./HomePresenter";

interface State {}

class HomeContainer extends React.Component<State> {
  state: State = {};
  render() {
    <HomePresenter />;
  }
}

export default HomeContainer;
