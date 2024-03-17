"use strict";

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
