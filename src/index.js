import header from './components/header'
import oneShip from './components/ship'
import selector from './components/filter'

let app = document.getElementById('app')
let headerMain = document.getElementById('header')
app.appendChild(headerMain)

let headerPrint = header();
headerMain.appendChild(headerPrint);

let ship = oneShip();
app.appendChild(ship);

let select = selector();
headerMain.appendChild(select)

select.addEventListener('change', () => {
    const filterS = document.querySelectorAll('#filter')
    
    filterS.forEach((element) => {
        element.nextElementSibling.style.display = 'none';
        element.previousElementSibling.style.display = 'none';
        element.style.display = 'none';

        if(select.value === element.innerHTML) {
         element.nextElementSibling.style.display = 'block';
         element.previousElementSibling.style.display = 'block';
         element.style.display = 'block';

         return;

        } else if (select.value === 'All') {
         element.nextElementSibling.style.display = 'block';
         element.previousElementSibling.style.display = 'block';
         element.style.display = 'block';
        }
    })
})