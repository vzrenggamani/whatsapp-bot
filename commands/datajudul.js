var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://ejj-digital-platform.firebaseio.com/media/data-daftarjudul/.json',
  headers: { }
};

exports.run = async (msg, bot) => {
  console.log("Sending Database Information")
  axios(config)
    .then(function (response) {
      var p = response.data;

      for (var key in p) {
        if (p.hasOwnProperty(key)) {

          message = `
**-> Artikel ${key}  DATASHEET <-** 
Kelompok :  ${p[key].kelompok} 
Region :  ${p[key].region} \n
Judul 1 :  ${p[key].judul1} 
Judul 2 :  ${p[key].judul2} 
Judul 3 :  ${p[key].judul3} 
Judul 4 :  ${p[key].judul4} 
Judul 5 :  ${p[key].judul5} \n
Keterangan :  ${p[key].keterangan} 
Tersubmit pada :  ${p[key].timestamp} 
===== DATA =====`;

          bot.sendText(msg.from, message)
          console.info("Data Judul " + key + "terkirim")
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
