<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Bienvenido a este recurso educativo, a continuación, aprenderá sobre la manera en que la digitalización de objetos en 3D se ha convertido en una herramienta significativa para varios sectores de la industria, ya que ha permitido el avance y mejora de procesos industriales, así como el rápido desarrollo de prototipos y nuevos productos, comprenderá el funcionamiento de los escáneres 3D y sobre el modelado de productos. Le invitamos a ver el siguiente video que hace una introducción a los temas que se estudiarán.
      .col-lg-5.order-sm-first.order-lg-last(data-aos="fade-left")
        img(src='@/assets/curso/temas/if1.png', alt='escáner láser')

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
