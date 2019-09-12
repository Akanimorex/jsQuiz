let firstChoice = document.getElementById('correct1');
let secondChoice = document.getElementById('correct2');
let thirdChoice = document.getElementById('correct3');
let answer = document.getElementById('done');
let text = document.getElementById('display');
let comp = document.getElementById('compliment');


let score = 0;



const displayResult = ()=> { 

		if (firstChoice.checked){
			score++;
		}else{
  
		}
 

		if (secondChoice.checked){
			score++;
		}else{

		}

		if (thirdChoice.checked){
			score++;
		}else{}


		if(score === 3){
			comp.textContent = "You're a genuis!!";
		}else if(score > 0 && score < 3){
			comp.textContent ="you tried, you ain't a dummy";

		}else if(score == 0){
			comp.textContent = "wow , you really are dumb"
		}

		text.innerHTML = (`you have scored ${score} out of 3 questions`);


}

answer.addEventListener("click",displayResult);


const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
const firstSlide = document.getElementById('first');
const otherSlide = document.getElementById('others');
let currentSlide = 0;








const showSlide =()=>{


	otherSlide.classList.remove('slide');
	// firstSlide.classList.add('slide');



}

const hideSlide = () =>{


	otherSlide.classList.add('slide');



}

nextButton.addEventListener("click",showSlide);

previousButton.addEventListener("click",hideSlide);


// const showSlide =(n)=>{

// 	slides[currentSlide].classList.remove('active-slide');
// 	slides[n].classList.add('active-slide');
// 	currentSlide = n;

// 	if (currentSlide == 0){
// 		previousButton.style.display = 'none';

// 	}else{
// 		previousButton.style.display = 'inline-block';
// 	}

// 	if (currentSlide ===slides.length-1){

// 		nextButton.style.display = 'inline-block';

// 	}else{

// 		nextButton.style.display = 'none';

// 	}


// }

// showSlide(0);






