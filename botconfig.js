module.exports = {
  DefaultPrefix: process.env.Prefix || "*", // Default prefix
  Port: 3000, //Which port website gonna be hosted
  Token: process.env.Token || "OTUzMjgxNjc5NjA5NDU0NjEy.GudXrX.D6BZWBz_YnaGqkFJkMPFoify53_3ZNiOHRAhmY", // Discord Bot Token
  ClientID: process.env.Discord_ClientID || "953281679609454612", // Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "Dq4xZ3U3SRLhQeM_px4qbsh5h74gICEj", // Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], // Discord OAuth2 Scope
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Music", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },
};
