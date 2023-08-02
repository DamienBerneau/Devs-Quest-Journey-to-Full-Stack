// Importer les modules nécessaires ↓

const readline = req('readline');

// Créer une interface pour lire les entrées utilisateur depuis la console ↓

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Définir les spécialisations et leurs compétences de base ↓

const specializations = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
    backend: ['Node.js', 'Express.js', 'SQL'],
    devops: ['Docker', 'Kubernetes', 'CI/CD'],
    datascience: ['Python', 'Machine Learning', 'Data Analysis']
};

// Définir les niveaux, l'XP nécessaire pour passer au niveau suivant et les compétences débloquées à chaque niveau ↓

const levels = [
    { level: 1, xpRequired: 100, unlockedSkills: 1 },
    { level: 2, xpRequired: 200, unlockedSkills: 1 },
    { level: 3, xpRequired: 300, unlockedSkills: 1 },

    // Ajoutez d'autres niveaux ici avec leurs valeurs d'XP et de compétences débloquées ↑
];

// Définir les quêtes et leurs récompenses (XP et argent) ↓

const quests = [
    { name: 'Mission de 3 jours en développement Frontend', xpReward: 500, moneyReward: 1000 },

    // Ajoutez d'autres quêtes ici avec leurs récompenses ↑
];

// Définir les objets et leurs effets ↓

const items = [
    { name: 'Clavier mécanique', effect: 'increaseCodingSpeed' },
    { name: 'Souris de gaming', effect: 'increasePrecision' },
    { name: 'Chaise ergonomique', effect: 'increaseEndurance' },
    { name: 'Écrans multiples', effect: 'increaseMultitasking' }
];

// Créer un objet pour stocker les données du joueur ↓

const player = {
    name: '',
    specialization: '',
    level: 1,
    xp: 0,
    skills: [],
    money: 0,
    items: []
};

// Fonction pour choisir la spécialisation initiale du joueur ↓

function chooseSpecialization() {
    rl.question(
        `Choisissez votre spécialisation initiale parmi : Frontend, Backend, DevOps, Data Science\n`,
        (choice) => {
            if (specializations.hasOwnProperty(choice.toLowerCase())) {
                player.specialization = choice.toLowerCase();
                player.skills = specializations[choice.toLowerCase()];
                console.log(`Vous avez choisi la spécialisation : ${player.specialization}`);
                console.log(`Vos compétences de base sont : ${player.skills.join(', ')}`);
                startGame();
            } else {
                console.log(`Spécialisation invalide. Veuillez choisir parmi les options proposées.`);
                chooseSpecialization();
            }
        }
    );
}

// Fonction pour afficher les informations du joueur ↓

function displayPlayerInfo() {
    console.log(`\n----- Informations du joueur -----`);
    console.log(`Nom : ${player.name}`);
    console.log(`Spécialisation : ${player.specialization}`);
    console.log(`Niveau : ${player.level}`);
    console.log(`XP : ${player.xp}`);
    console.log(`Compétences : ${player.skills.join(', ')}`);
    console.log(`Argent : ${player.money} pièces d'or`);
    console.log(`-----\n`);
}

// Fonction pour gérer les tâches ↓

function handleTasks() { 

    // Logique pour afficher les tâches et gagner de l'XP ↓

    console.log(`Gérer les tâches`);
}

// Fonction pour gérer les quêtes ↓

function handleQuests() {

    // ↑ Logique pour afficher les quêtes et récompenses 

    console.log(`Gérer les quêtes`);
}

// Fonction pour acheter des objets ↓

function buyItem(itemName) {
    const item = items.find((item) => item.name.toLowerCase() === itemName.toLowerCase());
    if (item) {
        player.items.push(item);

        // ↑ Définir les effets des objets ici (augmenter vitesse, XP, etc.)

        console.log(`Vous avez acheté : ${item.name}`);
    } else {
        console.log(`Objet non disponible.`);
    }
}

// Fonction pour initialiser le jeu et saisir le nom du joueur ↓

function initGame() {
    rl.question(`Quel est votre nom?\n`, (name) => {
        player.name = name;
        console.log(`Bonjour, ${player.name}!`);
        chooseSpecialization();
    });
}

// Fonction pour augmenter l'XP du joueur ↓

function increaseXP(amount) {
    player.xp += amount;
    console.log(`Vous avez gagné ${amount} points d'XP!`);

    // Vérifier si le joueur a atteint un nouveau niveau ↓

    const nextLevel = levels.find((level) => player.xp >= level.xpRequired && player.level < level.level);
    if (nextLevel) {
        player.level = nextLevel.level;
        player.skills.push(...specializations[player.specialization].slice(0, nextLevel.unlockedSkills));
        console.log(`Félicitations, vous êtes passé au niveau ${nextLevel.level}!`);
    }
}

// Lancer le jeu ↓ 

initGame();