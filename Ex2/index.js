//console.log("hello world");

const { KhmerDateTime } = require("./lib");
const date = new KhmerDateTime(new Date('2022-03-20T02:00:00'));
console.log(date.getDate());
