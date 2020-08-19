// Variables
let speed = 150
let x = 5
let y = 4
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']//y
let apple = D4
beep = document.getElementById('beep')
let snake = [(letters[y],x)]
let score = 0
let dRaw
const arrowUp = document.getElementsByClassName('up')[0]
const arrowRight = document.getElementsByClassName('right')[0]
const arrowDown = document.getElementsByClassName('down')[0]
const arrowLeft = document.getElementsByClassName('left')[0]
const scoreboard = document.getElementsByClassName('score')[0]
let isbeforestart = Boolean
isbeforestart = true
const reload = () => {
  location.reload()
}

// Generate apple

// Apple 
let appleX
let appleY

let random1_9X
let random1_9Y

const generateApple = ()=>{
  let random1_9X = Math.floor(Math.random() * (9)) + 1
  appleX = random1_9X
  let random1_9Y = Math.floor(Math.random() * (9))
  appleY = random1_9Y
  apple = document.getElementById(letters[appleY] + appleX)
  for(i = snake.length; i > 0; i--){
    // console.log(i)
    if(snake[i-1] == apple) {
      generateApple()
    }
  }
  apple.classList.add('apple')
  
}

generateApple()


// is before start? 
const beforStart = ()=> {
  // if(d)
}

// Reset on wall
const resetOnWall = ()=>{
  if (x > 9){
    x = 1
}
  if (y > 8) {
    y = 0
}
  if (x < 1) {
    x = 9
  }
  if (y < 0) {
    y = 8
  }
}


// Removes snake
const removeSnake = ()=> {
  for (i=1; i<82; i++) {
  document.getElementsByClassName(i)[0].classList.remove('cellfill')
  }
}

// snake head update 
snakeHeadUpdate = ()=>{
  snake[0] = document.getElementById(letters[y] + x)
}

// Snaketrail
const snakeTrail = ()=> {
  for (i=snake.length -1; i>0; i--) {
    snake[i]=snake[i-1]
  }
}



// Renders snake
snakeRender = ()=> {
  for(i=snake.length -1; i>-1; i--) {
  snake[i].classList.add('cellfill')
}
}

// isdead?
const death = ()=> {
  for(i = snake.length -1; i > 0; i--){
    if(snake[i] == snake[0] && isbeforestart == false) {
      document.getElementById('deathScreen').classList.remove('hidden')
      window.removeEventListener('keydown', direction)
      document.getElementById('deathScore').innerHTML="SCORE: " + score
      document.getElementsByClassName('score')[0].classList.add('hidden')
      window.clearInterval(gameinterval)
    }
  }
}

// speed increase 




const removeApple = ()=> {
  for (i=1; i<82; i++) {
    document.getElementsByClassName(i)[0].classList.remove('apple')
    }
}

// // Apple respawn
appleRespawn = ()=> {
  if (snake[0] == apple) {
  removeApple()
  beep.play()
  generateApple()
  score ++ 
  scoreboard.innerHTML = "SCORE: " + score
  snake.push("tail")


}
}


// Game engine
  let d


  const gameEngine =() => {

  // raw input to static direction
    if (dRaw == 'up' && d !== 'down') {
      d = 'up'
    } else if (dRaw == 'right' && d !== 'left') {
      d = 'right'
    } else if (dRaw == 'down' && d !== 'up') {
      d = 'down'
    } else if (dRaw == 'left' && d !== 'right') {
      d = 'left'
    }
    
    if (d == 'up') {
      y--
    } else if (d == 'right') {
      x++
    } else if (d == 'down') {
      y++
    } else if (d == 'left') {
      x--
    }
    resetOnWall()
    removeSnake()
    snakeTrail()
    snakeHeadUpdate()
    snakeRender()
    appleRespawn()
    death()
    
    
    
    
  }

const gameinterval = setInterval(gameEngine, speed);

const up = document.getElementsByClassName('up')[0]
const right = document.getElementsByClassName('right')[0]
const down = document.getElementsByClassName('down')[0]
const left = document.getElementsByClassName('left')[0]


// Sets snake direction
const direction = (e)=> {
  if (e.type == 'keydown') {
    isbeforestart = false
  }

  if (e.key === 'ArrowUp') {  
      dRaw = 'up'
      up.classList.add('arrowActive')
      setTimeout(() => {
        up.classList.remove('arrowActive')
      }, 100);
  } else if (e.key === 'ArrowRight') {
      dRaw = 'right'
      right.classList.add('arrowActive')
      setTimeout(() => {
        right.classList.remove('arrowActive')
      }, 100);
  } else if (e.key === 'ArrowDown') {
      dRaw = 'down'
      down.classList.add('arrowActive')
      setTimeout(() => {
        down.classList.remove('arrowActive')
      }, 100);
  } else if ( e.key === 'ArrowLeft') {
      dRaw = 'left' 
      left.classList.add('arrowActive')
      setTimeout(() => {
        left.classList.remove('arrowActive')
      }, 100);
  }

}

window.addEventListener('keydown', direction)

setInterval(() => {
  
}, speed);

const goup = () => {
  dRaw = 'up'
  isbeforestart = false
}

const goright = () => {
  dRaw = 'right'
  isbeforestart = false
}

const godown = () => {
  dRaw = 'down'
  isbeforestart = false
}

const goleft = () => {
  dRaw = 'left'
  isbeforestart = false
}

arrowUp.addEventListener('touchstart', goup)
arrowRight.addEventListener('touchstart', goright)
arrowDown.addEventListener('touchstart', godown)
arrowLeft.addEventListener('touchstart', goleft)

arrowUp.addEventListener('click', goup)
arrowRight.addEventListener('click', goright)
arrowDown.addEventListener('click', godown)
arrowLeft.addEventListener('click', goleft)


// snake head direction 










// Old code

// Controlling snake
// const keyPress = (e)=>{
//   // if (e.key != 'ArrowRight') {
//   //   clearInterval(rightInterval)
//   //   console.log('right interval cleared')
  
//   switch (e.key) {
    
//       case 'ArrowUp':
      
//         console.log('arrowup')
//         break
      
//       case 'ArrowRight':    
//       const snakeRight = ()=> {
//         console.log('arrowright')
//           removeSnake()
//           yLetter = letters[y]
//           document.getElementById(yLetter + x).classList.add('cellfill')
//           x++;
//           // Reset on wall
//           resetOnWall()
//           // Stop on other keydown
      
          
//             // clearInterval(snakeRight)
//           }
//           // if (e.key != 'ArrowRight') {
//           //   console.log('right interval cleared')
//             // clearInterval(rightInterval)
          
    
//       const rightInterval = setInterval(snakeRight, speed)
    
//         break

//       case 'ArrowDown': 
//       console.log('arrowright')
//         // clearAllIntervals()
// const snakeDown = ()=>{
  
//         yLetter = letters[y]      
//           removeSnake()
//           document.getElementById(yLetter + x).classList.add('cellfill')
//           y++
//           // Reset on wall
//           resetOnWall()
//           // Stop on other keydown
          
//         }

//       const downInterval =  setInterval(snakeDown, speed)
        
//         break

//       case 'ArrowLeft': 
//         console.log('arrowleft')
//   }



// window.addEventListener('keydown', keyPress)
// }

// const clearAllIntervals = ()=>{
//   console.log('all intervals cleared')
//   clearInterval(snakeRight)
// }


    



//  'ArrowRight':
  //   d = 'right'
  //   console.log(d)
    

  //  'ArrowDown':
  //   d = 'down'
  //   console.log(d)
    

  //  'ArrowLeft':
  //   d = 'left'   
  //   console.log(d)

