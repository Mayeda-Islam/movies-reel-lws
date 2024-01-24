export function imgUrl(name) {
  return new URL(`../assets/movie-covers/${name}`, import.meta.url).href;
}
