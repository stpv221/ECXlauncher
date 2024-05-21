const clientLaunch = document.getElementById("launch");

const text = document.getElementById("testLol"); 

async function getBase64ImageFromUrl(imageUrl) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();
  
    return new Promise((resolve, reject) => {
      var reader  = new FileReader();
      reader.addEventListener("load", function () {
          resolve(reader.result);
      }, false);
  
      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  }

  getBase64ImageFromUrl('http://approvaltests.com/images/logo.png')
    .then(result => text.innerText = result)
    .catch(err => console.error(err));