export const guildImageIdToDiscordCDN = (guildId: string, imageId: string) => {
    return `https://cdn.discordapp.com/icons/${guildId}/${imageId}.webp?size=240&quality=lossless`;
}