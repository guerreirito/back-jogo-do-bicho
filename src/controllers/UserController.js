const https = require("https");
const url = "https://www.resultadofacil.com.br/resultado-do-jogo-do-bicho/CE";

module.exports = {
  async index(request, response) {
    let data = "";
    https
      .get(url, (res) => {
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => response.send(data));
      })
      .on("error", (err) => console.log(err.message));
  },
};
