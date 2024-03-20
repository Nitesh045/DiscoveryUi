

var divIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("c-hero-labels__label");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  divIndex++;
  if (divIndex > slides.length) { slideIndex = 1 }
  slides[divIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}



// slide dada

let data = [
  {
    temp: "32 &degF",
    wind: "5mph",
    copmass: "73",
    loc: "39.08629948516978° N / -120.1605391°",
    itemfade: "Lake Tahoe, California",
    title: "Homewood Mountain & Lake Club"

  },
  {
    temp: "77 &degF",
    wind: "102mph",
    copmass: "88",
    loc: "39.08629948516978° N / -120.1605391°",
    itemfade: "sillicon valley , california",
    title: "Carde Valle"
  },
  {
    temp: "78 &degF",
    wind: "10 mph",
    copmass: "310",
    loc: "39.08629948516978° N / -120.1605391°",
    itemfade: "La Quinta, California",
    title: "MAdison"
  },
  {
    temp: "28 &degF",
    wind: "0 mph",
    copmass: "0",
    loc: "39.08629948516978° N / -120.1605391°",
    itemfade: "WhiteFish,Montana",
    title: "Iron Horse"
  },
  {
    temp: "19 &degF",
    wind: "2 mph",
    copmass: "173",
    loc: "39.08629948516978° N / -120.1605391°",
    itemfade: "Big Sky,Montana",
    title: "Yellowstone Club"
  },
  {
    temp: "46 &degF",
    wind: "9 mph",
    copmass: "350",
    loc: "39.08629948516978° N / -120.1605391°",
    itemfade: "Westlake , Texas",
    title: "Vaquero"
  },
  {
    temp: "54 &degF",
    wind: "8 mph",
    copmass: "24 &deg",
    loc: "39.08629948516978° N / -120.1605391°",
    itemfade: "Austin ,Texas",
    title: "Driftwood"
  },
  {
    temp: "74 &degF",
    wind: "3 mph",
    copmass: "359&deg",
    loc: "39.08629948516978° N / -120.1605391°",
    itemfade: "Guanacaste,Costa Rica",
    title: "Zapotal Golf & Beach Club"
  },
  {
    temp: "43 &degF",
    wind: "6 mph",
    copmass: "338 &deg",
    loc: "39.08629948516978° N / -120.1605391°",
    itemfade: "Nashville , Tennessee",
    title: "Troubadour"
  },
  {
    temp: "34 &degF",
    wind: "3 mph",
    copmass: "325 &deg",
    loc: "39.08629948516978° N / -120.1605391°",
    itemfade: "Cashiers, North Corolina",
    title: "Mountaintop"
  },
  {
    temp: "72 &degF",
    wind: "3 mph",
    copmass: "200",
    loc: "39.08629948516978° N / -120.1605391°",
    itemfade: "Jupiter Island , Florida",
    title: "Atlantic Beach"
  },
  {
    temp: "73 &degF",
    wind: "0 mph",
    copmass: "0 &deg",
    loc: "39.08629948516978° N / -120.1605391°",
    itemfade: "Naples , Florida",
    title: "Naples Beach Club"
  },
  {
    temp: "75 &degF",
    wind: "16 mph",
    copmass: "195 &deg",
    loc: "39.08629948516978° N / -120.1605391°",
    itemfade: "Great Guana Cay,Bahamas",
    title: "Baker's Bay"
  },
  {
    temp: "72 &degF",
    wind: "2 mph",
    copmass: "154 &deg",
    loc: "39.08629948516978° N / -120.1605391°",
    itemfade: "Rio San Juan , Dominican Republic",
    title: "Playa Grande"
  },
  {
    temp: "79 &degF",
    wind: "18 mph",
    copmass: "103&deg",
    loc: "39.08629948516978° N / -120.1605391°",
    itemfade: "Barbuda ,West Indies",
    title: "Barbuda Ocean Club"
  }
];
let n = 0;
function handlerNext() {
  n++;

  if (n > data.length) {
    n = 0
  } else if (n < 0) {
    n = data.length;
  }

  document.getElementById('temp').innerHTML = data[n].temp;
  document.getElementById('speed').innerHTML = data[n].wind;
  document.getElementById('comp').innerHTML = data[n].copmass;
  document.getElementById('itemFade').innerHTML = data[n].itemfade;
  document.getElementById('title').innerHTML = data[n].title;
  console.log(n);

}


function handlerPrev() {
  n--;
  if (n > data.length) {
    n = 0
  } else if (n < 0) {
    n = data.length
  }
  document.getElementById('temp').innerHTML = data[n].temp;
  document.getElementById('speed').innerHTML = data[n].wind;
  document.getElementById('comp').innerHTML = data[n].copmass;
  document.getElementById('itemFade').innerHTML = data[n].itemfade;
  document.getElementById('title').innerHTML = data[n].title;

  
}