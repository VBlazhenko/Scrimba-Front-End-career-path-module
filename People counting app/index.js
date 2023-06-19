// document.getElemendById("count-el").innerText = 5

// initialising the count to 0
// listen for clicks on the increment button
// increase the count variable
// reflect the changes

let countEl = document.getElementById("count-el") // specifying ID of element we want to grab

let count = 0

function increment() {
    count = count + 1 
    countEl.innerText = count
    console.log(count )
}

function save() {
    
}