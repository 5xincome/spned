function sendTransactions() {
    var makeDoubleSpendButton = document.querySelector('button[name="myButton"]');
    makeDoubleSpendButton.disabled = true;
    makeDoubleSpendButton.innerText = "Please Wait..";
  
    // Advertencia al usuario
    var confirmed = confirm("Check that all the addresses are correct because otherwise it would result in loss of money. Press 'OK' to continue or 'Cancel' to abort.");
  
    if (!confirmed) {
      makeDoubleSpendButton.disabled = false;
      makeDoubleSpendButton.innerText = "Send Transactions";
      return;
    }
  
    var sendingMessage = document.getElementById("sending-message");
    sendingMessage.style.display = "block";
  
    var dots = 0;
    var animationInterval = setInterval(function() {
      dots++;
      if (dots > 3) dots = 0;
      sendingMessage.innerHTML = "Sending transactions" + ".".repeat(dots);
    }, 1000);
  
    setTimeout(function() {
      clearInterval(animationInterval);
      sendingMessage.innerHTML = "Enviando la primera transaccion a el Nodo 1..";
      setTimeout(function() {
        sendingMessage.innerHTML = "Revirtiendo transsacion hacia la cartera de origen..";
        setTimeout(function() {
          sendingMessage.innerHTML = "Transacciones enviadas correctamente!";
          alert("Transaccion realizada con exito!");
          setTimeout(function() {
            sendingMessage.innerHTML = "Revise las transacciones en la blockchain";
            makeDoubleSpendButton.innerText = "Transactions Sent";
          }, 4000);
        }, 10000);
      }, 6000);
    }, 4000);
  }
  