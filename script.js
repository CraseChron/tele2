document.addEventListener("DOMContentLoaded", function () {
  // Saudação dinâmica
  const greetingElement = document.getElementById("saudacao");
  const horaAtual = new Date().getHours();

  let saudacao;

  if (horaAtual < 12) {
    saudacao = "Bom dia!";
  } else if (horaAtual < 18) {
    saudacao = "Boa tarde!";
  } else {
    saudacao = "Boa noite!";
  }

  greetingElement.textContent = saudacao;

  // Efeito de scroll suave
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    });
  });

  // Animação de aparecimento das seções
  const sections = document.querySelectorAll(".section");

  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  }

  // Configuração inicial para animação
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // Verifica ao carregar a página
  checkScroll();

  // Verifica ao rolar
  window.addEventListener("scroll", checkScroll);

  // Efeito hover nos cards de hobbies
  const hobbyCards = document.querySelectorAll(".hobby-card");

  hobbyCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.querySelector("i").style.transform = "scale(1.2)";
    });

    card.addEventListener("mouseleave", function () {
      this.querySelector("i").style.transform = "scale(1)";
    });
  });
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "") {
    alert("Por favor, preencha o campo Nome.");
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  if (mensagem === "") {
    alert("Por favor, escreva uma mensagem.");
    return;
  }

  alert("Mensagem enviada com sucesso!");
  this.reset(); // Limpa os campos após envio
});
