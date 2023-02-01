const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  _id: {
    type: String
  },
  alpha2Code: {
    type: String
  },
  alpha3Code: {
    type: String
  },
  altSpellings: {
    type: Array
  },
  area: {
    type: Number
  },
  border: {
    type: Array
  },
  callingCodes: {
    type: Array
  },
  capital: {
    type: String
  },
  cioc: {
    type: String
  },
  currencies: {
    type: Array
  },
  demonym: {
    type: String
  },
  flag: {
    type: String
  },
  flags: {
    type: Map,
    of: String
  },
  gini: {
    type: Number
  },
  independent: {
    type: Boolean
  },
  languages: {
    type: Array
  },
  latlng: {
    type: Array
  },
  name: {
    type: String
  },
  nativeName: {
    type: String
  },
  numericCode: {
    type: String
  },
  population: {
    type: Number
  },
  region: {
    type: String
  },
  regionalBlocs: {
    type: Array
  },
  subRegion: {
    type: String
  },
  timezones: {
    type: String
  },
  topLevelDomain: {
    type: Array
  },
  topLevelDomain: {
    type: Map,
    of: String
  },
})

module.exports = mongoose.model('Data', dataSchema)