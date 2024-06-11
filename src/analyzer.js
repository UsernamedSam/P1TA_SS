const analyzer = {  
  getWordCount: (text) => {
    return text.trim().split(/\s+/).length;
  },

  getCharacterCount: (text) => {
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    const cleanText = text.replace(/[\s\p{P}]/gu, '');
    return cleanText.length;
  }, 

  getAverageWordLength: (text) => {  
  
    const wordCount = text.trim().split(/\s+/).length;
    return wordCount > 0 ? parseFloat((text.replace(/\s+/g,'').length / wordCount).toFixed(2)) : 0;
  },

  getNumberCount: (text) => { 
    let count = 0;

    const numbers = text.match(/\d+(\.\d+)?/g);
    
    if (numbers) {
      count = numbers.length;
    }

    return count;
  },

  getNumberSum: (text) => {
    let sum = 0;
    const numbers = text.match(/-?\d+(\.\d+)?/g);

    if (numbers) {
      for (let i = 0; i < numbers.length; i++) {
        const number = parseFloat(numbers[i]);
        sum += number
      }
    }

    return parseFloat(sum.toFixed(2));
  },
};

export default analyzer; 