document.addEventListener('DOMContentLoaded', ()=>{
console.log('im in');
const signUp= document.getElementById('signUp');
const signUpPage= document.getElementById('signUpPage');
const login= document.getElementById('login');
const loginPage= document.getElementById('loginPage');
const back= document.getElementById('back');
const form= document.getElementById('signUp-form');
const regForm= document.getElementById('reg-form');
const errors= document.getElementById('error');

signUpPage.style.display='none';
error.style.display='none';
signUp.addEventListener('click', ()=>{
loginPage.style.display='none';
signUpPage.style.display='block';
})

login.addEventListener('click', ()=>{
loginPage.style.display='block';
signUpPage.style.display='none';
})

form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const userEmail=document.getElementById('email').value;
    const userName= document.getElementById('username').value;
    const password= document.getElementById('password').value
    const data={
        name:userName,
        email:userEmail,
        password:password
    }
    try{
        axios.post('api/v1/user/userReg', data);
    }catch(err){
        console.log(err);
       errors.style.display='block';
        userEmail.value='';
       password.value='';
       userName.value='';
    }
    setTimeout(()=>{
        error.style.display='none';
    },2000)
    
})

regForm.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const userEmail=document.getElementById('regUser').value;
    const password= document.getElementById('regPassword').value;
    const data={
        email:userEmail,
        password:password
    }
    try{
        axios.post('api/v1//user/userLogin', data);
    }catch(err){
        console.log(err);
       errors.style.display='block';
       userEmail.value='';
       password.value='';
    
    }
    
    setTimeout(()=>{
        error.style.display='none';
    },2000)
})



});