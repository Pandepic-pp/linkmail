function copyScraperCode() {
  const code = `const divs = document.getElementsByClassName("lt-line-clamp--single-line");
const values = Array.from(divs).map(div => div.innerText.trim());
console.log(values);`;

  navigator.clipboard.writeText(code).then(() => {
    const notif = document.createElement('div');
    notif.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 bg-emerald-500 text-black px-8 py-3 rounded-2xl font-medium shadow-2xl';
    notif.textContent = '✓ Code copied! Paste in LinkedIn console';
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2500);
  });
}
