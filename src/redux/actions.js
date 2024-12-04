import {
  BREAKDEC,
  BREAKINC,
  DECREASE,
  FLIP_TIMER,
  HANDLE_ALARM,
  RESET,
  SET_SESSION,
  SET_TIMER,
  WORKDEC,
  WORKINC,
  ALARM,
  VOLUME,
  THEME,
  NIGHTMODE,
  SETTINGSMODAL,
} from "./types";

export const decrease = () => {
  return {
    type: DECREASE,
  };
};

export const breakInc = () => {
  return {
    type: BREAKINC,
  };
};

export const breakDec = () => {
  return {
    type: BREAKDEC,
  };
};

export const workInc = () => {
  return {
    type: WORKINC,
  };
};

export const workDec = () => {
  return {
    type: WORKDEC,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const setTimer = () => {
  return {
    type: SET_TIMER,
  };
};

export const setSession = () => {
  return {
    type: SET_SESSION,
  };
};

export const flipTimer = (onOrOff) => {
  return {
    type: FLIP_TIMER,
    payload: onOrOff,
  };
};

export const handleAlarm = (snooze) => {
  return {
    type: HANDLE_ALARM,
    payload: snooze,
  };
};

export const alarm = () => {
  return {
    type: ALARM,
  };
};

export const handleVolume = (e) => {
  return {
    type: VOLUME,
    payload: e,
  };
};

export const handleTheme = () => {
  return {
    type: THEME,
  };
};

export const handleMode = () => {
  return {
    type: NIGHTMODE,
  };
};

export const handleSettings = () => {
  return {
    type: SETTINGSMODAL,
  };
};
