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

        for(let errorText of this.formulario.querySelectorAll('.error')) {
            errorText.remove();
        } // Faz com que nao carregue mais de uma vez o erro
        
        for(let campo of this.formulario.querySelectorAll(`.validar`)){
            const label = campo.previousElementSibling.innerText; // elemento irmao anterior
            
            if (!campo.value) {
                this.criarErro(campo,`Campo "${label}" tal não pode estar em branco`);
                valid = false;
            }

                if (campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
                }

                if (campo.classList.contains('usuario')) {
                    if(!this.validaUsuario(campo)) valid = false;
                    }

        }
    }
        validaUsuario(campo) {
            const usuario = campo.value;
            let valid = true;
            if (usuario.length <3 || usuario.length >12) {
                this.criarErro(campo, 'Usuário deve ter entre 3 e 12 caracteres');
                valid = false;
            }
            return valid;
        }




        validaCPF(campo) {
        const cpf = new ValidaCpf(campo.value);

        if(!cpf.valida()) {
            this.criarErro(campo, 'CPF Inválido');
            return false;
        }
        return true;
        }


    criarErro(campo, mensagem) { 
        const divErro = document.createElement('div');
        divErro.classList.add('error');
        divErro.innerHTML = mensagem;
        campo.insertAdjacentElement('afterend', divErro);
    }

     

    
 
}
   const validar = new ValidarFormulario();