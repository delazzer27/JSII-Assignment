const para = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement ("h1");
const paraDiv = document.createElement ("p");

para.textContent = "Hey I`m red!";
para.setAttribute("style", "color: red;");
document.body.appendChild(para);

h3.textContent = "I'm blue h3!";
h3.setAttribute("style", "color:blue;");
document.body.appendChild(h3);


div.setAttribute("style", "border: 1px solid black; background-color: pink;");
document.body.appendChild(div);
h1.textContent = "I'm a div";
div.appendChild(h1);
paraDiv.textContent = "MEE TOO";
div.appendChild(paraDiv);