function searchError() {
    var errorCode = document.getElementById("errorInput").value;
    
    // Check if the error page exists
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', "errors/" + errorCode + ".html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 404) {
                // Error page not found, show alert
                alert("Error page not found!");
            } else {
                // Error page found, redirect to it
                window.location.href = "errors/" + errorCode + ".html";
            }
        }
    };
    xhr.send();
}
