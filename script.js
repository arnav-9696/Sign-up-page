var mod=document.getElementById('modal');
var smod=document.getElementById('modalS');
var btn=document.getElementById('modbtn');
var sbtn=document.getElementById('sbtn');
var tit=document.getElementById('tit');
btn.addEventListener('click',openModal);
sbtn.addEventListener('click',sopenModal);
function openModal(){
    mod.style.display='block';
    tit.style.display='none';
}
function sopenModal(){
    smod.style.display='block';
    tit.style.display='none';
}
window.addEventListener('click',closeModal);
function closeModal(e){
    if(e.target==mod){
        mod.style.display='none';
        tit.style.display='block';
    }
}
window.addEventListener('click',closeSModal);
function closeSModal(f){
    if(f.target==smod){
        
        smod.style.display='none';
        tit.style.display='block';
    }
}


function validateform()
{
    var Name=document.login.name.value;
    var Pass=document.login.password.value;
    console.log(Pass);
    console.log(Name);
   if(Pass.length<8){
    alert("Password must be at least 8 characters long.");
    return false;
    }
    }
    function validate(){
      var name=document.login1.name.value;
      var cpass = document.login1.confirmpassword.value;
      var pass=document.login1.password.value;
      var email=document.login1.email.value;
      var x=document.login1.email.value;
    var atposition=x.indexOf("@");
    var dotposition=x.lastIndexOf(".");
    console.log(name);
      
       if(pass.length<8){
      alert("Password must be at least 8 characters long.");
      return false;
      }
      if(cpass!=pass){
          alert("Password does not match.");
      }
     if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
      alert("Please enter a valid e-mail address");
      return false;
      }
    }