import React from "react";

import { connect } from "react-redux";

import { handleSettings } from "./redux/actions";

import BottomBtns from "./components/BottomBtns";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeDisplay from "./components/TimeDisplay";
import Vol from "./components/Vol";

import Settings from "./components/Settings";

const App = (props) => {
  return (
    <div className={props.easterEgg ? "easterEggBod" : null}>
      <div
        className={!props.nightMode ? "pomOuter" : "nightMode"}
        style={!props.nightMode ? { backgroundColor: props.color } : null}
      >
        <div className="settingsComp">
          <button
            title="Settings"
            className="settingsBtn"
            onClick={props.handleSettings}
          >
            🌐
          </button>
        </div>

        <div
          className={!props.timerActive ? "breakSessionDiv" : "hiddenButtons"}
        >
          <Session />
          <Break />
        </div>

        <TimeDisplay />

        <BottomBtns />

        <Vol />

        <Settings />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    timerActive: state.timerActive,
    color: state.color,
    altColor: state.altColor,
    nightMode: state.nightMode,
    easterEgg: state.easterEgg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSettings: () => dispatch(handleSettings()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
