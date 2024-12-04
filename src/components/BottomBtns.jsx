import React from "react";

import { connect } from "react-redux";
import {
  decrease,
  reset,
  setTimer,
  setSession,
  flipTimer,
} from "../redux/actions";

class BottomBtns extends React.Component {
  constructor() {
    super();
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  componentDidMount() {
    this.props.setTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.props.decrease();
      if (this.props.timer <= 0) {
        this.props.setSession();
        this.props.setTimer();
      }
    }, 1000);
    this.props.flipTimer(true);
  }

  pauseTimer() {
    clearInterval(this.timer);
    this.props.flipTimer(false);
  }

  resetTimer() {
    this.props.reset();
    this.pauseTimer();
  }

  render() {
    return (
      <div>
        <div className="bottomOuter">
          <button
            onClick={this.startTimer}
            className={
              this.props.timerActive
                ? "hidePlay"
                : this.props.nightMode
                ? "nightBtnPlay"
                : "play"
            }
          >
            ▶
          </button>

          <button
            onClick={this.pauseTimer}
            className={!this.props.timerActive ? "hidePause" : "pause"}
          >
            ⏸
          </button>

          <button
            onClick={this.resetTimer}
            className={this.props.nightMode ? "nightBtnRestart" : "restart"}
          >
            ↩
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    timer: state.timer,
    timerActive: state.timerActive,
    nightMode: state.nightMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    decrease: () => dispatch(decrease()),
    setSession: () => dispatch(setSession()),
    reset: () => dispatch(reset()),
    setTimer: () => dispatch(setTimer()),
    flipTimer: (onOrOff) => dispatch(flipTimer(onOrOff)),
    // handleAlarm: () => dispatch(handleAlarm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomBtns);
