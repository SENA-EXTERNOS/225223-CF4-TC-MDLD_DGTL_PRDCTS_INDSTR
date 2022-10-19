<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas de dibujo paramétrico: generalidades, aplicaciones, entornos, comandos

    p El diseño paramétrico es un método de diseño que depende de ciertas características, algunas de ellas se observan en la siguiente infografía:

    .col-lg-10.mx-auto
      h3.text-center.mb-4 Características del diseño paramétrico
      ImagenInfograficaB.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t2/f1.svg', alt='imagen relacionada')

        .tarjeta.tarjeta--azul(x="25%" y="95%" tooltip="tooltip de max 35 caracteres" numero="1")
          .row.justify-content-center.mb-5.p-5
            .col-lg-2.col-md-3
              figure
                img(src='@/assets/curso/temas/t2/f2.svg', alt='icono relacionado')
            .col-lg-10.col-md-9
              p El 
                b diseño paramétrico 
                | es un método de diseño en el cual, las características de un objeto se establecen para que sean cambiantes de acuerdo con los procesos algorítmicos, a diferencia del proceso de diseño directo. En este método, 
                b los parámetros y las reglas determinan la relación entre el diseño y las condiciones iniciales que se den
                | . El término paramétrico se refiere a los parámetros que se ajustan según las necesidades y se pueden ajustar según las necesidades de los diseños. Es un recurso innovador habilitado por técnicas avanzadas de diseño digital.
              p.mb-0 Para obtener un modelo paramétrico, el operador inserta una serie de parámetros en un software especializado. De esta manera, puede controlar varias propiedades como la altura, la longitud, la posición, el ancho, etc. Y así se pueden crear infinitos volúmenes geométricos que transmiten movimiento y fluidez. Su relación directa con las matemáticas permite obtener resultados muy precisos, se trata de conseguir la forma a través de funciones matemáticas, que varían según los parámetros. Por tanto, es un diseño dinámico, flexible y adaptable a estos parámetros aplicados dinámicamente, según el contexto en muchos casos; pero la mejor forma de saberlo es viéndolo con los propios ojos. 
        .tarjeta.tarjeta--azul(x="50%" y="5%" tooltip="tooltip de max 35 caracteres" numero="2")
          .row.justify-content-center.mb-5.p-5
            .col-lg-2.col-md-3
              figure
                img(src='@/assets/curso/temas/t2/f3.svg', alt='icono relacionado')
            .col-lg-10.col-md-9
              p.mb-0 Sistemas basados en la propagación en los cuales, los algoritmos dan como resultado formas finales, según las entradas paramétricas iniciales. Permiten establecer la relación entre las medidas y los materiales. (Eman, s.f.).
        .tarjeta.tarjeta--azul(x="75%" y="95%" tooltip="tooltip de max 35 caracteres" numero="3")
          .row.justify-content-center.mb-5.p-5
            .col-lg-2.col-md-3
              figure
                img(src='@/assets/curso/temas/t2/f4.svg', alt='icono relacionado')
            .col-lg-10.col-md-9
              p.mb-0 Sistemas de restricciones, en los que se establecen las restricciones finales y se utilizan algoritmos para delimitar los fundamentos (estructuras, uso de materiales, etc.) que satisfacen estas restricciones. Ayudan a definir el rango de variación que puede admitir un modelo paramétrico. El ancho del intervalo y el resultado exacto de cada cambio de geometría, están determinados por el tipo de restricciones utilizadas durante la definición de esta. (Les.wiki, s.f.).

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables vue
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
