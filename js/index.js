for (let i = 1; i <= 3; i++) {
    let pregunta;
    let respuestaCorrecta;

    switch(i) {
        case 1:
            pregunta = "¿Boca o River?";
            respuestaCorrecta = "Boca";
            verificacion(respuestaCorrecta, pregunta);
            break;

        case 2:
            pregunta = "¿La Bombonera o el Monumental?";
            respuestaCorrecta = "La Bombonera";
            verificacion(respuestaCorrecta, pregunta);
            break;

        case 3:
            pregunta = "¿El Pipa Benedetto o Gallardo?";
            respuestaCorrecta = "El Pipa Benedetto";
            verificacion(respuestaCorrecta, pregunta);
            break;

        default:
            alert("Encuesta de preguntas ¿quién es más grande?");
            break;
    }
}

function verificacion(respuestaCorrecta, pregunta) {
    let respuesta = prompt(pregunta);

    while(respuesta.toLowerCase() !== "boca" && respuesta.toLowerCase() !== "river" && respuesta.toLowerCase() !== "la bombonera" && respuesta.toLowerCase() !== "el monumental" && respuesta.toLowerCase() !== "el pipa benedetto" && respuesta.toLowerCase() !== "gallardo") {
        alert("Es una encuesta, elige una opción válida");
        respuesta = prompt(pregunta);
    }

    if (respuesta.toLowerCase() === respuestaCorrecta.toLowerCase()) {
        alert("¡Se viene Boca!");
    } else {
        alert("Respuesta incorrecta. Sos de la B");
    }
}