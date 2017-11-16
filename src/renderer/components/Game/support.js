export function moveLeft () {}

export function moveUp () {}

export function moveRight () {}

export function moveDown () {}

export function noSpace (board) {
  board.forEach((row, index) => {
    row.forEach((item, index) => {
      if (item === 0) {
        return false
      }
    })
  })

  return true
}

export function noBlockHorizontal (row, col1, col2, board) {}
