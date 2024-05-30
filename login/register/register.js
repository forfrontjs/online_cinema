let name = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let btnSubmit = document.querySelector('button')

let postUser = (user)=>{
    fetch('http://localhost:8080/user',
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
        name:name.value,
        email:email.value,
        password:password.value
    }
    fetch('http://localhost:8080/user')
    .then(res=>res.json())
    .then((data)=>{
        let arr = Array.from(data).filter(el=>el.email === user.email)
        if(arr.length === 0){
            postUser(user)
            return alert ('вы зарегались')
        }
        else if (arr[0].email === user.email){
            return alert('такой email уже используется')
        }
    })    
    

})

let addLocal = ()=>{
    fetch('http://localhost:8080/user')
    .then(res=>res.json())
    .then((data)=>{
        localStorage.setItem('users', JSON.stringify(data))
        // console.log(localStorage.getItem('users'));
    })
}
addLocal()