function addingEventListener() {
    // defining the node that will be listening for the event
    const input = document.getElementById('input');

    // defining the event and the response to the event
    input.addEventListener('click', function(event) {
      alert('I was clicked!');
    }); 
}