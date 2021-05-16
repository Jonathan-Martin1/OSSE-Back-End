const nextId = require('../../utils/nextId')
module.exports = [
  {
    defenses_id: 0,
    defense: {
      1: {
        defense_name: 'Rocket Launcher',
        defense_cost: [
          {
            metal: 2000,
          },
        ],
        defense_performance: [
          {
            structural_integrity: 2000,
            shield_power: 20,
            weapon_power: 80,
          },
        ],
        defense_weakness: [
          {
            rapidFire_from_ship: ['Cruiser', 'Bomber', 'Death Star'],
            rapidFire_from_ship_points: [10, 20, 200, 'subtract'],
          },
        ],
        defense_description: `Your first basic line of defence. These are simple ground based launch facilities that fire conventional warhead tipped missiles at attacking enemy targets. As they are cheap to construct and no research is required, they are well suited for defending raids, but lose effectiveness defending from larger scale attacks. Once you begin construction on more advanced defence weapons systems, Rocket Launchers become simple fodder to allow your more damaging weapons to inflict greater damage for a longer period of time. After a battle, there is up to a 70 % chance that failed defensive facilities can be returned to use.`,
      },
      2: {
        defense_name: 'Light Laser',
        defense_cost: [
          {
            metal: 1500,
            crystal: 500,
          },
        ],
        defense_performance: [
          {
            structural_integrity: 2000,
            shield_power: 25,
            weapon_power: 100,
          },
        ],
        defense_weakness: [
          {
            rapidFire_from_ship: ['Bombrt', 'Destroyer', 'Death Star'],
            rapidFire_from_ship_points: [20, 10, 200, 'subtract'],
          },
        ],
        defense_description: `As technology developed and more sophisticated ships were created, it was determined that a stronger line of defence was needed to counter the attacks. As Laser Technology advanced, a new weapon was designed to provide the next level of defence. Light Lasers are simple ground based weapons that utilize special targeting systems to track the enemy and fire a high intensity laser designed to cut through the hull of the target. In order to be kept cost effective, they were fitted with an improved shielding system, however the structural integrity is the same as that of the Rocket Launcher. After a battle, there is up to a 70 % chance that failed defensive facilities can be returned to use.`,
      },
      3: {
        defense_name: 'Heavy Laser',
        defense_cost: [
          {
            metal: 6000,
            crystal: 2000,
          },
        ],
        defense_performance: [
          {
            structural_integrity: 8000,
            shield_power: 100,
            weapon_power: 250,
          },
        ],
        defense_weakness: [
          {
            rapidFire_from_ship: ['Bomber', 'Death Star'],
            rapidFire_from_ship_points: [10, 100, 'subtract'],
          },
        ],
        defense_description: `The Heavy Laser is a practical, improved version of the Light Laser. Being more balanced than the Light Laser with improved alloy composition, it utilizes stronger, more densely packed beams, and even better onboard targeting systems. After a battle, there is up to a 70 % chance that failed defensive facilities can be returned to use.`,
      },
      4: {
        defense_name: 'Gauss Cannon',
        defense_cost: [
          {
            metal: 20000,
            crystal: 15000,
            deuterium: 2000,
          },
        ],
        defense_performance: [
          {
            structural_integrity: 35000,
            shield_power: 200,
            weapon_power: 1100,
          },
        ],
        defense_weakness: [
          {
            rapidFire_from_ship: ['Bomber', 'Death Star'],
            rapidFire_from_ship_points: [5, 50, 'subtract'],
          },
        ],
        defense_description: `For a long time projectile weapons were regarded as antiquated in the wake of modern thermonuclear and energy technology and due to the development of the hyperdrive and improved armour. That was until the exact energy technology that had once aged it, helped it to re-achieve their established position. A gauss cannon is a large version of the particle accelerator. Extremely heavy missiles are accelerated with a huge electromagnetic force and have muzzle velocities that make the dirt surrounding the missile burn in the skies. This weapon is so powerful when fired that it creates a sonic boom. Modern armour and shields can barely withstand the force, often the target is completely penetrated by the power of the missile. Defence structures deactivate as soon as they have been too badly damaged. After a battle, there is up to a 70 % chance that failed defensive facilities can be returned to use.`,
      },
      5: {
        defense_name: 'Ion Cannon',
        defense_cost: [
          {
            metal: 5000,
            crystal: 3000,
          },
        ],
        defense_performance: [
          {
            structural_integrity: 8000,
            shield_power: 500,
            weapon_power: 150,
          },
        ],
        defense_weakness: [
          {
            rapidFire_from_ship: ['Bomber', 'Death Star'],
            rapidFire_from_ship_points: [10, 100, 'subtract'],
          },
        ],
        defense_description: ``,
      },
      6: {
        defense_name: 'Plasma Turret',
        defense_cost: [
          {
            metal: 50000,
            crystal: 50000,
            deuterium: 30000,
          },
        ],
        defense_performance: [
          {
            structural_integrity: 100000,
            shield_power: 300,
            weapon_power: 3000,
          },
        ],
        defense_weakness: [
          {
            rapidFire_from_ship: ['Bomber'],
            rapidFire_from_ship_points: [5, 'subtract'],
          },
        ],
        defense_description: `One of the most advanced defence weapons systems ever developed, the Plasma Turret uses a large nuclear reactor fuel cell to power an electromagnetic accelerator that fires a pulse, or toroid, of plasma. During operation, the Plasma turret first locks on a target and begins the process of firing. A plasma sphere is created in the turrets core by super heating and compressing gases, stripping them of their ions. Once the gas is superheated, compressed, and a plasma sphere is created, it is then loaded into the electromagnetic accelerator which is energized. Once fully energized, the accelerator is activated, which results in the plasma sphere being launched at an extremely high rate of speed to the intended target. From the targets perspective, the approaching bluish ball of plasma is impressive, but once it strikes, it causes instant destruction. Defensive facilities deactivate as soon as they are too heavily damaged. After a battle, there is up to a 70 % chance that failed defensive facilities can be returned to use.`,
      },
      7: {
        defense_name: 'Small Shield Dome',
        defense_cost: [
          {
            metal: 10000,
            crystal: 10000,
          },
        ],
        defense_performance: [
          {
            structural_integrity: 20000,
            shield_power: 2000,
            weapon_power: 1,
          },
        ],
        defense_description: `Colonizing new worlds brought about a new danger, space debris. A large asteroid could easily wipe out the world and all inhabitants. Advancements in shielding technology provided scientists with a way to develop a shield to protect an entire planet not only from space debris but, as it was learned, from an enemy attack. By creating a large electromagnetic field around the planet, space debris that would normally have destroyed the planet was deflected, and attacks from enemy Empires were thwarted. The first generators were large and the shield provided moderate protection, but it was later discovered that small shields did not afford the protection from larger scale attacks. The small shield dome was the prelude to a stronger, more advanced planetary shielding system to come. After a battle, there is up to a 70 % chance that failed defensive facilities can be returned to use.`,
      },
      8: {
        defense_name: 'Large Shield Dome',
        defense_cost: [
          {
            metal: 50000,
            crystal: 50000,
          },
        ],
        defense_performance: [
          {
            structural_integrity: 100000,
            shield_power: 10000,
            weapon_power: 1,
          },
        ],
        defense_description: `The Large Shield Dome is the next step in the advancement of planetary shields, it is the result of years of work improving the Small Shield Dome. Built to withstand a larger barrage of enemy fire by providing a higher energized electromagnetic field, large domes provide a longer period of protection before collapsing. After a battle, there is up to a 70 % chance that failed defensive facilities can be returned to use.`,
      },
      9: {
        defense_name: 'Anti-Ballistic Missiles',
        defense_cost: [
          {
            metal: 8000,
            crystal: 2000,
          },
        ],
        defense_performance: [
          {
            structural_integrity: 8000,
            shield_power: 1,
            weapon_power: 1,
          },
        ],
        defense_description: `Anti Ballistic Missiles (ABM) are your only line of defence when attacked by Interplanetary Missiles (IPM) on your planet or moon. When a launch of IPMs is detected, these missiles automatically arm, process a launch code in their flight computers, target the inbound IPM, and launch to intercept. During the flight, the target IPM is constantly tracked and course corrections are applied until the ABM reaches the target and destroys the attacking IPM. Each ABM destroys one incoming IPM.`,
      },
      10: {
        defense_name: 'Interplanetary Missiles',
        defense_cost: [
          {
            metal: 12500,
            crystal: 2500,
            deuterium: 10000,
          },
        ],
        defense_performance: [
          {
            structural_integrity: 15000,
            shield_power: 1,
            weapon_power: 12000,
          },
        ],
        defense_description: `Interplanetary Missiles (IPM) are your offensive weapon to destroy the defences of your target. Using state of the art tracking technology, each missile targets a certain number of defences for destruction. Tipped with an anti-matter bomb, they deliver a destructive force so severe that destroyed shields and defences cannot be repaired. The only way to counter these missiles is with ABMs.`,
      },
    },
  },
]
