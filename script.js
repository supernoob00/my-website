// Wait for the document to load before running the script 
(function ($) {
  
  // We use some Javascript and the URL #fragment to hide/show different parts of the page
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page
  $(window).on('load hashchange', function(){
    
    // First hide all content regions, then show the content-region specified in the URL hash 
    // (or if no hash URL is found, default to first menu item)
    $('.content-region').hide();
    
    // Remove any active classes on the main-menu
    $('.main-menu a').removeClass('active');
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    
    // Now show the region specified in the URL hash
    $(region).show();
    
    // Highlight the menu link associated with this region by adding the .active CSS class
    $('.main-menu a[href="'+ region +'"]').addClass('active'); 

    // Alternate method: Use AJAX to load the contents of an external file into a div based on URL fragment
    // This will extract the region name from URL hash, and then load [region].html into the main #content div
    // var region = location.hash.toString() || '#first';
    // $('#content').load(region.slice(1) + '.html')
    
  });
  
})(jQuery);


/* populate projects page with project cards */

const projectsContainer = document.querySelector(".projects-container");
const projects = [
  {
    name: "Minesweeper",
    img: "./img/minesweeper.png",
    link: "https://github.com/supernoob00/MinesFX",
    description: "(Still in progress) The most comprehensive Minesweeper desktop client yet. Features multiple game variants, a board editor, and the ability to upload custom boards online."
  },
  {
    name: "SnakeFX",
    img: "./img/snake_game.png",
    link: "https://github.com/supernoob00/SnakeFX",
    description: "A video game inspired by the classic game Snake, created using JavaFX. Dodge spinning blades while collecting power-ups to survive as long as possible."
  },
  {
    name: "Crowdify",
    img: "./img/crowdify.png",
    link: "https://crowdify.up.railway.app/#/",
    description: "A website inspired by Kickstarter that allows users to donate to people's campaigns and create their own."
  },
  {
    name: "Word Web",
    img: "./img/word_web.png",
    link: "https://wordweb.up.railway.app/",
    description: "View dynamic, physically-simulated networks of related words using the Moby Thesaurus, the largest thesaurus of the English language."
  },
  {
    name: "Hex",
    img: "./img/hex.png",
    link: "https://supernoob00.github.io/HexGame/",
    description: "Play the the famous game of Hex, popularized by the famous mathematician John Nash, against another player or an AI."
  },
  {
    name: "Super Tic-Tac-Toe",
    img: "./img/tictactoe.png",
    link: "https://supernoob00.github.io/tic-tac-toe/",
    description: "Play Tic-Tac-Toe with another player on up to a 7 x 7 board. Features the ability to undo and redo moves."
  }
];

function projectCard(projectInfo) {
  const card = document.createElement("div");
  card.classList.add("project-card");

  const projectName = document.createElement("h3");
  projectName.textContent = projectInfo.name;
  card.appendChild(projectName);

  const projectImg = document.createElement("img");
  projectImg.src = projectInfo.img;
  card.appendChild(projectImg);

  const projectDesc = document.createElement("p");
  projectDesc.textContent = projectInfo.description;
  card.appendChild(projectDesc);

  card.addEventListener('click', (e) => {
    window.open(projectInfo.link, '_blank');
  });
  return card;
}

for (const project of projects) {
  const card = projectCard(project);
  console.log(card);
  projectsContainer.appendChild(card);
}

