
const handleUserInput = (key) => {
  if (key === 'w') {
    connection.write("Move: up");
  }
}

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {
  setupInput 
};