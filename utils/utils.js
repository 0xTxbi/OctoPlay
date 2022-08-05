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
