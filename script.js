alert("Eslatma: Qaysi transportda bormoqchi bo'lsangiz oshani bosing")

function npt(){
    let input = document.getElementById('npt').value;
    let result = input * 1 / 3.6 ;
    alert(`${Math.round(result) } soatda ${input } km ni bosib o'tasiz`)
}



function second() {
    let secondInput = document.getElementById('npt').value;    
    let secondResult = secondInput * 1 / 20.1
    alert(`${Math.round(secondResult) } soatda ${secondInput } km ni bosib o'tasiz`)
}


function third() {
    let thirdInput = document.getElementById('npt').value;    
    let thirdResult = thirdInput * 1 / 70
    alert(`${Math.round(thirdResult) } soatda ${thirdInput } km ni bosib o'tasiz`)
}


function end() {
    let endInput = document.getElementById('npt').value;    
    let endResult = endInput * 1 / 800
    alert(`${Math.round(endResult) } soatda ${endInput } km ni bosib o'tasiz`)
}