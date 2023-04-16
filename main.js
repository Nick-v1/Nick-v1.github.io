function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("_time").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 100);
  }
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }
  
  function myTime() {
    myVar = setInterval(startTime, 2000);
  }

  async function getNewQuote()
  {
    
    var url = "https://api.quotable.io/random";
    
    const response = await fetch(url);
    
    const quotejson =  await response.json();

    const quote = quotejson.content;

    const author = quotejson.author;

    console.log(quotejson);

    

    document.getElementById("randomQuote").innerHTML = quote + "<br/> &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;"+author;
  }