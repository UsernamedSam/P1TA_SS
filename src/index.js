import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
let textArea = document.getElementById('userInput');
let wordCount = document.getElementById('wordCount')
let charCount = document.getElementById('charCount');
let charCountNoSpaces = document.getElementById('charCountNoSpaces');
let numberCount = document.getElementById('numberCount');
let numberSum = document.getElementById('numberSum')
let avgWordLength = document.getElementById('avgWordLength')

textArea.addEventListener('input', function(){  
  console.log('entrar', textArea.value.length); 
  
  wordCount.innerText = analyzer.getWordCount(textArea.value);

  charCount.innerText = analyzer.getCharacterCount(textArea.value);

  charCountNoSpaces.innerText = analyzer.getCharacterCountExcludingSpaces(textArea.value);

  numberCount.innerText = analyzer.getNumberCount(textArea.value);

  numberSum.innerText = analyzer.getNumberSum(textArea.value);

  avgWordLength.innerText = analyzer.getAverageWordLength(textArea.value);
});

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
  console.log('limpiar', textArea.value.length);
  textArea.value = '';
  wordCount.innerText = '0';
  charCount.innerText = '0';
  charCountNoSpaces.innerText = '0';
  numberCount.innerText = '0';
  numberSum.innerText = '0';
  avgWordLength.innerText = '0';
});