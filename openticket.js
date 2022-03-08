module.exports = {
    run: async (client, message, args) => {
        if (!message.member.permission.has('ADMINISTRATOR')) return message.channel.send({embeds: [client.embedManager.embedPermissionMissing(message.member, 'openticket')]})

        return message.channel.send({embeds: [client.embedManager.embedForOpenTicket(message.guild)], components: [client.ComponentManager.buttonForOpenTicket()]})
    },
    name: 'openticket',
    aliases: [],
    description: "Permet de créer le message du ticket."
}