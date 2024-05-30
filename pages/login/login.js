let email = document.querySelector('#email')
let password = document.querySelector('#password')
let btn = document.querySelector('form button')
let userName = document.querySelector('.header__userName')
let headerAuthBtn = document.querySelector('.header__auth')
let adminpanel = document.querySelector('.admin')




// headerAuthBtn.addEventListener('click',()=>{
//     localStorage.removeItem('userData')
//    headerAuthBtn.textContent='войти'
//     userName.textContent = ''
// })





btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const loginData = {
        email:email.value,
        password:password.value
    }
    fetch('http://localhost:8080/login',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(loginData)
    })
        .then((res)=>{
            if (!res.ok) {
                alert('Такой аккаунт не найден')
                return res.text().then(text => { throw new Error(text) });
            }
            return res.json()
        })
        .then(data=>{
            alert('Успешно вошли в свой аккаунт')
            localStorage.setItem('userData',JSON.stringify(data))
            window.location.href='http://127.0.0.1:5501';
        })

})