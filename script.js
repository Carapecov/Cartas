setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 2000);

        function sortearCarta() {
            const nameInput = document.getElementById('name');
            const name = nameInput.value.trim();
            const greeting = document.getElementById('greeting');
            const envelope = document.getElementById('envelope');
            const result = document.getElementById('result');

  
            if (name === '') {
                alert("Por favor, digite seu nome!");
                nameInput.focus();
                return;
            }

            greeting.textContent = `Olá, ${name}! Vamos ver o que o destino lhe reserva...`;

            const number = Math.floor(Math.random() * 3) + 1;

            
            envelope.className = '';
            result.textContent = '';
            envelope.classList.remove('open');

           
            setTimeout(() => {
                envelope.classList.add('open');

                let color = '';
                let heartColor = '';
                let message = '';

                switch(number) {
                    case 1:
                        envelope.classList.add('amor');
                        message = "Carta: Amor!";
                        color = "red";
                        heartColor = "red";
                        break;
                    case 2:
                        envelope.classList.add('paz');
                        message = "Carta: Paz!";
                        color = "blue";
                        heartColor = "blue";
                        break;
                    case 3:
                        envelope.classList.add('felicidade');
                        message = "Carta: Felicidade!";
                        color = "yellow";
                        heartColor = "yellow";
                        break;
                }

                document.getElementById('envelope-back').textContent = message;
                result.textContent = message;

    
                generateHearts(heartColor);
            }, 100);
        }

   
        function generateHearts(color) {
            const container = document.getElementById('card-container');

    
            const existingHearts = document.querySelectorAll('.hearts');
            existingHearts.forEach(heart => heart.remove());

            for (let i = 0; i < 15; i++) {
                const heart = document.createElement('div');
                heart.classList.add('hearts');
                heart.style.color = color;
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.animationDelay = `${Math.random() * 2}s`;
                container.appendChild(heart);
            }
        }