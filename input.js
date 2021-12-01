
// Stores the active TCP connection object.
let connection;


// setup interface to handle user input from stdin
const setupInput = conn => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (data) {
  //connection.write("Name: CUI");
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'a') {
    connection.write("Say: Gary");
    connection.write("Move: left");
  } else if (data === 's') {
    connection.write("Say: finish");
    connection.write("Move: down");
  } else if (data === 'w') {
    connection.write("Say: this");
    connection.write("Move: up");
  } else {
    connection.write("Say: hahah");
    connection.write("Move: right");
  }

};




module.exports = {setupInput};
