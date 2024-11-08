function calcolaPrezzo() {
    const nome = document.getElementById('nome').value;
    const km = parseFloat(document.getElementById('km').value);
    const eta = document.getElementById('eta').value;

    if (!nome || isNaN(km) || km <= 0) {
        alert("Inserisci correttamente tutti i dati richiesti.");
        return;
    }

    const prezzoPerKm = 0.21;
    let prezzoBase = km * prezzoPerKm;

    if (eta === 'minorenne') {
        prezzoBase *= 0.8; // Sconto 20%
    } else if (eta === 'over65') {
        prezzoBase *= 0.6; // Sconto 40%
    }

    prezzoBase = prezzoBase.toFixed(2); // Arrotondare a due decimali

    const carrozza = Math.floor(Math.random() * 10) + 1; // Numero casuale tra 1 e 10
    const codiceCP = Math.floor(Math.random() * 100000); 

    document.getElementById('risultato').innerText = `Costo biglietto: ${prezzoBase}€`;
    document.getElementById('recap').innerHTML = `
        <strong>Dettaglio Passeggeri</strong><br>
        Nome Passeggero: ${nome}<br>
        Offerta: Biglietto Standard<br>
        Carrozza: ${carrozza}<br>
        Codice CP: ${codiceCP}<br>
    `;
} 

function resetForm() {
    document.getElementById('nome').value = '';
    document.getElementById('km').value = '';
    document.getElementById('eta').value = 'maggiorenne';
    document.getElementById('risultato').innerText = '';
    document.getElementById('recap').innerHTML = '';
}