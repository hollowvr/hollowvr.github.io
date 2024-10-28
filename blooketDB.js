/*
BlooketDB © 2024 by hollowvr is licensed under CC BY-SA 4.0
(including comment serves as attribution)

INSTRUCIONS
in your html include:
<script src="https://hollowvr.github.io/blooketDB.js" />
or in html paste ENTIRE script inside <script> tag:
*/
const BDB = {
  blooks: {},
  pack: {
    farmanimal: {
      name: "Farm Animal Pack",
      cost: 0,
      packArt: "",
      blooks: []
    },
    pet: {
      name: "Pet Pack",
      cost: 0,
      packArt: "",
      blooks: []
    },
    forestanimal: {
      name: "Forest Animal Pack",
      cost: 0,
      packArt: "",
      blooks: []
    },
    tropicalanimal: {
      name: "Tropical Animal Pack",
      cost: 0,
      packArt: "",
      blooks: []
    },
    arcticanimal: {
      name: "Arctic Pack",
      cost: 0,
      packArt: "",
      blooks: []
    },
    aquatic: {
      name: "Aquatic Pack",
      cost: 20,
      packArt: "https://ac.blooket.com/dashclassic/assets/Aquatic_Pack-jzoFduWG.png",
      blooks: []
    },
    blizzard: {
      name: "Blizzard Pack",
      cost: 25,
      packArt: "https://ac.blooket.com/dashclassic/assets/Aquatic_Pack-jzoFduWG.png",
      blooks: []
    },
    bot: {
      name: "Bot Pack",
      cost: 20,
      packArt: "https://ac.blooket.com/dashclassic/assets/Bot_Pack-DH_cssp8.png",
      blooks: []
    },
    breakfast: {
      name: "Breakfast Pack",
      cost: 20,
      packArt: "https://ac.blooket.com/dashclassic/assets/Breakfast_Pack-Dbk28uOc.png",
      blooks: []
    },
    dino: {
      name: "Dino Pack",
      cost: 25,
      packArt: "https://ac.blooket.com/dashclassic/assets/Dino_Pack-DAApPtRS.png",
      blooks: []
    },
    icemonsters: {
      name: "Ice Monsters Pack",
      cost: 25,
      packArt: "https://ac.blooket.com/dashclassic/assets/Ice_Monsters_Pack-BkSPnfqh.png",
      blooks: []
    },
    medieval: {
      name: "Medieval Pack",
      cost: 20,
      packArt: "https://ac.blooket.com/dashclassic/assets/Medieval_Pack-Cv60cQFL.png",
      blooks: []
    },
    outback: {
      name: "Outback Pack",
      cost: 25,
      packArt: "https://ac.blooket.com/dashclassic/assets/Outback_Pack-Y8OWSe8a.png",
      blooks: []
    },
    pirate: {
      name: "Pirate Pack",
      cost: 25,
      packArt: "https://ac.blooket.com/dashclassic/assets/Pirate_Pack-Uir9GffU.png",
      blooks: []
    },
    safari: {
      name: "Safari Pack",
      cost: 20,
      packArt: "https://ac.blooket.com/dashclassic/assets/Safari_Pack-CH238vQG.png",
      blooks: []
    },
    space: {
      name: "Space Pack",
      cost: 20,
      packArt: "https://ac.blooket.com/dashclassic/assets/Space_Pack-Ck3VoVFZ.png",
      blooks: []
    },
    spooky: {
      name: "Spooky Pack",
      cost: 25,
      packArt: "https://ac.blooket.com/dashclassic/assets/Spooky_Pack-B3my0xUo.png",
      blooks: []
    },
    wonderland: {
      name: "Wonderland Pack",
      cost: 20,
      packArt: "https://ac.blooket.com/dashclassic/assets/Wonderland_Pack-CaB8iqtb.png",
      blooks: []
    }
  }
};
BDB.blooks = {
  "Chick": {
    name: "Chick",
    pack: BDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/chick.svg"
  },
  "Chicken": {
    name: "Chicken",
    pack: BDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/chicken.svg"
  },
  "Cow": {
    name: "Cow",
    pack: BDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/cow.svg"
  },
  "Goat": {
    name: "Goat",
    pack: BDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/goat.svg"
  },
  "Horse": {
    name: "Horse",
    pack: BDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/horse.svg"
  },
  "Pig": {
    name: "Pig",
    pack: BDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/pig.svg"
  },
  "Sheep": {
    name: "Sheep",
    pack: BDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/sheep.svg"
  },
  "Duck": {
    name: "Duck",
    pack: BDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/duck.svg"
  },
  "Alpaca": {
    name: "Alpaca",
    pack: BDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/alpaca.svg"
  },
  "Dog": {
    name: "Dog",
    pack: BDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/dog.svg"
  },
  "Cat": {
    name: "Cat",
    pack: BDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/cat.svg"
  },
  "Rabbit": {
    name: "Rabbit",
    pack: BDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/rabbit.svg"
  },
  "Goldfish": {
    name: "Goldfish",
    pack: BDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/goldfish.svg"
  },
  "Hamster": {
    name: "Hamster",
    pack: BDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/hamster.svg"
  },
  "Turtle": {
    name: "Turtle",
    pack: BDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/turtle.svg"
  },
  "Kitten": {
    name: "Kitten",
    pack: BDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/kitten.svg"
  },
  "Puppy": {
    name: "Puppy",
    pack: BDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/puppy.svg"
  },
  "Bear": {
    name: "Bear",
    pack: BDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/bear.svg"
  },
  "Moose": {
    name: "Moose",
    pack: BDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/moose.svg"
  },
  "Fox": {
    name: "Fox",
    pack: BDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/fox.svg"
  },
  "Raccoon": {
    name: "Raccoon",
    pack: BDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/raccoon.svg"
  },
  "Squirrel": {
    name: "Squirrel",
    pack: BDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/squirrel.svg"
  },
  "Owl": {
    name: "Owl",
    pack: BDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/owl.svg"
  },
  "Hedgehog": {
    name: "Hedgehog",
    pack: BDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/hedgehog.svg"
  },
  "Deer": {
    name: "Deer",
    pack: BDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/deer.svg"
  },
  "Wolf": {
    name: "Wolf",
    pack: BDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/wolf.svg"
  },
  "Beaver": {
    name: "Beaver",
    pack: BDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/beaver.svg"
  },
  "Tiger": {
    name: "Tiger",
    pack: BDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/tiger.svg"
  },
  "Orangutan": {
    name: "Orangutan",
    pack: BDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/orangutan.svg"
  },
  "Cockatoo": {
    name: "Cockatoo",
    pack: BDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/cockatoo.svg"
  },
  "Parrot": {
    name: "Parrot",
    pack: BDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/parrot.svg"
  },
  "Anaconda": {
    name: "Anaconda",
    pack: BDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/anaconda.svg"
  },
  "Jaguar": {
    name: "Jaguar",
    pack: BDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/jaguar.svg"
  },
  "Macaw": {
    name: "Macaw",
    pack: BDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/macaw.svg"
  },
  "Toucan": {
    name: "Toucan",
    pack: BDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/toucan.svg"
  },
  "Panther": {
    name: "Panther",
    pack: BDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/panther.svg"
  },
  "Capuchin": {
    name: "Capuchin",
    pack: BDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/capuchin.svg"
  },
  "Gorilla": {
    name: "Gorilla",
    pack: BDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/gorilla.svg"
  },
  "Hippo": {
    name: "Hippo",
    pack: BDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/hippo.svg"
  },
  "Rhino": {
    name: "Rhino",
    pack: BDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/rhino.svg"
  },
  "Giraffe": {
    name: "Giraffe",
    pack: BDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/giraffe.svg"
  },
  "Snowy Owl": {
    name: "Snowy Owl",
    pack: BDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/snowyowl.svg"
  },
  "Polar Bear": {
    name: "Polar Bear",
    pack: BDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/polarbear.svg"
  },
  "Arctic Fox": {
    name: "Arctic Fox",
    pack: BDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/arcticfox.svg"
  },
  "Baby Penguin": {
    name: "Baby Penguin",
    pack: BDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/babypenguin.svg"
  },
  "Penguin": {
    name: "Penguin",
    pack: BDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/penguin.svg"
  },
  "Arctic Hare": {
    name: "Arctic Hare",
    pack: BDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/arctichare.svg"
  },
  "Seal": {
    name: "Seal",
    pack: BDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/seal.svg"
  },
  "Walrus": {
    name: "Walrus",
    pack: BDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/walrus.svg"
  },
  "Old Boot": {
    name: "Old Boot",
    pack: BDB.pack.aquatic,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/oldboot.svg"
  },
  "Jellyfish": {
    name: "Jellyfish",
    pack: BDB.pack.aquatic,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/jellyfish.svg"
  },
  "Clownfish": {
    name: "Clownfish",
    pack: BDB.pack.aquatic,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/clownfish.svg"
  },
  "Frog": {
    name: "Frog",
    pack: BDB.pack.aquatic,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/frog.svg"
  },
  "Crab": {
    name: "Crab",
    pack: BDB.pack.aquatic,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/crab.svg"
  },
  "Pufferfish": {
    name: "Pufferfish",
    pack: BDB.pack.aquatic,
    rarity: 0.061,
    icon: "https://ac.blooket.com/marketassets/blooks/pufferfish.svg"
  },
  "Blobfish": {
    name: "Blobfish",
    pack: BDB.pack.aquatic,
    rarity: 0.061,
    icon: "https://ac.blooket.com/marketassets/blooks/blobfish.svg"
  },
  "Octopus": {
    name: "Octopus",
    pack: BDB.pack.aquatic,
    rarity: 0.061,
    icon: "https://ac.blooket.com/marketassets/blooks/octopus.svg"
  },
  "Narwhal": {
    name: "Narwhal",
    pack: BDB.pack.aquatic,
    rarity: 0.03,
    icon: "https://ac.blooket.com/marketassets/blooks/narwhal.svg"
  },
  "Dolphin": {
    name: "Dolphin",
    pack: BDB.pack.aquatic,
    rarity: 0.03,
    icon: "https://ac.blooket.com/marketassets/blooks/dolphin.svg"
  },
  "Baby Shark": {
    name: "Baby Shark",
    pack: BDB.pack.aquatic,
    rarity: 0.005,
    icon: "https://ac.blooket.com/marketassets/blooks/babyshark.svg"
  },
  "Megalodon": {
    name: "Megalodon",
    pack: BDB.pack.aquatic,
    rarity: 0.002,
    icon: "https://ac.blooket.com/marketassets/blooks/megalodon.svg"
  },
  "Snow Globe": {
    name: "Snow Globe",
    pack: BDB.pack.blizzard,
    rarity: 0.145,
    icon: "https://ac.blooket.com/marketassets/blooks/snowglobe.svg"
  },
  "Holiday Gift": {
    name: "Holiday Gift",
    pack: BDB.pack.blizzard,
    rarity: 0.145,
    icon: "https://ac.blooket.com/marketassets/blooks/holidaygift.svg"
  },
  "Hot Chocolate": {
    name: "Hot Chocolate",
    pack: BDB.pack.blizzard,
    rarity: 0.145,
    icon: "https://ac.blooket.com/marketassets/blooks/hotchocolate.svg"
  },
  "Holiday Wreath": {
    name: "Holiday Wreath",
    pack: BDB.pack.blizzard,
    rarity: 0.145,
    icon: "https://ac.blooket.com/marketassets/blooks/holidaywreath.svg"
  },
  "Stocking": {
    name: "Stocking",
    pack: BDB.pack.blizzard,
    rarity: 0.145,
    icon: "https://ac.blooket.com/marketassets/blooks/stocking.svg"
  },
  "Gingerbread Man": {
    name: "Gingerbread Man",
    pack: BDB.pack.blizzard,
    rarity: 0.071,
    icon: "https://ac.blooket.com/marketassets/blooks/gingerbreadman.svg"
  },
  "Gingerbread House": {
    name: "Gingerbread House",
    pack: BDB.pack.blizzard,
    rarity: 0.071,
    icon: "https://ac.blooket.com/marketassets/blooks/gingerbreadhouse.svg"
  },
  "Reindeer": {
    name: "Reindeer",
    pack: BDB.pack.blizzard,
    rarity: 0.071,
    icon: "https://ac.blooket.com/marketassets/blooks/reindeer.svg"
  },
  "Snowman": {
    name: "Snowman",
    pack: BDB.pack.blizzard,
    rarity: 0.0515,
    icon: "https://ac.blooket.com/marketassets/blooks/snowman.svg"
  },
  "Sant Claus": {
    name: "Sant Claus",
    pack: BDB.pack.blizzard,
    rarity: 0.01,
    icon: "https://ac.blooket.com/marketassets/blooks/santaclaus.svg"
  },
  "Red Sweater Snowman": {
    name: "Red Sweater Snowman",
    pack: BDB.pack.blizzard,
    rarity: 0.0002,
    icon: "https://ac.blooket.com/marketassets/blooks/redsweatersnowman.svg"
  },
  "Blue Sweater Snowman": {
    name: "Blue Sweater Snowman",
    pack: BDB.pack.blizzard,
    rarity: 0.0002,
    icon: "https://ac.blooket.com/marketassets/blooks/bluesweatersnowman.svg"
  },
  "Elf Sweater Snowman": {
    name: "Elf Sweater Snowman",
    pack: BDB.pack.blizzard,
    rarity: 0.0001,
    icon: "https://ac.blooket.com/marketassets/blooks/elfsweatersnowman.svg"
  },
  "Lil Bot": {
    name: "Lil Bot",
    pack: BDB.pack.bot,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/lilbot.svg"
  },
  "Lovely Bot": {
    name: "Lovely Bot",
    pack: BDB.pack.bot,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/lovelybot.svg"
  },
  "Angry Bot": {
    name: "Angry Bot",
    pack: BDB.pack.bot,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/angrybot.svg"
  },
  "Happy Bot": {
    name: "Happy Bot",
    pack: BDB.pack.bot,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/happybot.svg"
  },
  "Watson": {
    name: "Watson",
    pack: BDB.pack.bot,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/watson.svg"
  },
  "Buddy Bot": {
    name: "Buddy Bot",
    pack: BDB.pack.bot,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/buddybot.svg"
  },
  "Brainy Bot": {
    name: "Brainy Bot",
    pack: BDB.pack.bot,
    rarity: 0.037,
    icon: "https://ac.blooket.com/marketassets/blooks/brainybot.svg"
  },
  "Mega Bot": {
    name: "Mega Bot",
    pack: BDB.pack.bot,
    rarity: 0.003,
    icon: "https://ac.blooket.com/marketassets/blooks/megabot.svg"
  },
  "Toast": {
    name: "Toast",
    pack: BDB.pack.breakfast,
    rarity: 0.125,
    icon: "https://ac.blooket.com/marketassets/blooks/toast.svg"
  },
  "Cereal": {
    name: "Cereal",
    pack: BDB.pack.breakfast,
    rarity: 0.125,
    icon: "https://ac.blooket.com/marketassets/blooks/cereal.svg"
  },
  "Yogurt": {
    name: "Yogurt",
    pack: BDB.pack.breakfast,
    rarity: 0.125,
    icon: "https://ac.blooket.com/marketassets/blooks/yogurt.svg"
  },
  "Breakfast Combo": {
    name: "Breakfast Combo",
    pack: BDB.pack.breakfast,
    rarity: 0.125,
    icon: "https://ac.blooket.com/marketassets/blooks/breakfastcombo.svg"
  },
  "Orange Juice": {
    name: "Orange Juice",
    pack: BDB.pack.breakfast,
    rarity: 0.125,
    icon: "https://ac.blooket.com/marketassets/blooks/orangejuice.svg"
  },
  "Milk": {
    name: "Milk",
    pack: BDB.pack.breakfast,
    rarity: 0.125,
    icon: "https://ac.blooket.com/marketassets/blooks/milk.svg"
  },
  "Waffle": {
    name: "Waffle",
    pack: BDB.pack.breakfast,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/waffle.svg"
  },
  "Pancakes": {
    name: "Pancakes",
    pack: BDB.pack.breakfast,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/pancakes.svg"
  },
  "French Toast": {
    name: "French Toast",
    pack: BDB.pack.breakfast,
    rarity: 0.05,
    icon: "https://ac.blooket.com/marketassets/blooks/frenchtoast.svg"
  },
  "Pizza": {
    name: "Pizza",
    pack: BDB.pack.breakfast,
    rarity: 0.02,
    icon: "https://ac.blooket.com/marketassets/blooks/pizza.svg"
  },
  "Amber": {
    name: "Amber",
    pack: BDB.pack.dino,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/amber.svg"
  },
  "Dino Egg": {
    name: "Dino Egg",
    pack: BDB.pack.dino,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/dinoegg.svg"
  },
  "Dino Fossil": {
    name: "Dino Fossil",
    pack: BDB.pack.dino,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/dinofossil.svg"
  },
  "Stegosaurus": {
    name: "Stegosaurus",
    pack: BDB.pack.dino,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/stegosaurus.svg"
  },
  "Velociraptor": {
    name: "Velociraptor",
    pack: BDB.pack.dino,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/velociraptor.svg"
  },
  "Brontosaurus": {
    name: "Brontosaurus",
    pack: BDB.pack.dino,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/brontosaurus.svg"
  },
  "Triceratops": {
    name: "Triceratops",
    pack: BDB.pack.dino,
    rarity: 0.037,
    icon: "https://ac.blooket.com/marketassets/blooks/triceratops.svg"
  },
  "Tyrannosaurus Rex": {
    name: "Tyrannosaurus Rex",
    pack: BDB.pack.dino,
    rarity: 0.003,
    icon: "https://ac.blooket.com/marketassets/blooks/tyrannosaurusrex.svg"
  },
  "Ice Bat": {
    name: "Ice Bat",
    pack: BDB.pack.icemonsters,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/icebat.svg"
  },
  "Ice Bug": {
    name: "Ice Bug",
    pack: BDB.pack.icemonsters,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/icebug.svg"
  },
  "Ice Elemental": {
    name: "Ice Elemental",
    pack: BDB.pack.icemonsters,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/iceelemental.svg"
  },
  "Rock Monster": {
    name: "Rock Monster",
    pack: BDB.pack.icemonsters,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/rockmonster.svg"
  },
  "Dink": {
    name: "Dink",
    pack: BDB.pack.icemonsters,
    rarity: 0.085,
    icon: "https://ac.blooket.com/marketassets/blooks/dink.svg"
  },
  "Donk": {
    name: "Donk",
    pack: BDB.pack.icemonsters,
    rarity: 0.085,
    icon: "https://ac.blooket.com/marketassets/blooks/donk.svg"
  },
  "Bush Monster": {
    name: "Bush Monster",
    pack: BDB.pack.icemonsters,
    rarity: 0.045,
    icon: "https://ac.blooket.com/marketassets/blooks/bushmonster.svg"
  },
  "Yeti": {
    name: "Yeti",
    pack: BDB.pack.icemonsters,
    rarity: 0.0035,
    icon: "https://ac.blooket.com/marketassets/blooks/yeti.svg"
  },
  "Ice Slime": {
    name: "Ice Slime",
    pack: BDB.pack.icemonsters,
    rarity: 0.0008,
    icon: "https://ac.blooket.com/marketassets/blooks/iceslime.svg"
  },
  "Frozen Fossil": {
    name: "Frozen Fossil",
    pack: BDB.pack.icemonsters,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/frozenfossil.svg"
  },
  "Ice Crab": {
    name: "Ice Crab",
    pack: BDB.pack.icemonsters,
    rarity: 0.0002,
    icon: "https://ac.blooket.com/marketassets/blooks/icecrab.svg"
  },
  "Elf": {
    name: "Elf",
    pack: BDB.pack.medieval,
    rarity: 0.134,
    icon: "https://ac.blooket.com/marketassets/blooks/elf.svg"
  },
  "Witch": {
    name: "Witch",
    pack: BDB.pack.medieval,
    rarity: 0.134,
    icon: "https://ac.blooket.com/marketassets/blooks/witch.svg"
  },
  "Wizard": {
    name: "Wizard",
    pack: BDB.pack.medieval,
    rarity: 0.134,
    icon: "https://ac.blooket.com/marketassets/blooks/wizard.svg"
  },
  "Fairy": {
    name: "Fairy",
    pack: BDB.pack.medieval,
    rarity: 0.134,
    icon: "https://ac.blooket.com/marketassets/blooks/fairy.svg"
  },
  "Slime Monster": {
    name: "Slime Monster",
    pack: BDB.pack.medieval,
    rarity: 0.134,
    icon: "https://ac.blooket.com/marketassets/blooks/slimemonster.svg"
  },
  "Jester": {
    name: "Jester",
    pack: BDB.pack.medieval,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/jester.svg"
  },
  "Dragon": {
    name: "Dragon",
    pack: BDB.pack.medieval,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/dragon.svg"
  },
  "Queen": {
    name: "Queen",
    pack: BDB.pack.medieval,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/queen.svg"
  },
  "Unicorn": {
    name: "Unicorn",
    pack: BDB.pack.medieval,
    rarity: 0.05,
    icon: "https://ac.blooket.com/marketassets/blooks/unicorn.svg"
  },
  "King": {
    name: "King",
    pack: BDB.pack.medieval,
    rarity: 0.01,
    icon: "https://ac.blooket.com/marketassets/blooks/king.svg"
  },
  "Panda": {
    name: "Panda",
    pack: BDB.pack.safari,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/panda.svg"
  },
  "Sloth": {
    name: "Sloth",
    pack: BDB.pack.safari,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/sloth.svg"
  },
  "Tenrec": {
    name: "Tenrec",
    pack: BDB.pack.safari,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/tenrec.svg"
  },
  "Flamingo": {
    name: "Flamingo",
    pack: BDB.pack.safari,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/flamingo.svg"
  },
  "Zebra": {
    name: "Zebra",
    pack: BDB.pack.safari,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/zebra.svg"
  },
  "Elephant": {
    name: "Elephant",
    pack: BDB.pack.safari,
    rarity: 0.07,
    icon: "https://ac.blooket.com/marketassets/blooks/elephant.svg"
  },
  "Lemur": {
    name: "Lemur",
    pack: BDB.pack.safari,
    rarity: 0.07,
    icon: "https://ac.blooket.com/marketassets/blooks/lemur.svg"
  },
  "Peacock": {
    name: "Peacock",
    pack: BDB.pack.safari,
    rarity: 0.07,
    icon: "https://ac.blooket.com/marketassets/blooks/peacock.svg"
  },
  "Chameleon": {
    name: "Chameleon",
    pack: BDB.pack.safari,
    rarity: 0.0348,
    icon: "https://ac.blooket.com/marketassets/blooks/chameleon.svg"
  },
  "Lion": {
    name: "Lion",
    pack: BDB.pack.safari,
    rarity: 0.005,
    icon: "https://ac.blooket.com/marketassets/blooks/lion.svg"
  },
  "Rainbow Panda": {
    name: "Rainbow Panda",
    pack: BDB.pack.safari,
    rarity: 0.0002,
    icon: "https://ac.blooket.com/marketassets/blooks/rainbowpanda.svg"
  },
  "Earth": {
    name: "Earth",
    pack: BDB.pack.space,
    rarity: 0.1875,
    icon: "https://ac.blooket.com/marketassets/blooks/earth.svg"
  },
  "Meteor": {
    name: "Meteor",
    pack: BDB.pack.space,
    rarity: 0.1875,
    icon: "https://ac.blooket.com/marketassets/blooks/meteor.svg"
  },
  "Stars": {
    name: "Stars",
    pack: BDB.pack.space,
    rarity: 0.1875,
    icon: "https://ac.blooket.com/marketassets/blooks/stars.svg"
  },
  "Alien": {
    name: "Alien",
    pack: BDB.pack.space,
    rarity: 0.1875,
    icon: "https://ac.blooket.com/marketassets/blooks/alien.svg"
  },
  "Planet": {
    name: "Planet",
    pack: BDB.pack.space,
    rarity: 0.1,
    icon: "https://ac.blooket.com/marketassets/blooks/planet.svg"
  },
  "UFO": {
    name: "UFO",
    pack: BDB.pack.space,
    rarity: 0.1,
    icon: "https://ac.blooket.com/marketassets/blooks/ufo.svg"
  },
  "Spaceship": {
    name: "Spaceship",
    pack: BDB.pack.space,
    rarity: 0.045,
    icon: "https://ac.blooket.com/marketassets/blooks/spaceship.svg"
  },
  "Astronaut": {
    name: "Astronaut",
    pack: BDB.pack.space,
    rarity: 0.0045,
    icon: "https://ac.blooket.com/marketassets/blooks/astronaut.svg"
  },
  "Pink Astronaut": {
    name: "Pink Astronaut",
    pack: BDB.pack.space,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/pinkastronaut.svg"
  },
  "Yellow Astronaut": {
    name: "Yellow Astronaut",
    pack: BDB.pack.space,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/yellowastronaut.svg"
  },
  "Black Astronaut": {
    name: "Black Astronaut",
    pack: BDB.pack.space,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/blackastronaut.svg"
  },
  "Orange Astronaut": {
    name: "Orange Astronaut",
    pack: BDB.pack.space,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/orangeastronaut.svg"
  },
  "Red Astronaut": {
    name: "Red Astronaut",
    pack: BDB.pack.space,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/redastronaut.svg"
  },
  "Brown Astronaut": {
    name: "Brown Astronaut",
    pack: BDB.pack.space,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/brownastronaut.svg"
  },
  "Green Astronaut": {
    name: "Green Astronaut",
    pack: BDB.pack.space,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/greenastronaut.svg"
  },
  "Pumpkin": {
    name: "Pumpkin",
    pack: BDB.pack.spooky,
    rarity: 0.19,
    icon: "https://ac.blooket.com/marketassets/blooks/pumpkin.svg"
  },
  "Swamp Monster": {
    name: "Swamp Monster",
    pack: BDB.pack.spooky,
    rarity: 0.19,
    icon: "https://ac.blooket.com/marketassets/blooks/swampmonster.svg"
  },
  "Frankenstein": {
    name: "Frankenstein",
    pack: BDB.pack.spooky,
    rarity: 0.19,
    icon: "https://ac.blooket.com/marketassets/blooks/frankenstein.svg"
  },
  "Vampire": {
    name: "Vampire",
    pack: BDB.pack.spooky,
    rarity: 0.19,
    icon: "https://ac.blooket.com/marketassets/blooks/vampire.svg"
  },
  "Zombie": {
    name: "Zombie",
    pack: BDB.pack.spooky,
    rarity: 0.04,
    icon: "https://ac.blooket.com/marketassets/blooks/zombie.svg"
  },
  "Mummy": {
    name: "Mummy",
    pack: BDB.pack.spooky,
    rarity: 0.04,
    icon: "https://ac.blooket.com/marketassets/blooks/mummy.svg"
  },
  "Caramel Apple": {
    name: "Caramel Apple",
    pack: BDB.pack.spooky,
    rarity: 0.04,
    icon: "https://ac.blooket.com/marketassets/blooks/caramelapple.svg"
  },
  "Candy Corn": {
    name: "Candy Corn",
    pack: BDB.pack.spooky,
    rarity: 0.04,
    icon: "https://ac.blooket.com/marketassets/blooks/candycorn.svg"
  },
  "Crow": {
    name: "Crow",
    pack: BDB.pack.spooky,
    rarity: 0.04,
    icon: "https://ac.blooket.com/marketassets/blooks/crow.svg"
  },
  "Werewolf": {
    name: "Werewolf",
    pack: BDB.pack.spooky,
    rarity: 0.0329,
    icon: "https://ac.blooket.com/marketassets/blooks/werewolf.svg"
  },
  "Ghost": {
    name: "Ghost",
    pack: BDB.pack.spooky,
    rarity: 0.0065,
    icon: "https://ac.blooket.com/marketassets/blooks/ghost.svg"
  },
  "Red Gummy Bear": {
    name: "Red Gummy Bear",
    pack: BDB.pack.spooky,
    rarity: 0.0002,
    icon: "https://ac.blooket.com/marketassets/blooks/redgummybear.svg"
  },
  "Green Gummy Bear": {
    name: "Green Gummy Bear",
    pack: BDB.pack.spooky,
    rarity: 0.0002,
    icon: "https://ac.blooket.com/marketassets/blooks/greengummybear.svg"
  },
  "Blue Gummy Bear": {
    name: "Blue Gummy Bear",
    pack: BDB.pack.spooky,
    rarity: 0.0002,
    icon: "https://ac.blooket.com/marketassets/blooks/bluegummybear.svg"
  },
  "Two of Spades": {
    name: "Two of Spades",
    pack: BDB.pack.wonderland,
    rarity: 0.152,
    icon: "https://ac.blooket.com/marketassets/blooks/twoofspades.svg"
  },
  "Eat Me": {
    name: "Eat Me",
    pack: BDB.pack.wonderland,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/eat.svg"
  },
  "Drink Me": {
    name: "Drink Me",
    pack: BDB.pack.wonderland,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/drink.svg"
  },
  "Alice": {
    name: "Alice",
    pack: BDB.pack.wonderland,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/alice.svg"
  },
  "Queen of Hearts": {
    name: "Queen of Hearts",
    pack: BDB.pack.wonderland,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/queenofhearts.svg"
  },
  "Dormouse": {
    name: "Dormouse",
    pack: BDB.pack.wonderland,
    rarity: 0.065,
    icon: "https://ac.blooket.com/marketassets/blooks/dormouse.svg"
  },
  "White Rabbit": {
    name: "White Rabbit",
    pack: BDB.pack.wonderland,
    rarity: 0.065,
    icon: "https://ac.blooket.com/marketassets/blooks/whiterabbit.svg"
  },
  "Cheshire Cat": {
    name: "Cheshire Cat",
    pack: BDB.pack.wonderland,
    rarity: 0.065,
    icon: "https://ac.blooket.com/marketassets/blooks/cheshirecat.svg"
  },
  "Caterpillar": {
    name: "Caterpillar",
    pack: BDB.pack.wonderland,
    rarity: 0.025,
    icon: "https://ac.blooket.com/marketassets/blooks/caterpillar.svg"
  },
  "Mad Hatter": {
    name: "Mad Hatter",
    pack: BDB.pack.wonderland,
    rarity: 0.025,
    icon: "https://ac.blooket.com/marketassets/blooks/madhatter.svg"
  },
  "King of Hearts": {
    name: "King of Hearts",
    pack: BDB.pack.wonderland,
    rarity: 0.003,
    icon: "https://ac.blooket.com/marketassets/blooks/kingofhearts.svg"
  },
};

BDB.pack.farmanimal.blooks = [
  BDB.blooks["Chick"],
  BDB.blooks["Chicken"],
  BDB.blooks["Cow"],
  BDB.blooks["Goat"],
  BDB.blooks["Horse"],
  BDB.blooks["Pig"],
  BDB.blooks["Sheep"],
  BDB.blooks["Duck"],
  BDB.blooks["Alpaca"]
];
BDB.pack.pet.blooks = [
  BDB.blooks["Dog"],
  BDB.blooks["Cat"],
  BDB.blooks["Rabbit"],
  BDB.blooks["Goldfish"],
  BDB.blooks["Hamster"],
  BDB.blooks["Turtle"],
  BDB.blooks["Kitten"],
  BDB.blooks["Puppy"]
];
BDB.pack.forestanimal.blooks = [
  BDB.blooks["Bear"],
  BDB.blooks["Moose"],
  BDB.blooks["Fox"],
  BDB.blooks["Raccoon"],
  BDB.blooks["Squirrel"],
  BDB.blooks["Owl"],
  BDB.blooks["Hedgehog"],
  BDB.blooks["Deer"],
  BDB.blooks["Wolf"],
  BDB.blooks["Beaver"]
];

BDB.pack.tropicalanimal.blooks = [
  BDB.blooks["Tiger"],
  BDB.blooks["Orangutan"],
  BDB.blooks["Cockatoo"],
  BDB.blooks["Parrot"],
  BDB.blooks["Anaconda"],
  BDB.blooks["Jaguar"],
  BDB.blooks["Macaw"],
  BDB.blooks["Toucan"],
  BDB.blooks["Panther"],
  BDB.blooks["Capuchin"],
  BDB.blooks["Gorilla"],
  BDB.blooks["Hippo"],
  BDB.blooks["Rhino"],
  BDB.blooks["Giraffe"]
];

BDB.pack.arcticanimal.blooks = [
  BDB.blooks["Snowy Owl"],
  BDB.blooks["Polar Bear"],
  BDB.blooks["Arctic Fox"],
  BDB.blooks["Baby Penguin"],
  BDB.blooks["Penguin"],
  BDB.blooks["Arctic Hare"],
  BDB.blooks["Seal"],
  BDB.blooks["Walrus"]
];

BDB.pack.aquatic.blooks = [
  BDB.blooks["Old Boot"],
  BDB.blooks["Jellyfish"],
  BDB.blooks["Clownfish"],
  BDB.blooks["Frog"],
  BDB.blooks["Crab"],
  BDB.blooks["Pufferfish"],
  BDB.blooks["Blobfish"],
  BDB.blooks["Octopus"],
  BDB.blooks["Narwhal"],
  BDB.blooks["Dolphin"],
  BDB.blooks["Baby Shark"],
  BDB.blooks["Megalodon"]
];

BDB.pack.blizzard.blooks = [
  BDB.blooks["Snow Globe"],
  BDB.blooks["Holiday Gift"],
  BDB.blooks["Hot Chocolate"],
  BDB.blooks["Holiday Wreath"],
  BDB.blooks["Stocking"],
  BDB.blooks["Gingerbread Man"],
  BDB.blooks["Gingerbread House"],
  BDB.blooks["Reindeer"],
  BDB.blooks["Snowman"],
  BDB.blooks["Santa Claus"],
  BDB.blooks["New York Snow Globe"],
  BDB.blooks["London Snow Globe"],
  BDB.blooks["Japan Snow Globe"],
  BDB.blooks["Frost Wreath"],
  BDB.blooks["Tropical Globe"]
];

BDB.pack.bot.blooks = [
  BDB.blooks["Lil Bot"],
  BDB.blooks["Lovely Bot"],
  BDB.blooks["Angry Bot"],
  BDB.blooks["Happy Bot"],
  BDB.blooks["Watson"],
  BDB.blooks["Buddy Bot"],
  BDB.blooks["Brainy Bot"],
  BDB.blooks["Mega Bot"]
];

BDB.pack.breakfast.blooks = [
  BDB.blooks["Toast"],
  BDB.blooks["Cereal"],
  BDB.blooks["Yogurt"],
  BDB.blooks["Breakfast Combo"],
  BDB.blooks["Orange Juice"],
  BDB.blooks["Milk"],
  BDB.blooks["Waffle"],
  BDB.blooks["Pancakes"],
  BDB.blooks["French Toast"],
  BDB.blooks["Pizza"]
];

BDB.pack.dino.blooks = [
  BDB.blooks["Amber"],
  BDB.blooks["Dino Egg"],
  BDB.blooks["Dino Fossil"],
  BDB.blooks["Stegosaurus"],
  BDB.blooks["Velociraptor"],
  BDB.blooks["Brontosaurus"],
  BDB.blooks["Triceratops"],
  BDB.blooks["Tyrannosaurus Rex"]
];

BDB.pack.icemonsters.blooks = [
  BDB.blooks["Ice Bat"],
  BDB.blooks["Ice Bug"],
  BDB.blooks["Ice Elemental"],
  BDB.blooks["Rock Monster"],
  BDB.blooks["Dink"],
  BDB.blooks["Donk"],
  BDB.blooks["Bush Monster"],
  BDB.blooks["Yeti"],
  BDB.blooks["Ice Slime"]
];

BDB.pack.medieval.blooks = [
  BDB.blooks["Elf"],
  BDB.blooks["Witch"],
  BDB.blooks["Wizard"],
  BDB.blooks["Fairy"],
  BDB.blooks["Slime Monster"],
  BDB.blooks["Jester"],
  BDB.blooks["Dragon"],
  BDB.blooks["Queen"],
  BDB.blooks["Unicorn"],
  BDB.blooks["King"]
];

BDB.pack.outback.blooks = [
  BDB.blooks["Dingo"],
  BDB.blooks["Echidna"],
  BDB.blooks["Koala"],
  BDB.blooks["Kookaburra"],
  BDB.blooks["Platypus"],
  BDB.blooks["Joey"],
  BDB.blooks["Kangaroo"],
  BDB.blooks["Crocadile"],
  BDB.blooks["Sugar Glider"],
  BDB.blooks["Teal Platypus"]
]

BDB.pack.pirate.blooks = [
  BDB.blooks["Deckhand"],
  BDB.blooks["Buccaneer"],
  BDB.blooks["Swashbuckler"],
  BDB.blooks["Treasure Map"],
  BDB.blooks["Seagull"],
  BDB.blooks["Jolly Pirate"],
  BDB.blooks["Pirate Ship"],
  BDB.blooks["Kraken"],
  BDB.blooks["Captain Blackbeard"],
  BDB.blooks["Pirate Pufferfish"]
]

BDB.pack.safari.blooks = [
  BDB.blooks["Panda"],
  BDB.blooks["Sloth"],
  BDB.blooks["Tenrec"],
  BDB.blooks["Flamingo"],
  BDB.blooks["Zebra"],
  BDB.blooks["Elephant"],
  BDB.blooks["Lemur"],
  BDB.blooks["Peacock"],
  BDB.blooks["Chameleon"],
  BDB.blooks["Lion"],
  BDB.blooks["Rainbow Panda"]
];

BDB.pack.space.blooks = [
  BDB.blooks["Earth"],
  BDB.blooks["Meteor"],
  BDB.blooks["Stars"],
  BDB.blooks["Alien"],
  BDB.blooks["Planet"],
  BDB.blooks["UFO"],
  BDB.blooks["Spaceship"],
  BDB.blooks["Astronaut"],
  BDB.blooks["Pink Astronaut"],
  BDB.blooks["Yellow Astronaut"],
  BDB.blooks["Black Astronaut"],
  BDB.blooks["Orange Astronaut"],
  BDB.blooks["Red Astronaut"],
  BDB.blooks["Brown Astronaut"],
  BDB.blooks["Green Astronaut"]
];

BDB.pack.spooky.blooks = [
  BDB.blooks["Pumpkin"],
  BDB.blooks["Swamp Monster"],
  BDB.blooks["Frankenstein"],
  BDB.blooks["Vampire"],
  BDB.blooks["Zombie"],
  BDB.blooks["Mummy"],
  BDB.blooks["Caramel Apple"],
  BDB.blooks["Candy Corn"],
  BDB.blooks["Crow"],
  BDB.blooks["Werewolf"],
  BDB.blooks["Ghost"],
  BDB.blooks["Red Gummy Bear"],
  BDB.blooks["Green Gummy Bear"],
  BDB.blooks["Blue Gummy Bear"]
];

BDB.pack.wonderland.blooks = [
  BDB.blooks["Two of Spades"],
  BDB.blooks["Eat Me"],
  BDB.blooks["Drink Me"],
  BDB.blooks["Alice"],
  BDB.blooks["Queen of Hearts"],
  BDB.blooks["Dormouse"],
  BDB.blooks["White Rabbit"],
  BDB.blooks["Cheshire Cat"],
  BDB.blooks["Caterpillar"],
  BDB.blooks["Mad Hatter"],
  BDB.blooks["King of Hearts"]
];
window.blooketDB = BDB;
