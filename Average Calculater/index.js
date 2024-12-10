function avg()
{
    let value1=document.getElementById("val1").value;
    let value2=document.getElementById("val2").value;
    let value3=document.getElementById("val3").value;
    let average=(value1+value2+value3)/3;
    document.getElementById("11").innerHTML=("average of values is" + average);
    alert("average of values is" + average);  
    console.log("average of values is" + average);

}