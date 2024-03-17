"use strict";

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
