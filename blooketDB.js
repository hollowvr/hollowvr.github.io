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
    autumn: {
      name: "Autumn Pack",
      cost: 25,
      packArt: "",
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
    icemonster: {
      name: "Ice Monster Pack",
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
  "Old Boot": {name:"Old Boot",url:"https://ac.blooket.com/marketassets/blooks/oldboot.svg",displaySet:"Aquatic",pack:BDB.pack.aquatic,chance:0.15,rarity:"Uncommon",teamName:"Da Boots",color:"#995b3c"},
  "Jellyfish": {name:"Jellyfish",url:"https://ac.blooket.com/marketassets/blooks/jellyfish.svg",displaySet:"Aquatic",pack:BDB.pack.aquatic,chance:0.15,rarity:"Uncommon",teamName:"Jelly Jumpers",color:"#c385b9"},
  "Clownfish": {name:"Clownfish",url:"https://ac.blooket.com/marketassets/blooks/clownfish.svg",displaySet:"Aquatic",pack:BDB.pack.aquatic,chance:0.15,rarity:"Uncommon",teamName:"Nemo Extras",color:"#f7941d"},
  "Frog": {name:"Frog",url:"https://ac.blooket.com/marketassets/blooks/frog.svg",displaySet:"Aquatic",pack:BDB.pack.aquatic,chance:0.15,rarity:"Uncommon",teamName:"Hippity Hoppers",color:"#a7d054"},
  "Crab": {name:"Crab",url:"https://ac.blooket.com/marketassets/blooks/crab.svg",displaySet:"Aquatic",pack:BDB.pack.aquatic,chance:0.15,rarity:"Uncommon",teamName:"Cool Claws",color:"#cf1f3d"},
  "Pufferfish": {name:"Pufferfish",url:"https://ac.blooket.com/marketassets/blooks/pufferfish.svg",displaySet:"Aquatic",pack:BDB.pack.aquatic,chance:0.061,rarity:"Rare",teamName:"TEAM BIG",color:"#ddc4a6"},
  "Blobfish": {name:"Blobfish",url:"https://ac.blooket.com/marketassets/blooks/blobfish.svg",displaySet:"Aquatic",pack:BDB.pack.aquatic,chance:0.061,rarity:"Rare",teamName:"blob blob blob",color:"#f3c1da"},
  "Octopus": {name:"Octopus",url:"https://ac.blooket.com/marketassets/blooks/octopus.svg",displaySet:"Aquatic",pack:BDB.pack.aquatic,chance:0.061,rarity:"Rare",teamName:"Team 8",color:"#a15095"},
  "Narwhal": {name:"Narwhal",url:"https://ac.blooket.com/marketassets/blooks/narwhal.svg",displaySet:"Aquatic",pack:BDB.pack.aquatic,chance:0.03,rarity:"Epic",teamName:"NARWHALLLLL",color:"#dae6f5"},
  "Dolphin": {name:"Dolphin",url:"https://ac.blooket.com/marketassets/blooks/dolphin.svg",displaySet:"Aquatic",pack:BDB.pack.aquatic,chance:0.03,rarity:"Epic",teamName:"Diving Dolphins",color:"#4e7197"},
  "Baby Shark": {name:"Baby Shark",url:"https://ac.blooket.com/marketassets/blooks/babyshark.svg",displaySet:"Aquatic",pack:BDB.pack.aquatic,chance:0.005,rarity:"Legendary",teamName:"BABY SHARK",color:"#5588b7"},
  "Megalodon": {name:"Megalodon",url:"https://ac.blooket.com/marketassets/blooks/megalodon.svg",displaySet:"Aquatic",pack:BDB.pack.aquatic,chance:0.002,rarity:"Legendary",teamName:"Megan's the Name",color:"#3d5d80"},
  "Snowy Owl": {name:"Snowy Owl",url:"https://ac.blooket.com/marketassets/blooks/snowyowl.svg",displaySet:"Arctic Animal",chance:1,rarity:"Common",teamName:"Kool Kids",color:"#feda3f"},
  "Polar Bear": {name:"Polar Bear",url:"https://ac.blooket.com/marketassets/blooks/polarbear.svg",displaySet:"Arctic Animal",chance:1,rarity:"Common",teamName:"Snowy Students",color:"#7ca1d5"},
  "Arctic Fox": {name:"Arctic Fox",url:"https://ac.blooket.com/marketassets/blooks/arcticfox.svg",displaySet:"Arctic Animal",chance:1,rarity:"Common",teamName:"Chilly Chosen",color:"#7ca1d5"},
  "Baby Penguin": {name:"Baby Penguin",url:"https://ac.blooket.com/marketassets/blooks/babypenguin.svg",displaySet:"Arctic Animal",chance:1,rarity:"Common",teamName:"Party Penguins",color:"#414042"},
  "Penguin": {name:"Penguin",url:"https://ac.blooket.com/marketassets/blooks/penguin.svg",displaySet:"Arctic Animal",chance:1,rarity:"Common",teamName:"Better Birds",color:"#fb8640"},
  "Arctic Hare": {name:"Arctic Hare",url:"https://ac.blooket.com/marketassets/blooks/arctichare.svg",displaySet:"Arctic Animal",chance:1,rarity:"Common",teamName:"Arctic Achievers",color:"#7ca1d5"},
  "Seal": {name:"Seal",url:"https://ac.blooket.com/marketassets/blooks/seal.svg",displaySet:"Arctic Animal",chance:1,rarity:"Common",teamName:"Super Seals",color:"#7ca1d5"},
  "Walrus": {name:"Walrus",url:"https://ac.blooket.com/marketassets/blooks/walrus.svg",displaySet:"Arctic Animal",chance:1,rarity:"Common",teamName:"Wordy Walruses",color:"#7d4f33"},
  "Black Bear": {name:"Black Bear",url:"https://ac.blooket.com/marketassets/blooks/blackbear.svg",displaySet:"Autumn",pack:BDB.pack.autumn,chance:0.195,rarity:"Uncommon",teamName:"Fall Bears",color:"#4b4851"},
  "Pumpkin Pie": {name:"Pumpkin Pie",url:"https://ac.blooket.com/marketassets/blooks/pumpkinpie.svg",displaySet:"Autumn",pack:BDB.pack.autumn,chance:0.195,rarity:"Uncommon",teamName:"Powerful Pies",color:"#d85e0b"},
  "Chipmunk": {name:"Chipmunk",url:"https://ac.blooket.com/marketassets/blooks/chipmunk.svg",displaySet:"Autumn",pack:BDB.pack.autumn,chance:0.195,rarity:"Uncommon",teamName:"Chosen Chipmunks",color:"#c86741"},
  "Cornucopia": {name:"Cornucopia",url:"https://ac.blooket.com/marketassets/blooks/cornucopia.svg",displaySet:"Autumn",pack:BDB.pack.autumn,chance:0.195,rarity:"Uncommon",teamName:"Cool Cornucopias",color:"#ac722d"},
  "Autumn Cat": {name:"Autumn Cat",url:"https://ac.blooket.com/marketassets/blooks/autumncat.svg",displaySet:"Autumn",pack:BDB.pack.autumn,chance:0.09,rarity:"Rare",teamName:"Cool Cats",color:"#f66700"},
  "Pumpkin Puppy": {name:"Pumpkin Puppy",url:"https://ac.blooket.com/marketassets/blooks/pumpkinpuppy.svg",displaySet:"Autumn",pack:BDB.pack.autumn,chance:0.09,rarity:"Rare",teamName:"Pumpkin Pups",color:"#f17917"},
  "Autumn Crow": {name:"Autumn Crow",url:"https://ac.blooket.com/marketassets/blooks/autumncrow.svg",displaySet:"Autumn",pack:BDB.pack.autumn,chance:0.0295,rarity:"Epic",teamName:"Crows With Hats",color:"#d09f55"},
  "Turkey": {name:"Turkey",url:"https://ac.blooket.com/marketassets/blooks/turkey.svg",displaySet:"Autumn",pack:BDB.pack.autumn,chance:0.01,rarity:"Legendary",teamName:"Terrific Turkeys",color:"#492c24"},
  "Snow Globe": {name:"Snow Globe",url:"https://ac.blooket.com/marketassets/blooks/snowglobe.svg",displaySet:"Blizzard",pack:BDB.pack.blizzard,chance:-1,rarity:"Uncommon",teamName:"Globetrotters",color:"#10afd1"},
  "Holiday Gift": {name:"Holiday Gift",url:"https://ac.blooket.com/marketassets/blooks/holidaygift.svg",displaySet:"Blizzard",pack:BDB.pack.blizzard,chance:-1,rarity:"Uncommon",teamName:"Generous Givers",color:"#4ab96d"},
  "Hot Chocolate": {name:"Hot Chocolate",url:"https://ac.blooket.com/marketassets/blooks/hotchocolate.svg",displaySet:"Blizzard",pack:BDB.pack.blizzard,chance:-1,rarity:"Uncommon",teamName:"Cocoa Coziness",color:"#663723"},
  "Holiday Wreath": {name:"Holiday Wreath",url:"https://ac.blooket.com/marketassets/blooks/holidaywreath.svg",displaySet:"Blizzard",pack:BDB.pack.blizzard,chance:-1,rarity:"Uncommon",teamName:"Wreath Wreckers",color:"#6c9355"},
  "Stocking": {name:"Stocking",url:"https://ac.blooket.com/marketassets/blooks/stocking.svg",displaySet:"Blizzard",pack:BDB.pack.blizzard,chance:-1,rarity:"Uncommon",teamName:"Stocking Stuffers",color:"#e52a00"},
  "Gingerbread Man": {name:"Gingerbread Man",url:"https://ac.blooket.com/marketassets/blooks/gingerbreadman.svg",displaySet:"Blizzard",pack:BDB.pack.blizzard,chance:-1,rarity:"Rare",teamName:"Cookie Crunchers",color:"#995b3c"},
  "Gingerbread House": {name:"Gingerbread House",url:"https://ac.blooket.com/marketassets/blooks/gingerbreadhouse.svg",displaySet:"Blizzard",pack:BDB.pack.blizzard,chance:-1,rarity:"Rare",teamName:"Healthy Houses",color:"#995b3c"},
  "Reindeer": {name:"Reindeer",url:"https://ac.blooket.com/marketassets/blooks/reindeer.svg",displaySet:"Blizzard",pack:BDB.pack.blizzard,chance:-1,rarity:"Rare",teamName:"Ready Reindeer",color:"#9a5b3c"},
  "Snowman": {name:"Snowman",url:"https://ac.blooket.com/marketassets/blooks/snowman.svg",displaySet:"Blizzard",pack:BDB.pack.blizzard,chance:-1,rarity:"Epic",teamName:"Summer Puddles",color:"#7ca1d5"},
  "Santa Claus": {name:"Santa Claus",url:"https://ac.blooket.com/marketassets/blooks/santaclaus.svg",displaySet:"Blizzard",pack:BDB.pack.blizzard,chance:-1,rarity:"Legendary",teamName:"Santa's Squad",color:"#d62027"},
  "Lil Bot": {name:"Lil Bot",url:"https://ac.blooket.com/marketassets/blooks/lilbot.svg",displaySet:"Bot",pack:BDB.pack.bot,chance:0.195,rarity:"Uncommon",teamName:"Lil Bots",color:"#3e564a"},
  "Lovely Bot": {name:"Lovely Bot",url:"https://ac.blooket.com/marketassets/blooks/lovelybot.svg",displaySet:"Bot",pack:BDB.pack.bot,chance:0.195,rarity:"Uncommon",teamName:"Lovely Leaders",color:"#f179af"},
  "Angry Bot": {name:"Angry Bot",url:"https://ac.blooket.com/marketassets/blooks/angrybot.svg",displaySet:"Bot",pack:BDB.pack.bot,chance:0.195,rarity:"Uncommon",teamName:"Evil Geniuses",color:"#f1613a"},
  "Happy Bot": {name:"Happy Bot",url:"https://ac.blooket.com/marketassets/blooks/happybot.svg",displaySet:"Bot",pack:BDB.pack.bot,chance:0.195,rarity:"Uncommon",teamName:"The Calculators",color:"#51ba6b"},
  "Watson": {name:"Watson",url:"https://ac.blooket.com/marketassets/blooks/watson.svg",displaySet:"Bot",pack:BDB.pack.bot,chance:0.09,rarity:"Rare",teamName:"Sophistication",color:"#d69b5a"},
  "Buddy Bot": {name:"Buddy Bot",url:"https://ac.blooket.com/marketassets/blooks/buddybot.svg",displaySet:"Bot",pack:BDB.pack.bot,chance:0.09,rarity:"Rare",teamName:"Best Buddies",color:"#9dc6ea"},
  "Brainy Bot": {name:"Brainy Bot",url:"https://ac.blooket.com/marketassets/blooks/brainybot.svg",displaySet:"Bot",pack:BDB.pack.bot,chance:0.037,rarity:"Epic",teamName:"Big Brain Bots",color:"#9ecf7a"},
  "Mega Bot": {name:"Mega Bot",url:"https://ac.blooket.com/marketassets/blooks/megabot.svg",displaySet:"Bot",pack:BDB.pack.bot,chance:0.003,rarity:"Legendary",teamName:"THE MEGA BOTS",color:"#d71f27"},
  "Toast": {name:"Toast",url:"https://ac.blooket.com/marketassets/blooks/toast.svg",displaySet:"Breakfast",pack:BDB.pack.breakfast,chance:0.125,rarity:"Uncommon",teamName:"Toasty Teammates",color:"#e9a058"},
  "Cereal": {name:"Cereal",url:"https://ac.blooket.com/marketassets/blooks/cereal.svg",displaySet:"Breakfast",pack:BDB.pack.breakfast,chance:0.125,rarity:"Uncommon",teamName:"Fruity Friends",color:"#2fa04a"},
  "Yogurt": {name:"Yogurt",url:"https://ac.blooket.com/marketassets/blooks/yogurt.svg",displaySet:"Breakfast",pack:BDB.pack.breakfast,chance:0.125,rarity:"Uncommon",teamName:"Yogurt Youngins",color:"#00aeef"},
  "Breakfast Combo": {name:"Breakfast Combo",url:"https://ac.blooket.com/marketassets/blooks/breakfastcombo.svg",displaySet:"Breakfast",pack:BDB.pack.breakfast,chance:0.125,rarity:"Uncommon",teamName:"Combo Cooks",color:"#c3d8ea"},
  "Orange Juice": {name:"Orange Juice",url:"https://ac.blooket.com/marketassets/blooks/orangejuice.svg",displaySet:"Breakfast",pack:BDB.pack.breakfast,chance:0.125,rarity:"Uncommon",teamName:"OJ OG's",color:"#f7941d"},
  "Milk": {name:"Milk",url:"https://ac.blooket.com/marketassets/blooks/milk.svg",displaySet:"Breakfast",pack:BDB.pack.breakfast,chance:0.125,rarity:"Uncommon",teamName:"Got Milk?",color:"#77c6e2"},
  "Waffle": {name:"Waffle",url:"https://ac.blooket.com/marketassets/blooks/waffle.svg",displaySet:"Breakfast",pack:BDB.pack.breakfast,chance:0.09,rarity:"Rare",teamName:"Holey Pancakes",color:"#f9a241"},
  "Pancakes": {name:"Pancakes",url:"https://ac.blooket.com/marketassets/blooks/pancakes.svg",displaySet:"Breakfast",pack:BDB.pack.breakfast,chance:0.09,rarity:"Rare",teamName:"Flat Waffles",color:"#f9a241"},
  "French Toast": {name:"French Toast",url:"https://ac.blooket.com/marketassets/blooks/frenchtoast.svg",displaySet:"Breakfast",pack:BDB.pack.breakfast,chance:0.05,rarity:"Epic",teamName:"Bonjour Boomers",color:"#f9a241"},
  "Pizza": {name:"Pizza",url:"https://ac.blooket.com/marketassets/blooks/pizza.svg",displaySet:"Breakfast",pack:BDB.pack.breakfast,chance:0.02,rarity:"Epic",teamName:"Pizza Popstars",color:"#fdb913"},
  "Light Blue": {name:"Light Blue",url:"https://ac.blooket.com/marketassets/blooks/lightblue.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Blooket Buds",color:"#0bc2cf"},
  "Black": {name:"Black",url:"https://ac.blooket.com/marketassets/blooks/black.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Black Team",color:"#3a3a3a"},
  "Red": {name:"Red",url:"https://ac.blooket.com/marketassets/blooks/red.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Red Team",color:"#d62728"},
  "Purple": {name:"Purple",url:"https://ac.blooket.com/marketassets/blooks/purple.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Purple Team",color:"#9a49aa"},
  "Pink": {name:"Pink",url:"https://ac.blooket.com/marketassets/blooks/pink.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Pink Team",color:"#e377c2"},
  "Orange": {name:"Orange",url:"https://ac.blooket.com/marketassets/blooks/orange.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Orange Team",color:"#ff7f0f"},
  "Lime": {name:"Lime",url:"https://ac.blooket.com/marketassets/blooks/lime.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Lime Team",color:"#b3dc23"},
  "Green": {name:"Green",url:"https://ac.blooket.com/marketassets/blooks/green.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Green Team",color:"#2ca02c"},
  "Teal": {name:"Teal",url:"https://ac.blooket.com/marketassets/blooks/teal.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Teal Team",color:"#007788"},
  "Tan": {name:"Tan",url:"https://ac.blooket.com/marketassets/blooks/tan.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Tan Team",color:"#d2b48c"},
  "Maroon": {name:"Maroon",url:"https://ac.blooket.com/marketassets/blooks/maroon.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Maroon Team",color:"#800000"},
  "Gray": {name:"Gray",url:"https://ac.blooket.com/marketassets/blooks/gray.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Gray Team",color:"#999999"},
  "Mint": {name:"Mint",url:"https://ac.blooket.com/marketassets/blooks/mint.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Mint Team",color:"#aaf0d1"},
  "Salmon": {name:"Salmon",url:"https://ac.blooket.com/marketassets/blooks/salmon.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Salmon Team",color:"#fa8072"},
  "Burgandy": {name:"Burgandy",url:"https://ac.blooket.com/marketassets/blooks/burgandy.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Burgandy Team",color:"#99254d"},
  "Baby Blue": {name:"Baby Blue",url:"https://ac.blooket.com/marketassets/blooks/babyblue.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Baby Blue Team",color:"#99ccff"},
  "Dust": {name:"Dust",url:"https://ac.blooket.com/marketassets/blooks/dust.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Dust Team",color:"#999966"},
  "Brown": {name:"Brown",url:"https://ac.blooket.com/marketassets/blooks/brown.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Brown Team",color:"#86592d"},
  "Dull Blue": {name:"Dull Blue",url:"https://ac.blooket.com/marketassets/blooks/dull.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Dim Blue Team",color:"#666699"},
  "Yellow": {name:"Yellow",url:"https://ac.blooket.com/marketassets/blooks/yellow.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Yellow Team",color:"#ffff4d"},
  "Blue": {name:"Blue",url:"https://ac.blooket.com/marketassets/blooks/blue.svg",displaySet:"Color",chance:1,rarity:"Common",teamName:"Blue Team",color:"#005ce6"},
  "Amber": {name:"Amber",url:"https://ac.blooket.com/marketassets/blooks/amber.svg",displaySet:"Dino",pack:BDB.pack.dino,chance:0.195,rarity:"Uncommon",teamName:"Ambitious Ambers",color:"#f7913f"},
  "Dino Egg": {name:"Dino Egg",url:"https://ac.blooket.com/marketassets/blooks/dinoegg.svg",displaySet:"Dino",pack:BDB.pack.dino,chance:0.195,rarity:"Uncommon",teamName:"Eggcellence",color:"#d69b5a"},
  "Dino Fossil": {name:"Dino Fossil",url:"https://ac.blooket.com/marketassets/blooks/dinofossil.svg",displaySet:"Dino",pack:BDB.pack.dino,chance:0.195,rarity:"Uncommon",teamName:"Fighting Fossils",color:"#a46735"},
  "Stegosaurus": {name:"Stegosaurus",url:"https://ac.blooket.com/marketassets/blooks/stegosaurus.svg",displaySet:"Dino",pack:BDB.pack.dino,chance:0.195,rarity:"Uncommon",teamName:"Hearty Herbivores",color:"#6c9355"},
  "Velociraptor": {name:"Velociraptor",url:"https://ac.blooket.com/marketassets/blooks/velociraptor.svg",displaySet:"Dino",pack:BDB.pack.dino,chance:0.09,rarity:"Rare",teamName:"Prehistorics",color:"#cf1f3d"},
  "Brontosaurus": {name:"Brontosaurus",url:"https://ac.blooket.com/marketassets/blooks/brontosaurus.svg",displaySet:"Dino",pack:BDB.pack.dino,chance:0.09,rarity:"Rare",teamName:"Big Giraffes",color:"#416eb5"},
  "Triceratops": {name:"Triceratops",url:"https://ac.blooket.com/marketassets/blooks/triceratops.svg",displaySet:"Dino",pack:BDB.pack.dino,chance:0.037,rarity:"Epic",teamName:"Daring Dinos",color:"#f1613a"},
  "Tyrannosaurus Rex": {name:"Tyrannosaurus Rex",url:"https://ac.blooket.com/marketassets/blooks/tyrannosaurusrex.svg",displaySet:"Dino",pack:BDB.pack.dino,chance:0.003,rarity:"Legendary",teamName:"The Terror",color:"#6c9355"},
  "Chick": {name:"Chick",url:"https://ac.blooket.com/marketassets/blooks/chick.svg",displaySet:"Farm Animal",chance:1,rarity:"Common",teamName:"Happy Hatchers",color:"#ffcd05"},
  "Chicken": {name:"Chicken",url:"https://ac.blooket.com/marketassets/blooks/chicken.svg",displaySet:"Farm Animal",chance:1,rarity:"Common",teamName:"Early Birds",color:"#ed1c24"},
  "Cow": {name:"Cow",url:"https://ac.blooket.com/marketassets/blooks/cow.svg",displaySet:"Farm Animal",chance:1,rarity:"Common",teamName:"Udder Chaos",color:"#58595b"},
  "Goat": {name:"Goat",url:"https://ac.blooket.com/marketassets/blooks/goat.svg",displaySet:"Farm Animal",chance:1,rarity:"Common",teamName:"Goatee OG's",color:"#c59a74"},
  "Horse": {name:"Horse",url:"https://ac.blooket.com/marketassets/blooks/horse.svg",displaySet:"Farm Animal",chance:1,rarity:"Common",teamName:"Radical Racers",color:"#995b3c"},
  "Pig": {name:"Pig",url:"https://ac.blooket.com/marketassets/blooks/pig.svg",displaySet:"Farm Animal",chance:1,rarity:"Common",teamName:"Orderly Oinkers",color:"#f6a9cb"},
  "Sheep": {name:"Sheep",url:"https://ac.blooket.com/marketassets/blooks/sheep.svg",displaySet:"Farm Animal",chance:1,rarity:"Common",teamName:"Wool Winners",color:"#414042"},
  "Duck": {name:"Duck",url:"https://ac.blooket.com/marketassets/blooks/duck.svg",displaySet:"Farm Animal",chance:1,rarity:"Common",teamName:"Quirky Quackers",color:"#4ab96d"},
  "Alpaca": {name:"Alpaca",url:"https://ac.blooket.com/marketassets/blooks/alpaca.svg",displaySet:"Farm Animal",chance:1,rarity:"Common",teamName:"Fluffy Friends",color:"#d4803c"},
  "Bear": {name:"Bear",url:"https://ac.blooket.com/marketassets/blooks/bear.svg",displaySet:"Forest Animal",chance:1,rarity:"Common",teamName:"Bear Necessities",color:"#995b3c"},
  "Moose": {name:"Moose",url:"https://ac.blooket.com/marketassets/blooks/moose.svg",displaySet:"Forest Animal",chance:1,rarity:"Common",teamName:"Moose Caboose",color:"#995b3c"},
  "Fox": {name:"Fox",url:"https://ac.blooket.com/marketassets/blooks/fox.svg",displaySet:"Forest Animal",chance:1,rarity:"Common",teamName:"Swifty Swipers",color:"#f49849"},
  "Raccoon": {name:"Raccoon",url:"https://ac.blooket.com/marketassets/blooks/raccoon.svg",displaySet:"Forest Animal",chance:1,rarity:"Common",teamName:"Trash Pandas",color:"#6d6e71"},
  "Squirrel": {name:"Squirrel",url:"https://ac.blooket.com/marketassets/blooks/squirrel.svg",displaySet:"Forest Animal",chance:1,rarity:"Common",teamName:"Nutty Buddies",color:"#d25927"},
  "Owl": {name:"Owl",url:"https://ac.blooket.com/marketassets/blooks/owl.svg",displaySet:"Forest Animal",chance:1,rarity:"Common",teamName:"Hooooooooo",color:"#594a42"},
  "Hedgehog": {name:"Hedgehog",url:"https://ac.blooket.com/marketassets/blooks/hedgehog.svg",displaySet:"Forest Animal",chance:1,rarity:"Common",teamName:"Spikey Friends",color:"#3f312b"},
  "Deer": {name:"Deer",url:"https://ac.blooket.com/marketassets/blooks/deer.svg",displaySet:"Forest Animal",chance:1,rarity:"Common",teamName:"Dashing Deer",color:"#c2541f"},
  "Wolf": {name:"Wolf",url:"https://ac.blooket.com/marketassets/blooks/wolf.svg",displaySet:"Forest Animal",chance:1,rarity:"Common",teamName:"The Pack",color:"#7b7c81"},
  "Beaver": {name:"Beaver",url:"https://ac.blooket.com/marketassets/blooks/beaver.svg",displaySet:"Forest Animal",chance:1,rarity:"Common",teamName:"Building Beavers",color:"#bd6231"},
  "Rainbow Jellyfish": {name:"Rainbow Jellyfish",url:"https://ac.blooket.com/marketassets/blooks/rainbowjellyfish.svg",displaySet:"Hidden",pack:BDB.pack.aquatic,chance:-1,rarity:"Chroma",teamName:"Underwater Disco",color:"#c9d6ed"},
  "Blizzard Clownfish": {name:"Blizzard Clownfish",url:"https://ac.blooket.com/marketassets/blooks/blizzardclownfish.svg",displaySet:"Hidden",pack:BDB.pack.aquatic,chance:-1,rarity:"Chroma",teamName:"Winter Circus",color:"#dae6f5"},
  "Lovely Frog": {name:"Lovely Frog",url:"https://ac.blooket.com/marketassets/blooks/lovelyfrog.svg",displaySet:"Hidden",pack:BDB.pack.aquatic,chance:-1,rarity:"Chroma",teamName:"Cute Companions",color:"#f38db6"},
  "Lucky Frog": {name:"Lucky Frog",url:"https://ac.blooket.com/marketassets/blooks/luckyfrog.svg",displaySet:"Hidden",pack:BDB.pack.aquatic,chance:-1,rarity:"Chroma",teamName:"Lucky Leapers",color:"#4eb151"},
  "Spring Frog": {name:"Spring Frog",url:"https://ac.blooket.com/marketassets/blooks/springfrog.svg",displaySet:"Hidden",pack:BDB.pack.aquatic,chance:-1,rarity:"Chroma",teamName:"Spring Spirit",color:"#f2bd8c"},
  "Poison Dart Frog": {name:"Poison Dart Frog",url:"https://ac.blooket.com/marketassets/blooks/poisondartfrog.svg",displaySet:"Hidden",pack:BDB.pack.aquatic,chance:-1,rarity:"Chroma",teamName:"TOXIC HAZARD",color:"#ffcb29"},
  "Lucky Hamster": {name:"Lucky Hamster",url:"https://ac.blooket.com/marketassets/blooks/luckyhamster.svg",displaySet:"Hidden",pack:BDB.pack.pet,chance:-1,rarity:"Chroma",teamName:"Little Luckies",color:"#17a34a"},
  "Chocolate Rabbit": {name:"Chocolate Rabbit",url:"https://ac.blooket.com/marketassets/blooks/chocolaterabbit.svg",displaySet:"Hidden",pack:BDB.pack.pet,chance:-1,rarity:"Chroma",teamName:"Ready Rabbits",color:"#914b32"},
  "Spring Rabbit": {name:"Spring Rabbit",url:"https://ac.blooket.com/marketassets/blooks/springrabbit.svg",displaySet:"Hidden",pack:BDB.pack.pet,chance:-1,rarity:"Chroma",teamName:"Egg Hunters",color:"#57b5d0"},
  "Lemon Crab": {name:"Lemon Crab",url:"https://ac.blooket.com/marketassets/blooks/lemoncrab.svg",displaySet:"Hidden",pack:BDB.pack.aquatic,chance:-1,rarity:"Chroma",teamName:"Citrus Claws",color:"#f7d959"},
  "Pirate Pufferfish": {name:"Pirate Pufferfish",url:"https://ac.blooket.com/marketassets/blooks/piratepufferfish.svg",displaySet:"Hidden",pack:BDB.pack.aquatic,chance:0.0003,rarity:"Chroma",teamName:"Perfect Pirates",color:"#8b5aa5"},
  "Donut Blobfish": {name:"Donut Blobfish",url:"https://ac.blooket.com/marketassets/blooks/donutblobfish.svg",displaySet:"Hidden",pack:BDB.pack.aquatic,chance:-1,rarity:"Chroma",teamName:"Donut Mess Up",color:"#f3c1da"},
  "Crimson Octopus": {name:"Crimson Octopus",url:"https://ac.blooket.com/marketassets/blooks/crimsonoctopus.svg",displaySet:"Hidden",pack:BDB.pack.aquatic,chance:-1,rarity:"Chroma",teamName:"Red Team 8",color:"#b3303b"},
  "Rainbow Narwhal": {name:"Rainbow Narwhal",url:"https://ac.blooket.com/marketassets/blooks/rainbownarwhal.svg",displaySet:"Hidden",pack:BDB.pack.aquatic,chance:-1,rarity:"Chroma",teamName:"Sea Unicorns",color:"#cfe8e9"},
  "Frost Wreath": {name:"Frost Wreath",url:"https://ac.blooket.com/marketassets/blooks/frostwreath.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Chroma",teamName:"TEAM FREEZE",color:"#2086df"},
  "Tropical Globe": {name:"Tropical Globe",url:"https://ac.blooket.com/marketassets/blooks/tropicalglobe.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Chroma",teamName:"WARM HUGS",color:"#fb7c2f"},
  "New York Snow Globe": {name:"New York Snow Globe",url:"https://ac.blooket.com/marketassets/blooks/newyorksnowglobe.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Chroma",teamName:"NY Tourists",color:"#4aa891"},
  "London Snow Globe": {name:"London Snow Globe",url:"https://ac.blooket.com/marketassets/blooks/londonsnowglobe.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Chroma",teamName:"London Tourists",color:"#c88829"},
  "Japan Snow Globe": {name:"Japan Snow Globe",url:"https://ac.blooket.com/marketassets/blooks/japansnowglobe.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Chroma",teamName:"Japan Tourists",color:"#d62027"},
  "Egypt Snow Globe": {name:"Egypt Snow Globe",url:"https://ac.blooket.com/marketassets/blooks/egyptsnowglobe.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Chroma",teamName:"Egypt Tourists",color:"#d47630"},
  "Paris Snow Globe": {name:"Paris Snow Globe",url:"https://ac.blooket.com/marketassets/blooks/parissnowglobe.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Chroma",teamName:"Paris Tourists",color:"#858585"},
  "Red Sweater Snowman": {name:"Red Sweater Snowman",url:"https://ac.blooket.com/marketassets/blooks/redsweatersnowman.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Chroma",teamName:"Festive Snowmen",color:"#c12626"},
  "Blue Sweater Snowman": {name:"Blue Sweater Snowman",url:"https://ac.blooket.com/marketassets/blooks/bluesweatersnowman.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Chroma",teamName:"Team Snow",color:"#2f4c6c"},
  "Elf Sweater Snowman": {name:"Elf Sweater Snowman",url:"https://ac.blooket.com/marketassets/blooks/elfsweatersnowman.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Chroma",teamName:"Warm Hugs",color:"#269830"},
  "Santa Claws": {name:"Santa Claws",url:"https://ac.blooket.com/marketassets/blooks/santaclaws.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Chroma",teamName:"Christmas Claws",color:"#ff2f32"},
  "Cookies Combo": {name:"Cookies Combo",url:"https://ac.blooket.com/marketassets/blooks/cookiescombo.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Chroma",teamName:"Cool Cookies",color:"#bd7637"},
  "Chilly Flamingo": {name:"Chilly Flamingo",url:"https://ac.blooket.com/marketassets/blooks/chillyflamingo.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Chroma",teamName:"Fly Flamingos",color:"#0fa213"},
  "Snowy Bush Monster": {name:"Snowy Bush Monster",url:"https://ac.blooket.com/marketassets/blooks/snowybushmonster.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Chroma",teamName:"Festive Ferns",color:"#44c649"},
  "Nutcracker Koala": {name:"Nutcracker Koala",url:"https://ac.blooket.com/marketassets/blooks/nutcrackerkoala.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Chroma",teamName:"Fancy Koalas",color:"#dd2a17"},
  "Sandwich": {name:"Sandwich",url:"https://ac.blooket.com/marketassets/blooks/sandwich.svg",displaySet:"Hidden",pack:BDB.pack.breakfast,chance:-1,rarity:"Epic",teamName:"Super Sandwiches",color:"#8cbd40"},
  "Ice Slime": {name:"Ice Slime",url:"https://ac.blooket.com/marketassets/blooks/iceslime.svg",displaySet:"Hidden",pack:BDB.pack.icemonster,chance:0.0008,rarity:"Chroma",teamName:"Slip n Slide",color:"#42b7ea"},
  "Frozen Fossil": {name:"Frozen Fossil",url:"https://ac.blooket.com/marketassets/blooks/frozenfossil.svg",displaySet:"Hidden",pack:BDB.pack.icemonster,chance:0.0005,rarity:"Chroma",teamName:"Ice Age",color:"#9ed2ef"},
  "Ice Crab": {name:"Ice Crab",url:"https://ac.blooket.com/marketassets/blooks/icecrab.svg",displaySet:"Hidden",pack:BDB.pack.icemonster,chance:0.0002,rarity:"Chroma",teamName:"ICE ICE BABY",color:"#3ea8cf"},
  "Rainbow Panda": {name:"Rainbow Panda",url:"https://ac.blooket.com/marketassets/blooks/rainbowpanda.svg",displaySet:"Hidden",pack:BDB.pack.safari,chance:0.0002,rarity:"Chroma",teamName:"The Rainbows",color:"#2f2c38"},
  "White Peacock": {name:"White Peacock",url:"https://ac.blooket.com/marketassets/blooks/whitepeacock.svg",displaySet:"Hidden",pack:BDB.pack.safari,chance:-1,rarity:"Chroma",teamName:"Fast Feathers",color:"#69c1d3"},
  "Tiger Zebra": {name:"Tiger Zebra",url:"https://ac.blooket.com/marketassets/blooks/tigerzebra.svg",displaySet:"Hidden",pack:BDB.pack.safari,chance:-1,rarity:"Chroma",teamName:"Agent Zs",color:"#f18221"},
  "Teal Platypus": {name:"Teal Platypus",url:"https://ac.blooket.com/marketassets/blooks/tealplatypus.svg",displaySet:"Hidden",pack:BDB.pack.outback,chance:0.0003,rarity:"Chroma",teamName:"Detectives",color:"#1fa49f"},
  "Golden Pumpkin Pie": {name:"Golden Pumpkin Pie",url:"https://ac.blooket.com/marketassets/blooks/goldenpumpkinpie.svg",displaySet:"Hidden",pack:BDB.pack.autumn,chance:0.0005,rarity:"Chroma",teamName:"Expensive Pies",color:"#ffae12"},
  "Red Astronaut": {name:"Red Astronaut",url:"https://ac.blooket.com/marketassets/blooks/redastronaut.svg",displaySet:"Hidden",pack:BDB.pack.space,chance:0.0005,rarity:"Chroma",teamName:"Red Crewmates",color:"#ee2324"},
  "Orange Astronaut": {name:"Orange Astronaut",url:"https://ac.blooket.com/marketassets/blooks/orangeastronaut.svg",displaySet:"Hidden",pack:BDB.pack.space,chance:0.0005,rarity:"Chroma",teamName:"Orange Crewmates",color:"#f79320"},
  "Yellow Astronaut": {name:"Yellow Astronaut",url:"https://ac.blooket.com/marketassets/blooks/yellowastronaut.svg",displaySet:"Hidden",pack:BDB.pack.space,chance:0.0005,rarity:"Chroma",teamName:"Yellow Crewmates",color:"#edcb1f"},
  "Lime Astronaut": {name:"Lime Astronaut",url:"https://ac.blooket.com/marketassets/blooks/limeastronaut.svg",displaySet:"Hidden",pack:BDB.pack.space,chance:-1,rarity:"Chroma",teamName:"Lime Crewmates",color:"#61b446"},
  "Green Astronaut": {name:"Green Astronaut",url:"https://ac.blooket.com/marketassets/blooks/greenastronaut.svg",displaySet:"Hidden",pack:BDB.pack.space,chance:0.0005,rarity:"Chroma",teamName:"Green Crewmates",color:"#197b42"},
  "Cyan Astronaut": {name:"Cyan Astronaut",url:"https://ac.blooket.com/marketassets/blooks/cyanastronaut.svg",displaySet:"Hidden",pack:BDB.pack.space,chance:-1,rarity:"Chroma",teamName:"Cyan Crewmates",color:"#74cbcb"},
  "Blue Astronaut": {name:"Blue Astronaut",url:"https://ac.blooket.com/marketassets/blooks/blueastronaut.svg",displaySet:"Hidden",pack:BDB.pack.space,chance:-1,rarity:"Chroma",teamName:"Blue Crewmates",color:"#2867b1"},
  "Pink Astronaut": {name:"Pink Astronaut",url:"https://ac.blooket.com/marketassets/blooks/pinkastronaut.svg",displaySet:"Hidden",pack:BDB.pack.space,chance:0.0005,rarity:"Chroma",teamName:"Pink Crewmates",color:"#e573ac"},
  "Purple Astronaut": {name:"Purple Astronaut",url:"https://ac.blooket.com/marketassets/blooks/purpleastronaut.svg",displaySet:"Hidden",pack:BDB.pack.space,chance:-1,rarity:"Chroma",teamName:"Purple Crewmates",color:"#9068ad"},
  "Brown Astronaut": {name:"Brown Astronaut",url:"https://ac.blooket.com/marketassets/blooks/brownastronaut.svg",displaySet:"Hidden",pack:BDB.pack.space,chance:0.0005,rarity:"Chroma",teamName:"Team Galaxy",color:"#9e5a3a"},
  "Black Astronaut": {name:"Black Astronaut",url:"https://ac.blooket.com/marketassets/blooks/blackastronaut.svg",displaySet:"Hidden",pack:BDB.pack.space,chance:0.0005,rarity:"Chroma",teamName:"Team Space",color:"#413f56"},
  "Lovely Planet": {name:"Lovely Planet",url:"https://ac.blooket.com/marketassets/blooks/lovelyplanet.svg",displaySet:"Hidden",pack:BDB.pack.space,chance:-1,rarity:"Chroma",teamName:"Lovers",color:"#db302c"},
  "Lovely Peacock": {name:"Lovely Peacock",url:"https://ac.blooket.com/marketassets/blooks/lovelypeacock.svg",displaySet:"Hidden",pack:BDB.pack.safari,chance:-1,rarity:"Chroma",teamName:"Lovers Too",color:"#d33535"},
  "Haunted Pumpkin": {name:"Haunted Pumpkin",url:"https://ac.blooket.com/marketassets/blooks/hauntedpumpkin.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Chroma",teamName:"Haunted Helpers",color:"#939385"},
  "Pumpkin Cookie": {name:"Pumpkin Cookie",url:"https://ac.blooket.com/marketassets/blooks/pumpkincookie.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Chroma",teamName:"Cookie Monsters",color:"#f7941d"},
  "Ghost Cookie": {name:"Ghost Cookie",url:"https://ac.blooket.com/marketassets/blooks/ghostcookie.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Chroma",teamName:"COOKIES",color:"#c2def4"},
  "Red Gummy Bear": {name:"Red Gummy Bear",url:"https://ac.blooket.com/marketassets/blooks/redgummybear.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Chroma",teamName:"Red Gummies",color:"#d81523"},
  "Blue Gummy Bear": {name:"Blue Gummy Bear",url:"https://ac.blooket.com/marketassets/blooks/bluegummybear.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Chroma",teamName:"Blue Gummies",color:"#2986b6"},
  "Green Gummy Bear": {name:"Green Gummy Bear",url:"https://ac.blooket.com/marketassets/blooks/greengummybear.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Chroma",teamName:"Green Gummies",color:"#01ca00"},
  "Chick Chicken": {name:"Chick Chicken",url:"https://ac.blooket.com/marketassets/blooks/chickchicken.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Chroma",teamName:"Tricky Chickens",color:"#eaa622"},
  "Chicken Chick": {name:"Chicken Chick",url:"https://ac.blooket.com/marketassets/blooks/chickenchick.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Chroma",teamName:"Tricky Chicks",color:"#9dd7f4"},
  "Raccoon Bandit": {name:"Raccoon Bandit",url:"https://ac.blooket.com/marketassets/blooks/raccoonbandit.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Chroma",teamName:"Bandits",color:"#bb2222"},
  "Owl Sheriff": {name:"Owl Sheriff",url:"https://ac.blooket.com/marketassets/blooks/owlsheriff.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Chroma",teamName:"Sheriffs",color:"#84582b"},
  "Vampire Frog": {name:"Vampire Frog",url:"https://ac.blooket.com/marketassets/blooks/vampirefrog.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Chroma",teamName:"Fanged Frogs",color:"#312222"},
  "Pumpkin King": {name:"Pumpkin King",url:"https://ac.blooket.com/marketassets/blooks/pumpkinking.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Chroma",teamName:"Halloween Kings",color:"#c1541e"},
  "Leprechaun": {name:"Leprechaun",url:"https://ac.blooket.com/marketassets/blooks/leprechaun.svg",displaySet:"Hidden",pack:BDB.pack.forestanimal,chance:-1,rarity:"Chroma",teamName:"Leprechauns",color:"#17a34a"},
  "Anaconda Wizard": {name:"Anaconda Wizard",url:"https://ac.blooket.com/marketassets/blooks/anacondawizard.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Chroma",teamName:"Sneaky Wizards",color:"#252165"},
  "Spooky Pumpkin": {name:"Spooky Pumpkin",url:"https://ac.blooket.com/marketassets/blooks/spookypumpkin.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Chroma",teamName:"Ghostly Geniuses",color:"#66f59b"},
  "Spooky Mummy": {name:"Spooky Mummy",url:"https://ac.blooket.com/marketassets/blooks/spookymummy.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Chroma",teamName:"Spooky 'n' Scary",color:"#66f59b"},
  "Agent Owl": {name:"Agent Owl",url:"https://ac.blooket.com/marketassets/blooks/agentowl.svg",displaySet:"Hidden",pack:BDB.pack.forestanimal,chance:-1,rarity:"Chroma",teamName:"Secret Agents",color:"#32da4e"},
  "Master Elf": {name:"Master Elf",url:"https://ac.blooket.com/marketassets/blooks/masterelf.svg",displaySet:"Hidden",pack:BDB.pack.medieval,chance:-1,rarity:"Chroma",teamName:"The Masters",color:"#3a3a3a"},
  "Party Pig": {name:"Party Pig",url:"https://ac.blooket.com/marketassets/blooks/partypig.svg",displaySet:"Hidden",pack:BDB.pack.farmanimal,chance:-1,rarity:"Chroma",teamName:"MODS",color:"#f6a9cb"},
  "Wise Owl": {name:"Wise Owl",url:"https://ac.blooket.com/marketassets/blooks/wiseowl.svg",displaySet:"Hidden",pack:BDB.pack.forestanimal,chance:-1,rarity:"Unique",teamName:"Wise Winners",color:"#a55a30"},
  "Spooky Ghost": {name:"Spooky Ghost",url:"https://ac.blooket.com/marketassets/blooks/spookyghost.svg",displaySet:"Hidden",pack:BDB.pack.spooky,chance:-1,rarity:"Mystical",teamName:"Spooksters",color:"#66f59b"},
  "Phantom King": {name:"Phantom King",url:"https://ac.blooket.com/marketassets/blooks/phantomking.svg",displaySet:"Hidden",pack:BDB.pack.medieval,chance:-1,rarity:"Mystical",teamName:"The True Kings",color:"#2cf4e1"},
  "Tim the Alien": {name:"Tim the Alien",url:"https://ac.blooket.com/marketassets/blooks/timthealien.svg",displaySet:"Hidden",pack:BDB.pack.space,chance:-1,rarity:"Mystical",teamName:"Tim's Friends",color:"#8dc63f"},
  "Rainbow Astronaut": {name:"Rainbow Astronaut",url:"https://ac.blooket.com/marketassets/blooks/rainbowastronaut.svg",displaySet:"Hidden",pack:BDB.pack.space,chance:-1,rarity:"Mystical",teamName:"RAINBOW",color:"#9068ad"},
  "Hamsta Claus": {name:"Hamsta Claus",url:"https://ac.blooket.com/marketassets/blooks/hamstaclaus.svg",displaySet:"Hidden",pack:BDB.pack.blizzard,chance:-1,rarity:"Mystical",teamName:"Holly Hamsters",color:"#d12626"},
  "Ice Bat": {name:"Ice Bat",url:"https://ac.blooket.com/marketassets/blooks/icebat.svg",displaySet:"Ice Monster",pack:BDB.pack.icemonster,chance:0.195,rarity:"Uncommon",teamName:"Frozen Wings",color:"#295eb6"},
  "Ice Bug": {name:"Ice Bug",url:"https://ac.blooket.com/marketassets/blooks/icebug.svg",displaySet:"Ice Monster",pack:BDB.pack.icemonster,chance:0.195,rarity:"Uncommon",teamName:"Bold Bugs",color:"#337ae2"},
  "Ice Elemental": {name:"Ice Elemental",url:"https://ac.blooket.com/marketassets/blooks/iceelemental.svg",displaySet:"Ice Monster",pack:BDB.pack.icemonster,chance:0.195,rarity:"Uncommon",teamName:"ICED",color:"#58c7f0"},
  "Rock Monster": {name:"Rock Monster",url:"https://ac.blooket.com/marketassets/blooks/rockmonster.svg",displaySet:"Ice Monster",pack:BDB.pack.icemonster,chance:0.195,rarity:"Uncommon",teamName:"Ready Rocks",color:"#5a617f"},
  "Dink": {name:"Dink",url:"https://ac.blooket.com/marketassets/blooks/dink.svg",displaySet:"Ice Monster",pack:BDB.pack.icemonster,chance:0.085,rarity:"Rare",teamName:"Ding Donk 1",color:"#8f78a5"},
  "Donk": {name:"Donk",url:"https://ac.blooket.com/marketassets/blooks/donk.svg",displaySet:"Ice Monster",pack:BDB.pack.icemonster,chance:0.085,rarity:"Rare",teamName:"Ding Donk 2",color:"#677c9e"},
  "Bush Monster": {name:"Bush Monster",url:"https://ac.blooket.com/marketassets/blooks/bushmonster.svg",displaySet:"Ice Monster",pack:BDB.pack.icemonster,chance:0.045,rarity:"Epic",teamName:"Brave Bushes",color:"#44c649"},
  "Yeti": {name:"Yeti",url:"https://ac.blooket.com/marketassets/blooks/yeti.svg",displaySet:"Ice Monster",pack:BDB.pack.icemonster,chance:0.0035,rarity:"Legendary",teamName:"Everest",color:"#5a81c5"},
  "Witch": {name:"Witch",url:"https://ac.blooket.com/marketassets/blooks/witch.svg",displaySet:"Medieval",pack:BDB.pack.medieval,chance:0.134,rarity:"Uncommon",teamName:"Cauldron City",color:"#4ab96d"},
  "Wizard": {name:"Wizard",url:"https://ac.blooket.com/marketassets/blooks/wizard.svg",displaySet:"Medieval",pack:BDB.pack.medieval,chance:0.134,rarity:"Uncommon",teamName:"Wiz Kids",color:"#5a459c"},
  "Elf": {name:"Elf",url:"https://ac.blooket.com/marketassets/blooks/elf.svg",displaySet:"Medieval",pack:BDB.pack.medieval,chance:0.134,rarity:"Uncommon",teamName:"Agile Archers",color:"#a7d054"},
  "Fairy": {name:"Fairy",url:"https://ac.blooket.com/marketassets/blooks/fairy.svg",displaySet:"Medieval",pack:BDB.pack.medieval,chance:0.134,rarity:"Uncommon",teamName:"Mighty Myths",color:"#df6d9c"},
  "Slime Monster": {name:"Slime Monster",url:"https://ac.blooket.com/marketassets/blooks/slimemonster.svg",displaySet:"Medieval",pack:BDB.pack.medieval,chance:0.134,rarity:"Uncommon",teamName:"Slimy McSlimes",color:"#2fa04a"},
  "Jester": {name:"Jester",url:"https://ac.blooket.com/marketassets/blooks/jester.svg",displaySet:"Medieval",pack:BDB.pack.medieval,chance:0.09,rarity:"Rare",teamName:"Jolly Jokesters",color:"#be1e2d"},
  "Dragon": {name:"Dragon",url:"https://ac.blooket.com/marketassets/blooks/dragon.svg",displaySet:"Medieval",pack:BDB.pack.medieval,chance:0.09,rarity:"Rare",teamName:"Fire Hazards",color:"#2fa04a"},
  "Queen": {name:"Queen",url:"https://ac.blooket.com/marketassets/blooks/queen.svg",displaySet:"Medieval",pack:BDB.pack.medieval,chance:0.09,rarity:"Rare",teamName:"Royal Rebels",color:"#9e1f63"},
  "Unicorn": {name:"Unicorn",url:"https://ac.blooket.com/marketassets/blooks/unicorn.svg",displaySet:"Medieval",pack:BDB.pack.medieval,chance:0.05,rarity:"Epic",teamName:"Land Narwhals",color:"#f6afce"},
  "King": {name:"King",url:"https://ac.blooket.com/marketassets/blooks/king.svg",displaySet:"Medieval",pack:BDB.pack.medieval,chance:0.01,rarity:"Legendary",teamName:"THE SQUAD",color:"#ee2640"},
  "Dingo": {name:"Dingo",url:"https://ac.blooket.com/marketassets/blooks/dingo.svg",displaySet:"Outback",pack:BDB.pack.outback,chance:0.1875,rarity:"Uncommon",teamName:"Daring Dingos",color:"#e38e4d"},
  "Echidna": {name:"Echidna",url:"https://ac.blooket.com/marketassets/blooks/echidna.svg",displaySet:"Outback",pack:BDB.pack.outback,chance:0.1875,rarity:"Uncommon",teamName:"Erudite Echidnas",color:"#88766b"},
  "Koala": {name:"Koala",url:"https://ac.blooket.com/marketassets/blooks/koala.svg",displaySet:"Outback",pack:BDB.pack.outback,chance:0.1875,rarity:"Uncommon",teamName:"Kool Koalas",color:"#827b8b"},
  "Kookaburra": {name:"Kookaburra",url:"https://ac.blooket.com/marketassets/blooks/kookaburra.svg",displaySet:"Outback",pack:BDB.pack.outback,chance:0.1875,rarity:"Uncommon",teamName:"Kind Kookaburras",color:"#4d4d85"},
  "Platypus": {name:"Platypus",url:"https://ac.blooket.com/marketassets/blooks/platypus.svg",displaySet:"Outback",pack:BDB.pack.outback,chance:0.07,rarity:"Rare",teamName:"Playful Platypus",color:"#9d594e"},
  "Joey": {name:"Joey",url:"https://ac.blooket.com/marketassets/blooks/joey.svg",displaySet:"Outback",pack:BDB.pack.outback,chance:0.07,rarity:"Rare",teamName:"Jumping Joeys",color:"#9f693c"},
  "Kangaroo": {name:"Kangaroo",url:"https://ac.blooket.com/marketassets/blooks/kangaroo.svg",displaySet:"Outback",pack:BDB.pack.outback,chance:0.07,rarity:"Rare",teamName:"Kicking Kangaroos",color:"#b9853f"},
  "Crocodile": {name:"Crocodile",url:"https://ac.blooket.com/marketassets/blooks/crocodile.svg",displaySet:"Outback",pack:BDB.pack.outback,chance:0.036,rarity:"Epic",teamName:"The Crocs",color:"#679b4f"},
  "Sugar Glider": {name:"Sugar Glider",url:"https://ac.blooket.com/marketassets/blooks/sugarglider.svg",displaySet:"Outback",pack:BDB.pack.outback,chance:0.0037,rarity:"Legendary",teamName:"Fancy Flyers",color:"#131f2b"},
  "Dog": {name:"Dog",url:"https://ac.blooket.com/marketassets/blooks/dog.svg",displaySet:"Pet",chance:1,rarity:"Common",teamName:"Diligent Doggos",color:"#995b3c"},
  "Cat": {name:"Cat",url:"https://ac.blooket.com/marketassets/blooks/cat.svg",displaySet:"Pet",chance:1,rarity:"Common",teamName:"Meow Mates",color:"#f49849"},
  "Rabbit": {name:"Rabbit",url:"https://ac.blooket.com/marketassets/blooks/rabbit.svg",displaySet:"Pet",chance:1,rarity:"Common",teamName:"Fluffy Bunnies",color:"#e7bf9a"},
  "Goldfish": {name:"Goldfish",url:"https://ac.blooket.com/marketassets/blooks/goldfish.svg",displaySet:"Pet",chance:1,rarity:"Common",teamName:"Pretty Fishies",color:"#f18221"},
  "Hamster": {name:"Hamster",url:"https://ac.blooket.com/marketassets/blooks/hamster.svg",displaySet:"Pet",chance:1,rarity:"Common",teamName:"HAMSTA TIME",color:"#ce9176"},
  "Turtle": {name:"Turtle",url:"https://ac.blooket.com/marketassets/blooks/turtle.svg",displaySet:"Pet",chance:1,rarity:"Common",teamName:"Shell Shocked",color:"#619a3c"},
  "Kitten": {name:"Kitten",url:"https://ac.blooket.com/marketassets/blooks/kitten.svg",displaySet:"Pet",chance:1,rarity:"Common",teamName:"Purrfect People",color:"#58595b"},
  "Puppy": {name:"Puppy",url:"https://ac.blooket.com/marketassets/blooks/puppy.svg",displaySet:"Pet",chance:1,rarity:"Common",teamName:"Super Puppers",color:"#414042"},
  "Panda": {name:"Panda",url:"https://ac.blooket.com/marketassets/blooks/panda.svg",displaySet:"Safari",pack:BDB.pack.safari,chance:0.15,rarity:"Uncommon",teamName:"Prime Pandas",color:"#2f2c38"},
  "Sloth": {name:"Sloth",url:"https://ac.blooket.com/marketassets/blooks/sloth.svg",displaySet:"Safari",pack:BDB.pack.safari,chance:0.15,rarity:"Uncommon",teamName:"Silly Sloths",color:"#765b46"},
  "Tenrec": {name:"Tenrec",url:"https://ac.blooket.com/marketassets/blooks/tenrec.svg",displaySet:"Safari",pack:BDB.pack.safari,chance:0.15,rarity:"Uncommon",teamName:"Troubling Tenrecs",color:"#ffcb29"},
  "Flamingo": {name:"Flamingo",url:"https://ac.blooket.com/marketassets/blooks/flamingo.svg",displaySet:"Safari",pack:BDB.pack.safari,chance:0.15,rarity:"Uncommon",teamName:"Pink And Proud",color:"#f38db6"},
  "Zebra": {name:"Zebra",url:"https://ac.blooket.com/marketassets/blooks/zebra.svg",displaySet:"Safari",pack:BDB.pack.safari,chance:0.15,rarity:"Uncommon",teamName:"Super Stripes",color:"#2f2c38"},
  "Elephant": {name:"Elephant",url:"https://ac.blooket.com/marketassets/blooks/elephant.svg",displaySet:"Safari",pack:BDB.pack.safari,chance:0.07,rarity:"Rare",teamName:"Erudite Elephants",color:"#bac4e4"},
  "Lemur": {name:"Lemur",url:"https://ac.blooket.com/marketassets/blooks/lemur.svg",displaySet:"Safari",pack:BDB.pack.safari,chance:0.07,rarity:"Rare",teamName:"Leaping Lemurs",color:"#aeaba7"},
  "Peacock": {name:"Peacock",url:"https://ac.blooket.com/marketassets/blooks/peacock.svg",displaySet:"Safari",pack:BDB.pack.safari,chance:0.07,rarity:"Rare",teamName:"Fearless Feathers",color:"#2b3990"},
  "Chameleon": {name:"Chameleon",url:"https://ac.blooket.com/marketassets/blooks/chameleon.svg",displaySet:"Safari",pack:BDB.pack.safari,chance:0.0348,rarity:"Epic",teamName:"Cool Chameleons",color:"#8dc63f"},
  "Lion": {name:"Lion",url:"https://ac.blooket.com/marketassets/blooks/lion.svg",displaySet:"Safari",pack:BDB.pack.safari,chance:0.005,rarity:"Legendary",teamName:"The Pride",color:"#f47e20"},
  "Earth": {name:"Earth",url:"https://ac.blooket.com/marketassets/blooks/earth.svg",displaySet:"Space",pack:BDB.pack.space,chance:0.1875,rarity:"Uncommon",teamName:"Earthlings",color:"#416eb5"},
  "Meteor": {name:"Meteor",url:"https://ac.blooket.com/marketassets/blooks/meteor.svg",displaySet:"Space",pack:BDB.pack.space,chance:0.1875,rarity:"Uncommon",teamName:"Meteorites",color:"#c68c3c"},
  "Stars": {name:"Stars",url:"https://ac.blooket.com/marketassets/blooks/stars.svg",displaySet:"Space",pack:BDB.pack.space,chance:0.1875,rarity:"Uncommon",teamName:"Shooting Stars",color:"#19184d"},
  "Alien": {name:"Alien",url:"https://ac.blooket.com/marketassets/blooks/alien.svg",displaySet:"Space",pack:BDB.pack.space,chance:0.1875,rarity:"Uncommon",teamName:"Awesome Aliens",color:"#8dc63f"},
  "Planet": {name:"Planet",url:"https://ac.blooket.com/marketassets/blooks/planet.svg",displaySet:"Space",pack:BDB.pack.space,chance:0.1,rarity:"Rare",teamName:"Galactic Warriors",color:"#9dc6ea"},
  "UFO": {name:"UFO",url:"https://ac.blooket.com/marketassets/blooks/ufo.svg",displaySet:"Space",pack:BDB.pack.space,chance:0.1,rarity:"Rare",teamName:"Unidentified Students",color:"#a15095"},
  "Spaceship": {name:"Spaceship",url:"https://ac.blooket.com/marketassets/blooks/spaceship.svg",displaySet:"Space",pack:BDB.pack.space,chance:0.045,rarity:"Epic",teamName:"We Have a Problem",color:"#ffcb29"},
  "Astronaut": {name:"Astronaut",url:"https://ac.blooket.com/marketassets/blooks/astronaut.svg",displaySet:"Space",pack:BDB.pack.space,chance:0.0045,rarity:"Legendary",teamName:"Astro Aviators",color:"#9bd4ee"},
  "Pumpkin": {name:"Pumpkin",url:"https://ac.blooket.com/marketassets/blooks/pumpkin.svg",displaySet:"Spooky",pack:BDB.pack.spooky,chance:-1,rarity:"Uncommon",teamName:"Pumpkin Smashers",color:"#f7941d"},
  "Swamp Monster": {name:"Swamp Monster",url:"https://ac.blooket.com/marketassets/blooks/swampmonster.svg",displaySet:"Spooky",pack:BDB.pack.spooky,chance:-1,rarity:"Uncommon",teamName:"Swamp Things",color:"#2fa04a"},
  "Frankenstein": {name:"Frankenstein",url:"https://ac.blooket.com/marketassets/blooks/frankenstein.svg",displaySet:"Spooky",pack:BDB.pack.spooky,chance:-1,rarity:"Uncommon",teamName:"The Monsters",color:"#56884b"},
  "Vampire": {name:"Vampire",url:"https://ac.blooket.com/marketassets/blooks/vampire.svg",displaySet:"Spooky",pack:BDB.pack.spooky,chance:-1,rarity:"Uncommon",teamName:"Valiant Vampires",color:"#a15095"},
  "Zombie": {name:"Zombie",url:"https://ac.blooket.com/marketassets/blooks/zombie.svg",displaySet:"Spooky",pack:BDB.pack.spooky,chance:-1,rarity:"Rare",teamName:"Walking Dead",color:"#80a55d"},
  "Mummy": {name:"Mummy",url:"https://ac.blooket.com/marketassets/blooks/mummy.svg",displaySet:"Spooky",pack:BDB.pack.spooky,chance:-1,rarity:"Rare",teamName:"Motivated Mummies",color:"#e8d8c7"},
  "Caramel Apple": {name:"Caramel Apple",url:"https://ac.blooket.com/marketassets/blooks/caramelapple2.svg",displaySet:"Spooky",pack:BDB.pack.spooky,chance:-1,rarity:"Rare",teamName:"Caring Caramels",color:"#8d432a"},
  "Candy Corn": {name:"Candy Corn",url:"https://ac.blooket.com/marketassets/blooks/candycorn.svg",displaySet:"Spooky",pack:BDB.pack.spooky,chance:-1,rarity:"Rare",teamName:"Kind Candy",color:"#f06708"},
  "Crow": {name:"Crow",url:"https://ac.blooket.com/marketassets/blooks/crow.svg",displaySet:"Spooky",pack:BDB.pack.spooky,chance:-1,rarity:"Rare",teamName:"Confident Crows",color:"#26282C"},
  "Werewolf": {name:"Werewolf",url:"https://ac.blooket.com/marketassets/blooks/werewolf.svg",displaySet:"Spooky",pack:BDB.pack.spooky,chance:-1,rarity:"Epic",teamName:"Werewolf Warriors",color:"#594a42"},
  "Ghost": {name:"Ghost",url:"https://ac.blooket.com/marketassets/blooks/ghost.svg",displaySet:"Spooky",pack:BDB.pack.spooky,chance:-1,rarity:"Legendary",teamName:"BOO!",color:"#c2def4"},
  "Tiger": {name:"Tiger",url:"https://ac.blooket.com/marketassets/blooks/tiger.svg",displaySet:"Tropical Animal",chance:1,rarity:"Common",teamName:"Brave Bengals",color:"#f18221"},
  "Orangutan": {name:"Orangutan",url:"https://ac.blooket.com/marketassets/blooks/orangutan.svg",displaySet:"Tropical Animal",chance:1,rarity:"Common",teamName:"Hairy Hipsters",color:"#bc6234"},
  "Cockatoo": {name:"Cockatoo",url:"https://ac.blooket.com/marketassets/blooks/cockatoo.svg",displaySet:"Tropical Animal",chance:1,rarity:"Common",teamName:"Not Chickens",color:"#7ca1d5"},
  "Parrot": {name:"Parrot",url:"https://ac.blooket.com/marketassets/blooks/parrot.svg",displaySet:"Tropical Animal",chance:1,rarity:"Common",teamName:"Polly's People",color:"#ed1c24"},
  "Anaconda": {name:"Anaconda",url:"https://ac.blooket.com/marketassets/blooks/anaconda.svg",displaySet:"Tropical Animal",chance:1,rarity:"Common",teamName:"Sneaky Snakes",color:"#8a9143"},
  "Jaguar": {name:"Jaguar",url:"https://ac.blooket.com/marketassets/blooks/jaguar.svg",displaySet:"Tropical Animal",chance:1,rarity:"Common",teamName:"Super Spotters",color:"#fbb040"},
  "Macaw": {name:"Macaw",url:"https://ac.blooket.com/marketassets/blooks/macaw.svg",displaySet:"Tropical Animal",chance:1,rarity:"Common",teamName:"CA CAWWWW",color:"#00aeef"},
  "Toucan": {name:"Toucan",url:"https://ac.blooket.com/marketassets/blooks/toucan.svg",displaySet:"Tropical Animal",chance:1,rarity:"Common",teamName:"Toucan't Beat Us",color:"#ffca34"},
  "Panther": {name:"Panther",url:"https://ac.blooket.com/marketassets/blooks/panther.svg",displaySet:"Tropical Animal",chance:1,rarity:"Common",teamName:"Wakanda Forever",color:"#2f2c38"},
  "Capuchin": {name:"Capuchin",url:"https://ac.blooket.com/marketassets/blooks/capuchinmonkey.svg",displaySet:"Tropical Animal",chance:1,rarity:"Common",teamName:"Monkey Madness",color:"#e0b0a6"},
  "Gorilla": {name:"Gorilla",url:"https://ac.blooket.com/marketassets/blooks/gorilla.svg",displaySet:"Tropical Animal",chance:1,rarity:"Common",teamName:"Great Gorillas",color:"#414042"},
  "Hippo": {name:"Hippo",url:"https://ac.blooket.com/marketassets/blooks/hippo.svg",displaySet:"Tropical Animal",chance:1,rarity:"Common",teamName:"Hip Hippos",color:"#95889e"},
  "Rhino": {name:"Rhino",url:"https://ac.blooket.com/marketassets/blooks/rhino.svg",displaySet:"Tropical Animal",chance:1,rarity:"Common",teamName:"Ready Rhinos",color:"#9da7a5"},
  "Giraffe": {name:"Giraffe",url:"https://ac.blooket.com/marketassets/blooks/giraffe.svg",displaySet:"Tropical Animal",chance:1,rarity:"Common",teamName:"Tall Tutors",color:"#f0c649"},
  "Two of Spades": {name:"Two of Spades",url:"https://ac.blooket.com/marketassets/blooks/twoofspades.svg",displaySet:"Wonderland",pack:BDB.pack.wonderland,chance:0.152,rarity:"Uncommon",teamName:"Dueling Deuces",color:"#414042"},
  "Eat Me": {name:"Eat Me",url:"https://ac.blooket.com/marketassets/blooks/eat.svg",displaySet:"Wonderland",pack:BDB.pack.wonderland,chance:0.15,rarity:"Uncommon",teamName:"Hungry Heroes",color:"#d58c55"},
  "Drink Me": {name:"Drink Me",url:"https://ac.blooket.com/marketassets/blooks/drink.svg",displaySet:"Wonderland",pack:BDB.pack.wonderland,chance:0.15,rarity:"Uncommon",teamName:"Potion Power",color:"#dd7399"},
  "Alice": {name:"Alice",url:"https://ac.blooket.com/marketassets/blooks/alice.svg",displaySet:"Wonderland",pack:BDB.pack.wonderland,chance:0.15,rarity:"Uncommon",teamName:"Wonderland",color:"#4cc9f5"},
  "Queen of Hearts": {name:"Queen of Hearts",url:"https://ac.blooket.com/marketassets/blooks/queenofhearts.svg",displaySet:"Wonderland",pack:BDB.pack.wonderland,chance:0.15,rarity:"Uncommon",teamName:"â¤ï¸â¤ï¸â¤ï¸",color:"#d62027"},
  "Dormouse": {name:"Dormouse",url:"https://ac.blooket.com/marketassets/blooks/dormouse.svg",displaySet:"Wonderland",pack:BDB.pack.wonderland,chance:0.065,rarity:"Rare",teamName:"Short and Stout",color:"#89d6f8"},
  "White Rabbit": {name:"White Rabbit",url:"https://ac.blooket.com/marketassets/blooks/whiterabbit.svg",displaySet:"Wonderland",pack:BDB.pack.wonderland,chance:0.065,rarity:"Rare",teamName:"Classy Classmates",color:"#ffcd05"},
  "Cheshire Cat": {name:"Cheshire Cat",url:"https://ac.blooket.com/marketassets/blooks/cheshirecat.svg",displaySet:"Wonderland",pack:BDB.pack.wonderland,chance:0.065,rarity:"Rare",teamName:"Cool Cats",color:"#dd7399"},
  "Caterpillar": {name:"Caterpillar",url:"https://ac.blooket.com/marketassets/blooks/caterpillar.svg",displaySet:"Wonderland",pack:BDB.pack.wonderland,chance:0.025,rarity:"Epic",teamName:"Caterpillar Cuties",color:"#00c0f3"},
  "Mad Hatter": {name:"Mad Hatter",url:"https://ac.blooket.com/marketassets/blooks/madhatter.svg",displaySet:"Wonderland",pack:BDB.pack.wonderland,chance:0.025,rarity:"Epic",teamName:"Goofy Gurus",color:"#914f93"},
  "King of Hearts": {name:"King of Hearts",url:"https://ac.blooket.com/marketassets/blooks/kingofhearts.svg",displaySet:"Wonderland",pack:BDB.pack.wonderland,chance:0.003,rarity:"Legendary",teamName:"The Royals",color:"#c62127"},
  "Deckhand": {name:"Deckhand",url:"https://ac.blooket.com/marketassets/blooks/deckhand.svg",displaySet:"Pirate",pack:BDB.pack.pirate,chance:0.16,rarity:"Uncommon",teamName:"Deckhands",color:"#a71c12"},
  "Buccaneer": {name:"Buccaneer",url:"https://ac.blooket.com/marketassets/blooks/buccaneer.svg",displaySet:"Pirate",pack:BDB.pack.pirate,chance:0.16,rarity:"Uncommon",teamName:"Buccaneers",color:"#7244ae"},
  "Swashbuckler": {name:"Swashbuckler",url:"https://ac.blooket.com/marketassets/blooks/swashbuckler.svg",displaySet:"Pirate",pack:BDB.pack.pirate,chance:0.16,rarity:"Uncommon",teamName:"Swashbucklers",color:"#a71c12"},
  "Treasure Map": {name:"Treasure Map",url:"https://ac.blooket.com/marketassets/blooks/treasuremap.svg",displaySet:"Pirate",pack:BDB.pack.pirate,chance:0.16,rarity:"Uncommon",teamName:"Treasure Hunters",color:"#b29059"},
  "Seagull": {name:"Seagull",url:"https://ac.blooket.com/marketassets/blooks/seagull.svg",displaySet:"Pirate",pack:BDB.pack.pirate,chance:0.16,rarity:"Uncommon",teamName:"Serene Seagulls",color:"#ffaa05"},
  "Jolly Pirate": {name:"Jolly Pirate",url:"https://ac.blooket.com/marketassets/blooks/jollypirate.svg",displaySet:"Pirate",pack:BDB.pack.pirate,chance:0.08,rarity:"Rare",teamName:"Jolly Pirates",color:"#a71c12"},
  "Pirate Ship": {name:"Pirate Ship",url:"https://ac.blooket.com/marketassets/blooks/pirateship.svg",displaySet:"Pirate",pack:BDB.pack.pirate,chance:0.08,rarity:"Rare",teamName:"The Crew",color:"#1a91dd"},
  "Kraken": {name:"Kraken",url:"https://ac.blooket.com/marketassets/blooks/kraken.svg",displaySet:"Pirate",pack:BDB.pack.pirate,chance:0.0367,rarity:"Epic",teamName:"Kool Krakens",color:"#412337"},
  "Captain Blackbeard": {name:"Captain Blackbeard",url:"https://ac.blooket.com/marketassets/blooks/captainblackbeard.svg",displaySet:"Pirate",pack:BDB.pack.pirate,chance:0.003,rarity:"Legendary",teamName:"Blackbeard's Best",color:"#2b2b2b"}
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

BDB.pack.autumn.blooks = [
  BDB.blooks["Black Bear"],
  BDB.blooks["Pumpkin Pie"],
  BDB.blooks["Chipmunk"],
  BDB.blooks["Cornucopia"],
  BDB.blooks["Autumn Cat"],
  BDB.blooks["Pumpkin Puppy"],
  BDB.blooks["Autumn Crow"],
  BDB.blooks["Turkey"],
  BDB.blooks["Golden Pumpkin Pie"]
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
  BDB.blooks["Red Sweater Snowman"],
  BDB.blooks["Blue Sweater Snowman"],
  BDB.blooks["Elf Sweater Snowman"]
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
