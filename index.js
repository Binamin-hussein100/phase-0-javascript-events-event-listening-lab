const input = document.getElementById('input')

function addingEventListener() {
    input.addEventListener('click', function(){
        alert("i was clicked!")
    })
}

addingEventListener()