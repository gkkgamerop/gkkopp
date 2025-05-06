const mineflayer = require('mineflayer');
const express = require('express');
const app = express();
const port = 3000;

// Keep-alive server
app.get('/', (req, res) => res.send('Bot is alive!'));
app.listen(port, () => console.log(`🌐 Keep-alive web server running on port ${port}.`));

function createBot() {
  const bot = mineflayer.createBot({
    host: 'aternos.org', // Replace with your server IP or hostname
    port: 25565,          // Replace with your server port if different
    username: 'BotEmail@example.com', // Use email for Microsoft accounts
    auth: 'microsoft' // Use 'offline' for cracked servers
  });

  bot.on('login', () => {
    console.log('✅ Bot logged in');
  });

  bot.on('end', () => {
    console.log('🔁 Bot disconnected. Reconnecting...');
    setTimeout(createBot, 5000); // Reconnect after 5 seconds
  });

  bot.on('error', (err) => {
    console.log('❌ Bot error:', err);
  });
}

createBot();