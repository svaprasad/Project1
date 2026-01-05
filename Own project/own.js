
/* RIGHT MAP */
function toggleIframe(){
  iframeMap.style.display =
    iframeMap.style.display === "none" ? "block" : "none";
}

/* TODO */
let tasks = JSON.parse(localStorage.getItem("tasks")) || [
  "Learn HTML","Practice JavaScript","Store data in localStorage"
];
function renderTasks(){
  taskList.innerHTML="";
  tasks.forEach((t,i)=>{
    taskList.innerHTML+=`
    <li>${t}
      <button class="outline" onclick="removeTask(${i})">Remove</button>
    </li>`;
  });
  localStorage.setItem("tasks",JSON.stringify(tasks));
}
function addTask(){
  if(!taskInput.value) return;
  tasks.push(taskInput.value);
  taskInput.value="";
  renderTasks();
}
function removeTask(i){ tasks.splice(i,1); renderTasks(); }
function clearTasks(){ tasks=[]; renderTasks(); }
renderTasks();

/* TIMERS */
let s1=0,r1=true;
setInterval(()=>{
  if(r1){
    s1++;
    timer1.textContent=new Date(s1*1000).toISOString().substr(11,8);
  }
},1000);
function toggleTimer1(){r1=!r1;}
function resetTimer1(){s1=0;}

/* FORM */
function submitForm(e){
  e.preventDefault();
  nameErr.style.display=emailErr.style.display=passErr.style.display="none";

  if(!name.value) return nameErr.style.display="block";
  if(!email.value.includes("@")) return emailErr.style.display="block";
  if(password.value.length<6) return passErr.style.display="block";

  successMsg.style.display="block";
}

/* LEFT MAP (REAL API) */
function openMap() {
  // Address in JS format
  const address = "108/43 Vijaya Lakshmi Enclave 1st Floor H No 2 PJR Enclave Rd Gangaram ICRISAT Colony Hyderabad Telangana 500050";

  // Convert address to Google Maps URL
  const mapURL =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(address);

  // Redirect to Google Maps
  window.open(mapURL, "_blank"); // opens in new tab
}

initMap();

