exports.run = async (msg, bot) => {
    const reng = "https://reng.my.id/japfest-";

    message = `
*-> DAFTAR LINK PENTING JAPAN FESTIVAL MEDIA <-*   \n
*Penyimpanan Artikel:* ${reng}drive \n
*Form Registrasi Diri:* ${reng}register \n
*Form Unggah Artikel:* ${reng}artikel \n
*Situs Panduan Media:* ${reng}guide \n
*Daftar Link Penting:* ${reng}links \n
*Login System Utama:* ${reng}sso \n
*Tata cara upload:* ${reng}cara-upload \n
*Tata cara register diri:* ${reng}cara-register \n
*Daftar referensi artikel:* ${reng}referensi-artikel \n
*Alurkerja Tim:* ${reng}alurkerja \n
*Template artikel:* ${reng}template \n
*Daftar pertanyaan mainstream:* ${reng}faq \n
*Daftar team leader:* ${reng}team-leader \n
*Jadwal dan daftar tim:* ${reng}worksheet \n
    
*Tolong dikeep FYI.*
If any problems occur, *tolong jangan japri*.
_Send mention di grub biar semua tau kalo ada problem_.
_Japri kalo lebih dari 8 jam gaada balesan_.
`;

    bot.sendText(msg.from, message);
    console.log("Link Japfest sent to " + msg.from)
}
