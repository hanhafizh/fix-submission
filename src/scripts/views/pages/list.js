import RestoSource from '../../data/resto-source';
import { createRestaurantListTemplate } from '../templates/template-creator';
import '../components/hero-component';

const ListPages = {
  async render() {
    return `
    <div class="content">
    <hero-component></hero-component>
      <h2 class="content__heading"></h2>
      <div id="restos" class="restos">
      </div>
    </div>
  `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const dataRestaurants = await RestoSource.RestoList();
    const restaurantsContainer = document.querySelector('#restos');
    dataRestaurants.forEach((restaurants) => {
      restaurantsContainer.innerHTML
        += createRestaurantListTemplate(restaurants);
    });
  },
};

export default ListPages;
