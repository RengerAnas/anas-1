
const calcy = ()=>{
let a = document.getElementById('math').value;
let b = document.getElementById('phy').value;
let c = document.getElementById('webpro').value;
let d = document.getElementById('science').value;


let total =  parseFloat(a)+parseFloat(b)+parseFloat(c)+parseFloat(d) ;

let perc = (total/400) * 100;

let grade = "";
if (perc<=100 && perc>=80) {
    grade = "your Grade is : A";
} else if(perc>=60 && perc<80) {
    grade = "your Grade is : B";
} else if (perc>=40 && perc<60){
    grade = "your Grade is : C";
} else if (perc>=33 && perc<40){
    grade = "your Grade is : E";
}else {
    grade = "you are fail you percentage is less than 33 !!!"
}
if(perc>100 || a>100 || b>100 || c>100 || d>100 || a<null || b<null || c<null || d<null){
    document.getElementById('result').innerHTML = "please Enter the currect marks"
} else {
document.getElementById('result').innerHTML = `Your total marks are ${total} , your percentage is ${perc} <br> and ${grade}` ;
}
// alert(perc);
}
