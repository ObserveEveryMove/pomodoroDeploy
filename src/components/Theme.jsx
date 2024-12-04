import { connect } from "react-redux";
import { handleTheme, handleMode } from "../redux/actions";

const Theme = (props) => {
  return (
    <div className="themeOuter">
      <button
        title="Random Theme"
        className="themeBtn"
        onClick={props.handleTheme}
      >
        🌄
      </button>

      <button
        title="Night Mode"
        className={!props.nightMode ? "nightModeBtn" : "hide"}
        onClick={props.handleMode}
      >
        🌑
      </button>

      <button
        title="Day Mode"
        className={props.nightMode ? "nightModeBtn" : "hide"}
        onClick={props.handleMode}
      >
        🌞
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    nightMode: state.nightMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleTheme: () => dispatch(handleTheme()),
    handleMode: () => dispatch(handleMode()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
