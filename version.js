const versionSelected = "latest_release";

const docu = document.querySelector(".docu");

const versionSelect = document.querySelector(".vselect");
const versionName = document.querySelector(".version-name");
const version = document.querySelector(".version");
const clientOpen = document.querySelector(".clientopen");

if (versionSelected == "latest_release"){
    versionName.innerHTML = '<img src="/assets/icons/Enchanting.png" width="20px" height="auto"> Latest Release <span class="material-symbols-outlined">expand_more</span>'
    version.innerHTML = 'u23'
}

function ab(){
    const Win = window.open();

    const frame = Win.document.createElement("embed");
    var Url = "";

    if (versionSelected == "latest_release"){
        Url = "https://eaglercrack.vercel.app/clients/1.8/EaglercraftX.html";
    }
   
    frame.style.width = "100%";	

    frame.style.height = "100%";

    frame.style.border= "none";
    frame.style.position = "absolute";
    frame.style.top = "0px";
    frame.style.left = "0px";
    frame.src = Url;

    Win.document.body.appendChild(frame);

}
