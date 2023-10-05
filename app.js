
    const noButtons = document.querySelectorAll(".no");
    const yesButton = document.getElementById('yes');
    
    const handleNo = (event) => {
      const noButton = event.currentTarget;
      moveNoButton(noButton);
    };

    noButtons.forEach((button) => {
      button.addEventListener("click", handleNo);
    });

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

