<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Técnicas de modelación tridimensional: definición y tipos

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-7.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p.mb-0 Cuando se desea crear un objeto o figura 3D, es importante hacer un análisis amplio de la pieza a diseñar, ya que existen muchas técnicas que son de gran utilidad y ayudan a disminuir los tiempos de diseño, siempre y cuando, se elija la técnica y la herramienta software apropiada para el trabajo.
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/t3/f1.png', alt='Personas trabajando en computadores')

    h4 Técnicas de modelación tridimensional

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t3/f2.svg', alt='imagen relacionada')

      .tarjeta.tarjeta--azul(x="5%" y="93%" tooltip="tooltip de max 35 caracteres" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-lg-2.col-md-3
            figure
              img(src='@/assets/curso/temas/t3/f3.png', alt='icono relacionado')
          .col-lg-10.col-md-9
            p: b 1- Modelado 3D con Primitivas básicas
            p Cuando se requiere elaborar modelos 3D de baja complejidad se puede recurrir a este modelado, donde se combinan formas geométricas básicas como cubos, esferas, cilindros, entre otras, dicha combinación permite acercarse al modelo 3D. Los primitivos son formas 3D básicas, como cuadrados en ángulo recto, esferas, conos, cilindros o planos. En programas de modelado 3D más avanzados, se pueden construir formas muy complejas a partir de elementos primitivos. Hay dos beneficios principales y generales de usar primitivas para el modelado 3D: 
            p Son muy simples y no muy exigentes en el sistema. 
              br 
              | Es fácil adaptar objetos como esferas o cilindros a una variedad de temas similares a la naturaleza y la industria. 
            p Si se mira alrededor, se puede ver que gran parte del mundo está relativamente limitado a unos pocos tipos de patrones, formas naturales y regulares. El modelado original no es más, que dividir el tema elegido en partes simples y agregar más detalles en consecuencia. Por ejemplo, se puede convertir un cilindro en el tronco de un árbol, luego esculpir una hoja en una esfera muy modificada, o incluso en un plano. Las posibilidades son infinitas. 

      .tarjeta.tarjeta--azul(x="25%" y="95%" tooltip="tooltip de max 35 caracteres" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-lg-2.col-md-3
            figure
              img(src='@/assets/curso/temas/t3/f4.png', alt='icono relacionado')
          .col-lg-10.col-md-9
            p: b Método de modelado 
              em Box modelling
            p El modelado 
              em Box 
              | o cajas se usa para la creación de formas 3D a partir de cajas o cubos, a los que se le realizan extrusiones o agujeros para dar forma a los objetos deseados. La característica principal de este enfoque es comenzar a modelar a partir de una figura original, generalmente a través de una caja, de ahí el nombre, aunque a veces también se usan el resto. Se puede considerar como una técnica de esculpido de polígonos, ya que aplicará transformaciones, modificadores y operaciones a la malla base para formar superficies complejas. Los objetos 3D crecen de cierta manera. Luego pueden aplicarse diferentes tipos de modificadores a la forma 3D, para agregar más detalles a la malla. Los más comunes son:
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Doble
              li
                i.fas.fa-check
                | Afilar
              li
                i.fas.fa-check
                | Estirar
              li
                i.fas.fa-check
                | Suavizar
              li
                i.fas.fa-check
                | FFD (Deformador de forma libre) 
            p Una vez que se define la forma aproximada, se comienza a modelar los detalles del objeto utilizando las operaciones en la malla que se vio anteriormente. Se notará la progresión desde la forma básica hasta el objeto que se tiene en mente.

      .tarjeta.tarjeta--azul(x="25%" y="95%" tooltip="tooltip de max 35 caracteres" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-lg-2.col-md-3
            figure
              img(src='@/assets/curso/temas/t3/f5.png', alt='icono relacionado')
          .col-lg-10.col-md-9
            p: b Modelado 3D 
              em Poly by Poly
            p Es un modelo versátil en el modelado 3D. Consiste en unir cuatro vértices con sus cuatro aristas, que forman un polígono. Así se crea un 
              em Loop
              | , que es la unión de muchos polígonos que se ubican en el plano de tres dimensiones, donde se diseña el modelo 3D, cada polígono se puede manipular para dar forma al modelo deseado. El término significa 
              em "low poly"
              | ; es decir, es un modelado creado con el menor número de polígonos posibles para el modelo 3D. Este crea un objeto con muy pocas caras y pocos vértices en la naturaleza. Es similar a cómo funciona la resolución: cuanto mayor sea la resolución, más detalles, cuanto menor sea la resolución, menos detalles. Lo que busca esta estética es una abstracción, y la forma se apodera del diseño.

      .tarjeta.tarjeta--azul(x="25%" y="95%" tooltip="tooltip de max 35 caracteres" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-lg-2.col-md-3
            figure
              img(src='@/assets/curso/temas/t3/f6.png', alt='icono relacionado')
          .col-lg-10.col-md-9
            p: b Modelado 3D con NURBS
            p Esta es una técnica poco utilizada, ya que se usa cuando se hacen figuras 3D de proporciones grandes, como partes de barcos o automóviles, en esta se crean planos de las principales caras de la figura y las caras se unen como una malla de polígonos para su manipulación. NURBS es una representación matemática de la geometría 3D capaz de describir con precisión cualquier forma, desde simples líneas 2D, círculos, arcos o curvas, hasta los más complejos sólidos 3D de forma libre o superficies orgánicas. Debido a su flexibilidad y precisión, los modelos NURBS se pueden utilizar en cualquier proceso, desde la ilustración y animación, hasta la fabricación.
            p La geometría NURBS tiene algunas propiedades fundamentales que la hacen ideal para el modelado asistido por computadora:
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Se utilizan varios métodos estándar de la industria para el intercambio de geometría NURBS. Por lo tanto, los usuarios pueden transferir y transfieren todos los modelos geométricos entre los diferentes programas de ingeniería de modelado, renderizado, animación y análisis del mercado.
              li
                i.fas.fa-check
                p.mb-0 NURBS tiene una definición precisa y conocida. La mayoría de las principales universidades enseñan matemáticas geométricas e informática NURBS. Esto significa que los proveedores de 
                  em software 
                  | profesional, los equipos de ingeniería, las empresas de diseño industrial y las empresas de animación, que necesitan crear aplicaciones de 
                  em software 
                  | específicas para sus proyectos, podrán encontrar programadores capacitados para trabajar con geometría NURBS.
              li
                i.fas.fa-check
                | NURBS puede representar con precisión objetos geométricos estándar, como líneas, círculos, elipses, esferas y anillos, así como formas geométricas libres, como carrocerías de automóviles y cuerpos humanos.

      .tarjeta.tarjeta--azul(x="25%" y="95%" tooltip="tooltip de max 35 caracteres" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-lg-2.col-md-3
            figure
              img(src='@/assets/curso/temas/t3/f7.png', alt='icono relacionado')
          .col-lg-10.col-md-9
            p: b Modelado con escultura digital 3D
            p Este es un método similar al de Primitivas básicas, ya que por lo general parten de una figura geométrica básica. La diferencia es que se cuenta con la ayuda de un dispositivo háptico, el cual simula el uso de una herramienta de esculpido o un pincel físico. La escultura digital 3D es una alternativa moderna a la escultura tradicional, utilizando materiales como arcilla, tierra y más. La diferencia es que se están manipulando materiales u objetos digitales, en cuanto a propiedades técnicas se necesita de una computadora potente y una tableta digitalizadora, para interactuar con un 
              em software 
              | profesional y especializado que permitirá esculpir.
            p La escultura digital gira en torno al uso del 
              em software 
              | que permite manipular mallas virtuales de alto contenido de polígonos, a través de herramientas digitales que mueven, empujan, suavizan, tiran, agregan arcilla digital, la eliminan, delinean bordes, etc. Lo que permite generar contenido. Es muy similar al enfoque tradicional, comenzando con la base y, a medida que el modelo se vuelve más complejo, se le agrega más y más material, en capas, para generar más detalles. La mayoría de estas herramientas se denominan pinceles, o pinceles en inglés, pero también se pueden encontrar innumerables opciones de personalización en los diferentes menús de cada programa. El pincel se parecerá a la herramienta de la escultura tradicional. Es importante distinguir entre la escultura digital y el modelado 3D, ya que genera mucha confusión, cuando se habla de esculpir, se hace referencia al proceso de esculpir una pieza de arcilla, como se puede ver, este proceso requiere un flujo de trabajo completamente diferente al del modelado 3D, se puede decir que es un enfoque más artístico, porque es muy similar a su contraparte tradicional. En el modelado 3D, por otro lado, se habla de un proceso más técnico en el que se manipulan directamente las caras, los vértices y los bordes de una malla poligonal, para lograr la forma que se quiere.

      .tarjeta.tarjeta--azul(x="25%" y="95%" tooltip="tooltip de max 35 caracteres" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-lg-2.col-md-3
            figure
              img(src='@/assets/curso/temas/t3/f8.png', alt='icono relacionado')
          .col-lg-10.col-md-9
            p: b Texto 3D con extrusiones
            p Este tipo de modelado 3D se utiliza para dar profundidad a textos, figuras en un plano bidimensional. Acerca del texto y biselar y extruir capas de forma. En gráficos por computadora, un objeto extruido es uno que parece ser tridimensional, este aspecto 3D se nota más cuando se mueven objetos o se mueve la cámara a su alrededor. Por su parte, bisel es un control sobre los bordes de los objetos extruidos.

      .tarjeta.tarjeta--azul(x="25%" y="95%" tooltip="tooltip de max 35 caracteres" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-lg-2.col-md-3
            figure
              img(src='@/assets/curso/temas/t3/f9.png', alt='icono relacionado')
          .col-lg-10.col-md-9
            p: b Modelado 3D con revoluciones
            p Este tipo de modelado se usa en general para el modelamiento de objetos 3D con un eje fijo, donde solamente se requiere trazar un contorno y en torno a este, generar el volumen recubriendo su forma con polígonos, desde un grado hasta 360 grados.  Permite proyectar y/o rotar una forma cerrada o abierta de forma circular con respecto a un "eje" que se convertirá en el pivote de la rotación y puede ser predefinido dibujándolo, un eje de dos puntos o cartesiano también puede pertenecer al espacio de trabajo. El orden se basa principalmente en los siguientes elementos:
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Un "eje", ya sea virtual o dibujado, utilizado para girar alrededor de él durante el modelado final.
              li
                i.fas.fa-check
                | "Contorno", esta es la forma 2D que se proyecta, la cual se puede activar o desactivar.

    .col-md-10.mx-auto
      .cajon.color-acento-botones.p-4
        p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, para hacerlo, diríjase al menú principal donde encontrará la síntesis, una actividad didáctica y material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
