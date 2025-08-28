count = 0;

function addToCart() {
    count++
    console.log(count)
    const cartdiv = document.getElementById('cart')
    cartdiv.textContent = count
    openmessage()
}

function openmodal() {
    const modal = document.getElementById("modal")
    console.log(modal.classList)
    modal.classList.remove('display') 
    console.log(modal.classList)
    modal.classList.add('show')
    console.log(modal.classList)

}
function closemodal() {
    const modal = document.getElementById("modal")
    console.log(modal.classList)
    modal.classList.remove('show') 
    console.log(modal.classList)
    modal.classList.add('display')
    console.log(modal.classList)

}

function openmessage() {
    console.log('is working')
    const message = document.getElementById("message")
    console.log(message.classList)
    message.classList.remove('visible') 
    console.log(message.classList)
    message.classList.add('indicate')
    console.log(message.classList)

}

function closemessage() {
    const message = document.getElementById("message")
    console.log(message.classList)
    message.classList.remove('indicate') 
    console.log(message.classList)
    message.classList.add('visible')
    console.log(message.classList)

}

    
    
    
    