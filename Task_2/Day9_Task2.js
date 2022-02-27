let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");

request.send()
request.onload = function(){
    
    let flg = JSON.parse(request.responseText);
    
    flg.filter((j) => {
        if(j.population < 200000)
        console.log(j.name)})
   
    
};

request.onerror = function (){
    console.error("error");
};