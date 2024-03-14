"use strict";

function getRandomElement(elements)
{
  return elements[getRandomInt(0, elements.length - 1)];
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

function setVirtue()
{
  document.getElementById("virtue").innerHTML = getRandomVirtue();
}

function setVice()
{
  document.getElementById("vice").innerHTML = getRandomVice();
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
  setVirtue();
  setVice();
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
    document.getElementById("symbol" + String(1+i)).innerHTML = selected[i];
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

  document.getElementById("main").style.visibility = "visible";
}
