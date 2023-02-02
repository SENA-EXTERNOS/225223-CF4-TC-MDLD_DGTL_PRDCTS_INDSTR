<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.cst 1
      h1 Toma de datos con un láser escáner 3D

    .row.justify-content-center.mb-5
      .col-lg-7
        p Los escáneres láser 3D se basan en la triangulación para capturar con precisión y convertir formas 3D en millones de puntos de datos. Más precisamente, funciona proyectando un punto o línea láser sobre un objeto y capturando su reflejo con un sensor. Dado que el sensor está ubicado a una distancia conocida de la fuente láser, se pueden realizar mediciones puntuales y precisas calculando el ángulo de reflexión de la luz láser. 
          b Al conocer la distancia desde el escáner hasta el objeto, el 
            em hardware 
            | de escaneo puede mapear la superficie del objeto para desarrollar un modelo digital
          | .
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 Este método se denomina triangulación porque el punto (o línea) del láser, el sensor y el emisor del láser forman un triángulo, como se muestra en la siguiente imagen. 
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t1/f1.png', alt='ordenador y figuras 3D')
      
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/f2.svg', alt='diagrama de escáner 3D')
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p.mb-0 Hay muchos tipos diferentes de escáneres láser 3D en el mercado, se puede elegir entre escáneres 3D portátiles, de escritorio o profesionales. Hay que tener en cuenta que suelen trabajar en distancias cortas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-md-3(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/t1/f3.svg', alt='icono de escaner 3D')
      .col-lg-10.col-md-9
        p El 
          b escáner láser 3D 
          | es una tecnología que 
          b captura digitalmente la forma de un objeto con una luz láser
          | , creando lo que se conoce como nube de puntos. Un escáner 3D es un dispositivo que analiza un objeto o escena para recopilar datos sobre su forma y, en ocasiones, su color. Utilizando la información obtenida, se pueden construir modelos digitales tridimensionales para diversas aplicaciones. En resumen, se puede decir que funciona proyectando un punto láser sobre el objeto del que obtiene información. En un principio, su aplicación se limitaba al ámbito industrial. Hoy, gracias a sus avances e innovaciones, se utiliza en actividades como la arquitectura, la ingeniería, la arqueología y la recreación.

    p A continuación, se muestran las características principales de un escáner 3D:

    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="bounce-in-right")
        figure
          img(src='@/assets/curso/temas/t1/f4.png', alt='escáner láser 3D sobre un trípode')
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Precisión")
            p.mb-0 Los escáneres láser 3D cuentan con una gran precisión, gracias a la cantidad de mediciones por segundo que hace el dispositivo.
          div(titulo="Visualización")
            p.mb-0 Permite visualizar en tiempo real la información que se está obteniendo.
          div(titulo="Velocidad")
            p.mb-0 Velocidad en el procesamiento de imágenes y nubes de puntos, el 
              em software 
              | captura la medición y la ubica en un plano tridimensional en tiempo real. 
          div(titulo="Calidad y detalle máximo")
            p.mb-0 Se puede obtener una mayor cantidad de información, por lo que genera detalles específicos con una amplia precisión.
          div(titulo="Alcance")
            p.mb-0 El alcance es bastante amplio, casi no requiere de andamios y demás estructuras para tomas altas.
          div(titulo="Versatilidad")
            p.mb-0 Se adapta a todo tipo de terreno o ambiente donde se escanea.
          div(titulo="Portabilidad")
            ul.lista-ul--color
              li
                i.fas.fa-check
                p.mb-0 
                  b Portabilidad: 
                  | son equipos con bajo peso y medianas dimensiones, lo que facilita su transporte hasta los objeto o sitios que se van a digitalizar.
              li
                i.fas.fa-check
                p.mb-0 
                  b Flexibilidad: 
                  | no requiere mayor instalacion ni preparacion para iniciar el proceso, al ser portable no hay mayores restricciones en tamaño del objeto a escanear.
          div(titulo="Simplificación")
            p Simplificación en la captura de datos en tiempo real.

    .col-md-9.mx-auto.mb-5
      .cajon.color-acento-botones.p-4
        p.mb-0 Con el empleo del escáner está demostrado un aumento de la productividad y la mejora en los tiempos de implementación de nuevos productos o servicios.

    h3 
      i.fas.fa-circle.cab.me-2
      | ¿Qué sectores usan el escaneo 3D?

    p Las aplicaciones del escáner láser 3D son muy variadas, se utilizan principalmente en:

    TabsA.color-acento-contenido.mb-5
      .row(titulo="Patrimonio arquitectónico")
        .col-md-7.tarjeta.tarjeta--azul.p-4
          p Para las labores de conservación y divulgación del patrimonio arquitectónico. Un claro ejemplo de las ventajas de la tecnología es el papel clave que jugó el escaneo 3D en la reconstrucción de la catedral de Notre Dame, en donde se usaron modelos 3D hechos con anterioridad para videojuegos y otras aplicaciones.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/t1/f5.png', alt='imagen de edificación antigua')
      .row(titulo="Arquitectura")
        .col-md-7.tarjeta.tarjeta--azul.p-4
          p Mediciones, visitas virtuales, control de construcción y diseño en edificios existentes. El uso del 
            em software 
            | en la arquitectura ha cobrado gran relevancia, ya que permite evaluar las condiciones de construcciones antiguas, para procesos de remodelación o reforzamiento, visitas 3D, entre otras. 
        .col-md-5
          figure
            img(src='@/assets/curso/temas/t1/f6.png', alt='planos arquitectónicos')
      .row(titulo="Ingeniería")
        .col-md-7.tarjeta.tarjeta--azul.p-4
          p Control de calidad, ingeniería inversa y modelado sobre equipos existentes. Las aplicaciones en ingeniería son innumerables, ya que este ha facilitado los procesos de ingeniería inversa, también ha acortado los tiempos en el desarrollo de nuevos productos; sin olvidar las aplicaciones de inspección metrológica para los procesos de mantenimiento.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/t1/f7.png', alt='Ingenieros y un ordenador')
      .row(titulo="Metrología")
        .col-md-7.tarjeta.tarjeta--azul.p-4
          p Con el escaneo 3D, se pueden recopilar los datos necesarios para generar una imagen 3D de un objeto, entorno o cuerpo. El escáner 3D también recopila datos de forma y color simultáneamente, lo que da como resultado un registro de textura del objeto que se escanea. El sistema se basa en la adquisición de nubes de puntos en el espacio tridimensional. El escáner 3D proyecta el láser sobre el objeto, registra la distancia desde el punto de emisión hasta cada punto del objeto y, al mismo tiempo, convierte los puntos de información en un archivo digital de modelado tridimensional, que se puede denominar digitalización. Este proceso se realiza mediante un dispositivo llamado escáner 3D. Los escáneres 3D portátiles se están convirtiendo en una herramienta imprescindible para cualquiera que busque hacer el mejor producto posible con el mínimo costo y tiempo.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/t1/f8.png', alt='brazo mecánico industrial')

    h3 
      i.fas.fa-circle.cab.me-2
      | ¿Cuáles son las ventajas de medir con un escáner 3D?

    p A la hora de utilizar un escáner 3D para la medición o toma de datos, se pueden encontrar varias ventajas, que se resumen en las siguientes:

    .col-md-10.mx-auto.tarjeta.fcp10.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)
        .row.align-items-center.justify-content-around(titulo="Paso 1")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t1/f9.png', alt='imagen relacionada')
          .col-md-5
            h4 Más sobre el control de calidad
            p Esta tecnología permite capturar 2 millones de puntos por segundo, con una precisión de un milímetro. Esto se ha vuelto fundamental para que los diferentes sectores industriales puedan trabajar con el mayor grado de detalle y precisión, brindando información que no está disponible de otra manera.
        .row.align-items-center.justify-content-around(titulo="Paso 2")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t1/f10.png', alt='imagen relacionada')
          .col-md-5
            h4 Optimización en la fase de fabricación
            p El escáner 3D permitirá reducir los costes de explotación y fabricación, gracias a una rápida comparación con un modelo 3D en el que se puede detectar de forma óptima, los fallos en las distintas fases de fabricación y montaje. La calidad del diseño, la escala y la estabilidad del producto se pueden verificar con precisión milimétrica. El escaneo 3D permite verificar la forma completa de un producto fabricado con el diseño CAD original y detectar inmediatamente las desviaciones al mostrar los datos en un mapa de color 3D completo.
        .row.align-items-center.justify-content-around(titulo="Paso 3")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t1/f11.png', alt='imagen relacionada')
          .col-md-5
            h4 Rapidez
            p Si se necesita ahorrar y ganar dinero, la lectura de velocidad del escáner 3D asegura una herramienta muy poderosa para ayudar a acelerar el proceso de medición. Por otra parte, los escáneres 3D, también ahorran tiempo cuando es necesario realizar modificaciones en los diseños existentes. Un ejemplo, es cuando se necesita cambiar el grosor de un anillo o de una pieza de un automóvil, los escáneres 3D funcionan más rápido que los cálculos manuales.
        .row.align-items-center.justify-content-around(titulo="Paso 4")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t1/f12.png', alt='imagen relacionada')
          .col-md-5
            h4 Versatilidad
            p El uso de un escáner láser 3D como herramienta es ideal para todo tipo de terrenos y situaciones. La movilidad del escáner y su capacidad para escanear incluso en ausencia total de luz, hacen el resto.
        .row.align-items-center.justify-content-around(titulo="Paso 5")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t1/f13.png', alt='imagen relacionada')
          .col-md-5
            h4 Comparación de diseños con productos existentes
            p Gracias al uso del escaneo 3D, se garantiza que el producto fabricado cumple exactamente con los requisitos deseados. Esto es así porque este servicio permite comparar el modelo inicial con el modelo fabricado.
        .row.align-items-center.justify-content-around(titulo="Paso 6")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t1/f14.png', alt='imagen relacionada')
          .col-md-5
            h4 Posibilidad de remanufacturar piezas sin CAD
            p Esta tecnología permite remanufacturar la pieza creada sin el modelo CAD. Los escáneres 3D ofrecen la opción de utilizar 
              em software 
              | de ingeniería inversa, para crear réplicas exactas de piezas antiguas. De esta manera, los nuevos prototipos se pueden comparar con escaneos de la pieza original.
        .row.align-items-center.justify-content-around(titulo="Paso 7")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t1/f15.png', alt='imagen relacionada')
          .col-md-5
            h4 Mejorar la imagen de la empresa
            p Aplicar servicios técnicos de alta precisión dará confianza a los clientes y garantizará una mayor visibilidad frente a competidores directos. Esto ayudará a mejorar la reputación de la empresa, al asegurar a los clientes el nivel de calidad de los artículos que están buscando. (Vector cero metrología, 2022).

    Separador

    #t_1_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.1 Teoría de nubes de puntos, referenciación y comprobación de errores

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'border':'solid 10px #255065','background-image':`url(${require('@/assets/curso/temas/t1/f16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La 
          b nube de puntos 
          em (Point Cloud) 
          | es una base de datos que contiene los puntos en un 
          b sistema de coordenadas tridimensional
          | . Sin embargo, desde la perspectiva del flujo de trabajo típico, la nube de puntos es un 
          b registro digital de un objeto o lugar
          | , que contiene una gran cantidad de puntos que detecta una medición láser, con respecto a un punto. 

    .col-md-10.mx-auto.mb-5
      .cajon.color-acento-botones.p-4
        p.mb-0 Los puntos en una nube de puntos, se ubican en las superficies externas de los objetos visibles, porque estos son los puntos donde el rayo que refleja el láser detecta su distancia. En pocas palabras el láser hace miles de mediciones por segundo, y cada medición es registrada como un punto en un espacio de 3 dimensiones.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p A veces llamada visualización 3D, una nube de puntos 3D es el primer paso para crear un modelo 3D preciso del mundo real. Es el punto de partida de la realidad digital, un mapa de puntos en el espacio, procesado en un modelo 3D de casi cualquier objeto. En gran medida, esto incluye edificios, fábricas, plantas de fabricación, escenas de crímenes/accidentes, infraestructura civil, sitios históricos, paisajes urbanos y más.
        p Si el tamaño de puntos individuales es grande y están lo suficientemente unidos, la nube de puntos podría percibirse como una superficie continua. Si la distancia entre los puntos es ligeramente mayor, entonces se puede ver que esta imagen está hecha de puntos individuales, pero, aun así, se percibe la forma del objeto.
      .col-lg-5.order-first.order-md-last
        figure 
          img(src='@/assets/curso/temas/t1/f17.png', alt='mujer digitalizada')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/t1/f18.png', alt='edificios digitalizados')
      .col-lg-6
        p Es esencial comprender que la nube de puntos es un conjunto de puntos, con posición y color definidos. Esto hace que las nubes de puntos sean fácilmente manipulables.
        p Es aquí, en este proceso donde los 
          em softwares 
          | de post-procesamiento, construyen un objeto a partir de las nubes detectadas. Dichas herramientas permiten establecer parámetros en el objeto, para poder abrirlo en el 
          em software 
          | CAD especializado; bien sea de arquitectura o mecánico.

    Separador

    #t_1_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.2 Tratamiento y limpieza de nubes de puntos de láser escáner 3D

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/t1/f19.png', alt='persona modelando en un ordenador')
      .col-lg-8
        p Al momento de realizar el escaneo de un objeto, se genera una nube de puntos que debe ser editada a través de una herramienta de post-procesamiento, la cual transforma estos puntos repartidos en un 
          b plano de 3 dimensiones 
          | en un objeto editable, en un programa 
          b CAD
          | . Sin embargo, cuando se importan nubes de puntos grandes que exceden la capacidad de procesamiento del computador donde se va a editar, se debe usar una herramienta robusta que permita cargar parcialmente los datos para procesarlos por secciones.
        p Mientras trabaja con una nube de puntos, la aplicación la divide inteligentemente, por lo tanto, se pueden importar tamaños de datos de nube de puntos casi ilimitados, en función capacidad de nube de puntos ilimitada. Esto sucede cuando se digitalizan objetos muy grandes y con demasiada complejidad, como edificios, esculturas, partes de aeronaves, barcos o similares.

    h3 
      i.fas.fa-circle.cab.me-2
      | ¿Como se obtiene la nube de puntos?

    .row.justify-content-center.mb-5
      .col-lg-7
        p Se obtiene de un levantamiento utilizando un escáner láser 3D u otra tecnología, y contiene toda la información del levantamiento útil para la representación 3D de objetos existentes (edificios, monumentos, plazas, etc.), incluidas superficies con información de color. Suele tener extensiones de tipo: (.LAS, .LAZ, .E57, .PLY, .PTS, .XYZ.). Las técnicas de medición con escáner láser y la generación de nubes de puntos, representan una de las mejores formas de adquisición de datos que existen en la actualidad, ya que los datos adquiridos contienen toda la información geométrica del objeto inspeccionado.
        p Las ventajas también son significativas: el tiempo de adquisición se reduce y el resultado final es realista y versátil.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/t1/f20.png', alt='modelo 3d en laptop')

    h3 
      i.fas.fa-circle.cab.me-2
      | ¿Para qué sirve?

    p Una nube de puntos de cualquier objeto se puede utilizar para una variedad de propósitos, (Accasoftware, 2021), que incluyen:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.fcab30.p-4.h420
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t1/f21.svg' alt='icono relacionado')
        p.text-center Navegue libremente a través de los objetos escaneados.
      .tarjeta.fcab30.p-4.h420
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t1/f22.svg' alt='icono relacionado')
        p.text-center Realice un análisis preciso del modelo.
      .tarjeta.fcab30.p-4.h420
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t1/f23.svg' alt='icono relacionado')
        p.text-center Tome medidas en el modelo, incluso en puntos que no son realmente accesibles.
      .tarjeta.fcab30.p-4.h420
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t1/f24.svg' alt='icono relacionado')
        p.text-center Conocer el estado real de la obra (infraestructura, edificaciones, etc.).
      .tarjeta.fcab30.p-4.h420
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t1/f25.svg' alt='icono relacionado')
        p.text-center Compara varios modelos.
      .tarjeta.fcab30.p-4.h420
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t1/f26.svg' alt='icono relacionado')
        p.text-center Utilice estos puntos como guía para dibujar y restaurar el terreno.
      .tarjeta.fcab30.p-4.h420
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t1/f27.svg' alt='icono relacionado')
        p.text-center Interprete los datos de color o reflectancia para varios tipos de análisis.
      .tarjeta.fcab30.p-4.h420
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t1/f28.svg' alt='icono relacionado')
        p.text-center Genere un modelo de malla (un modelo de superficie que consta de polígonos cuyos bordes son segmentos de línea que conectan los puntos de la nube y cuyos vértices son puntos en la propia nube).
      .tarjeta.fcab30.p-4.h420
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t1/f29.svg' alt='icono relacionado')
        p.text-center Desarrollar un modelo BIM "inteligente" que contenga toda la información sobre las características de los objetos detectados.
      .tarjeta.fcab30.p-4.h420
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t1/f24.svg' alt='icono relacionado')
        p.text-center Imprima en 3D el modelo detectado.
    
    .row.justify-content-center.mb-5
      .col-lg-7
        p Con algunas nubes de puntos, la cantidad de detalles captados en la medición, hace que se observe una gran nube de puntos sin un orden o ubicación determinada. Es por eso que las herramientas de procesamiento permiten dar un color y sombra a cada punto, dependiendo de la distancia a la que se encuentre del punto de referencia. Es así que, los puntos más cercanos se muestran en negro y los puntos más lejanos se muestran en gris, con relación a la dirección de la vista.
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 Si los puntos están fuera del rango de profundidad, desaparecerán de la vista del modelo. Esto se puede utilizar para centrarse en áreas específicas, eliminando que fueron escaneadas y no pertenecen al objeto.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/t1/f31.png', alt='modelo 3d')

    p Otra forma de visualizar las nubes de puntos es la vista de 
      b rayos X
      | , este modo muestra áreas específicamente y hace transparentes las áreas más cercanas y más alejadas del área seleccionada. 

    .tarjeta.p-4.mb-5.fgris1
      SlyderA(tipo='b')
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Esta vista es útil cuando se puede escanear al interior de un edificio; por ejemplo, puede ser difícil ver el interior debido a las paredes exteriores, o cuando se escanea un automóvil donde se requiere identificar piezas del interior.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/f32.png', alt='imagen relacionada')
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Se puede usar la función de rayos X del software de procesamiento, para hacer que las paredes sean transparentes, lo que le permite ver el interior con claridad.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/f33.png', alt='imagen relacionada')
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Ejemplo de rayos x
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/f34.png', alt='imagen relacionada')

    .col-lg-10.mx-auto.mb-5
      .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t1/f35.png', alt='relieve')
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 Otra forma con la que se puede usar una nube de puntos para visualizar, es con el color de los puntos, que cambia en función de su altura desde la dirección Z. Con este método de sombreado, puede distinguir fácilmente el suelo.

    Separador

    #t_1_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.3 Generación y exportación de productos derivados

    p En el video a continuación, se analiza la información sobre generación y exportación de productos derivados:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gfyGw4TLSTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    #t_1_4.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.4 Toma de datos con un escáner 3D de luz blanca estructurada para objeto cercano

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/t1/f36.svg', alt='esquema de triangulación')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Existe otra forma de escaneo de objetos 3D, esta se conoce como luz blanca o luz estructurada, este escáner proyecta una luz sobre el objeto a digitalizar y dos cámaras registran la variación de la luz en el objeto y calculan la distancia de cada punto, en el campo de visión.  Un escáner de luz estructurada consta de un proyector y dos cámaras. 

    p El proceso para escanear es el siguiente:

    .col-md-10.mx-auto.tarjeta.fcp10.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-around.align-items-center(titulo="Paso 1")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t1/f37.png', alt='imagen relacionada')
          .col-md-6
            p Se proyectan diferentes patrones de luz sobre el objeto.
        .row.justify-content-around.align-items-center(titulo="Paso 2")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t1/f38.png', alt='imagen relacionada')
          .col-md-6
            p El escáner registra cómo y dónde se tuercen estos patrones de luz en el objeto.
        .row.justify-content-around.align-items-center(titulo="Paso 3")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t1/f39.png', alt='imagen relacionada')
          .col-md-6
            p Se calcula la distancia y la ubicación de miles de puntos de datos en función de dónde incide la luz, usando trigonometría simple.
        .row.justify-content-around.align-items-center(titulo="Paso 4")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t1/f40.png', alt='imagen relacionada')
          .col-md-6
            p Los puntos se triangulan debido a las dos cámaras que el escáner usa como referencia.

    .col-md-10.mx-auto.mb-5
      .cajon.color-acento-botones.p-4.mb-4
        p.mb-0 El resultado final es una nube de puntos que representa la geometría del objeto. Una vez que haya terminado con un ángulo del objeto, se debe girar el objeto o el proyector para capturar un ángulo diferente. Se capturan más ángulos de esta manera, hasta una rotación de 360 grados. Al final del proceso, el escaneo 3D se puede limpiar y estar listo para usar.

    .row.justify-content-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/t1/f41.png', alt='persona manipulando un láser')
      .col-lg-7
        p Esta luz, en la práctica puede ser blanca o azul y se proyecta, como una serie de rayas o una matriz de puntos. Este tipo de escáner suele usarse para objetos más pequeños. (Tresde, 2019). Los escáneres de luz blanca y luz azul son muy similares entre sí. La luz blanca es la predecesora del escaneo de luz azul, que se creó como una mejora con respecto al escaneo de luz estructurada original. Por su parte, la luz azul produce una mayor resolución y precisión en sus escaneos. 
        p Esto condujo a la interrupción gradual de la luz blanca. Dado que la luz blanca utiliza todo el espectro visible, se compone de todas las diferentes ondas de luz visible. Como resultado, la luz de estos escáneres es más propensa a distorsionarse, lo que genera modelos 3D menos precisos. La luz azul, por otro lado, solo funciona con un color de luz con una longitud de onda más corta. Debido a que estos rayos son más cortos, es menos probable que se reflejen, lo que brinda una mayor precisión al escanear.

    h3 
      i.fas.fa-circle.cab.me-2
      | Ventajas y desventajas del escáner de luz blanca estructurada

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-md-3
        figure
          img(src='@/assets/curso/temas/t1/f42.svg', alt='icono de computador')
      .col-lg-10.col-md-9
        p Una de las principales ventajas es la velocidad con la que se crea la nube de puntos, esto es gracias a que los algoritmos para las mediciones de la deformidad de la luz emitida, al igual que el escáner láser, son muy precisas y con una altísima resolución. No obstante, tienen limitaciones con las condiciones de luminosidad, desventaja que no tiene su contraparte con el láser. Otra de las ventajas de los escáneres de luz estructurada es la calidad del escaneo. Algunos productos incluso pueden capturar la textura y el color, utilizando proyecciones de color después de rayas de luz. 
        .cajon.color-acento-contenido.p-4
          p.mb-0 Como ocurre con la mayoría de los escáneres láser, la principal desventaja es la mala detección de superficies transparentes o reflectantes. Sin embargo, el problema suele resolverse colocando un polvo blanco sobre el objeto.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
