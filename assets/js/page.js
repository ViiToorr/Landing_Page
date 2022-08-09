function escrever (el) {

        let textoArray = el.innerHTML.split("Programador ");
        el.innerHTML = " ";

        textoArray.forEach(function(texto) {
            el.innerHTML += `<span>${texto}</span>`;
            setTimeout.innerHTML += "Programador ";
        }
    );


}

var titulo = document.querySelector('h5');
escrever(titulo);