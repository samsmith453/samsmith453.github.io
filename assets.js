var pics = [

   // when adding new assets: add new element here and also change the draggedIt function
   // which currently presumes that if greater than 8, the index should reset to 0
   // this will have to be increased to add more elements


   {
   url: "assets/minimaxPic.gif",
   title: "Minimax Noughts & Crosses",
   text:"<p>Using a recursive \
   minimax algorithm the computer runs \
   through every possible outcome and \
   chooses the best move. This was a very challenging project \
   that required a lot of time getting to grips with recursion and \
   the minimax concept but I am pleased with the result.</p><p>Human players can \
   pit their wits against the AI (but will never be able to win)</p>\
   <p class='skills'>Skills used: HTML, CSS, Javascript\
   (Minimax Algorithm), JQuery",
   goTo: "View on CodePen",
   goToUrl: "http://codepen.io/samsmith453/full/WRaYVE/"
},{
   url: "assets/simon.gif",
   title: "Simon Game",
   text:"<p>The Simon Game requires a lot of state-tracking to ensure \
   that the game flows as it should. Creating and positioning the necessary \
   overlapping shapes, and creating the LED 'flash' effect was also a challenge. \
   </p><p>If I were to return & improve \
   the code, I'd make better use of object orientated programming to record \
   the game state and neaten things up.</p><p class='skills'>Skills used: HTML, \
   CSS, Javascript, JQuery.",
   goTo: "View on CodePen",
   goToUrl: "http://codepen.io/samsmith453/full/ygZOKw/"
},{
   url: "assets/pomodoro.gif",
   title: "Pomodoro Timer",
   text: "<p>To make the timer easy to use required being able to \
   edit the time by typing or button use, without altering the display \
   time if running. Using the tomatoes as a visual aid improves the timer too.</p> \
   <p>Once again, if I were to work on the timer today, the code could benefit \
   from object orientation, but I like the look and feel.</p><p class='skills'>Skills used: \
   HTML, CSS, Javascript, JQuery</p>",
   goTo: "View on CodePen",
   goToUrl: "http://codepen.io/samsmith453/full/MJrgKR/"
},{
   url: "assets/wikisearch.gif",
   title: "Wikipedia Search Tool",
   text: "<p>This search tool was my first foray into the use of APIs. I especially enjoyed the \
   data retrieval and manipulation aspects of the project. The simple design leaves something to be \
   desired but delivers on the necessary, which is my design approach in most cases.</p><p>I learned \
   a lot about using API documentation in this project, as well as cross-origin issues and JSONP.</p>\
   <p class='skills'>Skills used: HTML, CSS, Javascript, API & JSON know-how</p>",
   goTo: "View on CodePen",
   goToUrl: "https://codepen.io/samsmith453/full/LxZWPv/"
},{
   url: "assets/chat.gif",
   title: "Node.js Chat App",
   text: "<p>I created this chat application to apply all of the knowledge I had acquired from my Node.js \
   learning thus far. It uses express.js to run a server, and Jade/Pug to render the page differently dependent \
   on who logs in. Log-in authentication is enabled with HTDigest encryption, and chat history is stored and loaded \
   using MongoDB. Messages are sent and received using web socket technology.</p><p>I particularly enjoyed using Pug as a view \
   engine, so that one page can be dynamically rendered differently using variables passed from the server.</p><p class='skills'>\
   Skills used: Node.js, Express.js, MongoDB, Web Sockets, Pug/Jade, HTDigest</p>",
   goTo: "Private",
   goToUrl: ""
}
];
