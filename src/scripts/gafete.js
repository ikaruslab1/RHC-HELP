document.addEventListener("DOMContentLoaded", () => {
    const credencialContenedor = document.getElementById(
        "credencial-contenedor",
    );
    const credencialInterna =
        credencialContenedor.querySelector(".relative");

    let isFlipped = false;

    const flipCard = () => {
        credencialInterna.style.transform = isFlipped
            ? "rotateY(0deg)"
            : "rotateY(180deg)";
        isFlipped = !isFlipped;
    };

    credencialContenedor.addEventListener("click", flipCard);

});

/* Datos constancia */

class AstroGreet extends HTMLElement {
    constructor() {
        super();

        // Accede a los dos inputs que queremos modificar
        const passwordInputs = [
            document.getElementById("target-input"),
            document.getElementById("target-input2"),
        ];

        // Lee la clave del atributo data-clave.
        const clave = this.dataset.clave;
        const button = this.querySelector("button");

        button.addEventListener("click", () => {
            const userKey = prompt(
                "Introduzca su RFC sin homocalve:",
            ).toUpperCase();

            if (userKey == clave) {
                passwordInputs.forEach((passwordInput) => {
                    if (passwordInput) {
                        if (passwordInput.type === "password") {
                            passwordInput.type = "text";
                        } else {
                            passwordInput.type = "password";
                        }
                    }
                });

                if (passwordInputs[0].type === "text") {
                    alert(
                        "Dato correcto, si quiere ocultar los datos introduzca de nuevo su RFC",
                    );
                } else {
                    alert("Datos ocultos de nuevo.");
                }
            } else {
                alert("Clave incorrecta. Inténtalo de nuevo.");
            }
        });
    }
}

customElements.define("astro-greet", AstroGreet);

/* Enviar correo */

document.addEventListener("DOMContentLoaded", () => {
    const correoLink = document.getElementById("correo-link");
    const clave = correoLink.dataset.clave;

    correoLink.addEventListener("click", (e) => {
        e.preventDefault();
        const userKey = prompt("Introduzca su RFC sin homoclave:");

        if (userKey === clave) {
            correoLink.removeAttribute("target"); // asegúrate que no tenga target extraño
            correoLink.click(); // vuelve a disparar el click
        } else {
            alert("Clave incorrecta. Inténtalo de nuevo.");
        }
    });
});