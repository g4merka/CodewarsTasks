import data from './data.json' assert {type: "json"}



const jsonStringify = JSON.stringify(data.users);
console.log(jsonStringify);

const jsonParse = JSON.parse(jsonStringify);
console.log(Object.entries(jsonParse));