let myleads= []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click",function(){
 myleads.push(inputEl.value)
 inputEl.value = ""
 renderLeads()
})


function renderLeads()
{
 let saveLeads = ""
for(let i =0;i<myleads.length;i++)
{
  saveLeads += "<li>"+myleads[i]+"</li>"
}

ulEl.innerHTML = saveLeads;
}