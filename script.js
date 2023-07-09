console.log("Hello World");

// localStorage.setItem("test", "hidden");




// if (localStorage.getItem("test") === "hidden") {
//     console.log("Local Storage: " + localStorage.getItem("test"));
// }


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

    btnHide.style.color = "#c4fee0";
    btnHide.style.cursor = "pointer";
    btnHide.style.textAlign = "center";
    btnHide.style.padding = "5px";
    btnHide.style.border = "1px solid #c4fee0";
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

    btnHighlight.style.color = "#c4fee0";
    btnHighlight.style.cursor = "pointer";
    btnHighlight.style.textAlign = "center";
    btnHighlight.style.padding = "5px";
    btnHighlight.style.margin = "5px";
    btnHighlight.style.border = "1px solid #c4fee0";
    btnHighlight.style.borderRadius = "20px";
    btnHighlight.style.backgroundColor = "#292929";
    btnHighlight.id = "btnHighlight";


}



const modifyPost = (mode) => {
//    setInterval(removePremiumPost, 1000);
if (document.querySelector("article div div section") === null) {


    
    
    const articles = document.querySelectorAll("article");
    
    articles.forEach((article) => {
        cont = 1
        if ((article.querySelector("button div"))) {
            if (mode === "highlight"){
            article.style.display = "block";
            article.style.background = "#c4fee0";
            article.style.marginTop = "5px";
            article.style.marginBottom = "15px";
            article.style.borderRadius = "15px";
            article.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.15)";


            document.querySelector("#btnHide").style.opacity = "50%";
            document.querySelector("#btnHighlight").style.opacity = "100%";


            // article.remove();

            console.log();

            }
    
            else if (mode === "hide"){
                article.style.display = "none";

                document.querySelector("#btnHide").style.opacity = "100%";
                document.querySelector("#btnHighlight").style.opacity = "50%";
            }
    
    }





        cont += 1;
    
    })
}
    console.log("FUNCAO");


}

hideBtn();
highlightBtn();
document.addEventListener(("mousemove" || "scroll"), () => {

    setTimeout(modifyPost(localStorage.getItem("modeView")), 250);
    
});
