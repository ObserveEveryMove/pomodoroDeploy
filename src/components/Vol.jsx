import { connect } from "react-redux";
import { handleVolume } from "../redux/actions";

const Vol = (props) => {
  return (
    <div className="volumeOuter">
      <div className={props.volume <= 0.8 ? "greenvol" : "redvol"}>
        {" "}
        <h3 className={props.nightMode ? "workBreakNight" : null}>
          {" "}
          Volume: {parseInt(props.volume * 100)}%{" "}
        </h3>
        <input
          type="range"
          min="0"
          max="100"
          name="volume"
          value={props.volume * 100}
          onChange={props.handleVolume}
        ></input>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    volume: state.volume,
    nightMode: state.nightMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleVolume: (e) => dispatch(handleVolume(e.target)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vol);
