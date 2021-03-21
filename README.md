# AWS Example

Para este ejemplo usaremos lo siguiente

Luego de logearnos en AWS, buscamos EC2 y hacemos click.

- Creamos una instancia
- seleccionamos la capa gratuita
- Añadimos una regla
- Descargamos el archivo pem

## Configuración

- Abrimos la terminal
- Nos ubicamos donde esta el archivo node.pem
- Para evitar que se vea de manera publica

```sh
$ chmod 400 node.pem
$ ssh -i "node.pem" ubuntu@ec2-3-134-102-46.us-east-2.compute.amazonaws.com
```

Luego de ingresar al servidor tenemos que ejecutar el siguiente comando por primera vez.

```sh
$ sudo apt update && sudo apt upgrade
```

Ahora creamos una carpeta y clonamos nuestro proyecto

```sh
$ mkdir projects
$ ls -a
```

## Node

Si el proyecto esta hecho en node necesitamos instalar lo siguiente en la maquina virtual. NVM permite instalar varias versiones de node.

```sh
$ nvm install --lts
$ npm install
$ npm start
```

Usamos la url publica en el navegador para validar que nuestro servidor este desplegado.

Si queremos que el servidor siga encendido a pesar de cerrar la ventana del terminal.

```sh
$ npm start &
```

Si queremos anular este proceso

```sh
$ ps -a
$ killall node
$
$ kill PID
```
Si queremos cerrar la sesion con el EC2 usamos 
control + D
