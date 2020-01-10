document.getElementById("countButton").onclick = function() {
    const letterCounts = {};
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
    if (letterCounts[currentLetter] === undefined) {
    letterCounts[currentLetter] = 1;
    } else {
    letterCounts[currentLetter]++
    }
    }
    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
        }
        const word = typedText.split(" ")
        const wordCounts = {}
    for (let i = 0; i < word.length; i++){
        currentWord = word[i];
    if (wordCounts[currentWord] === undefined) {
        wordCounts[currentWord] = 1;
    }else{
        wordCounts[currentWord]++;
    }
    }
    for (let word in wordCounts) {
        const span = document.createElement("span");
        const textContent = document.createTextNode('"' + word + "\": " + wordCounts[word]);
        span.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(span);
    }
    }    

