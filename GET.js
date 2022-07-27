window.addEventListener('load', (event) => {
    alert("page is loaded");
    var request = new XMLHttpRequest();
    request.open('GET', 'validation.php', true);
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            var data = this.responseText;
            sessionStorage.setItem('DB_data', data);
            console.log(data);           
            }
        }
    request.send();
});