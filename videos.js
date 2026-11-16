// Lista de videos del portafolio.
// Para agregar un video: añade { id: "ID_DE_YOUTUBE", title: "Título" } a su grupo.
// El id es lo que va después de v= (o de /shorts/) en el enlace de YouTube.
// Un grupo sin videos no se muestra en la página.
window.PORTFOLIO = {
  // Reel principal de la portada. Cuando lo tengas: { id: "ID_DE_YOUTUBE", title: "Reel 2026" }
  reel: null,

  groups: [
    {
      title: "Documentales de eventos",
      note: "Bodas, quinceaños, fiestas",
      layout: "wide",
      items: []
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
