# ⋱ Project Title: My first responsive layout based on a Behance designજ⁀➴ 
## - 〝Features:<br>
<h3 align="center">»»————-　★　————-««</h3>
<h3 align="center">જ⁀➴  Адаптивна верстка з використанням медіа-запитів ◌</h3>
➥ Для коректної адаптації я використовувала два основних медіа-запити:<br>

• `@media (max-width: 1290px) and (min-width: 375px)`❞ - адаптувала під неповний екран браузера та під мобільні пристрої.

• `@media (max-width: 790px)`❞ - дозволив адаптувати при найвужчому екрані браузера.

<h3 align="center">જ⁀➴  Бургер-меню ◌<br></h3>

<h4>➥ На повному екрані:<br> </h4>

```css
.button_three_lins{
  display: block;
}
```

<h4 align="center">- JS-логіка роботи меню: </h4>

<h4>➥Спочатку я підключаю кнопки і список меню через `DOM`:</h4>

```css
const button_three_lins = document.getElementById("button_three_lins");
const menu = document.getElementById("menu"); 
```

<h4>➥Потім призначаю подію кліку щоб потім надасть умову:</h4>

```css
button_three_lins.onclick = () => { ... }
```

<h4>➥Усередині функції даю умову меню:<br></h4>

• Якщо меню буде строго дорівнювати `'block' `, то при кліку на кнопку menuButton блок з елементами зникне. Якщо не натискати, то блок з меню буде видно.
```css
 if (menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block"
    }
```

<h3 align="center">જ⁀➴  Slider ◌</h3>

<h4>➥ Підключення елементів через `DOM` </h4>

```js
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0; 
```
• `querySelectorAll('.slide')` — отримує всі елементи з класом .slide1.

• `.length` — повертає кількість елементів, знайдених методом `querySelectorAll`

• `index = 0` — початковий слайд.


<h4>➥Логіка кнопок «вперед». Кнопка наступного слайда:<br> </h4>

```js
document.getElementById("next").onclick = () => {
    if (index < slideCount - 3){
        index++;
        slideUpdate();
    }
}
```

• `getElementById('next')` — підключення кнопки за id.

• `.onclick` — подія кліку.

• `if (index < countSlide - 3)`
– умова, в якій є цикл. Якщо, наприклад, слайд 2 (index1) < загальна кількість слайдів, то перегортання праворуч відбудеться. 

• `index` — наші слайди, 

• `countSlide` — загальна кількість слайдів

• `index++` — збільшує індекс, тобто перемикає слайд вправо.


<h4>➥Логіка кнопок «назад»</h4>

```js
document.getElementById("prev").onclick = () => {
    if (index > 0){
        index--;
        slideUpdate();
    }
}
```
• `(index > 0)` — слайди, які більші за index0, — перегортає ліворуч. 

• `index--` — виконує перегортання ліворуч.


<h4>➥ Функція перемикання слайдів</h4>

```js
function slideUpdate() {
    const slideWidth = document.querySelector('.slide').offsetWidth;
    slides.style.transform = `translateX(${-index * slideWidth}px)`
}
```
• `offsetWidth` — повертає поточну ширину слайда і автоматично підлаштовується під адаптив.

• `transform: translateX(...)` — рухає блок зі слайдами по осі X.

• `-index * slideWidth` — пересуває на право и помножує на довжину слайдов


<h4 align="center">- Доповнення</h4>

<h4> ➥Коли я перевіряла адаптацію слайдерів і перегорнула — було чудово, але коли я збільшила розмір екрана — слайди почали плавно самі рухатися з місця. Щоб це виправити, я додала цей код:</h4>

```js
window.addEventListener('resize', () => {
    slides.style.transition = 'none'; 
    slideUpdate(); 
  
    
    setTimeout(() => {
      slides.style.transition = '';
    }, 50);
  });
```

• ` window.addEventListener('resize' ` — реагує на зміну розміру вікна браузера
• `slides1.style.transition = 'none'; ` — вимикаю роботу transition, яка в CSS відповідає за плавність прокрутки:

```css
.slides {
  display: flex; 
  transition: transform 0.5s ease; 
}
```

➥ Це було зроблено для того, щоб під час зміни розміру вікна браузера слайди не смикалися.

• ``updateCountSlide()`` — виконання функції

• ``setTimeout(..., 50)`` — через 50 мілісекунд анімація плавності прокрутки повертається назад.


<h3 align="center"> જ⁀➴  Modal window ◌<br> </h3>

➥ Для цього проєкту я використовувала модальні вікна. Завдяки їм під час кліку на кнопку з’являлося вікно з інформацією.

<h4>➥Спочатку йде підключення елементів через DOM:<h4>

```js
const modal2 = document.getElementById("modal2");
const button_discover2 = document.getElementById("button_discover2");
const crosebutton2 = document.getElementById("crosebutton2");

```

• `"modal2"` — це наше модальне вікно

• `"button_discover2"` — кнопка, завдяки якій модальне вікно з’являється

• `"crosebutton2"` — кнопка-хрестик, яка закриває модальне вікно


<h4>➥Додаємо кнопкам події::<h4>

```js
button_discover2.onclick = () => modal2.style.display = "block";
crosebutton2.onclick = () => modal2.style.display = 'none';
```

• Для кнопки button_discover2 ми задаємо дію, яка показує модальне вікно, оскільки встановлюємо значення `"block"`.

• Для crosebutton2 задається дія, яка приховує модальне вікно, завдяки значенню `'none'`.


## ↬ Technologies:
◌ HTML, CSS (SCSS), JavaScript

## ↬ Design:
Design by [Duane Levi Smith](https://www.behance.net/DLSdesign888) <br> 
Code by Ainacvvaa<br>
<h2 align="center">‎ ♡‧₊˚✧ ૮ ˶ᵔ ᵕ ᵔ˶ ა ✧˚₊‧♡ </h2>
