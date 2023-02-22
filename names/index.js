const peoplenames = require("../country/state/city/index");
const getFirstName = require("../utilities/utils/index");
const getPeopleInCity = (peoplenames) => {
  return getFirstName(peoplenames);
};
module.exports = getPeopleInCity;
