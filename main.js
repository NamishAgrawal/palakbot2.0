const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();

const prefix = '-';

var badPings = 3;

client.once('ready', () => {
    console.log('bot is online');
    console.log(badPings);
});


client.on('message', message =>{
    if(message.content.includes('@everyone') && message.member.roles.cache.has(process.env.palak_role))
    {
      if(!message.member.roles.cache.has(process.env.bad_ping_role)){
            message.channel.send('laude ping mat maar');
            badPings--;
            message.channel.send('You ony have '+badPings +' pings left before you cant ping everyone again');
          console.log('bad pings=' + badPings);
      }
        if( badPings <= 0 )
        {
        message.member.roles.add(process.env.bad_ping_role);
        message.channel.send('you can no longer ping anyone');
        }

        if( badPings=== 3)
        {
            message.member.roles.remove(process.env.bad_ping_role);
        }

    }
    else{
        return ;
    }
});

client.on('message', message =>{

    if(message.content.includes('-reset') && message.member.roles.cache.has(process.env.admin_id) )
    {
        badPings = 3;
        message.channel.send('pings for roles reset to '+badPings);
        console.log("bad pings = "+badPings);


    }
    else{return;}
})



client.on('message', message =>{
    let simp = Math.floor(Math.random()*5)
   let random = Math.floor(Math.random()*100 )
    if(message.content.includes('-simprate'))
    {
        if(message.author.username.includes('Zetron23') || message.author.username.includes('papakipari'))
        {
            message.channel.send('User is a mega simp with a simpage of '+(100-simp));

        }

        else{
            
            message.channel.send('user is '+ random +'% simp');

        }
    }

 });



    let smh_count = 0;

        client.on('message', message =>{

           if(message.content.includes('smh') || message.content.includes('Smh'))
           {
              smh_count ++;
              console.log('smh_count = '+smh_count);

            }
            if(message.content.includes('-smh count'))
                message.channel.send('the ssmh count has reached '+ smh_count);
            else return;


     });

     

     let ansh_everyone_count = 0;
     let palak_everyone_count = 0;
     let rishab_everyone_count = 0;
     let pranav_everyone_count = 0;
     let sirjan_everyone_count = 0;
     let shreyada_everyone_count = 0;
     let varun_everyone_count = 0;
     let aryan_everyone_count = 0;
     let namish_everyone_count = 0;
     let rahul_everyone_count = 0;
     let Godlit_everyone_count = 0;
     let Anish_everyone_count = 0;


    
        client.on('message' , message =>{

            if(message.author.username.includes('Zetron23') && message.content.includes('@everyone'))
                ansh_everyone_count ++ ;           
            else if (message.author.username.includes('papakipari') && message.content.includes('@everyone'))
                palak_everyone_count ++;
            else if (message.author.username.includes('ALEX') && message.content.includes('@everyone'))
                sirjan_everyone_count ++;
            else if (message.author.username.includes('ItsPhoenix') && message.content.includes('@everyone'))
                namish_everyone_count ++;
            else if (message.author.username.includes('__HadeS__') && message.content.includes('@everyone'))
                rahul_everyone_count ++;
            else if (message.author.username.includes('GrimReaper') && message.content.includes('@everyone'))
                rishab_everyone_count ++;
            else if (message.author.username.includes('Hermione') && message.content.includes('@everyone'))
                shreyada_everyone_count ++;
            else if(message.author.username.includes('DoubleShot71') && message.content.includes('@everyone'))
                aryan_everyone_count ++;
            else if(message.author.username.includes('SKULLHUNT3R') && message.content.includes('@everyone'))
                pranav_everyone_count ++;
            else if(message.author.username.includes('Anonymousz') && message.content.includes('@everyone'))
                varun_everyone_count ++;
            else if(message.author.username.includes('GODLIT ∆ EMPIRE') && message.content.includes('@everyone'))
                Godlit_everyone_count ++;
            else if(message.author.username.includes('Explorer') && message.content.includes('@everyone'))
                Anish_everyone_count ++;
            else return;

        });


     

   


     client.on('message', message =>{

        if(message.content.includes('-EveryoneCount') && message.member.roles.cache.has(process.env.admin_id))
            {
                message.channel.send("Counter is as follows");
                message.channel.send('ansh -'+ansh_everyone_count);
                message.channel.send('palak -'+palak_everyone_count);
                message.channel.send('rishab -'+rishab_everyone_count);
                message.channel.send('pranav -'+pranav_everyone_count);
                message.channel.send('sirjan -'+sirjan_everyone_count);
                message.channel.send('namish -'+namish_everyone_count);
                message.channel.send('shreyada -'+ shreyada_everyone_count);
                message.channel.send('varun -'+ varun_everyone_count);
                message.channel.send('aryan -'+ aryan_everyone_count);
                message.channel.send('rahul -'+ rahul_everyone_count);
                message.channel.send('harsh -'+ Godlit_everyone_count);
                message.channel.send('Anish -'+Anish_everyone_count);





            

            }
            
            else
                return;

     });


   
     client.on('message' , message =>{
        if (message.content.includes('-pings'))
        {
            message.channel.send("the pings remaining are" + badPings);
        }

        else return;

    });

    client.on('message' , message =>{
        if(message.channel.name.includes('general') && message.content.startsWith('pls'))
            {
                message.channel.send('please use dank memer commands in #commands');
            }
        else return;
    });


    client.on('message' , message =>{
        let arg = message.content.substring(1).split(" ");
        const embed = new Discord.MessageEmbed;
        switch(arg[0]){
            case "poll":
                embed.setColor('ff0099')
                embed.setTitle("to set a yes or no poll")
                embed.setDescription('just type what you want to ask after -poll to make a poll')
                console.log(arg);
                
            if (!arg[1]){
                message.channel.send(embed);
                break;
            }

    


            let msgarg = arg.slice(1).join(" ");

            message.channel.send("📝"+ "**"+msgarg+"**").then(messageReaction =>{

                messageReaction.react('👍');
                messageReaction.react('👎');
                message.delete({ timeout: 3000 }).catch(console.error);;
            });

        break; 

        }

    });





client.login(process.env.token);