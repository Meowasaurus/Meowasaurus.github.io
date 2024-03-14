"use strict";

function getRandomFocus()
{
  return getRandomElement(kFocus);
}

const kFocus = [
  "Player positive",
  "Player negative",
  "New NPC",
  "NPC action",
  "NPC positive",
  "NPC negative",
  "Remote event",
  "Ambiguous event",
  "New thread",
  "Continue thread",
  "Close thread",
]
