import Vue from "vue";

Vue.filter("htmlEntities", textToChange => {
  return !textToChange ? "" : textToChange.replace(/&quot;/g, '\"')
});
