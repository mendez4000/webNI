/* =====================================================
NICALEYENDAS
APP.JS
===================================================== */

/* =====================================================
DATOS DE LAS HISTORIAS
===================================================== */

const historias = [


{
    id: 1,

    titulo: "La Cegua",

    categoria: "leyenda",

    categoriaTexto: "LEYENDA POPULAR",

    region: "Masaya",

    icono: "👩‍🦳",

    descripcion:
        "Una misteriosa mujer aparece durante la noche a los viajeros que recorren caminos solitarios.",

    escenas: [

        {
            id: 1,

            texto:


`La noche ha caído sobre el camino.

Regresas a casa después de una larga jornada. El pueblo está tranquilo y apenas se escucha el viento entre los árboles.

De repente, ves a una mujer vestida de blanco caminando a unos metros de distancia.

No puedes distinguir su rostro.`,


            opciones: [

                {
                    texto: "👀 Acercarte para hablar con ella",
                    siguiente: 2
                },

                {
                    texto: "🏃 Continuar caminando rápidamente",
                    siguiente: 3
                }

            ]

        },

        {
            id: 2,

            texto:


`Te acercas lentamente.

La mujer se detiene.

Durante unos segundos permanece completamente inmóvil.

—¿Necesita ayuda? —preguntas.

Ella comienza a girarse lentamente hacia ti.`,


            opciones: [

                {
                    texto: "😨 Retroceder",
                    siguiente: 4
                },

                {
                    texto: "👁️ Esperar a que se dé la vuelta",
                    siguiente: 5
                }

            ]

        },

        {
            id: 3,

            texto:


`Decides no mirar atrás.

Aceleras el paso, pero escuchas pasos detrás de ti.

Cada vez están más cerca.

No sabes quién te sigue.`,


            opciones: [

                {
                    texto: "🏃 Correr",
                    siguiente: 5
                },

                {
                    texto: "👀 Mirar atrás",
                    siguiente: 4
                }

            ]

        },

        {
            id: 4,

            final: true,

            resultado: "final-malo",

            texto:


`Te das la vuelta.

Por un instante ves el rostro de una hermosa mujer.

Pero cuando la luz de la luna ilumina su rostro...

comprendes que no es un rostro humano.

El miedo te paraliza.

La leyenda cuenta que quienes encuentran a la Cegua nunca vuelven a caminar por el mismo camino.`


        },

        {
            id: 5,

            final: true,

            resultado: "final-secreto",

            texto:


`La mujer finalmente se vuelve.

Pero no encuentras un monstruo.

En su lugar, ves una figura que desaparece lentamente entre la neblina.

Al acercarte al lugar donde estaba, encuentras una pequeña cinta blanca.

Quizás la historia era diferente a como te la habían contado...

o quizás acabas de descubrir uno de sus secretos.`


        }

    ]

},


{
    id: 2,

    titulo: "La Carreta Nagua",

    categoria: "misterio",

    categoriaTexto: "MISTERIO",

    region: "Managua",

    icono: "🛒",

    descripcion:
        "Una carreta fantasma que, según la tradición popular, recorre las calles durante la noche.",

    escenas: [

        {
            id: 1,

            texto:


`Son las 12:47 de la noche.

La calle está completamente vacía.

Mientras caminas hacia tu casa escuchas algo a lo lejos.

CLIN...

CLIN...

CLIN...

El sonido de ruedas se acerca lentamente.`,


            opciones: [

                {
                    texto: "👀 Mirar hacia atrás",
                    siguiente: 2
                },

                {
                    texto: "🚪 Entrar rápidamente a una casa",
                    siguiente: 3
                }

            ]

        },

        {
            id: 2,

            texto:


`Al mirar hacia atrás no ves a nadie.

Pero el sonido continúa.

CLIN...

CLIN...

La calle permanece vacía.`,


            opciones: [

                {
                    texto: "🔎 Investigar",
                    siguiente: 4
                },

                {
                    texto: "🏃 Correr",
                    siguiente: 3
                }

            ]

        },

        {
            id: 3,

            final: true,

            resultado: "final-bueno",

            texto:


`Encuentras una puerta abierta y entras.

Desde la ventana observas cómo una antigua carreta pasa lentamente frente a la casa.

No hay caballo.

No hay conductor.

Solo la carreta avanzando en silencio.

Después desaparece entre la oscuridad.

Has sobrevivido a la noche.`


        },

        {
            id: 4,

            final: true,

            resultado: "final-secreto",

            texto:


`Sigues el sonido.

Finalmente encuentras una vieja carreta abandonada junto a un árbol.

No hay nadie alrededor.

En su interior encuentras una pequeña campana oxidada.

Cuando la tocas...

CLIN.

La carreta desaparece.

Nunca descubriste quién la conducía.`


        }

    ]

},


{
    id: 3,

    titulo: "La Mocuana",

    categoria: "leyenda",

    categoriaTexto: "LEYENDA",

    region: "León",

    icono: "🌙",

    descripcion:
        "Una de las leyendas más conocidas de Nicaragua, relacionada con una joven que desapareció entre las montañas.",

    escenas: [

        {
            id: 1,

            texto:


`La noche cae sobre las montañas.

Un anciano del pueblo te cuenta que existe una cueva donde, según la leyenda, vive La Mocuana.

—No vayas —te advierte.

Pero la curiosidad puede más que el miedo.`,


            opciones: [

                {
                    text: "🏔️ Buscar la cueva",
                    siguiente: 2
                },

                {
                    texto: "🏠 Regresar al pueblo",
                    siguiente: 3
                }

            ]

        },

        {
            id: 2,

            texto:


`Encuentras una entrada entre las rocas.

Dentro de la cueva hay pinturas antiguas y una pequeña luz al fondo.

Escuchas una voz:

—¿Por qué has venido?`,


            opciones: [

                {
                    texto: "🗣️ Responder",
                    siguiente: 4
                },

                {
                    texto: "🏃 Escapar",
                    siguiente: 3
                }

            ]

        },

        {
            id: 3,

            final: true,

            resultado: "final-bueno",

            texto:


`Decides regresar.

Mientras caminas escuchas una voz detrás de ti:

—Gracias.

Cuando volteas, no hay nadie.

Quizás la leyenda solo quería que alguien respetara su advertencia.`


        },

        {
            id: 4,

            final: true,

            resultado: "final-secreto",

            texto:


`—He venido a conocer tu historia.

La figura aparece lentamente.

No parece enfadada.

Te cuenta que muchas generaciones han repetido su historia sin conocer toda la verdad.

Antes de desaparecer, te dice:

—Las historias cambian cuando se cuentan demasiadas veces.

Al salir de la cueva, llevas contigo una nueva versión de la leyenda.`


        }

    ]

},


{
    id: 4,

    titulo: "El Cadejo",

    categoria: "leyenda",

    categoriaTexto: "LEYENDA POPULAR",

    region: "Granada",

    icono: "🐺",

    descripcion:
        "Una criatura misteriosa que aparece durante la noche. La tradición habla de diferentes tipos de cadejos.",

    escenas: [

        {
            id: 1,

            texto:


`Caminas por una calle silenciosa.

De pronto escuchas gruñidos.

Entre las sombras aparecen dos ojos brillantes.

Un perro enorme observa desde la distancia.`,


            opciones: [

                {
                    texto: "🐺 Acercarte",
                    siguiente: 2
                },

                {
                    texto: "🏃 Alejarte lentamente",
                    siguiente: 3
                }

            ]

        },

        {
            id: 2,

            texto:


`El animal se acerca.

Pero no parece querer atacarte.

Se coloca delante de ti y comienza a caminar lentamente por el camino.`,


            opciones: [

                {
                    texto: "🚶 Seguirlo",
                    siguiente: 4
                },

                {
                    texto: "🏠 Regresar",
                    siguiente: 3
                }

            ]

        },

        {
            id: 3,

            final: true,

            resultado: "final-bueno",

            texto:


`Decides regresar.

Desde la distancia observas cómo el animal desaparece entre los árboles.

Quizás el misterio era simplemente una advertencia para no caminar solo durante la noche.`


        },

        {
            id: 4,

            final: true,

            resultado: "final-secreto",

            texto:


`Sigues al animal.

Después de unos minutos llegas hasta el límite del pueblo.

El animal se detiene.

Te mira una última vez y desaparece.

Nunca supiste si era un guardián...

o simplemente otra historia que nació en la oscuridad.`


        }

    ]

},


{
    id: 5,

    titulo: "La Llorona",

    categoria: "misterio",

    categoriaTexto: "MISTERIO",

    region: "Rivas",

    icono: "🌫️",

    descripcion:
        "Una figura misteriosa asociada con los lamentos nocturnos y las historias transmitidas de generación en generación.",

    escenas: [

        {
            id: 1,

            texto:


`La noche está cubierta de neblina.

Mientras caminas cerca del río escuchas un lamento.

—¡Ay... mis hijos!

El sonido parece venir desde el otro lado del agua.`,


            opciones: [

                {
                    texto: "🌊 Acercarte al río",
                    siguiente: 2
                },

                {
                    texto: "🏃 Alejarte",
                    siguiente: 3
                }

            ]

        },

        {
            id: 2,

            texto:


`La neblina se vuelve más espesa.

Una figura aparece a pocos metros.

Su rostro está oculto entre sus largos cabellos.

La figura levanta lentamente la cabeza.`,


            opciones: [

                {
                    texto: "👁️ Mirarla",
                    siguiente: 4
                },

                {
                    texto: "🙏 Cerrar los ojos y regresar",
                    siguiente: 3
                }

            ]

        },

        {
            id: 3,

            final: true,

            resultado: "final-bueno",

            texto:


`Decides no acercarte.

El lamento continúa durante unos minutos.

Después desaparece.

La noche vuelve a quedar completamente silenciosa.

Quizás algunas historias deben permanecer en la oscuridad.`


        },

        {
            id: 4,

            final: true,

            resultado: "final-malo",

            texto:


`La figura levanta la cabeza.

El lamento se detiene.

Durante unos segundos solo escuchas el río.

Luego una voz susurra:

—¿Has visto a mis hijos?

La neblina cubre todo.

Cuando vuelves a mirar, la figura ha desaparecido.`


        }

    ]

}


];

/* =====================================================
PERSONAJES
===================================================== */

const personajes = [


{
    nombre: "La Cegua",
    icono: "👩‍🦳",
    region: "Varias regiones",
    descripcion:
        "Figura misteriosa de las leyendas nocturnas. Su historia se relaciona con viajeros y caminos solitarios."
},

{
    nombre: "La Mocuana",
    icono: "🌙",
    region: "León",
    descripcion:
        "Personaje legendario asociado con las montañas y las historias transmitidas de generación en generación."
},

{
    nombre: "El Cadejo",
    icono: "🐺",
    region: "Granada",
    descripcion:
        "Criatura sobrenatural representada como un perro misterioso que aparece durante la noche."
},

{
    nombre: "La Llorona",
    icono: "🌫️",
    region: "Rivas",
    descripcion:
        "Figura asociada a los lamentos nocturnos y a una historia que ha sido transmitida oralmente."
},

{
    nombre: "La Carreta Nagua",
    icono: "🛒",
    region: "Managua",
    descripcion:
        "Carreta fantasmal de las historias populares que, según la tradición, aparece durante la noche."
}


];

/* =====================================================
ESTADO DEL JUEGO
===================================================== */

let estado = {


xp: 0,

historiasCompletadas: [],

finalesDescubiertos: [],

logros: [],

historiaActual: null,

escenaActual: 1,

sonido: false


};

/* =====================================================
CARGAR PROGRESO
===================================================== */

function cargarProgreso() {


const guardado =
    localStorage.getItem("nicaLeyendasProgreso");

if (guardado) {

    try {

        const datos =
            JSON.parse(guardado);

        estado = {
            ...estado,
            ...datos
        };

    } catch (error) {

        console.error(
            "No se pudo cargar el progreso."
        );

    }

}


}

/* =====================================================
GUARDAR PROGRESO
===================================================== */

function guardarProgreso() {


localStorage.setItem(
    "nicaLeyendasProgreso",
    JSON.stringify(estado)
);


}

/* =====================================================
INICIALIZACIÓN
===================================================== */

document.addEventListener(
"DOMContentLoaded",
() => {


    cargarProgreso();

    renderizarHistorias();

    renderizarDestacadas();

    renderizarPersonajes();

    actualizarInterfaz();

    actualizarDiario();

    configurarTeclado();

}


);

/* =====================================================
NAVEGACIÓN
===================================================== */

function mostrarSeccion(id) {


document
    .querySelectorAll(".page-section")
    .forEach(section => {

        section.classList.remove("active");

    });


const section =
    document.getElementById(id);

if (!section) return;

section.classList.add("active");

window.scrollTo({
    top: 0,
    behavior: "smooth"
});


}

/* =====================================================
RENDER HISTORIAS
===================================================== */

function renderizarHistorias(lista = historias) {


const container =
    document.getElementById("storiesGrid");

if (!container) return;

if (lista.length === 0) {

    container.innerHTML = `

        <div class="empty-state">

            <h3>No encontramos historias</h3>

            <p>
                Prueba con otro término de búsqueda.
            </p>

        </div>

    `;

    return;

}


container.innerHTML =
    lista.map(crearTarjetaHistoria).join("");


}

/* =====================================================
DESTACADAS
===================================================== */

function renderizarDestacadas() {


const container =
    document.getElementById(
        "featuredStories"
    );

if (!container) return;

container.innerHTML =
    historias
        .slice(0, 3)
        .map(crearTarjetaHistoria)
        .join("");


}

/* =====================================================
CREAR TARJETA
===================================================== */

function crearTarjetaHistoria(historia) {


const completada =
    estado.historiasCompletadas
        .includes(historia.id);

return `

    <article
        class="story-card"
        onclick="abrirHistoria(${historia.id})">

        <div class="story-card-image">

            ${historia.icono}

        </div>

        <div class="story-card-overlay"></div>

        <div class="story-card-content">

            <small>
                ${historia.categoriaTexto}
            </small>

            <h3>
                ${historia.titulo}
            </h3>

            <p>
                ${historia.descripcion}
            </p>

            ${
                completada
                ?
                `<small>✓ DESCUBIERTA</small>`
                :
                ""
            }

        </div>

    </article>

`;


}

/* =====================================================
PERSONAJES
===================================================== */

function renderizarPersonajes() {


const container =
    document.getElementById(
        "charactersGrid"
    );

if (!container) return;


container.innerHTML =
    personajes.map(personaje => `

        <article class="character-card">

            <div class="character-icon">

                ${personaje.icono}

            </div>

            <h3>
                ${personaje.nombre}
            </h3>

            <small>
                📍 ${personaje.region}
            </small>

            <p>
                ${personaje.descripcion}
            </p>

        </article>

    `).join("");


}

/* =====================================================
BUSCADOR
===================================================== */

function buscarHistorias() {


const texto =
    document
        .getElementById("storySearch")
        .value
        .toLowerCase()
        .trim();


const resultado =
    historias.filter(historia => {

        return (

            historia.titulo
                .toLowerCase()
                .includes(texto)

            ||

            historia.region
                .toLowerCase()
                .includes(texto)

            ||

            historia.descripcion
                .toLowerCase()
                .includes(texto)

        );

    });


renderizarHistorias(resultado);


}

/* =====================================================
FILTRO
===================================================== */

function filtrarHistorias() {


const categoria =
    document
        .getElementById("categoryFilter")
        .value;


if (categoria === "todos") {

    renderizarHistorias(historias);

    return;

}


const resultado =
    historias.filter(
        historia =>
            historia.categoria === categoria
    );


renderizarHistorias(resultado);


}

/* =====================================================
ABRIR HISTORIA
===================================================== */

function abrirHistoria(id) {


const historia =
    historias.find(
        item => item.id === id
    );

if (!historia) return;


estado.historiaActual =
    historia;

estado.escenaActual = 1;


document
    .getElementById("modalTitle")
    .textContent =
    historia.titulo;


document
    .getElementById("modalCategory")
    .textContent =
    historia.categoriaTexto;


document
    .getElementById("storyModal")
    .classList.add("active");


mostrarEscena();


}

/* =====================================================
MOSTRAR ESCENA
===================================================== */

function mostrarEscena() {


const historia =
    estado.historiaActual;

if (!historia) return;


const escena =
    historia.escenas.find(
        item =>
            item.id === estado.escenaActual
    );


if (!escena) return;


const textElement =
    document.getElementById("storyText");

const choicesElement =
    document.getElementById("storyChoices");

const continueButton =
    document.getElementById(
        "continueButton"
    );

const progressElement =
    document.getElementById(
        "storyProgress"
    );


textElement.textContent =
    escena.texto;


choicesElement.innerHTML = "";


continueButton.style.display =
    "none";


const totalEscenas =
    historia.escenas.length;


progressElement.textContent =
    `ESCENA ${escena.id} / ${totalEscenas}`;


/* ESCENA FINAL */

if (escena.final) {

    registrarFinal(
        historia.id,
        escena.resultado
    );


    choicesElement.innerHTML = `

        <div class="final-message">

            <strong>
                ${obtenerTituloFinal(
                    escena.resultado
                )}
            </strong>

            <p>
                Has llegado al final de esta historia.
            </p>

        </div>

    `;


    continueButton.textContent =
        "Cerrar historia";


    continueButton.style.display =
        "block";


    continueButton.onclick =
        cerrarHistoria;

    return;

}


/* OPCIONES */

escena.opciones.forEach(
    opcion => {

        const button =
            document.createElement(
                "button"
            );


        button.className =
            "choice-button";


        button.textContent =
            opcion.texto;


        button.onclick =
            () => {

                reproducirEfecto();

                estado.escenaActual =
                    opcion.siguiente;

                mostrarEscena();

            };


        choicesElement
            .appendChild(button);

    }
);


}

/* =====================================================
CONTINUAR
===================================================== */

function continuarHistoria() {


cerrarHistoria();


}

/* =====================================================
REGISTRAR FINAL
===================================================== */

function registrarFinal(
historiaId,
finalId
) {


const clave =
    `${historiaId}-${finalId}`;


if (
    !estado.finalesDescubiertos
        .includes(clave)
) {

    estado.finalesDescubiertos.push(
        clave
    );

    estado.xp += 100;

    mostrarToast(
        "🏆",
        "Final descubierto",
        "+100 XP por descubrir un final."
    );

}


if (
    !estado.historiasCompletadas
        .includes(historiaId)
) {

    estado.historiasCompletadas
        .push(historiaId);

    estado.xp += 100;

    mostrarToast(
        "📖",
        "Historia descubierta",
        "+100 XP por completar la historia."
    );

}


verificarLogros();

guardarProgreso();

actualizarInterfaz();

actualizarDiario();


}

/* =====================================================
TITULOS DE FINALES
===================================================== */

function obtenerTituloFinal(tipo) {


switch (tipo) {

    case "final-bueno":
        return "🟢 FINAL — Has sobrevivido";

    case "final-malo":
        return "🔴 FINAL — La leyenda continúa";

    case "final-secreto":
        return "🟣 FINAL SECRETO — Has descubierto algo oculto";

    default:
        return "🏁 FINAL";

}


}

/* =====================================================
CERRAR HISTORIA
===================================================== */

function cerrarHistoria() {


document
    .getElementById("storyModal")
    .classList.remove("active");


document
    .getElementById(
        "continueButton"
    )
    .onclick =
    continuarHistoria;


}

/* =====================================================
REGIONES
===================================================== */

function seleccionarRegion(region) {


const historiasRegion =
    historias.filter(
        historia =>
            historia.region === region
    );


const container =
    document.getElementById(
        "regionInformation"
    );


if (!container) return;


container.innerHTML = `

    <div class="region-icon">
        📍
    </div>

    <h3>
        ${region}
    </h3>

    <p>
        ${historiasRegion.length}
        historia(s) disponible(s).
    </p>

    <div style="
        margin-top:20px;
        display:grid;
        gap:10px;
    ">

        ${historiasRegion.map(historia => `

            <button
                class="secondary-button"
                onclick="abrirHistoria(${historia.id})">

                ${historia.icono}
                ${historia.titulo}

            </button>

        `).join("")}

    </div>

`;


}

/* =====================================================
DIARIO
===================================================== */

function actualizarDiario() {


const list =
    document.getElementById(
        "diaryList"
    );


if (!list) return;


list.innerHTML =
    historias.map(historia => {

        const descubierta =
            estado.historiasCompletadas
                .includes(historia.id);


        return `

            <div class="diary-item">

                <div class="diary-icon">

                    ${
                        descubierta
                        ?
                        historia.icono
                        :
                        "🔒"
                    }

                </div>

                <div>

                    <h3>

                        ${
                            descubierta
                            ?
                            historia.titulo
                            :
                            "Historia bloqueada"
                        }

                    </h3>

                    <p>

                        ${
                            descubierta
                            ?
                            historia.region
                            :
                            "Completa la historia para desbloquearla."
                        }

                    </p>

                </div>

                <div class="diary-status">

                    ${
                        descubierta
                        ?
                        "✓"
                        :
                        "🔒"
                    }

                </div>

            </div>

        `;

    }).join("");


const total =
    historias.length;


const completadas =
    estado.historiasCompletadas.length;


const porcentaje =
    (completadas / total) * 100;


document
    .getElementById(
        "diaryProgress"
    )
    .style.width =
    `${porcentaje}%`;


document
    .getElementById(
        "diaryProgressText"
    )
    .textContent =
    `${completadas} / ${total}`;


}

/* =====================================================
LOGROS
===================================================== */

const logrosDisponibles = [


{
    id: "primera",
    titulo: "Primera historia",
    condicion:
        estado =>
            estado.historiasCompletadas.length >= 1,
    mensaje:
        "Has completado tu primera historia."
},

{
    id: "explorador",
    titulo: "Explorador",
    condicion:
        estado =>
            estado.historiasCompletadas.length >= 3,
    mensaje:
        "Has descubierto tres historias."
},

{
    id: "maestro",
    titulo: "Maestro de leyendas",
    condicion:
        estado =>
            estado.historiasCompletadas.length >= 5,
    mensaje:
        "Has descubierto todas las historias."
},

{
    id: "finalista",
    titulo: "Cazador de finales",
    condicion:
        estado =>
            estado.finalesDescubiertos.length >= 5,
    mensaje:
        "Has descubierto cinco finales."
}


];

/* =====================================================
VERIFICAR LOGROS
===================================================== */

function verificarLogros() {


logrosDisponibles.forEach(logro => {

    if (
        logro.condicion(estado)
        &&
        !estado.logros.includes(logro.id)
    ) {

        estado.logros.push(
            logro.id
        );


        mostrarToast(
            "🏆",
            logro.titulo,
            logro.mensaje
        );

    }

});


guardarProgreso();


}

/* =====================================================
INTERFAZ
===================================================== */

function actualizarInterfaz() {


const xp =
    estado.xp;


const elementosXP = [

    "headerXP",
    "homeXP"

];


elementosXP.forEach(id => {

    const elemento =
        document.getElementById(id);

    if (elemento) {

        elemento.textContent =
            `${xp} XP`;

    }

});


actualizarPerfil();


}

/* =====================================================
PERFIL
===================================================== */

function mostrarPerfil() {


actualizarPerfil();

document
    .getElementById(
        "profileModal"
    )
    .classList.add("active");


}

function cerrarPerfil() {


document
    .getElementById(
        "profileModal"
    )
    .classList.remove("active");


}

function actualizarPerfil() {


const nivel =
    Math.floor(
        estado.xp / 500
    ) + 1;


const xpNivel =
    estado.xp % 500;


const porcentaje =
    (xpNivel / 500) * 100;


const level =
    document.getElementById(
        "profileLevel"
    );


const xp =
    document.getElementById(
        "profileXP"
    );


const progress =
    document.getElementById(
        "profileProgress"
    );


if (level)
    level.textContent =
        nivel;


if (xp)
    xp.textContent =
        `${estado.xp} XP`;


if (progress)
    progress.style.width =
        `${porcentaje}%`;


const stories =
    document.getElementById(
        "profileStories"
    );


const finals =
    document.getElementById(
        "profileFinals"
    );


const achievements =
    document.getElementById(
        "profileAchievements"
    );


if (stories)
    stories.textContent =
        estado.historiasCompletadas.length;


if (finals)
    finals.textContent =
        estado.finalesDescubiertos.length;


if (achievements)
    achievements.textContent =
        estado.logros.length;


}

/* =====================================================
TOAST
===================================================== */

let toastTimeout;

function mostrarToast(
icono,
titulo,
mensaje
) {


const toast =
    document.getElementById(
        "toast"
    );


document
    .getElementById(
        "toastIcon"
    )
    .textContent =
    icono;


document
    .getElementById(
        "toastTitle"
    )
    .textContent =
    titulo;


document
    .getElementById(
        "toastMessage"
    )
    .textContent =
    mensaje;


toast.classList.add("show");


clearTimeout(toastTimeout);


toastTimeout =
    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 4000);


}

/* =====================================================
SONIDO
===================================================== */

function alternarSonido() {


estado.sonido =
    !estado.sonido;


const button =
    document.getElementById(
        "soundButton"
    );


button.textContent =
    estado.sonido
    ?
    "🔊"
    :
    "🔇";


guardarProgreso();


mostrarToast(

    estado.sonido
    ?
    "🔊"
    :
    "🔇",

    estado.sonido
    ?
    "Sonido activado"
    :
    "Sonido desactivado",

    estado.sonido
    ?
    "Los efectos de sonido están activos."
    :
    "Los efectos de sonido están desactivados."

);


}

function reproducirEfecto() {


if (!estado.sonido) return;


try {

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;


    const audio =
        new AudioContext();


    const oscillator =
        audio.createOscillator();


    const gain =
        audio.createGain();


    oscillator.frequency.value =
        320;


    oscillator.type =
        "sine";


    gain.gain.setValueAtTime(
        .08,
        audio.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        .001,
        audio.currentTime + .2
    );


    oscillator.connect(gain);

    gain.connect(
        audio.destination
    );


    oscillator.start();

    oscillator.stop(
        audio.currentTime + .2
    );

} catch (error) {

    console.log(
        "Audio no disponible."
    );

}


}

/* =====================================================
TECLADO
===================================================== */

function configurarTeclado() {


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            cerrarHistoria();

            cerrarPerfil();

        }

    }
);


}

/* =====================================================
CERRAR MODAL HACIENDO CLICK FUERA
===================================================== */

document.addEventListener(
"click",
event => {


    const storyModal =
        document.getElementById(
            "storyModal"
        );


    const profileModal =
        document.getElementById(
            "profileModal"
        );


    if (
        event.target === storyModal
    ) {

        cerrarHistoria();

    }


    if (
        event.target === profileModal
    ) {

        cerrarPerfil();

    }

}


);
