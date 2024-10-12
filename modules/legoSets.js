const setData = require("../data/setData");
const themeData = require("../data/themeData");

let sets = [];  // Add this to declare the global sets array

function initialize() {
  return new Promise((resolve, reject) => {
    try {
      setData.forEach(set => {
        const theme = themeData.find(theme => theme.id === set.theme_id);
        if (theme) {
          set.theme = theme.name; // Correctly set theme name from themeData
        }
        sets.push(set); // Add each set to the global sets array
      });
      resolve(); 
    } catch (error) {
      reject(`The error "${error.message}" has occurred.`);  // Fixed the error message
    }
  });
}

function getAllSets() {
  return new Promise((resolve, reject) => {
    try {
      resolve(sets);  
    } catch (error) {
      reject(`${error.message}: Failed to get data.`);
    }
  });
}

function getSetByNum(setNum) {
  return new Promise((resolve, reject) => {
    const set = sets.find(set => set.set_num === setNum);
    if (set) {
      resolve(set);  
    } else {
      reject(`Did not find the requested set with set_num: ${setNum}. Please provide the correct information.`);
    }
  });
}

function getSetsByTheme(theme) {
  return new Promise((resolve, reject) => {
    const lowerCaseTheme = theme.toLowerCase();
    const byName = sets.filter(set => set.theme.toLowerCase().includes(lowerCaseTheme));
    
    if (byName.length > 0) {
      resolve(byName); 
    } else {
      reject(`${theme} does not match with any theme. Please input the correct theme.`);
    }
  });
}

module.exports = { initialize, getAllSets, getSetByNum, getSetsByTheme }
