  function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointsPerKmOverLimit = 5;
    const maxDemeritPoints = 12;

    if (speed <= speedLimit) {
      console.log("OK");
    } else {
      const demeritPoints = Math.floor(
        (speed - speedLimit) / demeritPointsPerKmOverLimit
      );

      if (demeritPoints >= maxDemeritPoints) {
        console.log("License suspended");
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
}
