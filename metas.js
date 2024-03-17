"use strict";


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
