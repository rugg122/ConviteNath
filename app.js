const noButtons = document.querySelectorAll(".no");
const yesButton = document.getElementById('yes');

const handleNo = (event) => {
  const noButton = event.currentTarget;
  moveNoButton(noButton);
};

const moveNoButton = (noButton) => {
  noButton.style.position = "fixed";

  const rand = Math.random();

  const randTop =
    (rand * window.innerHeight) % (window.innerHeight - noButton.offsetHeight);
  const randLeft =
    (window.innerWidth * rand * 10) % (window.innerWidth - noButton.offsetWidth);

  noButton.style.top = `${randTop}px`;
  noButton.style.left = `${randLeft}px`;
};

noButtons.forEach((button) => {
  button.addEventListener("click", handleNo);

  // Adicione os eventos de mouseover e mouseout aqui
  button.addEventListener("mouseover", () => {
    moveNoButton(button); // Chama a função para mover o botão novamente
  });

  button.addEventListener("mouseout", () => {
    button.style.transition = "top 0.5s, left 0.5s"; // Retoma a animação
    moveNoButton(button); // Chama a função para mover o botão novamente
  });
});

yesButton.addEventListener("click", () => {
  let timerInterval;
  Swal.fire({
    title: 'Vencemoooss!!! 😍',
    html: '<img src="Us.jpg" style="max-width: 100%;" />', // Substitua pelo caminho da sua imagem
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector('b');
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      // Redirecionamento aqui, após o temporizador expirar
      window.location.href = 'https://www.youtube.com/watch?v=xnkMVbPia3A';
    }
  }).then((result) => {
    /* Leia mais sobre o tratamento de fechamentos abaixo */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('Fechado pelo temporizador');
    }
  });
});
