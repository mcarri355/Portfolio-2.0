// // Hacker Animation For Word Rotation
// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let interval = null;

// document.querySelector("span").onmouseover = event => {  
//   let iteration = 0;
  
//   clearInterval(interval);
  
//   interval = setInterval(() => {
//     event.target.innerText = event.target.innerText
//       .split("")
//       .map((letter, index) => {
//         if(index < iteration) {
//           return event.target.dataset.value[index];
//         }
      
//         return letters[Math.floor(Math.random() * 26)]
//       })
//       .join("");
    
//     if(iteration >= event.target.dataset.value.length){ 
//       clearInterval(interval);
//     }
    
//     iteration += 1 / 3;
//   }, 60 );
// }

// About Me Tabs
let skillsTitle = document.getElementById('skillsTitle')
let expTitle = document.getElementById('expTitle')
let eduTitle = document.getElementById('eduTitle')

let skillsTab = document.getElementById('skills')
let expTab = document.getElementById('experience')
let eduTab = document.getElementById('education')

function skills(){
    skillsTab.classList.add('activeTab')
    expTab.classList.remove('activeTab')
    eduTab.classList.remove('activeTab')

    skillsTitle.classList.add('activeLink')
    expTitle.classList.remove('activeLink')
    eduTitle.classList.remove('activeLink')
}

function experience(){
    skillsTab.classList.remove('activeTab')
    expTab.classList.add('activeTab')
    eduTab.classList.remove('activeTab')

    skillsTitle.classList.remove('activeLink')
    expTitle.classList.add('activeLink')
    eduTitle.classList.remove('activeLink')
}

function education(){
    skillsTab.classList.remove('activeTab')
    expTab.classList.remove('activeTab')
    eduTab.classList.add('activeTab')

    skillsTitle.classList.remove('activeLink')
    expTitle.classList.remove('activeLink')
    eduTitle.classList.add('activeLink')
}