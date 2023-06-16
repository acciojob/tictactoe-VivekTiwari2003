//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function() {
      var player1 = document.getElementById('player-1').value;
      var player2 = document.getElementById('player-2').value;
      
      if (player1 !== '' && player2 !== '') {
        document.getElementById('player-1').disabled = true;
        document.getElementById('player-2').disabled = true;
        document.getElementById('submit').disabled = true;

        document.querySelector('.message').textContent = player1 + ", you're up!";

        var cells = document.querySelectorAll('.cell');
        cells.forEach(function(cell) {
          cell.addEventListener('click', function() {
            if (this.textContent === '') {
              if (this.classList.contains('x')) {
                this.textContent = 'O';
                this.classList.remove('x');
              } else {
                this.textContent = 'X';
                this.classList.add('x');
              }
              switchPlayers();
              checkWin();
            }
          });
        });
      }
    });
