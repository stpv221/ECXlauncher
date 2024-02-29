const versionSelected = "latest_release";

const versionName = document.querySelector(".version-name");
const version = document.querySelector(".version");
const clientOpen = document.querySelector(".clientopen");

if (versionSelected == "latest_release"){
    versionName.innerHTML = '<img src="/assets/icons/Enchanting.png" width="20px" height="auto"> Latest Release <span class="material-symbols-outlined">expand_more</span>'
    version.innerHTML = 'u23'
    clientOpen.onclick = 'launch_latest'
}

function launch_latest(){
        
}