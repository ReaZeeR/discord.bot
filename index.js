const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});


Client.on("ready", () => [
    console.log("le bot fonctionne bien")
]);

Client.on("ready", () => {
        //Status custom
    Client.user.setStatus("dnd");
    setTimeout(() => {
        Client.user.setActivity("Sky Land | Faites ?help");
    }, 100);
});

const prefix = "?";

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!help
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#611479")
            .setTitle("Liste des commandes")
            .setAuthor("Sky Land", "https://cdn.discordapp.com/attachments/657692670763991060/944617398110146630/SL_Contour_Noir.png")
            .setDescription("ICI : Vous trouverez la liste des commandes du bot Sky Land")
            .setThumbnail("https://cdn.discordapp.com/attachments/657692670763991060/944617398110146630/SL_Contour_Noir.png")
            .addField("__?help__", "> Affiche la liste des commandes de Sky Land", true)
            .addField("__?statut__", "> Affiche le statut de Sky Land", true)
            .addField("__?regledebase__", "> Affiche les règles de base de Sky Land", true);

        message.channel.send({ embeds: [embed]});
    }

    //?statut
    if(message.content === prefix + "statut"){
        const embed2 = new Discord.MessageEmbed()
            .setColor("#B40404")
            .setTitle("Statut du Serveur")
            .setAuthor("Sky Land", "https://cdn.discordapp.com/attachments/657692670763991060/944617398110146630/SL_Contour_Noir.png")
            .setThumbnail("https://cdn.discordapp.com/attachments/657692670763991060/944617398110146630/SL_Contour_Noir.png")
            .setDescription("Sky Land est actuellement **OFF** ");

        message.channel.send({ embeds: [embed2]});
    }
    
    //?regledebase
    if(message.content === prefix + "regledebase"){
        const embed2 = new Discord.MessageEmbed()
            .setColor("#500b66")
            .setTitle("Les règles de Sky Land")
            .setAuthor("Sky Land", "https://cdn.discordapp.com/attachments/657692670763991060/944617398110146630/SL_Contour_Noir.png")
            .setThumbnail("https://cdn.discordapp.com/attachments/657692670763991060/944617398110146630/SL_Contour_Noir.png")
            .addField("__Metagaming__", '> Les évènements qui se déroulent en jeu sont des évènements RolePlay (RP), en revanche les événements qui se passent hors jeu (que ça soit sur le stream d’un autre joueur, sur discord etc...) sont des évènements Hors Roleplay (HRP), ce dernier type d\'événement est bien entendu inutilisable en RP. L\'utilisation des évènements HRP par un joueur est formellement interdite comme il est totalement interdit de StreamStalk les streamers. De par ce fait il est donc interdit de regarder un streamer jouant sur le serveur lorsque vous êtes en jeu. Un manquement à cette règle entrainera un ban définitif. De plus nous recommandons également aux joueurs d éviter de regarder d autres joueurs jouant sur le serveur afin de ne pas altérer leur RP et leurs choix RP. ')
            .addField("__Powergaming__", "> Agissez sur le serveur, comme vous le feriez dans la **vraie vie**, c’est une des notions de **base du Role Play**. Le fait d'effectuer des actions **irréalisables** dans la vraie vie est interdit. Vous devez être crédible dans chacun de vos actes, chacune de vos actions ou paroles doit être réfléchies, avoir un but et doit pouvoir s'expliquer d'un point de vue RP.")
            .addField("__Fear RP__", "> Faîtes réagir son personnage de manière lucide face à la mort, si une personne vous braque, ne dégainez pas à votre tour pour la braquer. Sauf dans certains cas précis (si elle vous tourne le dos et s’éloigne par exemple). Il faut **respecter la police**, sous peine d’être **sanctionné**, qu’importe le background de votre personnage.")

        message.channel.send({ embeds: [embed2]});
    }

});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if(message.member.permissions.has("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non/mal mentionné");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + " à été banni par le bot Sky Land.");
                }
                else {
                    message.reply("Impossible de bannir ce membre.");
                }
            }
        }
        else if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non/mal mentionné.");
            }
            else {
                if(mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + " à été kick par le bot Sky Land.");
                }
                else {
                    message.reply("Impossible de kick ce membre.");
                }
            }
        }
    }
})

Client.on("message", async message => {
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLocaleLowerCase() === prefix + "leb") {
        const embed2 = new Discord.MessageEmbed()
        .setColor("#FFA500")
        .setAuthor("Leboncoin", "https://cdn.5euros.com/media/cache/carousel/uploads/media/picture/2019-05-29/926fa6be-494c-422d-a16d-de523f4d06a6.png")
        .setDescription(args.slice(1).join(" "))
        .setFooter(message.member.displayName)
        .setTimestamp()
        if (!embed2) return message.channel.send("Veuillez écrire un text après la command **?leb** !!")
        message.channel.send({ embeds: [embed2]});
        message.delete()

    }
});

Client.on("message", async message => {
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLocaleLowerCase() === prefix + "inst") {
        const embed2 = new Discord.MessageEmbed()
        .setColor("#E1306C")
        .setAuthor("Instagram", "https://th.bing.com/th/id/R.7d0c2ee1d8d13c929f59cb413ffbabcc?rik=TJM7%2bxLpIZvmKA&pid=ImgRaw&r=0")
        .setDescription(args.slice(1).join(" "))
        .setFooter(message.member.displayName)
        .setTimestamp()
        if (!embed2) return message.channel.send("Veuillez écrire un text après la command **?inst** !!")
        message.channel.send({ embeds: [embed2]});
        message.delete()

    }
});

Client.on("message", async message => {
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLocaleLowerCase() === prefix + "twt") {
        const embed2 = new Discord.MessageEmbed()
        .setColor("#1DA1F2")
        .setAuthor("Twitter", "https://1000marcas.net/wp-content/uploads/2019/11/Twitter-logo.png")
        .setDescription(args.slice(1).join(" "))
        .setFooter(message.member.displayName)
        .setTimestamp()
        if (!embed2) return message.channel.send("Veuillez écrire un text après la command **?twt** !!")
        message.channel.send({ embeds: [embed2]});
        message.delete()

    }
});


Client.login("OTQ3NTkzMTgxODc5NDY4MDQy.Yhvg6w.0zvLa543xV0-vQgSwvmuv0ktUa0");