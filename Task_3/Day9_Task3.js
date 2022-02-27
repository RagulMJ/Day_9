let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");

request.send()
request.onload = function(){
    
    let flg = JSON.parse(request.responseText);
    
    flg.forEach(e => {
        console.log(e.name);
        console.log(e.capital);
        console.log(e.flag);
    })
   
    
};

request.onerror = function (){
    console.error("error");
};