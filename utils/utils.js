import moment from "moment";

// convert from unix to timestamp
export const convertTime = (unixTime) => {
  console.log(moment.unix(unixTime).toDate());
};
