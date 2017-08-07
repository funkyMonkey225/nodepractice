const KrispyKreme = require('./eventemit.js');
const notifier = require('./notifier.js');

function main() {
  // Associate the `add` methods
  // from krispykreme module
  // with callbacks you pass to the
  // wsnotifier methods

  notifier.init();
  KrispyKreme.hotListener(() => {
      notifier.broadcast('HOT DONUTS!');
  });
  KrispyKreme.noneListenter(() => {
      notifier.broadcast('NO DONUTS!');
  });
}
main();