export function getNumberBackgroundColor (number) {
  switch (number) {
    case 2: return '#eee4da'
    case 4: return '#ede0c8'
    case 8: return '#f2b179'
    case 16: return '#f59563'
    case 32: return '#f67c5f'
    case 64: return '#f65e3b'
    case 128: return '#edcf72'
    case 256: return '#edcc61'
    case 512: return '#9c0'
    case 1024: return '#33b5e5'
    case 2048: return '#09c'
    case 4096: return '#a6c'
    case 8192: return '#93c'
  }

  return 'black'
}

export function getNumberColor (number) {
  if (number <= 4) {
    return '#776e65'
  }
  return 'white'
}

// if hava space return flase else return true
export function noSpace (board) {
  let flag = true
  board.forEach((row, index) => {
    row.forEach((item, index) => {
      if (item === 0) {
        flag = false
      }
    })
  })
  return flag
}

export function noS (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === 0) {
        return false
      }
    }
  }
  return true
}
