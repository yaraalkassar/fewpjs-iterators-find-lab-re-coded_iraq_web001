const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(array) {
  let winCheck = array.find(el => el.result === "W")
  return winCheck !== undefined ? winCheck.year : winCheck
}