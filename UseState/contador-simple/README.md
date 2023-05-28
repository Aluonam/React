# HOOK USESTATE
## Crea un contador simple que muestre un número inicial y tenga botones para incrementar y decrementar ese número.

1. Limpiar page.js
2. Crear carpeta componente y componente
3. Llamar a componente desde page.js y enlazar
4. Crear dos botones en el componente, uno suma, otro resta
5. Crear estado con useState como valor por defecto 0
6. Dar funcionalidad a cada botón poniendo onClick y retornando el modificador que será el estado + 1 o - 1

*Solución de error "You're importing a component that needs useState. It only works in a Client Component, but none of its parents are marked with "use client", so they're Server Components by default."
con "use client"; antes del import del useState
