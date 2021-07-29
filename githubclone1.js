//Write a code to write logic for githubclone page
//Develop by vaishnavi kadukar

var name;
const i1=document.getElementById('input1');
i1.addEventListener('keyup',(e)=>{
    var b1=document.getElementById('error');
    b1.textContent=" "
    
    if(e.keyCode==13){
        name=e.target.value;
    }
});//end here


const b1=document.getElementById('input1');
b1.addEventListener('keyup',(u)=>{

//STEP 1  
const xhr= new XMLHttpRequest();
console.log(name);
//STEP 2
const url=`https://api.github.com/users/${name}`;
xhr.open('GET',url);
//STEP 3
xhr.onreadystatechange=()=>{
    //STEP 4
      
       var response;
       if(u.keyCode==13&&xhr.readyState==4 && xhr.status==200){
       response = JSON.parse(xhr.responseText);
       console.log(response);
       
       const o1=response.name;
       const o2=response.avatar_url;
       const o3=response.html_url;
       const o4=response.bio;
       const o5=response.created_at;
       const o6=response.updated_at;
       const o7=response.followers;
       const o8=response.following;
       const o9=response.id;
       const o10=response.node_id;
       const o11=response.location;
       const o12=response.public_gists;
       const o13=response.public_repos;

       



       const h3var=document.getElementById('h3');
       const imgvar=document.getElementById('img1');
       const a1var=document.getElementById('a1');
       const h5var=document.getElementById('h5');
       const p1var=document.getElementById('p1');
       const p2var=document.getElementById('p2');
       const p3var=document.getElementById('p3');
       const p4var=document.getElementById('p4');
       const p5var=document.getElementById('p5');
       const p6var=document.getElementById('p6');
       const p7var=document.getElementById('p7');
       const p8var=document.getElementById('p8');
       const p9var=document.getElementById('p9');
       const p10var=document.getElementById('p10');
       const p11var=document.getElementById('p11');
       const p12var=document.getElementById('p12');
       const p13var=document.getElementById('p13');
       const p14var=document.getElementById('p14');
       const p15var=document.getElementById('p15');
       const p16var=document.getElementById('p16');
       const p17var=document.getElementById('p17');
       const p18var=document.getElementById('p18');
       const p19=document.createElement('img');
       const p20=document.getElementById('div1');
       var p21=document.getElementById("div1").childElementCount;
      
       console.log(p21);
       if(p21>3){
          p20.removeChild(p20.lastChild);
       }

       p19.src=o2;
       p19.height="150";
       p19.width="150";
       p19.style.margin="10px 27px 10px 10px";
       h3var.textContent=o1;
       imgvar.src=o2;
       imgvar.height="130";
       imgvar.width="140";
       a1var.href=o3;
       a1var.textContent=`visit ${o1}'s github link`;
       h5var.textContent=o4;
       p1var.textContent="Created at: ";
       p2var.textContent=o5;
       p3var.textContent="Updated at: ";
       p4var.textContent=o6;
       p5var.textContent="Followers : ";
       p6var.textContent=o7;
       p7var.textContent="Following : ";
       p8var.textContent=o8;
       p9var.textContent="Id : ";
       p10var.textContent=o9;
       p11var.textContent="node id : ";
       p12var.textContent=o10;
       p13var.textContent="Location : ";
       p14var.textContent=o11;
       p15var.textContent="Public_gists : ";
       p16var.textContent=o12;
       p17var.textContent="Public_repos : ";
       p18var.textContent=o13;
       p20.prepend(p19);//for new element
       
} 
    
 if(u.keyCode==13&&xhr.status==404){
    
    
    var b1=document.getElementById('error');
    b1.textContent="Sorry, the github username does not exist! Please try again..."
           }      
}
// //STEP 5 
xhr.send();
})//end here


// code for click me button
const mbtnvar=document.getElementById('mbtn');
mbtnvar.addEventListener('click',()=>{
    alert("Thank you to visit my GithubClone ! Hope you like it ...");
})




