import React from "react";
import Page from "../components/Page";

interface IOutsidePageState {
}

interface IOutsidePageProps {
}

class OutsidePage extends React.Component<IOutsidePageProps, IOutsidePageState> {
  constructor(props: IOutsidePageProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Page/>
    );
  }
}

export default OutsidePage;
