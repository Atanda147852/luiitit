$(document).ready(function () {
    // Données du graphique des ventes
    var salesData = {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'], // Mois de l'année
        datasets: [{
            label: 'Ventes (en milliers)', // Légende du graphique
            data: [10, 20, 15, 30, 25, 40], // Données des ventes pour chaque mois
            borderColor: '#0056b3', // Couleur de la bordure du graphique
            backgroundColor: 'rgba(0, 86, 179, 0.2)', // Couleur de fond (transparente)
            borderWidth: 2, // Largeur de la bordure
            fill: true // Remplir sous la ligne du graphique
        }]
    };

    // Initialisation du graphique des ventes
    var salesChart = new Chart($('#salesChart'), {
        type: 'line', // Type de graphique : ligne
        data: salesData,
        options: {
            responsive: true, // Rendre le graphique responsive
            scales: {
                y: {
                    beginAtZero: true // L'axe Y commence à 0
                }
            },
            plugins: {
                tooltip: {
                    enabled: true, // Affichage des tooltips lors du survol des points
                }
            }
        }
    });

    // Données du graphique des utilisateurs
    var usersData = {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'], // Mois de l'année
        datasets: [{
            label: 'Utilisateurs actifs', // Légende du graphique
            data: [100, 200, 150, 300, 250, 400], // Nombre d'utilisateurs actifs pour chaque mois
            borderColor: '#ff8c00', // Couleur de la bordure du graphique
            backgroundColor: 'rgba(255, 140, 0, 0.2)', // Couleur de fond (transparente)
            borderWidth: 2, // Largeur de la bordure
            fill: true // Remplir sous les barres
        }]
    };

    // Initialisation du graphique des utilisateurs
    var usersChart = new Chart($('#usersChart'), {
        type: 'bar', // Type de graphique : barres
        data: usersData,
        options: {
            responsive: true, // Rendre le graphique responsive
            scales: {
                y: {
                    beginAtZero: true // L'axe Y commence à 0
                }
            },
            plugins: {
                tooltip: {
                    enabled: true, // Affichage des tooltips lors du survol des barres
                }
            }
        }
    });

    // Exemple d'actualisation avec AJAX toutes les 10 secondes
    setInterval(function () {
        $.ajax({
            url: 'https://api.example.com/getDashboardData', // Remplace par ton API réelle
            method: 'GET',
            success: function (data) {
                // Mettre à jour les graphiques avec les nouvelles données obtenues depuis l'API
                salesChart.data.datasets[0].data = data.sales; // Mettre à jour les données des ventes
                usersChart.data.datasets[0].data = data.users; // Mettre à jour les données des utilisateurs
                salesChart.update(); // Mettre à jour le graphique des ventes
                usersChart.update(); // Mettre à jour le graphique des utilisateurs
            },
            error: function () {
                console.error("Erreur lors de la récupération des données de l'API.");
            }
        });
    }, 10000); // Actualisation des données toutes les 10 secondes (10000 ms)
});
