let idulFitriTime = new Date("2024-04-10").getTime();
let tes = new Date()
let day = document.querySelector('.day')
let hour = document.querySelector('.hour')
let minute = document.querySelector('.minute')
let second = document.querySelector('.second')
let text = document.querySelector('#count')

const container = document.querySelector('.tes')
console.log(tes)
let x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = idulFitriTime - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  day.innerHTML = days
  hour.innerHTML = (hours<10)?'0'+hours:hours
  minute.innerHTML = (minutes<10)?'0'+minutes:minutes
  second.innerHTML = (seconds<10)?'0'+seconds:seconds

  // Display the result in the element with id="demo"
  //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  //+ minutes + "m " + seconds + "s ";



  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
    day.innerHTML = '00'
    hour.innerHTML = '00'
    minute.innerHTML = '00'
    second.innerHTML = '00'
    text.innerHTML = ''
    const fireworks = new Fireworks.default(container)
	fireworks.start()
  }
}, 1000);