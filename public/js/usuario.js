window.addEventListener('load', function() {
    var usuarioInput = document.getElementById('txtNum');
    var contraseñaInput = document.getElementById('txtDesde');
    var ingresarButton = document.querySelector('button');
    var zonaDiv = document.getElementById('zona');

    ingresarButton.addEventListener('click', function() {
        var usuario = usuarioInput.value;
        var contraseña = contraseñaInput.value;

        // Verificar las credenciales y redirigir a la página correspondiente
        if (usuario === 'Sebastian Valdivieso LLontop' && contraseña === '123456') {
            // Puedes cambiar las siguientes líneas para redirigir a diferentes páginas
            window.location.href = 'home.html';
        } else {
            zonaDiv.innerHTML = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
        }
    });
});