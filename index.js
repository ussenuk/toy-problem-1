// document.addEventListener("DOMContentLoaded", function () {
//   const speedOfCar = document.getElementById("speedOfCar");
//   const checkSpeedBtn = document.getElementById("checkSpeedBtn");
//   const result = document.getElementById("result");

//   checkSpeedBtn.addEventListener("click", function () {
//     const speed = parseInt(speedOfCar.value);
//     checkSpeed(speed);
//   });
// });

// // function checkSpeed(speed) {
// //   const speedLimit = 70;
// //   const kmPerPoint = 5;

// //   if (speed <= speedLimit) {
// //     result.textContent = "OK";
// //   } else {
// //     const points = Math.floor((speed - speedLimit) / kmPerPoint);

// //     if (points >= 12) {
// //       result.textContent = `Points: ${points}. License suspended.`;
// //     } else {
// //       result.textContent = `Points: ${points}`;
// //     }
// //   }
// // }

//   function checkSpeed(speed) {
//     const speedLimit = 70;
//     const demeritPointsPerKmOverLimit = 5;
//     const maxDemeritPoints = 12;

//     if (speed <= speedLimit) {
//     //   console.log("OK");
//     result.textContent = "OK";
//     } else {
//       const demeritPoints = Math.floor(
//         (speed - speedLimit) / demeritPointsPerKmOverLimit
//       );

//       if (demeritPoints >= maxDemeritPoints) {
//         // console.log("License suspended");
//         result.textContent = "License suspended";
//       } else {
//         // console.log(`Points: ${demeritPoints}`);
//         result.textContent = `Points: ${demeritPoints}`;
//       }
//     }
// }

document.addEventListener("DOMContentLoaded", function () {
  const speedOfCar = document.getElementById("speedOfCar");
  const checkSpeedBtn = document.getElementById("checkSpeedBtn");
  const result = document.getElementById("result");

  checkSpeedBtn.addEventListener('click', function () {
    const speed = parseInt(speedOfCar.value);
    checkSpeed(speed);
  });

  function checkSpeed(speed) {
    const speedLimit = 70;
    const speedCar = 5;
    if (speed <= speedLimit) {
      result.textContent = "OK";
    } else {
      const points = Math.floor((Math.abs(speed) - speedLimit) / speedCar);

      if (points >= 12) {
        result.textContent = `Points: ${points}. License suspended.`;
      } else {
        result.textContent = `Points: ${points}`;
      }
    }
  }
});
