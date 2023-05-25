Trabajo práctico de Digital House donde se usara la validacion de front end para manipular un formulario

descripcion: El objetivo será asegurarnos que se completene todos los controles de formulario requeridos y en el formato correcto antes de enviar los datos al servidor

    base :
        -proyecto proporcionado

    desafio 1 :
        -debemos vincular el archivo moviesAddValidation.js y vincularlo con la vista moviesAdd.ejs

        - todos los campos son obligatorios, no pueden estar vacios

        - si se trata de enviar un formulario sin los campos necesarios, se debe negar el envio del formulario y agregarle la clase "is-invalid" a los campos que no cumplan los requisitos

        -las validaciones deben hacerse al momento de enviar el formulario y tambien en tiempo real

        -aquellos campos que poseen error deberan tener un texto que especifique el error, deben estar presentes en el elemento con clase "is-invalid"
        
        -el formulario contara con validaciones especiales para los siguientes campos
            -calificacion y premios : valor ingresado entre 0 y 10
            -duracion: entre 60 y 360 minutos
        
        -si los campos cumplen con los requisitos:
            -a todos los campos se le agrega la clase "is-valid"
    