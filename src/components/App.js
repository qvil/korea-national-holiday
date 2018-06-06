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
    return `${date.getDate()}-${date.getDate()}`;
  }

  render() {
    return (
      <Fragment>
        <Header today={this.today} />
        <ScrollableTabs />
      </Fragment>
    );
  }
}

export default App;
