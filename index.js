const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const winningTeam = arr.find(team => team.result === "W")
  if (winningTeam) return winningTeam.year
}
