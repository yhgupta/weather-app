console.log('Client side javascript file is loaded!')


const weatherform = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherform.addEventListener('submit' , (e)=>{
    e.preventDefault()
    const location = search.value
    fetch("/weather?address=" + location).then((response) => {
        response.json().then((data) => {
            if( data.error ){
                messageOne.textContent = data.error
                messageTwo.textContent = ""
            }else{
                messageOne.textContent = ""
                messageTwo.textContent = data.location + "\n" + data.message
            }
        })
    })

})