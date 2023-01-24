function encurtar() {
    let url = document.querySelector('.text').value;
    if(!url) {
        alert("Voce precisa inserir uma URL para encurtar!");
        return;
    }

    let headers = {
        "Content-Type": "application/json",
        "apiKey": "75a653c9f2a5461ab50766376461817e"
    }

    let linkRequest = {
        destination: url,
        domain: {fullName: "rebrand.ly"}
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let inputUrl = document.querySelector('.text');
        inputUrl.value = json.shortUrl;
        if(inputUrl.value == 'undefined') {
            alert('Voce nao digitou uma URL valida!');
            inputUrl.value = '';
        }
    });
}

function copiar() {
    let copiaUrl = document.querySelector('.text');

    copiaUrl.select();
    copiaUrl.setSelectionRange(0,99999);

    navigator.clipboard.writeText(copiaUrl.value);

    alert(`URL copiada: ${copiaUrl.value}`);
}