let name = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let btnSubmit = document.querySelector('button')


let postUser = (user)=>{
    fetch('http://localhost:8080/users',
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
    })

}

btnSubmit.addEventListener('click', (e)=>{
    e.preventDefault()

    const user = {
        name: name.value,
        email: email.value,
        password: password.value
    }

    if (name.value === '' || email.value === '' || password.value === '') {
        return alert('Заполните все поля')
    }
    fetch('http://localhost:8080/users')
    .then(res=>res.json())
    .then((data)=>{
        let arr = Array.from(data).filter(el=>el.email === user.email)
        if (arr.length === 0){
            postUser(user)
            window.location.href='http://127.0.0.1:5501';
            alert ('Вы успешно зарегистрировались')
        } else if (arr[0].name === user.name) {
            return alert('такое имя уже используется')
        } else if (arr[0].email === user.email) {
            return alert('такой email уже используется')
        } 
    })   
})