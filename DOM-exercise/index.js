const container = document.querySelector("#container");

const p = document.createElement("p");
p.style.color = 'red';
p.textContent = "Hey I'm red!"

container.appendChild(p);

const h3 = document.createElement("h3");
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);

const div = document.createElement("div");
div.style.border = 'solid';
div.style.borderColor = 'black';
div.style.backgroundColor = 'pink';
div.style.borderWidth = '2px';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);

const divp = document.createElement("p");
divp.textContent = "ME TOO!";
div.appendChild(divp);

container.appendChild(div);
