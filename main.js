
const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const replaceButton = document.querySelector(".replace-button")
let cellElements = []

const rowElements = document.querySelectorAll(".row")

function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

function displayWords (wordCount) {
    let newElement = document.createElement('p')
    newElement.innerHTML = "\"" + findInput.value + "\"" + ' was replaced with ' + "\"" + replaceInput.value + "\"" + ' ' + wordCount + ' times'
    document.body.prepend(newElement)
    foundWordsAll = 0
    foundWordsOne = 0
    
}

// console.log(localStorage.getItem('fresh'));
// console.log(JSON.parse(localStorage.getItem('fresh')));




replaceAllButton.addEventListener('click', function() { 
     let enteredInput = findInput.value
     let replaceText = replaceInput.value   
     let foundWordsAll = 0
     let data = []
    
    for(let rowLoop = 0; rowLoop < rowElements.length;rowLoop += 1) {
        cellElements = getCellElements(rowElements[rowLoop])
        console.log(cellElements);
        
        for(let elementLoop = 0; elementLoop < cellElements.length; elementLoop += 1) {
           console.log(cellElements[elementLoop].innerText);
           
           if (cellElements[elementLoop].innerText.includes(enteredInput)) {
               let word = new RegExp(enteredInput, "ig")
               let stringed = cellElements[elementLoop].innerHTML
               let replaced = stringed.replace(word, replaceText)
               cellElements[elementLoop].innerHTML = replaced
               
              
               
               
               
               
               foundWordsAll++
               console.log(foundWordsAll)
           }
   
           
           
           

    }
}
            displayWords(foundWordsAll) 
            //     data = [{Search: enteredInput, Replace: replaceText}];
            //    let oldData = JSON.parse(localStorage.getItem('fresh'));
            //    oldData += data.push({Search: enteredInput, Replace: replaceText})
            //    localStorage.setItem("fresh", JSON.stringify(oldData));
})
replaceButton.addEventListener('click', function() { 
    let enteredInput = findInput.value
    let replaceText = replaceInput.value   
    let foundWordsOne = 0
   
   for(let rowLoop = 0; rowLoop < rowElements.length;rowLoop += 1) {
       cellElements = getCellElements(rowElements[rowLoop])
       console.log(cellElements);
       
       for(let elementLoop = 0; elementLoop < cellElements.length; elementLoop += 1) {
          console.log(cellElements[elementLoop].innerText);
          
          if (cellElements[elementLoop].innerText.includes(enteredInput)) {
              let stringed = cellElements[elementLoop].innerHTML
              let replaced = stringed.replace(enteredInput, replaceText)
              cellElements[elementLoop].innerHTML = replaced
              foundWordsOne++
              console.log(foundWordsOne)
              displayWords(foundWordsOne)
              return
          }
          
           // if(cellElements.includes(enteredInput)) {
           //     alert('string found')
           // }

   }
}
             
})

