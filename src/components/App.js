import React, { Component, Fragment } from "react";
import { injectGlobal } from "styled-components";
import { Header, ScrollableTabs } from "components";

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

class App extends Component {
  get today() {
    const date = new Date();
    return `${date.getMonth() + 1}-${date.getDate()}`;
  }

  render() {
    const { today } = this;

    return (
      <Fragment>
        <Header today={today} />
        <ScrollableTabs today={today} />
      </Fragment>
    );
  }
}

export default App;
