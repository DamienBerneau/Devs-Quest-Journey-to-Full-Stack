'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Items', [
      {
        name: 'Ecran',
        description: "Écran de geek extra-large avec résolution 4K pour une clarté exceptionnelle. Fréquence de rafraîchissement ultra-rapide pour des jeux sans latence. Immergez-vous dans l'action !",
        skills: JSON.stringify({ skill1: 1, skill2: 2 }),
        price: 50,
      },
      {
        name: 'Clavier',
        description: "Clavier de geek ultime avec touches mécaniques pour une précision optimale. Rétroéclairage RVB pour des sessions nocturnes épiques. Votre partenaire de jeu parfait!",
        skills: JSON.stringify({ skill3: 3, skill4: 4 }),
        price: 100,
      },
    ]);
    await queryInterface.bulkInsert('Skills', [
      { name: 'Node.js' },
      { name: 'React' },
      { name: 'Javascript'},
    ]);
    await queryInterface.bulkInsert('Characters', [
      {
        name: 'Auto',
        specialization: 'frontend',
        skills: JSON.stringify(['Node.js','Angular']),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
    await queryInterface.bulkDelete('Skills', null, {});
    await queryInterface.bulkDelete('Characters', null, {});
  }
};
