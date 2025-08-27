let totalRaised = 0;
const goal = 50000;

document.getElementById('donationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const amount = parseInt(document.getElementById('amount').value);
  if (amount < 10) return;

  totalRaised += amount;
  if (totalRaised > goal) totalRaised = goal;

  document.getElementById('raised').textContent = totalRaised;

  const progressPercent = (totalRaised / goal) * 100;
  document.getElementById('progress').style.width = progressPercent + '%';

  this.reset();
  alert("Thank you for your donation!");
});
