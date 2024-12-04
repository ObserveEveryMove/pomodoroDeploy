import {
  BREAKDEC,
  BREAKINC,
  DECREASE,
  RESET,
  SET_SESSION,
  SET_TIMER,
  WORKDEC,
  WORKINC,
  FLIP_TIMER,
  HANDLE_ALARM,
  ALARM,
  VOLUME,
  THEME,
  NIGHTMODE,
  SETTINGSMODAL,
} from "./types";

import alarm from "../assets/data/Alarm-clock- sound.mp3";

let initialState = {
  breakTime: 10,
  workTime: 10,
  timer: 0,
  isWork: true,
  volume: 0.5,
  timerActive: false,
  isAlarm: true,
  colors: [
    "green",
    "lightBlue",
    "dodgerBlue",
    "lightGreen",
    "gray",
    "gold",
    "orange",
    "seaGreen",
    "red",
    "tomato",
    "slateBlue",
    "violet",
    "mediumSeaGreen",
    "slateBlue",
    "lightGray",
  ],
  color: "",
  altColor: {},
  nightMode: false,
  settings: false,
  easterEgg: false,
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREASE:
      return {
        ...state,
        timer: state.timer - 1,
      };

    case SET_TIMER:
      return {
        ...state,
        timer: state.isWork ? state.workTime : state.breakTime,
      };

    case SET_SESSION:
      return {
        ...state,
        isWork: !state.isWork,
      };

    case BREAKINC:
      return {
        ...state,
        breakTime: state.breakTime + 30,
        timer: state.isWork ? state.workTime : state.breakTime,
      };

    case BREAKDEC:
      if (state.breakTime < 30) {
        return {
          ...state,
          breakTime: 0,
          timer: state.isWork ? state.workTime : state.breakTime,
        };
      } else {
        return {
          ...state,
          breakTime: state.breakTime - 30,
          timer: state.isWork ? state.workTime : state.breakTime,
        };
      }

    case WORKINC:
      return {
        ...state,
        workTime: state.workTime + 30,
        timer: state.isWork ? state.workTime : state.breakTime,
      };

    case WORKDEC:
      if (state.workTime < 30) {
        return {
          ...state,
          workTime: 0,
        };
      }
      return {
        ...state,
        workTime: state.workTime - 30,
        timer: state.isWork ? state.workTime : state.breakTime,
      };

    case RESET:
      return {
        ...state,
        timer: state.workTime,
        isWork: true,
      };

    case FLIP_TIMER:
      return {
        ...state,
        timerActive:
          action.payload !== undefined ? action.payload : !state.timerActive,
      };

    case HANDLE_ALARM:
      if (!state.isAlarm) {
        return {
          ...state,
          volume: 0.5,
          isAlarm:
            action.payload !== undefined ? action.payload : !state.isAlarm,
        };
      } else {
        return {
          ...state,
          volume: 0,
          isAlarm:
            action.payload !== undefined ? action.payload : !state.isAlarm,
        };
      }

    case ALARM:
      let audio1 = new Audio(alarm);
      audio1.volume = state.volume;
      audio1.play();
      setTimeout(() => {
        audio1.pause();
      }, 2000);
      return {
        ...state,
      };

    case VOLUME:
      let { value } = action.payload;
      if (state.volume < 0.03 && state.isAlarm === true) {
        return {
          ...state,
          volume: value / 100,
          isAlarm: false,
        };
      } else {
        return {
          ...state,
          volume: value / 100,
          isAlarm: true,
        };
      }

    case THEME:
      let colorPick = Math.floor(Math.random() * state.colors.length);
      state.color = state.colors[colorPick];
      let altColorPick = Math.floor(Math.random() * state.colors.length);
      state.altColor = state.colors[altColorPick];

      if (state.color === state.altColor) {
        return {
          ...state,
          counter: state.counter + 1,
        };
      }

      if (state.counter === 2) {
        alert("Matched Color!!! Easter Egg!!! You WIN....NOTHING!!!");
        return {
          ...state,
          easterEgg: !state.easterEgg,
          counter: 0,
        };
      }
      return {
        ...state,
        color: state.color,
        altColor: state.altColor,
        nightMode: false,
      };

    case NIGHTMODE:
      return {
        ...state,
        nightMode: !state.nightMode,
      };

    case SETTINGSMODAL:
      return {
        ...state,
        settings: !state.settings,
      };

    default:
      return state;
  }
};

export default rootReducer;
