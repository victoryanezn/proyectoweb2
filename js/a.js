
// Script para copiar NavBar (usuario sin registrar) en cada pagina
if (document.getElementById('menu')) {
    fetch('/elementos/navbar.html').then(response => {
        return response.text();
    }).then(htmlContent => {
    document.getElementById('menu').innerHTML = htmlContent;
    window.scrollTo(0, 0);
    });
};



if (document.getElementById('piePag')) {
    fetch('/elementos/piepag.html').then(response => {
        return response.text();
    }).then(htmlContent => {
    document.getElementById('piePag').innerHTML = htmlContent;
    window.scrollTo(0, 0);
    });
  };


//   =============================================================




// ======================================================================
