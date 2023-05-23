import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar as StepProgressBar } from "react-step-progress-bar";

interface ProgressBarProps {
  percentage: number;
}

class ProgressBar extends React.Component<ProgressBarProps> {
  render() {
    return (
      <StepProgressBar
        percent={this.props.percentage}
        filledBackground="linear-gradient(to right, rgb(136 253 246 / 100%), rgb(85 184 229 / 100%))"
      />
    );
  }
}

export default ProgressBar;