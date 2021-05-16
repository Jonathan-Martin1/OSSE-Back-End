const nextId = require('../../utils/nextId')

module.exports = [
  {
    buildings_id: 0,
    metal_mine_description:
      'Metal is the primary resource used in the foundation of your Empire. At greater depths, the mines can produce more output of viable metal for use in the construction of buildings, ships, defence systems, and research. As the mines drill deeper, more energy is required for maximum production. As metal is the most abundant of all resources available, its value is considered to be the lowest of all resources for trading.',
    metal_mine_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        energy: 0,
        perHour: 30,
        perDay: 720,
        perWeek: 5040,
      },
      1: {
        level: 1,
        metal: 60,
        crystal: 15,
        energy: 11,
        perHour: 33,
        perDay: 792,
        perWeek: 5544,
      },
    },
    crystal_mine_description:
      'Crystal mines supply the main resource used to produce electronic circuits and from certain alloy compounds. Mining crystal consumes some one and half times more energy than a mining metal, making crystal more valuable. Almost all ships and all buildings require crystal. Most crystals required to build spaceships, however, are very rare, and like metal can only be found at a certain depth. Therefore, building mines in deeper strata will increase the amount of crystal produced.',
    crystal_mine_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        energy: 0,
        perHour: 10,
        perDay: 240,
        perWeek: 1680,
      },
      1: {
        level: 1,
        metal: 48,
        crystal: 24,
        energy: 11,
        perHour: 22,
        perDay: 528,
        perWeek: 3696,
      },
    },

    deuterium_description:
      'Deuterium is also called heavy hydrogen. It is a stable isotope of hydrogen with a natural abundance in the oceans of colonies of approximately one atom in 6500 of hydrogen (~154 PPM). Deuterium thus accounts for approximately 0.015% (on a weight basis, 0.030%) of all. Deuterium is processed by special synthesizers which can separate the water from the Deuterium using specially designed centrifuges. The upgrade of the synthesizer allows for increasing the amount of Deuterium deposits processed. Deuterium is used when carrying out sensor phalanx scans, viewing galaxies, as fuel for ships, and performing specialized research upgrades.',
    deuterium_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        energy: 0,
        perHour: 0,
        perDay: 0,
        perWeek: 0,
      },
      1: {
        level: 1,
        metal: 225,
        crystal: 75,
        energy: 22,
        perHour: 25,
        perDay: 600,
        perWeek: 4200,
      },
    },
    solar_plant_description:
      'A Solar Plant is a building used to generate energy to power your Metal Mine, Crystal Mine, and Deuterium Synthesizer. See also Solar Satellites.',
    solar_plant_costs_per_upgrade: {
      0: {
        level: 0,
      },
      1: {
        level: 1,
        output_hour: 22,
        difference: +22,
        output_field: 22.0,
        metal: 75,
        crystal: 30,
      },
    },
    metal_storage_description:
      'Metal Storage structures provide huge storage containment for raw unprocessed metal from metal mines. The higher the level, the more metal can be held. Once the capacity is used up, no more metal can be harvested by the metal mines.',
    metal_storage_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        capacity: 10000,
        increase_from_previous_level: null,
      },
      1: {
        level: 1,
        metal: 1000,
        capacity: 20000,
        increase_from_previous_level: 10000,
      },
    },
    crystal_storage_description:
      'The unprocessed crystal will be stored in these giant storage halls in the meantime. With each level of upgrade, it increases the amount of crystal can be stored. If the crystal stores are full, no further crystal will be mined.',
    crystal_storage_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        capacity: 10000,
        increase_from_previous_level: null,
      },
      1: {
        level: 1,
        metal: 1000,
        crystal: 500,
        capacity: 20000,
        increase_from_previous_level: 10000,
      },
    },
    deuterium_storage_description:
      'The Deuterium tank is for storing newly-synthesized deuterium. Once it is processed by the synthesizer, it is piped into this tank for later use. With each upgrade of the tank, the total storage capacity is increased. Once the capacity is reached, no further Deuterium will be synthesized.',
    deuterium_storage_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        capacity: 10000,
        increase_from_previous_level: null,
      },
      1: {
        level: 1,
        metal: 1000,
        crystal: 500,
        capacity: 20000,
        increase_from_previous_level: 10000,
      },
    },
  },
]
