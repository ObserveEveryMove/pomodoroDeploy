import { connect } from "react-redux";
import { alarm } from "../redux/actions";

const TimeDisplay = (props) => {
  if (props.isAlarm && props.isActive && props.timer === 1) {
    props.alarm();
  }

  return (
    <div className="timerOuter">
      <div
        className={
          props.isWork && props.timer >= 5
            ? "timeOuterWork"
            : props.isWork && props.timer <= 5
            ? "timeOuterWorkGreen"
            : props.timer < 5
            ? "timeOuterBreakTransition"
            : "timeOuterBreak"
        }
        style={!props.nightMode ? { backgroundColor: props.altColor } : null}
      >
        {props.isWork ? <h2>Work</h2> : <h2>Break</h2>}

        {props.timer > 1 && (
          <h1 className="timeDisplay">
            {Math.floor(props.timer / 60)}:
            {props.timer % 60 < 10
              ? "0" + (props.timer % 60)
              : props.timer % 60}
          </h1>
        )}

        {props.timer <= 1 && props.isActive && <h2 className="switch">🕔</h2>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    timer: state.timer,
    isWork: state.isWork,
    isActive: state.timerActive,
    isAlarm: state.isAlarm,
    color: state.color,
    altColor: state.altColor,
    nightMode: state.nightMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    alarm: () => dispatch(alarm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeDisplay);
