let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");

request.send()
request.onload = function(){
    
    let flg = JSON.parse(request.responseText);
    
    let total = flg.reduce((a,b) => a+b.population,0)
    console.log(total);
    
};

request.onerror = function (){
    console.error("error");
};