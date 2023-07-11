// chrome.webRequest.onBeforeRequest.addListener(
//   function(details) {
//     if (details.initiator === chrome.runtime.getURL("/")) {
//       return; // Ignora as requisições originadas da extensão
//     }

//     // Realize o processamento necessário com a requisição fetch
//     console.log('Fetch URL:', details.url);
//     console.log('Fetch method:', details.method);

//     // Adicione seu código para manipular a requisição fetch aqui
//     // Por exemplo, você pode enviar os dados para um servidor, analisar a resposta, etc.
//   },
//   { urls: ["<all_urls>"], types: ["xmlhttprequest"] },
//   ['asyncBlocking']
// );
