# Aprendiendo TypeScript

Este repositorio esta creado para almacenar los codigos que haga mientras apendo TypeScript.

Voy a procurar mantener los codigos comentados para que no quden tantas dudas, y asi le sea de utilidad a alguirn que quiera aprender TS.

## Instalacion de TypeScript

Debido a que **JavaScript (JS)** es el lenguaje que los entornos de ejecucion, es necesario que todo nuestro codigo sea compilado a JS.

Un requisito para esto es tener NodeJS y npm instalados, de no ser asi, descargalos [aqui](https://nodejs.org/en/download/), **NodeJS ya integra npm** (Se recomienda instalar la version **LTS**, que es mas estable).

Una vez instalado, NodeJS y npm, podemos instalar TypeScript globalmente con el siguiente comando en la terminal:

    npm i typescript -g

Para asegurarnos de que se haya instalado correctamente, vamos a ejecutar el siquiente comando, que nos va a devolver la version instalada en nuestro equipo:

    tsc --version

### Compilacion de un archivo .ts

Para compilar un archivo de TypeScript a JavaScript ya teniendo TypeScript instalado, tenemos que abrir una terminal en la carpeta donde se encuentra nuestro archivo **.ts**, y ejecutar el siguiente comando:

    tsc <Nombre del archivo>.ts

Esto hara que en la misma carpeta del archivo .ts, apareca un archivo del mismo nombre, pero con extension **.js**, el cual vamos a agregar a nuestro HTML o utilizar con NodeJS.

#### Watch

A veces tener que compilar una y otra vez un archivo puede ser algo molesto, para ellos, podemos ejecutar el siguiente comando que se va a encargar de compilar automaticamente nuestros archivos TypeScript.

    tsc <Nombre del archivo>.ts -w

## Script

Cada tema va a contar con su carpeta ysu respectivo HTML, ademas de su archivo **.ts** con su correspondiente **.js** en la carpeta Scripts.

### Lista de Temas:

-   **01. DataTypes**. Relacionado con los tipos de datos y su declaracion.

## Pruebas

Mientas aprendo a prgramar en algo, me gusta ver que puedo hacer, aqui se encontraran los experimentos que haga.
