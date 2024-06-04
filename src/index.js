import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textArea = document.getElementById('userInput');

textArea.addEventListener('input', function(){
    
  console.log('entrar', textArea.value.length);
    
  const resetButton = document.getElementById('resetButton');
  textArea.value = '';
  resetButton.addEventListener('click', () => {
    wordCount.innerText = '0';
    charCount.innerText = '0';
    charCountNoSpaces.innerText = '0';
    numberCount.innerText = '0';
    numberSum.innerText = '0';
    avgWordLength.innerText = '0';
  });

  const wordCount = document.getElementById('wordCount')
  wordCount.innerText = analyzer.getWordCount(textArea.value);

  const charCount = document.getElementById('charCount');
  charCount.innerText = analyzer.getCharacterCount(textArea.value);

  const charCountNoSpaces = document.getElementById('charCountNoSpaces');
  charCountNoSpaces.innerText = analyzer.getCharacterCountExcludingSpaces(textArea.value);

  const numberCount = document.getElementById('numberCount');
  numberCount.innerText = analyzer.getNumberCount(textArea.value);

  const numberSum = document.getElementById('numberSum')
  numberSum.innerText = analyzer.getNumberSum(textArea.value);

  const avgWordLength = document.getElementById('avgWordLength')
  avgWordLength.innerText = analyzer.getAverageWordLength(textArea.value);

})
