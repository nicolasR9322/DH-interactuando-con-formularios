window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let titleInput = document.querySelector("#title");
    let titleError = document.querySelector(".titleError");
    let ratingInput = document.querySelector("#rating");
    let ratingError = document.querySelector(".ratingError");
    let awards = document.querySelector("#awards");
    let awardsError = document.querySelector(".awardsError");
    let release = document.querySelector("#release_date");
    let releaseError = document.querySelector(".releaseError");
    let length = document.querySelector("#length");
    let lengthError = document.querySelector(".lengthError");
    let genre = document.querySelector("#genre_id");
    let genreError = document.querySelector(".genreError");
    let form = document.querySelector("form");
    let submitErrors = document.querySelector(".submitErrors");
    
    titleInput.focus()

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

    // validacion nombre
    let listener = ["keyup", "blur", "change"]
    let listenerGenre =  ["click", "blur"]

    listener.forEach((listen) => 
    titleInput.addEventListener(listen, () => {
            switch (true) {
                case !titleInput.value.trim():
                        console.log("vacio")
                        titleError.classList.add("is-invalid")
                        titleError.innerText = "Este campo no puede estar vacio"
                    break;
                default:
                    console.log("lleno")
                    titleError.classList.remove("is-invalid");
                    title.classList.remove("is-invalid");
                    titleInput.classList.add("is-valid");
                    titleError.innerText = "";
                    break;
            }
    })
    )

    
    // validacion rating
    listener.forEach((listen) => 
    ratingInput.addEventListener(listen, () => {
            switch (true) {
                case !ratingInput.value.trim():
                        console.log("vacio")
                        ratingError.classList.add("is-invalid")
                        ratingError.innerText = "Este campo no puede estar vacio"
                    break;
                case (ratingInput.value < 0 || ratingInput.value > 10):
                        console.log("numero 1")
                        console.log(ratingInput.value)
                        ratingError.classList.add("is-invalid")
                        ratingError.innerText = "Este campo debe contener un valor entre 0 y 10"
                    break;
                default:
                    console.log("lleno")
                    ratingError.classList.remove("is-invalid");
                    rating.classList.remove("is-invalid");
                    ratingInput.classList.add("is-valid");
                    ratingError.innerText = "";
                    break;
            }
    })
    )

    // validacion awards
    listener.forEach((listen) => 
    awards.addEventListener(listen, () => {
            switch (true) {
                case !awards.value.trim():
                        console.log("vacio")
                        awardsError.classList.add("is-invalid")
                        awardsError.innerText = "Este campo no puede estar vacio"
                    break;
                case (awards.value < 0 || awards.value > 10):
                        console.log("vacio")
                        awardsError.classList.add("is-invalid")
                        awardsError.innerText = "Este campo debe contener un valor entre 0 y 10"
                    break;
                default:
                    console.log("lleno")
                    awardsError.classList.remove("is-invalid");
                    awards.classList.remove("is-invalid");
                    awards.classList.add("is-valid");
                    awardsError.innerText = "";
                    break;
            }
    })
    )

    // validacion release_date
    listener.forEach((listen) => 
    release.addEventListener(listen, () => {
            switch (true) {
                case !release.value.trim():
                        console.log("vacio")
                        releaseError.classList.add("is-invalid")
                        releaseError.innerText = "Este campo no puede estar vacio"
                    break;
                default:
                    console.log("lleno")
                    releaseError.classList.remove("is-invalid");
                    release.classList.remove("is-invalid");
                    release.classList.add("is-valid");
                    releaseError.innerText = "";
                    break;
            }
    })
    )

    // validacion length
    listener.forEach((listen) => 
    length.addEventListener(listen, () => {
            switch (true) {
                case !length.value.trim():
                        console.log("vacio");
                        lengthError.classList.add("is-invalid");
                        lengthError.innerText = "Este campo no puede estar vacio"
                    break;
                case (length.value < 60 || length.value > 360):
                        console.log("vacio");
                        lengthError.classList.add("is-invalid");
                        lengthError.innerText = "Este campo debe contener una valor entre 60 y 360"
                    break;
                default:
                    console.log("lleno")
                    lengthError.classList.remove("is-invalid");
                    length.classList.remove("is-invalid");
                    length.classList.add("is-valid");
                    lengthError.innerText = "";
                    break;
            }
    })
    )

    // validacion Genre
    listenerGenre.forEach((listen) => 
    genre.addEventListener(listen, () => {
            switch (true) {
                case genre.value.length < 1:
                        console.log("vacio")
                        genreError.classList.add("is-invalid")
                        genreError.innerText = "Este campo no puede estar vacio"
                    break;
                default:
                    console.log("lleno")
                    genreError.classList.remove("is-invalid");
                    genre.classList.remove("is-invalid");
                    genre.classList.add("is-valid");
                    genreError.innerText = "";
                    break;
            }
    })
    )

    form.addEventListener("submit", (e) => {

        e.preventDefault()
        console.log(titleInput)
        const FORM_ELEMENTS = e.target.elements;

        for (let i = 0; i < FORM_ELEMENTS.length -1; i++) {
            const element = FORM_ELEMENTS[i];
            if(element.value === ""){
                let divErrores = element.parentElement.nextElementSibling;
                divErrores.classList.add("is-invalid");
                divErrores.innerHTML = `<li>no cumple con los requisitos</li>` 
            }
        }

        let elementosConErrores = document.querySelectorAll(".is-invalid");
        let errores = elementosConErrores.length > 0;

        console.log(errores)
        console.log(elementosConErrores)
        if(errores){
            submitErrors.style.color = "red"
            submitErrors.innerHTML = "por favor, revise los errores en su formulario"
        } else {
            form.submit()
        }
    })



}