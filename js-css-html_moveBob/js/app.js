const bob = document.querySelector('.bob')
const eyes = document.querySelector('.eye-container')

let left = 100;
function moveRight() {
  left += 100;
  bob.style.left = left + 'px'
  console.log( bob.style.left)
  eyes.style.transform = 'rotate(0deg)'
  eyes.style.left ='60px'
}

function moveleft() {
  left -= 100;
  bob.style.left = left + 'px'
  console.log( bob.style.left)
  eyes.style.transform = 'rotate(180deg)'
  eyes.style.left ='-60px'
}

function moveBob(e) {
  console.log('moving a keystroke which is ', e.key)
  if(e.key == 'ArrowLeft'){
    //move bob left
    moveleft()

  }
  if(e.key === 'ArrowRight'){
    //move bob right
    moveRight()

  }
}


document.addEventListener('keydown', moveBob)