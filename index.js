//Write a code to write logic for login page
//Develop by vaishnavi kadukar

var r1;
const i1=document.getElementById('input1');
i1.addEventListener('keyup',(e)=>{
r1=e.target.value;
})

const b1=document.getElementById('btn1');
b1.addEventListener('click',(b)=>{
if(r1=="github@89"){
    
    const avar=document.getElementById('a1');//for true condition
    avar.href="githubclone1.html";
}
else{
alert("Enter correct password please github@89");//for false condition
}
});

