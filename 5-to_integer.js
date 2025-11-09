const args = process.argv.slice(2);
const firstArg = args[0];
if (firstArg === undefined) {
  console.log('Not a number');
} else {
  const num = parseInt(firstArg);
  if (isNaN(num)) {
    console.log('Not a number');
  } else {
    console.log(`My number: ${num}`);
  }
}