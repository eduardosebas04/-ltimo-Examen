var precioPorDefecto = 13.45; 

        function mostrarPrecio() {
            var selectedOption = document.getElementById('txtDistrito').value;

            switch (selectedOption) {
                case "1": // Gumbo
                    precioPorDefecto = 13.45;
                    break;
                case "2": // Feijoada
                    precioPorDefecto = 17.00;
                    break;
                case "3": // Arroz con Gandules
                    precioPorDefecto = 19.80;
                    break;
                case "4": // Mofongo
                    precioPorDefecto = 10.50;
                    break;
                case "5": // Jollof Rice
                    precioPorDefecto = 40.40;
                    break;
                case "6": // Ajiaco
                    precioPorDefecto = 35.30;
                    break;
                case "7": // Gallo Pinto
                    precioPorDefecto = 40.80;
                    break;
                case "8": // Ceviche
                    precioPorDefecto = 24.50;
                    break;
                case "9": // Gazpacho
                    precioPorDefecto = 30.40;
                    break;
                case "10": // Arepa
                    precioPorDefecto = 15.30;
                    break;
                case "11": // Bandeja Paisa
                    precioPorDefecto = 50.80;
                    break;
                case "12": // Lobio 
                    precioPorDefecto = 23.50;
                    break;
                case "13": // Poke
                    precioPorDefecto = 10.90;
                    break;
                case "14": // Laksa
                    precioPorDefecto = 23.10;
                    break;
                case "15": // Piri Piri Chicken
                    precioPorDefecto = 30.00;
                    break;
                case "16": // Matambre a la Pizza
                    precioPorDefecto = 33.30;
                    break;
                case "17": // Sancocho
                    precioPorDefecto = 20.90;
                    break;
                case "18": // Bunny Chow
                    precioPorDefecto = 43.10;
                    break;
                case "19": // Kibbeh
                    precioPorDefecto = 32.00;
                    break;
                case "20": // Balut
                    precioPorDefecto = 32.00;
                    break;
                default:
                    precioPorDefecto = 8.40; 
            }

            document.getElementById('numP1').value = precioPorDefecto;
        }

        function calcular() {
            var precio = parseFloat(document.getElementById('numP1').value);
            var cantidad = parseInt(document.getElementById('numP2').value);

            if (isNaN(precio) || isNaN(cantidad)) {
                alert("Ingresa valores numéricos válidos.");
                return;
            }

            var total = precio * cantidad;

            console.log("Producto Total: " + total);

            document.getElementById('txtNota').value = total.toFixed(2);
        }

        function limpiar() {
            document.getElementById('numP1').value = "";
            document.getElementById('numP2').value = "";
            document.getElementById('txtNota').value = "";
            document.getElementById('txtDistrito').value = "1"; // Restablecer a la opción por defecto
            document.getElementById('txtDistrito').focus();
        }