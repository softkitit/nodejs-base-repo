const _ = require('lodash');


const arr = [{userName: "Oleh"}, {userName: "Nick"}, {userName: "Alex"}];

const result = _.chain(arr)
  .filter(v => v.userName.indexOf("e") !== -1)
  .value();

console.log(result);
