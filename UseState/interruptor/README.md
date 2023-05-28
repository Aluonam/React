# HOOK USESTATE
## Implementa un interruptor de encendido/apagado (toggle) con un botón que cambie su estado.

1. Crear componente interruptor
2. Crear useState con valor booleano, por defecto false (importante sin "" para que no sea un string sino un booleano)
`` const [value, setValue] = useState(false)``
3. Texto para mostrar en el DOM 
`` <h3>La luz está {XXXX}</h3>``
4. Dentro de {} donde quiero que aparezca el cambio hago función flecha que devuelve una condición: 
**si valor es true escribe encendido, sino escribe apagado**
Para ello utilizo: 
la variable **?** "texto que aparece si se cumple la condición (si es true)" **:** "texto que aparece si no"
``{value ? "encendida" : "apagada"}``
Completo sería: 
``<h3>La luz está {value ? "encendida" : "apagada"}</h3>``
5. Crear un botón con la siguiente lógica: Devuelve el valor modificado como lo contrario al valor original. 
Usando **!** para cambiar a lo contrario si se pone delante.
``<button onClick={()=>{setValue(!value)}}>Interruptor</button>``

----------------------------------------------------------------

*Corregido error con "use client";
<code>
use client";
import React from 'react'
import { useState } from 'react' 
</code>

error: 
_You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default._