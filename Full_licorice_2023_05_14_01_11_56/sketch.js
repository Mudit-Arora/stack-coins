let circleX1 = 100; //x cordinate of 1st circle
let circleY1 = 100; //y cordinate of 2nd circle
let circleX2 = 100; //x cordinate of 2nd circle
let circleY2 = 300; //y cordinate of 2nd circle
let circleX3 = 300; //x cordinate of 3rd circle
let circleY3 = 300; //y cordinate of 3rd circle
let level = 0; //variable for level
let check = -1; //variable to check whether circle has right cordinate or                     not

//Function to setup the canvas
function setup() 
{
  createCanvas(400, 400);
}

//Draw function
function draw()
{
  intro();
  if (level == 0)
  {
    intro();
  }
  if (level == 1)
  {
    level1();
  }
  if (level == 2)
  {
    level2();
  }
  if(level == 3)
    {
      level3();
    }
}

//Function for level 3
function level3()
{
  //Setup for level 3
  background('blue');
  fill('Green');
  circle(circleX3, circleY3, 100);
  textSize(15);
  fill('White');
  text(circleX3, 10, 50);
  text('   , ', 25, 50);
  text(circleY3, 40, 50);
  fill('Yellow');
  circle(100, 100, 100);
  //Checking Whether circle is on right cordinates or not
  if(check==4) 
    text('Try again', 10, 200);
  if(check==5)
    text('Good Work! Level 3 completed',10, 200);
  //To move the green circle
  if (keyIsPressed)
  {
    if (keyCode == UP_ARROW) 
    {
      circleY3--;
    } 
    else if (keyCode == DOWN_ARROW)
    {
      circleY3++;
    } 
    else if (keyCode == LEFT_ARROW)
    {
      circleX3--;
    }
    else if (keyCode == RIGHT_ARROW)
    {
      circleX3++;
    }
  }
}

//Function for Level 2
function level2()
{
  //Setup for level 2
  background('yellow');
  textSize(15);
  fill('Black');
  text(circleX2, 10, 100);
  text('   , ', 25, 100);
  text(circleY2, 40, 100);
  fill('Grey');
  circle(circleX2, circleY2, 75);
  //To check whether circle is on right cordinates or not
  if(check==2)
    text('Try again', 10, 80);
  if(check==3)
    text('Good Work! Level 2 completed',10, 60);
  fill('Cyan');
  circle(200, 100, 75);
  //To move the grey circle
  if (keyIsPressed)
  {
    if (keyCode == UP_ARROW)
    {
      circleY2--;
    }
    else if (keyCode == DOWN_ARROW)
    {
      circleY2++;
    }
    else if (keyCode == LEFT_ARROW)
    {
      circleX2--;
    }
    else if (keyCode == RIGHT_ARROW)
    {
      circleX2++;
    }
  }
}

//Funtion for level 1
function level1() 
{
  //Setup for level 1
  background('green');
  textSize(15);
  fill('White');
  text(circleX1, 10, 100);
  text('   , ', 25, 100);
  text(circleY1, 40, 100);
  circle(circleX1, circleY1, 50);
  fill('Black');
  circle(300, 300, 50);
  //To check whether circle is on right cordinates or not
  if(check==0)
    text('Try again', 10, 120);
  if(check==1)
    text('Good Work! Level 1 completed',10, 120);
  //To move white circle
  if (keyIsPressed)
  {
    if (keyCode == UP_ARROW)
    {
      circleY1--;
    }
    else if (keyCode == DOWN_ARROW)
    {
      circleY1++;
    }
    else if (keyCode == LEFT_ARROW)
    {
      circleX1--;
    } 
    else if (keyCode == RIGHT_ARROW)
    {
      circleX1++;
    }
  }
}

//Funtion for instructions
function intro()
{
  //Setup of instructions
  background(50);
  textSize(32);
  fill('white');
  text('INSTRUCTIONS', 75, 50);
  textSize(15);
  fill('Red');
  text('1. There are three levels in this game', 20, 100);
  fill('Yellow');
  text('2. Use keys to move the coin to stack on one another', 20, 120);
  fill('Cyan');
  text('3. You have to press different keys for different level', 20, 140);
  text('    to check whether they are on correct position or not', 20,160);
  fill('LightGreen');
  text('4. After you complete your level, click on the screen to go', 20, 180);
  text('    to next level.', 20, 200);
  fill('Orange');
  text('5. For level 1, press "Enter" to check', 20, 220);
  fill('Pink');
  text('6. For level 2, press "Shift" to check', 20, 240);
  fill('LightBlue');
  text('7. For level 3, press "Control" to check', 20, 260);
  textSize(20);
  fill('White');
  text('CLICK THE SCREEN TO START!', 50, 340);
}

//Function to check for different levels
function keyPressed()
{
  //For level 1
  if (key == 'Enter')
  {
    console.log(circleX1 + "," + circleY1);
    if (circleX1 == 300 && circleY1 == 300)
      {
      check=1;
      console.log('Good Work! Level 1 completed');
      }
      else
      {
      check=0;
      console.log('Try again');
      }
  }
  //For level 2
  if(key== 'Shift')
  {
  console.log(circleX2 + "," + circleY2);
  if(circleX2 == 200 && circleY2 == 100)
    {
    check=3;
    console.log('Good Work! Level 2 completed');
    }
  else
    {
    check=2;
    console.log('Try again');
    }
  }
  //For level 3
  if(key=='Control')
  {
  console.log(circleX3 + "," + circleY3);
    if(circleX3 == 100 && circleY3 == 100)
      {
      check=5;
      console.log('Good Work! Level 3 completed');
      }
    else
      {
      check=4;
      console.log('Try again');
      }
  }
}

//Funtion for when we click it goes to next level/function
function mousePressed()
{
  if (level == 0)
  {
    level = 1;
  } 
  else if (level == 1)
  {
    level = 2;
  }
  else if (level == 2)
  {
    level = 3;
  }
  else if (level == 3)
  {
    level = 0;
  }
}