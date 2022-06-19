function addingEventListener() {
    const input = document.getElementById("button");

    function clicked() {
        alert("I was clicked!");
    }

    input.addEventListener('click', clicked);
}

addingEventListener();