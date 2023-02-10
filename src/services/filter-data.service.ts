const states = [
  {
    label: 'Azuay',
    value: 'AZUAY',
    districts: [
        {
          label: 'Cuenca',
          value: 'CUENCA'
        },
      {
        label: 'Girón',
        value: 'GIRON'
      },
      {
        label: 'Oña',
        value: 'ONA'
      },
    ]
  },
  {
    label: 'Bolívar',
    value: 'BOLIVAR',
    districts: [
      {
        label: 'Guaranda',
        value: 'GUARANDA'
      },
      {
        label: 'Chillanes',
        value: 'CHILLANES'
      },
      {
        label: 'San Miguel',
        value: 'SAN MIGUEL'
      },
    ]
  },
  {
    label: 'Cañar',
    value: 'CANAR',
    districts: [
      {
        label: 'Azogues',
        value: 'AZOGUES'
      },
      {
        label: 'Biblián',
        value: 'BIBLIAN'
      },
      {
        label: 'La Troncal',
        value: 'LA TRONCAL'
      },
    ]
  },
];


export type District = {
  label: string;
  value: string;
}

export type State = {
  label: string;
  value: string;
  districts?: District[];
}

export const getStates = async (): Promise<State[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(states), 3000));
}

export const getMatters = async (): Promise<string[]> => {
  return new Promise((resolve) => setTimeout(() => resolve([
      'ADMINISTRATIVO',
      'AMBIENTAL',
      'CIVIL',
      'CONSTITUCIONAL',
      'CONSUMIDOR',
      'CONTENCIOSO ADMINISTRATIVO',
      'CONTENCIOSO ADMINISTRATIVO Y TRIBUTARIO',
      'CONTENCIOSO TRIBUTARIO',
  ]), 3000));
}