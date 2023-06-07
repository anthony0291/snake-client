let connection; 

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === 'w') {
    connection.write("Move: up");
  };

  if (key === "a"){
    connection.write("Move: left");
  };

  if (key === "s"){
    connection.write("Move: down");
  };

  if (key === "d"){
    connection.write("Move: right");
  };

  if (key === 'l') {
    process.exit();
  }

  if (key === 'y') {
    connection.write("Say: Badger")
  }

  if (key === 'h') {
    connection.write("Say: Mushroom")
  }

  if (key === 'n') {
    connection.write("Say: Sneek")
  }
}



module.exports = {setupInput};