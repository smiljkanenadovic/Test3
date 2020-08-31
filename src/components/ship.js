import { getShips } from '../services'

const oneShip = () => {
    const ships = document.createElement('div');
    ships.className = 'lista';

    getShips().then((res) => {
        let data = res.data;
        console.log(data);

        data.forEach((element) => {
            let link = document.createElement('a');
            link.href = element.url;
            link.target = '_blank'

            let img = document.createElement('img');
            img.src = element.image;

            img.style.height = '390px';
            img.style.width = 'auto';
            img.alt = 'no photo';
            link.appendChild(img);

            let activeB = element.active;
            let activePrint;

            if(activeB == true) {
                activePrint = 'Active'
            } else {
                activePrint = 'Inactive'
            }

            let p = document.createElement('p');
            p.innerHTML = `${element.ship_name}<br>${element.ship_type}<br>`

            let pFilter = document.createElement('p');
            pFilter.id = 'filter'
            pFilter.innerHTML = `${activePrint}`

            ships.append(link, pFilter, p)
        })
    })
    return ships;
}

export default oneShip;