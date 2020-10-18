const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
    
    await saveOrphanage(db, {
        lat: "-27.233633",
        lng: "-49.6554874",
        name: "Lar brabo",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9928349234",
        images: [
            "https://images.unsplash.com/photo-1601180964854-4159eae306bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1600721308040-9b5e04fb544b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"  
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas das 8h até 18h",
        open_on_weekends: "0"
    })
    
       
    const selectedOrphanages = await db.all('SELECT * FROM orphanages')

    console.log(selectedOrphanages)
})