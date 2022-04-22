/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например import "files/script.js";
Неиспользуемый (не вызванный)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его расскоментировать
*/

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
// flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
// flsFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
// flsFunctions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
// flsFunctions.fullVHfix();

/*
Модуль работы со спойлерами
Документация: https://template.fls.guru/template-docs/modul-spojlery.html
Сниппет (HTML): spollers
*/
// flsFunctions.spollers();

/*
Модуль работы с табами
Документация: https://template.fls.guru/template-docs/modul-taby.html
Сниппет (HTML): tabs
*/
flsFunctions.tabs();

/*
Модуль "показать еще"
Документация: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сниппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Попапы
Документация: https://template.fls.guru/template-docs/funkcional-popup.html
Сниппет (HTML): pl
*/
// import './libs/popup.js'

/*
Модуль параллакса мышью
Документация: 
Сниппет (HTML): 
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Работа с формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Работа с полями формы */
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formFieldsInit({ viewPass: false });

/* Oтправка формы */
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formSubmit();

/* Модуль формы "колличество" */
// flsForms.formQuantity();

/* Модуль звездного рейтинга */
// flsForms.formRating();

/* Модуль работы с select. */
// import './libs/select.js'

/* (В работе) Модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле js/files/forms/inputmask.js
Документация по работе в шаблоне:
Документация плагина: https://github.com/RobinHerbots/inputmask
Сниппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль работы с ползунком */
/*
Подключение и настройка выполняется в файле js/files/forms/range.js
Документация по работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сниппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль работы с подсказками (tippy) */
/*
Подключение плагина Tippy.js и настройка выполняется в файле js/files/tippy.js
Документация по работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сниппет (HTML): tip (добавляет атрибут с подсказкой для html тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация по работе в шаблоне: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
// import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем к блоку атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ленивая (отложенная) загрузка картинок
// Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML):
import './files/scroll/lazyload.js';

// Наблюдатель за объектами c атрибутом data-watch
// Документация: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сниппет(HTML):
// import './libs/watcher.js'

// Функции работы скроллом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавная навигация по странице
// Документация: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// flsScroll.pageNavigation();

// Функционал добавления классов к хедеру при прокрутке
// Документация: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// flsScroll.headerScroll();

// Функционал липкого блока
// flsScroll.stickyBlock();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: 
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Прочие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамический адаптив */
// Документация: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
import "./libs/dynamic_adapt.js";

/* Форматирование чисел */
// import './libs/wNumb.min.js';

// ========================================================================================================================================================================================================================================================
// Прочее ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом */









if(!localStorage.getItem('todoItemsTut')){
	localStorage.setItem('todoItemsTut','[]')
}



const id = ()=> {
	return Math.random()
	.toString(36)
	.substring(2, 24);
};


function numberListId(){
	if(JSON.parse(localStorage.getItem('todoItemsTut')) === null ||JSON.parse(localStorage.getItem('todoItemsTut')).length == 0)
	{
		return 1;
	}else{
	return JSON.parse(localStorage.getItem("todoItemsTut"))[JSON.parse(localStorage.getItem("todoItemsTut")).length -1].id + 1;
	}
}


const taskForm = document.querySelector('.task-form');
const createTask = document.querySelector('.create-task');
const allTasks = document.querySelector('.all-tasks');


if(JSON.parse(localStorage.getItem("todoItemsTut")) !== null){
	const taskID = id();
	// const taskStatus ='off';
	// console.log(taskStatus)
	JSON.parse(localStorage.getItem('todoItemsTut')).map(todo=>{
// 		const taskStatus = JSON.parse(localStorage.getItem("todoItemsTut")).map(obj => {
// 			if(obj.id = todo.id){

// 				if (obj.checked !== 'checked'){
// 					return 'off';
// 				}else{
// 					return obj.checked
// 				}
				
// 			}
// })



const taskStatusFunction =()=>{
	if (todo.checked !== 'checked'){
		return 'off';
	}else{
		return todo.checked;
	}
}
const taskStatus = taskStatusFunction();
// console.log(taskStatus)
		


		const li = document.createElement('li');
		li.innerHTML = `
		<div class="task-info" id="${todo.id}">
			<div class="task-status">
				<input id="checkbox" type="checkbox">
				<label for="checkbox">
					<div class="radio-check ${taskStatus}"></div>
					</label>
					<img class="${taskStatus}" src="img/icon-check.svg" alt="">
					</div>
					<div class="task-title ${taskStatus}">
				${todo.name}
			</div>
		</div>
		<div class="singular-control">
			<div class="edit-task">
				<button class="task-edit" id="${todo.id}">Edit</button>
				<div class="content-task-edit" >
					<form class="single-task-form" >
						<h4>Edit Task</h4>
						<div class="form-control">
							<label>Task ID</label>
							<p class="task-edit-id">${todo.id}</p>
						</div>
						<div class="form-control">
							<label for="name">Name</label>
							<input type="text" name="name" class="task-edit-name" autocomplete="off" value="${todo.name}" />
						</div>
						<div class="form-control">
							<label for="completed">Completed</label>
							<div class="task-status">
								<input id="checkbox" type="checkbox" name="completed" class="task-edit-completed ">
								<label for="checkbox">
									<div class="radio-check ${taskStatus}"></div>
								</label>
								<img src="img/icon-check.svg" class="${taskStatus}" alt="">
							</div>
						</div>
							<button type="submit" class="block btn task-edit-btn">Edit task</button>
						<div class="edit-alert"></div>
					</form>
					<div class="close-task-edit"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
						<path fill="#ffffff" fill-rule="evenodd"
							d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
							</svg>
					</div>
				</div>
			</div>
			<div class="delete-task">
				<button type="button" class="delete-btn" id="${todo.id}" >
					<img src="img/icon-cross.svg" alt="">
				</button>
				</div>
				</div>
				`
				
				// console.log(li)
				allTasks.append(li)
});
}

//removing tasks from list and local storage

const inputs = document.querySelectorAll('.delete-btn')
// console.log(inputs)
for(let i=0;i<inputs.length;i++){
	inputs[i].addEventListener("click",(e)=>{
		console.log(e.target.parentElement.id)	
if(JSON.parse(localStorage.getItem("todoItemsTut")) !== null){
	let itemsLocal =[];
	JSON.parse(localStorage.getItem('todoItemsTut')).map(todo=>{
		if(todo.id != e.target.parentElement.id){
			itemsLocal.push(todo)
		}
});
		localStorage.setItem('todoItemsTut', JSON.stringify(itemsLocal));
		window.location.reload();
}
	})
}




taskForm.onsubmit = (e)=>{
	e.preventDefault()
	const taskStatus = 'off';
	const taskID = id();

	const value = e.target.name.value;
	let items =[];
	let numberList = numberListId();
	let item ={
		numberList: numberList,
		id:taskID,
		name:value,
		checked:taskStatus,
	}
	console.log(item)
	if(value == ''){
		alert('Please write a task')
	}else{
		if(JSON.parse(localStorage.getItem('todoItemsTut'))===null){
			items.push(item);
			localStorage.setItem('todoItemsTut' , JSON.stringify(items))
			window.location.reload();

		}else{
			JSON.parse(localStorage.getItem('todoItemsTut')).map(todo=>{
				items.push(todo);
			});
			items.push(item)
			localStorage.setItem('todoItemsTut', JSON.stringify(items));
			window.location.reload();

		}
// 	
			}
			}
			
			





// if(JSON.parse(localStorage.getItem('todoItemsTut'))===null)
//edit tasks
// var retrievedData = localStorage.getItem('todoItemsTut');
// var editTask = JSON.parse(retrievedData)
// // const specificObject = editTask.filter((e) => e.id == 'hqc9k6vz5h');
// // console.log(specificObject[0])

// const newArr = editTask.map(obj => {
// 	if (obj.id == 'hqc9k6vz5h'){
// 		return {...obj, name:'It works', checked:'checked'};
// 	}

// 	return obj;
// })
// // window.location.reload()
// console.log(newArr)


// function update (){
// localStorage.clear();
// localStorage.setItem('todoItemsTut' , JSON.stringify(newArr))
// }

// update()

//incercare de a schimba by the way nu uita sa pui query selector all ca tu pui la toate 
const singleTaskForm = document.querySelectorAll('.single-task-form');
singleTaskForm.forEach(function(i){
	i.addEventListener('submit',(e)=>{
		const nameValue = i.children[2].children[1].value;
		console.log('nameValue', nameValue)
		

		const checkedValue = i.children[3].children[1].children[2].className;
		console.log('checkedValue', checkedValue)
		


		const idValue = i.parentElement.previousElementSibling.id;
		console.log('idValue', idValue)

		var retrievedData = localStorage.getItem('todoItemsTut');
		var editTask = JSON.parse(retrievedData)

		// const specificObject = editTask.filter((e) => e.id == 'hqc9k6vz5h');
		// console.log(specificObject[0])

		const newArr = editTask.map(obj => {
			if (obj.id == idValue){
				return {...obj, name:nameValue, checked:checkedValue};
			}

			return obj;
		})
		// window.location.reload()
		console.log(newArr)


		function update (){
		localStorage.removeItem('todoItemsTut');

		localStorage.setItem('todoItemsTut' , JSON.stringify(newArr))
		}

		update();
		

		
		
	})
	
})




const closeTaskEdit = document.querySelectorAll('.close-task-edit');
const contentEdit = document.querySelectorAll('.content-task-edit')
const taskEdit = document.querySelectorAll('.task-edit');
const taskstatus = document.querySelectorAll('.task-status .task-edit-completed ');
// taskstatus.addEventListener('click',()=>{
// 	if(!taskstatus.checked == true){
// 		document.querySelectorAll('.edit-task .radio-check').classList.remove('checked');
// 		document.querySelectorAll('.edit-task img').classList.remove('checked')

// 	}else{
// 		document.querySelectorAll('.edit-task .radio-check').classList.add('checked');
// 		document.querySelectorAll('.edit-task img').classList.add('checked')
// 	}
// })
taskEdit.forEach(function (i) {
  i.addEventListener('click',()=>{
		// contentEdit.setAttribute("class", "hidden");
		// console.log(i.id)
		i.nextElementSibling.classList.add('hidden');
});
});


closeTaskEdit.forEach(function(i){
	i.addEventListener('click',()=>{
		i.parentElement.classList.remove('hidden')
	})
})








//clear completed provizoriu function
const clearCompleted = document.querySelector('button.clear-completed');
clearCompleted.onclick = ()=>{
var retrievedData = localStorage.getItem('todoItemsTut');
var editTask = JSON.parse(retrievedData)
		const newArr = editTask.map(obj => {
			if (obj.checked == 'off'){
				return obj;
			}
			return;
		})
		const filtered = newArr.filter(e => e != null);
		function update (){
		localStorage.removeItem('todoItemsTut');
		localStorage.setItem('todoItemsTut' , JSON.stringify(filtered))
		}
		update();
		window.location.reload();
} 














//task Counter

const taskCounter = document.querySelector('#hmany')
function taskCounterfun(){
	
	const retrievedData = localStorage.getItem('todoItemsTut');
	const editTask = JSON.parse(retrievedData)
	const newArr = editTask.map(obj => {
		if (obj.checked == 'off'){
			return obj;
		}
		return;
	})
	const filtered = newArr.filter(e => e != null);
	
	return filtered.length;
}
taskCounter.innerHTML = taskCounterfun();



const allCheckBoxes = document.querySelectorAll('.edit-task #checkbox');
// console.log(allCheckBoxes)
allCheckBoxes.forEach(function(i){
	i.addEventListener('click',()=>{
		const radioCheck = i.nextElementSibling.children;
		// console.log('radioCheck', radioCheck[0])
		const imgCheck = i.nextElementSibling.nextElementSibling;
		// console.log('imgCheck', imgCheck)
		if(radioCheck[0].classList.contains('checked')){
			radioCheck[0].classList.remove('checked')
			imgCheck.classList.remove('checked')
			imgCheck.classList.add('off')
		}else{
			radioCheck[0].classList.add('checked')
			imgCheck.classList.remove('off')
			imgCheck.classList.add('checked')
		}
		
		
	})
})

//theme changer
const body = document.body;
const bodyClass = document.body.className;
const themeButton = document.querySelectorAll('.header-theme img')
function theTheme(){
	if(!localStorage.getItem('appTheme')){
		localStorage.setItem('appTheme', 'dark');
	}
		const lsTheme = localStorage.getItem('appTheme')
		body.classList.add(lsTheme)
	
}
theTheme();

themeButton.forEach(function(i){
	i.addEventListener('click',()=>{
		// body.classList.remove('dark')
		// console.log(i.classList[0])
		localStorage.removeItem('appTheme')
		localStorage.setItem('appTheme', i.classList[0]);
		window.location.reload()
	})
})
//sky theme updated
const rphone = document.querySelector('.rphone');
const wphone = document.querySelector('.wphone');
const iosphone = document.querySelector('.iosphone');

function skyTheme(){
	if(body.className == 'dark'){
		rphone.setAttribute("content", "#25273c")
		wphone.setAttribute("content", "#25273c")
		iosphone.setAttribute("content", "#25273c")
	}
}
skyTheme();


//rewards page
const rewardsPageEl = document.querySelector('.rewards-page__wrapper');

function rewardsPage(){
	if(!localStorage.getItem('setReward')){
		rewardsPageEl.innerHTML= `
			<div class="setRewards__wrapper">
				<div class="setRewards__content">
				<div class="setRewards-header">
					<h1>
						You have no rewards yet!
					</h1>
				</div>
				<div class="setRewards-form">
					<form id="set-reward">
						<h1>How many rewards do you want?</h1>
						<input type="number"  name="" id="set-reward" min="1" max="5" required>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		</div>
		`
	}else if(localStorage.getItem('setReward') && !localStorage.getItem('rewards')){
		const setRewardHtml = [
			//1
			`<div class="reward">
				<h4><span>First</span> reward</h4>
				<input type="text" placeholder="e.g. watch a film" required>
			</div>`,
			//2
			`<div class="reward">
				<h4><span>First</span> reward</h4>
				<input type="text" placeholder="e.g. watch a film" required>
			</div>

			<div class="reward">
				<h4><span>Second</span> reward</h4>
				<input type="text" placeholder="e.g. go to the theatre" required>
			</div>`,
			//3
			`
			<div class="reward">
				<h4><span>First</span> reward</h4>
				<input type="text" placeholder="e.g. watch a film" required>
			</div>

			<div class="reward">
				<h4><span>Second</span> reward</h4>
				<input type="text" placeholder="e.g. go to the theatre" required>
			</div>
			
			<div class="reward">
				<h4><span>Third</span> reward</h4>
				<input type="text" placeholder="e.g. go for a long walk" required>
			</div>`,
			//4
			`
			<div class="reward">
				<h4><span>First</span> reward</h4>
				<input type="text" placeholder="e.g. watch a film" required>
			</div>

			<div class="reward">
				<h4><span>Second</span> reward</h4>
				<input type="text" placeholder="e.g. go to the theatre" required>
			</div>
			
			<div class="reward">
				<h4><span>Third</span> reward</h4>
				<input type="text" placeholder="e.g. go for a long walk" required>
			</div>

			<div class="reward">
				<h4><span>Forth</span> reward</h4>
				<input type="text" placeholder="e.g start a new hobby" required>
			</div>`,
			//5
			`
			<div class="reward">
				<h4><span>First</span> reward</h4>
				<input type="text" placeholder="e.g. watch a film" required>
			</div>

			<div class="reward">
				<h4><span>Second</span> reward</h4>
				<input type="text" placeholder="e.g. go to the theatre" required>
			</div>
			
			<div class="reward">
				<h4><span>Third</span> reward</h4>
				<input type="text" placeholder="e.g. go for a long walk" required>
			</div>

			<div class="reward">
				<h4><span>Forth</span> reward</h4>
				<input type="text" placeholder="e.g start a new hobby" required>
			</div>

			<div class="reward">
				<h4><span>Fifth</span> reward</h4>
				<input type="text" placeholder="e.g. out with friends" required>
			</div>`
		]
		localStorage.getItem('setReward')
		 rewardsPageEl.innerHTML=`
		<div class="filterRewards__wrapper">
						<div class="filterRewards__content">
							<div class="filterRewards-header">
								<h1>Now, let's make your reward list</h1>
							</div>
							<div class="filterRewards-form">
								<form class="filterRewards">
									${setRewardHtml[localStorage.getItem('setReward')-1]}
									<button type="submit">Submit</button>
								</form>
							</div>
						</div>
					</div>
		`
	}else if(localStorage.getItem('rewards')){
		rewardsPageEl.innerHTML=`
		<div class="rewards__wrapper">
			<div class="rewards__content">
				<div class="rewards-header">
					<h4>(you have <span class="incart"></span> items in your reward list)</h4>
				</div>
				<div class="rewards-body">
				<h1>Reward yourself,</br> for you worked hard all day</h1>
					<h2>Here is a random reward generator, click the <span>get reward</span> button to get a random reward from your reward list</h2>
					<div class="reward-container">
						<div class="getReward">" "</div>
						<button class="rarew">Get Reward</button>
					</div>
				</div>
			</div>
			<button class="resetRewards">Reset the list</button>
		</div>
		`
	}
}
rewardsPage();


// first part of rewards
	if(!localStorage.getItem('setReward')){
const setRewardInput = document.querySelector('input#set-reward');
const setRewardForm = document.querySelector('form#set-reward');
setRewardForm.onsubmit=(e)=>{
	e.preventDefault();
	console.log(setRewardInput.value)
	localStorage.setItem('setReward', setRewardInput.value)
	
	window.location.reload();
}
	}






// second part of rewards
if(localStorage.getItem('setReward') && !localStorage.getItem('rewards')){
	
const filterRewardsInputs = document.querySelectorAll('.reward input')
console.log('filterRewardsInputs', filterRewardsInputs)
const filterRewardsForm = document.querySelector('form.filterRewards')
console.log('filterRewardsForm', filterRewardsForm)
filterRewardsForm.onsubmit=(e)=>{
	e.preventDefault();
	var allRewards=[];
	filterRewardsInputs.forEach(function(i){
		allRewards.push(i.value)
	})
	localStorage.setItem('rewards', JSON.stringify(allRewards))
	window.location.reload();
}
}








//third part
 if(localStorage.getItem('rewards')){
const rarew = document.querySelector('.rarew')
const getReward = document.querySelector('.getReward')
const randomNumber = (max)=>{
	return Math.floor(Math.random()* max)
}
rarew.onclick =()=>{
	const oneReward = JSON.parse(localStorage.getItem('rewards'))
	getReward.innerHTML=`
	"${oneReward[randomNumber(localStorage.getItem('setReward'))]}"
	`
}

const resetRewards = document.querySelector('.resetRewards')
resetRewards.onclick=()=>{
	localStorage.removeItem('rewards');
	localStorage.removeItem('setReward');
	window.location.reload();
}
const incart = document.querySelector('.incart');
const oneReward = JSON.parse(localStorage.getItem('rewards'))
incart.innerHTML = oneReward.length
 }

 
 //reward lock for min 2 tasks completed
 const rewardTab = document.querySelector('.rewardTab');
 const rewardTabPopup = document.querySelector('.rewardsTabPopup');
 const lockSvg = document.querySelector('.rewardTab svg')
var retrievedData = localStorage.getItem('todoItemsTut');
var editTask = JSON.parse(retrievedData)
		const newArr = editTask.map(obj => {
			if (obj.checked == 'checked'){
				return obj;
			}
			return;
		})
		// console.log(newArr)
		const filtered = newArr.filter(e => e != null);
		// console.log(filtered.length)

if(filtered.length >= 2){
rewardTabPopup.classList.add('hidden');
lockSvg.classList.add('hidden')
}else{
rewardTabPopup.classList.remove('hidden');
lockSvg.classList.remove('hidden')
}

const lockPopup = document.querySelector('.lock-popup')
const closePP = document.querySelector('.lock-popup .close')
closePP.onclick =()=>{
	lockPopup.classList.add('hidden')
}
rewardTabPopup.onclick=()=>{
	lockPopup.classList.remove('hidden')
}

//motivation-section---------------------------------------------------


const quoteText = document.querySelector(".quoteTxt"),
quoteBtn = document.querySelector(".quote-button"),
authorName = document.querySelector(".quote-author");
const api_url ="https://type.fit/api/quotes";

async function getapi(url)
{
	quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
  const response = await fetch(url);
  var data = await response.json();
  const num = Math.floor(Math.random()*data.length);
  const item = data[num];
  quoteText.innerHTML = item.text;
  if(item.author == null){
	  authorName.innerHTML = 'Unknown';
  }else{
	  authorName.innerHTML = item.author;
  }
//   console.log(data);
//   console.log('num', num)
//   console.log('item', item)
quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
}

getapi(api_url);
quoteBtn.onclick=()=>{
	getapi(api_url);
}


const lifeJourneyHtml = [
	//first section
	`<div class="history__starter-section">
		<div class="history__header">
			<h4>This section is about time</h4>
			<h5>(approximating how much time has passed in your life, in your current day, week, and year)</h5>
		</div>
		<div class="history__form">
			<form class="form-history">
				<h4>Please enter your age</h4>
				<input type="number" class="getbirthday" required  min="1" max="100">
				<h4>How long do you wish to live?</h4>
				<input type="number" class="years-old" required min="1" max="100" placeholder="e.g.  82 years ">
				<button type="submit">Submit</button>
			</form>
		</div>
	</div>`,
	//second section
	`<div class="history__regular-section">
		<div class="history__header">
			<h2>Life Journey</h2>
		</div>
		<div class="history__time-counter">
			<div class="life-wrapper wrapperh">
				<div class="life-counter counter">Life: 70%</div>
				<div class="life-container container">
					<div class="life text"></div>
				</div>
			</div>
			<div class="year-wrapper wrapperh">
				<div class="year-counter counter">Year: 70%</div>
				<div class="year-container container">
					<div class="year text"></div>
				</div>
			</div>
			<div class="month-wrapper wrapperh">
				<div class="month-counter counter">Month: 70%</div>
				<div class="month-container container">
					<div class="month text"></div>
				</div>
			</div>
			<div class="week-wrapper wrapperh">
				<div class="week-counter counter">Week: 70%</div>
				<div class="week-container container">
					<div class="week text"></div>
				</div>
			</div>
			<div class="day-wrapper wrapperh">
				<div class="day-counter counter">Day: 70%</div>
				<div class="day-container container">
					<div class="day text"></div>
				</div>
			</div>
		</div>
		<button type="submit" class="reset">Reset This Section</button>
	</div>`
]

const historyContent = document.querySelector('.history__content');
if(!localStorage.getItem('lifeJourney')){
	historyContent.innerHTML = lifeJourneyHtml[0];
}else if(localStorage.getItem('lifeJourney')){
	historyContent.innerHTML = lifeJourneyHtml[1];
}

const formHistory = document.querySelector('.form-history');
if(!localStorage.getItem('lifeJourney')){

formHistory.onsubmit=(e)=>{
	e.preventDefault();
	const getbirthday = document.querySelector('.getbirthday').value;
	console.log('getbirthday', getbirthday);
	const getYearsOld = document.querySelector('.years-old').value;
	console.log('getYearsOld', getYearsOld);
	const lifeJourney = [
		{
		birthday:getbirthday,
		years:getYearsOld,
		}	
	]
	console.log('lifeJourney', lifeJourney)
	localStorage.setItem('lifeJourney', JSON.stringify(lifeJourney))
	window.location.reload()
}
}
//second section from life Journey
if(localStorage.getItem('lifeJourney')){
//day function
function showMeDay(){
	const dayPercentage =()=>{
		const today = new Date();
		let h = today.getHours();
		let m = today.getMinutes();
		let s = today.getSeconds();

		return (((h*60*60)+(m*60)+s)*100)/(24*60*60);
	}
	const dayCounter = document.querySelector('.day-counter')
	const day = document.querySelector('.day');
	dayCounter.innerHTML = `
	Day: ${Math.round(dayPercentage())}%
	`;
	day.style.width = dayPercentage()+'%'
  setTimeout(showMeDay, 1000);

}
showMeDay();

//week function 
function showMeWeek (){
	const weekPercentage =()=>{
		const today = new Date();
		let h = today.getHours();
		let w = today.getDay();
		return (100*((w*24)+h))/168
	}
	const weekCounter = document.querySelector('.week-counter')
	const week = document.querySelector('.week')
	weekCounter.innerHTML =`
	Week: ${Math.round(weekPercentage())}%`
	week.style.width = weekPercentage()+'%'
   setTimeout(showMeWeek, 100000)
}
showMeWeek();

//month function
function showMeMonth(){
	const monthPercentage =()=>{
		const today = new Date();
		const m = today.getMonth()+1;
		const y = today.getFullYear();
		const d = today.getDate();
		function daysInMonth (month, year) {
			return new Date(year, month, 0).getDate();
		}
		return (d*100)/daysInMonth(m,y)
	}
	const monthCounter= document.querySelector('.month-counter')
	monthCounter.innerHTML=`
	Month: ${Math.floor(monthPercentage())}%`
	const month = document.querySelector('.month');
	month.style.width = monthPercentage()+'%'
	setTimeout(showMeMonth, 10000000)

}
showMeMonth();

//year function
function showMeYear(){
	const yearPercentage=()=>{
		const today = new Date();
		function getWeekNumber(d) {
			// Copy date so don't modify original
			d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
			// Set to nearest Thursday: current date + 4 - current day number
			// Make Sunday's day number 7
			d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
			// Get first day of year
			var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
			// Calculate full weeks to nearest Thursday
			var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
			// Return array of year and week number
			return [d.getUTCFullYear(), weekNo];
		}
		var result = getWeekNumber(new Date());
		return (result[1]*100)/52
	}
	console.log('yearPercentage()', yearPercentage())
	const yearCounter = document.querySelector('.year-counter');
	const year = document.querySelector('.year')
	yearCounter.innerHTML= `
	Year: ${Math.floor(yearPercentage())}%`
	year.style.width = yearPercentage()+'%'
	setTimeout(showMeMonth, 10000000)
}
showMeYear();

// life function
function showMeLife(){
	const lifePercentage =()=>{
		const lifeStorage = JSON.parse(localStorage.getItem('lifeJourney'))
		const birthday = lifeStorage[0].birthday;
		const years = lifeStorage[0].years;
		return (birthday*100)/years;
	}
	const lifeCounter = document.querySelector('.life-counter');
	const life = document.querySelector('.life');
	lifeCounter.innerHTML=`
	Life: ${Math.floor(lifePercentage())}%`
	life.style.width = lifePercentage()+'%'
	console.log('lifePercentage()', lifePercentage())
	setTimeout(showMeMonth, 10000000)
}
showMeLife();

//reset button
const reset = document.querySelector('.history__regular-section .reset')
reset.onclick=()=>{
	localStorage.removeItem('lifeJourney')
	window.location.reload();
}
}


//language
// setTimeout(()=>{
// 	if (document.documentElement.lang === "ro") {
// 		const headerTitle = document.querySelector('.header-title h1');
// 		headerTitle.innerHTML='De făcut'
// 	} 
// },10000)
import "./files/script.js";
//============================================================================================================================================================================================================================================



// const rewardTab = document.querySelector('.rewardTab');
// const principalTab = document.querySelector('.principalTab');
	// function reload(){
	
	// 	principalTab.classList.remove('_tab-active');
	// 	rewardTab.classList.add('_tab-active');
	// }
	// setTimeout(reload, 2000)