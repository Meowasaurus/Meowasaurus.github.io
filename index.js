"use strict";

function getRandomElement(elements)
{
  return elements[getRandomInt(0, elements.length - 1)];
}

/// Return a random element using gaussian selection
function getRandomGaussianElement(elements)
{
  return elements[Math.round(getRandomGaussian(0, elements.length - 1))];
}

/// Return a random int with min <= x <= range
function getRandomInt(min, max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/// Return a gaussian number between min/max
function getRandomGaussian(min, max)
{
  const skew = 1.0;
  let u = 0, v = 0;
  while (u === 0) u = Math.random() //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random()
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)

  num = num / 10.0 + 0.5 // Translate to 0 -> 1
  if (num > 1 || num < 0)
    num = randn_bm(min, max, skew) // resample between 0 and 1 if out of range

  else
  {
    num = Math.pow(num, skew) // Skew
    num *= max - min // Stretch to fill range
    num += min // offset to min
  }
  return num
}

function setDifficulty()
{
  document.getElementById("difficulty").innerHTML = [
    "Easy peasy!",
    "Very easy",
    "Easy",
    "Below average",
    "Average",
    "Average",
    "Above average",
    "Hard",
    "Harder",
    "Very hard",
    "DEADLY!",
  ][Math.round(getRandomGaussian(1, 10))];
}

function setElement()
{
  document.getElementById("element").innerHTML = getRandomElement([
    "Air",
    "Earth",
    "Fire",
    "Water",
  ]);
}

function setTarot()
{
  document.getElementById("tarot").innerHTML = getRandomElement([
    "Fool",
    "Magician",
    "High Priestess",
    "Empress",
    "Emperor",
    "Hierophant",
    "Lovers",
    "Chariot",
    "Strength",
    "Hermit",
    "Wheel of Fortune",
    "Justice",
    "Hanged Man",
    "Death",
    "Temperance",
    "Devil",
    "Tower",
    "Star",
    "Moon",
    "Sun",
    "Judgement",
    "World",
  ]);
}

function setDirection()
{
  document.getElementById("direction").innerHTML = getRandomElement([
    "North",
    "Northeast",
    "East",
    "Southeast",
    "South",
    "Southwest",
    "West",
    "Northwest",
    "Steady",
  ]);
}

function setMeta()
{
  setDifficulty();
  setElement();
  setTarot();
  setDirection();
}

function setSymbols()
{
  const kSymbols = ["Death", "Sword", "Shield", "Wand", "Tower", "Sun", "Moon", "Target", "Crown", "Heart"];

  var selected = [];
  while (selected.length < 3)
  {
    const symbol = getRandomElement(kSymbols);
    if (selected.includes(symbol))
    {
      continue;
    }
    selected.push(symbol);
  }

  for (const i of [0, 1, 2])
  {
    document.getElementById("symbol" + String(1 + i)).innerHTML = selected[i];
  }
}

/// Set the likely odds for the given id, with the given odds amount
function setLikelyOdd(id, bias)
{
  var selection = Math.random();
  /// Nat 1
  var text = null
  if (selection <= 0.05)
  {
    text = "NO!"
  }
  else if (selection <= 0.5 + bias)
  {
    text = "No"
  }
  else if (selection <= 0.95)
  {
    text = "Yes"
  }
  else // Nat20
  {
    text = "YES!"
  }
  document.getElementById(id).innerHTML = text;
}
function setLikelyOdds()
{
  setLikelyOdd("likely_odds_low", -0.25);
  setLikelyOdd("likely_odds_even", 0.0);
  setLikelyOdd("likely_odds_high", +0.25);
}

function setPrompt()
{
  document.getElementById("verb").innerHTML = getRandomVerb();
  document.getElementById("adjective").innerHTML = getRandomAdjective();
  document.getElementById("noun").innerHTML = getRandomNoun();
}

function setEvent()
{
  document.getElementById("focus").innerHTML = getRandomFocus();
  document.getElementById("action").innerHTML = getRandomVerb();
  document.getElementById("subject").innerHTML = getRandomNoun();
}

function setDie(id, d)
{
  document.getElementById(id).innerHTML = String(getRandomInt(1, d));
}
function setDice(id, d)
{
  for (var d of [4, 6, 8, 10, 12, 20, 100])
  {
    setDie("d" + String(d), d);
  }
}

function setSenses()
{
  document.getElementById("sense_hear").innerHTML = getRandomSound();
  document.getElementById("sense_see").innerHTML = getRandomVisual();
  document.getElementById("sense_smell").innerHTML = getRandomSmell();
  document.getElementById("sense_feel").innerHTML = getRandomFeeling();
}

function setQuest()
{
  document.getElementById("framing_event").innerHTML = getRandomFramingEvent();
  document.getElementById("objective").innerHTML = getRandomObjective();
  document.getElementById("location").innerHTML = getRandomLocation();
  document.getElementById("complication").innerHTML = getRandomComplication();
}

function setBelongings()
{
  for (var i of [1, 2, 3, 4])
  {
    document.getElementById("belongings" + String(i)).innerHTML = getRandomBelonging();
  }
}

function setNames()
{
  for (var i of [1, 2, 3, 4])
  {
    document.getElementById("name" + String(i)).innerHTML = getRandomName();
  }
}

function setTrap()
{
  // Complexity?
  document.getElementById("trap_object").innerHTML = getRandomTrapObject();
  document.getElementById("trap_trigger").innerHTML = getRandomTrapTrigger();
  document.getElementById("trap_effect").innerHTML = getRandomTrapEffect();
  document.getElementById("trap_severity").innerHTML = getRandomTrapSeverity();
}

function setDungeon()
{
  document.getElementById("dungeon_theme").innerHTML = getRandomElement([
    "Abandoned",
    "Abyssal",
    "Ancient",
    "Arcane",
    "Canyon",
    "Cave",
    "Cryptic",
    "Cursed",
    "Decrepit",
    "Desolate",
    "Dinosaurs",
    "Dystopian",
    "Eerie",
    "Eldritch",
    "Enigmatic",
    "Forbidden",
    "Forgotten",
    "Grim",
    "Haunted",
    "Labyrinthine",
    "Macabre",
    "Malevolent",
    "Mysterious",
    "Non-human race",
    "Ominous",
    "Perilous",
    "Ruined",
    "Shadowy",
    "Sinister",
    "Subterranean",
    "Surreal",
    "Treacherous",
    "Twisted",
    "Uncanny",
  ]);
  document.getElementById("dungeon_feature").innerHTML = getRandomElement([
    "Arena",
    "Barracks/Guardroom",
    "BOSS",
    "Cistern/Well",
    "Classroom/Training area",
    "Crypt",
    "Dead end (maybe secret door)",
    "Dining/Canteen",
    "Empty",
    "Foyer",
    "Gallery/Memorial/Show-off",
    "Kennel",
    "Kitchen",
    "Library/Learning/Observatory",
    "Living area",
    "Meeting/War/Planning",
    "Nursery",
    "Prison",
    "Religion",
    "Resources/Farm/Mine",
    "Ritual",
    "Sleeping",
    "Smithy/Workshop",
    "Storeroom",
    "Throne",
    "Toilet/Bathroom",
    "Torture",
    "Trap",
    "Vault",
  ]);
  document.getElementById("dungeon_characteristic").innerHTML = getRandomElement([
    "Dark",
    "Smelly",
    "Corpses",
    "Dusty",
    "Wrecked",
    "Messy",
    "Claw marks",
    "Tapestries",
    "An unknown machine",
    "Caved-in",
    "Water",
    "Sticky",
    "Plants",
    "Workbench",
    "Columns",
    "Candles",
    "Statues",
    "Locked door",
    "Bookshelves",
    "Secret compartment",
    "Ladder",
    "Rocks",
    "Aqueduct",
    "Uneven floor",
  ]);
  document.getElementById("dungeon_contents").innerHTML = getRandomElement([
    "Empty",
    "Theme monster",
    "Pest monster",
    "Random monster",
    "Haunted monster",
    "Treasure",
    "Trap",
    "Hazard",
  ]);
}

function setWilderness()
{
  document.getElementById("wilderness_location").innerHTML = getRandomElement([
    "Archipelago",
    "Avalanche",
    "Barrier island",
    "Basalt formation",
    "Beach",
    "Bluff",
    "Bog",
    "Boulder",
    "Brook",
    "Burrows",
    "Caldera",
    "Canyon",
    "Cape",
    "Carts",
    "Castle",
    "Cave",
    "Cavern",
    "Cliff",
    "Coast",
    "Coral atoll",
    "Coral reef",
    "Crater",
    "Crevasse",
    "Dam",
    "Delta",
    "Desert",
    "Drumlin",
    "Dune",
    "Esker",
    "Estuary",
    "Farm",
    "Fault line",
    "Fern",
    "Fissure",
    "Fjord",
    "Forest",
    "Fossil",
    "Frost heave",
    "Geothermal vent",
    "Glacier",
    "Gneiss formation",
    "Gorge",
    "Granite formation",
    "Hill",
    "Hot spring",
    "House",
    "Hovel",
    "Ice cave",
    "Ice sheet",
    "Iceberg",
    "Icefall",
    "Insect",
    "Island",
    "Jungle",
    "Karst landscape",
    "Kettle lake",
    "Knoll",
    "Lagoon",
    "Lake",
    "Landslide",
    "Lava dome",
    "Lava flow",
    "Lava tube",
    "Lichen",
    "Limestone formation",
    "Magma chamber",
    "Marble formation",
    "Marsh",
    "Meadow",
    "Monastery",
    "Moraine",
    "Moss",
    "Mountain",
    "Mountains",
    "Mushroom",
    "Oasis",
    "Ocean",
    "Path",
    "Peninsula",
    "Permafrost",
    "Petrified wood",
    "Plains",
    "Plateau",
    "Pond",
    "Pyroclastic flow",
    "Quartz formation",
    "Ravine",
    "Ridge",
    "River",
    "Rock",
    "Rockslide",
    "Ruins",
    "Sand dune",
    "Sandbar",
    "Sandstone formation",
    "Savanna",
    "Schist formation",
    "Seashell",
    "Shoal",
    "Shoreline",
    "Sinkhole",
    "Slate formation",
    "Spit",
    "Stream",
    "Swamp",
    "Temple",
    "Town",
    "Trails",
    "Tundra",
    "Valley",
    "Village",
    "Volcano",
    "Waterfall",
    "Wetland",
    "Wildflower",
  ]);
  document.getElementById("wilderness_time").innerHTML = getRandomElement([
    "Dawn",
    "Morning",
    "Noon",
    "Afternoon",
    "Dusk",
    "Evening",
    "Night",
    "Midnight",
  ]);
  document.getElementById("wilderness_temp").innerHTML = getRandomGaussianElement([
    "Freezing",
    "Cold",
    "Below average",
    "Normal",
    "Above average",
    "Hot",
    "Sweltering",
  ]);
  document.getElementById("wilderness_wind").innerHTML = getRandomGaussianElement([
    "Gale",
    "Gusty",
    "Breezy",
    "Calm",
    "Breezy",
    "Gusty",
    "Gale",
  ]);
  document.getElementById("wilderness_weather").innerHTML = getRandomGaussianElement([
    "Dust storm",
    "Tornado",
    "Hurricane",
    "Rainy",
    "Foggy",
    "Cloudy",
    "Sunny",
    "Overcast",
    "Hailstorm",
    "Stormy",
    "Thunderstorm",
    "Freezing rain",
    "Snowy",
    "Blizzard",
  ]);
}

function setUrban()
{
  document.getElementById("urban_tavern_name").innerHTML = "The " + getRandomAdjective() + " " + getRandomNoun();
  document.getElementById("urban_tavern_feature").innerHTML = getRandomElement([
    "A stranger leaves a box on their table",
    "A traveler",
    "About to host negotiations",
    "Actually a cult front",
    "Don't like outsiders",
    "Doubles as another business",
    "Drinks are a cure-all",
    "Famous pet",
    "Haunted",
    "High-class",
    "Hosting a passing mercenary company",
    "Hosts conspiracy meetings",
    "Intense rivalry with a competitor",
    "Is hosting a competition, but is short players",
    "Just one loooooong table",
    "Low-class",
    "Magic is being used",
    "Mystery fillings!",
    "Neglected and rundown",
    "No one around",
    "Optical illusions for fun",
    "Owner feeds of guests at night",
    "Peak time",
    "Pilgrimage site",
    "Repurposed from a temple/ship/observatory",
    "Seedy",
    "Was burgled/trashed last night",
    "Weapons are not allowed",
    "Workers are under control",
  ]);
  document.getElementById("urban_location").innerHTML = getRandomElement([
    "Abandoned building",
    "Alchemist",
    "Apothecary",
    "Aqueduct",
    "Armory",
    "Baker",
    "Bakery",
    "Bathhouse",
    "Blacksmith",
    "Bridge",
    "Brothel",
    "Butcher",
    "Carpenter's workshop",
    "Castle",
    "Cathedral",
    "Cistern",
    "City gate",
    "City wall",
    "City well",
    "Dairy",
    "Dock",
    "Executioner's block",
    "Fishmonger",
    "Gallows",
    "Gatehouse",
    "Graveyard",
    "Guardhouse",
    "Guildhall",
    "Herb garden",
    "Herbalist",
    "Hospital",
    "Hovel",
    "Inn",
    "Jeweler's shop",
    "Manor house",
    "Market square",
    "Market stall",
    "Mason's workshop",
    "Mill",
    "Miller",
    "Monastery",
    "Pilgrims' hostel",
    "Pottery shop",
    "Rooftop",
    "School",
    "Scribe's shop",
    "Secret passage",
    "Sewer entrance",
    "Stable",
    "Stocks",
    "Street vendor",
    "Tailor's shop",
    "Tannery",
    "Tavern",
    "Town hall",
    "Town square",
    "Warehouse",
    "Watchtower",
    "Weaver",
    "Wharf",
  ]);
}

function setNpc()
{
  document.getElementById("npc_race").innerHTML = getRandomElement([
    "Dragonborn",
    "Dwarf",
    "Elf",
    "Gnome",
    "Half-elf",
    "Halfling",
    "Half-orc",
    "Human",
    "Tiefling",
    "Tabaxi / Cat-folk",
    "Harengon / Rabbit-folk",
    "Centaur",
  ]);
  document.getElementById("npc_gender").innerHTML = getRandomElement([
    "Male",
    "Female",
  ]);
  document.getElementById("npc_age").innerHTML = getRandomElement([
    "Child",
    "Young Adult",
    "Adult",
    "Mature Adult",
    "Elder",
  ]);
  document.getElementById("npc_physique").innerHTML = getRandomElement([
    "Athletic",
    "Slender",
    "Stocky",
    "Obese",
    "Muscular",
    "Toned",
    "Average",
  ]);

  document.getElementById("npc_skintone").innerHTML = getRandomGaussianElement([
    "Ghostly",
    "Light",
    "Average",
    "Tan",
    "Darkest",
  ]);
  document.getElementById("npc_hair").innerHTML = getRandomElement([
    "Black",
    "Brown",
    "Light Brown",
    "Dark Brown",
    "Blonde",
    "Dirty Blonde",
    "Auburn",
    "Ginger",
    "Red",
    "Dark Red",
    "White",
    "Grey",
  ]) + ", " + getRandomElement([
    "Straight",
    "Curly",
    "Wavy",
    "Frizzy",
  ]) + ", " + getRandomElement([
    "Shoulder length",
    "Waist lenth",
    "Knee lenth",
    "Short shaved",
    "Short",
  ]) + ", " + getRandomElement([
    "Down",
    "In a high pony",
    "In a low pony",
    "In a braid",
    "In a bun",
    "In a side bun",
  ]) + ", " + getRandomElement([
    "Clean",
    "Dirty",
    "Graying",
    "Streaks of color natural or dyed",
    "Ornaments hairband clips etc",
  ]);
  document.getElementById("npc_eyes").innerHTML = getRandomElement([
    "Amethyst",
    "Emerald",
    "Sapphire",
    "Ruby",
    "Topaz",
    "Opal",
    "Obsidian",
    "Crystal",
    "Jade",
    "Garnet",
    "Aquamarine",
    "Amber",
    "Silver",
    "Gold",
    "Brown",
    "Blue",
    "Green",
    "Hazel",
    "Amber",
    "Gray",
    "Black",
    "Dark Brown",
    "Light Brown",
    "Dark Blue",
    "Light Blue",
    "Dark Green",
    "Light Green",
    "Dark Hazel",
    "Light Hazel",
  ]);
  document.getElementById("npc_class").innerHTML = getRandomElement([
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
  ]);
  document.getElementById("npc_doing").innerHTML = getRandomElement([
    "Building",
    "Celebrating ",
    "Chasing",
    "Communicating",
    "Creating",
    "Dying / wounded ",
    "Exploring",
    "Fleeing",
    "Gathering",
    "Hallucinating / Altered State",
    "Hunting / foraging",
    "In combat",
    "Journey / pilgrimage",
    "Learning",
    "Lost / exploring",
    "Marking territory",
    "Mating / courting",
    "Negotiating",
    "Patrolling / guarding",
    "Protecting",
    "Resting / camping",
    "Ritual / magic",
    "Sleeping",
    "Socializing",
    "Trapped / imprisoned",
    "Washing",
  ]);
  document.getElementById("npc_feature").innerHTML = getRandomElement([
    "Armor plating",
    "Bald",
    "Birthmark",
    "Braided beard or hair",
    "Cloaks or capes",
    "Distinctive nose",
    "Distinctive posutre",
    "Elaborate embroidery intricate patterns",
    "Exceptionally beautiful",
    "Exceptionally ugly",
    "Eye patch",
    "Facial hair",
    "Fancy hat",
    "Flamboyant clothes",
    "Formal clothes",
    "Mask",
    "Missing fingers",
    "Missing limbs or digits",
    "Missing teeth",
    "Naked",
    "Nervous twitch",
    "Piercings",
    "Pronounced scar",
    "Ragged dirty clothes",
    "Rich fabrics exotic accessories",
    "Scars",
    "Symbolic insignias or crests",
    "Tattoos",
    "Tunic robe ceremonial garments",
    "Unusual body modifications",
    "Unusual eye color",
    "Unusual eye colors",
    "Unusual hair color",
    "Unusual hair colors",
    "Unusual hair styles",
    "Unusual skin color",
    "Unusual skin textures",
  ]);
  document.getElementById("npc_name").innerHTML = getRandomName();
  document.getElementById("npc_nickname").innerHTML = getRandomElement([
    "Ace",
    "Sparky",
    "Blaze",
    "Shadow",
    "Luna",
    "Maverick",
    "Jazz",
    "Echo",
    "Cricket",
    "Goose",
    "Bubbles",
    "Dizzy",
    "Noodle",
    "Puddles",
    "Socks",
    "Rascal",
    "Whiskers",
    "Jinx",
    "Pipsqueak",
    "Snickerdoodle",
    "Twinkle",
    "Sprout",
    "Zigzag",
    "Doodlebug",
    "Wiggles",
    "Biscuit",
    "Giggles",
    "Poptart",
    "Cuddlebug",
    "Munchkin",
    "Squiggle",
    "Nibbles",
    "Jellybean",
    "Bumblebee",
    "Snickers",
    "Fluffy",
    "Pebbles",
    "Breezy",
    "Chipmunk",
    "Snuggles",
    "Bubblegum",
    "Cheeky",
    "Fuzzy",
    "Peanut",
    "Sprinkles",
    "Gummybear",
    "Button",
    "Squeaky",
    "Marshmallow",
    "Cupcake",
    "Sugarplum",
    "Daffodil",
    "Sunshine",
    "Rainbow",
    "Moonbeam",
    "Starlight",
    "Snowflake",
    "Firefly",
    "Butterfly",
    "Dragonfly",
    "Ladybug",
    "Sparrow",
    "Bluebell",
    "Clover",
    "Honeybee",
    "Tulip",
    "Pansy",
    "Poppy",
    "Petal",
    "Daisy",
    "Blossom",
    "Breeze",
    "Misty",
    "River",
    "Ocean",
    "Willow",
    "Cedar",
    "Cypress",
    "Maple",
    "Aspen",
    "Willow",
    "Hazel",
    "Ivy",
    "Holly",
    "Juniper",
    "Birch",
    "Acorn",
    "Rowan",
    "Thorn",
    "Fern",
    "Moss",
    "Lark",
    "Finch",
    "Robin",
    "Sparrow",
    "Starling",
    "Wren",
    "Hawk",
    "Falcon",
    "Eagle",
  ]);
  document.getElementById("npc_mood").innerHTML = getRandomElement([
    "Aggravated",
    "Amused",
    "Angry",
    "Anxious",
    "Apathetic",
    "Bored",
    "Calm",
    "Cautious",
    "Confused",
    "Content",
    "Determined",
    "Disappointed",
    "Enraged",
    "Enthusiastic",
    "Excited",
    "Frustrated",
    "Fulfilled",
    "Giddy",
    "Grateful",
    "Guilty",
    "Happy",
    "Hesitant",
    "Hopeful",
    "Indifferent",
    "Inspired",
    "Irritated",
    "Jovial",
    "Joyful",
    "Lethargic",
    "Lonely",
    "Loving",
    "Melancholic",
    "Mellow",
    "Mournful",
    "Nervous",
    "Optimistic",
    "Overwhelmed",
    "Peaceful",
    "Pensive",
    "Playful",
    "Reflective",
    "Regretful",
    "Rejuvenated",
    "Relaxed",
    "Resentful",
    "Restless",
    "Sad",
    "Satisfied",
    "Sentimental",
    "Serene",
    "Somber",
    "Stressed",
    "Surprised",
    "Sympathetic",
    "Tense",
    "Thoughtful",
    "Touched",
    "Vexed",
    "Worried",
    "Zestful",
  ]);
  document.getElementById("npc_disposition").innerHTML = getRandomGaussianElement([
    "Attacking",
    "Hostile",
    "Unfriendly",
    "Neutral",
    "Friendly",
    "Curious",
    "Cautious",
    "Fearful",
  ]);
  document.getElementById("npc_trait").innerHTML = getRandomElement([
    "Abrasive",
    "Adventurous",
    "Adventurous",
    "Ambitious",
    "Ambitious",
    "Apathetic",
    "Arrogant",
    "Careful",
    "Careless",
    "Cautious",
    "Cautious",
    "Charismatic",
    "Charming",
    "Closed-minded",
    "Compassionate",
    "Confident",
    "Considerate",
    "Content",
    "Conventional",
    "Courageous",
    "Courageous",
    "Cowardly",
    "Creative",
    "Creative",
    "Critical",
    "Cruel",
    "Curious",
    "Cynical",
    "Deceitful",
    "Dependent",
    "Dishonest",
    "Disloyal",
    "Dreamy",
    "Dull",
    "Efficient",
    "Emotional",
    "Energetic",
    "Extravagant",
    "Foolish",
    "Forgiving",
    "Friendly",
    "Generous",
    "Greedy",
    "Gruff",
    "Hardworking",
    "Helpless",
    "Honest",
    "Honest",
    "Hostile",
    "Humble",
    "Idealistic",
    "Impatient",
    "Inconsiderate",
    "Independent",
    "Inefficient",
    "Insecure",
    "Insightful",
    "Insincere",
    "Insincere",
    "Intelligent",
    "Kind-hearted",
    "Lazy",
    "Lazy",
    "Lethargic",
    "Loyal",
    "Loyal",
    "Mysterious",
    "Oblivious",
    "Open-minded",
    "Optimistic",
    "Optimistic",
    "Outgoing",
    "Patient",
    "Pessimistic",
    "Practical",
    "Practical",
    "Punctual",
    "Reliable",
    "Reliable",
    "Reserved",
    "Resourceful",
    "Selfish",
    "Sensitive",
    "Simple-minded",
    "Sincere",
    "Sincere",
    "Stoic",
    "Supportive",
    "Suspicious",
    "Tardy",
    "Thick-skinned",
    "Thrifty",
    "Timid",
    "Treacherous",
    "Trusting",
    "Unpredictable",
    "Unreliable",
    "Vengeful",
    "Wise",
    "Wise",
  ]);
  document.getElementById("npc_alignment").innerHTML = getRandomElement([
    "Lawful good",
    "Neutral good",
    "Chaotic good",
    "Lawful neutral",
    "True neutral",
    "Chaotic neutral",
    "Lawful evil",
    "Neutral evil",
    "Chaotic evil",
  ]);

  document.getElementById("npc_occupation").innerHTML = getRandomElement([
    "Abbess",
    "Abbot",
    "Acrobat",
    "Actor",
    "Advocate",
    "Alchemist",
    "Anchorite",
    "Animal handler",
    "Apothecary",
    "Archer",
    "Architect",
    "Archivist",
    "Aristocrat",
    "Armorer",
    "Artisan",
    "Artist",
    "Assassin",
    "Astrologer",
    "Baker",
    "Banker",
    "Barbarian",
    "Barber",
    "Bard",
    "Bargeman",
    "Barkeep",
    "Barmaid",
    "Beekeeper",
    "Beggar",
    "Bishop",
    "Blacksmith",
    "Boatman",
    "Boatwright",
    "Bodyguard",
    "Bookbinder",
    "Bookseller",
    "Bowman",
    "Bowyer",
    "Brewer",
    "Brick maker",
    "Bricklayer",
    "Brigand",
    "Brothel owner",
    "Buckle maker",
    "Builder",
    "Butcher",
    "Cabinetmaker",
    "Camp follower",
    "Caravan leader",
    "Carpenter",
    "Cartographer",
    "Chandler",
    "Chaplain",
    "Charioteer",
    "Charlatan",
    "Chatelaine",
    "Chef",
    "Chieftain",
    "Clergyman",
    "Cleric",
    "Clerk",
    "Clockmaker",
    "Clothier",
    "Cobbler",
    "Commander",
    "Concubine",
    "Cook",
    "Cooper",
    "Copyist",
    "Costermonger",
    "Counselor",
    "Courtesan",
    "Courtier",
    "Cowherd",
    "Crofter",
    "Crossbowman",
    "Cutler",
    "Dairymaid",
    "Dancer",
    "Diplomat",
    "Distiller",
    "Diver",
    "Diviner",
    "Doctor",
    "Domestic servant",
    "Druid",
    "Duenna",
    "Dyer",
    "Emperor",
    "Empress",
    "Engraver",
    "Explorer",
    "Falconer",
    "Farmer",
    "Ferryman",
    "Fighter",
    "Fisherman",
    "Fishmonger",
    "Fletcher",
    "Footman",
    "Footpad",
    "Forester",
    "Fortune teller",
    "Fowler",
    "Fruiterer",
    "Furrier",
    "Galley slave",
    "Gamekeeper",
    "Gardener",
    "General",
    "Gladiator",
    "Glassblower",
    "Glazier",
    "Glovemaker",
    "Goatherd",
    "Goldsmith",
    "Grain merchant",
    "Gravedigger",
    "Grocer",
    "Groom",
    "Guardsman",
    "Guildmaster",
    "Harem guard",
    "Harness maker",
    "Hay merchant",
    "Hayward",
    "Healer",
    "Hearthwitch",
    "Herald",
    "Herbalist",
    "Herder",
    "Hermit",
    "Highwayman",
    "Historian",
    "Horse-leech",
    "Housemaid",
    "Hunter",
    "Huntress",
    "Illuminator",
    "Infantryman",
    "Innkeeper",
    "Interpreter",
    "Inventor",
    "Jailer",
    "Jester",
    "Jeweler",
    "Jongleur",
    "Judge",
    "Juggler",
    "King",
    "Kitchen drudge",
    "Kitchen maid",
    "Knight",
    "Laborer",
    "Lacemaker",
    "Lady",
    "Lady in waiting",
    "Lady's maid",
    "Laundress",
    "Lawyer",
    "Librarian",
    "Limner",
    "Linguist",
    "Locksmith",
    "Longbowman",
    "Longshoreman",
    "Lord",
    "Luthier",
    "Maidservant",
    "Majordomo",
    "Man at arms",
    "Mason",
    "Masseur",
    "Mayor",
    "Mercer",
    "Merchant",
    "Messenger",
    "Midwife",
    "Miller",
    "Milliner",
    "Miner",
    "Minister",
    "Minstrel",
    "Moneylender",
    "Monk",
    "Mortician",
    "Mourner",
    "Musician",
    "Navigator",
    "Necromancer",
    "Noble",
    "Nun",
    "Nurse",
    "Old-clothes seller",
    "Ostler",
    "Page",
    "Painter",
    "Paladin",
    "Pariah",
    "Pastry cook",
    "Peasant",
    "Peddler",
    "Perfumer",
    "Philosopher",
    "Physician",
    "Pickpocket",
    "Pigkeeper",
    "Pikeman",
    "Pilgrim",
    "Pirate",
    "Plasterer",
    "Playwright",
    "Poet",
    "Potboy",
    "Potter",
    "Poulterer",
    "Priest",
    "Priestess",
    "Prince",
    "Princess",
    "Prior",
    "Prioress",
    "Privateer",
    "Professor",
    "Prostitute",
    "Pursemaker",
    "Queen",
    "Rag-picker",
    "Ranger",
    "Ratcatcher",
    "Reeve",
    "Roofer",
    "Ropemaker",
    "Royal advisor",
    "Rugmaker",
    "Ruler",
    "Saddler",
    "Sailor",
    "Scabbard maker",
    "Scavenger",
    "Scholar",
    "Scout",
    "Scrivener",
    "Scullery maid",
    "Sculptor",
    "Seamstress",
    "Seneschal",
    "Serf",
    "Servant",
    "Shaman",
    "Shearer",
    "Shepherd",
    "Ship's captain",
    "Shipwright",
    "Shoemaker",
    "Silversmith",
    "Singer",
    "Slave",
    "Slaver",
    "Smith",
    "Soldier",
    "Sorcerer",
    "Sorceress",
    "Spice merchant",
    "Spinner",
    "Spinster",
    "Sponge diver",
    "Spy",
    "Squire",
    "Stablehand",
    "Stevedore",
    "Steward",
    "Stonemason",
    "Storyteller",
    "Street kid",
    "Street seller",
    "Street sweeper",
    "Student",
    "Surgeon",
    "Surveyor",
    "Swineherd",
    "Swordsman",
    "Sycophant",
    "Tailor",
    "Tanner",
    "Tavernkeeper",
    "Tax collector",
    "Teacher",
    "Teamster",
    "Thatcher",
    "Thief",
    "Tinker",
    "Tollkeeper",
    "Torturer",
    "Town crier",
    "Toymaker",
    "Trapper",
    "Troubadour",
    "Tutor",
    "Vendor",
    "Vermin catcher",
    "Veterinarian",
    "Viking",
    "Village chief",
    "Vintner",
    "Warlock",
    "Warrior",
    "Water carrier",
    "Weaver",
    "Wetnurse",
    "Wheelwright",
    "Wine seller",
    "Witch",
    "Wizard",
    "Woodcarver",
    "Woodcutter",
    "Wool merchant",
    "Wrestler",
    "Writer",
  ]);
  document.getElementById("npc_quirk").innerHTML = getRandomElement([
    "Biting into onions like an apple",
    "Eating loose tea leaves",
    "That they can fall asleep anywhere",
    "Eating ice",
    "Being able to play guitar behind their back",
    "Standing on chairs",
    "Sitting on chairs backwards",
    "Walking tiptoe",
    "Saying onomatopoeia out loud",
    "Commiting petty crime",
    "Tripping over their own feet when they run",
    "Moving their hands a lot while talking",
    "Thinking that they have god like abilities",
    "Leaning on things",
    "Reciting strange facts",
    "Trying to see if they can read upside down",
    "Knowing how to read upside down",
    "Trying to speak in reverse",
    "Not shutting up",
    "Using outdated slang terms yo",
    "Always wearing a hat no matter what",
    "Laughing for no reason",
    "That they constantly cry",
    "Not knowing how to read",
    "Having an obsession with the color red",
    "Smelling like low tide",
    "Constantly taking pictures of things",
    "Constantly writing various observations and events in a notebook",
    "Not having an indoor voice",
    "Being completely mediocre at everything they do",
    "Being overly competitive",
    "That they claim to be clairvoyant they aren t clairvoyant",
    "Hating the feeling of nail files",
    "Has a slight lisp",
    "Carries a lucky coin",
    "Snorts when laughing",
    "Always carries a book journal",
    "Is a night morning person",
    "Is constantly losing things",
    "Tends to use large and sometimes esoteric words",
    "Has a photographic memory",
    "Often tells white lies",
    "Dresses too formally for most occasions",
    "Apologizes for bumping into inanimate objects",
    "Hums or whistles anytime the conversation dies down",
    "Always wears a particular religious or magical symbol",
    "Corrects others habitually",
    "Always wears a hat or other head covering",
    "Addicted to something harmless",
    "Is an obsessive fan or follower",
    "Always carries a childhood trinket",
    "Often misspeaks common phrases",
    "Allergic asthmatic chronically ill",
    "Artistic dreamer delusional",
  ]);
  document.getElementById("npc_virtue").innerHTML = getRandomVirtue();
  document.getElementById("npc_vice").innerHTML = getRandomVice();

}

function randomize()
{
  setMeta();
  setSymbols();
  setDifficulty();
  setElement();

  setLikelyOdds();

  setPrompt();
  setEvent();

  setDice();

  setSenses();
  setQuest();

  setBelongings();
  setNames();
  setTrap();
  setDungeon();
  setWilderness();
  setUrban();
  setNpc();

  document.getElementById("main").style.visibility = "visible";
}
