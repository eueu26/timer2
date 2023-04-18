const alarm = (timer) => {
  
  
  for (let time of timer) {
    const num = Number(time);
    setTimeout(() => {
      process.stdout.write("\u0007" + "Beep" + "\n");
    }, num * 1000);
  }
};
alarm(process.argv.slice(2));

