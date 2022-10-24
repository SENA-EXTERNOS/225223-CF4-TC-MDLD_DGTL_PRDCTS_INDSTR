export default {
  global: {
    componenteFormativo: 'Teoría general de sistemas láser escáner 3D',
    descripcionCurso:
      'El proceso de escaneo 3D ha cobrado importancia debido al rápido desarrollo tecnológico de los últimos años. Gracias a esto, han tenido más pluralidad las industrias donde tiene utilidad la digitalización de objetos 3D. Además, dicho proceso ha disminuido el precio, aumentado la calidad y la precisión, lo que le permite estar al alcance en cualquier institución para el I+D+I, empresas e incluso hogares. Algunas de los sectores más importantes son aviación, salud, mantenimiento, realidad virtual, arquitectura, entre otros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-bg.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/decorativo3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Toma de datos con un láser escáner 3D',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Teoría de nubes de puntos, referenciación y comprobación de errores',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Tratamiento y limpieza de nubes de puntos de láser escáner 3D',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Generación y exportación de productos derivados',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Toma de datos con un escáner 3D de luz blanca estructurada para objeto cercano',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Herramientas de dibujo paramétrico: generalidades, aplicaciones, entornos, comandos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Técnicas de modelación tridimensional: definición y tipos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Modelado 3D',
      referencia:
        'ArtisticRender. (s.f.). <em>10 Different types of 3D modeling techniques.</em> Artisticrender.com. Recuperado 3 de septiembre de 2022.',
      tipo: 'Articulo',
      link: 'https://artisticrender.com/about/',
    },

    {
      tema: 'CAD y dibujo paramétrico',
      referencia:
        'Dasault Systems. (s.f.). <em>Introducing solidworks</em>. Solidworks. Recuperado 3 de septiembre de 2022.',
      tipo: 'Manual',
      link: 'https://files.solidworks.com/pdf/introsw.pdf',
    },

    {
      tema: 'Escaneo 3D',
      referencia:
        'Engineering & Manufacturing Services. (s.f.). <em>An Introduction to 3D Scanning E-Book</em>. Engineering & Manufacturing Services. Recuperado 2 de septiembre de 2022.',
      tipo: 'Articulo',
      link:
        'https://www.ems-usa.com/tech-papers/An_Introduction_to_3D_Scanning_E-Book.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acotado',
      significado:
        'acotar es el proceso de anotar, mediante líneas, cifras, signos y símbolos, las medidas de un objeto sobre un dibujo.',
    },
    {
      termino: 'CAD',
      significado: 'diseño o dibujo asistido por computadora.',
    },
    {
      termino: 'Despiece',
      significado:
        'conjunto o la representación gráfica de un grupo de piezas.',
    },
    {
      termino: 'Dibujo',
      significado:
        'representación a escala con todos los datos necesarios para definir el objeto.',
    },
    {
      termino: 'Escáner 3D',
      significado:
        'dispositivo que tiene la capacidad de analizar un objeto o una escena para reunir datos sobre su forma.',
    },
    {
      termino: 'Láser',
      significado:
        'es un acrónimo que significa <em>Light Amplified by Stimulated Emission of Radiation</em> (Luz amplificada por emisión estimulada de radiación).',
    },
    {
      termino: 'Modelado',
      significado:
        'proceso de desarrollo de una representación de cualquier objeto tridimensional.',
    },
    {
      termino: 'Norma',
      significado:
        'es un valor establecido y conocido que se utiliza para medir una cantidad desconocida.',
    },
    {
      termino: 'Nube de puntos',
      significado:
        'conjunto de vértices en un sistema de coordenadas tridimensional.',
    },
    {
      termino: 'Plano',
      significado:
        'representación de los objetos en relación con su posición o la función que cumplen.',
    },
    {
      termino: 'Prototipado',
      significado:
        'un prototipo es un primer molde en que se fabrica una figura o elemento mecánico.',
    },
    {
      termino: 'Simbología',
      significado:
        'son básicamente pequeños pictogramas y a menudo se asemejan a los elementos reales.',
    },
    {
      termino: 'Sólidos',
      significado: 'geométrica de tres dimensiones (largo, ancho y alto).',
    },
  ],
  referencias: [
    {
      referencia:
        'Accasoftware. (2021, 12 julio). <em>Cómo visualizar una nube de puntos en línea</em>. BibLus. Recuperado 13 de septiembre de 2022 de:',
      link:
        'https://biblus.accasoftware.com/es/como-visualizar-una-nube-de-puntos-en-linea/',
    },
    {
      referencia:
        'Arte, S. F. L. (2022). <em>Escáner de luz estructurada o luz blanca</em>. Factum arte.',
      link:
        'https://www.factum-arte.com/pag/1415/escaner-de-luz-estructurada-o-luz-blanca',
    },
    {
      referencia:
        '<em>Acerca del dibujo paramétrico y las restricciones</em>. (2019, 3 abril). AutoCAD 2018 | Autodesk Knowledge Network.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-899E008D-B422-4DF2-AC8D-1A4F5701ED4E-htm.html',
    },
    {
      referencia:
        'Eman. (s.f.). <em>¿Cuáles son las aplicaciones de un escáner láser 3D?</em> Eman Ingeniería. Recuperado 2 de septiembre de 2022 de:',
      link:
        'https://emaningenieria.com/cuales-son-las-aplicaciones-de-un-escaner-laser-3d/',
    },
    {
      referencia:
        'Les.wiki. (s.f.). <em>Diseño paramétrico (Parametric design)</em>. Les.wiki. Recuperado 2 de septiembre de 2022 de:',
      link: 'https://les.wiki/detial/Parametric_design',
    },
    {
      referencia:
        'Tresde. (2019, 5 diciembre). <em>Escaneo de luz estructurada: Luz Blanca vs Luz Azul</em>. Tresde. Recuperado 13 de septiembre de 2022 de:',
      link:
        'https://tresde.pe/escaneo-de-luz-estructurada-luz-blanca-vs-luz-azul/',
    },
    {
      referencia:
        'V., C. (2019, 8 agosto). <em>Laser Scanner vs Structured Light Scanner: which should you choose?</em> 3Dnatives.',
      link:
        'https://www.3dnatives.com/en/laser-3d-scanner-vs-structured-light-3d-scanner-080820194/#!',
    },
    {
      referencia:
        'Vector cero metrología. (2022, April 26). <em>7 ventajas de la medición con Escáner 3D</em> | BLOG Vector 0 Metrología. vector cero metrología. Recuperado 13 de septiembre de 2022 de:',
      link: 'https://vector0metrologia.com/7-ventajas-medicion-escaner-3d/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
