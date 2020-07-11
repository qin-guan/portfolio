import React from "react";

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
        <div />
    );
  }
}

export default OutsidePage;
