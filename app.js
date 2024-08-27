const textoInputElement = document.getElementById('texto');

document.getElementById('criptografar').addEventListener('click', criptografar);

document.getElementById('descriptografar').addEventListener('click', descriptografar);

document.getElementById('k2button').addEventListener('click', copiarTexto);

function criptografar() {

    const texto = textoInputElement.value;

    const dict = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        resultado += dict[letra] || letra;
    }

    return document.getElementById('CR_DE').value = resultado;
}

function descriptografar() {

    const dictReverso = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    const texto = textoInputElement.value;

    let resultado = '';
    let i = 0;

    while (i < texto.length) {
        let encontrado = false;

        for (let chave in dictReverso) {
            if (texto.startsWith(chave, i)) {
                resultado += dictReverso[chave];
                i += chave.length;
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            resultado += texto[i];
            i++;
        }
    }

    return document.getElementById('CR_DE').value = resultado;
}

function copiarTexto() {

    const campo = document.getElementById('CR_DE');

    navigator.clipboard.writeText(campo.value)
        .then(() => {
            k2button.innerText = "Copiado!";
        })
        .catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
}

