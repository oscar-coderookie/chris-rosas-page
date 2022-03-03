const bioChencho = [
    {
        text: "El cantante nació en Guayama, Puerto Rico. En su adolescencia jugaba baloncesto y de joven fue peluquero junto a su primo. Interesado desde joven en la escena urbana, a finales de los noventas Chencho y su primo Maldy deciden incursionar como artistas, formando el dúo inicialmente conocido como Chencho y Maldy. Con el tiempo este pasaría a llamarse Plan B, gracias al éxito del sencillo que lleva este mismo nombre publicado en el 2000. Aunque inicialmente no eran reconocidos, con el paso del tiempo fueron abriéndose camino, hasta que finalmente en 2002, dan el salto a la fama con su álbum debut “El mundo de Plan B: Los que montan”."
    },
    {
        text: " “El mundo de Plan B: Los que montan” incluiría temas tan recordados como “Dos gatas” con Guelo Star, “Me la Explota” con Daddy Yankee y “Lento Muevete” con Dalmata.  El éxito que este tuvo seria solo el inicio de la meteórica carrera del dúo. En 2010, aparece su segundo álbum “House of Pleasure”, con colaboraciones como “La nena de papi” con Tito el Bambino y “Lloras” con RKM & Ken-Y. No obstante, el tema más destacado del álbum fue su famoso “Si no le contesto”. Este tema contaría, gracias a su éxito, con un remix junto a Tony Dize y Zion & Lennox. Cabe mencionarse que esta es la canción más recordada del dúo. "
    },
    {
        text: "Sus últimos trabajos fueron “Ella Fuma” con Farruko, Darell y Brytiago y “Si Tú” de Justin Quiles. Tras casi 18 años de carrera, el dúo decide separarse para dar inicio a sus carreras en solitario en 2018. No obstante, ambos dejaron en claro que el dúo podría regresar en cualquier momento.Al año siguiente de haberse separado de su primo, Chencho hace su debut en solitario con “Impaciente” (2019) al lado de Miky Woodz. Luego colabora con Rauw Alejandro en “El Efecto” y con Natti Natasha en “Deja Tus Besos” (remix). También participó en los remixes de “Hola” de Dalex y “105 F” de KEVVO. En este último participarían Myke Towers, Brytiago y Darell.Recientemente colaboró con Myke Towers y Jon Z en el remix de “3G” de Wisin.​"
    }
];

const imagesChencho = [
    {
        original: "https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/269302853_456451112498193_3269568508116153419_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=nQQng4I5g5QAX_Vz3xU&_nc_ht=scontent.feoh1-1.fna&oh=00_AT_Xfe3hkASE89wxZ6autnriEGb7_fa3sgPLUWWu4fDdGw&oe=6225023D"
    },
    {
        original: "https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/250944567_428159621994009_4577683381812246680_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=mPBPdrzb3boAX8brReV&_nc_ht=scontent.feoh1-1.fna&oh=00_AT_8hwKXw5TYDoy2pRvbNxn3G6kO4BkJmCZCpWb17ZZ82A&oe=622571F7"
    },
    {
        original: "https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/250644853_428159631994008_8832498083898997803_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=irc8j9H2GqcAX8VFrgN&_nc_ht=scontent.feoh1-1.fna&oh=00_AT--r1wZbPLicggujasJKpy0R2sYm7vRBlXxm0AZehTcFA&oe=62248976"
    },
    {
        original: "https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/250234499_428159628660675_1103311022428549365_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=H60EiuSAuJQAX-v4dug&_nc_ht=scontent.feoh1-1.fna&oh=00_AT-8osq7zi-l1UuZbsT9vfo1j554osmq9-WoLqqNfhzU1w&oe=6224B968"
    },
    {
        original: "https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/249454158_428159625327342_5817080466729714995_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=lbqm_Tof9qQAX_ZSrDG&_nc_ht=scontent.feoh1-1.fna&oh=00_AT9fxbcn0lVthMgzp0-Bit5wQmkZgb-a9Qs02AQ_Ih4JbQ&oe=6224218C"
    },
    {
        original: "https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/249039304_425163982293573_384004161359760238_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=wmiqwrUYI8kAX8_Ymhl&_nc_ht=scontent.feoh1-1.fna&oh=00_AT905SxdasyoYdL0Yzk8yz1fJIon53nbTVFJzO79t6Ho4g&oe=6223FE5E"
    },
    {
        original: "https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/242486790_425163992293572_8222204818652228520_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=rRX2LFLuB0EAX9LaT9v&_nc_ht=scontent.feoh1-1.fna&oh=00_AT8zlwAmbRKbFw2A7uiyeCkr7y9munexdFFJRyi5_kbt2g&oe=622546ED"
    },
    {
        original: "https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/242428921_424549815688323_2437747348127701959_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=I_MIqESPE9YAX8qfl83&_nc_ht=scontent.feoh1-1.fna&oh=00_AT-uU2p2_yeVct_FGC86zgT7rUq_3W7Sgoc_ACwveXOhwg&oe=62240C03"
    },
]; 

export { bioChencho, imagesChencho };