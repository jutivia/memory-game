document.addEventListener('DOMContentLoaded', ()=>{
console.log('im in');
const signUp= document.getElementById('signUp');
const signUpPage= document.getElementById('signUpPage');
const login= document.getElementById('login');
const loginPage= document.getElementById('loginPage');
const back= document.getElementById('back');
const form= document.getElementById('reg-form');

signUpPage.style.display='none';

signUp.addEventListener('click', ()=>{
loginPage.style.display='none';
signUpPage.style.display='block';
})

login.addEventListener('click', ()=>{
loginPage.style.display='