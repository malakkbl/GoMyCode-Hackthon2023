const Personas = [
  {
    id: 1,
    title: "BARAKA",
    category: "outworld",
    attaque: "hand blades",
    img: "./images/baraka.jpg",
    desc: `Baraka is a Mortal Kombat 
      character who comes from a race in the Outlands. 
      He's a fierce warrior who has risen through his group's 
      ranks to become one of the most powerful fighters.`,
  },
  {
    id: 2,
    title: "D'VORAH",
    category: "outworld",
    attaque: "body weapons",
    img: "./images/dvorah.jpg",
    desc: `
      This is one of the Mortal
       Kombat characters that has risen up
        from the Outworld. He's even been the main antagonist in some iterations of
         Mortal Kombat
      `,
  },
  {
    id: 3,
    title: "FROST",
    category: "cyborg",
    attaque: "ice frost",
    img: "./images/frost.jpg",
    desc: `
      Frost is one of the more interestingly designed Mortal Kombat female characters.
       She's a cyborg who made a comeback in this newest version of the game
      `,
  },
  {
    id: 4,
    title: "GERAS",
    category: "cyborg",
    attaque: "time and sand",
    img: "./images/geras.jpg",
    desc: `
      Geras is a creative that was made artificially. Created entirely to serve as an enforcer. He's 
      named after the Deity of old age with powers based around controlling time and sand
      `,
  },
  {
    id: 5,
    title: "FUJIN",
    category: "god",
    attaque: "wind",
    img: "./images/fujin.jpg",
    desc: `
      Fujin is definitely one of the most high-powered sounding Mortal 
      Kombat game characters, 
      as the God of Wind and one of the Protectors of Earthrealm
      `,
  },
  {
    id: 6,
    title: "RAIDEN",
    category: "god",
    attaque: "Light of the sun",
    img: "./images/raiden.jpg",
    desc: `
      Raiden could be called the central character of Mortal Kombat, he's 
      appeared in every single instalment and has always had a central role. He's the God of Thunder,
       a protector of the Earthrealm, and he's 
      often the central character in story modes in the series
      `,
  },
  {
    id: 7,
    title: "NIGHT WOLF",
    category: "humain",
    attaque: "Mystical weapons",
    img: "./images/night.jpg",
    desc: `
      Night Wolf has become one of the most recognisable Native
       American video game characters! 
      He makes use of mystical weapons like a bow he creates and a Tomahawk
      `,
  },
  {
    id: 8,
    title: "LIU KANG",
    category: "humain",
    attaque: "Kung fu",
    img: "./images/luikang.jpg",
    desc: `
      Liu Kang has appeared in just about every Mortal Kombat game. He's 
      one of the main characters as Earthrealm's greatest hero, Liu Kang is one of the most iconic Mortal Kombat characters
      `,
  },
  {
    id: 9,
    title: "ROBOCOP",
    category: "cyborg",
    attaque: "weapons, armor, guns",
    img: "./images/robocop.jpg",
    desc: `
      Another easy one! This one of the Mortal Kombat game characters is just the robotic cop best known from fun 80s films.`,
  },
  {
    id: 10,
    title: "Tijani",
    category: "not humain",
    attaque: "talking",
    img: "./images/tijani.jpg",
    desc: `
        Another easy one! This one of the Mortal Kombat game characters is just the robotic cop best known from fun 80s films.`,
  },
];

window.onload = function () {
  // Create an array for my categories , with "all" at the beginning :
  const categories = ["all", ...new Set(Personas.map((item) => item.category))];
  // Select the container for the buttons
  const buttonContainer = document.querySelector(".button-container");
  // Select the container for the character cards
  const charactersContainer = document.getElementById("characters-container");
  // Iterate over each category
  categories.forEach((category) => {
    // Create a new button element
    const button = document.createElement("button");
    button.className = "Mybtn";
    button.textContent = category.charAt(0).toUpperCase() + category.slice(1); //First letter upper 
    buttonContainer.appendChild(button);
    button.addEventListener("click", function () {
      charactersContainer.innerHTML = ""; // Clear the characters container
      // If the category is 'all', display all characters, otherwise filter characters based on category
      let charactersToDisplay;
      if (category === "all") {
        charactersToDisplay = Personas;
      } else {
        charactersToDisplay = Personas.filter(
          (item) => item.category === category
        );
      }
      displayCharacters(charactersToDisplay);
    });
  });

  displayCharacters(Personas); // Initially, display all characters
};

function displayCharacters(characters) {
  const charactersContainer = document.getElementById("characters-container");
  characters.forEach((character) => {
    const characterCard = document.createElement("div");
    characterCard.className = "character-card card mb-3";

    // Create row for image and card body
    const cardRow = document.createElement("div");
    cardRow.className = "row g-0";

    // Create column for image
    const imgCol = document.createElement("div");
    imgCol.className = "col-md-4";
    const characterImage = document.createElement("img");
    characterImage.src = character.img;
    characterImage.className = "img-fluid rounded-start";
    imgCol.appendChild(characterImage);
    // Create column for card body
    const bodyCol = document.createElement("div");
    bodyCol.className = "col-md-8";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const characterTitle = document.createElement("h2");
    characterTitle.textContent = character.title;
    characterTitle.className = "card-title";

    const characterAttaque = document.createElement("p");
    characterAttaque.textContent = "Attaque: " + character.attaque;
    characterAttaque.className = "card-text";

    const characterDescription = document.createElement("p");
    characterDescription.textContent = character.desc;
    characterDescription.className = "card-text";

    const characterCategory = document.createElement("p");
    characterCategory.textContent = "#" + character.category;
    characterCategory.className = "card-text text-muted";

    // Append elements to card body:
    cardBody.append(
      characterTitle,
      characterAttaque,
      characterDescription,
      characterCategory
    );

    // Append image and card body to row:
    bodyCol.appendChild(cardBody);
    cardRow.append(imgCol, bodyCol);

    // Append row to card container:
    characterCard.appendChild(cardRow);

    // Append card to main characters container:
    charactersContainer.appendChild(characterCard);
  });
}
