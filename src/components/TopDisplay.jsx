import { connect } from "react-redux";

const TopDisplay = (props) => {
  return (
    <div>
      <div className="topDisplay">
        <h2 className={props.nightMode ? "topFontNightMode" : "topFont"}>
          {Math.floor(props.workTime / 60)}:
          {props.workTime % 60 < 10
            ? "0" + (props.workTime % 60)
            : props.workTime % 60}
        </h2>

        <h3 className={props.nightMode ? "topFontNightMode" : "topFont"}>+</h3>

        <h2 className={props.nightMode ? "topFontNightMode" : "topFont"}>
          {Math.floor(props.breakTime / 60)}:
          {props.breakTime % 60 < 10
            ? "0" + (props.breakTime % 60)
            : props.breakTime % 60}
        </h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    workTime: state.workTime,
    breakTime: state.breakTime,
    nightMode: state.nightMode,
  };
};

export default connect(mapStateToProps, null)(TopDisplay);
