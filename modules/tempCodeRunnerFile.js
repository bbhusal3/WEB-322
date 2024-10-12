const setData = require("../data/setData.json");
const themeData = require("../data/themeData.json");
let sets = [];

function initialize() {
  setData.forEach(set => {
    const theme = themeData.find(theme => theme.id === set.theme_id);

    if (theme) {
      set.theme = theme.name;
    }
    sets.push(set);
  });
}

initialize();

function getAllSets(){
    return sets;
}


function getSetByNum(setNum){
  return sets.find(set => set.set_num ===setNum);
}


function getSetsByTheme(theme){
const lowerCaseTheme=theme.toLowerCase();

const byName = sets.filter(set => set.theme.toLowerCase().includes(lowerCaseTheme));
return byName;
}
 

