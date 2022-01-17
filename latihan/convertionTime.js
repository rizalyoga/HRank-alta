function timeConversion(s) {
  // Write your code here
  let waktu = s.slice(0, 8);
  let modifier = s.slice(-2);

  //   const [waktu, modifier] = s.split(" ");
  console.log(waktu);
  let [jam, menit, detik] = waktu.split(":");
  if (jam === "12") {
    jam = "00";
  }

  if (modifier === "PM") {
    jam = parseInt(jam, 10) + 12;
  }

  console.log(`${jam}:${menit}:${detik}`);

  //   console.log(s.slice(0, 8));
  /* ---------------------------------- lala ---------------------------------- */
  //   const timeStr = "05:00 PM";
  //   const secondTimeStr = "11:42 PM";
  //   const convertTime = (timeStr) => {
  //     const [time, modifier] = timeStr.split(" ");
  //     let [hours, minutes] = time.split(":");
  //     if (hours === "12") {
  //       hours = "00";
  //     }
  //     if (modifier === "PM") {
  //       hours = parseInt(hours, 10) + 12;
  //     }
  //     return `${hours}:${minutes}`;
  //   };
  //   console.log(convertTime(timeStr));
  //   console.log(convertTime(secondTimeStr));
}

timeConversion("07:05:45PM");
