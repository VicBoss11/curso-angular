const equiposPar = ['R. Madrid', 'Betis', 'Valencia', 'Villarreal'];
const equiposImpar = ['R. Madrid', 'Betis', 'Valencia', 'Villarreal', 'Sevilla'];
const mostrarEnfrentamientos = (equipos) => {
    let equipo1 = equipos[Math.floor(Math.random() * equipos.length)];
    equipos = eliminarEquipo(equipo1, equipos);
    let equipo2 = equipos[Math.floor(Math.random() * equipos.length)];
    equipos = eliminarEquipo(equipo2, equipos);
    let enfrentamiento = equipo2 ? `${equipo1} vs ${equipo2}` : equipo1 + ' ha pasado de ronda';
    if (equipos.length === 0) {
        console.log(enfrentamiento);
    }
    else {
        mostrarEnfrentamientos(equipos);
        console.log(enfrentamiento);
    }
};
const eliminarEquipo = (equipoEliminar, equipos) => {
    return equipos.filter(equipo => equipo !== equipoEliminar);
};
mostrarEnfrentamientos(equiposPar);
console.log('-------------------------------');
mostrarEnfrentamientos(equiposImpar);
