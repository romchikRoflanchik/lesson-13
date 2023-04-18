const box = document.querySelector('.box');
const item_1 = document.querySelector('.item_1');
const item_2 = document.querySelector('.item_2');
const item_3 = document.querySelector('.item_3');
const item_4 = document.querySelector('.item_4');
const item_5 = document.querySelector('.item_5');
const item_6 = document.querySelector('.item_6');
const item_7 = document.querySelector('.item_7');
const item_8 = document.querySelector('.item_8');
const item_9 = document.querySelector('.item_9');
const box_item = document.querySelectorAll('.box_item');


document.querySelector('.buttons').addEventListener('click', function (event) {
    console.log(event.target.classList);
    if (event.target.classList == 'color') {
        box.style.display = 'flex';
        item_1.classList.remove('image_1');
        item_2.classList.remove('image_2');
        item_3.classList.remove('image_3');
        item_4.classList.remove('image_4');
        item_5.classList.remove('image_5');
        item_6.classList.remove('image_6');
        item_7.classList.remove('image_7');
        item_8.classList.remove('image_8');
        item_9.classList.remove('image_9');

        item_1.classList.add('red');
        item_2.classList.add('blue');
        item_3.classList.add('yellow');
        item_4.classList.add('yellowgreen');
        item_5.classList.add('green');
        item_6.classList.add('grey');
        item_7.classList.add('orange');
        item_8.classList.add('black');
        item_9.classList.add('tomato');
    } else if (event.target.classList == 'image') {
        box.style.display = 'flex';
        item_1.classList.remove('red');
        item_2.classList.remove('blue');
        item_3.classList.remove('yellow');
        item_4.classList.remove('yellowgreen');
        item_5.classList.remove('green');
        item_6.classList.remove('grey');
        item_7.classList.remove('orange');
        item_8.classList.remove('black');
        item_9.classList.remove('tomato');

        item_1.classList.add('image_1');
        item_2.classList.add('image_2');
        item_3.classList.add('image_3');
        item_4.classList.add('image_4');
        item_5.classList.add('image_5');
        item_6.classList.add('image_6');
        item_7.classList.add('image_7');
        item_8.classList.add('image_8');
        item_9.classList.add('image_9');
    }
})


box_item.forEach(elem => {
    elem.addEventListener('click', function (event) {
        document.body.classList.remove('red', 'blue', 'yellow', 'yellowgreen', 'green', 'grey', 'orange', 'black', 'tomato', 'image_1', 'image_2', 'image_3', 'image_4', 'image_5', 'image_6', 'image_7', 'image_8', 'image_9')
        document.body.classList.add(event.target.classList[2])
    })
})