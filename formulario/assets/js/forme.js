 class ValidarFormulario {
        
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();

            }

        eventos() {
        this.formulario.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.checkInputs();
    }

    checkInputs() {
        let valid = true;

        for(let campo of this.formulario.querySelectorAll(`.validar`)){
            if (!campo.value) {
                this.criarErro(campo,`Campo tal não pode estar em branco`);
            }
        
        }
    }

    criarErro(campo, mensagem) { 
        const divErro = document.createElement('div');
        divErro.classList.add('error');
        divErro.innerHTML = mensagem;
        campo.insertAdjacentElement('afterend', divErro);
    }

    
}
    

   const validar = new ValidarFormulario();