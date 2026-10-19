const produits = [
  {
    id: 1,
    titre: 'Pizza Margarita',
    prix: 11,
    categorie: 'Pizza',
    motsCles: ['pizza', 'margarita', 'fromage'],
    tags: ['Tomate', 'Champignons', 'Emmental'],
    image:
      'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_640.jpg',
    texte: 'Sauce tomate, mozzarella, champignons et emmental.',
  },
  {
    id: 2,
    titre: 'Burger',
    prix: 10,
    categorie: 'Burger',
    motsCles: ['burger', 'steak', 'sandwich'],
    tags: ['Boeuf', 'Tomate', 'Oignons', 'Cornichons'],
    image:
      'https://cdn.pixabay.com/photo/2024/07/31/04/44/burger-8933592_640.jpg',
    texte: 'Steak haché, crudités et sauce maison.',
  },
  {
    id: 3,
    titre: 'Frites',
    prix: 4,
    categorie: 'Accompagnements',
    motsCles: ['frites', 'pommes de terre'],
    tags: ['Frites', 'Accompagnements'],
    image:
      'https://cdn.pixabay.com/photo/2024/01/23/08/11/ai-generated-8527044_640.jpg',
    texte: 'Pommes de terre fraîches, croustillantes.',
  },
  {
    id: 4,
    titre: 'Club sandwitch + frites',
    prix: 13,
    categorie: 'Burger',
    motsCles: ['club', 'sandwich', 'frites'],
    tags: ['Tomate', 'Frites', 'Emmental'],
    image:
      'https://cdn.pixabay.com/photo/2014/04/03/10/44/sandwich-311262_640.png',
    texte: 'Triple pain, volaille, bacon et frites.',
  },
  {
    id: 5,
    titre: 'Poulet frit',
    prix: 10,
    categorie: 'Poulet frit',
    motsCles: ['poulet', 'frit', 'croustillant'],
    tags: ['Poulet'],
    image:
      'https://cdn.pixabay.com/photo/2023/07/26/16/43/drumstick-8151626_640.jpg',
    texte: 'Morceaux de poulet panés, servis chauds.',
  },
  {
    id: 6,
    titre: 'Kebab rouleau + frites',
    prix: 14,
    categorie: 'Kebab',
    motsCles: ['kebab', 'galette', 'agneau'],
    tags: ['Agneau', 'Frites', 'Oignons'],
    image:
      'https://cdn.pixabay.com/photo/2022/02/04/18/52/doner-kebab-6993381_640.jpg',
    texte: 'Viande d’agneau, crudités, sauce blanche et frites.',
  },
  {
    id: 7,
    titre: 'Pizza 4 fromages',
    prix: 12,
    categorie: 'Pizza',
    motsCles: ['pizza', 'fromage'],
    tags: ['Emmental', 'Champignons'],
    image:
      'https://cdn.pixabay.com/photo/2014/06/10/15/47/pizza-366111_640.jpg',
    texte: 'Mozzarella, emmental, chèvre et bleu.',
  },
  {
    id: 8,
    titre: 'Double burger Menu',
    prix: 15,
    categorie: 'Burger',
    motsCles: ['menu', 'burger', 'boisson'],
    tags: ['Boeuf', 'Menu', 'Frites', 'Cornichons'],
    image:
      'https://cdn.pixabay.com/photo/2024/07/31/04/44/burger-8933592_640.jpg',
    texte: 'Double steak, frites et boisson au choix.',
  },
  {
    id: 9,
    titre: 'Kebab assiette',
    prix: 12,
    categorie: 'Kebab',
    motsCles: ['kebab', 'assiette'],
    tags: ['Agneau', 'Tomate', 'Oignons'],
    image:
      'https://cdn.pixabay.com/photo/2022/02/04/18/52/doner-kebab-6993381_640.jpg',
    texte: 'Viande, salade, frites et sauce.',
  },
  {
    id: 10,
    titre: 'Nuggets poulet (6 pièces)',
    prix: 8,
    categorie: 'Poulet frit',
    motsCles: ['nuggets', 'poulet'],
    tags: ['Poulet', 'Accompagnements'],
    image:
      'https://cdn.pixabay.com/photo/2023/07/26/16/43/drumstick-8151626_640.jpg',
    texte: 'Six nuggets croustillants.',
  },
  {
    id: 11,
    titre: 'Crêpe Nutella',
    prix: 5,
    categorie: 'Desserts',
    motsCles: ['crepe', 'dessert', 'chocolat'],
    tags: ['Crêpe', 'Chantilly'],
    image:
      'https://cdn.pixabay.com/photo/2017/03/13/13/39/pancakes-2139844_640.jpg',
    texte: 'Crêpe garnie Nutella et chantilly.',
  },
  {
    id: 12,
    titre: 'Tiramisu maison',
    prix: 6,
    categorie: 'Desserts',
    motsCles: ['tiramisu', 'cafe'],
    tags: ['Chantilly'],
    image:
      'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_640.jpg',
    texte: 'Dessert italien au mascarpone.',
  },
  {
    id: 13,
    titre: 'Coca-Cola 33cl',
    prix: 2.5,
    categorie: 'Boissons',
    motsCles: ['soda', 'cola'],
    tags: ['Menu'],
    image:
      'https://cdn.pixabay.com/photo/2014/09/26/19/51/drink-462776_640.jpg',
    texte: 'Canette fraîche.',
  },
  {
    id: 14,
    titre: 'Eau minérale 50cl',
    prix: 2,
    categorie: 'Boissons',
    motsCles: ['eau', 'boisson'],
    tags: [],
    image:
      'https://cdn.pixabay.com/photo/2015/08/25/16/12/lime-907124_640.jpg',
    texte: 'Bouteille fraîche.',
  },
  {
    id: 15,
    titre: 'Salade tomates-mozzarella',
    prix: 7,
    categorie: 'Accompagnements',
    motsCles: ['salade', 'entree', 'leger'],
    tags: ['Tomate', 'Emmental'],
    image:
      'https://cdn.pixabay.com/photo/2021/01/10/04/37/salad-5904093_640.jpg',
    texte: 'Tomates, mozzarella et basilic.',
  },
  {
    id: 16,
    titre: 'Pizza poulet champignons',
    prix: 13,
    categorie: 'Pizza',
    motsCles: ['pizza', 'poulet'],
    tags: ['Poulet', 'Champignons', 'Emmental'],
    image:
      'https://cdn.pixabay.com/photo/2014/04/02/14/12/pizza-306495_640.png',
    texte: 'Poulet grillé et champignons sur pâte fine.',
  },
]

export default produits
