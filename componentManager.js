const { MessageActionRow, MessageButton } = require("discord.js")

module.export = class ComponentManager {
    buttonForOpenTicket() {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId("open-ticket")
                .setLabel("Ouvrir un ticket")
                .setStyle("SUCCESS"),
            );
    }
}