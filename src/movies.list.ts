import { getMovies } from './local.repository';
import { Component } from './components/component';
import type { Movie } from './models/movie';

export class MoviesList extends Component {
  movies: Movie[];
  constructor(selector: string) {
    super(selector);
    this.movies = getMovies();
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const list = this.movies
      .map(
        (item) => `
            <li class="serie">
              <img class="serie__poster"
                src="${item.poster}"
                alt="${item.name} poster" />
              <h4 class="serie__title">${item.name}</h4>
              <p class="serie__info">${item.creator} (${item.year})</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="5/5"></i>
                </li>
              </ul>
              <i class="fas fa-times-circle icon--delete"></i>
            </li>
          </ul>`
      )
      .join('');

    return `
   <ul class="series-list">${list}</ul>`;
  }
}
