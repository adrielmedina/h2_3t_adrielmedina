document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Loaded");
    var encuestasData = [
        [
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "M",
             "Edad": 22,
             "Pregunta_1": 4,
             "Pregunta_2": 5,
             "Pregunta_3": 3,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "F",
             "Edad": 20,
             "Pregunta_1": 3,
             "Pregunta_2": 4,
             "Pregunta_3": 4,
             "Pregunta_4": 3,
             "Pregunta_5": 2
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "M",
             "Edad": 23,
             "Pregunta_1": 5,
             "Pregunta_2": 5,
             "Pregunta_3": 5,
             "Pregunta_4": 4,
             "Pregunta_5": 5
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "F",
             "Edad": 21,
             "Pregunta_1": 2,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "M",
             "Edad": 24,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 3,
             "Pregunta_5": 4
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "F",
             "Edad": 22,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 3
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "M",
             "Edad": 20,
             "Pregunta_1": 3,
             "Pregunta_2": 3,
             "Pregunta_3": 2,
             "Pregunta_4": 4,
             "Pregunta_5": 4
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "F",
             "Edad": 25,
             "Pregunta_1": 4,
             "Pregunta_2": 5,
             "Pregunta_3": 5,
             "Pregunta_4": 5,
             "Pregunta_5": 5
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "M",
             "Edad": 21,
             "Pregunta_1": 4,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 4
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "F",
             "Edad": 23,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "M",
             "Edad": 22,
             "Pregunta_1": 3,
             "Pregunta_2": 5,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "F",
             "Edad": 20,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 2
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "M",
             "Edad": 24,
             "Pregunta_1": 5,
             "Pregunta_2": 5,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 5
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "F",
             "Edad": 21,
             "Pregunta_1": 3,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 5,
             "Pregunta_5": 4
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "M",
             "Edad": 25,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 3,
             "Pregunta_5": 4
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "F",
             "Edad": 22,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 3
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "M",
             "Edad": 20,
             "Pregunta_1": 3,
             "Pregunta_2": 5,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "F",
             "Edad": 24,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 3,
             "Pregunta_5": 4
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "M",
             "Edad": 21,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "F",
             "Edad": 23,
             "Pregunta_1": 3,
             "Pregunta_2": 3,
             "Pregunta_3": 2,
             "Pregunta_4": 4,
             "Pregunta_5": 4
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "M",
             "Edad": 22,
             "Pregunta_1": 4,
             "Pregunta_2": 5,
             "Pregunta_3": 3,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "F",
             "Edad": 20,
             "Pregunta_1": 3,
             "Pregunta_2": 4,
             "Pregunta_3": 4,
             "Pregunta_4": 3,
             "Pregunta_5": 2
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "M",
             "Edad": 23,
             "Pregunta_1": 5,
             "Pregunta_2": 5,
             "Pregunta_3": 5,
             "Pregunta_4": 4,
             "Pregunta_5": 5
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "F",
             "Edad": 21,
             "Pregunta_1": 2,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "M",
             "Edad": 24,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 3,
             "Pregunta_5": 4
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "M",
             "Edad": 22,
             "Pregunta_1": 4,
             "Pregunta_2": 5,
             "Pregunta_3": 3,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "F",
             "Edad": 20,
             "Pregunta_1": 3,
             "Pregunta_2": 4,
             "Pregunta_3": 4,
             "Pregunta_4": 3,
             "Pregunta_5": 2
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "M",
             "Edad": 23,
             "Pregunta_1": 5,
             "Pregunta_2": 5,
             "Pregunta_3": 5,
             "Pregunta_4": 4,
             "Pregunta_5": 5
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "F",
             "Edad": 21,
             "Pregunta_1": 2,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "M",
             "Edad": 24,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 3,
             "Pregunta_5": 4
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "F",
             "Edad": 22,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "M",
             "Edad": 20,
             "Pregunta_1": 3,
             "Pregunta_2": 3,
             "Pregunta_3": 2,
             "Pregunta_4": 4,
             "Pregunta_5": 4
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "F",
             "Edad": 25,
             "Pregunta_1": 4,
             "Pregunta_2": 5,
             "Pregunta_3": 5,
             "Pregunta_4": 5,
             "Pregunta_5": 5
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "M",
             "Edad": 21,
             "Pregunta_1": 4,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 4
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "F",
             "Edad": 23,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "M",
             "Edad": 22,
             "Pregunta_1": 3,
             "Pregunta_2": 5,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "F",
             "Edad": 20,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "M",
             "Edad": 24,
             "Pregunta_1": 5,
             "Pregunta_2": 5,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 5
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "F",
             "Edad": 21,
             "Pregunta_1": 3,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "M",
             "Edad": 25,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "F",
             "Edad": 22,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "M",
             "Edad": 20,
             "Pregunta_1": 2,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "F",
             "Edad": 23,
             "Pregunta_1": 3,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 2
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "M",
             "Edad": 21,
             "Pregunta_1": 4,
             "Pregunta_2": 5,
             "Pregunta_3": 4,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "F",
             "Edad": 24,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "M",
             "Edad": 22,
             "Pregunta_1": 3,
             "Pregunta_2": 3,
             "Pregunta_3": 2,
             "Pregunta_4": 5,
             "Pregunta_5": 4
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "F",
             "Edad": 20,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "M",
             "Edad": 23,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 2
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "F",
             "Edad": 25,
             "Pregunta_1": 3,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 4,
             "Pregunta_5": 5
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "M",
             "Edad": 21,
             "Pregunta_1": 4,
             "Pregunta_2": 5,
             "Pregunta_3": 4,
             "Pregunta_4": 3,
             "Pregunta_5": 2
            }
           ]
    ];

    function mostrarEncuestas(data) {
        var encuestasContainer = document.getElementById("encuestas-container");
        data.forEach(encuestas => {
            encuestas.forEach(encuesta => {
                var encuestaDiv = document.createElement("div");
                encuestaDiv.classList.add("encuesta");
                encuestaDiv.innerHTML = `
                    <h2>${encuesta.Centro} - ${encuesta.Grado}</h2>
                    <p><strong>Sexo:</strong> ${encuesta.Sexo}</p>
                    <p><strong>Edad:</strong> ${encuesta.Edad}</p>
                    <p><strong>Pregunta 1:</strong> ${encuesta.Pregunta_1}</p>
                    <p><strong>Pregunta 2:</strong> ${encuesta.Pregunta_2}</p>
                    <p><strong>Pregunta 3:</strong> ${encuesta.Pregunta_3}</p>
                    <p><strong>Pregunta 4:</strong> ${encuesta.Pregunta_4}</p>
                    <p><strong>Pregunta 5:</strong> ${encuesta.Pregunta_5}</p>
                `;
                encuestasContainer.appendChild(encuestaDiv);
            });
        });
    }

    mostrarEncuestas(encuestasData);

    function contarRespuestasPorPregunta(data, pregunta) {
        var conteo = [0, 0, 0, 0, 0];
        data.forEach(function(encuestas) {
            encuestas.forEach(function(encuesta) {
                var respuesta = encuesta[`Pregunta_${pregunta}`];
                if (respuesta >= 1 && respuesta <= 5) {
                    conteo[respuesta - 1]++;
                }
            });
        });
        return conteo;
    }

    function contarGenero(data) {
        var conteo = { M: 0, F: 0 };
        data.forEach(function(encuestas) {
            encuestas.forEach(function(encuesta) {
                if (encuesta.Sexo === "M" || encuesta.Sexo === "F") {
                    conteo[encuesta.Sexo]++;
                }
            });
        });
        return conteo;
    }

    function contarGrado(data) {
        var conteo = { DAM: 0, DAW: 0, ASIR: 0, SMR: 0 };
        data.forEach(function(encuestas) {
            encuestas.forEach(function(encuesta) {
                if (conteo.hasOwnProperty(encuesta.Grado)) {
                    conteo[encuesta.Grado]++;
                }
            });
        });
        return conteo;
    }

    var respuestasPregunta1 = contarRespuestasPorPregunta(encuestasData, 1);
    var respuestasPregunta2 = contarRespuestasPorPregunta(encuestasData, 2);
    var respuestasPregunta3 = contarRespuestasPorPregunta(encuestasData, 3);

    var nombresRespuestasPregunta3 = ['Nunca', 'Una vez al día', 'Dos veces al día', 'Dos veces al día', 'Más de tres veces al día'];

    function crearGrafica(idCanvas, tipo, label, datos, nombresRespuestas) {
        new Chart(document.getElementById(idCanvas), {
            type: tipo,
            data: {
                labels: nombresRespuestas ? nombresRespuestas : ['Nunca', 'A veces', 'Normalmente', 'Casi siempre', 'Siempre'],
                datasets: [{
                    label: label,
                    data: datos,
                    backgroundColor: [
                        'rgba(153, 0, 51, 1)',    
                        'rgba(0, 51, 102, 1)',    
                        'rgba(153, 102, 0, 1)',   
                        'rgba(0, 102, 102, 1)',   
                        'rgba(51, 0, 102, 1)'     
                    ],
                    borderColor: [
                        'rgba(153, 0, 51, 1)',    
                        'rgba(0, 51, 102, 1)',    
                        'rgba(153, 102, 0, 1)',   
                        'rgba(0, 102, 102, 1)',   
                        'rgba(51, 0, 102, 1)'     
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    crearGrafica('chartPregunta1', 'bar', '¿Con qué frecuencia revisas tus redes sociales?', respuestasPregunta1);
    crearGrafica('chartPregunta2', 'bar', '¿Con qué frecuencia compartes contenido en tus redes sociales?', respuestasPregunta2);
    crearGrafica('chartPregunta3', 'bar', '¿Cuántas veces al día publicas en tus redes sociales?', respuestasPregunta3, nombresRespuestasPregunta3);

    var generoData = contarGenero(encuestasData);
    var gradosData = contarGrado(encuestasData);

    crearGrafica('chartGenero', 'doughnut', 'Distribución por Género', [generoData.M, generoData.F], ['Hombre', 'Mujer']);
    crearGrafica('chartGrado', 'doughnut', 'Distribución por Grado', Object.values(gradosData), Object.keys(gradosData));
});