document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los botones de imprimir
    const printBtns = document.querySelectorAll(".printPdfBtn");

    printBtns.forEach(function(printBtn) {
      printBtn.addEventListener("click", function () {
        const originalTitle = document.title;
        document.title = "hola"; // Elimina el título para que no aparezca en el encabezado

        // Crear estilos de impresión
        const style = document.createElement("style");
        style.innerHTML = `
          @page {
            size: letter landscape;
            margin: 0;
          }
          @media print {
            html, body {
              width: 100%;
              height: 100%;
              overflow: hidden;
            }
            body * {
              visibility: hidden;
            }
            #pdfContent,
            #pdfContent * {
              visibility: visible;
            }
            #pdfContent {
              position: absolute;
              left: 0;
              top: 0;
              width: 11in;
              height: 8.5in;
              margin: 0;
              padding: 0.5in;
              transform: none;
              box-shadow: none;
            }
          }
        `;
        document.head.appendChild(style);

        // Imprimir
        window.print();

        // Restaurar el título original después de imprimir
        setTimeout(() => {
          document.title = originalTitle;
          document.head.removeChild(style);
        }, 100);
      });
    });
  });