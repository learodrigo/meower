const API_URL = 'http://localhost:5000/mews'
const form = document.querySelector('form')
const loadingElement = document.querySelector('.loading')

loadingElement.style.display = 'none'

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const content = formData.get('content')
    const name = formData.get('name')

    const mew = { name, content }

    form.style.display = 'none'
    loadingElement.style.display = 'block'

    fetch(API_URL, {
        header: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(mew),
        method: 'POST'
    })
    .then(response => response.json())
    .then(createdMew => {
        console.log(createdMew)
    })
})
