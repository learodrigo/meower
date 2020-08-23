const form = document.querySelector('form')
const loadingElement = document.querySelector('.loading')
const API_URL = 'http://localhost:5000/mews'

loadingElement.style.display = 'none'

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const name = formData.get('name')
    const content = formData.get('content')
    const mew = { name, content }

    form.style.display = 'none'
    loadingElement.style.display = 'block'

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(mew),
        header: {
            'content-type': 'application/json'
        }
    })
})
