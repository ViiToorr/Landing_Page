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
    }

}
    

   const validar = new ValidarFormulario();