const nextId = require('../../utils/nextId')

module.exports = [
  {
    production_id: 0,
    robotics_factory_description:
      'The Robotics Factory primary goal is the production of State of the Art construction robots. Each upgrade to the robotics factory results in the production of faster robots, which is used to reduce the time needed to construct buildings.',
    robotics_factory_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        deuterium: 0,
        metal_sum: 0,
        crystal_sum: 0,
        deuterium_sum: 0,
        built_time_multiplier: 0,
      },
      1: {
        level: 1,
        metal: 400,
        crystal: 120,
        deuterium: 200,
        metal_sum: 400,
        crystal_sum: 120,
        deuterium_sum: 200,
        built_time_multiplier: 50.0,
      },
    },
    shipyard_description:
      'The planetary shipyard is responsible for the construction of spacecraft and defensive mechanisms. As the shipyard is upgraded, it can produce a wider variety of vehicles at a much greater rate of speed. If a nanite factory is present on the planet, the speed at which ships are constructed is massively increased.',
    shipyard_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        deuterium: 0,
      },
      1: {
        level: 1,
        metal: 400,
        crystal: 200,
        deuterium: 100,
      },
    },
    nanomachine_description:
      'A nanomachine, also called a nanite, is a mechanical or electromechanical device whose dimensions are measured in nanometers (millionths of a millimeter, or units of 10^-9 meter). The microscopic size of nanomachines translates into higher operational speed. This machine factory produces nanomachines that are the ultimate evolution in robotics technology. Once constructed, each upgrade significantly decreases production time for buildings, ships, and defensive structures.',
    nanomachine_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        deuterium: 0,
      },
      1: {
        level: 1,
        metal: 1000000,
        crystal: 500000,
        deuterium: 100000,
      },
    },
    university_description:
      'The university trains people to cut down on research. In other words it will decrease the research time of the research per each level this is upgraded.',
    university_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        deuterium: 0,
      },
      1: {
        level: 1,
        metal: 1000000,
        crystal: 500000,
        deuterium: 100000,
      },
    },
    missile_silo_description:
      'Missile silos are used to construct, store and launch interplanetary and anti-ballistic missiles. With each level of the silo, five interplanetary missiles or ten anti-ballistic missiles can be stored. One Interplanetary missile uses the same space as two Anti-Ballistic missiles. Storage of both Interplanetary missiles and Anti-Ballistic missiles in the same silo is allowed.',
    missile_silo_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        deuterium: 0,
        missile_slots: 0,
      },
      1: {
        level: 1,
        metal: 20000,
        crystal: 20000,
        deuterium: 1000,
        missile_slots: 10,
      },
    },
    space_port_description:
      'Space Dock is an add-on for a planet which allows a certain percentage of a destroyed fleet to be recovered after a large-scale battle (>150,000 units destroyed) over the planet or its moon. A wreckage field will be formed after the battle, and the space dock can start the recovery process unless 3 days have passed, at which point the wreckage burns up.',
    space_port_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        deuterium: 0,
        energy: 0,
      },
      1: {
        level: 1,
        metal: 200,
        deuterium: 50,
        energy: 50,
      },
    },
    research_lab_description:
      'An essential part of any empire, Research Labs are where new technologies are discovered and older technologies are improved upon. With each level of the Research Lab constructed, the speed in which new technologies are researched is increased, while also unlocking newer technologies to research. In order to conduct research as quickly as possible, research scientists are immediately dispatched to the colony to begin work and development. In this way, knowledge about new technologies can easily be disseminated throughout the empire.',
    research_lab_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        deuterium: 0,
        metal_sum: 0,
        crystal_sum: 0,
        deuterium_sum: 0,
      },
      1: {
        level: 1,
        metal: 200,
        crystal: 400,
        deuterium: 200,
        metal_sum: 200,
        crystal_sum: 400,
        deuterium_sum: 200,
      },
    },
    terraformer_description: `With the increasing construction on planets, even the living space for the colony is becoming more and more limited. Traditional methods such as high-rise and underground construction are increasingly becoming insufficient. A small group of high-energy physicists and nano engineers eventually came to the solution: terraforming. Making use of tremendous amounts of energy, the terraformer can make whole stretches of land or even continents arable. This building houses the production of nanites created specifically for this purpose, which ensure a consistent ground quality throughout. Each terraformer level allows 5 fields to be cultivated. With each level, the terraformer occupies one field itself. Every 2 terraformer levels you will receive 1 bonus field. Once built, the terraformer cannot be dismantled.`,
    terraformer_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        deuterium: 0,
        extra_fields: 0,
        fields_used: 0,
        free_fields: 0,
      },
      1: {
        level: 1,
        metal: 50000,
        crystal: 100000,
        deuterium: 1000,
        extra_fields: 5,
        fields_used: 1,
        free_fields: 4,
      },
    },
    alliance_port_description:
      'The alliance port supplies fuel to friendly fleets in orbit helping with defence. For each upgrade level of the alliance port, a special demand of deuterium per hour can be sent to an orbiting fleet.',
    alliance_port_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
      },
      1: {
        level: 1,
        metal: 20000,
        crystal: 40000,
      },
      2: {
        level: 2,
        metal: 40000,
        crystal: 80000,
      },
      3: {
        ship_type: [
          'Small Cargo Ship',
          'Large Cargo Ship',
          'Light Fighter',
          'Heavy Fighter',
          'Cruiser',
          'Battleship',
          'Colony Ship',
          'Recycler',
          'Espionage Probe',
          'Bomber',
          'Destroyer',
          'Battle Cruiser',
          'Death Star',
        ],
      },
      4: {
        holding_cost: [1, 5, 2, 7, 30, 50, 100, 30, 0.1, 100, 100, 25, 0.1],
      },
    },
    galexy_sensor_description: `Utilizing high-resolution sensors, the Sensor Phalanx first scans the spectrum of light, composition of gases, and radiation emissions from a distant world and transmits the data to a supercomputer for processing. Once the information is obtained, the supercomputer compares changes in the spectrum, gas composition, and radiation emissions, to a base line chart of known changes of the spectrum created by various ship movements. The resulting data then displays activity of any fleet within the range of the phalanx. To prevent the supercomputer from overheating during the process, it is cooled by utilizing 5k of processed Deuterium. To use the Phalanx, click on any planet in the Galaxy View within your sensors range.`,
    galexy_sensor_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        deuterium: 0,
        range: 0,
      },
      1: {
        level: 1,
        metal: 20000,
        crystal: 40000,
        deuterium: 20000,
        range: 1,
      },
    },
    jump_gate_description:
      'A Jump Gate is a system of giant transceivers capable of sending even the largest fleets to a receiving Gate anywhere in the universe without loss of time. Utilizing technology similar to that of a Worm Hole to achieve the jump, deuterium is not required. A recharge period of a few minutes must pass between jumps to allow for regeneration. Transporting resources through the Gate is not possible either. With every upgrade level the jump gate`s cooldown time can be reduced.',
    jump_gate_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        deuterium: 0,
        cooldown: 0,
      },
      1: {
        level: 1,
        metal: 2000000,
        crystal: 4000000,
        deuterium: 2000000,
        cooldown: 1,
      },
    },
  },
]
