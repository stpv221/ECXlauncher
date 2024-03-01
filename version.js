const versionSelected = "latest_release";

const docu = document.querySelector(".docu");

const versionSelect = document.querySelector(".vselect");
const versionName = document.querySelector(".version-name");
const version = document.querySelector(".version");
const clientOpen = document.querySelector(".clientopen");

if (versionSelected == "latest_release"){
    versionName.innerHTML = '<img src="/assets/icons/Enchanting.png" width="20px" height="auto"> Latest Release <span class="material-symbols-outlined">expand_more</span>'
    version.innerHTML = 'u23'
    clientOpen.onclick = function() {
        alert("button was clicked");
     }​;​
}

function ab(){
    const Win = window.open();
}
