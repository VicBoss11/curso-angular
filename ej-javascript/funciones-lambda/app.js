const series = [
  { titulo: 'Mr. Robot', vista: true, numEpisodios: 44 },
  { titulo: 'Vikings', vista: true, numEpisodios: 90 },
  { titulo: 'Game of Thrones', vista: false, numEpisodios: 73 },
  { titulo: 'The Witcher', vista: true, numEpisodios: 16 },
  { titulo: 'True Detective', vista: false, numEpisodios: 24 },
  { titulo: 'Westworld', vista: false, numEpisodios: 30 },
]

const seriesVistas = series.filter(serie => serie.vista === true);

console.log(seriesVistas);

const titulosSeriesVistas = seriesVistas.map(series => series.titulo);

console.log(titulosSeriesVistas.join(', '));

