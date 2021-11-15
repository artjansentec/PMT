//$('body').hide(1);
$('#texto').fadeOut();
$('header').fadeOut(1);
$('section').fadeOut(1);
$('footer').fadeOut(1);

$('header').fadeIn(2000);
$('section').fadeIn(3000);
$('footer').fadeIn(5000);



setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();


function calculo(){
   let nome = document.getElementById("nome").value;
   let total = document.getElementById("total").value;
   let pago = document.getElementById("pago").value;
   let taxa = document.getElementById("taxa").value;
   let parcelas = document.getElementById("pacelas").value;
   let financiado = total - pago;
   taxa /= 100;

   console.log(total);
   console.log(pago);
   console.log(taxa);
   console.log(parcelas);
   console.log(financiado);

   let valor = (1+taxa)**parcelas*taxa;

   valor /= (1 + taxa)**parcelas - 1 ;
   valor *= financiado;

   var texto = "Senhor "+ nome +", apos calcular seu PMT(valor financiado) é de "+valor.toFixed(0)+" reais por mês.";

   $('#texto').fadeIn(2000);

   document.getElementById("texto").innerHTML = texto;
   console.log(texto)
   
   
}

