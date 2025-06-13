// forms.js

document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in, .scroll-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  fadeElements.forEach(el => observer.observe(el));
});

// forms.js

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-in, .scroll-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
});

// Animações ao rolar a página
document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in, .scroll-in");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  fadeInElements.forEach(el => {
    observer.observe(el);
  });
});

// Abertura suave de links externos (opcional, apenas estilo)
const externalLinks = document.querySelectorAll("a[target='_blank']");
externalLinks.forEach(link => {
  link.addEventListener("click", e => {
    const confirmOpen = confirm("Você será redirecionado para o Spotify. Continuar?");
    if (!confirmOpen) {
      e.preventDefault();
    }
  });
});

// forms.js

// Função para ativar animações fade-in nos elementos com a classe .fade-in
function ativarFadeIn() {
  const elementos = document.querySelectorAll('.fade-in');
  elementos.forEach((el, index) => {
    // Delay crescente para efeito cascata
    el.style.animationDelay = `${index * 0.3}s`;
    el.classList.add('animated');
  });
}

// Função para mensagens interativas quando o usuário passa o mouse sobre os destaques
function ativarInteracaoDestaques() {
  const itens = document.querySelectorAll('.sobre ul li');

  itens.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.color = '#6cc33f'; // verde vivo
      item.style.fontWeight = '700';
      item.style.cursor = 'pointer';
      mostrarMensagem(`Você está curtindo ${item.textContent.trim()}! 🎧`);
    });

    item.addEventListener('mouseleave', () => {
      item.style.color = '#c4e7a7';
      item.style.fontWeight = '600';
      esconderMensagem();
    });
  });
}

// Função para mostrar mensagem no rodapé (ou criar um elemento)
function mostrarMensagem(texto) {
  let msgEl = document.getElementById('msg-interativa');
  if (!msgEl) {
    msgEl = document.createElement('div');
    msgEl.id = 'msg-interativa';
    msgEl.style.position = 'fixed';
    msgEl.style.bottom = '20px';
    msgEl.style.left = '50%';
    msgEl.style.transform = 'translateX(-50%)';
    msgEl.style.backgroundColor = '#6cc33fdd';
    msgEl.style.color = '#0b0f0a';
    msgEl.style.padding = '10px 20px';
    msgEl.style.borderRadius = '20px';
    msgEl.style.fontWeight = '700';
    msgEl.style.boxShadow = '0 0 12px #6cc33f';
    msgEl.style.zIndex = '1000';
    msgEl.style.transition = 'opacity 0.4s ease';
    msgEl.style.opacity = '0';
    document.body.appendChild(msgEl);
  }
  msgEl.textContent = texto;
  msgEl.style.opacity = '1';
}

// Função para esconder a mensagem
function esconderMensagem() {
  const msgEl = document.getElementById('msg-interativa');
  if (msgEl) {
    msgEl.style.opacity = '0';
    setTimeout(() => {
      if (msgEl.parentNode) msgEl.parentNode.removeChild(msgEl);
    }, 400);
  }
}

// Inicializa as interações ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  ativarFadeIn();
  ativarInteracaoDestaques();
});

// forms.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Destacar link ativo do menu baseado na URL atual
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    if(link.getAttribute('href') === currentPath){
      link.classList.add('active');
    }
  });

  // 2. Suavizar scroll para âncoras internas (caso tenha)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const targetID = anchor.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);
      if(targetElement){
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 3. Animação on scroll para os cards das bandas
  const bandas = document.querySelectorAll('.banda');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  bandas.forEach(banda => {
    observer.observe(banda);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // --- Ativar o link do menu correspondente à página atual ---
  const currentPage = window.location.pathname.split('/').pop();
  const menuLinks = document.querySelectorAll('nav ul li a');

  menuLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('ativo');
    }
  });

  // --- Criar filtro de busca para as bandas ---
  // Criar input de busca dinamicamente e inserir acima da lista
  const bandasContainer = document.querySelector('.bandas-container');
  const bandasListas = document.querySelectorAll('.bandas-lista');

  const searchDiv = document.createElement('div');
  searchDiv.style.textAlign = 'center';
  searchDiv.style.marginBottom = '20px';

  const searchInput = document.createElement('input');
  searchInput.type = 'search';
  searchInput.placeholder = '🔍 Filtrar bandas pelo nome...';
  searchInput.style.padding = '8px 12px';
  searchInput.style.width = '300px';
  searchInput.style.maxWidth = '90%';
  searchInput.style.borderRadius = '6px';
  searchInput.style.border = '1px solid #28a745';
  searchInput.style.fontSize = '1rem';
  searchInput.style.outline = 'none';
  searchInput.autocomplete = 'off';

  searchDiv.appendChild(searchInput);
  bandasContainer.insertBefore(searchDiv, bandasListas[0]);

  // Mensagem para nenhuma banda encontrada
  const noResultMsg = document.createElement('p');
  noResultMsg.textContent = '😕 Nenhuma banda encontrada.';
  noResultMsg.style.color = '#ff4444';
  noResultMsg.style.fontWeight = '600';
  noResultMsg.style.display = 'none';
  noResultMsg.style.textAlign = 'center';
  bandasContainer.insertBefore(noResultMsg, bandasListas[0].nextSibling);

  searchInput.addEventListener('input', () => {
    const filtro = searchInput.value.toLowerCase();
    let foundAny = false;

    bandasListas.forEach(lista => {
      const bandas = lista.querySelectorAll('.banda');
      bandas.forEach(banda => {
        const nome = banda.querySelector('h4').textContent.toLowerCase();
        if (nome.includes(filtro)) {
          banda.style.display = '';
          foundAny = true;
        } else {
          banda.style.display = 'none';
        }
      });
    });

    noResultMsg.style.display = foundAny ? 'none' : 'block';
  });

  // --- Scroll suave para links internos (caso use âncoras) ---
  menuLinks.forEach(link => {
    if (link.hash) {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.hash)?.scrollIntoView({
          behavior: 'smooth',
        });
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-contato');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // cancela envio padrão

    // Captura os valores
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const assunto = form.assunto.value.trim();
    const mensagem = form.mensagem.value.trim();

    // Função simples para validar email
    function validaEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Validações
    if (nome.length < 3) {
      alert('Por favor, insira seu nome completo (mínimo 3 caracteres).');
      form.nome.focus();
      return;
    }
    if (!validaEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
      form.email.focus();
      return;
    }
    if (mensagem.length < 10) {
      alert('Por favor, escreva uma mensagem com pelo menos 10 caracteres.');
      form.mensagem.focus();
      return;
    }

    // Se tudo ok, simula envio com mensagem de sucesso
    alert('Mensagem enviada com sucesso! Obrigado pelo contato.');

    // Opcional: limpa o formulário
    form.reset();

    // Redireciona para home após 2 segundos
    setTimeout(() => {
      window.location.href = 'contato.html';
    }, 2000);
  });
});

