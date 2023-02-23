//Timer fields

const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.millisecond');

//Buttons 
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const newButton = document.querySelector('.new')

//Listeners
startButton.addEventListener('click', () => {
	clearInterval(interval)
	interval = setInterval(startTimer,10)
})
pauseButton.addEventListener('click', () => {
	clearInterval(interval)
})
stopButton.addEventListener('click', () => {
	clearInterval(interval)
	let hour = 00
	let minute = 00
	let second = 00
	let millisecond = 00
	hourElement.textContent = "00"
minuteslement.textContent = "00"
secondElement.textContent = "00"
millisecondElement.textContent = "00"
})
	newButton.addEventListener('click', ()=> {
	clearInterval(interval)
	const results = document.querySelector('results')
	const block = document.createElement('div')
	block.innerText = `Result: ${hour}:${minute}:${second}:${millisecond}`
	// results.append(block)
	clearFields()
	clearInterval(interval)
	interval = setInterval(startTimer, 10)

})

//Variable
let hour = 00
let minute = 00
let second = 00
let millisecond = 00
let interval 

function startTimer(){
	// millisecond
	millisecond++
	if(millisecond < 9){
		millisecondElement.innerText = "0" + millisecond	
	}
	if(millisecond > 9)
	{
		millisecondElement.innerText = millisecond	
	}
	if(millisecond > 99){
	second++
	secondElement.innerText = "0" + second;
	millisecond=0
		millisecondElement.innerText = "0" + millisecond	
	}	
// second

	if(second <9)
	{
		secondElement.innerText = "0" + second;
	}
	if(second > 9)
	{
		secondElement.innerText =second
	}
	if(second > 60)
	{
		minute++
		minuteElement.innerText = "0" + minute;
		second = 0
		secondElement.innerText = "0" + second;
	}
	// minute
	
	
	if(minute > 9)
	{
		
	
		minuteElement.innerText = minute ;
	}

	//hour
	if(hour>9)
	{
		hourElement.innerText = hour ;

	}
}