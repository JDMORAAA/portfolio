// Configuración del portafolio: videos y datos del formulario de contacto.
// Para agregar un video: añade { id: "ID_DE_YOUTUBE", title: "Título" } a su grupo.
// El id es lo que va después de v= (o de /shorts/) en el enlace de YouTube.
// Un grupo sin videos no se muestra en la página.
window.PORTFOLIO = {
  // Reel principal de la portada. Cuando lo tengas: { id: "ID_DE_YOUTUBE", title: "Reel 2026" }
  reel: null,

  // Formulario de contacto
  contact: {
    // Clave gratuita de Web3Forms (web3forms.com). Con la clave, las solicitudes llegan a tu correo.
    // Sin clave, el formulario abre el correo del visitante con el mensaje ya escrito.
    accessKey: "e7115c60-068b-4b5d-b589-4e003b7ab431",
    // Opcional: tu número de WhatsApp con código de país y solo dígitos (ejemplo: 584121234567).
    // Si lo llenas, aparece el botón verde "Contáctame directamente" junto al del formulario,
    // y tras enviar el formulario otro botón para mandarte también el mensaje por WhatsApp.
    whatsapp: "584124365551",
    // Correo usado solo cuando no hay clave. Puedes borrarlo cuando accessKey esté puesta.
    fallbackEmail: "jdavidmoraaa@gmail.com"
  },

  groups: [
    {
      title: "Documentales de eventos",
      note: "Bodas, quinceaños, fiestas",
      layout: "wide",
      items: [
        { id: "rbrUE2wKacE", title: "Boda · Montaje inicial" },
        { id: "l8xUsPikmPc", title: "Boda · Montaje final" }
      ]
    },
    {
      title: "Podcasts y vlogs",
      note: "Edición para canales de YouTube",
      layout: "wide",
      items: [
        { id: "XJr7-kFKiK4", title: "Podcast · Facturando con la Yoyis" },
        { id: "WaU1FqR309M", title: "Podcast · Facturando con la Yoyis" },
        { id: "K4D6fWoI0dE", title: "Podcast · Facturando con la Yoyis" }
      ]
    },
    {
      title: "Videos para empresas",
      note: "Ander FX · canal de YouTube",
      layout: "wide",
      items: [
        { id: "oOBx6Wwk-T4", title: "Presentación del canal · Ander FX" },
        { id: "j1aTcXMauI0", title: "Testimonios de clientes · Ander FX" },
        { id: "eRKg_ExIbNc", title: "Tutorial · Ander FX" }
      ]
    },
    {
      title: "Reels y TikToks",
      note: "Contenido vertical para marcas",
      layout: "tall",
      items: [
        { id: "Lj74CTGR7pg", title: "Inauguración · 1611 Bistro Bar" },
        { id: "hSeaGclAybQ", title: "Momentos controversiales · Facturando con la Yoyis" },
        { id: "WA3LDWF-bYM", title: "Review de producto" },
        { id: "EQLs5QxdA58", title: "Tutorial en pantalla dividida" },
        { id: "-BRzOwqhcFE", title: "Resumen de masterclass" },
        { id: "T-_i093CikQ", title: "Formato Top" }
      ]
    }
  ]
};
