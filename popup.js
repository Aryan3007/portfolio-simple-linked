// setTimeout(function(){
//     console.log('model opend')
// }, 3000)

//click function


const loginBtn = document.getElementById('login')
const show=document.getElementById('showpage')

loginBtn.addEventListener('click', function(){
    showpage.style.display='inline'
}, 1500);



const submit = document.getElementById('submit')
const hide=document.getElementById('showpage')
const hide2=document.getElementById('hide-text')

submit.addEventListener('click', function(){
    loading.style.display='block'
    hide2.innerHTML = 'heloooooo'
});
