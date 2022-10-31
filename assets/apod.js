
let NASAkey = "imQvbpDRVnFzNAwvbr0V8qSMVH10p8S0dNtLsUYQ";   

let NASAurl = "https://api.nasa.gov/planetary/apod";        



getDataNASA();                                              

 
function getDataNASA() {                                   
  const xhttp = new XMLHttpRequest();                       
  xhttp.onreadystatechange = function () {                  
    if (this.readyState == 4 && this.status == 200) {       
      const data = JSON.parse(this.responseText);           
      renderNASA(data);                                     
      console.log(data);                                    
    }
  }
  xhttp.open("GET", `${NASAurl}?api_key=${NASAkey}`, true);  
  xhttp.send();                                              
}

function renderNASA(data){                                   
  document.querySelector('.apod-wrapper').innerHTML =`              
  <h5>Astronomy picture of the day:<h5>
  <h1>${data.title}</h1>
  <img src="${data.url}" alt="APOD"> <br>
  <p>${data.date}<p>
  <p class="apod-explanation">${data.explanation}</p>
  <p>Copyright: ${data.copyright}</p>
  </a>
  `
}


  