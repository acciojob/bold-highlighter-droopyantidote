function highlight() {
    var boldElements = document.querySelectorAll('strong'); // Select all <strong> elements
    for (var i = 0; i < boldElements.length; i++) {
        boldElements[i].style.color = 'green'; // Change the color of each <strong> element to green
    }
}

function return_normal() {
    var boldElements = document.querySelectorAll('strong'); // Select all <strong> elements
    for (var i = 0; i < boldElements.length; i++) {
        boldElements[i].style.color = 'black'; // Revert the color of each <strong> element back to black
    }
}
