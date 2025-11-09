function calc(){
let num=document.getElementById('name').value;
console.log(num);
compare(num)

}

function compare(num){
    if (num>0){
        alert("the number is postive")
        document.getElementById("postive").style.display="block";
        document.getElementById("negative").style.display="none";
        document.getElementById("zero").style.display="none";
    }
    else if (num<0){
        alert("the number is negative")
        document.getElementById("negative").style.display="block";
        document.getElementById("postive").style.display="none";
        document.getElementById("zero").style.display="none";


    }
    else if (num==0){
        alert("the number is zero")
        document.getElementById("negative").style.display="none";
        document.getElementById("postive").style.display="none";
        document.getElementById("zero").style.display="block";
        

    }


}