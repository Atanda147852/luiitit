<?php
// Assurez-vous de vous connecter à votre base de données avant

// Vérifier si la requête de recherche existe
if (isset($_GET['query'])) {
    $query = $_GET['query'];
    
    // Connexion à la base de données (exemple)
    $pdo = new PDO('mysql:host=localhost;dbname=nom_de_la_base', 'utilisateur', 'mot_de_passe');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Préparer et exécuter la requête SQL (exemple avec une table "produits")
    $stmt = $pdo->prepare("SELECT * FROM produits WHERE nom LIKE :query LIMIT 5");
    $stmt->execute(['query' => '%' . $query . '%']);
    
    // Récupérer les résultats
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Si des résultats sont trouvés, afficher les résultats
    if ($results) {
        foreach ($results as $result) {
            echo '<div class="result-item">' . htmlspecialchars($result['nom']) . '</div>';
        }
    } else {
        echo '<div class="result-item">Aucun résultat trouvé</div>';
    }
}
?>
