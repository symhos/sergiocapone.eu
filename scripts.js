// This script uses vanilla JavaScript to ensure compatibility across different browsers and versions.

// Function to add an event listener in a cross-browser compatible way
function addEvent(element, event, handler) {
    if (element.addEventListener) {
        element.addEventListener(event, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + event, handler);
    } else {
        element['on' + event] = handler;
    }
}

// Example function to show an alert when a button is clicked
function showAlert() {
    alert('Button clicked!');
}

// Adding event listener to a button with id 'myButton'
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('myButton');
    if (button) {
        addEvent(button, 'click', showAlert);
    }
});

// Function to load HTML content from a file
function loadHTML(filePath, elementId, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(elementId).innerHTML = xhr.responseText;
            if (callback) callback();
        }
    };
    xhr.send();
}