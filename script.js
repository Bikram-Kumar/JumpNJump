                                                                                                                                                                                                var
                                                                                                 canvas =
                                                                                                 document
                                                                                                 .getElementById(
                                                                                                  "cnvs"
                                                                                                 );
                                                                                                var
                                                                                                 ctx =
                                                                                                 canvas
                                                                                                 .getContext(
                                                                                                  "2d"
                                                                                                 );
                                                                                                var
                                                                                                 width =
                                                                                                 canvas
                                                                                                 .width =
                                                                                                 window
                                                                                                 .innerWidth -
                                                                                                 14;
                                                                                                var
                                                                                                 height =
                                                                                                 canvas
                                                                                                 .height =
                                                                                                 window
                                                                                                 .innerHeight -
                                                                                                 20;

                                                                                                var
                                                                                                 startBtn =
                                                                                                 document
                                                                                                 .getElementById(
                                                                                                  "startBtn"
                                                                                                 );
                                                                                                var
                                                                                                 retryBtn =
                                                                                                 document
                                                                                                 .getElementById(
                                                                                                  "retryBtn"
                                                                                                 );
                                                                                                var
                                                                                                 scrDisplay =
                                                                                                 document
                                                                                                 .getElementById(
                                                                                                  "scrDisplay"
                                                                                                 );


                                                                                                startBtn
                                                                                                 .style
                                                                                                 .marginLeft =
                                                                                                 " " +
                                                                                                 width /
                                                                                                 2.3 +
                                                                                                 "px";
                                                                                                startBtn
                                                                                                 .style
                                                                                                 .top =
                                                                                                 " " +
                                                                                                 height /
                                                                                                 2 +
                                                                                                 "px";

                                                                                                retryBtn
                                                                                                 .style
                                                                                                 .marginLeft =
                                                                                                 " " +
                                                                                                 width /
                                                                                                 2.3 +
                                                                                                 "px";
                                                                                                retryBtn
                                                                                                 .style
                                                                                                 .top =
                                                                                                 " " +
                                                                                                 height /
                                                                                                 2 +
                                                                                                 "px";

                                                                                                scrDisplay
                                                                                                 .style
                                                                                                 .marginLeft =
                                                                                                 " " +
                                                                                                 width /
                                                                                                 3 +
                                                                                                 "px";
                                                                                                scrDisplay
                                                                                                 .style
                                                                                                 .top =
                                                                                                 " " +
                                                                                                 height /
                                                                                                 2.3 +
                                                                                                 "px";

                                                                                                var
                                                                                                 bgMusic =
                                                                                                 document
                                                                                                 .getElementById(
                                                                                                  "bgMusic"
                                                                                                 );
                                                                                                var
                                                                                                 jmpMusic =
                                                                                                 document
                                                                                                 .getElementById(
                                                                                                  "jmpMusic"
                                                                                                 );

                                                                                                var
                                                                                                 gameName =
                                                                                                 document
                                                                                                 .getElementById(
                                                                                                  "gameName"
                                                                                                  );
                                                                                                gameName
                                                                                                 .style
                                                                                                 .top =
                                                                                                 " " +
                                                                                                 width /
                                                                                                 100 +
                                                                                                 "px";
                                                                                                gameName
                                                                                                 .style
                                                                                                 .marginLeft =
                                                                                                 " " +
                                                                                                 width /
                                                                                                 4.4 +
                                                                                                 "px";
                                                                                                var
                                                                                                 gameOver =
                                                                                                 document
                                                                                                 .getElementById(
                                                                                                  "gameOver"
                                                                                                  );
                                                                                                gameOver
                                                                                                 .style
                                                                                                 .top =
                                                                                                 " " +
                                                                                                 width /
                                                                                                 2.5 +
                                                                                                 "px";
                                                                                                gameOver
                                                                                                 .style
                                                                                                 .marginLeft =
                                                                                                 " " +
                                                                                                 width /
                                                                                                 3.7 +
                                                                                                 "px";






                                                                                                var
                                                                                                 mainChar = {

                                                                                                  Mx: width /
                                                                                                   4,
                                                                                                  My: height /
                                                                                                   5,
                                                                                                  Mw: width /
                                                                                                   12,
                                                                                                  Ml: width /
                                                                                                   8,

                                                                                                  drawMain: function() {
                                                                                                   ctx
                                                                                                    .beginPath();
                                                                                                   ctx
                                                                                                    .fillStyle =
                                                                                                    "violet";

                                                                                                   ctx
                                                                                                    .rect(
                                                                                                     this
                                                                                                     .Mx,
                                                                                                     this
                                                                                                     .My,
                                                                                                     this
                                                                                                     .Mw,
                                                                                                     this
                                                                                                     .Ml
                                                                                                    );
                                                                                                   ctx
                                                                                                    .stroke();
                                                                                                   ctx
                                                                                                    .fill();
                                                                                                  }
                                                                                                 }

                                                                                                function drawGround() {
                                                                                                 ctx
                                                                                                  .beginPath();
                                                                                                 ctx
                                                                                                  .fillStyle =
                                                                                                  "skyblue";
                                                                                                 ctx
                                                                                                  .fillRect(
                                                                                                   0,
                                                                                                   0,
                                                                                                   width,
                                                                                                   height
                                                                                                  );
                                                                                                 ctx
                                                                                                  .moveTo(
                                                                                                   0,
                                                                                                   height /
                                                                                                   1.52
                                                                                                  );
                                                                                                 ctx
                                                                                                  .lineTo(
                                                                                                   width,
                                                                                                   height /
                                                                                                   1.52
                                                                                                  );
                                                                                                 ctx
                                                                                                  .lineWidth =
                                                                                                  5;
                                                                                                 ctx
                                                                                                  .stroke();
                                                                                                 ctx
                                                                                                  .lineWidth =
                                                                                                  1;


                                                                                                }
                                                                                                mainChar
                                                                                                 .gravity =
                                                                                                 function() {
                                                                                                  if (
                                                                                                   this
                                                                                                   .My <
                                                                                                   height /
                                                                                                   1.7
                                                                                                  ) {
                                                                                                   this
                                                                                                    .My +=
                                                                                                    height /
                                                                                                    200;
                                                                                                  }

                                                                                                 }

                                                                                                mainChar
                                                                                                 .jump =
                                                                                                 function() {
                                                                                                  if (
                                                                                                   this
                                                                                                   .My >
                                                                                                   height /
                                                                                                   1.8
                                                                                                  ) {
                                                                                                   this
                                                                                                    .My -=
                                                                                                    (height /
                                                                                                     5
                                                                                                    );
                                                                                                   mainChar
                                                                                                    .drawMain();
                                                                                                  }
                                                                                                 }


                                                                                                var
                                                                                                 obstacle = {

                                                                                                  Ox: width /
                                                                                                   1.5,
                                                                                                  Oy: height /
                                                                                                   1.65,
                                                                                                  Ow: width /
                                                                                                   15,
                                                                                                  Ol: width /
                                                                                                   12,
                                                                                                  Os: width /
                                                                                                   120,

                                                                                                  drawO: function() {
                                                                                                   ctx
                                                                                                    .beginPath();

                                                                                                   ctx
                                                                                                    .fillStyle =
                                                                                                    "red";
                                                                                                   ctx
                                                                                                    .fillRect(
                                                                                                     this
                                                                                                     .Ox,
                                                                                                     this
                                                                                                     .Oy,
                                                                                                     this
                                                                                                     .Ow,
                                                                                                     this
                                                                                                     .Ol
                                                                                                    );

                                                                                                  },

                                                                                                  moveO: function() {
                                                                                                   this
                                                                                                    .Ox -=
                                                                                                    this
                                                                                                    .Os;
                                                                                                   if (
                                                                                                    this
                                                                                                    .Ox <
                                                                                                    width &&
                                                                                                    this
                                                                                                    .Ox >
                                                                                                    0
                                                                                                   ) {
                                                                                                    obstacle
                                                                                                     .drawO();
                                                                                                   }
                                                                                                   if (
                                                                                                    this
                                                                                                    .Ox <
                                                                                                    0
                                                                                                   ) {
                                                                                                    let
                                                                                                     ran =
                                                                                                     Math
                                                                                                     .random();
                                                                                                    this
                                                                                                     .Ox =
                                                                                                     width;
                                                                                                    this
                                                                                                     .Oy =
                                                                                                     (
                                                                                                      ran *
                                                                                                      (
                                                                                                       width /
                                                                                                       15
                                                                                                      )
                                                                                                     ) +
                                                                                                     height /
                                                                                                     1.65;
                                                                                                    this
                                                                                                     .Ol =
                                                                                                     width /
                                                                                                     12 -
                                                                                                     (
                                                                                                      ran *
                                                                                                      (
                                                                                                       width /
                                                                                                       15
                                                                                                      )
                                                                                                     );
                                                                                                   }
                                                                                                  }

                                                                                                 }


                                                                                                function detect() {
                                                                                                 let
                                                                                                  mLeft =
                                                                                                  mainChar
                                                                                                  .Mx;
                                                                                                 let
                                                                                                  mRight =
                                                                                                  mainChar
                                                                                                  .Mx +
                                                                                                  mainChar
                                                                                                  .Mw;
                                                                                                 let
                                                                                                  mTop =
                                                                                                  mainChar
                                                                                                  .My;
                                                                                                 let
                                                                                                  mBottom =
                                                                                                  mainChar
                                                                                                  .My +
                                                                                                  mainChar
                                                                                                  .Ml;
                                                                                                 let
                                                                                                  oLeft =
                                                                                                  obstacle
                                                                                                  .Ox;
                                                                                                 let
                                                                                                  oRight =
                                                                                                  obstacle
                                                                                                  .Ox +
                                                                                                  obstacle
                                                                                                  .Ow;
                                                                                                 let
                                                                                                  oTop =
                                                                                                  obstacle
                                                                                                  .Oy;
                                                                                                 let
                                                                                                  oBottom =
                                                                                                  obstacle
                                                                                                  .Oy +
                                                                                                  obstacle
                                                                                                  .Ol;

                                                                                                 if (
                                                                                                  mRight >=
                                                                                                  oLeft &&
                                                                                                  mLeft <=
                                                                                                  oRight &&
                                                                                                  mBottom >
                                                                                                  oTop
                                                                                                 ) {
                                                                                                  obstacle
                                                                                                   .Os =
                                                                                                   0;
                                                                                                 }


                                                                                                 if (
                                                                                                  obstacle
                                                                                                  .Os ==
                                                                                                  0
                                                                                                 ) {

                                                                                                  retryBtn
                                                                                                   .style
                                                                                                   .display =
                                                                                                   "block";
                                                                                                  gameName
                                                                                                   .style
                                                                                                   .display =
                                                                                                   "block";
                                                                                                  gameOver
                                                                                                   .style
                                                                                                   .display =
                                                                                                   "block";
                                                                                                  scrDisplay
                                                                                                   .style
                                                                                                   .display =
                                                                                                   "block";

                                                                                                  scrDisplay
                                                                                                   .innerHTML +=
                                                                                                   "Your Score: " +
                                                                                                   score
                                                                                                   .number;

                                                                                                  ctx
                                                                                                   .beginPath();
                                                                                                  ctx
                                                                                                   .fillStyle =
                                                                                                   "rgba(0,0,200,0.25)";
                                                                                                  ctx
                                                                                                   .fillRect(
                                                                                                    0,
                                                                                                    0,
                                                                                                    width,
                                                                                                    height
                                                                                                   );


                                                                                                  bgMusic
                                                                                                   .pause();

                                                                                                  cancelAnimationFrame
                                                                                                   (
                                                                                                    reqFrame
                                                                                                   );
                                                                                                 }



                                                                                                }

                                                                                                var
                                                                                                 score = {
                                                                                                  number: 0,

                                                                                                  upScore: function() {
                                                                                                   ctx
                                                                                                    .beginPath();
                                                                                                   ctx
                                                                                                    .font =
                                                                                                    "18px Arial";
                                                                                                   ctx
                                                                                                    .fillStyle =
                                                                                                    "red";
                                                                                                   ctx
                                                                                                    .fillText(
                                                                                                     "Score: " +
                                                                                                     this
                                                                                                     .number,
                                                                                                     width -
                                                                                                     (
                                                                                                      width /
                                                                                                      3
                                                                                                     ),
                                                                                                     width /
                                                                                                     10
                                                                                                    );

                                                                                                   if (
                                                                                                    obstacle
                                                                                                    .Os !=
                                                                                                    0
                                                                                                   ) {
                                                                                                    this
                                                                                                     .number++;
                                                                                                   }
                                                                                                  },
                                                                                                 }


                                                                                                canvas
                                                                                                 .addEventListener(
                                                                                                  "click",
                                                                                                  get
                                                                                                 )

                                                                                                function get() {
                                                                                                 if (
                                                                                                  obstacle
                                                                                                  .Os !=
                                                                                                  0
                                                                                                 ) {
                                                                                                  mainChar
                                                                                                   .jump();
                                                                                                  jmpMusic
                                                                                                   .play();

                                                                                                 }
                                                                                                }

                                                                                                function loop() {
                                                                                                 drawGround
                                                                                                  ();
                                                                                                 mainChar
                                                                                                  .drawMain();
                                                                                                 mainChar
                                                                                                  .gravity();
                                                                                                 obstacle
                                                                                                  .drawO();
                                                                                                 obstacle
                                                                                                  .moveO();
                                                                                                 detect
                                                                                                  ();
                                                                                                 score
                                                                                                  .upScore();

                                                                                                 var
                                                                                                  reqFrame =
                                                                                                  requestAnimationFrame(
                                                                                                   loop
                                                                                                  );
                                                                                                }

                                                                                                function start() {
                                                                                                 startBtn
                                                                                                  .style
                                                                                                  .display =
                                                                                                  "none";
                                                                                                 gameName
                                                                                                  .style
                                                                                                  .display =
                                                                                                  "none";

                                                                                                 bgMusic
                                                                                                  .play();

                                                                                                 loop
                                                                                                  ();

                                                                                                }







                                                                                                function retry() {

                                                                                                 location
                                                                                                  .reload();

                                                                                                }




