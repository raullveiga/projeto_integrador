
function changeContent(description) {
    console.log(description);
    var MyDesc = document.getElementById(description);
    document.getElementById('content').innerHTML = MyDesc.value;
}

