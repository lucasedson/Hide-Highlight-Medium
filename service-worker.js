// chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
//     chrome.scripting.executeScript(
//       {
//         target: {tabId: tab.id},
//         files: ['script.js']
//         // function: () => {}, // files or function, both do not work.
//       })
//   })