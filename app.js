const btn = document.querySelector(".btn-box")
const adviceNumber = document.querySelector("#advice-number")
const quote = document.querySelector("#advice")

window.addEventListener("load", () =>{
    fetch("https://api.adviceslip.com/advice")
    .then((response)=>{
        
        return a = response
    }).then((data)=>{
        return (data.json())
    }).then((advice)=>{
       quote.innerText=  advice.slip.advice
       adviceNumber.innerText = `advice #${advice.slip.id}`
       console.log(advice)
    })
})

btn.addEventListener("click", ()=>{
    fetch("https://api.adviceslip.com/advice")
    .then((response)=>{
        
        return a = response
    }).then((data)=>{
        return (data.json())
    }).then((advice)=>{
       quote.innerText=  advice.slip.advice
       adviceNumber.innerText = `advice #${advice.slip.id}`
       console.log(advice)
    })
})

