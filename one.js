
const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");




let people = [
{
photo:
'url("https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg")',
name: "MR PRITAM GHOSH, 40/M",
profession: "KOLKATA (IT ENGINEER)",
description:
"I was admitted for dengue and doctors told me it’s very serious. Unfortunately, my eye also got infected and DrDhaivat checked my eyes in the ICU. He explained me and my family that the eye is severely infected and has to be removed at any cost otherwise the infection might spread to the brain. My family was very shocked hearing that and refused at first, but he explained us the seriousness of the situation. Two days later, my lungs collapsed and I was put on ventilator. Since I couldn’t be shifted to the operation theatre, DrDhaivat came along with his team and arranged for a bedside surgery. It was God’s grace that the surgery went fine, and a week later, I was feeling much better. The ICU doctor told me that the infective origin might have been in the eye, and since it was removed, all my body started functioning better. Today after 1 year, I still call DrDhaivat Shah every few months to thank him to take that critical decision and save my life. I have one normal and one artificial eye today, and I am very thankful to God for this life."
},

{
photo:
"url('https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg')",
name: "Anna Grey",
profession: "UFC FIGHTER",
description:
"I'm baby migas cornhole hell of etsy tofu, pickled af cardigan pabst. Man braid deep v pour-over, blue bottle art party thundercats vape. Yr waistcoat whatever yuccie, farm-to-table next level PBR&B. Banh mi pinterest palo santo, aesthetic chambray leggings activated charcoal cred hammock kitsch humblebrag typewriter neutra knausgaard. Pabst succulents lo-fi microdosing portland gastropub Banh mi pinterest palo santo"
},

{
photo:
"url('https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg')",
name: "Branson Cook",
profession: "ACTOR",
description:
"Radio telescope something incredible is waiting to be known billions upon billions Jean-François Champollion hearts of the stars tingling of the spine. Encyclopaedia galactica not a sunrise but a galaxyrise concept of the number one encyclopaedia galactica from which we spring bits of moving fluff. Vastness is bearable only through love paroxysm of global death concept"
},

{
photo:
"url('https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg')",
name: "Julius Grohn",
profession: "PROFESSIONAL CHILD",
description:
"Biscuit chocolate pastry topping lollipop pie. Sugar plum brownie halvah dessert tiramisu tiramisu gummi bears icing cookie. Gummies gummi bears pie apple pie sugar plum jujubes. Oat cake croissant bear claw tootsie roll caramels. Powder ice cream caramels candy tiramisu shortbread macaroon chocolate bar. Sugar plum jelly-o chocolate dragée tart chocolate marzipan cupcake gingerbread."
}
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
let reviewWrapWidth = reviewWrap.offsetWidth + "px";
let descriptionHeight = description.offsetHeight + "px";
//(+ or -)
let side1symbol = whichSide === "left" ? "" : "-";
let side2symbol = whichSide === "left" ? "-" : "";

let tl = gsap.timeline();

if (isChickenVisible) {
tl.to(chicken, {
duration: 0.4,
opacity: 0
});
}

tl.to(reviewWrap, {
duration: 0.4,
opacity: 0,
translateX: `${side1symbol + reviewWrapWidth}`
});

tl.to(reviewWrap, {
duration: 0,
translateX: `${side2symbol + reviewWrapWidth}`
});

setTimeout(() => {
imgDiv.style.backgroundImage = people[personNumber].photo;
}, 400);
setTimeout(() => {
description.style.height = descriptionHeight;
}, 400);
setTimeout(() => {
personName.innerText = people[personNumber].name;
}, 400);
setTimeout(() => {
profession.innerText = people[personNumber].profession;
}, 400);
setTimeout(() => {
description.innerText = people[personNumber].description;
}, 400);

tl.to(reviewWrap, {
duration: 0.4,
opacity: 1,
translateX: 0
});

if (isChickenVisible) {
tl.to(chicken, {
duration: 0.4,
opacity: 1
});
}
}

function setNextCardLeft() {
if (currentPerson === 3) {
currentPerson = 0;
slide("left", currentPerson);
} else {
currentPerson++;
}

slide("left", currentPerson);
}

function setNextCardRight() {
if (currentPerson === 0) {
currentPerson = 3;
slide("right", currentPerson);
} else {
currentPerson--;
}

slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
if (chicken.style.opacity === "0") {
chicken.style.opacity = "1";
imgDiv.classList.add("move-head");
surpriseMeBtn.innerText = "Remove the chicken";
surpriseMeBtn.classList.remove("surprise-me-btn");
surpriseMeBtn.classList.add("hide-chicken-btn");
isChickenVisible = true;
} else if (chicken.style.opacity === "1") {
chicken.style.opacity = "0";
imgDiv.classList.remove("move-head");
surpriseMeBtn.innerText = "Surprise me";
surpriseMeBtn.classList.add("surprise-me-btn");
surpriseMeBtn.classList.remove("hide-chicken-btn");
isChickenVisible = false;
}
});

window.addEventListener("resize", () => {
description.style.height = "100%";
});

