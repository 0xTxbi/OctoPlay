import moment from "moment";

// convert from unix to timestamp
export const convertTime = (unixTime) => {
  moment.unix(unixTime).toDate();
};

// convert track duration to minutes
export const convertDuration = (rawTrackDuration) => {
  return Math.floor(moment.duration(rawTrackDuration).asMinutes());
};

// convert track/album release date to desired format
export const convertReleaseDate = (rawReleaseDate) => {
  return moment(rawReleaseDate, "YYYY/MM/DD").format("MMM Do, YYYY");
};

// format raw figure to proper format
export const formatFigure = (num) => {
  if (num < 1e3) return num;
  if (num >= 1e3 && num < 1e6) return +(num / 1e3).toFixed(1) + "K";
  if (num >= 1e6 && num < 1e9) return +(num / 1e6).toFixed(1) + "M";
  if (num >= 1e9 && num < 1e12) return +(num / 1e6).toFixed(1) + "B";
  if (num >= 1e12) return +(num / 1e6).toFixed(1) + "T";
};
