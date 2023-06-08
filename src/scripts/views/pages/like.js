import FavoriterestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="content">
            <h2 class="content__heading"></h2>
            <div id="restos" class="restos">
        </div>
    </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriterestoIdb.getAllrestos();
    const restosContainer = document.querySelector('#restos');

    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestaurantListTemplate(resto);
    });
  },
};

export default Like;
