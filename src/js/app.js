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
		return todo.checked
	}
}
const taskStatus = taskStatusFunction();
console.log(taskStatus)
		


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
				
				console.log(li)
				allTasks.append(li)
});
}

//removing tasks from list and local storage

const inputs = document.querySelectorAll('.delete-btn')
console.log(inputs)
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
var retrievedData = localStorage.getItem('todoItemsTut');
var editTask = JSON.parse(retrievedData)
// const specificObject = editTask.filter((e) => e.id == 'hqc9k6vz5h');
// console.log(specificObject[0])

const newArr = editTask.map(obj => {
	if (obj.id == 'hqc9k6vz5h'){
		return {...obj, name:'It works', checked:'checked'};
	}

	return obj;
})
// window.location.reload()
console.log(newArr)


function update (){
localStorage.clear();
localStorage.setItem('todoItemsTut' , JSON.stringify(newArr))
}

update()

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
		localStorage.clear();
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
 localStorage.clear();
window.location.reload();
}

//task Counter
const taskCounter = document.querySelector('#hmany')
const taskCrowd = allTasks.children.length;
taskCounter.innerHTML = taskCrowd;



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

import "./files/script.js";
//============================================================================================================================================================================================================================================