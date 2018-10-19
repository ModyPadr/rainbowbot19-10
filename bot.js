const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('500649639523909633').roles.find('name', 'Disco').edit({color: 'RANDOM'})
    },5000);
  

})





client.login(process.env.BOT_TOKEN); 
