const analyzer = {  
  getWordCount: (text) => {
    return text.trim().split(/\s+/).length;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    return  text.replace(/\s/g, '').length;
  }, 
  getNumberCount: (text) => { 
    return (text.match (/\d/g) || []).length;
  },
  getNumberSum: (text) => {
    return (text.match(/\d+/g) || []).reduce((sum, num) => sum + parseInt(num, 10), 0);
  },
  getAverageWordLength: (text) => {    
    const wordCount = analyzer.getWordCount(text);
    return wordCount > 0 ? (text.replace(/\s+/g, '').length / wordCount).toFixed(2): 0;
  },
};

export default analyzer;
