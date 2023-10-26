var input = document.getElementById("input");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

input.addEventListener('input', () => {
    if (input.value.length > 0) {
        msg.style.display = 'block';
    }

    else {
        msg.style.display = 'none';
    }

    if (input.value.length < 4) {
        str.innerHTML = 'weak';
        input.style.borderColor = 'red'
        msg.style.color = 'red'
    }

    else if (input.value.length >= 4 && input.value.length < 8) {
        str.innerHTML = 'medium';
        input.style.borderColor = 'yellow'
        msg.style.color = 'yellow'
    }

    else {
        str.innerHTML = 'strong';
        input.style.borderColor = 'green'
        msg.style.color = 'green'
    }

})