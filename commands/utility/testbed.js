const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Replies with bot statistics.'),
	async execute(interaction, analytics) {
		if (interaction.user.id !== "1166312840861331459") return await interaction.reply({ content: 'This command can only be used by the bot owner.', ephemeral: true });

		const embed = new EmbedBuilder()
			.setDescription(`<@1166312840861331459> hi`)
			.setTimestamp();
		await interaction.reply({ embeds: [embed] });
		
	},
};