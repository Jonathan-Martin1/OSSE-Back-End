const nextId = require('../../utils/nextId');

module.exports = [
  {
    ships_id: '',
    ship_s: {
      1: {
        ship_name: 'Small Cargo',
        ship_cost: [
          {
            metal: 2000,
            crystal: 2000,
          },
        ],
        ship_performance: [
          {
            structural_integrity: 4000,
            shield_power: 10,
            weapon_power: 5,
            cargo_capacity: 5000,
            base_speed: 5000,
            fuel_consumption: 10,
          },
        ],
        ship_weakness: [
          {
            rapidFire_from_ship: [
              'Heavy Fighter',
              'Battle Cruiser',
              'Death Star',
            ],
            rapidFire_from_ship_points: [3, 3, 250, 'subtract'],
            rapidFire_against_ship: ['Espionage Probe', 'Solar Satellite'],
            rapidFire_against_ship_points: [5, 5, 'bonus against'],
          },
        ],
        ship_description: `Transporters are about as large as fighters, yet they forego high-performance drives and on-board weaponry for gains in their freighting capacity. As a result, a transporter should only be sent into battles when it is accompanied by combat-ready ships. As soon as the Impulse Drive reaches research level 5, the small transporter travels with increased base speed and is geared with an Impulse Drive.`,
      },
      2: {
        ship_name: 'Large Cargo',
        ship_cost: [
          {
            metal: 6000,
            crystal: 6000,
          },
        ],
        ship_performance: [
          {
            structural_integrity: 12000,
            shield_power: 25,
            weapon_power: 5,
            cargo_capacity: 25000,
            base_speed: 7500,
            fuel_consumption: 50,
          },
        ],
        ship_weakness: [
          {
            rapidFire_from_ship: ['Battle Cruiser', 'Death Star'],
            rapidFire_from_ship_points: [3, 250, 'subtract'],
            rapidFire_against_ship: ['Espionage Probe', 'Solar Satellite'],
            rapidFire_against_ship_points: [5, 5, 'bonus against'],
          },
        ],
        ship_description: `As time evolved, the raids on colonies resulted in larger and larger amounts of resources being captured. As a result, Small Cargos were being sent out in mass numbers to compensate for the larger captures. It was quickly learned that a new class of ship was needed to maximize resources captured in raids, yet also be cost effective. After much development, the Large Cargo was born. To maximize the resources that can be stored in the holds, this ship has little in the way of weapons or armor. Thanks to the highly developed combustion engine installed, it serves as the most economical resource supplier between planets, and most effective in raids on hostile worlds.`,
      },
      3: {
        ship_name: 'Colony Ship',
        ship_cost: [{}],
        ship_performance: [
          {
            structural_integrity: 30000,
            shield_power: 100,
            weapon_power: 50,
            cargo_capacity: 7500,
            base_speed: 2500,
            fuel_consumption: 1000,
          },
        ],
        ship_weakness: [
          {
            rapidFire_from_ship: ['Death Star'],
            rapidFire_from_ship_points: [250, 'subtract'],
            rapidFire_against_ship: ['Espionage Probe', 'Solar Satellite'],
            rapidFire_against_ship_points: [5, 5, 'bonus against'],
          },
        ],
        ship_description:
          'In the 20th Century, Man decided to go for the stars. First, it was landing on the Moon. After that, a space station was built. Mars was colonized soon afterwards. It was soon determined that our growth depended on colonizing other worlds. Scientists and engineers all over the world gathered together to develop mans greatest achievement ever. The Colony Ship is born. This ship is used to prepare a newly discovered planet for colonization. Once it arrives at the destination, the ship is instantly transformed into habitual living space to assist in populating and mining the new world. The maximum number of planets is thereby determined by the progress in astrophysics research.Two new levels of Astrotechnology allow for the colonization of one additional planet.',
      },
      4: {
        ship_name: 'Recycler',
        ship_cost: [
          {
            metal: 10000,
            crystal: 6000,
            deuterium: 2000,
          },
        ],
        ship_performance: [
          {
            structural_integrity: 16000,
            shield_power: 10,
            weapon_power: 1,
            cargo_capacity: 20000,
            base_speed: 2000,
            fuel_consumption: 300,
          },
        ],
        ship_weakness: [
          {
            rapidFire_from_ship: ['Death Star'],
            rapidFire_from_ship_points: [250, 'subtract'],
            rapidFire_against_ship: ['Espionage Probe', 'Solar Satellite'],
            rapidFire_against_ship_points: [5, 5, 'bonus against'],
          },
        ],
        ship_description: `Combat in space took on ever larger scales. Thousands of ships were destroyed and the resources of their remains seemed to be lost to the debris fields forever. Normal cargo ships couldn't get close enough to these fields without risking substantial damage.
A recent development in shield technologies efficiently bypassed this issue. A new class of ships were created that were similar to the Transporters: the Recyclers. Their efforts helped to gather the thought-lost resources and then salvage them. The debris no longer posed any real danger thanks to the new shields. As soon as Impulse Drive research has reached level 17, Recyclers are refitted with Impulse Drives. As soon as Hyperspace Drive research has reached level 15, Recyclers are refitted with Hyperspace Drives.`,
      },
      5: {
        ship_name: 'Espionage Probe',
        ship_cost: [
          {
            crystal: 1000,
          },
        ],
        ship_performance: [
          {
            structural_integrity: 1000,
            shield_power: 0,
            weapon_power: 0,
            cargo_capacity: 0,
            base_speed: 1000000000,
            fuel_consumption: 1,
          },
        ],
        ship_weakness: [
          {
            rapidFire_from_ship: [
              'Light Fighter',
              'Heavy Fighter',
              'Cruiser',
              'Battleship',
              'Battlecruiser',
              'Bomber',
              'Destroyer',
              'Death Star',
              'Small Cargo',
              'Large Cargo',
              'Colony Ship',
              'Recycler',
            ],
            rapidFire_from_ship_points: [
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              1250,
              5,
              5,
              5,
              5,
              'subtract',
            ],
          },
        ],
        ship_description:
          'Espionage probes are small, agile drones that provide data on fleets and planets. Fitted with specially designed engines, it allows them to cover vast distances in only a few minutes. Once in orbit around the target planet, they quickly collect data and transmit the report back via your Deep Space Network for evaluation. But there is a risk to the intelligent gathering aspect. During the time the report is transmitted back to your network, the signal can be detected by the target and the probes can be destroyed.',
      },
      6: {
        ship_name: 'Solar Satellite',
        ship_cost: [
          {
            crystal: 2000,
            deuterium: 500,
          },
        ],
        ship_performance: [
          {
            structural_integrity: 2000,
            shield_power: 1,
            weapon_power: 1,
            cargo_capacity: 0,
            base_speed: 0,
            fuel_consumption: 0,
          },
        ],
        ship_weakness: [
          {
            rapidFire_from_ship: [
              'Light Fighter',
              'Heavy Fighter',
              'Cruiser',
              'Battleship',
              'Battlecruiser',
              'Bomber',
              'Destroyer',
              'Death Star',
              'Small Cargo',
              'Large Cargo',
              'Colony Ship',
              'Recycler',
            ],
            rapidFire_from_ship_points: [
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              1250,
              5,
              5,
              5,
              5,
              'subtract',
            ],
          },
        ],
        ship_description:
          'Scientists discovered a method of transmitting electrical energy to the colony using specially designed satellites in a geosynchronous orbit. Solar Satellites gather solar energy and transmit it to a ground station using advanced laser technology. The efficiency of a solar satellite depends on the strength of the solar radiation it receives. In principle, energy production in orbits closer to the sun is greater than for planets in orbits distant from the sun. Due to their good cost/performance ratio solar satellites can solve a lot of energy problems. But beware: Solar satellites can be easily destroyed in battle.',
      },
      7: {
        ship_name: 'Light Fighter',
        ship_cost: [
          {
            metal: 3000,
            crystal: 1000,
          },
        ],
        ship_performance: [
          {
            structural_integrity: 4000,
            shield_power: 10,
            weapon_power: 50,
            cargo_capacity: 50,
            base_speed: 12500,
            fuel_consumption: 20,
          },
        ],
        ship_weakness: [
          {
            rapidFire_from_ship: ['Cruiser', 'Death Star'],
            rapidFire_from_ship_points: [6, 200, 'subtract'],
            rapidFire_against_ship: ['Espionage Probe', 'Solar Satellite'],
            rapidFire_against_ship_points: [5, 5, 'bonus against'],
          },
        ],
        ship_description:
          'This is the first fighting ship all emperors will build. The light fighter is an agile ship, but vulnerable when it is on its own. In mass numbers, they can become a great threat to any empire. They are the first to accompany small and large cargoes to hostile planets with minor defences.',
      },
      8: {
        ship_name: 'Heavy Fighter',
        ship_cost: [
          {
            metal: 6000,
            crystal: 4000,
          },
        ],
        ship_performance: [
          {
            structural_integrity: 10000,
            shield_power: 25,
            weapon_power: 150,
            cargo_capacity: 100,
            base_speed: 10000,
            fuel_consumption: 75,
          },
        ],
        ship_weakness: [
          {
            rapidFire_from_ship: ['Battle Cruiser', 'Death Star'],
            rapidFire_from_ship_points: [4, 100, 'subtract'],
            rapidFire_against_ship: [
              'Espionage Probe',
              'Solar Satellite',
              'Small Cargo',
            ],
            rapidFire_against_ship_points: [5, 5, 3, 'bonus against'],
          },
        ],
        ship_description:
          'In developing the heavy fighter, researchers reached a point at which conventional drives no longer provided sufficient performance. In order to move the ship optimally, the impulse drive was used for the first time. This increased the costs, but also opened new possibilities. By using this drive, there was more energy left for weapons and shields; in addition, high-quality materials were used for this new family of fighters. With these changes, the heavy fighter represents a new era in ship technology and is the basis for cruiser technology. Slightly larger than the light fighter, the heavy fighter has thicker hulls, providing more protection, and stronger weaponry.',
      },
      9: {
        ship_name: 'Cruiser',
        ship_cost: [
          {
            metal: 20000,
            crystal: 7000,
            deuterium: 2000,
          },
        ],
        ship_performance: [
          {
            structural_integrity: 27000,
            shield_power: 50,
            weapon_power: 400,
            cargo_capacity: 800,
            base_speed: 15000,
            fuel_consumption: 300,
          },
        ],
        ship_weakness: [
          {
            rapidFire_from_ship: ['Battle Cruiser', 'Death Star'],
            rapidFire_from_ship_points: [4, 33, 'subtract'],
            rapidFire_against_ship: [
              'Espionage Probe',
              'Solar Satellite',
              'Light Fighter',
              'Rocket Launcher',
            ],
            rapidFire_against_ship_points: [5, 5, 6, 10, 'bonus against'],
          },
        ],
        ship_description:
          'With the development of the heavy laser and the ion cannon, light and heavy fighters encountered an alarmingly high number of defeats that increased with each raid. Despite many modifications, weapons strength and armour changes, it could not be increased fast enough to effectively counter these new defensive measures. Therefore, it was decided to build a new class of ship that combined more armor and more firepower. As a result of years of research and development, the Cruiser was born.Cruisers are armored almost three times of that of the heavy fighters, and possess more than twice the firepower of any combat ship in existence. They also possess speeds that far surpassed any spacecraft ever made. For almost a century, cruisers dominated the universe. However, with the development of Gauss cannons and plasma turrets, their predominance ended. They are still used today against fighter groups, but not as predominantly as before.',
      },
      10: {
        ship_name: 'Battleship',
        ship_cost: [
          {
            metal: 45000,
            crystal: 15000,
          },
        ],
        ship_performance: [
          {
            structural_integrity: 60000,
            shield_power: 200,
            weapon_power: 1000,
            cargo_capacity: 1500,
            base_speed: 10000,
            fuel_consumption: 500,
          },
        ],
        ship_weakness: [
          {
            rapidFire_from_ship: ['Battle Cruiser', 'Death Star'],
            rapidFire_from_ship_points: [7, 30, 'subtract'],
            rapidFire_against_ship: ['Espionage Probe', 'Solar Satellite'],
            rapidFire_against_ship_points: [5, 5, 'bonus against'],
          },
        ],
        ship_description:
          'Once it became apparent that the cruiser was losing ground to the increasing number of defence structures it was facing, and with the loss of ships on missions at unacceptable levels, it was decided to build a ship that could face those same type of defence structures with as little loss as possible. After extensive development, the Battleship was born. Built to withstand the largest of battles, the Battleship features large cargo spaces, heavy cannons, and high hyperdrive speed. Once developed, it eventually turned out to be the backbone of every raiding Emperors fleet.',
      },
      11: {
        ship_name: 'Battlecruiser',
        ship_cost: [
          {
            metal: 30000,
            crystal: 40000,
            deuterium: 15000,
          },
        ],
        ship_performance: [
          {
            structural_integrity: 70000,
            shield_power: 400,
            weapon_power: 700,
            cargo_capacity: 750,
            base_speed: 10000,
            fuel_consumption: 250,
          },
        ],
        ship_weakness: [
          {
            rapidFire_from_ship: ['Destroyer', 'Death Star'],
            rapidFire_from_ship_points: [2, 15, 'subtract'],
            rapidFire_against_ship: [
              'Espionage Probe',
              'Solar Satellite',
              'Heavy Fighter',
              'Cruiser',
              'Battleship',
              'Small Cargo',
              'Large Cargo',
            ],
            rapidFire_against_ship_points: [5, 5, 4, 7, 3, 3, 'bonus against'],
          },
        ],
        ship_description:
          'This ship is one of the most advanced fighting ships ever to be developed, and is particularly deadly when it comes to destroying attacking fleets. With its improved laser cannons on board and advanced Hyperspace engine, the Battlecruiser is a serious force to be dealt with in any attack. Due to the ships design and its large weapons system, the cargo holds had to be cut, but this is compensated for by the lowered fuel consumption.',
      },
      12: {
        ship_name: 'Bomber',
        ship_cost: [
          {
            metal: 50000,
            crystal: 25000,
            deuterium: 15000,
          },
        ],
        ship_performance: [
          {
            structural_integrity: 75000,
            shield_power: 500,
            weapon_power: 1000,
            cargo_capacity: 700,
            base_speed: 4000,
            fuel_consumption: 700,
          },
        ],
        ship_weakness: [
          {
            rapidFire_from_ship: ['Death Star'],
            rapidFire_from_ship_points: [25, 'subtract'],
            rapidFire_against_ship: [
              'Espionage Probe',
              'Solar Satellite',
              'Rocket Launcher',
              'Light Laser',
              'Heavy Laser',
              'Ion Cannon',
              'Gauss Cannon',
              'Plasma Turret',
            ],
            rapidFire_against_ship_points: [
              5,
              5,
              20,
              20,
              10,
              10,
              5,
              5,
              'bonus against',
            ],
          },
        ],
        ship_description:
          'Over the centuries, as defences were starting to get larger and more sophisticated, fleets were starting to be destroyed at an alarming rate. It was decided that a new ship was needed to break defences to ensure maximum results. After years of research and development, the Bomber was created. Using laser-guided targeting equipment and Plasma Bombs, the Bomber seeks out and destroys any defence mechanism it can find. As soon as the hyperspace drive is developed to Level 8, the Bomber is retrofitted with the hyperspace engine and can fly at higher speeds.',
      },
      13: {
        ship_name: 'Destroyer',
        ship_cost: [
          {
            metal: 60000,
            crystal: 50000,
            deuterium: 15000,
          },
        ],
        ship_performance: [
          {
            structural_integrity: 110000,
            shield_power: 500,
            weapon_power: 2000,
            cargo_capacity: 2000,
            base_speed: 5000,
            fuel_consumption: 1000,
          },
        ],
        ship_weakness: [
          {
            rapidFire_from_ship: ['Death Star'],
            rapidFire_from_ship_points: [5, 'subtract'],
            rapidFire_against_ship: [
              'Espionage Probe',
              'Solar Satellite',
              'Light Laser',
              'Battle Cruiser',
            ],
            rapidFire_against_ship_points: [5, 5, 10, 2, 'bonus against'],
          },
        ],
        ship_description:
          'The Destroyer is the result of years of work and development. With the development of Death Stars, it was decided that a class of ship was needed to defend against such a massive weapon. Thanks to its improved homing sensors, multi-phalanx Ion cannons, Gauss Cannons and Plasma Turrets, the Destroyer turned out to be one of the most fearsome ships created. Because the destroyer is very large, its maneuverability is severely limited, which makes it more of a battle station than a fighting ship. The lack of maneuverability is made up for by its sheer firepower, but it also costs significant amounts of deuterium to build and operate.',
      },
      14: {
        ship_name: 'Death Star',
        ship_cost: [
          {
            metal: 5000000,
            crystal: 2500000,
            deuterium: 1000000,
          },
        ],
        ship_performance: [
          {
            structural_integrity: 9000000,
            shield_power: 50000,
            weapon_power: 200000,
            cargo_capacity: 1000000,
            base_speed: 100,
            fuel_consumption: 1,
          },
        ],
        ship_weakness: [
          {
            rapidFire_against_ship: [
              'Espionage Probe',
              'Solar Satellite',
              'Light Fighter',
              'Heavy Fighter',
              'Cruiser',
              'Battleship',
              'Bomber',
              'Destroyer',
              'Small Cargo',
              'Large Cargo',
              'Colony Ship',
              'Recycler',
              'Rocket Launcher',
              'Light Laser',
              'Heavy Laser',
              'Ion Cannon',
              'Gauss Cannon',
            ],
            rapidFire_against_ship_points: [
              1250,
              1250,
              200,
              100,
              33,
              30,
              25,
              5,
              250,
              250,
              250,
              250,
              200,
              200,
              100,
              100,
              50,
              15,
              'bonus against',
            ],
          },
        ],
        ship_description:
          'The Deathstar is the most powerful ship ever created. This moon sized ship is the only ship that can be seen with the naked eye on the ground. By the time you spot it, unfortunately, it is too late to do anything. Armed with a gigantic graviton cannon, the most advanced weapons system ever created in the Universe, this massive ship has not only the capability of destroying entire fleets and defences, but also has the capability of destroying entire moons. Only the most advanced empires have the capability to build a ship of this mammoth size.',
      },
    },
    amount_of_ships: {
      1: {
      ship_name: 'Small Cargo',
      ship_amount: 0,
      },
      2: {
      ship_name: 'Large Cargo',
      ship_amount: 0,
      },
      3: {
      ship_name: 'Colony Ship',
      ship_amount: 0,
      },
      4: {
      ship_name: 'Recycler',
      ship_amount: 0,
      },
      5: {
      ship_name: 'Espionage Probe',
      ship_amount: 0,
      },
      6: {
      ship_name: 'Solar Satellite',
      ship_amount: 0,
      },
      7: {
      ship_name: 'Light Fighter',
      ship_amount: 0,
      },
      8: {
      ship_name: 'Heavy Fighter',
      ship_amount: 0,
      },
      9: {
      ship_name: 'Cruiser',
      ship_amount: 0,
      },
      10: {
      ship_name: 'Battleship',
      ship_amount: 0,
      },
      11: {
      ship_name: 'Battlecruiser',
      ship_amount: 0,
      },
      12: {
      ship_name: 'Bomber',
      ship_amount: 0,
      },
      13: {
      ship_name: 'Destroyer',
      ship_amount: 0,
      },
      14: {
      ship_name: 'Death Star',
      ship_amount: 0,
      },
    },
  },
];
