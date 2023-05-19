import './style.css';
import { Movie } from './models/movie';
import { Header } from './components/header';
import { MoviesList } from './movies.list';
import { getMockMovie } from './models/mock.movies';

new Header('.container', 'My series');
new MoviesList(getMockMovie());
