export interface Vehicle {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
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
    longDescription: '',
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
    name: 'Garawaƞa',
    description: 'ANU Rocketry\'s most ambitious vehicle yet, soaring to 30,000 feet with a 3U CubeSat payload and fully in-house composite airframe.',
    longDescription: 'ANU Rocketry\'s 2024 entry into the Spaceport America Cup 30,000ft category, Project Garawana — meaning "to dream" in the Ngarigo language — represents the team\'s most ambitious undertaking to date. Garawana is a single-stage rocket powered by a Cesaroni N5800 solid motor, built almost entirely in-house from carbon fibre and fibreglass composites, machined aluminium, and student-sewn parachutes. Its 3U CubeSat payload carries a telemetry suite of atmospheric sensors, cameras, and IMUs, supporting ongoing ANU research while laying the groundwork for the team\'s future liquid propulsion ambitions.',
    status: 'retired',
    year: 2024,
    specifications: {
      apogee: '8189',
      maxVelocity: '653',
      maxAcceleration: '238',
      flightTime: '331'
    },
    image: '/assets/images/vehicles/garawana.png',
    slug: 'garawana'
  },
  {
    id: 'stratus',
    name: 'Stratus',
    description: 'A high-power testbed vehicle, built to validate next-generation avionics systems under real flight conditions and push our electronics to their limits.',
    longDescription: 'Project Stratus was a testbed high power vehicle launched on a J400 motor. This vehicle was used as a test bed for the Avionics Subsystem that was to be used in Project Dyurra. To achieve this, the entire Avionics Bay was scaled down, incorporating some minor modifications to ensure the power sources fit. The bay and it’s components performed nominally, successfully initiating deployment events and retaining GPS connection in order to aid recovery operations. Post-launch analysis indicated that the Avionics Bay was tested at roughly 6 Gs and all components performed nominally. Furthermore, no fatigue or failure in the screw switches, components or crimped connections were found.',
    status: 'retired',
    year: 2023,
    specifications: {
      apogee: '895',
      maxVelocity: '143',
      maxAcceleration: '100',
      flightTime: '81.6'
    },
    image: '/assets/images/vehicles/stratus.png',
    slug: 'stratus'
  },
  {
    id: 'halo',
    name: 'Halo',
    description: 'Project Halo was an entirely scratch-built, L3 motor-capable vehicle constructed as a team. It featured in-house composites, with a fibreglass body tube and nose cone alongside handmade carbon fibre fins, aluminium bulkheads, nosecone tip and thrust plate, all machined by our members. Halo also featured a set of camera fins, an altimeter and GPS payload and fully redundant, dual-deploy electronics.',
    longDescription: 'Project Halo was an entirely scratch-built, L3 motor-capable vehicle constructed as a team. It featured in-house composites, with a fibreglass body tube and nose cone alongside handmade carbon fibre fins, aluminium bulkheads, nosecone tip and thrust plate, all machined by our members. Halo also featured a set of camera fins, an altimeter and GPS payload and fully redundant, dual-deploy electronics.',
    status: 'retired',
    year: 2020,
    specifications: {
      apogee: '3414',
      maxVelocity: '316',
      maxAcceleration: '109',
      flightTime: '244'
    },
    image: '/assets/images/vehicles/halo.png',
    slug: 'halo'
  },
  {
    id: 'dyurra',
    name: 'Dyurra',
    description: 'A scientific research rocket built for the Spaceport America Cup, carrying a payload designed to investigate atmospheric pollutants and lay the groundwork for future liquid fuel ambitions.',
    longDescription: '2023\'s entry into the Spaceport America Cup 10,000ft commercial-off-the-shelf solid motor category, carries a 4 kilogram scientific payload as part of the Space Dynamics Laboratory Payload Challenge. Project Dyurra’s payload is designed to prepare ANU Rocketry for a 30,000 ft SRAD liquid fuel rocket, and to investigate the pollutants present from 0 to 10,000ft that may impact the emerging E-VTOL aviation industry. The rocket successfully drogue deployed at the Spaceport America Cup, and received an honourable mention for the payload component of the launch',
    status: 'retired',
    year: 2023,
    specifications: {
      apogee: '3380',
      maxVelocity: '315',
      maxAcceleration: '170',
      flightTime: '276'
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
