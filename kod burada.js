lient.on("message",message=>{
    if(message.content==`<@!${client.user.id}>`) return message.channel.send(`**!yardım** yazarak komutları görebilirsiniz `);
})
