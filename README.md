# Prueba técnica Aspasia

## Uso y funcionamiento de la app
* La app muestra un listado de libros obtenidos desde la API requerida.
* La respuesta de la API se mapea para poder visualizar la fecha de lanzamiento de forma legible, y además agrega el género del libro.
* El input superior permite filtrar y buscar libros.
* Al hacer click en el título de cualquier columna, esta se ordena.
* El botón inferior dispara un formulario para poder ingresar un nuevo libro a la tabla.
* Cada fila consta de dos botones a la derecha. El botón Info lleva a una página donde se pueden ver más detalles del libro. El botón Fav agrega el libro a la lista de favoritos.
* En el Navbar hay dos enlaces, uno de los cuales es Favoritos, vista donde se pueden revisar los libros agregados.

## Aspectos técnicos
* Proyecto inicializado con Vite y TypeScript. Estilos manejados con Tailwind CSS. 
* Los datos obtenidos de la API se guardan en el contexto de la app. Esto permite que el formulario para agregar nuevos libros sea funcional.
* El contexto además guarda datos de loading, visibilidad del modal del formulario, lista de favoritos y libro actual siendo visualizado en detalle.
* La tabla se renderiza utilizando tanstack/react-table.
* El componente de la tabla, botones, inputs y otros son de la librería Flowbite. Se optó por esta en lugar de la sugerida ya que incluía componentes necesarios que Headless UI no contiene, por ejemplo el Header. En lugar de tener dos librerías similares instaladas, se prefirió tener una sola.
* Las vistas y funcionamiento de los botones se trabajó con react-router-dom en conjunto con el estado del contexto.
* El botón Info asigna un libro como el libro actual, y luego navega a la ruta que renderiza los datos obtenidos de la API a través del contexto.
* El botón Fav ejecuta la función para agregar el libro a la lista de Favoritos, la cual valida que el libro no se encuentre ya en la lista antes de agregarlo.
* El formulario se trabajó con Formik para su estructura y validación, con componenetes de Flowbite.
* De forma adicional se instaló la dependencia Yup que trabaja con Formik, pudiendo asignar validaciones de inputs de una mejor forma que la nativa.
* Se integra Jest para pruebas unitarias de las funciones.
* Se utiliza Storybook para documentar componentes.

## Mejoras y pendientes
* Falta mejorar las pruebas unitarias para que funcionen con todos los componentes, y no sólo con algunas funciones.
* Falta mejorar las stories para que componentes que tengan props o dependan de estados se puedan visualizar correctamente.
* Puede mejorar el estilo de la vista de detalle y favoritos.
* Puede mejorar el aspecto de los inputs y botones, por ejemplo agregando iconos.
* Puede mejorar la experiencia agregando animaciones.
* Puede mejorar el aspecto de la tabla, por ejemplo haciendo más evidente que las columnas se pueden ordenar al clickear el título.
* Falta mejorar la responsividad.
