// User objects with initial balances
const users = {
    Mario: { balance: 1200.00 },
    Paco: { balance: 1500.00 },
    Luis: { balance: 1700.00 },
    Pedro: { balance: 2200.00 }
  };
  
  // Function to deposit money
  function deposit() {
    const username = document.getElementById('username').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount to deposit.");
      return;
    }
    users[username].balance += amount;
    updateBalance(username);
  }
  
  // Function to withdraw money
  function withdraw() {
    const username = document.getElementById('username').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount to withdraw.");
      return;
    }
    if (amount > users[username].balance) {
      alert("Insufficient funds.");
      return;
    }
    users[username].balance -= amount;
    updateBalance(username);
  }
  
  // Function to check balance
  function checkBalance() {
    const username = document.getElementById('username').value;
    alert(`${username}'s balance: $${users[username].balance.toFixed(2)}`);
  }
  
  // Function to update balance display
  function updateBalance(username) {
    const balanceElement = document.getElementById(`${username}_balance`);
    if (balanceElement) {
      balanceElement.textContent = `$${users[username].balance.toFixed(2)}`;
    }
  }
  
  // Dynamically generate account elements
  window.onload = function() {
    const accountsDiv = document.getElementById('accounts');
    Object.keys(users).forEach(username => {
      const accountDiv = document.createElement('div');
      accountDiv.innerHTML = `<h3>${username}'s Account</h3><p>Balance: <span id="${username}_balance">$${users[username].balance.toFixed(2)}</span></p>`;
      accountsDiv.appendChild(accountDiv);
    });
  };
  