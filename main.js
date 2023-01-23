let btnDell = document.querySelector(".btnDell");

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => console.log(res))

//post
let btnCr = document.querySelector(".btnCr")

btnCr.addEventListener('click', ()=> {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            "id": '',
            "name": "Aydemir",
            "surname": "Rahatbekov",
        }).then(res => alert('Вы удачно создали данные!', res))
        .catch(err => alert('Проблема в создании!', err))
    })

let form = document.querySelector('.form')
btnDell.forEach(
    b => b.addEventListener('click', () => b.closest('.from').remove())
)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/users'), {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
    },
    body: JSON.stringify({
        name: e.target[0].value,
        surname: e.target[1].value
    }).then((res) => {
    e.target[0].value = ''
    e.target[1].value = '', res
})
.catch((err) => alert(err))
}})

btnDell.addEventListener('click', ()=> {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'DELETE'
    }).then(() => alert('Вы успешно удалили!'))
    .catch((err => alert('Ошибка при удалении', err)))
})})