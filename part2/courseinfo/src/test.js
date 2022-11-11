import fs from 'fs'
var output = fs.readFileSync('data.txt', 'utf8')
.trim()
.split('\r\n')
.map(line => line.split('\t'))
.reduce((customers, line ) => {
   customers[line[0]] = customers[line[0]] || []
   customers[line[0]].push({
    name: line[1],
    price: line[2],
    quantity: line[3]
   })
   return customers
}, {})

console.log('output', JSON.stringify(output, null, 2))

/* Avec l'input, où les champs sont séparés par un \t : 
mark johansson	waffle iron	80	2
mark johansson	blender	200	1
mark johansson	knife	10	4
Nikita Smith	waffle iron	80	1
Nikita Smith	knife	10	2
Nikita Smith	pot	20	2

--  Produit le résultat suivant AVANT le reduce
 [ 'mark johansson', 'waffle iron', '80', '2' ],
 [ 'mark johansson', 'blender', '200', '1' ],
 [ 'mark johansson', 'knife', '10', '4' ],
 [ 'Nikita Smith', 'waffle iron', '80', '1' ],
 [ 'Nikita Smith', 'knife', '10', '2' ],
 [ 'Nikita Smith', 'pot', '20', '2' ]

 -- 
 customers[line[0]] = []   donne ceci car on a que deux éléments avec nom <> 
   output { 'mark johansson': [], 'Nikita Smith': [] }
 ensuite au push les propriétés de l'objet.

 */

