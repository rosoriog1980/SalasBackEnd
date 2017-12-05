# Back-End Salas 
Backend para aplicación de gestión de salas de conferencia en PSL

**Pre-requisitos**
* NodeJS v8.8.1 o superior
* npm v4.6.1 o superior
* MongoDB 

Para instalar los demás pre-requisitos, ejecutar el comando *npm install* en la raiz de la carpeta del proyecto.

Ejecutar el comando *npm install -g gulp*, para instalar el GULP que se utilizará para ejecutar la solución.

Para ejecutar el protecto en modo debug, debe estar en ejecución el servidor de MongoDB y ejecutar el comando *gulp serve* en la consola de NodeJS

## Endpoints

A continuación se describen los end-points con sus métodos y ejemplos de consumo.

###### Salas
End-point para la gestión del recurso parqueaderos.

* GET ('/'): obtiene el listado completo de parqueaderos en el sistema.
    * Parámetros:

* POST ('/'): crea un nuevo parqueadero.
    * Parámetros:
        Body,
        ```JSON
        {
            "parking":{
                "parkingNumber": 1,
                "floorNumber": 1
            }
        }
        ```
* PUT ('/'): cambia el estado de un parqueadero entre ocupado y desocupado.
    * Parámetros:
        Body,
        ```JSON
        {
            "id": "59fa4b508495b50560e1c58c",
	        "status": "NOT_AVAILABLE",
            "userId": "5a1580c5ad2416001404060b"
        }
        ```
        Los estados posibles son ["NOT_AVAILABLE", "AVAILABLE"]

* DELETE ('/'): borra un parqueadero de acuerdo al Id proporcionado.
    * Parámetros:

        QueryString,
        id=59fa4b508495b50560e1c58c
