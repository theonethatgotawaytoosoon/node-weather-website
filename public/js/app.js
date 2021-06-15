const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
var messageOne = document.querySelector('#message-1')
var messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('/weather?address='+search.value).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
                messageOne.textContent = data.error
            else {
                messageOne.textContent = 'Location is: ' +data.location
                messageTwo.textContent = 'Weather forecast is ' +data.forecast
            }
        })
    })
})