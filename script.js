const yesButton = document.getElementById('yes');
const noButtons = document.querySelectorAll('.no');

yesButton.addEventListener('click', () => {
  Swal.fire({
    title: 'Ahhh, feliz por poder passar mais um dia com você!!! 😍',
    html: '<img src="Us.jpg" style="max-width: 100%;" />',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector('b');
      const timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
      Swal.getHtmlContainer().addEventListener('click', () => {
        clearInterval(timerInterval);
      });
    },
    willClose: () => {
      // Redirecionamento aqui, após o temporizador expirar
      window.location.href = 'https://www.youtube.com/watch?v=xnkMVbPia3A';
    },
  });
});

noButtons.forEach((button) => {
  button.addEventListener('click', () => {
    Swal.fire({
      title: 'Você clicou em Não Amor? 😭',
      text: 'Prometo que se Clicar em Sim , vamos nos divertir muitoooo!! hahaha',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  });
});

const handleNo = (event) => {
  const noButton = event.currentTarget;
  moveNoButton(noButton);
};

noButtons.forEach((button) => {
  button.addEventListener("click", handleNo);

  button.addEventListener("mouseover", () => {
    moveNoButton(button);
  });

  button.addEventListener("mouseout", () => {
    moveNoButton(button);
  });
});

const moveNoButton = (noButton) => {
  // Verifique a largura da janela antes de executar a animação
  if (window.innerWidth > 600) {
    noButton.style.position = "fixed";

    const rand = Math.random();

    const randTop =
      (rand * window.innerHeight) % (window.innerHeight - noButton.offsetHeight);
    const randLeft =
      (window.innerWidth * rand * 10) % (window.innerWidth - noButton.offsetWidth);

    noButton.style.top = `${randTop}px`;
    noButton.style.left = `${randLeft}px`;
  }
};
