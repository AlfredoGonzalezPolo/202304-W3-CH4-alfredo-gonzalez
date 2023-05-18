import type { Movie } from './models/movie';

const mockMovies = [
  // New Task('Task1 en localStore', 'Pepe'),
  // new Task('Task2 en localStore', 'Luisa'),
  // new Task('Task3 en localStore', 'Ernesto')
];

const storeName = 'Movies';

export const getMovies = (): Movie[] => {
  const stringData = localStorage.getItem(storeName);
  if (!stringData) {
    setTasks(mockMovies);
    return mockMovies;
  }

  return JSON.parse(stringData);
};

export const setTasks = (movies: Movie[]): void => {
  localStorage.setItem(storeName, JSON.stringify(movies));
};

export const removeTasks = (): void => {
  localStorage.removeItem(storeName);
};
