import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const wordCount = document.getElementById('wordCount')
const charCount = document.getElementById('charCount');
const charCountNoSpaces = document.getElementById('charCountNoSpaces');
const numberCount = document.getElementById('numberCount');
const numberSum = document.getElementById('numberSum')
const avgWordLength = document.getElementById('avgWordLength')

const textArea = document.getElementById('userInput');
textArea.addEventListener('input', function(){   
  console.log('entrar', textArea.value.length);
    
  wordCount.innerText = analyzer.getWordCount(textArea.value);

  charCount.innerText = analyzer.getCharacterCount(textArea.value);

  charCountNoSpaces.innerText = analyzer.getCharacterCountExcludingSpaces(textArea.value);

  numberCount.innerText = analyzer.getNumberCount(textArea.value);

  numberSum.innerText = analyzer.getNumberSum(textArea.value);

  avgWordLength.innerText = analyzer.getAverageWordLength(textArea.value);

})

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
  textArea.value = '';
  wordCount.innerText = '0';
  charCount.innerText = '0';
  charCountNoSpaces.innerText = '0';
  numberCount.innerText = '0';
  numberSum.innerText = '0';
  avgWordLength.innerText = '0';
});