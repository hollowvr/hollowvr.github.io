/*
BlooketDB © 2024 by hollowvr is licensed under CC BY-SA 4.0
(including comment serves as attribution)

INSTRUCIONS
in your html include:
<script src="https://hollowvr.github.io/blooketDB.js" />
or in html paste ENTIRE script inside <script> tag:
*/
const blooketDB = {
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
}
blooketDB.blooks = {
  "Chick": {
    name: "Chick",
    pack: blooketDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/chick.svg"
  },
  "Chicken": {
    name: "Chicken",
    pack: blooketDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/chicken.svg"
  },
  "Cow": {
    name: "Cow",
    pack: blooketDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/cow.svg"
  },
  "Goat": {
    name: "Goat",
    pack: blooketDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/goat.svg"
  },
  "Horse": {
    name: "Horse",
    pack: blooketDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/horse.svg"
  },
  "Pig": {
    name: "Pig",
    pack: blooketDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/pig.svg"
  },
  "Sheep": {
    name: "Sheep",
    pack: blooketDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/sheep.svg"
  },
  "Duck": {
    name: "Duck",
    pack: blooketDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/duck.svg"
  },
  "Alpaca": {
    name: "Alpaca",
    pack: blooketDB.pack.farmanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/alpaca.svg"
  },
  "Dog": {
    name: "Dog",
    pack: blooketDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/dog.svg"
  },
  "Cat": {
    name: "Cat",
    pack: blooketDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/cat.svg"
  },
  "Rabbit": {
    name: "Rabbit",
    pack: blooketDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/rabbit.svg"
  },
  "Goldfish": {
    name: "Goldfish",
    pack: blooketDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/goldfish.svg"
  },
  "Hamster": {
    name: "Hamster",
    pack: blooketDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/hamster.svg"
  },
  "Turtle": {
    name: "Turtle",
    pack: blooketDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/turtle.svg"
  },
  "Kitten": {
    name: "Kitten",
    pack: blooketDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/kitten.svg"
  },
  "Puppy": {
    name: "Puppy",
    pack: blooketDB.pack.pet,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/puppy.svg"
  },
  "Bear": {
    name: "Bear",
    pack: blooketDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/bear.svg"
  },
  "Moose": {
    name: "Moose",
    pack: blooketDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/moose.svg"
  },
  "Fox": {
    name: "Fox",
    pack: blooketDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/fox.svg"
  },
  "Raccoon": {
    name: "Raccoon",
    pack: blooketDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/raccoon.svg"
  },
  "Squirrel": {
    name: "Squirrel",
    pack: blooketDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/squirrel.svg"
  },
  "Owl": {
    name: "Owl",
    pack: blooketDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/owl.svg"
  },
  "Hedgehog": {
    name: "Hedgehog",
    pack: blooketDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/hedgehog.svg"
  },
  "Deer": {
    name: "Deer",
    pack: blooketDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/deer.svg"
  },
  "Wolf": {
    name: "Wolf",
    pack: blooketDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/wolf.svg"
  },
  "Beaver": {
    name: "Beaver",
    pack: blooketDB.pack.forestanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/beaver.svg"
  },
  "Tiger": {
    name: "Tiger",
    pack: blooketDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/tiger.svg"
  },
  "Orangutan": {
    name: "Orangutan",
    pack: blooketDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/orangutan.svg"
  },
  "Cockatoo": {
    name: "Cockatoo",
    pack: blooketDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/cockatoo.svg"
  },
  "Parrot": {
    name: "Parrot",
    pack: blooketDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/parrot.svg"
  },
  "Anaconda": {
    name: "Anaconda",
    pack: blooketDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/anaconda.svg"
  },
  "Jaguar": {
    name: "Jaguar",
    pack: blooketDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/jaguar.svg"
  },
  "Macaw": {
    name: "Macaw",
    pack: blooketDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/macaw.svg"
  },
  "Toucan": {
    name: "Toucan",
    pack: blooketDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/toucan.svg"
  },
  "Panther": {
    name: "Panther",
    pack: blooketDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/panther.svg"
  },
  "Capuchin": {
    name: "Capuchin",
    pack: blooketDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/capuchin.svg"
  },
  "Gorilla": {
    name: "Gorilla",
    pack: blooketDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/gorilla.svg"
  },
  "Hippo": {
    name: "Hippo",
    pack: blooketDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/hippo.svg"
  },
  "Rhino": {
    name: "Rhino",
    pack: blooketDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/rhino.svg"
  },
  "Giraffe": {
    name: "Giraffe",
    pack: blooketDB.pack.tropicalanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/giraffe.svg"
  },
  "Snowy Owl": {
    name: "Snowy Owl",
    pack: blooketDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/snowyowl.svg"
  },
  "Polar Bear": {
    name: "Polar Bear",
    pack: blooketDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/polarbear.svg"
  },
  "Arctic Fox": {
    name: "Arctic Fox",
    pack: blooketDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/arcticfox.svg"
  },
  "Baby Penguin": {
    name: "Baby Penguin",
    pack: blooketDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/babypenguin.svg"
  },
  "Penguin": {
    name: "Penguin",
    pack: blooketDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/penguin.svg"
  },
  "Arctic Hare": {
    name: "Arctic Hare",
    pack: blooketDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/arctichare.svg"
  },
  "Seal": {
    name: "Seal",
    pack: blooketDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/seal.svg"
  },
  "Walrus": {
    name: "Walrus",
    pack: blooketDB.pack.arcticanimal,
    rarity: 1.00,
    icon: "https://ac.blooket.com/marketassets/blooks/walrus.svg"
  },
  "Old Boot": {
    name: "Old Boot",
    pack: blooketDB.pack.aquatic,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/oldboot.svg"
  },
  "Jellyfish": {
    name: "Jellyfish",
    pack: blooketDB.pack.aquatic,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/jellyfish.svg"
  },
  "Clownfish": {
    name: "Clownfish",
    pack: blooketDB.pack.aquatic,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/clownfish.svg"
  },
  "Frog": {
    name: "Frog",
    pack: blooketDB.pack.aquatic,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/frog.svg"
  },
  "Crab": {
    name: "Crab",
    pack: blooketDB.pack.aquatic,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/crab.svg"
  },
  "Pufferfish": {
    name: "Pufferfish",
    pack: blooketDB.pack.aquatic,
    rarity: 0.061,
    icon: "https://ac.blooket.com/marketassets/blooks/pufferfish.svg"
  },
  "Blobfish": {
    name: "Blobfish",
    pack: blooketDB.pack.aquatic,
    rarity: 0.061,
    icon: "https://ac.blooket.com/marketassets/blooks/blobfish.svg"
  },
  "Octopus": {
    name: "Octopus",
    pack: blooketDB.pack.aquatic,
    rarity: 0.061,
    icon: "https://ac.blooket.com/marketassets/blooks/octopus.svg"
  },
  "Narwhal": {
    name: "Narwhal",
    pack: blooketDB.pack.aquatic,
    rarity: 0.03,
    icon: "https://ac.blooket.com/marketassets/blooks/narwhal.svg"
  },
  "Dolphin": {
    name: "Dolphin",
    pack: blooketDB.pack.aquatic,
    rarity: 0.03,
    icon: "https://ac.blooket.com/marketassets/blooks/dolphin.svg"
  },
  "Baby Shark": {
    name: "Baby Shark",
    pack: blooketDB.pack.aquatic,
    rarity: 0.005,
    icon: "https://ac.blooket.com/marketassets/blooks/babyshark.svg"
  },
  "Megalodon": {
    name: "Megalodon",
    pack: blooketDB.pack.aquatic,
    rarity: 0.002,
    icon: "https://ac.blooket.com/marketassets/blooks/megalodon.svg"
  },
  "Snow Globe": {
    name: "Snow Globe",
    pack: blooketDB.pack.blizzard,
    rarity: 0.145,
    icon: "https://ac.blooket.com/marketassets/blooks/snowglobe.svg"
  },
  "Holiday Gift": {
    name: "Holiday Gift",
    pack: blooketDB.pack.blizzard,
    rarity: 0.145,
    icon: "https://ac.blooket.com/marketassets/blooks/holidaygift.svg"
  },
  "Hot Chocolate": {
    name: "Hot Chocolate",
    pack: blooketDB.pack.blizzard,
    rarity: 0.145,
    icon: "https://ac.blooket.com/marketassets/blooks/hotchocolate.svg"
  },
  "Holiday Wreath": {
    name: "Holiday Wreath",
    pack: blooketDB.pack.blizzard,
    rarity: 0.145,
    icon: "https://ac.blooket.com/marketassets/blooks/holidaywreath.svg"
  },
  "Stocking": {
    name: "Stocking",
    pack: blooketDB.pack.blizzard,
    rarity: 0.145,
    icon: "https://ac.blooket.com/marketassets/blooks/stocking.svg"
  },
  "Gingerbread Man": {
    name: "Gingerbread Man",
    pack: blooketDB.pack.blizzard,
    rarity: 0.071,
    icon: "https://ac.blooket.com/marketassets/blooks/gingerbreadman.svg"
  },
  "Gingerbread House": {
    name: "Gingerbread House",
    pack: blooketDB.pack.blizzard,
    rarity: 0.071,
    icon: "https://ac.blooket.com/marketassets/blooks/gingerbreadhouse.svg"
  },
  "Reindeer": {
    name: "Reindeer",
    pack: blooketDB.pack.blizzard,
    rarity: 0.071,
    icon: "https://ac.blooket.com/marketassets/blooks/reindeer.svg"
  },
  "Snowman": {
    name: "Snowman",
    pack: blooketDB.pack.blizzard,
    rarity: 0.0515,
    icon: "https://ac.blooket.com/marketassets/blooks/snowman.svg"
  },
  "Sant Claus": {
    name: "Sant Claus",
    pack: blooketDB.pack.blizzard,
    rarity: 0.01,
    icon: "https://ac.blooket.com/marketassets/blooks/santaclaus.svg"
  },
  "Red Sweater Snowman": {
    name: "Red Sweater Snowman",
    pack: blooketDB.pack.blizzard,
    rarity: 0.0002,
    icon: "https://ac.blooket.com/marketassets/blooks/redsweatersnowman.svg"
  },
  "Blue Sweater Snowman": {
    name: "Blue Sweater Snowman",
    pack: blooketDB.pack.blizzard,
    rarity: 0.0002,
    icon: "https://ac.blooket.com/marketassets/blooks/bluesweatersnowman.svg"
  },
  "Elf Sweater Snowman": {
    name: "Elf Sweater Snowman",
    pack: blooketDB.pack.blizzard,
    rarity: 0.0001,
    icon: "https://ac.blooket.com/marketassets/blooks/elfsweatersnowman.svg"
  },
  "Lil Bot": {
    name: "Lil Bot",
    pack: blooketDB.pack.bot,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/lilbot.svg"
  },
  "Lovely Bot": {
    name: "Lovely Bot",
    pack: blooketDB.pack.bot,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/lovelybot.svg"
  },
  "Angry Bot": {
    name: "Angry Bot",
    pack: blooketDB.pack.bot,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/angrybot.svg"
  },
  "Happy Bot": {
    name: "Happy Bot",
    pack: blooketDB.pack.bot,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/happybot.svg"
  },
  "Watson": {
    name: "Watson",
    pack: blooketDB.pack.bot,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/watson.svg"
  },
  "Buddy Bot": {
    name: "Buddy Bot",
    pack: blooketDB.pack.bot,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/buddybot.svg"
  },
  "Brainy Bot": {
    name: "Brainy Bot",
    pack: blooketDB.pack.bot,
    rarity: 0.037,
    icon: "https://ac.blooket.com/marketassets/blooks/brainybot.svg"
  },
  "Mega Bot": {
    name: "Mega Bot",
    pack: blooketDB.pack.bot,
    rarity: 0.003,
    icon: "https://ac.blooket.com/marketassets/blooks/megabot.svg"
  },
  "Toast": {
    name: "Toast",
    pack: blooketDB.pack.breakfast,
    rarity: 0.125,
    icon: "https://ac.blooket.com/marketassets/blooks/toast.svg"
  },
  "Cereal": {
    name: "Cereal",
    pack: blooketDB.pack.breakfast,
    rarity: 0.125,
    icon: "https://ac.blooket.com/marketassets/blooks/cereal.svg"
  },
  "Yogurt": {
    name: "Yogurt",
    pack: blooketDB.pack.breakfast,
    rarity: 0.125,
    icon: "https://ac.blooket.com/marketassets/blooks/yogurt.svg"
  },
  "Breakfast Combo": {
    name: "Breakfast Combo",
    pack: blooketDB.pack.breakfast,
    rarity: 0.125,
    icon: "https://ac.blooket.com/marketassets/blooks/breakfastcombo.svg"
  },
  "Orange Juice": {
    name: "Orange Juice",
    pack: blooketDB.pack.breakfast,
    rarity: 0.125,
    icon: "https://ac.blooket.com/marketassets/blooks/orangejuice.svg"
  },
  "Milk": {
    name: "Milk",
    pack: blooketDB.pack.breakfast,
    rarity: 0.125,
    icon: "https://ac.blooket.com/marketassets/blooks/milk.svg"
  },
  "Waffle": {
    name: "Waffle",
    pack: blooketDB.pack.breakfast,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/waffle.svg"
  },
  "Pancakes": {
    name: "Pancakes",
    pack: blooketDB.pack.breakfast,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/pancakes.svg"
  },
  "French Toast": {
    name: "French Toast",
    pack: blooketDB.pack.breakfast,
    rarity: 0.05,
    icon: "https://ac.blooket.com/marketassets/blooks/frenchtoast.svg"
  },
  "Pizza": {
    name: "Pizza",
    pack: blooketDB.pack.breakfast,
    rarity: 0.02,
    icon: "https://ac.blooket.com/marketassets/blooks/pizza.svg"
  },
  "Amber": {
    name: "Amber",
    pack: blooketDB.pack.dino,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/amber.svg"
  },
  "Dino Egg": {
    name: "Dino Egg",
    pack: blooketDB.pack.dino,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/dinoegg.svg"
  },
  "Dino Fossil": {
    name: "Dino Fossil",
    pack: blooketDB.pack.dino,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/dinofossil.svg"
  },
  "Stegosaurus": {
    name: "Stegosaurus",
    pack: blooketDB.pack.dino,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/stegosaurus.svg"
  },
  "Velociraptor": {
    name: "Velociraptor",
    pack: blooketDB.pack.dino,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/velociraptor.svg"
  },
  "Brontosaurus": {
    name: "Brontosaurus",
    pack: blooketDB.pack.dino,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/brontosaurus.svg"
  },
  "Triceratops": {
    name: "Triceratops",
    pack: blooketDB.pack.dino,
    rarity: 0.037,
    icon: "https://ac.blooket.com/marketassets/blooks/triceratops.svg"
  },
  "Tyrannosaurus Rex": {
    name: "Tyrannosaurus Rex",
    pack: blooketDB.pack.dino,
    rarity: 0.003,
    icon: "https://ac.blooket.com/marketassets/blooks/tyrannosaurusrex.svg"
  },
  "Ice Bat": {
    name: "Ice Bat",
    pack: blooketDB.pack.icemonsters,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/icebat.svg"
  },
  "Ice Bug": {
    name: "Ice Bug",
    pack: blooketDB.pack.icemonsters,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/icebug.svg"
  },
  "Ice Elemental": {
    name: "Ice Elemental",
    pack: blooketDB.pack.icemonsters,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/iceelemental.svg"
  },
  "Rock Monster": {
    name: "Rock Monster",
    pack: blooketDB.pack.icemonsters,
    rarity: 0.195,
    icon: "https://ac.blooket.com/marketassets/blooks/rockmonster.svg"
  },
  "Dink": {
    name: "Dink",
    pack: blooketDB.pack.icemonsters,
    rarity: 0.085,
    icon: "https://ac.blooket.com/marketassets/blooks/dink.svg"
  },
  "Donk": {
    name: "Donk",
    pack: blooketDB.pack.icemonsters,
    rarity: 0.085,
    icon: "https://ac.blooket.com/marketassets/blooks/donk.svg"
  },
  "Bush Monster": {
    name: "Bush Monster",
    pack: blooketDB.pack.icemonsters,
    rarity: 0.045,
    icon: "https://ac.blooket.com/marketassets/blooks/bushmonster.svg"
  },
  "Yeti": {
    name: "Yeti",
    pack: blooketDB.pack.icemonsters,
    rarity: 0.0035,
    icon: "https://ac.blooket.com/marketassets/blooks/yeti.svg"
  },
  "Ice Slime": {
    name: "Ice Slime",
    pack: blooketDB.pack.icemonsters,
    rarity: 0.0008,
    icon: "https://ac.blooket.com/marketassets/blooks/iceslime.svg"
  },
  "Frozen Fossil": {
    name: "Frozen Fossil",
    pack: blooketDB.pack.icemonsters,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/frozenfossil.svg"
  },
  "Ice Crab": {
    name: "Ice Crab",
    pack: blooketDB.pack.icemonsters,
    rarity: 0.0002,
    icon: "https://ac.blooket.com/marketassets/blooks/icecrab.svg"
  },
  "Elf": {
    name: "Elf",
    pack: blooketDB.pack.medieval,
    rarity: 0.134,
    icon: "https://ac.blooket.com/marketassets/blooks/elf.svg"
  },
  "Witch": {
    name: "Witch",
    pack: blooketDB.pack.medieval,
    rarity: 0.134,
    icon: "https://ac.blooket.com/marketassets/blooks/witch.svg"
  },
  "Wizard": {
    name: "Wizard",
    pack: blooketDB.pack.medieval,
    rarity: 0.134,
    icon: "https://ac.blooket.com/marketassets/blooks/wizard.svg"
  },
  "Fairy": {
    name: "Fairy",
    pack: blooketDB.pack.medieval,
    rarity: 0.134,
    icon: "https://ac.blooket.com/marketassets/blooks/fairy.svg"
  },
  "Slime Monster": {
    name: "Slime Monster",
    pack: blooketDB.pack.medieval,
    rarity: 0.134,
    icon: "https://ac.blooket.com/marketassets/blooks/slimemonster.svg"
  },
  "Jester": {
    name: "Jester",
    pack: blooketDB.pack.medieval,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/jester.svg"
  },
  "Dragon": {
    name: "Dragon",
    pack: blooketDB.pack.medieval,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/dragon.svg"
  },
  "Queen": {
    name: "Queen",
    pack: blooketDB.pack.medieval,
    rarity: 0.09,
    icon: "https://ac.blooket.com/marketassets/blooks/queen.svg"
  },
  "Unicorn": {
    name: "Unicorn",
    pack: blooketDB.pack.medieval,
    rarity: 0.05,
    icon: "https://ac.blooket.com/marketassets/blooks/unicorn.svg"
  },
  "King": {
    name: "King",
    pack: blooketDB.pack.medieval,
    rarity: 0.01,
    icon: "https://ac.blooket.com/marketassets/blooks/king.svg"
  },
  "Panda": {
    name: "Panda",
    pack: blooketDB.pack.safari,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/panda.svg"
  },
  "Sloth": {
    name: "Sloth",
    pack: blooketDB.pack.safari,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/sloth.svg"
  },
  "Tenrec": {
    name: "Tenrec",
    pack: blooketDB.pack.safari,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/tenrec.svg"
  },
  "Flamingo": {
    name: "Flamingo",
    pack: blooketDB.pack.safari,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/flamingo.svg"
  },
  "Zebra": {
    name: "Zebra",
    pack: blooketDB.pack.safari,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/zebra.svg"
  },
  "Elephant": {
    name: "Elephant",
    pack: blooketDB.pack.safari,
    rarity: 0.07,
    icon: "https://ac.blooket.com/marketassets/blooks/elephant.svg"
  },
  "Lemur": {
    name: "Lemur",
    pack: blooketDB.pack.safari,
    rarity: 0.07,
    icon: "https://ac.blooket.com/marketassets/blooks/lemur.svg"
  },
  "Peacock": {
    name: "Peacock",
    pack: blooketDB.pack.safari,
    rarity: 0.07,
    icon: "https://ac.blooket.com/marketassets/blooks/peacock.svg"
  },
  "Chameleon": {
    name: "Chameleon",
    pack: blooketDB.pack.safari,
    rarity: 0.0348,
    icon: "https://ac.blooket.com/marketassets/blooks/chameleon.svg"
  },
  "Lion": {
    name: "Lion",
    pack: blooketDB.pack.safari,
    rarity: 0.005,
    icon: "https://ac.blooket.com/marketassets/blooks/lion.svg"
  },
  "Rainbow Panda": {
    name: "Rainbow Panda",
    pack: blooketDB.pack.safari,
    rarity: 0.0002,
    icon: "https://ac.blooket.com/marketassets/blooks/rainbowpanda.svg"
  },
  "Earth": {
    name: "Earth",
    pack: blooketDB.pack.space,
    rarity: 0.1875,
    icon: "https://ac.blooket.com/marketassets/blooks/earth.svg"
  },
  "Meteor": {
    name: "Meteor",
    pack: blooketDB.pack.space,
    rarity: 0.1875,
    icon: "https://ac.blooket.com/marketassets/blooks/meteor.svg"
  },
  "Stars": {
    name: "Stars",
    pack: blooketDB.pack.space,
    rarity: 0.1875,
    icon: "https://ac.blooket.com/marketassets/blooks/stars.svg"
  },
  "Alien": {
    name: "Alien",
    pack: blooketDB.pack.space,
    rarity: 0.1875,
    icon: "https://ac.blooket.com/marketassets/blooks/alien.svg"
  },
  "Planet": {
    name: "Planet",
    pack: blooketDB.pack.space,
    rarity: 0.1,
    icon: "https://ac.blooket.com/marketassets/blooks/planet.svg"
  },
  "UFO": {
    name: "UFO",
    pack: blooketDB.pack.space,
    rarity: 0.1,
    icon: "https://ac.blooket.com/marketassets/blooks/ufo.svg"
  },
  "Spaceship": {
    name: "Spaceship",
    pack: blooketDB.pack.space,
    rarity: 0.045,
    icon: "https://ac.blooket.com/marketassets/blooks/spaceship.svg"
  },
  "Astronaut": {
    name: "Astronaut",
    pack: blooketDB.pack.space,
    rarity: 0.0045,
    icon: "https://ac.blooket.com/marketassets/blooks/astronaut.svg"
  },
  "Pink Astronaut": {
    name: "Pink Astronaut",
    pack: blooketDB.pack.space,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/pinkastronaut.svg"
  },
  "Yellow Astronaut": {
    name: "Yellow Astronaut",
    pack: blooketDB.pack.space,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/yellowastronaut.svg"
  },
  "Black Astronaut": {
    name: "Black Astronaut",
    pack: blooketDB.pack.space,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/blackastronaut.svg"
  },
  "Orange Astronaut": {
    name: "Orange Astronaut",
    pack: blooketDB.pack.space,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/orangeastronaut.svg"
  },
  "Red Astronaut": {
    name: "Red Astronaut",
    pack: blooketDB.pack.space,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/redastronaut.svg"
  },
  "Brown Astronaut": {
    name: "Brown Astronaut",
    pack: blooketDB.pack.space,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/brownastronaut.svg"
  },
  "Green Astronaut": {
    name: "Green Astronaut",
    pack: blooketDB.pack.space,
    rarity: 0.0005,
    icon: "https://ac.blooket.com/marketassets/blooks/greenastronaut.svg"
  },
  "Pumpkin": {
    name: "Pumpkin",
    pack: blooketDB.pack.spooky,
    rarity: 0.19,
    icon: "https://ac.blooket.com/marketassets/blooks/pumpkin.svg"
  },
  "Swamp Monster": {
    name: "Swamp Monster",
    pack: blooketDB.pack.spooky,
    rarity: 0.19,
    icon: "https://ac.blooket.com/marketassets/blooks/swampmonster.svg"
  },
  "Frankenstein": {
    name: "Frankenstein",
    pack: blooketDB.pack.spooky,
    rarity: 0.19,
    icon: "https://ac.blooket.com/marketassets/blooks/frankenstein.svg"
  },
  "Vampire": {
    name: "Vampire",
    pack: blooketDB.pack.spooky,
    rarity: 0.19,
    icon: "https://ac.blooket.com/marketassets/blooks/vampire.svg"
  },
  "Zombie": {
    name: "Zombie",
    pack: blooketDB.pack.spooky,
    rarity: 0.04,
    icon: "https://ac.blooket.com/marketassets/blooks/zombie.svg"
  },
  "Mummy": {
    name: "Mummy",
    pack: blooketDB.pack.spooky,
    rarity: 0.04,
    icon: "https://ac.blooket.com/marketassets/blooks/mummy.svg"
  },
  "Caramel Apple": {
    name: "Caramel Apple",
    pack: blooketDB.pack.spooky,
    rarity: 0.04,
    icon: "https://ac.blooket.com/marketassets/blooks/caramelapple.svg"
  },
  "Candy Corn": {
    name: "Candy Corn",
    pack: blooketDB.pack.spooky,
    rarity: 0.04,
    icon: "https://ac.blooket.com/marketassets/blooks/candycorn.svg"
  },
  "Crow": {
    name: "Crow",
    pack: blooketDB.pack.spooky,
    rarity: 0.04,
    icon: "https://ac.blooket.com/marketassets/blooks/crow.svg"
  },
  "Werewolf": {
    name: "Werewolf",
    pack: blooketDB.pack.spooky,
    rarity: 0.0329,
    icon: "https://ac.blooket.com/marketassets/blooks/werewolf.svg"
  },
  "Ghost": {
    name: "Ghost",
    pack: blooketDB.pack.spooky,
    rarity: 0.0065,
    icon: "https://ac.blooket.com/marketassets/blooks/ghost.svg"
  },
  "Red Gummy Bear": {
    name: "Red Gummy Bear",
    pack: blooketDB.pack.spooky,
    rarity: 0.0002,
    icon: "https://ac.blooket.com/marketassets/blooks/redgummybear.svg"
  },
  "Green Gummy Bear": {
    name: "Green Gummy Bear",
    pack: blooketDB.pack.spooky,
    rarity: 0.0002,
    icon: "https://ac.blooket.com/marketassets/blooks/greengummybear.svg"
  },
  "Blue Gummy Bear": {
    name: "Blue Gummy Bear",
    pack: blooketDB.pack.spooky,
    rarity: 0.0002,
    icon: "https://ac.blooket.com/marketassets/blooks/bluegummybear.svg"
  },
  "Two of Spades": {
    name: "Two of Spades",
    pack: blooketDB.pack.wonderland,
    rarity: 0.152,
    icon: "https://ac.blooket.com/marketassets/blooks/twoofspades.svg"
  },
  "Eat Me": {
    name: "Eat Me",
    pack: blooketDB.pack.wonderland,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/eat.svg"
  },
  "Drink Me": {
    name: "Drink Me",
    pack: blooketDB.pack.wonderland,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/drink.svg"
  },
  "Alice": {
    name: "Alice",
    pack: blooketDB.pack.wonderland,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/alice.svg"
  },
  "Queen of Hearts": {
    name: "Queen of Hearts",
    pack: blooketDB.pack.wonderland,
    rarity: 0.15,
    icon: "https://ac.blooket.com/marketassets/blooks/queenofhearts.svg"
  },
  "Dormouse": {
    name: "Dormouse",
    pack: blooketDB.pack.wonderland,
    rarity: 0.065,
    icon: "https://ac.blooket.com/marketassets/blooks/dormouse.svg"
  },
  "White Rabbit": {
    name: "White Rabbit",
    pack: blooketDB.pack.wonderland,
    rarity: 0.065,
    icon: "https://ac.blooket.com/marketassets/blooks/whiterabbit.svg"
  },
  "Cheshire Cat": {
    name: "Cheshire Cat",
    pack: blooketDB.pack.wonderland,
    rarity: 0.065,
    icon: "https://ac.blooket.com/marketassets/blooks/cheshirecat.svg"
  },
  "Caterpillar": {
    name: "Caterpillar",
    pack: blooketDB.pack.wonderland,
    rarity: 0.025,
    icon: "https://ac.blooket.com/marketassets/blooks/caterpillar.svg"
  },
  "Mad Hatter": {
    name: "Mad Hatter",
    pack: blooketDB.pack.wonderland,
    rarity: 0.025,
    icon: "https://ac.blooket.com/marketassets/blooks/madhatter.svg"
  },
  "King of Hearts": {
    name: "King of Hearts",
    pack: blooketDB.pack.wonderland,
    rarity: 0.003,
    icon: "https://ac.blooket.com/marketassets/blooks/kingofhearts.svg"
  }
}

blooketDB.pack.farmanimal.blooks = [
  blooketDB.blooks["Chick"],
  blooketDB.blooks["Chicken"],
  blooketDB.blooks["Cow"],
  blooketDB.blooks["Goat"],
  blooketDB.blooks["Horse"],
  blooketDB.blooks["Pig"],
  blooketDB.blooks["Sheep"],
  blooketDB.blooks["Duck"],
  blooketDB.blooks["Alpaca"]
];

blooketDB.pack.pet.blooks = [
  blooketDB.blooks["Dog"],
  blooketDB.blooks["Cat"],
  blooketDB.blooks["Rabbit"],
  blooketDB.blooks["Goldfish"],
  blooketDB.blooks["Hamster"],
  blooketDB.blooks["Turtle"],
  blooketDB.blooks["Kitten"],
  blooketDB.blooks["Puppy"]
];

blooketDB.pack.forestanimal.blooks = [
  blooketDB.blooks["Bear"],
  blooketDB.blooks["Moose"],
  blooketDB.blooks["Fox"],
  blooketDB.blooks["Raccoon"],
  blooketDB.blooks["Squirrel"],
  blooketDB.blooks["Owl"],
  blooketDB.blooks["Hedgehog"],
  blooketDB.blooks["Deer"],
  blooketDB.blooks["Wolf"],
  blooketDB.blooks["Beaver"]
];

blooketDB.pack.tropicalanimal.blooks = [
  blooketDB.blooks["Tiger"],
  blooketDB.blooks["Orangutan"],
  blooketDB.blooks["Cockatoo"],
  blooketDB.blooks["Parrot"],
  blooketDB.blooks["Anaconda"],
  blooketDB.blooks["Jaguar"],
  blooketDB.blooks["Macaw"],
  blooketDB.blooks["Toucan"],
  blooketDB.blooks["Panther"],
  blooketDB.blooks["Capuchin"],
  blooketDB.blooks["Gorilla"],
  blooketDB.blooks["Hippo"],
  blooketDB.blooks["Rhino"],
  blooketDB.blooks["Giraffe"]
];

blooketDB.pack.arcticanimal.blooks = [
  blooketDB.blooks["Snowy Owl"],
  blooketDB.blooks["Polar Bear"],
  blooketDB.blooks["Arctic Fox"],
  blooketDB.blooks["Baby Penguin"],
  blooketDB.blooks["Penguin"],
  blooketDB.blooks["Arctic Hare"],
  blooketDB.blooks["Seal"],
  blooketDB.blooks["Walrus"]
];

blooketDB.pack.aquatic.blooks = [
  blooketDB.blooks["Old Boot"],
  blooketDB.blooks["Jellyfish"],
  blooketDB.blooks["Clownfish"],
  blooketDB.blooks["Frog"],
  blooketDB.blooks["Crab"],
  blooketDB.blooks["Pufferfish"],
  blooketDB.blooks["Blobfish"],
  blooketDB.blooks["Octopus"],
  blooketDB.blooks["Narwhal"],
  blooketDB.blooks["Dolphin"],
  blooketDB.blooks["Baby Shark"],
  blooketDB.blooks["Megalodon"]
];

blooketDB.pack.blizzard.blooks = [
  blooketDB.blooks["Old Boot"],
  blooketDB.blooks["Jellyfish"],
  blooketDB.blooks["Clownfish"],
  blooketDB.blooks["Frog"],
  blooketDB.blooks["Crab"],
  blooketDB.blooks["Pufferfish"],
  blooketDB.blooks["Blobfish"],
  blooketDB.blooks["Octopus"],
  blooketDB.blooks["Narwhal"],
  blooketDB.blooks["Dolphin"],
  blooketDB.blooks["Baby Shark"],
  blooketDB.blooks["Megalodon"]
]

blooketDB.pack.bot.blooks = [
  blooketDB.blooks["Lil Bot"],
  blooketDB.blooks["Lovely Bot"],
  blooketDB.blooks["Angry Bot"],
  blooketDB.blooks["Happy Bot"],
  blooketDB.blooks["Watson"],
  blooketDB.blooks["Buddy Bot"],
  blooketDB.blooks["Brainy Bot"],
  blooketDB.blooks["Mega Bot"]
];

blooketDB.pack.breakfast.blooks = [
  blooketDB.blooks["Toast"],
  blooketDB.blooks["Cereal"],
  blooketDB.blooks["Yogurt"],
  blooketDB.blooks["Breakfast Combo"],
  blooketDB.blooks["Orange Juice"],
  blooketDB.blooks["Milk"],
  blooketDB.blooks["Waffle"],
  blooketDB.blooks["Pancakes"],
  blooketDB.blooks["French Toast"],
  blooketDB.blooks["Pizza"]
];

blooketDB.pack.dino.blooks = [
  blooketDB.blooks["Amber"],
  blooketDB.blooks["Dino Egg"],
  blooketDB.blooks["Dino Fossil"],
  blooketDB.blooks["Stegosaurus"],
  blooketDB.blooks["Velociraptor"],
  blooketDB.blooks["Brontosaurus"],
  blooketDB.blooks["Triceratops"],
  blooketDB.blooks["Tyrannosaurus Rex"]
];

blooketDB.pack.icemonsters.blooks = [
  blooketDB.blooks["Ice Bat"],
  blooketDB.blooks["Ice Bug"],
  blooketDB.blooks["Ice Elemental"],
  blooketDB.blooks["Rock Monster"],
  blooketDB.blooks["Dink"],
  blooketDB.blooks["Donk"],
  blooketDB.blooks["Bush Monster"],
  blooketDB.blooks["Yeti"],
  blooketDB.blooks["Ice Slime"]
];

blooketDB.pack.medieval.blooks = [
  blooketDB.blooks["Elf"],
  blooketDB.blooks["Witch"],
  blooketDB.blooks["Wizard"],
  blooketDB.blooks["Fairy"],
  blooketDB.blooks["Slime Monster"],
  blooketDB.blooks["Jester"],
  blooketDB.blooks["Dragon"],
  blooketDB.blooks["Queen"],
  blooketDB.blooks["Unicorn"],
  blooketDB.blooks["King"]
];

blooketDB.pack.safari.blooks = [
  blooketDB.blooks["Panda"],
  blooketDB.blooks["Sloth"],
  blooketDB.blooks["Tenrec"],
  blooketDB.blooks["Flamingo"],
  blooketDB.blooks["Zebra"],
  blooketDB.blooks["Elephant"],
  blooketDB.blooks["Lemur"],
  blooketDB.blooks["Peacock"],
  blooketDB.blooks["Chameleon"],
  blooketDB.blooks["Lion"],
  blooketDB.blooks["Rainbow Panda"]
];

blooketDB.pack.space.blooks = [
  blooketDB.blooks["Earth"],
  blooketDB.blooks["Meteor"],
  blooketDB.blooks["Stars"],
  blooketDB.blooks["Alien"],
  blooketDB.blooks["Planet"],
  blooketDB.blooks["UFO"],
  blooketDB.blooks["Spaceship"],
  blooketDB.blooks["Astronaut"],
  blooketDB.blooks["Pink Astronaut"],
  blooketDB.blooks["Yellow Astronaut"],
  blooketDB.blooks["Black Astronaut"],
  blooketDB.blooks["Orange Astronaut"],
  blooketDB.blooks["Red Astronaut"],
  blooketDB.blooks["Brown Astronaut"],
  blooketDB.blooks["Green Astronaut"]
];

blooketDB.pack.spooky.blooks = [
  blooketDB.blooks["Pumpkin"],
  blooketDB.blooks["Swamp Monster"],
  blooketDB.blooks["Frankenstein"],
  blooketDB.blooks["Vampire"],
  blooketDB.blooks["Zombie"],
  blooketDB.blooks["Mummy"],
  blooketDB.blooks["Caramel Apple"],
  blooketDB.blooks["Candy Corn"],
  blooketDB.blooks["Crow"],
  blooketDB.blooks["Werewolf"],
  blooketDB.blooks["Ghost"],
  blooketDB.blooks["Red Gummy Bear"],
  blooketDB.blooks["Green Gummy Bear"],
  blooketDB.blooks["Blue Gummy Bear"]
]

blooketDB.pack.wonderland.blooks = [
  blooketDB.blooks["Two of Spades"],
  blooketDB.blooks["Eat Me"],
  blooketDB.blooks["Drink Me"],
  blooketDB.blooks["Alice"],
  blooketDB.blooks["Queen of Hearts"],
  blooketDB.blooks["Dormouse"],
  blooketDB.blooks["White Rabbit"],
  blooketDB.blooks["Cheshire Cat"],
  blooketDB.blooks["Caterpillar"],
  blooketDB.blooks["Mad Hatter"],
  blooketDB.blooks["King of Hearts"]
];
