function toggleTheme(){
  document.body.classList.toggle("dark");
}

function toggleCV(){
  const cv = document.getElementById("cvFrame");
  cv.style.display = cv.style.display === "none" ? "block" : "none";
}

function filterEdu(level){
  const rows = document.querySelectorAll("#eduTable tr");
  rows.forEach((row,index)=>{
    if(index === 0) return;
    row.style.display =
      (level === "all" || row.cells[0].innerText === level) ? "" : "none";
  });
}

function validateForm(){
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if(!name.value || !email.value || !message.value){
    alert("Please fill all fields");
    return false;
  }
  alert("Message sent successfully!");
  return false;
}

/* ✅ SCROLL ANIMATION */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{
  sections.forEach(section=>{
    const top = section.getBoundingClientRect().top;
    if(top < window.innerHeight / 1.2){
      section.classList.add("show");
    }
  });
});
