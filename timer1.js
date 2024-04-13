const setAlarms = function(alarms) {
  for (let alarm of alarms) {
    let time = parseInt(alarm) * 1000;
    if (!isNaN(time) && time > 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, time);
    }
  }
}

const args = process.argv.slice(2);

setAlarms(args);
