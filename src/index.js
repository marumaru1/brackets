module.exports = 
  function check(str, configs) {
    const rxArr = configs.map(getPairRx);
    let testString = str;
    let checkedNumber;
    
    do {
      checkedNumber = testString.length;
      testString = removeAllPairs(rxArr, testString);
    } while(testString.length > 0 && testString.length !== checkedNumber);
    
    function escapeChars(string) {
      return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    };
  
    function getPairRx(config) {
      return new RegExp(`${escapeChars(config.join(''))}`, 'g');
    }
    
    function removePair(rx, str) {
      return str.replace(rx, '');
    }
    
    function removeAllPairs(rxArr, str) {
      rxArr.forEach(rx => { str = removePair(rx, str); });
  
      return str;
    }
  
    return testString.length === 0;
  }
  
