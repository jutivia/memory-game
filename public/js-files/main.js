document.addEventListener('DOMContentLoaded', ()=>{
    console.log("i'm in")
const loadingText= document.getElementById('loading-text');
const afterLoading= document.getElementById('after-loading')
const login= document.getElementById('login')
const cancel= document.getElementById('cancel')
const signUpPage=document.getElementById('signUp-page')
signUpPage.style.visibility='hidden';
// afterLoading.style.visibility='hidden';
const startGame=async ()=>{
    try{


        loadingText.style.visibility='hidden'
        afterLoading.style.visibility='visible'
    }catch(err){

    }
}

login.addEventListener('click', ()=>{

signUpPage.style.visibility='visible'
})

cancel.addEventListener('click', ()=>{

signUpPage.style.visibility='hidden'
})



})