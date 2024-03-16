"use strict";

var gRandomizers = [];

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

function getRandomDifficulty()
{
  return getRandomGaussianElement([
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
  ]);
}

function getRandomMagicElement()
{
  return getRandomElement([
    "Air",
    "Earth",
    "Fire",
    "Water",
  ]);
}

function getRandomTarot()
{
  return getRandomElement([
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

function getRandomDirection()
{
  return getRandomElement([
    "North",
    "Northeast",
    "East",
    "Southeast",
    "South",
    "Southwest",
    "West",
    "Northwest",
    "None",
  ]);
}

function getRandomSymbol()
{
  return getRandomElement(["Death", "Sword", "Shield", "Wand", "Tower", "Sun", "Moon", "Target", "Crown", "Heart"]);
}

/// Set the likely odds for the given id, with the given odds amount
function getRandomLikelyOdd(bias)
{
  let selection = Math.random();
  /// Nat 1
  if (selection <= 0.05)
  {
    return "NO!"
  }
  // Nat20
  if (selection >= 0.95)
  {
    return "YES!"
  }

  if (selection <= 0.5 - bias)
  {
    return "No"
  }
  else
  {
    return "Yes"
  }
}
function getRandomLowLikelyOdd()
{
  return getRandomLikelyOdd(-0.25);
}
function getRandomEvenLikelyOdd()
{
  return getRandomLikelyOdd(0.0);
}
function getRandomHighLikelyOdd()
{
  return getRandomLikelyOdd(+0.25);
}


function getRandomD4()
{
  return getRandomInt(1, 4)
}
function getRandomD6()
{
  return getRandomInt(1, 6)
}
function getRandomD8()
{
  return getRandomInt(1, 8)
}
function getRandomD10()
{
  return getRandomInt(1, 10)
}
function getRandomD12()
{
  return getRandomInt(1, 12)
}
function getRandomD20()
{
  return getRandomInt(1, 20)
}
function getRandomD100()
{
  return getRandomInt(1, 100)
}

function getRandomDungeonTheme()
{
  return getRandomElement([
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
}

function getRandomDungeonFeature()
{
  return getRandomElement([
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
}

function getRandomDungeonCharacteristic()
{
  return getRandomElement([
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
}

function getRandomDungeonContents()
{
  return getRandomElement([
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

function getRandomWildernessLocation()
{
  return getRandomElement([
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
}
function getRandomWildernessTime()
{
  return getRandomElement([
    "Dawn",
    "Morning",
    "Noon",
    "Afternoon",
    "Dusk",
    "Evening",
    "Night",
    "Midnight",
  ]);
}

function getRandomWildernessTemperature()
{
  return getRandomGaussianElement([
    "Freezing",
    "Cold",
    "Below average",
    "Normal",
    "Above average",
    "Hot",
    "Sweltering",
  ]);
}

function getRandomWildernessWind()
{
  return getRandomGaussianElement([
    "Gale",
    "Gusty",
    "Breezy",
    "Calm",
    "Breezy",
    "Gusty",
    "Gale",
  ]);
}
function getRandomWildernessWeather()
{
  return getRandomGaussianElement([
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

function getRandomUrbanName()
{
  return "The " + getRandomAdjective() + " " + getRandomNoun();
}
function getRandomUrbanFeature()
{
  return getRandomElement([
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
}

function getRandomUrbanLocation()
{
  return getRandomElement([
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

function randomize()
{
  for (const r of gRandomizers)
  {
    r();
  }
}

function addTable(name, data)
{
  const table = document.createElement("table");
  table.classList.add("RowTable")
  let num_cols = 0;
  for (const row of data)
  {
    num_cols = Math.max(num_cols, row.length);
  }

  // Set col sizings
  const col_group = document.createElement("colgroup");
  for (let i = 0; i < num_cols; ++i)
  {
    const col = document.createElement("col");
    col.style.width = String(1 / num_cols * 100) + "%";
    col_group.appendChild(col);
  }
  table.appendChild(col_group);

  // Add header
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.colSpan = num_cols;
  th.classList.add("TableHeader");
  th.innerHTML = name;
  tr.appendChild(th);
  table.appendChild(tr);

  // Add data
  const set_row_data_funcs = [];
  const headers = [];
  for (const row_i in data)
  {
    const row = data[row_i];
    const t_row = document.createElement("tr");
    for (const col_i in row)
    {
      const col = row[col_i];
      if (typeof col == "string")
      {
        if (col_i < headers.length)
        {
          headers.length = 0;
        }
        const row_header = document.createElement("th");
        row_header.classList.add("TableSubHeader");
        row_header.textContent = col;
        t_row.appendChild(row_header);
        headers.push(row_header);
      }
      else if (typeof col == "function")
      {
        const td = document.createElement("td");
        td.classList.add("TableData");
        td.classList.add("Flash");
        const set_data = function ()
        {
          if (td.classList.contains("Flash"))
          {
            td.classList.remove("Flash");
            td.classList.add("Flash2");
          }
          else
          {
            td.classList.remove("Flash2");
            td.classList.add("Flash");
          }
          td.textContent = col();
        };
        td.addEventListener("click", set_data)
        if (headers.length > 0)
        {
          headers[col_i].addEventListener("click", set_data);
        }
        set_row_data_funcs.push(set_data);
        gRandomizers.push(set_data);
        t_row.appendChild(td);
      }
    }
    table.appendChild(t_row);
  }
  const set_table_data = function ()
  {
    for (const i of set_row_data_funcs)
    {
      i();
    }
  };
  th.addEventListener("click", set_table_data)
  set_table_data();

  const div = document.createElement("div");
  div.classList.add("Row");
  div.appendChild(table);
  document.getElementById("main").appendChild(div)
}

function init()
{
  addTable("Meta",
    [
      ["Difficulty", "Element", "Tarot", "Direction"],
      [getRandomDifficulty, getRandomMagicElement, getRandomTarot, getRandomDirection],
    ]
  );

  addTable("Symbols",
    [
      [getRandomSymbol, getRandomSymbol, getRandomSymbol],
    ]
  );

  addTable("Likely odds",
    [
      ["Low (25%)", "Even (50%)", "High (75%)"],
      [getRandomLowLikelyOdd, getRandomEvenLikelyOdd, getRandomHighLikelyOdd],
    ]
  );

  addTable("Prompt",
    [
      ["Verb", "Adjective", "Noun"],
      [getRandomVerb, getRandomAdjective, getRandomNoun],
    ]
  );

  addTable("Event",
    [
      ["Focus", "Action", "Subject"],
      [getRandomFocus, getRandomVerb, getRandomNoun],
    ]
  );

  addTable("Dice",
    [
      ["D4", "D6", "D8", "D10", "D12", "D20", "D100"],
      [getRandomD4, getRandomD6, getRandomD8, getRandomD10, getRandomD12, getRandomD20, getRandomD100],
    ]
  );

  addTable("Senses",
    [
      ["See", "Hear", "Smell", "Feel"],
      [getRandomVisual, getRandomSound, getRandomSmell, getRandomFeeling],
    ]
  );

  addTable("Quest",
    [
      ["Framing event", "Objective", "Location", "Complication"],
      [getRandomFramingEvent, getRandomObjective, getRandomLocation, getRandomComplication],
    ]
  );

  addTable("Belongings",
    [
      [getRandomBelonging, getRandomBelonging, getRandomBelonging, getRandomBelonging],
    ]
  );

  addTable("Names",
    [
      [getRandomName, getRandomName, getRandomName, getRandomName],
    ]
  );

  addTable("Trap",
    [
      ["Object", "Trigger", "Effect", "Severity"],
      [getRandomTrapObject, getRandomTrapTrigger, getRandomTrapEffect, getRandomTrapSeverity],
    ]
  );

  addTable("Wilderness",
    [
      ["Location", "Time", "Temperature", "Wind", "Weather"],
      [getRandomWildernessLocation, getRandomWildernessTime, getRandomWildernessTemperature, getRandomWildernessWind, getRandomWildernessWeather],
    ]
  );

  addTable("Dungeon",
    [
      ["Theme", "Feature", "Contents", "Characteristic"],
      [getRandomDungeonTheme, getRandomDungeonFeature, getRandomDungeonContents, getRandomDungeonCharacteristic],
    ]
  );

  addTable("Urban",
    [
      ["Name", "Feature", "Location"],
      [getRandomUrbanName, getRandomUrbanFeature, getRandomUrbanLocation],
    ]
  );

  addTable("NPC",
    [
      ["Race", "Gender", "Age", "Physique"],
      [getRandomRace, getRandomGender, getRandomAge, getRandomPhysique],
      ["Skintone", "Hair", "Eyes", "Class"],
      [getRandomSkintone, getRandomHair, getRandomEyes, getRandomClass],
      ["Doing", "Feature", "Name", "Nickname"],
      [getRandomNpcDoing, getRandomNpcFeature, getRandomName, getRandomNickname],
      ["Mood", "Disposition", "Trait", "Alignment"],
      [getRandomMood, getRandomDisposition, getRandomNpcTrait, getRandomAlignment],
      ["Occupation", "Quirk", "Virtue", "Vice"],
      [getRandomOccupation, getRandomNpcQuirk, getRandomVirtue, getRandomVice],
    ]
  );

  randomize();

  document.getElementById("main").on
  document.getElementById("main").style.visibility = "visible";
}
