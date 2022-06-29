let myleads= []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click",function(){
 myleads.push(inputEl.value)
 
})

for(let i =0;i<myleads.length;i++)
{
 ulEl.innerHTML += "<li>"+myleads[i]+"</li>"
}