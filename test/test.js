"use strict"
var normalizer = require("./../index");

normalizer.options.interjections = false;
normalizer.loadData(function() {
  console.log(normalizer.clean("hello"));
  console.log(normalizer.clean("I have no idea"));
  console.log(normalizer.clean("I want to scehdule"));
})
