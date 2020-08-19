//define javascript object
/*
asfsaf
asfsaf

*/
let jsonobj = {
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}

console.log(jsonobj.browsers.firefox.name);

let stringjson = JSON.stringify(jsonobj);
console.log(stringjson);

let newobj = JSON.parse(stringjson);
console.log(newobj.browsers.firefox.pref_url);