//An action that returns the current timestamp
function main() {
  var msg = Date.now();
  return {
    body: `${msg}`};
}
