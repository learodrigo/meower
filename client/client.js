const API_URL = 'http://localhost:5000/mews'

const form = document.querySelector('form')
const loadingElement = document.querySelector('.loading')
const mewsElement = document.querySelector('.mews')

loadingElement.style.display = 'block'

listAllMews()

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
        setTimeout(() => {
            form.reset()
            form.style.display = 'block'
        }, 30000)
        loadingElement.style.display = 'none'
        listAllMews()
    })
})

function listAllMews () {
    mewsElement.innerHTML = ''

    fetch(API_URL)
        .then(response => response.json())
        .then(mews => {
            mews.reverse()
            mews.forEach(mew => {
                const header = document.createElement('h3')
                const content = document.createElement('p')
                const date = document.createElement('small')
                header.textContent = mew.name
                content.textContent = mew.content
                date.textContent = new Date(mew.created)

                const div = document.createElement('div')
                div.appendChild(header)
                div.appendChild(content)
                div.appendChild(date)

                mewsElement.appendChild(div)
            })
            loadingElement.style.display = 'none'
        })
}
