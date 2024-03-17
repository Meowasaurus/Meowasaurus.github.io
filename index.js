"use strict";

/// The list of functions that can be called to randomize an element
var gRandomizers = [];

/// Randomize all contents
function randomize()
{
  for (const r of gRandomizers)
  {
    r();
  }
}

/// Add table to the page
function addTable(name, data)
{
  let table_name = name
  const row_div = document.createElement("div");
  row_div.classList.add("Row");

  // Add header
  const header_div = document.createElement("div");
  header_div.classList.add("RowHeader");
  header_div.innerText = name;
  row_div.appendChild(header_div);

  // Add contents
  const contents_div = document.createElement("div");
  contents_div.classList.add("RowContent");

  const table = document.createElement("table");
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
        row_header.classList.add("TableHeader");
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
  contents_div.appendChild(table);
  const expander_div = document.createElement("div");
  expander_div.classList.add("RowContentExpander");
  expander_div.appendChild(contents_div);
  row_div.appendChild(expander_div);

  // Clicking the header refreshes the data or opens the expander
  const set_table_data = function ()
  {
    for (const i of set_row_data_funcs)
    {
      i();
    }
  };
  const is_expander_expanded = function ()
  {
    return expander_div.classList.contains("RowContentExpanderExpanded");
  }
  const toggle_expand_row = function ()
  {
    if (is_expander_expanded())
    {
      document.cookie = table_name + "=no";
    }
    else
    {
      document.cookie = table_name + "=yes";
    }
    expander_div.classList.toggle("RowContentExpanderExpanded");
    contents_div.classList.toggle("RowContentExpanded");
  }
  header_div.addEventListener("click", function ()
  {
    if (is_expander_expanded())
    {
      set_table_data();
    }
    else
    {
      toggle_expand_row();
    }
  })


  // Right clicking the header hides the data
  header_div.addEventListener("contextmenu", function ()
  {
    toggle_expand_row();
  })

  // Init data
  set_table_data();
  if (!document.cookie.includes(table_name + "=no"))
  {
    toggle_expand_row();
  }

  document.getElementById("main").appendChild(row_div)
}

/// Init the page
function init()
{
  // Stop right clicks
  document.addEventListener("contextmenu", function (event)
  {
    event.preventDefault();
  });

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

  document.getElementById("main").style.visibility = "visible";
}
