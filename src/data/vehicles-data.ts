export interface Vehicle {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'retired' | 'development' | 'testing';
  year: number;
  specifications: {
    apogee?: string;
    maxVelocity?: string;
    maxAcceleration?: string;
    flightTime?: string;
  };
  image?: string;
  slug: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 'solstice',
    name: 'Solstice',
    description: 'Our next bid upward, and an exciting new frontier for our team. Solstice is a united test vehicle, designed to test space hardware within Earth\'s atmosphere.',
    status: 'active',
    year: 2025,
    specifications: {
      apogee: '1107',
      maxVelocity: '164',
      maxAcceleration: '198',
      flightTime: '176'
    },
    image: '/assets/images/vehicles/solstice.png',
    slug: 'solstice'
  },
  {
    id: 'garawana',
    name: 'Garawana',
    description: 'An advanced rocket system featuring cutting-edge propulsion technology and innovative design.',
    status: 'active',
    year: 2024,
    specifications: {
      apogee: 'TBD',
      maxVelocity: 'TBD',
      maxAcceleration: 'TBD',
      flightTime: 'TBD'
    },
    image: '/assets/images/vehicles/garawana.png',
    slug: 'garawana'
  },
  {
    id: 'stratus',
    name: 'Stratus',
    description: 'A versatile launch platform designed for experimental payloads and atmospheric research missions.',
    status: 'testing',
    year: 2023,
    specifications: {
      apogee: 'TBD',
      maxVelocity: 'TBD',
      maxAcceleration: 'TBD',
      flightTime: 'TBD'
    },
    image: '/assets/images/vehicles/stratus.png',
    slug: 'stratus'
  },
  {
    id: 'halo',
    name: 'Halo',
    description: 'A compact and efficient rocket designed for rapid deployment and precise trajectory control.',
    status: 'development',
    year: 2020,
    specifications: {
      apogee: 'TBD',
      maxVelocity: 'TBD',
      maxAcceleration: 'TBD',
      flightTime: 'TBD'
    },
    image: '/assets/images/vehicles/halo.png',
    slug: 'halo'
  },
  {
    id: 'dyurra',
    name: 'Dyurra',
    description: 'A pioneering experimental rocket designed for testing new propulsion systems and flight control mechanisms.',
    status: 'development',
    year: 2023,
    specifications: {
      apogee: 'TBD',
      maxVelocity: 'TBD',
      maxAcceleration: 'TBD',
      flightTime: 'TBD'
    },
    image: '/assets/images/vehicles/dyurra.png',
    slug: 'dyurra'
  }
];

export const getVehicleBySlug = (slug: string): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.slug === slug);
};

export const getVehiclesByStatus = (status: Vehicle['status']): Vehicle[] => {
  return vehicles.filter(vehicle => vehicle.status === status);
};
