// var countDownDate = new Date('Sep 25, 2040 15:00:00').getTime();

// const countDown = document.getElementById('countdown');

// setInterval(unpdateCountdown, 1000);

// function unpdateCountdown() {
//   var now = new Date().getTime();

//   var distance = countDownDate - now;

//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById('demo').innerHTML =
//     hours + ' : ' + minutes + ' : ' + seconds;

//   if (distance < 0) {
//     countDownDate = new Date('Sep 25, 2040 03:00:00').getTime();
//   }
// }

// // Notif
// const notif = document.getElementById('notif');
// const selectKota = document.getElementById('kota');
// const selectJam = document.getElementById('jam');
// const selectOrder = document.getElementById('order');

// const kota = [
//   'Batu',
//   'Surabaya',
//   'Malang',
//   'Bantul',
//   'Sleman',
//   'Yogyakarta',
//   'Semarang',
//   'Surakarta',
//   'Tegal',
//   'Bandung',
//   'Cirebon',
//   'Bekasi',
//   'Menteng',
//   'Kebayoran',
//   'Cakung',
// ];

// const jam = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// setInterval(setNotif, 10000);

// function setNotif() {
//   var randomKota = kota[Math.floor(Math.random() * kota.length)];
//   var randomjam = jam[Math.floor(Math.random() * jam.length)];

//   selectKota.innerHTML = `Seseorang dari ${randomKota}`;
//   selectJam.innerHTML = `${randomjam} jam yang lalu`;
//   selectOrder.innerHTML = `Baru Saja Melakukan Order`;

//   notif.classList.toggle('hidden');
// }

// Countdown 5 jam

var myTimer;
function clock() {
  myTimer = setInterval(myClock, 1000);
  var c = 10800; //Initially set to 1 hour

  function myClock() {
    --c;
    var seconds = c % 60; // Seconds that cannot be written in minutes
    var secondsInMinutes = (c - seconds) / 60; // Gives the seconds that COULD be given in minutes
    var minutes = secondsInMinutes % 60; // Minutes that cannot be written in hours
    var hours = (secondsInMinutes - minutes) / 60;
    // Now in hours, minutes and seconds, you have the time you need.

    document.getElementById('demo').innerHTML =
      '0' + hours + ':' + minutes + ':' + seconds;
    if (c == 0) {
      clearInterval(myTimer);
    }
  }
}

clock();
