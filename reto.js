/* Escriba un for...of que itere a través de nuestra matriz pokemonList.

Dentro del bloque del bucle for...of, use console.log() con una interpolación 
de cadenas como se modeló anteriormente para registrar cada elemento de la 
matriz pokemon dentro de la cadena: 'You caught a 'X'!'. 
Por ejemplo, la primera iteración del bucle debería imprimir 
'You caught a Pikachu!' en la consola.

Uno de los elementos, 'Yoshi', no es un Pokémon. 
Si encuentras 'Yoshi', usa continue para omitir este elemento antes de que 
se registre en la consola.
*/
const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

for (elemento of pokemonList) {    
    if (elemento == "Yoshi") {
        
        continue;
    }
    console.log(`'You caught a ${elemento}!'`)
}