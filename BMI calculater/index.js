function abc()
{
    let weight=document.getElementById(w1).value;
    let height=document.getElementById(h1).value;
    let BMI=weight/height**2;
    document.getElementById(bb).innerHTML=("Your BMI is" + BMI);
    alert("Your BMI is" + BMI);
    console.log("Your BMI is" + BMI);
}