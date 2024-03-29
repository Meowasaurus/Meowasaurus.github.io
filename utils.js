"use strict";

/// Return a random element from the list of things
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
