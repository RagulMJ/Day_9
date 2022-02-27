let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send()

request.onload = function(){
    console.log("Name of the countries which uses US Dollars as currency")
    if (request.status==200){
       let a=JSON.parse(request.responseText) 
             a.filter((e)=> e.currencies).filter((e) => {
               if(e.currencies.USD){
               console.log(e.name.official)
               console.log(`Currencies : ${Object.keys(e.currencies)}`);
              }
             })
    }
    else{
        console.log("Onload Error: Oops! Your script processing out of FrameWork!");
}
}
request.onerror=function(){
console.log("Onerror Error: Oops! There wass an error while loading Content");
}