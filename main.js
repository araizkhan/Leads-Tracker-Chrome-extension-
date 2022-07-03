let myleads= []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

inputBtn.addEventListener("click",function(){
 myleads.push(inputEl.value)
 inputEl.value = ""

localStorage.setItem("myLeads",JSON.stringify(myleads))

 renderLeads()

 console.log(localStorage.getItem("myLeads"))
})


function renderLeads()
{
 let saveLeads = ""
for(let i =0;i<myleads.length;i++)
{
  saveLeads += `
  <li> 
      <a target='_blank' href='${myleads[i]}'>
        ${myleads[i]}
      </a>
  </li>
  `
}

ulEl.innerHTML = saveLeads;
}