let myleads= []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage)
{
  myleads = leadsFromLocalStorage;
  render(myleads)
}


function render(leads)
{
 let saveLeads = ""
for(let i =0;i<leads.length;i++)
{
  saveLeads += `
  <li> 
      <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
      </a>
  </li>
  `
}

ulEl.innerHTML = saveLeads;
}


deleteBtn.addEventListener("dblclick",function(){
  localStorage.clear()
  myleads = []
  render(myleads)
})

inputBtn.addEventListener("click",function(){
 myleads.push(inputEl.value)
 inputEl.value = ""

localStorage.setItem("myLeads",JSON.stringify(myleads))

 render(myleads)

 console.log(localStorage.getItem("myLeads"))
})

