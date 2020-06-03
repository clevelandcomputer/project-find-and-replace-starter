
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
    newElement.innerHTML = 'Words Found ' + wordCount
    document.body.prepend(newElement)
}

replaceAllButton.addEventListener('click', function() { 
     let enteredInput = findInput.value
     let replaceText = replaceInput.value   
     let foundWordsAll = 0
    
    
    for(let rowLoop = 0; rowLoop < rowElements.length;rowLoop += 1) {
        cellElements = getCellElements(rowElements[rowLoop])
        console.log(cellElements);
        
        for(let elementLoop = 0; elementLoop < cellElements.length; elementLoop += 1) {
           console.log(cellElements[elementLoop].innerText);
           
           if (cellElements[elementLoop].innerText.includes(enteredInput)) {
               let stringed = cellElements[elementLoop].innerHTML
               let replaced = stringed.replace(enteredInput, replaceText)
               cellElements[elementLoop].innerHTML = replaced
               foundWordsAll++
               console.log(foundWordsAll)
           }

           
           

    }
}
            displayWords(foundWordsAll) 
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

