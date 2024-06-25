document.addEventListener('DOMContentLoaded', () => {
    // Exemple d'interaction pour afficher une alerte
    function showAlert(message) {
        const alertBox = document.getElementById('alerts');
        alertBox.textContent = `Alerte : ${message}`;
        alertBox.style.display = 'block';
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 5000);
    }

    // Exemple pour afficher une alerte après 3 secondes
    setTimeout(() => {
        showAlert('Nouveau follower!');
    }, 3000);
});
