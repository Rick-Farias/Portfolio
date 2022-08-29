const saida_1 = document.getElementById("saida-1");
const saida_2 = document.getElementById("saida-2");
const saida_3 = document.getElementById("saida-3");

function digitar(text_1, text_2, text_3, c1, c2, c3) {
  if (c1 < text_1.length) {
    setTimeout(() => {
      saida_1.textContent += text_1.charAt(c1);
      c1++;
      digitar(text_1, text_2, text_3, c1, c2, c3);
    }, 110);
  } else if (c2 < text_2.length) {
    setTimeout(() => {
      saida_2.textContent += text_2.charAt(c2);
      c2++;
      digitar(text_1, text_2, text_3, c1, c2, c3);
    }, 110);
  } else if (c3 < text_3.length) {
    setTimeout(() => {
      saida_3.textContent += text_3.charAt(c3);
      c3++;
      digitar(text_1, text_2, text_3, c1, c2, c3);
    }, 110);
  }
}
digitar("Hello world,", "my name is...", "Riquelme! ", 0, 0, 0);

/* VARIAVEIS DE NIVEL DA LINGUAGEM */

function contador_html(ct, n_html) {
  let html = document.getElementById("ct-html");

  if (ct < n_html) {
    setTimeout(() => {
      html.innerHTML = +`${ct}`;
      ct++;
      contador_html(ct, n_html);
    }, 65);
  }
}
contador_html(0, 96);

function contador_css(ct, n_css) {
  let css = document.getElementById("ct-css");

  if (ct < n_css) {
    setTimeout(() => {
      css.innerHTML = +`${ct}`;
      ct++;
      contador_css(ct, n_css);
    }, 65);
  }
}
contador_css(0, 91);

function contador_js(ct, n_js) {
  let js = document.getElementById("ct-js");

  if (ct < n_js) {
    setTimeout(() => {
      js.innerHTML = +`${ct}`;
      ct++;
      contador_js(ct, n_js);
    }, 65);
  }
}
contador_js(0, 86);

/* Dark mode button */

let btn_mode = document.getElementById("btn-mode");

btn_mode.addEventListener("click", () => {
  let mode_ball = document.getElementById("mode-ball");
  let class_mode_ball = mode_ball.className;

  if (class_mode_ball !== "light") {
    mode_ball.classList.remove("dark");
    mode_ball.classList.add("light");
  } else if (class_mode_ball !== "dark") {
    mode_ball.classList.remove("light");
    mode_ball.classList.add("dark");
  }
  mode();
});

function mode() {
  let mode_ball = document.getElementById("mode-ball");
  let class_mode_ball = mode_ball.className;

  let cor_secundaria = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--cor-secundaria");

  if (class_mode_ball === "light") {
    document.documentElement.style.setProperty("--cor-primaria", "#E8E8ED");
    document.documentElement.style.setProperty("--cor-secundaria", "#051937");
  } else if (class_mode_ball === "dark") {
    document.documentElement.style.setProperty("--cor-primaria", "#051937");
    document.documentElement.style.setProperty("--cor-secundaria", "#E8E8ED");
  }
}
mode();

const btn_menu = document.getElementById("btn-menu");

btn_menu.addEventListener("click", () => {
  const menu_2 = document.getElementById("menu-2");
  menu_2.classList.toggle("menu-on-off");
});



const menuItems = document.querySelectorAll(".menu a, .nome a");
menuItems.forEach(item =>{
  item.addEventListener('click', (event) =>{
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
      top: to - 80,
      behavior: "smooth",
    });
  })
})
