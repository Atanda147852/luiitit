// Initialisation du Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true, // Activer le loop pour que le carrousel recommence une fois qu'il atteint la fin
    autoplay: {
        delay: 3000, // Le temps entre chaque slide (3 secondes)
        disableOnInteraction: false, // Ne pas désactiver l'autoplay lors d'une interaction avec le Swiper
    },
    pagination: {
        el: '.swiper-pagination', // Élément de pagination sous les slides
        clickable: true, // Permet de cliquer sur les points de la pagination pour changer de slide
    },
    navigation: {
        nextEl: '.swiper-button-next', // Flèche pour passer à la slide suivante
        prevEl: '.swiper-button-prev', // Flèche pour revenir à la slide précédente
    }
});

// Graphique des ventes (Ventes par mois)
const ctx1 = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx1, {
    type: 'line', // Type de graphique : ligne
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Mois
        datasets: [{
            label: 'Ventes', // Légende du graphique
            data: [30, 50, 40, 60, 70], // Données des ventes (ex : Ventes en milliers)
            borderColor: 'rgba(78, 115, 223, 1)', // Couleur de la ligne
            borderWidth: 2, // Largeur de la ligne
            fill: false // Ne pas remplir sous la ligne
        }]
    },
    options: {
        responsive: true, // Le graphique s'adapte aux différentes tailles d'écran
        scales: {
            y: {
                beginAtZero: true // L'axe Y commence à 0
            }
        }
    }
});

// Graphique de la croissance des utilisateurs (Croissance du nombre d'utilisateurs par mois)
const ctx2 = document.getElementById('userGrowthChart').getContext('2d');
const userGrowthChart = new Chart(ctx2, {
    type: 'bar', // Type de graphique : barres
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Mois
        datasets: [{
            label: 'Utilisateurs', // Légende du graphique
            data: [5, 10, 7, 15, 20], // Nombre d'utilisateurs pour chaque mois
            backgroundColor: 'rgba(28, 200, 138, 1)', // Couleur de fond des barres
            borderColor: 'rgba(28, 200, 138, 1)', // Couleur de la bordure des barres
            borderWidth: 2 // Largeur de la bordure
        }]
    },
    options: {
        responsive: true, // Le graphique s'adapte aux différentes tailles d'écran
        scales: {
            y: {
                beginAtZero: true // L'axe Y commence à 0
            }
        }
    }
});
