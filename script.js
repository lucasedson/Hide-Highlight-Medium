const firstExecution = () => {
    if (localStorage.getItem("modeView") != ("highlight" || "hide")) {
        localStorage.setItem("modeView", "highlight");
    }
}


const stdBtn = () => {

    let btn = document.createElement("img");    

    btn.src = chrome.runtime.getURL(`images/${localStorage.getItem("modeView")}.svg`);
    btn.style.width = "25px";
    btn.style.height = "25px";
    btn.id = "stdBtn";
    btn.style.cursor = "pointer";
    btn.style.margin = "5px";
    btn.style.border = "1px solid transparent";
    btn.style.borderRadius = "20px";



    btn.addEventListener("click", () => {
        stateButton = localStorage.getItem("modeView");
         
        if (stateButton === "highlight"){
            {
                btn.src = chrome.runtime.getURL(`images/hide.svg`);
                
                modifyPost("hide");
                localStorage.setItem("modeView", "hide");   
                
            }
            
        }
        else if (stateButton === "hide"){
            {
                btn.src = chrome.runtime.getURL(`images/highlight.svg`);
                modifyPost("highlight");
                localStorage.setItem("modeView", "highlight");
            }
            
        }

})


    let panel = document.querySelectorAll("#root > div > div.s.c > div.s.t.u.v.c > div.av.o.x.n.aw > div.n.o.ax");
    panel[0].appendChild(btn);
}


const hideBtn = () => {
    let panel = document.querySelectorAll("#root > div > div.s.c > div.s.t.u.v.c > div.av.o.x.n.aw > div.n.o.ax");
    let btnHide = document.createElement("button");
    let textHide = document.createTextNode("Hide");
    btnHide.appendChild(textHide);

    panel[0].appendChild(btnHide);

    btnHide.addEventListener("click", () => {
        modifyPost("hide");
        localStorage.setItem("modeView", "hide");   
    })

    btnHide.style.color = "white";
    btnHide.style.cursor = "pointer";
    btnHide.style.textAlign = "center";
    btnHide.style.padding = "5px";
    btnHide.style.border = "1px solid gray";
    btnHide.style.borderRadius = "20px";
    btnHide.style.backgroundColor = "#292929";
    btnHide.style.margin = "5px";
    btnHide.id = "btnHide";

}




const highlightBtn = () => {
    let panel = document.querySelectorAll("#root > div > div.s.c > div.s.t.u.v.c > div.av.o.x.n.aw > div.n.o.ax");
    let btnHighlight = document.createElement("button");
    let textHighlight = document.createTextNode("Highlight");
    btnHighlight.appendChild(textHighlight);
    panel[0].appendChild(btnHighlight);

    btnHighlight.addEventListener("click", () => {
        modifyPost("highlight");
        localStorage.setItem("modeView", "highlight");
    })

    btnHighlight.style.color = "white";
    btnHighlight.style.cursor = "pointer";
    btnHighlight.style.textAlign = "center";
    btnHighlight.style.padding = "5px";
    btnHighlight.style.margin = "5px";
    btnHighlight.style.border = "1px solid gray";
    btnHighlight.style.borderRadius = "20px";
    btnHighlight.style.backgroundColor = "#292929";
    btnHighlight.id = "btnHighlight";
}


const modifyPost = (mode) => {


if (document.querySelector("article div div section") === null) 
{   
    const articles = document.querySelectorAll("article");
    
    articles.forEach((article) => {
        if ((article.querySelector("button div"))) {
            if (mode === "highlight"){
            article.style.display = "block";
            article.style.background = "linear-gradient(90deg, rgba(238,174,202,0.5) 0%, rgba(148,187,233,0.5) 100%)";
            article.style.marginTop = "5px";
            article.style.marginBottom = "15px";
            article.style.borderRadius = "15px";
            article.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.15)";
            }
    
            else if (mode === "hide"){
                article.style.display = "none";

            }

    }

    })
}

}


firstExecution();
stdBtn();



// Criação do observador de mutação
var observer = new MutationObserver(function(mutationsList) {
    // Verifica todas as mutações observadas
    for (var mutation of mutationsList) {
      // Verifica se houve adição de nós no DOM
      if (mutation.type === 'childList') {
        // Verifica cada nó adicionado
        for (var addedNode of mutation.addedNodes) {
          // Verifica se o nó adicionado é um elemento <article>
          if (addedNode instanceof HTMLElement && addedNode.tagName === 'ARTICLE') {
            // Dispara o evento personalizado
            var articleEvent = new CustomEvent('articleCreated', { detail: addedNode });
            document.dispatchEvent(articleEvent);
          }
        }   
      }
    }
  });
  
  // Configura o observador para observar adições de nós no DOM
  observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('articleCreated', () => {

        modifyPost(localStorage.getItem("modeView"));
    });