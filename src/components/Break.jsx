import { connect } from "react-redux";
import { breakInc, breakDec, reset } from "../redux/actions";

const Break = (props) => {
  return (
    <div>
      <div className="breakOuter">
        <h1 className={props.nightMode ? "workBreakNight" : null}>Break</h1>

        <div className="breakBtns">
          <button
            onClick={props.breakDec}
            className={!props.timerActive ? "breakDown" : "hide"}
          >
            🔽
          </button>

          <h2 className={props.nightMode ? "workBreakNight" : null}>
            {Math.floor(props.breakTime / 60)}:
            {props.breakTime % 60 < 10
              ? "0" + (props.breakTime % 60)
              : props.breakTime % 60}
          </h2>

          <button
            onClick={props.breakInc}
            className={!props.timerActive ? "breakUp" : "hide"}
          >
            🔼
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    breakTime: state.breakTime,
    timerActive: state.timerActive,
    nightMode: state.nightMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    breakInc: () => {
      dispatch(breakInc());
      dispatch(reset());
    },
    breakDec: () => {
      dispatch(breakDec());
      dispatch(reset());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Break);
