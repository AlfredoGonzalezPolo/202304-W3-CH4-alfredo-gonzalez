import { Component } from './component';
import { Movie } from '../models/movie';

export class Main extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    console.log(this.element);
  }

  createTemplate() {
    return `<main class="main">
      <section class="series">
        <h2 class="section-title">Series list</h2>
        <section class="series-pending">
          <h3 class="subsection-title">Pending series</h3>
          <p class="info">You have 4 series pending to watch</p>
          <!--<p class="info">Congrats! You've watched all your series</p>-->
          
        </section>
      </section>
    </main>`;
  }
}
