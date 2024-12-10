function abc()
{
    let stuTM_grades=document.getElementById("tm1").value;
    let stuOBT_grades=document.getElementById("obt1").value;
    let result = stuOBT_grades / stuTM_grades *100;
    document.getElementById("bb").innerHTML=("you've got it" + result +"%");
    alert("you've got it" +result+"%");
    console.log("you've got it"+result+"%");

}