function tem()
{
   let  temperature_incelsius=document.getElementById("temp1").value;
   let temperature_infahrenheit= 9/5 * temperature_incelsius + 32;
   document.getElementById(cel1).innerHTML=("temp in fahrenheit is " + temperature_infahrenheit );
   alert("temp in fahrenheit is " + temperature_infahrenheit);
   console.log("temp in fahrenheit is " + temperature_infahrenheit);
}