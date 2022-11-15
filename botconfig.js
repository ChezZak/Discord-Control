module.exports = {
  DefaultPrefix: process.env.Prefix || "*", // Default prefix
  Port: 3000, //Which port website gonna be hosted
  Token: process.env.Token || "", // Discord Bot Token
  ClientID: process.env.Discord_ClientID || "", // Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "", // Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], // Discord OAuth2 Scope
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Hehe Boi :>", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },
};
