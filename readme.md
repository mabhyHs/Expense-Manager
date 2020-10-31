### Información General

La aplicación debe ser responsive.
La aplicación tiene una sola página. La navegación del header permite scrollear automáticamente hasta la sección que corresponda.

### Sección de Gastos
En esta sección el usuario puede ingresar los distintos gastos del mes, como así también editarlos o eliminarlos.

Nota: en la versión mobile no se muestra la información de la descripción.

#### *Agregar Gasto*

El usuario selecciona la clasificación del dropdown, ingresa una descripción (en caso de que la deje vacia  - o se encuentre desde un dispositivo móvil,, se guardará como descripción el mismo nombre que la clasificación) y un valor. Si el usuario presiona agregar, se valida que el valor ingresado sea un número positivo y en dicho caso, la información aparecerá abajo (siempre aparece como primero de la lista lo último ingresado por el usuario). Además, se recalculan los datos de las otras secciones.

#### *Editar Gasto*

El usuario puede editar un gasto, presionando el botón de editar. En ese momento, los campos pasan a editable y las opciones cambian a aceptar o cancelar.

Si el usuario presiona:
- **Cancelar:** se restablecen los valores anteriores
- **Aceptar:** los valores se actualizan así como las opciones disponibles (editar | borrar). Además, se recalculan los valores de las otras secciones.

#### *Borrar Gasto*

El usuario puede borrar un gasto, presionando borrar. En este caso la fila se borra de la pantalla y se recalculan los valores de las otras secciones.

### Sección Actual

En esta sección se muestra la situación actual de los gastos y disponibilidad del usuario/grupo familiar.
Por un lado se listan todas las clasificaciones, con el porcentaje y monto que se ha gastado hasta el momento.
A su vez, la clasificación tiene distintos colores para indicar en cuales se está dentro de los rangos definidos en la configuración y en cuales no:

- El color verde significa que el gasto se mantiene dentro del 75% del establecido desde la configuración.
- En color amarillo se encuentran aquellas clasificaciones en donde ya se ha superado el 75% de lo establecido
- En color rojo figuran las clasificaciones que alcanzaron o superaron el valor definido.


Por otro lado, se muestra el saldo disponible a gastar (sueldo - todos los gastos)

### Sección de Configuración

En esta sección se puede configurar los porcentajes que corresponden para cada clasificación de posibles gastos y el monto del ingreso mensual de la persona/grupo familiar.

Existen valores por defecto para los parámetros, siendo estos los siguientes:


#### *Clasificación*
###### Valor por defecto:

```
Vivienda 30 %
Ahorro 20 %
Comida 15 %
Entretenimientos 15 %
Otros gastos 20 %
```

#### Editar Configuración

Si el usuario presiona editar, los campos de porcentaje se hacen editable y el usuario puede ingresar otro valor. Además las opciones posibles cambian a aceptar o cancelar.

Si el usuario presiona:  
- **Cancelar:** No se realizan modificaciones y se debe considerar el valor antes de la edición  
- **Aceptar:** Se debe hacer una validación para que la suma de todos los porcentajes sea igual a 100%. En caso de que no sea así, se debe mostrar un mensaje de error que diga “La suma de todos los porcentajes debe ser 100%”

El usuario también puede modificar el ingreso mensual, cuyo valor por defecto es 50000. Si el usuario quiere editar dicho valor, debe presionar el botón editar, para que el campo sea editable. Además, las opciones cambian a aceptar y cancelar.

Si el usuario presiona:
- **Cancelar:** no se realiza ninguna acción y el valor se mantiene el mismo que antes de la edición.  
- **Aceptar:** Se debe validar que el valor ingresado es un número mayor a 500 (en caso contrario debe aparecer un mensaje de error que diga “el valor ingresado debe ser mayor a 500 pesos”). Además, se deben recalcular todos los valores de las otras secciones.
 
### Sección de Información

En dicha sección figura debe figurar el nombre del grupo y los nombres de los integrantes del grupo.
Es la última sección de la página

