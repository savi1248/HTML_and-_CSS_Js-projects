
var ampm = document.getElementById('ampm')

  function displaytime(){
    var dateTime= new Date();
    var hr= dateTime.getHours();
    var min= padzero(dateTime.getMinutes());
    var sec= padzero(dateTime.getSeconds());
  if(hr>12){
     hr =hr-12
     ampm.innerHTML= 'PM'
  }
    console.log(hr); 
    console.log(min);
    console.log(sec);

  

    document.getElementById('hours').innerHTML= hr
    document.getElementById('mins').innerHTML= min
    document.getElementById('secs').innerHTML= sec

     
  }
  function padzero(num){
    return num<10 ? '0'+num:num
    
  }
  setInterval(displaytime, 900)

