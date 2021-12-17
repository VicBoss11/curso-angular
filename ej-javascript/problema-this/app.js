// THIS

function a() {
  console.log(this);
}

const persona = {
  nombre: 'Charles',
  apellidos: 'Falco',
  getNombreCompleto: function () {
    console.log(this);

    const b = function () {
      console.log('Dentro de la b', this);
    };

    b();
  }
};

persona.getNombreCompleto();

// SOLUCION 1 - Patrón self/that
const persona1 = {
  nombre: 'Charles',
  apellidos: 'Falco',
  getNombreCompleto: function () {
    console.log(this);

    let self = this;

    const b = function () {
      console.log('Dentro de la b', self);
    };

    b();
  }
};

persona1.getNombreCompleto();

// SOLUCION 2 - bind
const persona2 = {
  nombre: 'Charles',
  apellidos: 'Falco',
  getNombreCompleto: function () {
    console.log(this);

    let self = this;

    let b = function () {
      console.log('Dentro de la b', this);
    };

    // b = b.bind({a: 1});
    // b();

    b = b.bind(this);
    b();
  }
};

persona2.getNombreCompleto();

// SOLUCION 3 - apply y call
const persona3 = {
  nombre: 'Charles',
  apellidos: 'Falco',
  getNombreCompleto: function () {
    console.log(this);

    let self = this;

    let b = function () {
      console.log('Dentro de la b', this);
    };

    b.apply(this);
    b.call(this);
  }
};

persona3.getNombreCompleto();

// SOLUCION 4 - arrow function
const persona4 = {
  nombre: 'Charles',
  apellidos: 'Falco',
  getNombreCompleto: function () {
    console.log(this);

    let b = () => {
      console.log('Dentro de la b', this);
    };

    b();
  }
};

persona4.getNombreCompleto();
