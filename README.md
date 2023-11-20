# Proyecto Web Panaderia Santa Maria

Este es un proyecto ecommerce basico que utilizado para el curso de React. La aplicacion permite ver ver productos, catalogos y realizar compras en linea. Los productos y las ordenes de compra se almacenan en Firebase

## Tecnologia utilizadas

- Vite
- React
- React Router
- SASS
- Firebase

## Funcionalidades:

- Ver una lista de productos disponibles
- Agregar los productos al carrito de compras
- Ver carrito de compras
- Realizar una orden de compra

## Instalacion

1. Clona el repositorio a tu maquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando " code . "
4. Ejecuta el comando " npm install "
5. Ejecuta el comando " npm run dev "
6. Abre tu navegador en http://localhost:3000 para ver la aplicacion en accion.

```
code .
npm install
npm run dev
```

## Configuración de Firebase

### Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, habilita el proveedor de 3. autenticación de correo electrónico y contraseña.
3. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
4. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
5. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.
