var VariableColor = document.getElementById("VariableColor");
const colores = ["Tomato","Thistle","SlateGrey","SlateBlue","Seashell","SaddleBrown","RoyalBlue","PeachPuff","PapayaWhip","PaleTurquoise","PaleGreen","PaleGoldenrod","Orchid","OrangeRed","Orange","OliveDrab","Olive","OldLace","Navy","NavajoWhite","Moccasin","MistyRose","MintCream","MidnightBlue","MediumVioletRed","MediumPurple","MediumOrchid","MediumBlue","MediumAquamarine","Maroon","Magenta","LimeGreen","Lime","LightSalmon","LightGray","LightCyan","LightCoral","LightBlue","LemonChiffon","LawnGreen","LavenderBlush","Lavender","Khaki","Ivory","Honeydew","Goldenrod","Gold","FireBrick","ForestGreen","Fuchsia","DarkSlateGray","DarkSlateBlue","DarkSeaGreen","DarkSalmon","DarkOrange","DarkOrange","DarkOliveGreen","DarkMagenta","DarkKhaki","DarkGreen","DarkGray","DarkGoldenrod","DarkCyan","DarkBlue","Cyan","Crimson","Cornsilk","CornflowerBlue","Coral","Chocolate","Chartreuse","CadetBlue","BurlyWood","Brown","BlanchedAlmond","Beige","Azure","Aquamarine","Aqua",'mediumvioletred','royalblue','cornflowerblue','violet','plum','blue','yellow','paleturquoise','black','palevioletred','red','yellowgreen','purple','peachpuff','pink'];
            function CambioColor() {
                var indice= parseInt(Math.random()*colores.length);
                document.body.style.background = colores[indice];
                document.getElementById("VariableColor").innerHTML = colores[indice];
                console.log(colores[indice])
                console.log(indice)
            }
        
            const primeraLetraMayuscula = (VariableColor) => {
                const primerCaracter = VariableColor.charAt(0).toUpperCase();
                const restoDeLaCadena = VariableColor.substring(1, VariableColor.length);
                return primerCaracter.concat(restoDeLaCadena);
              }
    



  
