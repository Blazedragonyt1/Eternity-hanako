module.exports = {
	name: "support",
	alias: ["sup"],
	desc: "Send you official support group link.",
	category: "Group",
    react:"✅",
    start:async(client,m,{command,prefix,pushName})=>{
        let yup = ['https://media.tenor.com/XikoNQDfaqcAAAPo/bunny-nezuko-bunny-ears.mp4',
                   'https://media.tenor.com/xBh07rz9GHYAAAPo/nezuko-kamado-nezuko.mp4',
                   'https://media.tenor.com/CMHP0DIQY4UAAAPo/demon-slayer-kimetsu-no-yaiba.mp4',
                   'https://media.tenor.com/68c6pxzq3RAAAAPo/nezuko-nezuko-kamado.mp4',
                   'https://media.tenor.com/JQgNUfM_xcwAAAPo/nezuko-kamado-run.mp4'
                  ]
let rae = yup[Math.floor(Math.random() * yup.length)]

  
const eternitylogogg = "https://i.ibb.co/N2hZQP8/13e13ff7e301144d6da57.jpg"
        
                         
const lemo = `
*━『Ɇ𝖙𝖊𝖗𝖓𝖎𝖙ɏ Support Group Links 』━*

*1) [ Ɇ𝖙𝖊𝖗𝖓𝖎𝖙ɏ ฿𝖊𝖙𝖆 ] :*
https://chat.whatsapp.com/L1SxWZUcUeqGxKNFWeqBvv

*2) [ Ɇ𝖙𝖊𝖗𝖓𝖎𝖙ɏ ₵𝖆𝖘𝖎𝖓ø ] 🎰 :*
https://chat.whatsapp.com/Fnop2XkjWhNK9qW2BSMvSc
`
    await client.sendMessage(m.from,{video:{url:rae}, gifPlayback:true, caption: `*${pushName}* have a look in your DM`},{quoted:m})
  await  client.sendMessage(m.sender,{image:{url:eternitylogogg},caption:lemo},{quoted:m})  
    }
}
