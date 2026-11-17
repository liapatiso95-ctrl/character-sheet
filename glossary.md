# Glossary

Reference data for the character sheet and the DM screen.
Each entry is a `####` heading, optional `**Field:** value` lines, a blank line, then the text.
The `**Tag:**` field decides which reference panel an entry belongs to.
Rule, Condition and Tool entries become clickable wherever their name appears in text. Optional fields:
`**Link:** no` (never link) or `**Link:** yes` (link an entry of another tag),
`**Also:** a, b` (other spellings that link to the entry),
`**Match:** exact` (only as capitalised here), `any` (any letter case), `action` (only before the word "action") or `mid` (capitalised, but not as the first word of a sentence unless "action" follows).
By default one-word names match `exact`, longer names `any`, and Action entries `mid`.

## Conditions

#### Blinded
**Tag:** Condition
**Source:** p361

**Can't See.** You can't see and automatically fail any ability check that requires sight.

**Attacks Affected.** Attack rolls against you have Advantage, and your attack rolls have Disadvantage.

#### Burning
**Tag:** Condition
**Source:** Hazard

**Fire Damage.** A burning creature or object takes 1d4 Fire damage at the start of each of its turns.

**Extinguishing.** As an action, you can extinguish fire on yourself by giving yourself the Prone condition and rolling on the ground.

**Other Ways to End.** The fire also goes out if it is doused, submerged, or suffocated.

#### Charmed
**Tag:** Condition
**Source:** p361

**Can't Harm the Charmer.** You can't attack the charmer or target the charmer with damaging abilities or magical effects.

**Social Advantage.** The charmer has Advantage on any ability check to interact with you socially.

#### Deafened
**Tag:** Condition
**Source:** p365

**Can't Hear.** You can't hear and automatically fail any ability check that requires hearing.

#### Exhaustion
**Tag:** Condition
**Source:** p365

**Exhaustion Levels.** This condition is cumulative. Each time you receive it, you gain 1 Exhaustion level. You die if your Exhaustion level is 6.

**D20 Tests Affected.** When you make a D20 Test the roll is reduced by 2 times your Exhaustion level.

**Speed Reduced.** Your Speed is reduced by a number of feet equal to 5 times your Exhaustion level.

**Removing Exhaustion Levels.** Finishing a Long Rest removes 1 of your Exhaustion levels. When your Exhaustion level reaches 0, the condition ends.

#### Frightened
**Tag:** Condition
**Source:** p367

**Ability Checks and Attacks Affected.** You have Disadvantage on ability checks and attack rolls while the source of fear is within line of sight.

**Can't Approach.** You can't willingly move closer to the source of fear.

#### Grappled
**Tag:** Condition
**Source:** p367

**Speed 0.** Your Speed is 0 and can't increase.

**Attacks Affected.** You have Disadvantage on attack rolls against any target other than the grappler.

**Movable.** The grappler can drag or carry you when it moves, but every foot of movement costs it 1 extra foot unless you are Tiny or two or more sizes smaller than it.

#### Incapacitated
**Tag:** Condition
**Source:** p369

**Inactive.** You can't take any action, Bonus Action, or Reaction.

**No Concentration.** Your Concentration is broken.

**Speechless.** You can't speak.

**Surprised.** If you're Incapacitated when you roll Initiative, you have Disadvantage on the roll.

#### Invisible
**Tag:** Condition
**Source:** p370

**Surprise.** If you're Invisible when you roll Initiative, you have Advantage on the roll.

**Concealed.** You aren't affected by any effect that requires its target to be seen unless the effect's creator can somehow see you. Any equipment you are wearing or carrying is also concealed.

**Attacks Affected.** Attack rolls against you have Disadvantage, and your attack rolls have Advantage. If a creature can somehow see you, you don't gain this benefit against that creature.

#### Paralyzed
**Tag:** Condition
**Source:** p371

**Incapacitated.** You have the Incapacitated condition.

**Speed 0.** Your Speed is 0 and can't increase.

**Saving Throws Affected.** You automatically fail Strength and Dexterity saving throws.

**Attacks Affected.** Attack rolls against you have Advantage.

**Automatic Critical Hits.** Any attack roll that hits you is a Critical Hit if the attacker is within 5 feet of you.

#### Petrified
**Tag:** Condition
**Source:** p372

**Turned to Inanimate Substance.** You are transformed, along with any nonmagical objects you are wearing and carrying, into a solid inanimate substance (usually stone). Your weight increases by a factor of ten, and you cease aging.

**Incapacitated.** You have the Incapacitated condition.

**Speed 0.** Your Speed is 0 and can't increase.

**Attacks Affected.** Attack rolls against you have Advantage.

**Saving Throws Affected.** You automatically fail Strength and Dexterity saving throws.

**Resist Damage.** You have Resistance to all damage.

**Poison Immunity.** You have Immunity to the Poisoned condition.

#### Poisoned
**Tag:** Condition
**Source:** p372

**Ability Checks and Attacks Affected.** You have Disadvantage on attack rolls and ability checks.

#### Prone
**Tag:** Condition
**Source:** p372

**Restricted Movement.** Your only movement options are to crawl or to spend an amount of movement equal to half your Speed (round down) to right yourself and thereby end the condition. If your Speed is 0, you can't right yourself.

**Attacks Affected.** You have Disadvantage on attack rolls. An attack roll against you has Advantage if the attacker is within 5 feet of you. Otherwise, that attack roll has Disadvantage.

#### Restrained
**Tag:** Condition
**Source:** p373

**Speed 0.** Your Speed is 0 and can't increase.

**Attacks Affected.** Attack rolls against you have Advantage, and your attack rolls have Disadvantage.

**Saving Throws Affected.** You have Disadvantage on Dexterity saving throws.

#### Stunned
**Tag:** Condition
**Source:** p376

**Incapacitated.** You have the Incapacitated condition.

**Saving Throws Affected.** You automatically fail Strength and Dexterity saving throws.

**Attacks Affected.** Attack rolls against you have Advantage.

#### Unconscious
**Tag:** Condition
**Source:** p376

**Inert.** You have the Incapacitated and Prone conditions, and you drop whatever you're holding. When this condition ends, you remain Prone.

**Speed 0.** Your Speed is 0 and can't increase.

**Attacks Affected.** Attack rolls against you have Advantage.

**Saving Throws Affected.** You automatically fail Strength and Dexterity saving throws.

**Automatic Critical Hits.** Any attack roll that hits you is a Critical Hit if the attacker is within 5 feet of you.

**Unaware.** You're unaware of your surroundings.

## Weapons

#### Club
**Tag:** Weapon
**Group:** Simple Melee
**Damage:** 1d4 Bludgeoning
**Properties:** Light
**Mastery:** Slow
**Weight:** 2 lb.
**Cost:** 1 SP

#### Dagger
**Tag:** Weapon
**Group:** Simple Melee
**Damage:** 1d4 Piercing
**Properties:** Finesse, Light, Thrown (Range 20/60)
**Mastery:** Nick
**Weight:** 1 lb.
**Cost:** 2 GP

#### Greatclub
**Tag:** Weapon
**Group:** Simple Melee
**Damage:** 1d8 Bludgeoning
**Properties:** Two-Handed
**Mastery:** Push
**Weight:** 10 lb.
**Cost:** 2 SP

#### Handaxe
**Tag:** Weapon
**Group:** Simple Melee
**Damage:** 1d6 Slashing
**Properties:** Light, Thrown (Range 20/60)
**Mastery:** Vex
**Weight:** 2 lb.
**Cost:** 5 GP

#### Javelin
**Tag:** Weapon
**Group:** Simple Melee
**Damage:** 1d6 Piercing
**Properties:** Thrown (Range 30/120)
**Mastery:** Slow
**Weight:** 2 lb.
**Cost:** 5 SP

#### Light Hammer
**Tag:** Weapon
**Group:** Simple Melee
**Damage:** 1d4 Bludgeoning
**Properties:** Light, Thrown (Range 20/60)
**Mastery:** Nick
**Weight:** 2 lb.
**Cost:** 2 GP

#### Mace
**Tag:** Weapon
**Group:** Simple Melee
**Damage:** 1d6 Bludgeoning
**Properties:** —
**Mastery:** Sap
**Weight:** 4 lb.
**Cost:** 5 GP

#### Quarterstaff
**Tag:** Weapon
**Group:** Simple Melee
**Damage:** 1d6 Bludgeoning
**Properties:** Versatile (1d8)
**Mastery:** Topple
**Weight:** 4 lb.
**Cost:** 2 SP

#### Sickle
**Tag:** Weapon
**Group:** Simple Melee
**Damage:** 1d4 Slashing
**Properties:** Light
**Mastery:** Nick
**Weight:** 2 lb.
**Cost:** 1 GP

#### Spear
**Tag:** Weapon
**Group:** Simple Melee
**Damage:** 1d6 Piercing
**Properties:** Thrown (Range 20/60), Versatile (1d8)
**Mastery:** Sap
**Weight:** 3 lb.
**Cost:** 1 GP

#### Dart
**Tag:** Weapon
**Group:** Simple Ranged
**Damage:** 1d4 Piercing
**Properties:** Finesse, Thrown (Range 20/60)
**Mastery:** Vex
**Weight:** 1/4 lb.
**Cost:** 5 CP

#### Light Crossbow
**Tag:** Weapon
**Group:** Simple Ranged
**Damage:** 1d8 Piercing
**Properties:** Ammunition (Range 80/320; Bolt), Loading, Two-Handed
**Mastery:** Slow
**Weight:** 5 lb.
**Cost:** 25 GP

#### Shortbow
**Tag:** Weapon
**Group:** Simple Ranged
**Damage:** 1d6 Piercing
**Properties:** Ammunition (Range 80/320; Arrow), Two-Handed
**Mastery:** Vex
**Weight:** 2 lb.
**Cost:** 25 GP

#### Sling
**Tag:** Weapon
**Group:** Simple Ranged
**Damage:** 1d4 Bludgeoning
**Properties:** Ammunition (Range 30/120; Bullet)
**Mastery:** Slow
**Weight:** —
**Cost:** 1 SP

#### Battleaxe
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d8 Slashing
**Properties:** Versatile (1d10)
**Mastery:** Topple
**Weight:** 4 lb.
**Cost:** 10 GP

#### Flail
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d8 Bludgeoning
**Properties:** —
**Mastery:** Sap
**Weight:** 2 lb.
**Cost:** 10 GP

#### Glaive
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d10 Slashing
**Properties:** Heavy, Reach, Two-Handed
**Mastery:** Graze
**Weight:** 6 lb.
**Cost:** 20 GP

#### Greataxe
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d12 Slashing
**Properties:** Heavy, Two-Handed
**Mastery:** Cleave
**Weight:** 7 lb.
**Cost:** 30 GP

#### Greatsword
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 2d6 Slashing
**Properties:** Heavy, Two-Handed
**Mastery:** Graze
**Weight:** 6 lb.
**Cost:** 50 GP

#### Halberd
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d10 Slashing
**Properties:** Heavy, Reach, Two-Handed
**Mastery:** Cleave
**Weight:** 6 lb.
**Cost:** 20 GP

#### Lance
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d10 Piercing
**Properties:** Heavy, Reach, Two-Handed (unless mounted)
**Mastery:** Topple
**Weight:** 6 lb.
**Cost:** 10 GP

#### Longsword
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d8 Slashing
**Properties:** Versatile (1d10)
**Mastery:** Sap
**Weight:** 3 lb.
**Cost:** 15 GP

#### Maul
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 2d6 Bludgeoning
**Properties:** Heavy, Two-Handed
**Mastery:** Topple
**Weight:** 10 lb.
**Cost:** 10 GP

#### Morningstar
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d8 Piercing
**Properties:** —
**Mastery:** Sap
**Weight:** 4 lb.
**Cost:** 15 GP

#### Pike
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d10 Piercing
**Properties:** Heavy, Reach, Two-Handed
**Mastery:** Push
**Weight:** 18 lb.
**Cost:** 5 GP

#### Rapier
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d8 Piercing
**Properties:** Finesse
**Mastery:** Vex
**Weight:** 2 lb.
**Cost:** 25 GP

#### Scimitar
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d6 Slashing
**Properties:** Finesse, Light
**Mastery:** Nick
**Weight:** 3 lb.
**Cost:** 25 GP

#### Shortsword
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d6 Piercing
**Properties:** Finesse, Light
**Mastery:** Vex
**Weight:** 2 lb.
**Cost:** 10 GP

#### Trident
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d8 Piercing
**Properties:** Thrown (Range 20/60), Versatile (1d10)
**Mastery:** Topple
**Weight:** 4 lb.
**Cost:** 5 GP

#### Warhammer
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d8 Bludgeoning
**Properties:** Versatile (1d10)
**Mastery:** Push
**Weight:** 5 lb.
**Cost:** 15 GP

#### War Pick
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d8 Piercing
**Properties:** Versatile (1d10)
**Mastery:** Sap
**Weight:** 2 lb.
**Cost:** 5 GP

#### Whip
**Tag:** Weapon
**Group:** Martial Melee
**Damage:** 1d4 Slashing
**Properties:** Finesse, Reach
**Mastery:** Slow
**Weight:** 3 lb.
**Cost:** 2 GP

#### Blowgun
**Tag:** Weapon
**Group:** Martial Ranged
**Damage:** 1 Piercing
**Properties:** Ammunition (Range 25/100; Needle), Loading
**Mastery:** Vex
**Weight:** 1 lb.
**Cost:** 10 GP

#### Hand Crossbow
**Tag:** Weapon
**Group:** Martial Ranged
**Damage:** 1d6 Piercing
**Properties:** Ammunition (Range 30/120; Bolt), Light, Loading
**Mastery:** Vex
**Weight:** 3 lb.
**Cost:** 75 GP

#### Heavy Crossbow
**Tag:** Weapon
**Group:** Martial Ranged
**Damage:** 1d10 Piercing
**Properties:** Ammunition (Range 100/400; Bolt), Heavy, Loading, Two-Handed
**Mastery:** Push
**Weight:** 18 lb.
**Cost:** 50 GP

#### Longbow
**Tag:** Weapon
**Group:** Martial Ranged
**Damage:** 1d8 Piercing
**Properties:** Ammunition (Range 150/600; Arrow), Heavy, Two-Handed
**Mastery:** Slow
**Weight:** 2 lb.
**Cost:** 50 GP

#### Musket
**Tag:** Weapon
**Group:** Martial Ranged
**Damage:** 1d12 Piercing
**Properties:** Ammunition (Range 40/120; Bullet), Loading, Two-Handed
**Mastery:** Slow
**Weight:** 10 lb.
**Cost:** 500 GP

#### Pistol
**Tag:** Weapon
**Group:** Martial Ranged
**Damage:** 1d10 Piercing
**Properties:** Ammunition (Range 30/90; Bullet), Loading
**Mastery:** Vex
**Weight:** 3 lb.
**Cost:** 250 GP

## Weapon Properties

#### Ammunition
**Tag:** Weapon Property

You can use a weapon that has the Ammunition property to make a ranged attack only if you have ammunition to fire from it. The type of ammunition required is specified with the weapon's range. Each attack expends one piece of ammunition. Drawing the ammunition is part of the attack (you need a free hand to load a one-handed weapon). After a fight, you can spend 1 minute to recover half the ammunition (round down) you used in the fight; the rest is lost.

#### Finesse
**Tag:** Weapon Property

When making an attack with a Finesse weapon, use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.

#### Heavy
**Tag:** Weapon Property

You have Disadvantage on attack rolls with a Heavy weapon if it's a Melee weapon and your Strength score isn't at least 13 or if it's a Ranged weapon and your Dexterity score isn't at least 13.

#### Light
**Tag:** Weapon Property

When you take the Attack action on your turn and attack with a Light weapon, you can make one extra attack as a Bonus Action later on the same turn. That extra attack must be made with a different Light weapon, and you don't add your ability modifier to the extra attack's damage unless that modifier is negative. For example, you can attack with a Shortsword in one hand and a Dagger in the other using the Attack action and a Bonus Action, but you don't add your Strength or Dexterity modifier to the damage roll of the Bonus Action unless that modifier is negative.

#### Loading
**Tag:** Weapon Property

You can fire only one piece of ammunition from a Loading weapon when you use an action, a Bonus Action, or a Reaction to fire it, regardless of the number of attacks you can normally make.

#### Range
**Tag:** Weapon Property

A Range weapon has a range in parentheses after the Ammunition or Thrown property. The range lists two numbers. The first is the weapon's normal range in feet, and the second is the weapon's long range. When attacking a target beyond normal range, you have Disadvantage on the attack roll. You can't attack a target beyond the long range.

#### Reach
**Tag:** Weapon Property

A Reach weapon adds 5 feet to your reach when you attack with it, as well as when determining your reach for Opportunity Attacks with it.

#### Thrown
**Tag:** Weapon Property

If a weapon has the Thrown property, you can throw the weapon to make a ranged attack, and you can draw that weapon as part of the attack. If the weapon is a Melee weapon, use the same ability modifier for the attack and damage rolls that you use for a melee attack with that weapon.

#### Two-Handed
**Tag:** Weapon Property

A Two-Handed weapon requires two hands when you attack with it.

#### Versatile
**Tag:** Weapon Property

A Versatile weapon can be used with one or two hands. A damage value in parentheses appears with the property. The weapon deals that damage when used with two hands to make a melee attack.

## Weapon Mastery

#### Cleave
**Tag:** Weapon Mastery

If you hit a creature with a melee attack roll using this weapon, you can make a melee attack roll with the weapon against a second creature within 5 feet of the first that is also within your reach. On a hit, the second creature takes the weapon's damage, but don't add your ability modifier to that damage unless that modifier is negative. You can make this extra attack only once per turn.

#### Graze
**Tag:** Weapon Mastery

If your attack roll with this weapon misses a creature, you can deal damage to that creature equal to the ability modifier you used to make the attack roll. This damage is the same type dealt by the weapon, and the damage can be increased only by increasing the ability modifier.

#### Nick
**Tag:** Weapon Mastery

When you make the extra attack of the Light property, you can make it as part of the Attack action instead of as a Bonus Action. You can make this extra attack only once per turn.

#### Push
**Tag:** Weapon Mastery

If you hit a creature with this weapon, you can push the creature up to 10 feet straight away from yourself if it is Large or smaller.

#### Sap
**Tag:** Weapon Mastery

If you hit a creature with this weapon, that creature has Disadvantage on its next attack roll before the start of your next turn.

#### Slow
**Tag:** Weapon Mastery

If you hit a creature with this weapon and deal damage to it, you can reduce its Speed by 10 feet until the start of your next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn't exceed 10 feet.

#### Topple
**Tag:** Weapon Mastery

If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.

#### Vex
**Tag:** Weapon Mastery

If you hit a creature with this weapon and deal damage to the creature, you have Advantage on your next attack roll against that creature before the end of your next turn.

## Armor

#### Padded
**Tag:** Armor
**Group:** Light Armor
**AC:** 11 + Dex modifier
**Strength:** —
**Stealth:** Disadvantage
**Weight:** 8 lb.
**Cost:** 5 GP

#### Leather
**Tag:** Armor
**Group:** Light Armor
**AC:** 11 + Dex modifier
**Strength:** —
**Stealth:** —
**Weight:** 10 lb.
**Cost:** 10 GP

#### Studded Leather
**Tag:** Armor
**Group:** Light Armor
**AC:** 12 + Dex modifier
**Strength:** —
**Stealth:** —
**Weight:** 13 lb.
**Cost:** 45 GP

#### Hide
**Tag:** Armor
**Group:** Medium Armor
**AC:** 12 + Dex modifier (max 2)
**Strength:** —
**Stealth:** —
**Weight:** 12 lb.
**Cost:** 10 GP

#### Chain Shirt
**Tag:** Armor
**Group:** Medium Armor
**AC:** 13 + Dex modifier (max 2)
**Strength:** —
**Stealth:** —
**Weight:** 20 lb.
**Cost:** 50 GP

#### Scale Mail
**Tag:** Armor
**Group:** Medium Armor
**AC:** 14 + Dex modifier (max 2)
**Strength:** —
**Stealth:** Disadvantage
**Weight:** 45 lb.
**Cost:** 50 GP

#### Breastplate
**Tag:** Armor
**Group:** Medium Armor
**AC:** 14 + Dex modifier (max 2)
**Strength:** —
**Stealth:** —
**Weight:** 20 lb.
**Cost:** 400 GP

#### Half Plate Armor
**Tag:** Armor
**Group:** Medium Armor
**AC:** 15 + Dex modifier (max 2)
**Strength:** —
**Stealth:** Disadvantage
**Weight:** 40 lb.
**Cost:** 750 GP

#### Ring Mail
**Tag:** Armor
**Group:** Heavy Armor
**AC:** 14
**Strength:** —
**Stealth:** Disadvantage
**Weight:** 40 lb.
**Cost:** 30 GP

#### Chain Mail
**Tag:** Armor
**Group:** Heavy Armor
**AC:** 16
**Strength:** Str 13
**Stealth:** Disadvantage
**Weight:** 55 lb.
**Cost:** 75 GP

#### Splint Armor
**Tag:** Armor
**Group:** Heavy Armor
**AC:** 17
**Strength:** Str 15
**Stealth:** Disadvantage
**Weight:** 60 lb.
**Cost:** 200 GP

#### Plate Armor
**Tag:** Armor
**Group:** Heavy Armor
**AC:** 18
**Strength:** Str 15
**Stealth:** Disadvantage
**Weight:** 65 lb.
**Cost:** 1,500 GP

#### Shield
**Tag:** Armor
**Group:** Shield
**AC:** +2
**Strength:** —
**Stealth:** —
**Weight:** 6 lb.
**Cost:** 10 GP

## Donning and Doffing Armor

#### Light Armor
**Tag:** Donning and Doffing
**Don:** 1 minute
**Doff:** 1 minute

#### Medium Armor
**Tag:** Donning and Doffing
**Don:** 5 minutes
**Doff:** 1 minute

#### Heavy Armor
**Tag:** Donning and Doffing
**Don:** 10 minutes
**Doff:** 5 minutes

#### Shield
**Tag:** Donning and Doffing
**Don:** 1 action (Utilize)
**Doff:** 1 action (Utilize)

## Armor Rules

#### Armor Training
**Tag:** Armor Rule

Anyone can put on a suit of armor or strap a Shield to an arm, but only those with training can use them effectively. You gain a benefit from armor or a Shield only if you have training with it. If you wear armor or use a Shield you lack training with, you have Disadvantage on any D20 Test that involves Strength or Dexterity, and you can't cast spells.

#### Armor Class
**Tag:** Armor Rule

Armor determines your base Armor Class. Light armor adds your full Dexterity modifier; Medium armor adds your Dexterity modifier, to a maximum of +2; Heavy armor adds no Dexterity modifier. A Shield adds +2 to your AC and requires a free hand.

#### One Armor at a Time
**Tag:** Armor Rule

You can wear only one suit of armor at a time and benefit from only one Shield at a time.

#### Strength Requirement
**Tag:** Armor Rule

If the table shows a Strength score for a suit of armor, the armor reduces your Speed by 10 feet if your Strength score is lower than that number.

#### Stealth
**Tag:** Armor Rule

If the table shows "Disadvantage" in the Stealth column, you have Disadvantage on Dexterity (Stealth) checks while wearing that armor.

#### Donning and Doffing
**Tag:** Armor Rule

The time it takes to don or doff armor depends on its category, as shown in the Donning and Doffing Armor table. Donning a Shield or taking it off is a Utilize action.

## Tools

#### Alchemist's Supplies
**Tag:** Tool

Artisan's Tools · 50 gp · 8 lb · Ability: Intelligence

Alchemist's supplies enable a character to produce useful concoctions, such as acid or alchemist's fire.

Components. Two glass beakers, a metal frame to hold a beaker over a flame, a glass stirring rod, a small mortar and pestle, and a pouch of common alchemical ingredients (salt, powdered iron, purified water).

Utilize (2024). Identify a substance (DC 15), or start a fire (DC 15).

Sample DCs (2014). Puff of thick smoke 10 · Identify a poison 10 · Identify a substance 15 · Start a fire 15 · Neutralize acid 20.

Craft (2024). Acid, Alchemist's Fire, Component Pouch, Oil, Paper, Perfume.

Examples of Advantage on a Roll

Arcana. Unlock more information on Arcana checks involving potions and similar materials.

Investigation. Additional insight into any chemicals or substances used in an area.

Tool Features

Alchemical Crafting (2014). Spend money to collect raw materials (1 lb per 50 gp). As part of a long rest, make one dose of acid, alchemist's fire, antitoxin, oil, perfume, or soap; subtract half the created item's value from your raw materials.

#### Brewer's Supplies
**Tag:** Tool

Artisan's Tools · 20 gp · 9 lb · Ability: Intelligence

Brewing produces beer and also purifies water. Takes weeks of fermentation but only a few hours of work.

Components. A large glass jug, a quantity of hops, a siphon, and several feet of tubing.

Utilize (2024). Detect poisoned drink (DC 15), or identify alcohol (DC 10).

Sample DCs (2014). Detect poison/impurities in a drink 10 · Identify alcohol 15 · Ignore effects of alcohol 20.

Craft (2024). Antitoxin.

Examples of Advantage on a Roll

History. Additional insight on History checks concerning events involving alcohol.

Medicine. Insight when treating alcohol poisoning or using alcohol to dull pain.

Persuasion. Ply someone with drink to mellow their mood.

Tool Features

Potable Water (2014). Purify up to 6 gallons of water on a long rest, or 1 gallon on a short rest.

#### Calligrapher's Supplies
**Tag:** Tool

Artisan's Tools · 10 gp · 5 lb · Ability: Dexterity

Calligraphy treats writing as a delicate, beautiful art, hard to forge.

Components. Ink, a dozen sheets of parchment, and three quills.

Utilize (2024). Write text with impressive flourishes that guard against forgery (DC 15).

Sample DCs (2014). Identify writer of nonmagical script 10 · Determine writer's state of mind 15 · Spot forged text 15 · Forge a signature 20.

Craft (2024). Ink, Spell Scroll.

Examples of Advantage on a Roll

Arcana. Aid in identifying who wrote a script of a magical nature.

History. Augment checks to analyze or investigate ancient writings, scrolls, runes, or frescoes.

Tool Features

Decipher Treasure Map (2014). Expertise examining maps — determine a map's age, hidden messages, or similar facts.

#### Carpenter's Tools
**Tag:** Tool

Artisan's Tools · 8 gp · 6 lb · Ability: Strength

Skill at carpentry enables building wooden structures — a house, shack, cabinet, or similar.

Components. A saw, hammer, nails, hatchet, square, ruler, adze, plane, and chisel.

Utilize (2024). Seal or pry open a door or container (DC 20).

Sample DCs (2014). Build a simple structure 10 · Design a complex structure 15 · Find a weak point in a wooden wall 15 · Pry apart a door 20.

Craft (2024). Club, Greatclub, Quarterstaff, Barrel, Chest, Ladder, Pole, Portable Ram, Torch.

Examples of Advantage on a Roll

History. Identify the use and origin of wooden buildings and large wooden objects.

Investigation. Insight inspecting wooden structures; you know tricks that conceal areas.

Perception. Spot irregularities in wooden walls or floors (trap doors, secret passages).

Stealth. Assess weak spots in a wooden floor to avoid creaks.

Tool Features

Fortify (2014). 1 minute + materials to make a door or window harder to force (DC to open +5).

Temporary Shelter (2014). As part of a long rest, build a lean-to that collapses 1d3 days later.

#### Cartographer's Tools
**Tag:** Tool

Artisan's Tools · 15 gp · 6 lb · Ability: Wisdom

Create accurate maps, from mountain ranges to dungeon levels.

Components. A quill, ink, parchment, a pair of compasses, calipers, and a ruler.

Utilize (2024). Draft a map of a small area (DC 15).

Sample DCs (2014). Determine a map's age and origin 10 · Estimate direction/distance to a landmark 15 · Discern a map is fake 15 · Fill in a missing part 20.

Craft (2024). Map.

Examples of Advantage on a Roll

Arcana, History, Religion. Unearth detailed information — spot hidden messages, identify when a map was made, etc.

Nature. Answer questions relating to surrounding terrain.

Survival. Find paths to civilization, predict settlements, avoid getting lost.

Tool Features

Craft a Map (2014). Draw a map as you travel, in addition to other activity.

#### Cobbler's Tools
**Tag:** Tool

Artisan's Tools · 5 gp · 5 lb · Ability: Dexterity

A good pair of boots sees a character across rugged wilderness and deadly dungeons.

Components. A hammer, awl, knife, shoe stand, cutter, spare leather, and thread.

Utilize (2024). Modify footwear to give Advantage on the wearer's next Dexterity (Acrobatics) check (DC 10).

Sample DCs (2014). Determine a shoe's age and origin 10 · Find a hidden compartment in a boot heel 15.

Craft (2024). Climber's Kit.

Examples of Advantage on a Roll

Arcana, History. Identify magical properties or history of enchanted boots.

Investigation. Learn where someone recently visited by examining wear and dirt on shoes.

Tool Features

Maintain Shoes (2014). On a long rest, repair companions' shoes; for 24 hours up to six creatures can travel up to 10 hours/day without exhaustion saves.

Craft Hidden Compartment (2014). 8 hours of work adds a compartment (up to 3×1×1 in) to a pair of shoes.

#### Cook's Utensils
**Tag:** Tool

Artisan's Tools · 1 gp · 8 lb · Ability: Wisdom

With a cook along, meals are much better than hardtack and dried fruit.

Components. A metal pot, knives, forks, a stirring spoon, and a ladle.

Utilize (2024). Improve food's flavor (DC 10), or detect spoiled or poisoned food (DC 15).

Sample DCs (2014). Create a typical meal 10 · Duplicate a meal 10 · Spot poison/impurities in food 15 · Create a gourmet meal 15.

Craft (2024). Rations.

Examples of Advantage on a Roll

History. Assess social patterns in a culture's eating habits.

Medicine. Transform bitter or sour medicine into a pleasing concoction.

Survival. Make do with scavenged ingredients others couldn't use.

Tool Features

Prepare Meals (2014). As part of a short rest, you and up to five creatures regain 1 extra hit point per Hit Die spent, given food and your utensils.

#### Disguise Kit
**Tag:** Tool

Tool · 25 gp · 3 lb · Ability: Charisma

Adopt a false identity.

Components. Cosmetics, hair dye, small props, and a few pieces of clothing.

Utilize (2024). Apply makeup (DC 10).

Sample DCs (2014). Cover injuries/marks 10 · Spot a disguise on someone else 15 · Copy a humanoid's appearance 20.

Craft (2024). Costume.

Examples of Advantage on a Roll

Deception. A disguise can improve convincing lies.

Intimidation. The right disguise can make you look more fearsome.

Performance. A cunning disguise can enhance a performance.

Persuasion. Disguised as an authority figure, persuasion is more effective.

Tool Features

Create Disguise (2014). As part of a long rest; takes 1 minute to don. Carry only one without drawing attention (each weighs 1 lb). 10 min for moderate changes, 30 min for extensive.

#### Forgery Kit
**Tag:** Tool

Tool · 15 gp · 5 lb · Ability: Dexterity

Duplicate documents and copy a person's seal or signature.

Components. Several inks, parchments and papers, quills, seals and sealing wax, gold and silver leaf, and small tools to sculpt wax.

Utilize (2024). Mimic 10 or fewer words of someone else's handwriting (DC 15), or duplicate a wax seal (DC 20).

Sample DCs (2014). Mimic handwriting 15 · Duplicate a wax seal 20.

Examples of Advantage on a Roll

Arcana. Determine if a magic item is real or fake.

Deception. A well-crafted forgery lends credence to a lie.

History. Create fake historical documents or tell if an old document is authentic.

Investigation. Determine how an object was made and whether it is genuine.

Other Tools. Combine with other tool proficiencies (e.g. cartographer's) for more believable forgeries.

Tool Features

Quick Fake (2014). Short rest: a one-page forged document. Long rest: up to four pages. Your check sets the DC to spot it.

#### Gaming Set
**Tag:** Tool

Cost: 1 sp · Ability: Wisdom

Proficiency applies to one type of game (e.g. Three-Dragon Ante or dice games).

Components. All pieces needed for a specific game — a deck of cards or a board and tokens.

Utilize (2024). Discern whether someone is cheating (DC 10), or win the game (DC 20).

Sample DCs (2014). Catch a player cheating 15 · Gain insight into an opponent's personality 15.

Examples of Advantage on a Roll

History. Knowledge of a game's history and figures connected to it.

Insight. Playing games reveals personality, helping you read lies and mood.

Sleight of Hand. Cheat by swapping pieces, palming cards, or altering a die; or distract for a pickpocket attempt.

#### Glassblower's Tools
**Tag:** Tool

Artisan's Tools · 30 gp · 5 lb · Ability: Intelligence

Shape glass and know the methods used to produce glass objects.

Components. A blowpipe, a small marver, blocks, and tweezers. You need a source of heat.

Utilize (2024). Discern what a glass object held in the past 24 hours (DC 15).

Sample DCs (2014). Identify source of glass 10 · Determine what a glass object once held 20.

Craft (2024). Glass Bottle, Magnifying Glass, Spyglass, Vial.

Examples of Advantage on a Roll

Arcana, History. Examine glass objects such as potion bottles or treasure-hoard glass; residue or deformation can hint at a potion's effects.

Investigation. Aid when clues include broken glass or glass objects.

Tool Features

Identify Weakness (2014). 1 minute of study identifies weak points; damage to a weak spot is doubled.

#### Herbalism Kit
**Tag:** Tool

Tool · 5 gp · 3 lb · Ability: Intelligence

Identify plants and safely collect their useful elements.

Components. Pouches to store herbs, clippers and leather gloves, a mortar and pestle, and several glass jars.

Utilize (2024). Identify a plant (DC 10).

Sample DCs (2014). Find plants 15 · Identify poison 20.

Craft (2024). Antitoxin, Candle, Healer's Kit, Potion of Healing.

Examples of Advantage on a Roll

Arcana. Insight into magical studies dealing with plants and identifying potions.

Investigation. Pick out details and clues in plant-overgrown areas.

Medicine. Treat illnesses and wounds with medicinal plants.

Nature and Survival. Identify plants and spot food in the wild.

Tool Features

Identify Plants (2014). Identify most plants with a quick inspection.

#### Jeweler's Tools
**Tag:** Tool

Artisan's Tools · 25 gp · 2 lb · Ability: Intelligence

Beautify gems and identify precious stones.

Components. A small saw and hammer, files, pliers, and tweezers.

Utilize (2024). Discern a gem's value (DC 15).

Sample DCs (2014). Modify a gem's appearance 15 · Determine a gem's history 20.

Craft (2024). Arcane Focus, Holy Symbol.

Examples of Advantage on a Roll

Arcana. Knowledge of the reputed mystical uses of gems.

Investigation. Pick out clues in jeweled objects.

Tool Features

Identify Gems (2014). Identify gems and determine their value at a glance.

#### Land and Water Vehicles
**Tag:** Tool

Handle, repair, and maintain vehicles of that type. Water-vehicle proficiency also covers sailor's knowledge (the sea, knots, weather).

Sample DCs (2014). Navigate rough terrain/waters 10 · Assess a vehicle's condition 15 · Take a tight corner at high speed 20.

Examples of Advantage on a Roll

Arcana. Uncover lore or determine how a magic vehicle operates.

Investigation, Perception. Notice things others miss when inspecting a vehicle.

Tool Features

Vehicle Handling (2014). While piloting, apply your proficiency bonus to the vehicle's AC and saving throws.

#### Leatherworker's Tools
**Tag:** Tool

Artisan's Tools · 5 gp · 5 lb · Ability: Dexterity

Lore concerning animal hides and leather goods.

Components. A knife, a small mallet, an edger, a hole punch, thread, and leather scraps.

Utilize (2024). Add a design to a leather item (DC 10).

Sample DCs (2014). Modify a leather item's appearance 10 · Determine a leather item's history 20.

Craft (2024). Sling, Whip, Hide Armor, Leather Armor, Studded Leather Armor, Backpack, Crossbow Bolt Case, Map or Scroll Case, Parchment, Pouch, Quiver, Waterskin.

Examples of Advantage on a Roll

Arcana. Insight inspecting magic items crafted from leather (boots, some cloaks).

Investigation. Insight studying leather items or related clues.

Tool Features

Identify Hides (2014). Determine the source of leather and techniques used (e.g. dwarven vs halfling methods).

#### Mason's Tools
**Tag:** Tool

Artisan's Tools · 10 gp · 8 lb · Ability: Strength

Craft stone and brick structures.

Components. A trowel, hammer, chisel, brushes, and a square.

Utilize (2024). Chisel a symbol or hole in stone (DC 10).

Sample DCs (2014). Chisel a small hole in a stone wall 10 · Find a weak point in a stone wall 15.

Craft (2024). Block and Tackle.

Examples of Advantage on a Roll

History. Identify a stone building's date, purpose, and likely builder.

Investigation. Insight inspecting areas within stone structures.

Perception. Spot irregularities in stone walls or floors (trap doors, secret passages).

Tool Features

Demolition (2014). Spot weak points in brick walls; deal double damage to such structures with weapon attacks.

#### Musical Instrument
**Tag:** Tool

Familiarity with techniques to play an instrument and knowledge of common songs.

Sample DCs (2014). Identify a tune 10 · Improvise a tune 20.

Examples of Advantage on a Roll

History. Recall lore related to your instrument.

Performance. Improve your act by incorporating an instrument.

Tool Features

Compose a Tune (2014). As part of a long rest, compose a new tune and lyrics.

#### Navigator's Tools
**Tag:** Tool

Tool · 25 gp · 2 lb · Ability: Wisdom

Determine a true course by the stars; insight into charts and direction.

Components. A sextant, compass, calipers, ruler, parchment, ink, and a quill.

Utilize (2024). Plot a course (DC 10), or determine position by stargazing (DC 15).

Sample DCs (2014). Plot a course 10 · Discover your position on a nautical chart 15.

Examples of Advantage on a Roll

Survival. Avoid getting lost; insight into likely roads and settlements.

Tool Features

Sighting (2014). Determine your position on a nautical chart and the time of day.

#### Painter's Supplies
**Tag:** Tool

Artisan's Tools · 10 gp · 5 lb · Ability: Wisdom

Paint and draw, with an understanding of art history.

Components. An easel, canvas, paints, brushes, charcoal sticks, and a palette.

Utilize (2024). Paint a recognizable image of something you've seen (DC 10).

Sample DCs (2014). Paint an accurate portrait 10 · Create a painting with a hidden message 20.

Craft (2024). Druidic Focus, Holy Symbol.

Examples of Advantage on a Roll

Arcana, History, Religion. Uncover lore attached to a work of art.

Investigation, Perception. Insight when inspecting a painting or visual art.

Tool Features

Painting and Drawing (2014). As part of a short or long rest, produce a simple work of art or a quick copy.

#### Poisoner's Kit
**Tag:** Tool

Tool · 50 gp · 2 lb · Ability: Intelligence

Apply and create poisons, and treat them.

Components. Glass vials, a mortar and pestle, chemicals, and a glass stirring rod.

Utilize (2024). Detect a poisoned object (DC 10).

Sample DCs (2014). Spot a poisoned object 10 · Determine the effects of a poison 20.

Craft (2024). Basic Poison.

Examples of Advantage on a Roll

History. Recall facts about infamous poisonings.

Investigation, Perception. Edge inspecting poisoned objects or poison-related events.

Medicine. Added insight treating a poison victim.

Nature, Survival. Lore about poisonous plants and animals.

Tool Features

Handle Poison (2014). Handle and apply a poison without risk of exposing yourself.

#### Potter's Tools
**Tag:** Tool

Artisan's Tools · 10 gp · 3 lb · Ability: Intelligence

Create ceramic objects, typically pots and vessels.

Components. Potter's needles, ribs, scrapers, a knife, and calipers.

Utilize (2024). Discern what a ceramic object held in the past 24 hours (DC 15).

Sample DCs (2014). Determine what a vessel once held 10 · Create a serviceable pot 15 · Find a weak point in a ceramic object 20.

Craft (2024). Jug, Lamp.

Examples of Advantage on a Roll

History. Identify ceramic objects' age and culture of origin.

Investigation, Perception. Insight inspecting ceramics for clues.

Tool Features

Reconstruction (2014). From shards, determine an object's original form and purpose.

#### Smith's Tools
**Tag:** Tool

Artisan's Tools · 20 gp · 8 lb · Ability: Strength

Work metal — alter shape, repair damage, or work ingots into items.

Components. Hammers, tongs, charcoal, rags, and a whetstone.

Utilize (2024). Pry open a door or container (DC 20).

Sample DCs (2014). Sharpen a dull blade 10 · Repair a suit of armor 15 · Sunder a nonmagical metal object 15.

Craft (2024). Any Melee weapon (except Club, Greatclub, Quarterstaff, Whip), Medium armor (except Hide), Heavy armor, Ball Bearings, Bucket, Caltrops, Chain, Crowbar, Firearm Bullets, Grappling Hook, Iron Pot, Iron Spikes, Sling Bullets.

Examples of Advantage on a Roll

Arcana and History. Insight examining metal objects such as weapons.

Investigation. Spot clues when an investigation involves armor, weapons, or metalwork.

Tool Features

Repair (2014). With tools and an open flame, restore 10 hit points to a damaged metal object per hour of work.

#### Thieves' Tools
**Tag:** Tool

Tool · 25 gp · 1 lb · Ability: Dexterity

Pick locks and foil traps; general knowledge of traps and locks.

Components. A small file, lock picks, a small mirror on a handle, narrow-bladed scissors, and pliers.

Utilize (2024). Pick a lock (DC 15), or disarm a trap (DC 15).

Sample DCs (2014). Pick a lock — Varies · Disable a trap — Varies.

Examples of Advantage on a Roll

History. Insight about locations renowned for their traps.

Investigation and Perception. Insight looking for traps via common tell-tale signs.

Tool Features

Set a Trap (2014). As part of a short rest, create a trap; your check is the DC to discover or disable it.

#### Tinker's Tools
**Tag:** Tool

Artisan's Tools · 50 gp · 10 lb · Ability: Dexterity

Repair many mundane objects — mend clothes, sharpen a sword, patch chain mail.

Components. A variety of hand tools, thread, needles, a whetstone, scraps of cloth and leather, and a small pot of glue.

Utilize (2024). Assemble a Tiny item composed of scrap, which falls apart in 1 minute (DC 20).

Sample DCs (2014). Temporarily repair a disabled device 10 · Repair an item in half the time 15 · Improvise a temporary item from scraps 20.

Craft (2024). Musket, Pistol, Bell, Bullseye Lantern, Flask, Hooded Lantern, Hunting Trap, Lock, Manacles, Mirror, Shovel, Signal Whistle, Tinderbox.

Examples of Advantage on a Roll

History. Determine the age and origin of objects from a few remaining pieces.

Investigation. Learn how a damaged object was damaged and how long ago.

Tool Features

Repair (2014). Restore 10 hit points to a damaged object per hour of work (materials required; metal needs an open flame).

#### Weaver's Tools
**Tag:** Tool

Artisan's Tools · 1 gp · 5 lb · Ability: Dexterity

Create cloth and tailor it into clothing.

Components. Thread, needles, and scraps of cloth. (A loom is too large to transport.)

Utilize (2024). Mend a tear in clothing (DC 10), or sew a Tiny design (DC 10).

Sample DCs (2014). Repurpose cloth 10 · Mend a hole in cloth 10 · Tailor an outfit 15.

Craft (2024). Padded Armor, Basket, Bedroll, Blanket, Fine Clothes, Net, Robe, Rope, Sack, String, Tent, Traveler's Clothes.

Examples of Advantage on a Roll

Arcana, History. Insight examining cloth objects such as cloaks and robes.

Investigation. Spot clues others overlook when examining tapestries, upholstery, or clothing.

Tool Features

Repair (2014). As part of a short rest, repair a single damaged cloth object.

Craft Clothing (2014). With sufficient cloth and thread, create an outfit as part of a long rest.

#### Woodcarver's Tools
**Tag:** Tool

Artisan's Tools · 1 gp · 5 lb · Ability: Dexterity

Craft intricate objects from wood, such as tokens or arrows.

Components. A knife, a gouge, and a small saw.

Utilize (2024). Carve a pattern in wood (DC 10).

Sample DCs (2014). Craft a small wooden figurine 10 · Carve an intricate pattern in wood 15.

Craft (2024). Club, Greatclub, Quarterstaff, Ranged weapons (except Pistol, Musket, Sling), Arcane Focus, Arrows, Bolts, Druidic Focus, Ink Pen, Needles.

Examples of Advantage on a Roll

Arcana, History. Insight examining wooden objects such as figurines or arrows.

Nature. Added insight when you examine trees.

Tool Features

Repair (2014). As part of a short rest, repair a single damaged wooden object.

Craft Arrows (2014). Short rest: up to five arrows. Long rest: up to twenty. Requires wood on hand.

## Languages

#### Common
**Tag:** Language
**Group:** Standard Languages
**Speakers:** Humans and most folk
**Script:** Common

#### Common Sign Language
**Tag:** Language
**Group:** Standard Languages
**Speakers:** Deaf communities, travelers, merchants
**Script:** Hand signs

#### Draconic
**Tag:** Language
**Group:** Standard Languages
**Speakers:** Dragons, dragonborn, kobolds
**Script:** Draconic

#### Dwarvish
**Tag:** Language
**Group:** Standard Languages
**Speakers:** Dwarves
**Script:** Dwarvish

#### Elvish
**Tag:** Language
**Group:** Standard Languages
**Speakers:** Elves
**Script:** Elvish

#### Giant
**Tag:** Language
**Group:** Standard Languages
**Speakers:** Ogres, giants
**Script:** Dwarvish

#### Gnomish
**Tag:** Language
**Group:** Standard Languages
**Speakers:** Gnomes
**Script:** Dwarvish

#### Goblin
**Tag:** Language
**Group:** Standard Languages
**Speakers:** Goblinoids
**Script:** Dwarvish

#### Halfling
**Tag:** Language
**Group:** Standard Languages
**Speakers:** Halflings
**Script:** Common

#### Orc
**Tag:** Language
**Group:** Standard Languages
**Speakers:** Orcs
**Script:** Dwarvish

#### Abyssal
**Tag:** Language
**Group:** Rare Languages
**Speakers:** Demons
**Script:** Infernal

#### Celestial
**Tag:** Language
**Group:** Rare Languages
**Speakers:** Celestials
**Script:** Celestial

#### Deep Speech
**Tag:** Language
**Group:** Rare Languages
**Speakers:** Aberrations (e.g. aboleths, mind flayers)
**Script:** —

#### Druidic
**Tag:** Language
**Group:** Rare Languages
**Speakers:** Druids (secret language)
**Script:** —

#### Infernal
**Tag:** Language
**Group:** Rare Languages
**Speakers:** Devils
**Script:** Infernal

#### Primordial
**Tag:** Language
**Group:** Rare Languages
**Speakers:** Elementals
**Script:** Dwarvish

#### Sylvan
**Tag:** Language
**Group:** Rare Languages
**Speakers:** Fey creatures
**Script:** Elvish

#### Thieves' Cant
**Tag:** Language
**Group:** Rare Languages
**Speakers:** Rogues and criminals (secret language)
**Script:** —

#### Undercommon
**Tag:** Language
**Group:** Rare Languages
**Speakers:** Underdark traders
**Script:** Elvish

#### Aquan
**Tag:** Language
**Group:** Primordial Dialects
**Speakers:** Water elementals
**Script:** Dwarvish

#### Auran
**Tag:** Language
**Group:** Primordial Dialects
**Speakers:** Air elementals
**Script:** Dwarvish

#### Ignan
**Tag:** Language
**Group:** Primordial Dialects
**Speakers:** Fire elementals
**Script:** Dwarvish

#### Terran
**Tag:** Language
**Group:** Primordial Dialects
**Speakers:** Earth elementals
**Script:** Dwarvish

## Language Notes

#### Choosing Languages
**Tag:** Language Note

Your character knows Common and typically two other languages of your choice from the Standard Languages table (or the Rare Languages table, with your DM's permission). Your background and species may grant more.

#### Scripts
**Tag:** Language Note

Some languages share a script. A creature that can read a script can read any language written in it, but it doesn't understand a language it doesn't know.

#### Secret Languages
**Tag:** Language Note

Druidic and Thieves' Cant are secret languages. Druidic is taught only to druids, and Thieves' Cant is a mix of dialect, jargon and code that lets those in the know hide messages in seemingly normal conversation.

#### Primordial Dialects
**Tag:** Language Note

Primordial is spoken in four dialects (Aquan, Auran, Ignan and Terran). Speakers of one dialect can generally understand the others.

#### Telepathy and Sign
**Tag:** Language Note

Telepathy and sign languages let you communicate without sound; a sign language requires you to see (or touch) the signer.

## Rules Glossary

This section includes material from the System Reference Document 5.2.1 (“SRD 5.2.1”) by Wizards of the Coast LLC, available at https://www.dndbeyond.com/srd. The SRD 5.2.1 is licensed under the Creative Commons Attribution 4.0 International License, available at https://creativecommons.org/licenses/by/4.0/legalcode.

#### Glossary Conventions
**Tag:** Rule
**Link:** no

The glossary uses the following conventions:

**Tags in Brackets.** Some entries have a tag in brackets after the entry’s name, as in “Attack [Action].” A tag—Action, Area of Effect, Attitude, Condition, or Hazard—indicates that a rule is part of a family of rules. The tags also have glossary entries.

**“You.”** The game’s rules—in this glossary and elsewhere—often talk about something happening to you in the game world. That “you” refers to the creature or object that the rule applies to in a particular moment of play. For example, the “you” in the Prone condition is a creature that currently has that condition.

**No Obsolete Terms.** The glossary contains definitions of current rules terms only. If you’re looking for a term from an earlier version of the fifth edition rules, consult the index.

**Abbreviations.** The abbreviations listed below appear in this glossary and elsewhere in the rules.

| Abbreviation | Meaning |
|---|---|
| AC | Armor Class |
| C | Concentration |
| CE | Chaotic Evil |
| CG | Chaotic Good |
| Cha. | Charisma |
| CN | Chaotic Neutral |
| Con. | Constitution |
| CP | Copper Piece(s) |
| CR | Challenge Rating |
| DC | Difficulty Class |
| Dex. | Dexterity |
| EP | Electrum Piece(s) |
| GM | Game Master |
| GP | Gold Piece(s) |
| HP | Hit Point(s) |
| Int. | Intelligence |
| LE | Lawful Evil |
| LG | Lawful Good |
| LN | Lawful Neutral |
| M | Material component |
| N | Neutral |
| NE | Neutral Evil |
| NG | Neutral Good |
| NPC | Nonplayer character |
| PB | Proficiency Bonus |
| PP | Platinum Piece(s) |
| R | Ritual |
| S | Somatic component |
| SP | Silver Piece(s) |
| Str. | Strength |
| V | Verbal component |
| Wis. | Wisdom |
| XP | Experience Point(s) |

#### Ability Check
**Tag:** Rule
**Link:** no

An ability check is a D20 Test that represents using one of the six abilities—or a specific skill associated with an ability—to overcome a challenge.

An ability check represents a creature using talent and training to try to overcome a challenge, such as forcing open a stuck door, picking a lock, entertaining a crowd, or deciphering a cipher. The GM and the rules often call for an ability check when a creature attempts something other than an attack that has a chance of meaningful failure. When the outcome is uncertain and narratively interesting, the dice determine the result.

**Ability Modifier**

An ability check is named for the ability modifier it uses: a Strength check, an Intelligence check, and so on. Different ability checks are called for in different situations, depending on which ability is most relevant. See the Ability Check Examples table for examples of each check’s use.

**Ability Check Examples**

| Ability | Make a Check To … |
|---|---|
| Strength | Lift, push, pull, or break something |
| Dexterity | Move nimbly, quickly, or quietly |
| Constitution | Push your body beyond normal limits |
| Intelligence | Reason or remember |
| Wisdom | Notice things in the environment or in creatures’ behavior |
| Charisma | Influence, entertain, or deceive |

**Proficiency Bonus**

Add your Proficiency Bonus to an ability check when the GM determines that a skill or tool proficiency is relevant to the check and you have that proficiency. For example, if a rule refers to a Strength (Acrobatics or Athletics) check, you can add your Proficiency Bonus to the check if you have proficiency in the Acrobatics or Athletics skill. See “Proficiency” later in “Playing the Game” for more information about skill and tool proficiencies.

**Difficulty Class**

The Difficulty Class of an ability check represents the task’s difficulty. The more difficult the task, the higher its DC. The rules provide DCs for certain checks, but the GM ultimately sets them. The Typical Difficulty Classes table presents a range of possible DCs for ability checks.

**Typical Difficulty Classes**

| Task Difficulty | DC |
|---|---|
| Very easy | 5 |
| Easy | 10 |
| Medium | 15 |
| Hard | 20 |
| Very hard | 25 |
| Nearly impossible | 30 |

Ability checks can be key in determining the outcome of a social interaction. Your roleplaying efforts can alter an NPC’s attitude, but there might still be an element of chance if the GM wants dice to play a role in determining an NPC’s response to you. In such situations, the GM will typically ask you to take the Influence action.

Pay attention to your skill proficiencies when thinking of how you will interact with an NPC; use an approach that relies on your group’s skill proficiencies. For example, if the group needs to trick a guard into letting them into a castle, the Rogue who is proficient in Deception should lead the discussion.

#### Ability Score and Modifier
**Tag:** Rule
**Link:** no

A creature has six ability scores—Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma—each of which has a corresponding modifier. Add the modifier when you make a D20 Test with the corresponding ability or when a rule asks you to do so.

#### Action
**Tag:** Rule
**Link:** no

On your turn, you can take one action. Choose which action to take from those below or from the special actions provided by your features. These actions are defined elsewhere in this glossary:

- Attack
- Dash
- Disengage
- Dodge
- Help
- Hide
- Influence
- Magic
- Ready
- Search
- Study
- Utilize

When you do something other than moving or communicating, you typically take an action. The Action table lists the game’s main actions, which are defined in more detail in “Rules Glossary.”

**Actions**

| Action | Summary |
|---|---|
| Attack | Attack with a weapon or an Unarmed Strike. |
| Dash | For the rest of the turn, give yourself extra movement equal to your Speed. |
| Disengage | Your movement doesn’t provoke Opportunity Attacks for the rest of the turn. |
| Dodge | Until the start of your next turn, attack rolls against you have Disadvantage, and you make Dexterity saving throws with Advantage. You lose this benefit if you have the Incapacitated condition or if your Speed is 0. |
| Help | Help another creature’s ability check or attack roll, or administer first aid. |
| Hide | Make a Dexterity (Stealth) check. |
| Influence | Make a Charisma (Deception, Intimidation, Performance, or Persuasion) or Wisdom (Animal Handling) check to alter a creature’s attitude. |
| Magic | Cast a spell, use a magic item, or use a magical feature. |
| Ready | Prepare to take an action in response to a trigger you define. |
| Search | Make a Wisdom (Insight, Medicine, Perception, or Survival) check. |
| Study | Make an Intelligence (Arcana, History, Investigation, Nature, or Religion) check. |
| Utilize | Use a nonmagical object. |

**Skills**

| Skill | Ability | Example Uses |
|---|---|---|
| Acrobatics | Dexterity | Stay on your feet in a tricky situation, or perform an acrobatic stunt. |
| Animal Handling | Wisdom | Calm or train an animal, or get an animal to behave in a certain way. |
| Arcana | Intelligence | Recall lore about spells, magic items, and the planes of existence. |
| Athletics | Strength | Jump farther than normal, stay afloat in rough water, or break something. |
| Deception | Charisma | Tell a convincing lie, or wear a disguise convincingly. |
| History | Intelligence | Recall lore about historical events, people, nations, and cultures. |
| Insight | Wisdom | Discern a person’s mood and intentions. |
| Intimidation | Charisma | Awe or threaten someone into doing what you want. |
| Investigation | Intelligence | Find obscure information in books, or deduce how something works. |
| Medicine | Wisdom | Diagnose an illness, or determine what killed the recently slain. |
| Nature | Intelligence | Recall lore about terrain, plants, animals, and weather. |
| Perception | Wisdom | Using a combination of senses, notice something that’s easy to miss. |
| Performance | Charisma | Act, tell a story, perform music, or dance. |
| Persuasion | Charisma | Honestly and graciously convince someone of something. |
| Religion | Intelligence | Recall lore about gods, religious rituals, and holy symbols. |
| Sleight of Hand | Dexterity | Pick a pocket, conceal a handheld object, or perform legerdemain. |
| Stealth | Dexterity | Escape notice by moving quietly and hiding behind things. |
| Survival | Wisdom | Follow tracks, forage, find a trail, or avoid natural hazards. |

Player characters and monsters can also do things not covered by these actions. Many class features and other abilities provide additional action options, and you can improvise other actions. When you describe an action not detailed elsewhere in the rules, the Game Master tells you whether that action is possible and what kind of D20 Test you need to make, if any.

**One Thing at a Time**

The game uses actions to govern how much you can do at one time. You can take only one action at a time. This principle is most important in combat, as explained in “Combat” later in “Playing the Game.”

Actions can come up in other situations, too: in a social interaction, you can try to Influence a creature or use the Search action to read the creature’s body language, but you can’t do both at the same time. And when you’re exploring a dungeon, you can’t simultaneously use the Search action to look for traps and use the Help action to aid another character who’s trying to open a stuck door (with the Utilize action).

#### Advantage
**Tag:** Rule

If you have Advantage on a D20 Test, roll two d20s, and use the higher roll. A roll can’t be affected by more than one Advantage, and Advantage and Disadvantage on the same roll cancel each other.

#### Adventure
**Tag:** Rule
**Link:** no

An adventure is a series of encounters. A story emerges through playing them.

#### Alignment
**Tag:** Rule
**Link:** no

A creature’s alignment broadly describes its ethical attitudes and ideals. Alignment is a combination of two factors: one identifies morality (good, evil, or neutral), and the other describes attitudes toward order (lawful, chaotic, or neutral). These factors allow for nine possible combinations, such as Lawful Good and Neutral Evil.

#### Ally
**Tag:** Rule
**Link:** no

A creature is your ally if it is a member of your adventuring party, your friend, on your side in combat, or a creature that the rules or the GM designates as your ally.

#### Area of Effect
**Tag:** Rule
**Link:** no

The descriptions of many spells and other features specify that they have an area of effect, which typically has one of six shapes. These shapes are defined elsewhere in this glossary:

- Cone
- Cube
- Cylinder
- Emanation
- Line
- Sphere

An area of effect has a point of origin, a location from which the effect’s energy erupts. The rules for each shape specify how to position its point of origin. If all straight lines extending from the point of origin to a location in the area of effect are blocked, that location isn’t included in the area of effect. To block a line, an obstruction must provide Total Cover.

If the creator of an area of effect places it at an unseen point and an obstruction—such as a wall—is between the creator and that point, the point of origin comes into being on the near side of the obstruction.

#### Armor Class
**Tag:** Rule
**Link:** no

An Armor Class (AC) is the target number for an attack roll. AC represents how difficult it is to hit a target.

Your base AC calculation is 10 plus your Dexterity modifier. If a rule gives you another base AC calculation, you choose which calculation to use; you can’t use more than one.

#### Armor Training
**Tag:** Rule

Armor training allows you to use armor of a certain category without the following drawbacks. If you wear Light, Medium, or Heavy armor and lack training with it, you have Disadvantage on any D20 Test that involves Strength or Dexterity, and you can’t cast spells. If you use a Shield and lack training with it, you don’t gain its AC bonus.

Anyone can don armor or hold a Shield, but only those with training can use them effectively, as explained below. A character’s class and other features determine the character’s armor training. A monster has training with any armor in its stat block.

**Shield**

You gain the Armor Class benefit of a Shield only if you have training with it.

#### Attack
**Tag:** Rule
**Type:** Action
**Match:** action

When you take the Attack action, you can make one attack roll with a weapon or an Unarmed Strike.

**Equipping and Unequipping Weapons.** You can either equip or unequip one weapon when you make an attack as part of this action. You do so either before or after the attack. If you equip a weapon before an attack, you don’t need to use it for that attack. Equipping a weapon includes drawing it from a sheath or picking it up. Unequipping a weapon includes sheathing, stowing, or dropping it.

**Moving between Attacks.** If you move on your turn and have a feature, such as Extra Attack, that gives you more than one attack as part of the Attack action, you can use some or all of that movement to move between those attacks.

#### Attack Roll
**Tag:** Rule
**Link:** no

An attack roll is a D20 Test that represents making an attack with a weapon, an Unarmed Strike, or a spell.

An attack roll determines whether an attack hits a target. An attack roll hits if the roll equals or exceeds the target’s Armor Class. Attack rolls usually occur in battle, described in “Combat” later in “Playing the Game,” but the GM might also ask for an attack roll in other situations, such as an archery competition.

**Ability Modifier**

The Attack Roll Abilities table shows which ability modifier to use for different types of attack rolls.

**Attack Roll Abilities**

| Ability | Attack Type |
|---|---|
| Strength | Melee attack with a weapon or an Unarmed Strike (see “Rules Glossary”) |
| Dexterity | Ranged attack with a weapon |
| Varies | Spell attack (the ability used is determined by the spellcaster’s spellcasting feature, as explained in “Spells”) |

Some features let you use different ability modifiers from those listed. For example, the Finesse property (see “Equipment”) lets you use Strength or Dexterity with a weapon that has that property.

**Proficiency Bonus**

You add your Proficiency Bonus to your attack roll when you attack using a weapon you have proficiency with, as well as when you attack with a spell. See “Proficiency” later in “Playing the Game” for more information about weapon proficiencies.

**Armor Class**

A creature’s Armor Class represents how well the creature avoids being wounded in combat. The AC of a character is determined at character creation (see “Character Creation”), whereas the AC of a monster appears in its stat block.

**Calculating AC.** All creatures start with the same base AC calculation:

**Base AC** = 10 + the creature’s Dexterity modifier

A creature’s AC can then be modified by armor, magic items, spells, and more.

**Only One Base AC.** Some spells and class features give characters a different way to calculate their AC. A character with multiple features that give different ways to calculate AC must choose which one to use; only one base calculation can be in effect for a creature.

**Rolling 20 or 1**

If you roll a 20 on the d20 (called a “natural 20”) for an attack roll, the attack hits regardless of any modifiers or the target’s AC. This is called a Critical Hit (see “Combat” later in “Playing the Game”).

If you roll a 1 on the d20 (a “natural 1”) for an attack roll, the attack misses regardless of any modifiers or the target’s AC.

#### Attitude
**Tag:** Rule
**Link:** no

A monster has a starting attitude toward a player character: Friendly, Hostile, or Indifferent.

#### Attunement
**Tag:** Rule

Some magic items require a creature to form a bond—called Attunement—with them before the creature can use an item’s magical properties. A creature can have Attunement with no more than three magic items at a time.

Some magic items require a creature to form a bond—called Attunement—with them before the creature can use an item’s magical properties. Without becoming attuned to an item that requires Attunement, you gain only its nonmagical benefits unless its description states otherwise. For example, a magic Shield that requires Attunement provides the benefits of a normal Shield if you aren’t attuned to it, but none of its magical properties.

**Attune during a Short Rest**

Attuning to an item requires you to spend a Short Rest focused on only that item while being in physical contact with it (this can’t be the same Short Rest used to learn the item’s properties). This focus can take the form of weapon practice (for a Weapon), meditation (for a Wand), or some other appropriate activity. If the Short Rest is interrupted, the Attunement attempt fails. Otherwise, at the end of the Short Rest, you’re attuned to the magic item and can access its full magical capabilities.

**No More Than Three Items**

You can be attuned to no more than three magic items at a time. Any attempt to attune to a fourth item fails; you must end your Attunement to an item first. Additionally, you can’t attune to more than one copy of an item. For example, you can’t attune to more than one *Ring of Protection* at a time.

**Ending Attunement**

Your Attunement to an item ends if you no longer satisfy the prerequisites for Attunement, if the item has been more than 100 feet away for at least 24 hours, if you die, or if another creature attunes to the item. You can also voluntarily end Attunement by spending another Short Rest focused on the item unless the item is cursed.

#### Blindsight
**Tag:** Rule

If you have Blindsight, you can see within a specific range without relying on physical sight. Within that range, you can see anything that isn’t behind Total Cover even if you have the Blinded condition or are in Darkness. Moreover, in that range, you can see something that has the Invisible condition.

#### Bloodied
**Tag:** Rule

A creature is Bloodied while it has half its Hit Points or fewer remaining.

#### Bonus Action
**Tag:** Rule
**Link:** no

A Bonus Action is a special action that you can take on the same turn that you take an action. You can’t take more than one Bonus Action on a turn, and you have a Bonus Action to take only if a rule explicitly says so.

Various class features, spells, and other abilities let you take an additional action on your turn called a Bonus Action. The Cunning Action feature, for example, allows a Rogue to take a Bonus Action. You can take a Bonus Action only when a special ability, a spell, or another feature of the game states that you can do something as a Bonus Action. You otherwise don’t have a Bonus Action to take.

You can take only one Bonus Action on your turn, so you must choose which Bonus Action to use if you have more than one available.

You choose when to take a Bonus Action during your turn unless the Bonus Action’s timing is specified. Anything that deprives you of your ability to take actions also prevents you from taking a Bonus Action.

#### Breaking Objects
**Tag:** Rule

Objects can be harmed by attacks and by some spells, using the rules below. If an object is exceedingly fragile, the GM may allow a creature to break it automatically with the Attack or Utilize action.

**Armor Class.** The Object Armor Class table suggests ACs for various substances.

**Object Armor Class**

| AC | Substance |
|---|---|
| 11 | Cloth, paper, rope |
| 13 | Crystal, glass, ice |
| 15 | Wood |
| 17 | Stone |
| 19 | Iron, steel |
| 21 | Mithral |
| 23 | Adamantine |

**Hit Points.** An object is destroyed when it has 0 Hit Points. The Object Hit Points table suggests Hit Points for fragile and resilient objects that are Large or smaller. To track Hit Points for a Huge or Gargantuan object, divide it into Large or smaller sections, and track each section’s Hit Points separately. The GM determines whether destroying part of an object causes the whole thing to collapse.

**Object Hit Points**

| Size | Fragile | Resilient |
|---|---|---|
| Tiny (bottle, lock) | 2 (1d4) | 5 (2d4) |
| Small (chest, lute) | 3 (1d6) | 10 (3d6) |
| Medium (barrel, chandelier) | 4 (1d8) | 18 (4d8) |
| Large (cart, dining table) | 5 (1d10) | 27 (5d10) |

**Damage Types and Objects.** Objects have Immunity to Poison and Psychic damage. The GM might decide that some damage types are more or less effective against an object. For example, Bludgeoning damage works well for smashing things but not for cutting. Paper or cloth objects might have Vulnerability to Fire damage.

**Damage Threshold.** Big objects, such as castle walls, often have extra resilience represented by a damage threshold.

**No Ability Scores.** An object lacks ability scores unless a rule assigns scores to the object. Without ability scores, an object can’t make ability checks, and it fails all saving throws.

As an action, you can automatically break or otherwise destroy a fragile, nonmagical object, such as a glass container or a piece of paper. If you try to damage something more resilient, the GM might use the rules on breaking objects in “Rules Glossary.”

#### Bright Light
**Tag:** Rule

Bright Light is normal illumination.

#### Burrow Speed
**Tag:** Rule

A creature that has a Burrow Speed can use that speed to move through sand, earth, mud, or ice. The creature can’t burrow through solid rock unless the creature has a trait that allows it to do so.

#### Campaign
**Tag:** Rule
**Link:** no

A campaign is a series of adventures.

#### Cantrip
**Tag:** Rule
**Link:** no

A cantrip is a level 0 spell, which is cast without a spell slot.

#### Carrying Capacity
**Tag:** Rule

Your size and Strength score determine the maximum weight in pounds that you can carry, as shown in the Carrying Capacity table. The table also shows the maximum weight you can drag, lift, or push.

While dragging, lifting, or pushing weight in excess of the maximum weight you can carry, your Speed can be no more than 5 feet.

**Carrying Capacity**

| Creature Size | Carry | Drag/Lift/Push |
|---|---|---|
| Tiny | Str. × 7.5 lb. | Str. × 15 lb. |
| Small/Medium | Str. × 15 lb. | Str. × 30 lb. |
| Large | Str. × 30 lb. | Str. × 60 lb. |
| Huge | Str. × 60 lb. | Str. × 120 lb. |
| Gargantuan | Str. × 120 lb. | Str. × 240 lb. |

#### Challenge Rating
**Tag:** Rule
**Link:** no

Challenge Rating (CR) summarizes the threat a monster poses to a group of four player characters. Compare a monster’s CR to the characters’ level. If the CR is higher, the monster is likely a danger. If the CR is lower, the monster likely poses little threat. But circumstances and the number of player characters can significantly alter how threatening a monster is in actual play. “Gameplay Toolbox” (“Combat Encounters”) provides guidance to the GM on using CR while planning potential combat encounters.

#### Character Sheet
**Tag:** Rule
**Link:** no

A character sheet is a paper or digital record that you use to track your character’s information.

#### Climbing
**Tag:** Rule

While you’re climbing, each foot of movement costs 1 extra foot (2 extra feet in Difficult Terrain). You ignore this extra cost if you have a Climb Speed and use it to climb.

At the GM’s option, climbing a slippery surface or one with few handholds might require a successful DC 15 Strength (Athletics) check.

#### Climb Speed
**Tag:** Rule

A Climb Speed can be used in place of Speed to traverse a vertical surface without expending the extra movement normally associated with climbing.

#### Concentration
**Tag:** Rule

Some spells and other effects require Concentration to remain active, as specified in their descriptions. If the effect’s creator loses Concentration, the effect ends. If the effect has a maximum duration, the effect’s description specifies how long the creator can concentrate on it: up to 1 minute, 1 hour, or some other duration. The creator can end Concentration at any time (no action required). The following factors break Concentration.

**Another Concentration Effect.** You lose Concentration on an effect the moment you start casting a spell that requires Concentration or activate another effect that requires Concentration.

**Damage.** If you take damage, you must succeed on a Constitution saving throw to maintain Concentration. The DC equals 10 or half the damage taken (round down), whichever number is higher, up to a maximum DC of 30.

**Incapacitated or Dead.** Your Concentration ends if you have the Incapacitated condition or you die.

#### Condition
**Tag:** Rule
**Link:** no

A condition is a temporary game state. The definition of a condition says how it affects its recipient, and various rules define how to end a condition. This glossary defines these conditions:

- Blinded
- Charmed
- Deafened
- Exhaustion
- Frightened
- Grappled
- Incapacitated
- Invisible
- Paralyzed
- Petrified
- Poisoned
- Prone
- Restrained
- Stunned
- Unconscious

A condition doesn’t stack with itself; a recipient either has a condition or doesn’t. The Exhaustion condition is an exception to that rule.

#### Cone
**Tag:** Rule
**Type:** Area of Effect

A Cone is an area of effect that extends in straight lines from a point of origin in a direction its creator chooses. A Cone’s width at any point along its length is equal to that point’s distance from the point of origin. For example, a Cone is 15 feet wide at a point along its length that is 15 feet from the point of origin. The effect that creates a Cone specifies its maximum length.

A Cone’s point of origin isn’t included in the area of effect unless its creator decides otherwise.

#### Cover
**Tag:** Rule
**Also:** Half Cover, Three-Quarters Cover, Total Cover

Cover provides a degree of protection to a target behind it. There are three degrees of cover, each of which provides a different benefit to a target: Half Cover (+2 bonus to AC and Dexterity saving throws), Three-Quarters Cover (+5 bonus to AC and Dexterity saving throws), and Total Cover (can’t be targeted directly). If behind more than one degree of cover, a target benefits only from the most protective degree.

Walls, trees, creatures, and other obstacles can provide cover, making a target more difficult to harm. As detailed in the Cover table, there are three degrees of cover, each of which gives a different benefit to a target.

A target can benefit from cover only when an attack or other effect originates on the opposite side of the cover. If a target is behind multiple sources of cover, only the most protective degree of cover applies; the degrees aren’t added together. For example, if a target is behind a creature that gives Half Cover and a tree trunk that gives Three-Quarters Cover, the target has Three-Quarters Cover.

**Cover**

| Degree | Benefit to Target | Offered By … |
|---|---|---|
| Half | +2 bonus to AC and Dexterity saving throws | Another creature or an object that covers at least half of the target |
| Three-Quarters | +5 bonus to AC and Dexterity saving throws | An object that covers at least three-quarters of the target |
| Total | Can’t be targeted directly | An object that covers the whole target |

#### Crawling
**Tag:** Rule

While you’re crawling, each foot of movement costs 1 extra foot (2 extra feet in Difficult Terrain).

#### Creature
**Tag:** Rule
**Link:** no

Any being in the game, including a player’s character, is a creature.

#### Creature Type
**Tag:** Rule
**Link:** no

Every creature, including every player character, has a tag in the rules that identifies the type of creature it is. Most player characters are of the Humanoid type. These are the game’s creature types:

- Aberration
- Beast
- Celestial
- Construct
- Dragon
- Elemental
- Fey
- Fiend
- Giant
- Humanoid
- Monstrosity
- Ooze
- Plant
- Undead

The types don’t have rules themselves, but some rules in the game affect creatures of certain types in different ways.

#### Critical Hit
**Tag:** Rule
**Also:** Critical Hits

If you roll a 20 on the d20 for an attack roll, you score a Critical Hit, and the attack hits regardless of any modifiers or the target’s AC. A Critical Hit lets you roll extra dice for the attack’s damage against the target. Roll all of the attack’s damage dice twice and add them together. Then add any relevant modifiers.

When you score a Critical Hit, you deal extra damage. Roll the attack’s damage dice twice, add them together, and add any relevant modifiers as normal. For example, if you score a Critical Hit with a Dagger, roll 2d4 for the damage rather than 1d4, and add your relevant ability modifier. If the attack involves other damage dice, such as from the Rogue’s Sneak Attack feature, you also roll those dice twice.

#### Cube
**Tag:** Rule
**Type:** Area of Effect

A Cube is an area of effect that extends in straight lines from a point of origin located anywhere on a face of the Cube. The effect that creates a Cube specifies its size, which is the length of each side.

A Cube’s point of origin isn’t included in the area of effect unless its creator decides otherwise.

#### Curses
**Tag:** Rule
**Also:** Curse
**Match:** exact

Some game effects curse a creature or an object. The effect that confers a curse defines what the curse does. Curses can be removed by the *Remove Curse* and *Greater Restoration* spells or other magic that explicitly ends curses.

A curse typically takes one of the forms detailed below.

**Bestow Curse**

The simplest curses are created by the *Bestow Curse* spell. The effects of such curses are limited and can be ended by the *Remove Curse* spell.

*Bestow Curse* provides useful benchmarks for gauging the potency of other curses. A curse that lasts for 1 minute equates to a level 3 spell, while one that lasts until dispelled equates to a level 9 spell.

**Cursed Creatures**

Some monsters are associated with curses, whether as part of their origins or due to their ability to spread curses—werewolves being a prime example. You decide how a spell like *Remove Curse* affects a creature with accursed origins. For example, you might decide that a mummy was created through a curse and it can be destroyed permanently only by casting *Remove Curse* on its corpse.

**Cursed Magic Items**

Cursed magic items are created deliberately or originate as the result of supernatural events. Such items are detailed in “Magic Items.”

**Narrative Curses**

A curse might manifest during an adventure when a creature’s violation of a taboo warrants supernatural punishment, such as breaking a vow, defiling a tomb, or murdering an innocent. Such a curse can have any effects you design, or it might be a customized version of another type of curse discussed in this section.

A creature affected by such a curse should know why they’re being punished and be able to learn how to end their curse, likely by symbolically righting the wrong they committed. How a spell like *Remove Curse* affects a curse that’s part of your adventure is up to you—the spell might merely suppress the effects of the curse for a time. Regardless, narrative curses should feel like rare, potent magic rooted in the lore of your campaign.

**Environmental Curses**

Some locations are so suffused with evil that anyone who lingers there is burdened with a curse. Demonic Possession is one example of an environmental curse.

**Demonic Possession.** Demonic Possession arises from the chaos and evil of the Abyss and commonly besets creatures that interact with demonic objects or linger in desecrated locations, where demonic spirits await victims.

A creature that becomes the target of Demonic Possession must succeed on a DC 15 Charisma saving throw or be possessed by a bodiless demonic entity. Whenever the possessed creature rolls a 1 on a D20 Test, the demonic entity takes control of the creature and determines the creature’s behavior thereafter. At the end of each of the possessed creature’s later turns, the creature makes a DC 15 Charisma saving throw, regaining control of itself on a success.

After finishing a Long Rest, a creature with Demonic Possession makes a DC 15 Charisma saving throw. On a successful save, the effect ends on the creature. A *Dispel Evil and Good* spell or any magic that removes a curse also ends the effect on it.

#### Cylinder
**Tag:** Rule
**Type:** Area of Effect

A Cylinder is an area of effect that extends in straight lines from a point of origin located at the center of the circular top or bottom of the Cylinder. The effect that creates a Cylinder specifies the radius of the Cylinder’s base and the Cylinder’s height.

A Cylinder’s point of origin is included in the area of effect.

#### D20 Test
**Tag:** Rule
**Link:** no

D20 Tests encompass the three main d20 rolls of the game: ability checks, attack rolls, and saving throws. If something in the game affects D20 Tests, it affects all three of these rolls. The GM determines whether a D20 Test is warranted in a given circumstance.

When the outcome of an action is uncertain, the game uses a d20 roll to determine success or failure. These rolls are called D20 Tests, and they come in three kinds: ability checks, saving throws, and attack rolls. They follow these steps:

**4: Roll 1d20.** You always want to roll high. If the roll has Advantage or Disadvantage (described later in “Playing the Game”), you roll two d20s, but you use the number from only one of them—the higher one if you have Advantage or the lower one if you have Disadvantage.

**5: Add Modifiers.** Add these modifiers to the number rolled on the d20:

- **The Relevant Ability Modifier.** “Playing the Game” and “Rules Glossary” explain which ability modifiers to use for various D20 Tests.
- **Your Proficiency Bonus If Relevant.** Each creature has a Proficiency Bonus, a number added when making a D20 Test that uses something, such as a skill, in which the creature has proficiency. See “Proficiency” later in “Playing the Game.”

- **Circumstantial Bonuses and Penalties.** A class feature, a spell, or another rule might give a bonus or penalty to the die roll.

**6: Compare the Total to a Target Number.** If the total of the d20 and its modifiers equals or exceeds the target number, the D20 Test succeeds. Otherwise, it fails. The Game Master determines target numbers and tells players whether their rolls are successful. The target number for an ability check or a saving throw is called a Difficulty Class (DC). The target number for an attack roll is called an Armor Class (AC), which appears on a character sheet or in a stat block (see “Rules Glossary”).

#### Damage
**Tag:** Rule
**Link:** no

Damage represents harm that causes a creature or an object to lose Hit Points.

#### Damage Roll
**Tag:** Rule
**Link:** no

A damage roll is a die roll, adjusted by any applicable modifiers, that deals damage to a target.

Each weapon, spell, and damaging monster ability specifies the damage it deals. You roll the damage dice, add any modifiers, and deal the damage to your target. If there’s a penalty to the damage, it’s possible to deal 0 damage but not negative damage.

When attacking with a weapon, you add your ability modifier—the same modifier used for the attack roll—to the damage roll. A spell tells you which dice to roll for damage and whether to add any modifiers. Unless a rule says otherwise, you don’t add your ability modifier to a fixed damage amount that doesn’t use a roll, such as the damage of a Blowgun. See “Equipment” for weapons’ damage dice and “Spells” for spells’ damage dice.

#### Damage Threshold
**Tag:** Rule

A creature or an object that has a damage threshold has Immunity to all damage unless it takes an amount of damage from a single attack or effect equal to or greater than its damage threshold, in which case it takes that entire instance of damage. Any damage that fails to meet or exceed the damage threshold is superficial and doesn’t reduce Hit Points. For example, if an object has a damage threshold of 10, the object takes no damage if 9 damage is dealt to it, since that damage fails to exceed the threshold. If the same object is dealt 11 damage, it takes all of that damage.

#### Damage Types
**Tag:** Rule
**Link:** no

Attacks and other harmful effects deal different types of damage. Damage types have no rules of their own, but other rules, such as Resistance, rely on the types. The Damage Types table offers examples to help a GM assign a type to a new effect.

**Damage Types**

| Type | Examples |
|---|---|
| Acid | Corrosive liquids, digestive enzymes |
| Bludgeoning | Blunt objects, constriction, falling |
| Cold | Freezing water, icy blasts |
| Fire | Flames, unbearable heat |
| Force | Pure magical energy |
| Lightning | Electricity |
| Necrotic | Life-draining energy |
| Piercing | Fangs, puncturing objects |
| Poison | Toxic gas, venom |
| Psychic | Mind-rending energy |
| Radiant | Holy energy, searing radiation |
| Slashing | Claws, cutting objects |
| Thunder | Concussive sound |

Each instance of damage has a type, like Fire or Slashing. Damage types are listed in “Rules Glossary” and have no rules of their own, but other rules, such as Resistance, rely on damage types.

#### Darkness
**Tag:** Rule

An area of Darkness is Heavily Obscured.

#### Darkvision
**Tag:** Rule

If you have Darkvision, you can see in Dim Light within a specified range as if it were Bright Light and in Darkness within that range as if it were Dim Light. You discern colors in that Darkness only as shades of gray.

#### Dash
**Tag:** Rule
**Type:** Action
**Match:** exact

When you take the Dash action, you gain extra movement for the current turn. The increase equals your Speed after applying any modifiers. With a Speed of 30 feet, for example, you can move up to 60 feet on your turn if you Dash. If your Speed of 30 feet is reduced to 15 feet, you can move up to 30 feet this turn if you Dash.

If you have a special speed, such as a Fly Speed or Swim Speed, you can use that speed instead of your Speed when you take this action. You choose which speed to use each time you take it.

#### Dead
**Tag:** Rule
**Link:** no

A dead creature has no Hit Points and can’t regain them unless it is first revived by magic such as the *Raise Dead* or *Revivify* spell. When such a spell is cast, the spirit knows who is casting it and can refuse. The spirit of a dead creature has left the body and departed for the Outer Planes, and reviving the creature requires calling the spirit back.

If the creature returns to life, the revival effect determines the creature’s current Hit Points. Unless otherwise stated, the creature returns to life with any conditions, magical contagions, or curses that were affecting it at death if the durations of those effects are still ongoing. If the creature died with any Exhaustion levels, it returns with 1 fewer level. If the creature had Attunement to one or more magic items, it is no longer attuned to them.

#### Death Saving Throw
**Tag:** Rule
**Also:** Death Saving Throws, Death Save, Death Saves

A player character must make a Death Saving Throw (also called a Death Save) if they start their turn with 0 Hit Points.

Whenever you start your turn with 0 Hit Points, you must make a Death Saving Throw to determine whether you creep closer to death or hang on to life. Unlike other saving throws, this one isn’t tied to an ability score. You’re in the hands of fate now.

**Three Successes/Failures.** Roll 1d20. If the roll is 10 or higher, you succeed. Otherwise, you fail. A success or failure has no effect by itself. On your third success, you become Stable (see “Stabilizing a Character” below). On your third failure, you die.

The successes and failures don’t need to be consecutive; keep track of both until you collect three of a kind. The number of both is reset to zero when you regain any Hit Points or become Stable.

**Rolling a 1 or 20.** When you roll a 1 on the d20 for a Death Saving Throw, you suffer two failures. If you roll a 20 on the d20, you regain 1 Hit Point.

**Damage at 0 Hit Points.** If you take any damage while you have 0 Hit Points, you suffer a Death Saving Throw failure. If the damage is from a Critical Hit, you suffer two failures instead. If the damage equals or exceeds your Hit Point maximum, you die.

#### Dehydration
**Tag:** Rule
**Type:** Hazard

A creature requires an amount of water per day based on its size, as shown in the Water Needs per Day table. A creature that drinks less than half the required water for a day gains 1 Exhaustion level at the day’s end. Exhaustion caused by dehydration can’t be removed until the creature drinks the full amount of water required for a day.

**Water Needs per Day**

| Size | Water |
|---|---|
| Tiny | 1/4 gallon |
| Small | 1 gallon |
| Medium | 1 gallon |
| Large | 4 gallons |
| Huge | 16 gallons |
| Gargantuan | 64 gallons |

#### Difficult Terrain
**Tag:** Rule

If a space is Difficult Terrain, every foot of movement in that space costs 1 extra foot. For example, moving 5 feet through Difficult Terrain costs 10 feet of movement. Difficult Terrain isn’t cumulative; either a space is Difficult Terrain or it isn’t.

A space is Difficult Terrain if the space contains any of the following or something similar:

- A creature that isn’t Tiny or your ally
- Furniture that is sized for creatures of your size or larger
- Heavy snow, ice, rubble, or undergrowth
- Liquid that’s between shin- and waist-deep
- A narrow opening sized for a creature one size smaller than you
- A slope of 20 degrees or more

Combatants are often slowed down by Difficult Terrain. Low furniture, rubble, undergrowth, steep stairs, snow, and shallow bogs are examples of Difficult Terrain.

Every foot of movement in Difficult Terrain costs 1 extra foot, even if multiple things in a space count as Difficult Terrain.

#### Difficulty Class
**Tag:** Rule
**Link:** no

A Difficulty Class (DC) is the target number for an ability check or a saving throw.

#### Dim Light
**Tag:** Rule

An area with Dim Light is Lightly Obscured.

#### Disadvantage
**Tag:** Rule

If you have Disadvantage on a D20 Test, roll two d20s and use the lower roll. A roll can’t be affected by more than one Disadvantage, and Advantage and Disadvantage on the same roll cancel each other.

#### Disengage
**Tag:** Rule
**Type:** Action
**Match:** exact

If you take the Disengage action, your movement doesn’t provoke Opportunity Attacks for the rest of the current turn.

#### Dodge
**Tag:** Rule
**Type:** Action
**Match:** exact

If you take the Dodge action, you gain the following benefits: until the start of your next turn, any attack roll made against you has Disadvantage if you can see the attacker, and you make Dexterity saving throws with Advantage.

You lose these benefits if you have the Incapacitated condition or if your Speed is 0.

#### Emanation
**Tag:** Rule
**Type:** Area of Effect

An Emanation is an area of effect that extends in straight lines from a creature or an object in all directions. The effect that creates an Emanation specifies the distance it extends.

An Emanation moves with the creature or object that is its origin unless it is an instantaneous or a stationary effect.

An Emanation’s origin (creature or object) isn’t included in the area of effect unless its creator decides otherwise.

#### Encounter
**Tag:** Rule
**Link:** no

An encounter is a scene in an adventure that is part of at least one of the game’s three pillars: social interaction, exploration, or combat.

#### Enemy
**Tag:** Rule
**Link:** no

A creature is your enemy if it fights against you in combat, actively works to harm you, or is designated as your enemy by the rules or GM.

#### Experience Points
**Tag:** Rule
**Link:** no

As they overcome challenges and complete adventures, characters earn Experience Points (XP), which are awarded by the Game Master. When a character’s XP total crosses certain thresholds, the character’s level increases.

#### Expertise
**Tag:** Rule

Expertise is a feature that enhances your use of a skill proficiency. When you make an ability check with a skill proficiency in which you have Expertise, your Proficiency Bonus is doubled for that check unless the bonus is doubled by another feature.

If you gain Expertise, you gain it in one skill in which you have proficiency. You can’t have Expertise in the same skill proficiency more than once.

#### Falling
**Tag:** Rule
**Type:** Hazard

A creature that falls takes 1d6 Bludgeoning damage at the end of the fall for every 10 feet it fell, to a maximum of 20d6. When the creature lands, it has the Prone condition unless it avoids taking any damage from the fall.

A creature that falls into water or another liquid can use its Reaction to make a DC 15 Strength (Athletics) or Dexterity (Acrobatics) check to hit the surface head or feet first. On a successful check, any damage resulting from the fall is halved.

#### Flying
**Tag:** Rule

A variety of effects allow a creature to fly. While flying, you fall if you have the Incapacitated or Prone condition or your Fly Speed is reduced to 0. You can stay aloft in those circumstances if you can hover.

#### Fly Speed
**Tag:** Rule

A Fly Speed can be used to travel through the air. While you have a Fly Speed, you can stay aloft until you land, fall, or die.

#### Friendly
**Tag:** Rule
**Type:** Attitude

A Friendly creature views you favorably. You have Advantage on an ability check to influence a Friendly creature.

#### Grappling
**Tag:** Rule

A creature can grapple another creature. Characters typically grapple by using an Unarmed Strike. Many monsters have special attacks that allow them to quickly grapple prey. However a grapple is initiated, it follows these rules.

**Grappled Condition.** Successfully grappling a creature gives it the Grappled condition.

**One Grapple per Hand.** A creature must have a hand free to grapple another creature. Some stat blocks and game effects allow a creature to grapple using a tentacle, a maw, or another body part. Whatever part a grappler uses, it can grapple only one creature at a time with that part, and the grappler can’t use that part to target another creature unless it ends the grapple.

**Ending a Grapple.** A Grappled creature can use its action to make a Strength (Athletics) or Dexterity (Acrobatics) check against the grapple’s escape DC, ending the condition on itself on a success. The condition also ends if the grappler has the Incapacitated condition or if the distance between the Grappled target and the grappler exceeds the grapple’s range. In addition, the grappler can release the target at any time (no action required).

#### Hazard
**Tag:** Rule
**Link:** no

A hazard is an environmental danger.

Monsters are the main perils characters face, but other dangers await. “Rules Glossary” defines the following hazards:

- Burning
- Dehydration
- Falling
- Malnutrition
- Suffocation

#### Healing
**Tag:** Rule
**Link:** no

Healing is how you regain Hit Points.

Hit Points can be restored by magic, such as the *Cure Wounds* spell or a *Potion of Healing*, or by a Short or Long Rest (see “Rules Glossary”). When you receive healing, add the restored Hit Points to your current Hit Points. Your Hit Points can’t exceed your Hit Point maximum, so any Hit Points regained in excess of the maximum are lost. For example, if you receive 8 Hit Points of healing and have 14 Hit Points and a Hit Point maximum of 20, you regain 6 Hit Points, not 8.

#### Heavily Obscured
**Tag:** Rule

You have the Blinded condition while trying to see something in a Heavily Obscured space.

#### Help
**Tag:** Rule
**Type:** Action

When you take the Help action, you do one of the following.

**Assist an Ability Check.** Choose one of your skill or tool proficiencies and one ally who is near enough for you to assist verbally or physically when they make an ability check. That ally has Advantage on the next ability check they make with the chosen skill or tool. This benefit expires if the ally doesn’t use it before the start of your next turn. The GM has final say on whether your assistance is possible.

**Assist an Attack Roll.** You momentarily distract an enemy within 5 feet of you, giving Advantage to the next attack roll by one of your allies against that enemy. This benefit expires at the start of your next turn.

#### Heroic Inspiration
**Tag:** Rule

If you (a player character) have Heroic Inspiration, you can expend it to reroll any die immediately after rolling it, and you must use the new roll.

If you gain Heroic Inspiration but already have it, it’s lost unless you give it to a player character who lacks it.

Sometimes the GM or a rule gives you Heroic Inspiration. If you have Heroic Inspiration, you can expend it to reroll any die immediately after rolling it, and you must use the new roll.

**Only One at a Time.** You can never have more than one instance of Heroic Inspiration. If something gives you Heroic Inspiration and you already have it, you can give it to a player character in your group who lacks it.

**Gaining Heroic Inspiration.** Your GM can give you Heroic Inspiration for a variety of reasons. Typically, GMs award it when you do something particularly heroic, in character, or entertaining. It’s a reward for making the game more fun for everyone playing.

Other rules might allow your character to gain Heroic Inspiration independent of the GM’s decision. For example, Human characters start each day with Heroic Inspiration.

#### Hide
**Tag:** Rule
**Type:** Action

With the Hide action, you try to hide yourself. To do so, you must succeed on a DC 15 Dexterity (Stealth) check while you’re Heavily Obscured or behind Three-Quarters Cover or Total Cover, and you must be out of any enemy’s line of sight; if you can see a creature, you can discern whether it can see you.

On a successful check, you have the Invisible condition while hidden. Make note of your check’s total, which is the DC for a creature to find you with a Wisdom (Perception) check.

You stop being hidden immediately after any of the following occurs: you make a sound louder than a whisper, an enemy finds you, you make an attack roll, or you cast a spell with a Verbal component.

#### High Jump
**Tag:** Rule

When you make a High Jump, you leap into the air a number of feet equal to 3 plus your Strength modifier (minimum of 0 feet) if you move at least 10 feet on foot immediately before the jump. When you make a standing High Jump, you can jump only half that distance. Either way, each foot of the jump costs a foot of movement.

You can extend your arms half your height above yourself during the jump. Thus, you can reach a distance equal to the height of the jump plus 11/2 times your height.

#### Hit Point Dice
**Tag:** Rule
**Also:** Hit Point Die, Hit Dice, Hit Die

Hit Point Dice, or Hit Dice for short, help determine a player character’s Hit Point maximum, as explained in “Character Creation.” Most monsters also have Hit Dice. A creature can spend Hit Dice during a Short Rest to regain Hit Points.

#### Hit Points
**Tag:** Rule
**Link:** no

Hit Points (HP) are a measure of how difficult it is to kill or destroy a creature or an object. Damage reduces Hit Points, and healing restores them. You can’t have more Hit Points than your Hit Point maximum, and you can’t have less than 0.

Hit Points represent durability and the will to live. Creatures with more Hit Points are more difficult to kill. Your Hit Point maximum is the number of Hit Points you have when uninjured. Your current Hit Points can be any number from that maximum down to 0, which is the lowest Hit Points can go.

Whenever you take damage, subtract it from your Hit Points. Hit Point loss has no effect on your capabilities until you reach 0 Hit Points.

If you have half your Hit Points or fewer, you’re Bloodied, which has no game effect on its own but which might trigger other game effects.

#### Hostile
**Tag:** Rule
**Type:** Attitude

A Hostile creature views you unfavorably. You have Disadvantage on an ability check to influence a Hostile creature.

#### Hover
**Tag:** Rule

Some creatures can hover, as noted in their stat blocks, and some spells and other effects grant the ability to hover. Hovering while flying prevents you from falling in certain circumstances.

#### Illusions
**Tag:** Rule
**Also:** Illusion
**Match:** exact

Spells and other effects sometimes create magical illusions. Such an effect defines what the illusion does and which senses or mental faculties it deceives.

If an illusion manifests in space, the illusion is insubstantial and weightless, yet it seems to be affected by the environment as if the illusion were real unless the effect that created it specifies otherwise. For example, a visual illusion of a creature casts shadows and reflections, and wind appears to affect the illusory creature. Similarly, an audible illusion echoes in an echoey space.

#### Immunity
**Tag:** Rule

If you have Immunity to a damage type or a condition, it doesn’t affect you in any way.

Some creatures and objects have Immunity to certain damage types and conditions. Immunity to a damage type means you don’t take damage of that type, and Immunity to a condition means you aren’t affected by it.

#### Improvised Weapons
**Tag:** Rule
**Also:** Improvised Weapon

An improvised weapon is an object wielded as a makeshift weapon, such as broken glass, a table leg, or a frying pan. A Simple or Martial weapon also counts as an improvised weapon if it’s wielded in a way contrary to its design; if you use a Ranged weapon to make a melee attack or throw a Melee weapon that lacks the Thrown property, the weapon counts as an improvised weapon. An improvised weapon follows the rules below.

**Proficiency.** Don’t add your Proficiency Bonus to attack rolls with an improvised weapon.

**Damage.** On a hit, the weapon deals 1d4 damage of a type the GM thinks is appropriate for the object.

**Range.** If you throw the weapon, it has a normal range of 20 feet and a long range of 60 feet.

**Weapon Equivalents.** If an improvised weapon resembles a Simple or Martial weapon, the GM may say it functions as that weapon and uses that weapon’s rules. For example, the GM could treat a table leg as a Club.

If you use an object—such as a table leg, frying pan, or bottle—as a makeshift weapon, see “Improvised Weapons” in “Rules Glossary.” Also see those rules if you wield a weapon in an unusual way, such as using a Ranged weapon to make a melee attack.

#### Indifferent
**Tag:** Rule
**Type:** Attitude

An Indifferent creature has no desire to help or hinder you. Indifferent is the default attitude of a monster.

#### Influence
**Tag:** Rule
**Type:** Action

With the Influence action, you urge a monster to do something. Describe or roleplay how you’re communicating with the monster. Are you trying to deceive, intimidate, amuse, or gently persuade? The GM then determines whether the monster feels willing, unwilling, or hesitant due to your interaction; this determination establishes whether an ability check is necessary, as explained below.

**Willing.** If your urging aligns with the monster’s desires, no ability check is necessary; the monster fulfills your request in a way it prefers.

**Unwilling.** If your urging is repugnant to the monster or counter to its alignment, no ability check is necessary; it doesn’t comply.

**Hesitant.** If you urge the monster to do something that it is hesitant to do, you must make an ability check, which is affected by the monster’s attitude: Indifferent, Friendly, or Hostile, each of which is defined in this glossary. The Influence Checks table suggests which ability check to make based on how you’re interacting with the monster. The GM chooses the check, which has a default DC equal to 15 or the monster’s Intelligence score, whichever is higher. On a successful check, the monster does as urged. On a failed check, you must wait 24 hours (or a duration set by the GM) before urging it in the same way again.

**Influence Checks**

| Ability Check | Interaction |
|---|---|
| Charisma (Deception) | Deceiving a monster that understands you |
| Charisma (Intimidation) | Intimidating a monster |
| Charisma (Performance) | Amusing a monster |
| Charisma (Persuasion) | Persuading a monster that understands you |
| Wisdom (Animal Handling) | Gently coaxing a Beast or Monstrosity |

#### Initiative
**Tag:** Rule
**Link:** no

Initiative determines the order of turns during combat. The combat rules in “Playing the Game” explain how to roll Initiative.

Sometimes a GM might have combatants use their Initiative scores instead of rolling Initiative. Your Initiative score equals 10 plus your Dexterity modifier. If you have Advantage on Initiative rolls, increase your Initiative score by 5. If you have Disadvantage on those rolls, decrease that score by 5.

Initiative determines the order of turns during combat. When combat starts, every participant rolls Initiative; they make a Dexterity check that determines their place in the Initiative order. The GM rolls for monsters. For a group of identical creatures, the GM makes a single roll, so each member of the group has the same Initiative.

**Surprise.** If a combatant is surprised by combat starting, that combatant has Disadvantage on their Initiative roll. For example, if an ambusher starts combat while hidden from a foe who is unaware that combat is starting, that foe is surprised.

**Initiative Order.** A combatant’s check total is called their Initiative count, or Initiative for short. The GM ranks the combatants, from highest to lowest Initiative. This is the order in which they act during each round. The Initiative order remains the same from round to round.

**Ties.** If a tie occurs, the GM decides the order among tied monsters, and the players decide the order among tied characters. The GM decides the order if the tie is between a monster and a player character.

#### Jumping
**Tag:** Rule

When you jump, you make either a Long Jump (horizontal) or a High Jump (vertical).

#### Knocking Out a Creature
**Tag:** Rule

When you would reduce a creature to 0 Hit Points with a melee attack, you can instead reduce the creature to 1 Hit Point. The creature then has the Unconscious condition and starts a Short Rest.

The creature remains Unconscious until it regains any Hit Points or until someone uses an action to administer first aid to it, which requires a successful DC 10 Wisdom (Medicine) check.

When you would reduce a creature to 0 Hit Points with a melee attack, you can instead reduce the creature to 1 Hit Point and give it the Unconscious condition. It then starts a Short Rest, at the end of which that condition ends on it. The condition ends early if the creature regains any Hit Points or if someone takes an action to administer first aid to it, making a successful DC 10 Wisdom (Medicine) check.

#### Lightly Obscured
**Tag:** Rule

You have Disadvantage on Wisdom (Perception) checks to see something in a Lightly Obscured space.

#### Line
**Tag:** Rule
**Type:** Area of Effect

A Line is an area of effect that extends from a point of origin in a straight path along its length and covers an area defined by its width. The effect that creates a Line specifies its length and width.

A Line’s point of origin isn’t included in the area of effect unless its creator decides otherwise.

#### Long Jump
**Tag:** Rule

When you make a Long Jump, you leap horizontally a number of feet up to your Strength score if you move at least 10 feet immediately before the jump. When you make a standing Long Jump, you can leap only half that distance. Either way, each foot you jump costs a foot of movement.

If you land in Difficult Terrain, you must succeed on a DC 10 Dexterity (Acrobatics) check or have the Prone condition.

This Long Jump rule assumes that the height of the jump doesn’t matter, such as a jump across a stream or chasm. At your GM’s option, you must succeed on a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump’s distance), such as a hedge or low wall. Otherwise, you hit the obstacle.

#### Long Rest
**Tag:** Rule
**Also:** Long Rests

A Long Rest is a period of extended downtime—at least 8 hours—available to any creature. During a Long Rest, you sleep for at least 6 hours and perform no more than 2 hours of light activity, such as reading, talking, eating, or standing watch.

During sleep, you have the Unconscious condition. After you finish a Long Rest, you must wait at least 16 hours before starting another one.

**Benefits of the Rest.** To start a Long Rest, you must have at least 1 Hit Point. When you finish the rest, you gain the following benefits:

**Regain All HP.** You regain all lost Hit Points and all spent Hit Point Dice. If your Hit Point maximum was reduced, it returns to normal.

**Ability Scores Restored.** If any of your ability scores were reduced, they return to normal.

**Exhaustion Reduced.** If you have the Exhaustion condition, its level decreases by 1.

**Special Feature.** Some features are recharged by a Long Rest. If you have such a feature, it recharges in the way specified in its description.

**Interrupting the Rest.** A Long Rest is stopped by the following interruptions:

- Rolling Initiative
- Casting a spell other than a cantrip
- Taking any damage
- 1 hour of walking or other physical exertion

If you rested at least 1 hour before the interruption, you gain the benefits of a Short Rest.

You can resume a Long Rest immediately after an interruption. If you do so, the rest requires 1 additional hour per interruption to finish.

#### Magic
**Tag:** Rule
**Type:** Action
**Match:** action

When you take the Magic action, you cast a spell that has a casting time of an action or use a feature or magic item that requires a Magic action to be activated. If you cast a spell that has a casting time of 1 minute or longer, you must take the Magic action on each turn of that casting, and you must maintain Concentration while you do so. If your Concentration is broken, the spell fails, but you don’t expend a spell slot.

#### Magical Effect
**Tag:** Rule
**Link:** no

An effect is magical if it is created by a spell, a magic item, or a phenomenon that a rule labels as magical.

#### Malnutrition
**Tag:** Rule
**Type:** Hazard

A creature needs an amount of food per day based on its size, as shown in the Food Needs per Day table. A creature that eats but consumes less than half the required food for a day must succeed on a DC 10 Constitution saving throw or gain 1 Exhaustion level at the day’s end. A creature that eats nothing for 5 days automatically gains 1 Exhaustion level at the end of the fifth day as well as an additional level at the end of each subsequent day without food.

Exhaustion caused by malnutrition can’t be removed until the creature eats the full amount of food required for a day.

**Food Needs per Day**

| Size | Food |
|---|---|
| Tiny | 1/4 pound |
| Small | 1 pound |
| Medium | 1 pound |
| Large | 4 pounds |
| Huge | 16 pounds |
| Gargantuan | 64 pounds |

#### Monster
**Tag:** Rule
**Link:** no

A monster is a creature controlled by the GM, even if the creature is benevolent.

#### Nonplayer Character
**Tag:** Rule
**Link:** no

A nonplayer character (NPC) is a monster that has a personal name and a distinct personality.

#### Object
**Tag:** Rule
**Link:** no

An object is a nonliving, distinct thing. Composite things, like buildings, comprise more than one object.

#### Occupied Space
**Tag:** Rule

A space is occupied if a creature is in it or if it is completely filled by objects.

#### Opportunity Attacks
**Tag:** Rule
**Also:** Opportunity Attack

You can make an Opportunity Attack when a creature that you can see leaves your reach using its action, its Bonus Action, its Reaction, or one of its speeds. To make the Opportunity Attack, take a Reaction to make one melee attack with a weapon or an Unarmed Strike against the provoking creature. The attack occurs right before the creature leaves your reach.

Combatants watch for enemies to drop their guard. If you move heedlessly past your foes, you put yourself in danger by provoking an Opportunity Attack.

**Avoiding Opportunity Attacks.** You can avoid provoking an Opportunity Attack by taking the Disengage action. You also don’t provoke an Opportunity Attack when you Teleport or when you are moved without using your movement, action, Bonus Action, or Reaction. For example, you don’t provoke an Opportunity Attack if an explosion hurls you out of a foe’s reach or if you fall past an enemy.

**Making an Opportunity Attack.** You can make an Opportunity Attack when a creature that you can see leaves your reach. To make the attack, take a Reaction to make one melee attack with a weapon or an Unarmed Strike against that creature. The attack occurs right before it leaves your reach.

#### Passive Perception
**Tag:** Rule

Passive Perception is a score that reflects a creature’s general awareness of its surroundings. The GM uses this score when determining whether a creature notices something without consciously making a Wisdom (Perception) check.

A creature’s Passive Perception equals 10 plus the creature’s Wisdom (Perception) check bonus. If the creature has Advantage on such checks, increase the score by 5. If the creature has Disadvantage on them, decrease the score by 5. For example, a level 1 character with a Wisdom of 15 and proficiency in Perception has a Passive Perception of 14 (10 + 2 + 2). If that character has Advantage on Wisdom (Perception) checks, the score becomes 19.

#### Per Day
**Tag:** Rule
**Link:** no

If a rule says you can use something a certain number of times per day, that means you must finish a Long Rest to use it again after you run out of uses.

#### Player Character
**Tag:** Rule
**Link:** no

A player character is a character controlled by a player.

#### Possession
**Tag:** Rule

Some effects cause a creature to be possessed by another creature or entity. A possessing effect defines how the possession operates. Possession can be prevented by the *Protection from Evil and Good* spell and ended by the *Dispel Evil and Good* spell.

#### Proficiency
**Tag:** Rule
**Link:** no

If you have proficiency with something, you can add your Proficiency Bonus to any D20 Test you make using that thing. A creature might have proficiency in a skill or saving throw or with a weapon or tool.

Characters and monsters are good at various things. Some are skilled with many weapons, while others can use only a few. Some are better at understanding people’s motives, and others are better at unlocking the secrets of the multiverse. All creatures have a Proficiency Bonus, which reflects the impact that training has on the creature’s capabilities. A character’s Proficiency Bonus increases as the character gains levels (described in “Character Creation”). A monster’s Proficiency Bonus is based on its Challenge Rating (see “Rules Glossary”). The Proficiency Bonus table shows how the bonus is determined.

This bonus is applied to a D20 Test when the creature has proficiency in a skill, in a saving throw, or with an item that the creature uses to make the D20 Test. The bonus is also used for spell attacks and for calculating the DC of saving throws for spells.

**Proficiency Bonus**

| Level or CR | Bonus |
|---|---|
| Up to 4 | +2 |
| 5–8 | +3 |
| 9–12 | +4 |
| 13–16 | +5 |
| 17–20 | +6 |
| 21–24 | +7 |
| 25–28 | +8 |
| 29–30 | +9 |

**The Bonus Doesn’t Stack**

Your Proficiency Bonus can’t be added to a die roll or another number more than once. For example, if a rule allows you to make a Charisma (Deception or Persuasion) check, you add your Proficiency Bonus if you’re proficient in either skill, but you don’t add it twice if you’re proficient in both skills.

Occasionally, a Proficiency Bonus might be multiplied or divided (doubled or halved, for example) before being added. For example, the Expertise feature (see “Rules Glossary”) doubles the Proficiency Bonus for certain ability checks. Whenever the bonus is used, it can be multiplied only once and divided only once.

#### Reach
**Tag:** Rule
**Link:** no

A creature has a reach of 5 feet unless a rule says otherwise.

A creature has a 5-foot reach and can thus attack targets within 5 feet when making a melee attack. Certain creatures have melee attacks with a reach greater than 5 feet, as noted in their descriptions.

#### Reaction
**Tag:** Rule
**Link:** no

A Reaction is a special action taken in response to a trigger defined in the Reaction’s description. You can take a Reaction on another creature’s turn, and if you take it on your turn, you can do so even if you also take an action, a Bonus Action, or both. Once you take a Reaction, you can’t take another one until the start of your next turn. The Opportunity Attack is a Reaction available to all creatures.

Certain special abilities, spells, and situations allow you to take a special action called a Reaction. A Reaction is an instant response to a trigger of some kind, which can occur on your turn or on someone else’s. The Opportunity Attack, described later in “Playing the Game,” is the most common type of Reaction.

When you take a Reaction, you can’t take another one until the start of your next turn. If the reaction interrupts another creature’s turn, that creature can continue its turn right after the Reaction.

In terms of timing, a Reaction takes place immediately after its trigger unless the Reaction’s description says otherwise.

#### Ready
**Tag:** Rule
**Type:** Action

You take the Ready action to wait for a particular circumstance before you act. To do so, you take this action on your turn, which lets you act by taking a Reaction before the start of your next turn.

First, you decide what perceivable circumstance will trigger your Reaction. Then, you choose the action you will take in response to that trigger, or you choose to move up to your Speed in response to it. Examples include “If the cultist steps on the trapdoor, I’ll pull the lever that opens it,” and “If the zombie steps next to me, I move away.”

When the trigger occurs, you can either take your Reaction right after the trigger finishes or ignore the trigger.

When you Ready a spell, you cast it as normal (expending any resources used to cast it) but hold its energy, which you release with your Reaction when the trigger occurs. To be readied, a spell must have a casting time of an action, and holding on to the spell’s magic requires Concentration, which you can maintain up to the start of your next turn. If your Concentration is broken, the spell dissipates without taking effect.

#### Resistance
**Tag:** Rule

If you have Resistance to a damage type, damage of that type is halved against you (round down). Resistance is applied only once to an instance of damage.

#### Ritual
**Tag:** Rule
**Link:** no

If you have a spell prepared that has the Ritual tag, you can cast that spell as a Ritual. The Ritual version of a spell takes 10 minutes longer to cast than normal. It also doesn’t expend a spell slot, which means the ritual version of a spell can’t be cast at a higher level.

#### Round Down
**Tag:** Rule
**Link:** no

Whenever you divide or multiply a number in the game, round down if you end up with a fraction, even if the fraction is one-half or greater. Some rules make an exception and tell you to round up.

#### Save
**Tag:** Rule
**Link:** no

Save is another name for a saving throw.

#### Saving Throw
**Tag:** Rule
**Link:** no

A saving throw—also called a save—represents an attempt to avoid or resist a threat. You normally make a saving throw only when a rule requires you to do so, but you can decide to fail the save without rolling. The result of a save is detailed in the effect that allowed it. If a target is forced to make a save and lacks the ability score used by it, the target automatically fails.

A saving throw—also called a save—represents an attempt to evade or resist a threat, such as a fiery explosion, a blast of poisonous gas, or a spell trying to invade your mind. You don’t normally choose to make a save; you must make one because your character or a monster (if you’re the GM) is at risk. A save’s result is detailed in the effect that caused it.

If you don’t want to resist the effect, you can choose to fail the save without rolling.

**Ability Modifier**

Saving throws are named for the ability modifiers they use: a Constitution saving throw, a Wisdom saving throw, and so on. Different saving throws are used to resist different kinds of effects, as shown on the Saving Throw Examples table.

**Saving Throw Examples**

| Ability | Make a Save To … |
|---|---|
| Strength | Physically resist direct force |
| Dexterity | Dodge out of harm’s way |
| Constitution | Endure a toxic hazard |
| Intelligence | Recognize an illusion as fake |
| Wisdom | Resist a mental assault |
| Charisma | Assert your identity |

**Proficiency Bonus**

You add your Proficiency Bonus to your saving throw if you have proficiency in that kind of save. See “Proficiency” later in “Playing the Game.”

**Difficulty Class**

The Difficulty Class for a saving throw is determined by the effect that causes it or by the GM. For example, if a spell forces you to make a save, the DC is determined by the caster’s spellcasting ability and Proficiency Bonus. Monster abilities that call for saves specify the DC.

#### Search
**Tag:** Rule
**Type:** Action

When you take the Search action, you make a Wisdom check to discern something that isn’t obvious. The Search table suggests which skills are applicable when you take this action, depending on what you’re trying to detect.

**Search**

| Skill | Thing to Detect |
|---|---|
| Insight | Creature’s state of mind |
| Medicine | Creature’s ailment or cause of death |
| Perception | Concealed creature or object |
| Survival | Tracks or food |

#### Shape-Shifting
**Tag:** Rule

If an effect, such as Wild Shape or the *Polymorph* spell, lets you shape-shift, its description specifies what happens to you. Unless that description says otherwise, any ongoing effects on you—conditions, spells, curses, and the like—carry over from one form to the other. You revert to your true form if you die.

#### Short Rest
**Tag:** Rule
**Also:** Short Rests

A Short Rest is a 1-hour period of downtime, during which a creature does nothing more strenuous than reading, talking, eating, or standing watch. To start a Short Rest, you must have at least 1 Hit Point.

**Benefits of the Rest.** When you finish the rest, you gain the following benefits:

**Spend Hit Point Dice.** You can spend one or more of your Hit Point Dice to regain Hit Points. For each Hit Point Die you spend in this way, roll the die and add your Constitution modifier to it. You regain Hit Points equal to the total (minimum of 1 Hit Point). You can decide to spend an additional Hit Point Die after each roll.

**Special Feature.** Some features are recharged by a Short Rest. If you have such a feature, it recharges in the way specified in its description.

**Interrupting the Rest.** A Short Rest is stopped by the following interruptions:

- Rolling Initiative
- Casting a spell other than a cantrip
- Taking any damage

An interrupted Short Rest confers no benefits.

#### Simultaneous Effects
**Tag:** Rule

If two or more things happen at the same time on a turn, the person at the game table—player or GM—whose turn it is decides the order in which those things happen. For example, if two effects occur at the start of a player character’s turn, the player decides which of the effects happens first.

#### Size
**Tag:** Rule
**Link:** no

A creature or an object belongs to a size category: Tiny, Small, Medium, Large, Huge, or Gargantuan. A creature’s size determines how much space the creature occupies in combat. An object’s size affects its Hit Points.

#### Skill
**Tag:** Rule
**Link:** no

A skill is an area of specialization associated with an ability check. If you have proficiency in a skill, you can add your Proficiency Bonus when you make an ability check associated with that skill.

#### Speed
**Tag:** Rule
**Link:** no

A creature has a Speed, which is the distance in feet the creature can cover when it moves on its turn.

**Special Speeds.** Some creatures have special speeds, such as a Burrow Speed, Climb Speed, Fly Speed, or Swim Speed, each of which is defined in this glossary. If you have more than one speed, choose which one to use when you move; you can switch between the speeds during your move. Whenever you switch, subtract the distance already moved from the new speed. The result determines how much farther you can move. If the result is 0 or less, you can’t use the new speed during the current move. For example, if you have a Speed of 30 and a Fly Speed of 40, you could fly 10 feet, walk 10 feet, and leap into the air to fly 20 feet more.

**Changes to Your Speeds.** If an effect increases or decreases your Speed for a time, any special speed you have increases or decreases by an equal amount for the same duration. For example, if your Speed is reduced to 0 and you have a Climb Speed, your Climb Speed is also reduced to 0. Similarly, if your Speed is halved and you have a Fly Speed, your Fly Speed is also halved.

#### Spell
**Tag:** Rule
**Link:** no

A spell is a magical effect that has the characteristics described in “Spells.”

#### Spell Attack
**Tag:** Rule
**Link:** no

A spell attack is an attack roll made as part of a spell or another magical effect.

#### Spellcasting Focus
**Tag:** Rule
**Also:** Spellcasting Foci

A Spellcasting Focus is an object that certain creatures can use in place of a spell’s Material components if those materials aren’t consumed by the spell and don’t have a cost specified. Some classes allow its members to use certain types of Spellcasting Focuses.

#### Sphere
**Tag:** Rule
**Type:** Area of Effect

A Sphere is an area of effect that extends in straight lines from a point of origin outward in all directions. The effect that creates a Sphere specifies the distance it extends as the radius of the Sphere.

A Sphere’s point of origin is included in the Sphere’s area of effect.

#### Stable
**Tag:** Rule

A creature is Stable if it has 0 Hit Points but isn’t required to make Death Saving Throws.

#### Stat Block
**Tag:** Rule
**Link:** no

A stat block contains the game statistics of a monster. Each stat block includes the following information presented after the monster’s name.

**Size.** A monster is Tiny, Small, Medium, Large, Huge, or Gargantuan.

**Creature Type.** This entry notes the family of beings a monster belongs to, along with any descriptive tags.

**Alignment.** An alignment is suggested for the monster, with the GM determining its actual alignment.

**AC, Initiative, and HP.** These entries give the monster’s Armor Class, Initiative, and Hit Points, which are detailed in “Playing the Game.” In parentheses after the Hit Points, the monster’s Hit Point Dice are provided, along with the contribution of its Constitution, if any, to its Hit Points. Following the Initiative modifier is an Initiative score. Some creatures that are created by magic lack Hit Dice and Initiative information.

**Speed.** Here the monster’s Speed is provided, along with any special speeds.

**Ability Scores.** A table provides the monster’s ability scores, modifiers, and saving throw modifiers, all of which are detailed in “Playing the Game.”

**Skills.** This entry lists the monster’s skill proficiencies, if any.

**Resistances and Vulnerabilities.** These entries list the monster’s Resistances and Vulnerabilities, if any.

**Immunities.** This section lists the monster’s damage and condition Immunities, if any.

**Gear.** If the monster has any equipment that can be given away or retrieved, it’s listed in this entry.

**Senses.** This entry lists the monster’s special senses, such as Darkvision, and its Passive Perception.

**Languages.** This entry lists any languages the monster knows.

**CR.** Challenge Rating summarizes the threat a monster poses and is detailed in “Monsters.” The Experience Points characters receive for defeating a monster and its Proficiency Bonus follow. Some creatures that are created by magic have no CR.

**Traits.** The monster’s traits, if any, are features that are active at all times or in certain situations.

**Actions.** The monster can take these actions in addition to those detailed in this glossary.

**Bonus Actions.** If the monster has Bonus Action options, they are listed in this section.

**Reactions.** If the monster can take special Reactions, those are listed in this section.

**Attack Notation.** The entry for a monster’s attack starts by identifying whether the attack is a melee or a ranged attack and then provides the attack roll’s bonus, its reach or range, and what happens on a hit. An attack is against one target unless its entry says otherwise.

**Saving Throw Effect Notation.** If an effect forces a saving throw, the effect’s entry starts by identifying the kind of saving throw required and then provides the save’s DC, a description of which creatures must make the save, and what happens on a failed or a successful save.

**Damage Notation.** A stat block usually provides both a static number and a die expression for each instance of damage. For example, an attack might deal 4 (1d4 + 2) damage on a hit. The GM determines whether you use the static number or the die expression in parentheses; you don’t use both.

#### Study
**Tag:** Rule
**Type:** Action

When you take the Study action, you make an Intelligence check to study your memory, a book, a clue, or another source of knowledge and call to mind an important piece of information about it.

The Areas of Knowledge table suggests which skills are applicable to various areas of knowledge.

**Areas of Knowledge**

| Skill | Areas |
|---|---|
| Arcana | Spells, magic items, eldritch symbols, magical traditions, planes of existence, and certain creatures (Aberrations, Constructs, Elementals, Fey, and Monstrosities) |
| History | Historic events and people, ancient civilizations, wars, and certain creatures (Giants and Humanoids) |
| Investigation | Traps, ciphers, riddles, and gadgetry |
| Nature | Terrain, flora, weather, and certain creatures (Beasts, Dragons, Oozes, and Plants) |
| Religion | Deities, religious hierarchies and rites, holy symbols, cults, and certain creatures (Celestials, Fiends, and Undead) |

#### Suffocation
**Tag:** Rule
**Type:** Hazard

A creature can hold its breath for a number of minutes equal to 1 plus its Constitution modifier (minimum of 30 seconds) before suffocation begins. When a creature runs out of breath or is choking, it gains 1 Exhaustion level at the end of each of its turns. When a creature can breathe again, it removes all levels of Exhaustion it gained from suffocating.

#### Surprise
**Tag:** Rule

If a creature is caught unawares by the start of combat, that creature is surprised, which causes it to have Disadvantage on its Initiative roll.

#### Swimming
**Tag:** Rule

While you’re swimming, each foot of movement costs 1 extra foot (2 extra feet in Difficult Terrain). You ignore this extra cost if you have a Swim Speed and use it to swim. At the GM’s option, moving any distance in rough water might require a successful DC 15 Strength (Athletics) check.

#### Swim Speed
**Tag:** Rule

A Swim Speed can be used to swim without expending the extra movement normally associated with swimming.

#### Target
**Tag:** Rule
**Link:** no

A target is the creature or object targeted by an attack roll, forced to make a saving throw by an effect, or selected to receive the effects of a spell or another phenomenon.

#### Telepathy
**Tag:** Rule

Telepathy is a magical ability that allows a creature to communicate mentally with another creature within a specified range. Unless a rule states otherwise, the contacted creature doesn’t need to share a language with the telepath to understand this communication, but the contacted creature must be able to understand at least one language or be telepathic itself to understand.

A telepath doesn’t need to see a contacted creature, and the telepath can start or end the telepathic contact at any time (no action required). Telepathic contact can’t be initiated and is immediately broken if either the telepath or the other creature has the Incapacitated condition. Telepathic contact is also broken if the contacted creature is no longer within the telepathy’s range or if the telepath contacts a different creature within range.

A creature without telepathy can receive telepathic messages but can’t initiate a telepathic conversation. Once a telepathic conversation starts, the non-telepath can communicate mentally to the telepath until the telepathic connection ends.

#### Teleportation
**Tag:** Rule

Teleportation is a special kind of magical transportation. If you teleport, you disappear and reappear elsewhere instantly, without moving through the intervening space. This transportation doesn’t expend movement unless a rule tells you otherwise, and teleportation never provokes Opportunity Attacks.

When you teleport, all the equipment you’re wearing and carrying teleports with you. If you’re touching another creature when you teleport, that creature doesn’t teleport with you unless the teleportation effect says otherwise.

If the destination space of your teleportation is occupied by another creature or blocked by a solid obstacle, you instead appear in the nearest unoccupied space of your choice.

The description of a teleportation effect tells you if you must see the teleportation’s destination.

#### Temporary Hit Points
**Tag:** Rule
**Also:** Temporary Hit Point

Temporary Hit Points are granted by certain effects and act as a buffer against losing real Hit Points.

Some spells and other effects confer Temporary Hit Points, which are a buffer against losing actual Hit Points, as explained below.

**Lose Temporary Hit Points First**

If you have Temporary Hit Points and take damage, those points are lost first, and any leftover damage carries over to your Hit Points. For example, if you have 5 Temporary Hit Points and take 7 damage, you lose those points and then lose 2 Hit Points.

**Duration**

Temporary Hit Points last until they’re depleted or you finish a Long Rest (see “Rules Glossary”).

**They Don’t Stack**

Temporary Hit Points can’t be added together. If you have Temporary Hit Points and receive more of them, you decide whether to keep the ones you have or to gain the new ones. For example, if a spell grants you 12 Temporary Hit Points when you already have 10, you can have 12 or 10, not 22.

**They’re Not Hit Points or Healing**

Temporary Hit Points can’t be added to your Hit Points, healing can’t restore them, and receiving Temporary Hit Points doesn’t count as healing. Because Temporary Hit Points aren’t Hit Points, a creature can be at full Hit Points and receive Temporary Hit Points.

If you have 0 Hit Points, receiving Temporary Hit Points doesn’t restore you to consciousness. Only true healing can save you.

#### Tremorsense
**Tag:** Rule

A creature with Tremorsense can pinpoint the location of creatures and moving objects within a specific range, provided that the creature with Tremorsense and anything it is detecting are both in contact with the same surface (such as the ground, a wall, or a ceiling) or the same liquid.

Tremorsense can’t detect creatures or objects in the air, and it doesn’t count as a form of sight.

#### Truesight
**Tag:** Rule

If you have Truesight, your vision is enhanced within a specified range. Within that range, your vision pierces through the following:

**Darkness.** You can see in normal and magical Darkness.

**Invisibility.** You see creatures and objects that have the Invisible condition.

**Visual Illusions.** Visual illusions appear transparent to you, and you automatically succeed on saving throws against them.

**Transformations.** You discern the true form of any creature or object you see that has been transformed by magic.

**Ethereal Plane.** You see into the Ethereal Plane.

#### Unarmed Strike
**Tag:** Rule
**Also:** Unarmed Strikes

Instead of using a weapon to make a melee attack, you can use a punch, kick, headbutt, or similar forceful blow. In game terms, this is an Unarmed Strike—a melee attack that involves you using your body to damage, grapple, or shove a target within 5 feet of you.

Whenever you use your Unarmed Strike, choose one of the following options for its effect.

**Damage.** You make an attack roll against the target. Your bonus to the roll equals your Strength modifier plus your Proficiency Bonus. On a hit, the target takes Bludgeoning damage equal to 1 plus your Strength modifier.

**Grapple.** The target must succeed on a Strength or Dexterity saving throw (it chooses which), or it has the Grappled condition. The DC for the saving throw and any escape attempts equals 8 plus your Strength modifier and Proficiency Bonus. This grapple is possible only if the target is no more than one size larger than you and if you have a hand free to grab it.

**Shove.** The target must succeed on a Strength or Dexterity saving throw (it chooses which), or you either push it 5 feet away or cause it to have the Prone condition. The DC for the saving throw equals 8 plus your Strength modifier and Proficiency Bonus. This shove is possible only if the target is no more than one size larger than you.

#### Unoccupied Space
**Tag:** Rule

A space is unoccupied if no creatures are in it and it isn’t completely filled by objects.

#### Utilize
**Tag:** Rule
**Type:** Action
**Match:** exact

You normally interact with an object while doing something else, such as when you draw a sword as part of the Attack action. When an object requires an action for its use, you take the Utilize action.

#### Vulnerability
**Tag:** Rule

If you have Vulnerability to a damage type, damage of that type is doubled against you. Vulnerability is applied only once to an instance of damage.

#### Weapon
**Tag:** Rule
**Link:** no

A weapon is an object that is in the Simple or Martial weapon category.

The Weapons table in this section shows the game’s main weapons. The table lists the cost and weight of each weapon, as well as the following details:

**Category.** Every weapon falls into a category: Simple or Martial. Weapon proficiencies are usually tied to one of these categories. For example, you might have proficiency with Simple weapons.

**Melee or Ranged.** A weapon is classified as either Melee or Ranged. A Melee weapon is used to attack a target within 5 feet, whereas a Ranged weapon is used to attack at a greater distance.

**Damage.** The table lists the amount of damage a weapon deals when an attacker hits with it as well as the type of that damage.

**Properties.** Any properties a weapon has are listed in the Properties column. Each property is defined in the “Properties” section.

**Mastery.** Each weapon has a mastery property, which is defined in the “Mastery Properties” section. To use that property, you must have a feature that lets you use it.

#### Weapon Attack
**Tag:** Rule
**Link:** no

A weapon attack is an attack roll made with a weapon.

## Playing the Game

From the “Playing the Game” chapter of the SRD 5.2.1 (attribution statement under “Rules Glossary” above).

#### Rhythm of Play
**Tag:** Rule
**Type:** Playing the Game

The three main pillars of D&D play are social interaction, exploration, and combat. Whichever one you’re experiencing, the game unfolds according to this basic pattern:

**1: The Game Master Describes a Scene.** The GM tells the players where their adventurers are and what’s around them (how many doors lead out of a room, what’s on a table, and so on).

**2: The Players Describe What Their Characters Do.** Typically, the characters stick together as they travel through a dungeon or another environment. Sometimes different adventurers do different things: one adventurer might search a treasure chest while a second examines a mysterious symbol engraved on a wall and a third keeps watch for monsters. Outside combat, the GM ensures that every character has a chance to act and decides how to resolve their activity. In combat, the characters take turns.

**3: The GM Narrates the Results of the Adventur- ers’ Actions.** Sometimes resolving a task is easy. If an adventurer walks across a room and tries to open a door, the GM might say the door opens and describe what lies beyond. But the door might be locked, the floor might hide a trap, or some other circumstance might make it challenging for an adventurer to complete a task. In those cases, the GM might ask the player to roll a die to help determine what happens. Describing the results often leads to another decision point, which brings the game back to step 1.

This pattern holds during every game session (each time you sit down to play D&D), whether the adventurers are talking to a noble, exploring a ruin, or fighting a dragon. In certain situations—particularly combat—the action is more structured, and everyone takes turns.

#### The Six Abilities
**Tag:** Rule
**Type:** Playing the Game

All creatures—characters and monsters—have six abilities that measure physical and mental characteristics, as shown on the Ability Descriptions table.

**Ability Descriptions**

| Ability | Score Measures … |
|---|---|
| Strength | Physical might |
| Dexterity | Agility, reflexes, and balance |
| Constitution | Health and stamina |
| Intelligence | Reasoning and memory |
| Wisdom | Perceptiveness and mental fortitude |
| Charisma | Confidence, poise, and charm |

**Ability Scores**

Each ability has a score from 1 to 20, although some monsters have a score as high as 30. The score represents the magnitude of an ability. The Ability Scores table summarizes what the scores mean.

**Ability Scores**

| Score | Meaning |
|---|---|
| 1 | This is the lowest a score can normally go. If an effect reduces a score to 0, that effect explains what happens. |
| 2–9 | This represents a weak capability. |
| 10–11 | This represents the human average. |
| 12–19 | This represents a strong capability. |
| 20 | This is the highest an adventurer’s score can go unless a feature says otherwise. |
| 21–29 | This represents an extraordinary capability. |
| 30 | This is the highest a score can go. |

**Ability Modifiers**

Each ability has a modifier that you apply whenever you make a D20 Test with that ability (explained in “D20 Tests”). An ability modifier is derived from its score, as shown in the Ability Modifiers table.

**Ability Modifiers**

| Score | Modifier |
|---|---|
| 1 | −5 |
| 2–3 | −4 |
| 4–5 | −3 |
| 6–7 | −2 |
| 8–9 | −1 |
| 10–11 | +0 |
| 12–13 | +1 |
| 14–15 | +2 |
| 16–17 | +3 |
| 18–19 | +4 |
| 20–21 | +5 |
| 22–23 | +6 |
| 24–25 | +7 |
| 26–27 | +8 |
| 28–29 | +9 |
| 30 | +10 |

#### Advantage/Disadvantage
**Tag:** Rule
**Type:** D20 Tests

Sometimes a D20 Test is modified by Advantage or Disadvantage. Advantage reflects the positive circumstances surrounding a d20 roll, while Disadvantage reflects negative circumstances.

You usually acquire Advantage or Disadvantage through the use of special abilities and actions. The GM can also decide that circumstances grant Advantage or impose Disadvantage.

**Roll Two D20s**

When a roll has either Advantage or Disadvantage, roll a second d20 when you make the roll. Use the higher of the two rolls if you have Advantage, and use the lower roll if you have Disadvantage. For example, if you have Disadvantage and roll an 18 and a 3, use the 3. If you instead have Advantage and roll those numbers, use the 18.

**They Don’t Stack**

If multiple situations affect a roll and they all grant Advantage on it, you still roll only two d20s. Similarly, if multiple situations impose Disadvantage on a roll, you roll only two d20s.

If circumstances cause a roll to have both Advantage and Disadvantage, the roll has neither of them, and you roll one d20. This is true even if multiple circumstances impose Disadvantage and only one grants Advantage or vice versa. In such a situation, you have neither Advantage nor Disadvantage.

**Interactions with Rerolls**

When you have Advantage or Disadvantage and something in the game lets you reroll or replace the d20, you can reroll or replace only one die, not both. You choose which one.

For example, if you have Heroic Inspiration (see the sidebar below) and roll a 3 and an 18 on an ability check that has Advantage or Disadvantage, you could expend your Heroic Inspiration to reroll one of those dice, not both of them.

#### Skill Proficiencies
**Tag:** Rule
**Type:** Proficiency

Most ability checks involve using a skill, which represents a category of things creatures try to do with an ability check. The descriptions of the actions you take (see “Actions” later in “Playing the Game”) specify which skill applies if you make an ability check for that action, and many other rules note when a skill is relevant. The GM has the ultimate say on whether a skill is relevant in a situation.

If a creature is proficient in a skill, the creature applies its Proficiency Bonus to ability checks involving that skill. Without proficiency in a skill, a creature can still make ability checks involving that skill but doesn’t add its Proficiency Bonus. For example, if a character tries to climb a cliff, the GM might ask for a Strength (Athletics) check. If the character has Athletics proficiency, the character adds their Proficiency Bonus to the Strength check. If the character lacks that proficiency, they make the check without adding their Proficiency Bonus.

**Skill List**

The skills are shown on the Skills table, which notes example uses for each skill proficiency as well as the ability check the skill most often applies to.

**Determining Skills**

A character’s starting skill proficiencies are determined at character creation, and a monster’s skill proficiencies appear in its stat block.

#### Saving Throw Proficiencies
**Tag:** Rule
**Type:** Proficiency

Proficiency in a saving throw lets a character add their Proficiency Bonus to saves that use a particular ability. For example, proficiency in Wisdom saves lets you add your Proficiency Bonus to your Wisdom saves. Some monsters also have saving throw proficiencies, as noted in their stat blocks.

Each class gives proficiency in at least two saving throws, representing that class’s training in evading or resisting certain threats. Wizards, for example, are proficient in Intelligence and Wisdom saves; they train to resist mental assault.

#### Equipment Proficiencies
**Tag:** Rule
**Type:** Proficiency

A character gains proficiency with various weapons and tools from their class and background. There are two categories of equipment proficiency:

**Weapons.** Anyone can wield a weapon, but proficiency makes you better at wielding it. If you have proficiency with a weapon, you add your Proficiency Bonus to attack rolls you make with it.

**Tools.** If you have proficiency with a tool, you can add your Proficiency Bonus to any ability check you make that uses the tool. If you have proficiency in the skill that’s also used with that check, you have Advantage on the check too. This means you can benefit from both skill proficiency and tool proficiency on the same ability check.

#### Social Interaction
**Tag:** Rule
**Type:** Playing the Game

During their adventures, player characters meet many different people and face some monsters that would rather talk than fight. In those situations, it’s time for social interaction, which takes many forms. For example, you might try to convince a burglar to confess to wrongdoing or try to flatter a guard. The Game Master assumes the roles of any nonplayer characters who are participating.

An NPC’s attitude toward your character is Friendly, Indifferent, or Hostile, as defined in “Rules Glossary.” Friendly NPCs are predisposed to help, and Hostile ones are inclined to hinder.

Social interactions progress in two ways: through roleplaying and ability checks.

#### Roleplaying
**Tag:** Rule
**Type:** Social Interaction
**Link:** no

Roleplaying is, literally, the act of playing out a role. In this case, it’s you as a player determining how your character thinks, acts, and talks. Roleplaying is part of every aspect of the game, and it comes to the fore during social interactions.

As you roleplay, consider whether you prefer an active approach or a descriptive approach.

The GM uses an NPC’s personality and your character’s actions and attitudes to determine how an NPC reacts. A cowardly bandit might buckle under threats of imprisonment. A stubborn merchant refuses to help if the characters badger her. A vain dragon laps up flattery.

When interacting with an NPC, pay attention to the GM’s portrayal of the NPC’s personality. You might be able to learn an NPC’s goals and then use that information to influence the NPC.

If you offer NPCs something they want or play on their sympathies, fears, or goals, you can form friendships, ward off violence, or learn a key piece of information. On the other hand, if you insult a proud warrior or speak ill of a noble’s allies, your efforts to convince or deceive will likely fail.

#### Exploration
**Tag:** Rule
**Type:** Playing the Game
**Link:** no

Exploration involves delving into places that are dangerous and full of mystery. The rules in this section detail some of the ways adventurers interact with the environment in such places.

#### Adventuring Equipment
**Tag:** Rule
**Type:** Exploration
**Link:** no

As adventurers explore, their equipment can help them in many ways. For example, they can reach out-of-the-way places with a Ladder, perceive things they wouldn’t otherwise notice with a Torch or another light source, bypass locked doors and containers with Thieves’ Tools, and create obstacles for pursuers with Caltrops.

See “Equipment” for rules on many items that are useful on adventures. The items in the“Tools” and “Adventuring Gear” sections are especially useful. The weapons in “Equipment” can also be used for more than battle; you could use a Quarterstaff, for example, to push a sinister-looking button that you’re reluctant to touch.

#### Vision and Light
**Tag:** Rule
**Type:** Exploration

Some adventuring tasks—such as noticing danger, hitting an enemy, and targeting certain spells—are affected by sight, so effects that obscure vision can hinder you, as explained below.

**Obscured Areas**

An area might be Lightly or Heavily Obscured. In a Lightly Obscured area—such as an area with Dim Light, patchy fog, or moderate foliage—you have Disadvantage on Wisdom (Perception) checks that rely on sight.

A Heavily Obscured area—such as an area with Darkness, heavy fog, or dense foliage—is opaque. You have the Blinded condition (see “Rules Glossary”) when trying to see something there.

**Light**

The presence or absence of light determines the category of illumination in an area, as defined below.

**Bright Light.** Bright Light lets most creatures see normally. Even gloomy days provide Bright Light, as do torches, lanterns, fires, and other sources of illumination within a specific radius.

**Dim Light.** Dim Light, also called shadows, creates a Lightly Obscured area. An area of Dim Light is usually a boundary between Bright Light and surrounding Darkness. The soft light of twilight and dawn also counts as Dim Light. A full moon might bathe the land in Dim Light.

**Darkness.** Darkness creates a Heavily Obscured area. Characters face Darkness outdoors at night (even most moonlit nights), within the confines of an unlit dungeon, or in an area of magical Darkness.

**Special Senses**

Some creatures have special senses that help them perceive things in certain situations. “Rules Glossary” defines the following special senses:

- Blindsight
- Darkvision
- Tremorsense
- Truesight

#### Hiding
**Tag:** Rule
**Type:** Exploration
**Link:** no

Adventurers and monsters often hide, whether to spy on one another, sneak past a guardian, or set an ambush. The Game Master decides when circumstances are appropriate for hiding. When you try to hide, you take the Hide action.

#### Interacting with Objects
**Tag:** Rule
**Type:** Exploration

Interacting with objects is often simple to resolve. The player tells the GM that their character is doing something, such as moving a lever or opening a door, and the GM describes what happens. Sometimes, however, rules govern what you can do with an object, as detailed in the following sections.

**What Is an Object?**

For the purpose of the rules, an object is a discrete, inanimate item like a window, door, sword, book, table, chair, or stone. It isn’t a building or a vehicle, which are composed of many objects.

**Time-Limited Object Interactions**

When time is short, such as in combat, interactions with objects are limited: one free interaction per turn. That interaction must occur during a creature’s movement or action. Any additional interactions require the Utilize action, as explained in “Combat” later in “Playing the Game.”

**Finding Hidden Objects**

When your character searches for hidden things, such as a secret door or a trap, the GM typically asks you to make a Wisdom (Perception) check, provided you describe the character searching in the hidden object’s vicinity. On a success, you find the object, other important details, or both.

If you describe your character searching nowhere near a hidden object, a Wisdom (Perception) check won’t reveal the object, no matter the check’s total.

**Carrying Objects**

You can usually carry your gear and treasure without worrying about the weight of those objects. If you try to haul an unusually heavy object or a massive number of lighter objects, the GM might require you to abide by the rules for carrying capacity in “Rules Glossary.”

#### Marching Order
**Tag:** Rule
**Type:** Playing the Game

The adventurers should establish a marching order while they travel, whether indoors or outdoors. A marching order makes it easier to determine which characters are affected by traps, which ones can spot hidden enemies, and which ones are the closest to those enemies if a fight breaks out. You can change your marching order outside combat and record the order any way you like: write it down, for example, or arrange miniatures to show it.

#### Travel
**Tag:** Rule
**Type:** Exploration
**Link:** no

During an adventure, the characters might travel long distances on trips that could take hours or days. The GM can summarize this travel without calculating exact distances or travel times, or the GM might have you use the travel pace rules below.

If you need to know how fast you can move when every second matters, see the movement rules in “Combat” later in “Playing the Game.”

**Vehicles**

Travelers in wagons, carriages, or other land vehicles choose a pace as normal. Characters in a waterborne vessel are limited to the speed of the vessel, and they don’t choose a travel pace. Depending on the vessel and the size of the crew, ships might be able to travel for up to 24 hours per day. “Equipment” includes vehicles for sale.

#### Travel Pace
**Tag:** Rule
**Type:** Playing the Game

While traveling outside combat, a group can move at a Fast, Normal, or Slow pace, as shown on the Travel Pace table. The table states how far the party can move in a period of time; if riding horses or other mounts, the group can move twice that distance for 1 hour, after which the mounts need a Short or Long Rest before they can move at that increased pace again (see “Equipment” for a selection of mounts for sale). “Gameplay Toolbox” has rules that affect which pace you can choose in certain types of terrain.

**Travel Pace**

| Pace | Distance per Minute | Distance per Hour | Distance per Day |
|---|---|---|---|
| Fast | 400 feet | 4 miles | 30 miles |
| Normal | 300 feet | 3 miles | 24 miles |
| Slow | 200 feet | 2 miles | 18 miles |

Each travel pace has a game effect, as defined below.

**Fast.** Traveling at a Fast pace imposes Disadvantage on a traveler’s Wisdom (Perception or Survival) and Dexterity (Stealth) checks.

**Normal.** Traveling at a Normal pace imposes Disadvantage on Dexterity (Stealth) checks.

**Slow.** Traveling at a Slow pace grants Advantage on Wisdom (Perception or Survival) checks.

A group of characters can travel overland at a Normal, Fast, or Slow pace, as described in “Playing the Game.” During any journey stage, the predominant terrain determines the characters’ maximum travel pace, as shown in the Maximum Pace column of the Travel Terrain table. Certain factors can affect a group’s travel pace.

**Good Roads**

The presence of a good road increases the group’s maximum pace by one step (from Slow to Normal or from Normal to Fast).

**Slower Travelers**

The group must move at a Slow pace if any group member’s Speed is reduced to half or less of normal.

**Extended Travel**

Characters can push themselves to travel for more than 8 hours per day, at the risk of tiring. At the end of each additional hour of travel beyond 8 hours, each character must succeed on a Constitution saving throw or gain 1 Exhaustion level. The DC is 10 plus 1 for each hour past 8 hours.

**Special Movement**

If a party can travel at a high Speed for an extended time, as with a spell such as *Wind Walk* or a magic item such as a *Carpet of Flying*, translate the party’s Speed into travel rates using these rules:

**Miles per hour** = Speed ÷ 10

**Miles per day** (Normal pace) = Miles per hour × number of hours traveled (typically 8)

**Fast pace** = Miles per day × 1⅓ (round down)

**Slow pace** = Miles per day × 2/3 (round down)

If the characters are flying or their special movement allows them to ignore Difficult Terrain, they can move at a Fast pace regardless of the terrain.

**Vehicles**

Characters traveling in a vehicle use the vehicle’s speed in miles per hour (as shown in “Equipment”) to determine their rate of travel, and they don’t choose a travel pace.

#### Playing on a Grid
**Tag:** Rule
**Type:** Playing the Game

If you play using a square grid and miniatures or other tokens, follow these rules.

**Squares.** Each square represents 5 feet.

**Speed.** Rather than moving foot by foot, move square by square on the grid, using your Speed in 5-foot segments. You can translate your Speed into squares by dividing it by 5. For example, a Speed of 30 feet translates into 6 squares. If you use a grid often, consider writing your Speed in squares on your character sheet.

**Entering a Square.** To enter a square, you must have enough movement left to pay for entering. It costs 1 square of movement to enter an unoccupied square that’s adjacent to your space (orthogonally or diagonally adjacent). A square of Difficult Terrain costs 2 squares to enter. Other effects might make a square cost even more.

**Corners.** Diagonal movement can’t cross the corner of a wall, a large tree, or another terrain feature that fills its space.

**Ranges.** To determine the range on a grid between two things—whether creatures or objects—count squares from a square adjacent to one of them and stop counting in the space of the other one. Count by the shortest route.

#### Combat
**Tag:** Rule
**Type:** Playing the Game
**Link:** no

Adventurers encounter many dangerous monsters and nefarious villains. In those moments, combat often breaks out.

#### The Order of Combat
**Tag:** Rule
**Type:** Combat

A typical combat encounter is a clash between two sides: a flurry of weapon swings, feints, parries, footwork, and spellcasting. The game organizes combat into a cycle of rounds and turns. A round represents about 6 seconds in the game world. During a round, each participant in a battle takes a turn. The order of turns is determined at the beginning of combat when everyone rolls Initiative. Once everyone has taken a turn, the fight continues to the next round if neither side is defeated.

**Combat Step by Step**

Combat unfolds in these steps:

**1: Establish Positions.** The Game Master determines where all the characters and monsters are located. Given the adventurers’ marching order or their stated positions in the room or other location, the GM figures out where the adversaries are—how far away and in what direction.

**2: Roll Initiative.** Everyone involved in the combat encounter rolls Initiative, determining the order of combatants’ turns.

**3: Take Turns.** Each participant in the battle takes a turn in Initiative order. When everyone involved in the combat has had a turn, the round ends. Repeat this step until the fighting stops.

**Your Turn**

On your turn, you can move a distance up to your Speed and take one action. You decide whether to move first or take your action first.

The main actions you can take are listed in “Actions” earlier in “Playing the Game.” A character’s features and a monster’s stat block also provide action options. “Movement and Position” later in “Playing the Game” gives the rules for movement.

**Communicating.** You can communicate however you are able—through brief utterances and gestures—as you take your turn. Doing so uses neither your action nor your move.

Extended communication, such as a detailed explanation of something or an attempt to persuade a foe, requires an action. The Influence action is the main way you try to influence a monster.

**Interacting with Things.** You can interact with one object or feature of the environment for free, during either your move or action. For example, you could open a door during your move as you stride toward a foe.

If you want to interact with a second object, you need to take the Utilize action. Some magic items and other special objects always require an action to use, as stated in their descriptions.

The GM might require you to use an action for any of these activities when it needs special care or when it presents an unusual obstacle. For instance, the GM might require you to take the Utilize action to open a stuck door or turn a crank to lower a drawbridge.

**Doing Nothing on Your Turn.** You can forgo moving, taking an action, or doing anything at all on your turn. If you can’t decide what to do, consider taking the defensive Dodge action or the Ready action to delay acting.

**Ending Combat**

Combat ends when one side or the other is defeated, which can mean the creatures are killed or knocked out or have surrendered or fled. Combat can also end when both sides agree to end it.

#### Unseen Attackers and Targets
**Tag:** Rule
**Type:** Playing the Game

When you make an attack roll against a target you can’t see, you have Disadvantage on the roll. This is true whether you’re guessing the target’s location or targeting a creature you can hear but not see. If the target isn’t in the location you targeted, you miss.

When a creature can’t see you, you have Advantage on attack rolls against it.

If you are hidden when you make an attack roll, you give away your location when the attack hits or misses.

#### Movement and Position
**Tag:** Rule
**Type:** Combat

On your turn, you can move a distance equal to your Speed or less. Or you can decide not to move.

Your movement can include climbing, crawling, jumping, and swimming (each explained in “Rules Glossary”). These different modes of movement can be combined with your regular movement, or they can constitute your entire move.

However you’re moving with your Speed, you deduct the distance of each part of your move from it until it is used up or until you are done moving, whichever comes first.

A character’s Speed is determined during character creation. A monster’s Speed is noted in the monster’s stat block. See “Rules Glossary” for more about Speed as well as about special speeds, such as a Climb Speed, Fly Speed, or Swim Speed.

**Breaking Up Your Move**

You can break up your move, using some of its movement before and after any action, Bonus Action, or Reaction you take on the same turn. For example, if you have a Speed of 30 feet, you could go 10 feet, take an action, and then go 20 feet.

**Dropping Prone**

On your turn, you can give yourself the Prone condition (see “Rules Glossary”) without using an action or any of your Speed, but you can’t do so if your Speed is 0.

**Creature Size**

A creature belongs to a size category, which determines the width of the square space the creature occupies on a map, as shown on the Creature Size and Space table. That table lists the sizes from smallest (Tiny) to largest (Gargantuan). A creature’s space is the area that it effectively controls in combat and the area it needs to fight effectively.

A character’s size is determined by species, and a monster’s size is specified in the monster’s stat block.

**Creature Size and Space**

| Size | Space (Feet) | Space (Squares) |
|---|---|---|
| Tiny | 2½ by 2½ feet | 4 per square |
| Small | 5 by 5 feet | 1 square |
| Medium | 5 by 5 feet | 1 square |
| Large | 10 by 10 feet | 4 squares (2 by 2) |
| Huge | 15 by 15 feet | 9 squares (3 by 3) |
| Gargantuan | 20 by 20 feet | 16 squares (4 by 4) |

**Moving around Other Creatures**

During your move, you can pass through the space of an ally, a creature that has the Incapacitated condition (see “Rules Glossary”), a Tiny creature, or a creature that is two sizes larger or smaller than you.

Another creature’s space is Difficult Terrain for you unless that creature is Tiny or your ally.

You can’t willingly end a move in a space occupied by another creature. If you somehow end a turn in a space with another creature, you have the Prone condition (see “Rules Glossary”) unless you are Tiny or are of a larger size than the other creature.

#### Making an Attack
**Tag:** Rule
**Type:** Combat
**Link:** no

When you take the Attack action, you make an attack. Some other actions, Bonus Actions, and Reactions also let you make an attack. Whether you strike with a Melee weapon, fire a Ranged weapon, or make an attack roll as part of a spell, an attack has the following structure:

**1: Choose a Target.** Pick a target within your attack’s range: a creature, an object, or a location.

**2: Determine Modifiers.** The GM determines whether the target has Cover (see the next section) and whether you have Advantage or Disadvantage against the target. In addition, spells, special abilities, and other effects can apply penalties or bonuses to your attack roll.

**3: Resolve the Attack.** Make the attack roll, as detailed earlier in “Playing the Game.” On a hit, you roll damage unless the particular attack has rules that specify otherwise. Some attacks cause special effects in addition to or instead of damage.

#### Ranged Attacks
**Tag:** Rule
**Type:** Combat
**Link:** no

When you make a ranged attack, you fire a bow, hurl an axe, or otherwise send projectiles to strike a foe at a distance. Many spells also involve making a ranged attack.

**Range**

You can make ranged attacks only against targets within a specified range. If a ranged attack, such as one made with a spell, has a single range, you can’t attack a target beyond this range. Some ranged attacks, such as those made with a Longbow, have two ranges. The smaller number is the normal range, and the larger number is the long range. Your attack roll has Disadvantage when your target is beyond normal range, and you can’t attack a target beyond long range.

**Ranged Attacks in Close Combat**

Aiming a ranged attack is more difficult when a foe is next to you. When you make a ranged attack roll with a weapon, a spell, or some other means, you have Disadvantage on the roll if you are within 5 feet of an enemy who can see you and doesn’t have the Incapacitated condition (see “Rules Glossary”).

#### Melee Attacks
**Tag:** Rule
**Type:** Combat
**Link:** no

A melee attack allows you to attack a target within your reach. A melee attack typically uses a handheld weapon or an Unarmed Strike. Many monsters make melee attacks with claws, teeth, or other body parts. A few spells also involve melee attacks.

#### Mounted Combat
**Tag:** Rule
**Type:** Combat

A willing creature that is at least one size larger than a rider and that has an appropriate anatomy can serve as a mount, using the following rules.

**Mounting and Dismounting**

During your move, you can mount a creature that is within 5 feet of you or dismount. Doing so costs an amount of movement equal to half your Speed (round down). For example, if your Speed is 30 feet, you spend 15 feet of movement to mount a horse.

**Controlling a Mount**

You can control a mount only if it has been trained to accept a rider. Domesticated horses, mules, and similar creatures have such training.

The Initiative of a controlled mount changes to match yours when you mount it. It moves on your turn as you direct it, and it has only three action options during that turn: Dash, Disengage, and Dodge. A controlled mount can move and act even on the turn that you mount it.

In contrast, an independent mount—one that lets you ride but ignores your control—retains its place in the Initiative order and moves and acts as it likes.

**Falling Off**

If an effect is about to move your mount against its will while you’re on it, you must succeed on a DC 10 Dexterity saving throw or fall off, landing with the Prone condition (see “Rules Glossary”) in an unoccupied space within 5 feet of the mount.

While mounted, you must make the same save if you’re knocked Prone or the mount is.

#### Resting
**Tag:** Rule
**Type:** Playing the Game
**Link:** no

Adventurers can’t spend every hour adventuring. They need rest. Any creature can take hour-long Short Rests in the midst of a day and an 8-hour Long Rest to end it. Regaining Hit Points is one of the main benefits of a rest. “Rules Glossary” provides the rules for Short and Long Rests.

#### Underwater Combat
**Tag:** Rule
**Type:** Combat

A fight underwater follows these rules.

**Impeded Weapons**

When making a melee attack roll with a weapon underwater, a creature that lacks a Swim Speed has Disadvantage on the attack roll unless the weapon deals Piercing damage.

A ranged attack roll with a weapon underwater automatically misses a target beyond the weapon’s normal range, and the attack roll has Disadvantage against a target within normal range.

**Fire Resistance**

Anything underwater has Resistance to Fire damage (explained in “Damage and Healing”).

#### Damage and Healing
**Tag:** Rule
**Type:** Playing the Game

Injury and death are frequent threats, as detailed in the following rules.

#### Saving Throws and Damage
**Tag:** Rule
**Type:** Damage and Healing

Damage dealt via saving throws uses these rules.

**Damage against Multiple Targets**

When you create a damaging effect that forces two or more targets to make saving throws against it at the same time, roll the damage once for all the targets. For example, when a wizard casts *Fireball*, the spell’s damage is rolled once for all creatures caught in the blast.

**Half Damage**

Many saving throw effects deal half damage (round down) to a target when the target succeeds on the saving throw. The halved damage is equal to half the damage that would be dealt on a failed save.

#### Resistance and Vulnerability
**Tag:** Rule
**Type:** Damage and Healing

Some creatures and objects have Resistance or Vulnerability to certain damage types. If you have Resistance to a damage type, damage of that type is halved against you (round down). If you have Vulnerability to a damage type, damage of that type is doubled against you. For example, if you have Resistance to Cold damage, such damage is halved against you, and if you have Vulnerability to Fire damage, such damage is doubled against you.

**No Stacking**

Multiple instances of Resistance or Vulnerability that affect the same damage type count as only one instance. For example, if you have Resistance to Necrotic damage as well as Resistance to all damage, Necrotic damage is reduced by half against you.

**Order of Application**

Modifiers to damage are applied in the following order: adjustments such as bonuses, penalties, or multipliers are applied first; Resistance is applied second; and Vulnerability is applied third.

For example, a creature has Resistance to all damage and Vulnerability to Fire damage, and it’s within a magical aura that reduces all damage by 5. If it takes 28 Fire damage, the damage is first reduced by 5 (to 23), then halved for the creature’s Resistance (and rounded down to 11), then doubled for its Vulnerability (to 22).

#### Dropping to 0 Hit Points
**Tag:** Rule
**Type:** Damage and Healing

When a creature drops to 0 Hit Points, it either dies outright or falls unconscious, as explained below.

**Instant Death**

Here are the main ways a creature can die instantly.

**Monster Death.** A monster dies the instant it drops to 0 Hit Points, although a Game Master can ignore this rule for an individual monster and treat it like a character.

**Hit Point Maximum of 0.** A creature dies if its Hit Point maximum reaches 0. Certain effects drain life energy, reducing a creature’s Hit Point maximum.

**Massive Damage.** When damage reduces a character to 0 Hit Points and damage remains, the character dies if the remainder equals or exceeds their Hit Point maximum. For example, if your character has a Hit Point maximum of 12, currently has 6 Hit Points, and takes 18 damage, the character drops to 0 Hit Points, but 12 damage remains. The character then dies, since 12 equals their Hit Point maximum.

**Character Demise**

If your character dies, others might find a magical way to revive your character, such as with the *Raise Dead* spell. Or talk with the GM about making a new character to join the group. “Rules Glossary” has more information on being dead.

**Falling Unconscious**

If you reach 0 Hit Points and don’t die instantly, you have the Unconscious condition (see “Rules Glossary”) until you regain any Hit Points, and you now face making Death Saving Throws (see below).

**Stabilizing a Character**

You can take the Help action to try to stabilize a creature with 0 Hit Points, which requires a successful DC 10 Wisdom (Medicine) check.

A Stable creature doesn’t make Death Saving Throws even though it has 0 Hit Points, but it still has the Unconscious condition. If the creature takes damage, it stops being Stable and starts making Death Saving Throws again. A Stable creature that isn’t healed regains 1 Hit Point after 1d4 hours.

#### Selling Equipment
**Tag:** Rule
**Type:** Playing the Game

Equipment fetches half its cost when sold. In contrast, trade goods and valuables—like gems and art objects—retain their full value in the marketplace. “Magic Items” has prices for magic items.


## Equipment

From the “Equipment” chapter of the SRD 5.2.1 (attribution statement under “Rules Glossary” above).

#### Coins
**Tag:** Rule
**Type:** Equipment
**Link:** no

Characters often find coins on their adventures and can spend those coins in shops, inns, and other businesses. Coins come in different denominations based on the relative worth of their material. The Coin Values table lists coins and how much they’re worth relative to the Gold Piece, which is the game’s main coin. For example, 100 Copper Pieces are worth 1 Gold Piece.

A coin weighs about a third of an ounce, so fifty coins weigh a pound.

**Coin Values**

| Coin | Value in GP |
|---|---|
| Copper Piece (CP) | 1/100 |
| Silver Piece (SP) | 1/10 |
| Electrum Piece (EP) | 1/2 |
| Gold Piece (GP) | 1 |
| Platinum Piece (PP) | 10 |

#### Weapon Proficiency
**Tag:** Rule
**Type:** Weapons

Anyone can wield a weapon, but you must have proficiency with it to add your Proficiency Bonus to an attack roll you make with it. A player character’s features can provide weapon proficiencies. A monster is proficient with any weapon in its stat block.

#### Properties
**Tag:** Rule
**Type:** Weapons
**Link:** no

Here are definitions of the properties in the Properties column of the Weapons table.

#### Mastery Properties
**Tag:** Rule
**Type:** Weapons

Each weapon has a mastery property, which is usable only by a character who has a feature, such as Weapon Mastery, that unlocks the property for the character. The properties are defined below.

#### Armor
**Tag:** Rule
**Type:** Equipment
**Link:** no

The Armor table lists the game’s main armor. The table includes the cost and weight of armor, as well as the following details:

**Category.** Every type of armor falls into a category: Light, Medium, or Heavy. The category determines how long it takes to don or doff the armor (as shown in the table).

**Armor Class (AC).** The table’s Armor Class column tells you what your base AC is when you wear a type of armor. For example, if you wear Leather Armor, your base AC is 11 plus your Dexterity modifier, whereas your AC is 16 in Chain Mail.

**Strength.** If the table shows a Strength score in the Strength column for an armor type, that armor reduces the wearer’s speed by 10 feet unless the wearer has a Strength score equal to or higher than the listed score.

**Stealth.** If the table shows “Disadvantage” in the Stealth column for an armor type, the wearer has Disadvantage on Dexterity (Stealth) checks.

**One at a Time**

A creature can wear only one suit of armor at a time and wield only one Shield at a time.

#### Tools
**Tag:** Rule
**Type:** Equipment
**Link:** no

A tool helps you make specialized ability checks, craft certain items, or both. A tool’s description includes the tool’s cost and weight, as well as the following entries:

**Ability.** This entry lists the ability to use when making an ability check with the tool.

**Utilize.** This entry lists things you can do with the tool when you take the Utilize action. You can do one of those things each time you take the action. This entry also provides the DC for the action.

**Craft.** This entry lists what, if anything, you can craft with the tool. For crafting rules, see “Crafting Nonmagical Items,” “Brewing Potions of Healing,” and “Scribing Spell Scrolls” later in “Equipment.”

**Variants.** This entry appears if the tool has variants, which are listed. Each requires a separate proficiency.

#### Tool Proficiency
**Tag:** Rule
**Type:** Tools

If you have proficiency with a tool, add your Proficiency Bonus to any ability check you make that uses the tool. If you have proficiency in a skill that’s used with that check, you have Advantage on the check too.

Your features might give you proficiency with a tool. A monster has proficiency with any tool in its stat block.

#### Artisan’s Tools
**Tag:** Rule
**Type:** Tools

Artisan’s Tools are each focused on crafting items and pursuing a trade. Each of these tools requires a separate proficiency.

#### Adventuring Gear
**Tag:** Rule
**Type:** Equipment
**Link:** no

The Adventuring Gear table in this section includes gear that adventurers often find useful. These items are described here in alphabetical order, with an item’s price appearing after its name.

#### Mounts and Vehicles
**Tag:** Rule
**Type:** Equipment

A mount can help you move more quickly through the wilderness, but its primary purpose is to carry gear that would otherwise slow you down. The Mounts and Other Animals table shows each animal’s carrying capacity. See “Monsters” for the animals’ stat blocks.

**Mounts and Cargo**

An animal pulling a carriage, cart, chariot, sled, or wagon can move weight up to five times its base carrying capacity, including the weight of the vehicle. If multiple animals pull the same vehicle, add their carrying capacities together.

**Barding**

Barding is armor designed for a mount. Any type of armor on the Armor table in “Equipment” can be purchased as barding. The cost is four times the normal cost, and it weighs twice as much.

**Saddles**

A saddle comes with a bit, a bridle, reins, and any other equipment needed to use the saddle. A Military Saddle gives Advantage on any ability check you make to remain mounted. An Exotic Saddle is required for riding an aquatic or a flying mount.

**Mounts and Other Animals**

| Item | Carrying Capacity | Cost |
|---|---|---|
| Camel | 450 lb. | 50 GP |
| Elephant | 1,320 lb. | 200 GP |
| Horse, Draft | 540 lb. | 50 GP |
| Horse, Riding | 480 lb. | 75 GP |
| Mastiff | 195 lb. | 25 GP |
| Mule | 420 lb. | 8 GP |
| Pony | 225 lb. | 30 GP |
| Warhorse | 540 lb. | 400 GP |

**Tack, Harness, and Drawn Vehicles**

| Item | Weight | Cost |
|---|---|---|
| Carriage | 600 lb. | 100 GP |
| Cart | 200 lb. | 15 GP |
| Chariot | 100 lb. | 250 GP |
| Feed per day | 10 lb. | 5 CP |
| **Saddle** |  |  |
| Exotic | 40 lb. | 60 GP |
| Military | 30 lb. | 20 GP |
| Riding | 25 lb. | 10 GP |
| Sled | 300 lb. | 20 GP |
| Stabling per day | — | 5 SP |
| Wagon | 400 lb. | 35 GP |

**Large Vehicles**

The Airborne and Waterborne Vehicles table provides statistics for various types of large vehicles. The following notes apply.

**Speed**

A ship sailing against a strong wind moves at half speed. In a dead calm (no wind), waterborne ships can’t move under sail and must be rowed. Keelboats and Rowboats are used on lakes and rivers. If going downstream, add the speed of the current (typically 3 miles per hour) to the speed of the vehicle. These vehicles can’t be rowed against any significant current, but they can be pulled upstream by draft animals on the shores. A Rowboat can be carried and weighs 100 pounds.

**Crew**

A ship larger than a Keelboat or Rowboat needs a crew of skilled hirelings (see “Hirelings” later in “Equipment”) to function. The minimum number of skilled hirelings needed to crew a ship depends on the type of ship, as shown in the table.

**Passengers**

The table lists the number of Small and Medium passengers the ship can accommodate using hammocks. A ship outfitted with private accommodations can carry one-fifth as many passengers. A passenger usually pays 5 SP per day for a hammock, but prices can vary from ship to ship. A small private cabin usually costs 2 GP per day.

**Damage Threshold**

If a vehicle has a damage threshold (see “Rules Glossary”), it’s noted in the table.

**Ship Repair**

Repairs to a damaged ship can be made while the vessel is berthed. Repairing 1 Hit Point of damage requires 1 day and costs 20 GP for materials and labor. If the repairs are made in a location where supplies and skilled labor are abundant, such as a city shipyard, the repair time and cost are halved.

#### Lifestyle Expenses
**Tag:** Rule
**Type:** Equipment

Lifestyle expenses summarize the cost of living in a fantasy world. They cover lodging, food, equipment maintenance, and other necessities.

At the start of each week or month (GM’s choice), choose a lifestyle below—Wretched, Squalid, Poor, Modest, Comfortable, Wealthy, or Aristocratic—and pay the price to sustain that lifestyle.

Lifestyles have no inherent consequences, but the GM might take them into account when determining risks or how others perceive your character.

**Wretched (Free)**

You survive via chance and charity. You’re often exposed to natural dangers as a result of sleeping outside.

**Squalid (1 SP per Day)**

You spend the bare minimum for your necessities. You might be exposed to unhealthy conditions and opportunistic criminals.

**Poor (2 SP per Day)**

You spend frugally for your necessities.

**Modest (1 GP per Day)**

You support yourself at an average level.

**Comfortable (2 GP per Day)**

You spend modestly for your necessities and enjoy a few luxuries.

**Wealthy (4 GP per Day)**

You’re accustomed to the finer things in life and might have servants.

**Aristocratic (10 GP per Day)**

You pay for the best and might have a staff that supports your lifestyle. Others notice your wealth and might encourage you to share it, either legally or otherwise.

#### Food, Drink, and Lodging
**Tag:** Rule
**Type:** Equipment

The Food, Drink, and Lodging table gives prices for food and a single night’s lodging. Prices for daily lodging and meals are included in your lifestyle’s expenses.

**Food, Drink, and Lodging**

| Item | Cost |
|---|---|
| Ale (mug) | 4 CP |
| Bread (loaf) | 2 CP |
| Cheese (wedge) | 1 SP |
| **Inn Stay per Day** |  |
| Squalid | 7 CP |
| Poor | 1 SP |
| Modest | 5 SP |
| Comfortable | 8 SP |
| Wealthy | 2 GP |
| Aristocratic | 4 GP |
| **Meal** |  |
| Squalid | 1 CP |
| Poor | 2 CP |
| Modest | 1 SP |
| Comfortable | 2 SP |
| Wealthy | 3 SP |
| Aristocratic | 6 SP |
| **Wine (bottle)** |  |
| Common | 2 SP |
| Fine | 10 GP |

**Airborne and Waterborne Vehicles**

| Ship | Speed | Crew | Passengers | Cargo (Tons) | AC | HP | Damage Threshold | Cost |
|---|---|---|---|---|---|---|---|---|
| Airship | 8 mph | 10 | 20 | 1 | 13 | 300 | — | 40,000 GP |
| Galley | 4 mph | 80 | — | 150 | 15 | 500 | 20 | 30,000 GP |
| Keelboat | 1 mph | 1 | 6 | 1/2 | 15 | 100 | 10 | 3,000 GP |
| Longship | 3 mph | 40 | 150 | 10 | 15 | 300 | 15 | 10,000 GP |
| Rowboat | 1½ mph | 1 | 3 | — | 11 | 50 | — | 50 GP |
| Sailing Ship | 2 mph | 20 | 20 | 100 | 15 | 300 | 15 | 10,000 GP |
| Warship | 2½ mph | 60 | 60 | 200 | 15 | 500 | 20 | 25,000 GP |

#### Hirelings
**Tag:** Rule
**Type:** Equipment
**Link:** no

Skilled hirelings include anyone hired to perform a service that involves a proficiency (including weapon, tool, or skill): a mercenary, an artisan, a scribe, or the like. The pay shown on the Hirelings table is a minimum; some expert hirelings require more pay. Untrained hirelings are hired for work that requires no particular proficiencies; they include laborers and porters.

**Hirelings**

| Service | Cost |
|---|---|
| Skilled hireling | 2 GP per day |
| Untrained hireling | 2 SP per day |
| Messenger | 2 CP per mile |

#### Spellcasting Services
**Tag:** Rule
**Type:** Equipment

Most settlements contain individuals who are willing to cast spells in exchange for payment. If a spell has expensive components, add the cost of those components to the cost listed in the Spellcasting Services table. The higher the level of a desired spell, the harder it is to find someone to cast it.

**Spellcasting Services**

| Spell Level | Availability | Cost |
|---|---|---|
| Cantrip | Village, town, or city | 30 GP |
| 1 | Village, town, or city | 50 GP |
| 2 | Village, town, or city | 200 GP |
| 3 | Town or city only | 300 GP |
| 4–5 | Town or city only | 2,000 GP |
| 6–8 | City only | 20,000 GP |
| 9 | City only | 100,000 GP |

#### Magic Items
**Tag:** Rule
**Type:** Equipment
**Link:** no

Adventures hold the promise—but not a guarantee—of finding magic items. Hundreds of magic items are detailed in “Magic Items” later in this document. Here’s what you need to know about using magic items.

Magic items are gleaned from the hoards of felled monsters or discovered in long-lost vaults. Such items grant capabilities a character could rarely have otherwise, or they complement their owner’s capabilities in wondrous ways.

#### Identifying a Magic Item
**Tag:** Rule
**Type:** Magic Items

Some magic items are indistinguishable from their nonmagical counterparts, while others are conspicuously magical. Handling a magic item is enough to give you a sense that it is extraordinary, but learning a magic item’s properties isn’t automatic.

The *Identify* spell is the fastest way to reveal an item’s properties. Alternatively, you can focus on one magic item during a Short Rest while being in physical contact with the item. At the end of the rest, you learn its properties and how to use them (but not any curse the item might bear).

Sometimes a magic item carries a clue to its properties. The command word to activate a ring might be etched inside the band, or a feathered design might hint that it’s a *Ring of Feather Falling*.

Wearing or experimenting with an item can also offer hints about its properties. In the specific case of Potions, a little taste is enough to tell the taster what a potion does. Other items might require more experimentation. For example, if your character puts on a *Ring of Swimming*, the GM might say, “Your movement feels strangely fluid.” Perhaps you then dive into a river to see what happens. The GM would then say you swim unexpectedly well.

#### Wearing and Wielding Items
**Tag:** Rule
**Type:** Magic Items

Using a magic item’s properties might mean wearing or wielding it. A magic item meant to be worn must be donned in the intended fashion: boots go on feet, gloves on hands, hats and helmets on a head, and rings on a finger. Magic armor must be donned, a Shield strapped to the arm, a cloak fastened about the shoulders. A weapon must be held.

In most cases, a magic item that’s meant to be worn can fit a creature regardless of size or build. Magic garments are made to be easily adjustable, or they magically adjust themselves to the wearer.

**Multiple Items of the Same Kind**

You can’t wear more than one of certain magic items. You can’t normally wear more than one pair of footwear, one pair of gloves or gauntlets, one pair of bracers, one suit of armor, one item of headwear, or one cloak. The GM might make exceptions.

**Paired Items**

Items that come in pairs—such as boots, bracers, gauntlets, and gloves—impart their benefits only if both items of the pair are worn. For example, a character wearing a *Boot of Striding and Springing* on one foot and a *Boot of Elvenkind* on the other foot gains no benefit from either.

#### Crafting Nonmagical Items
**Tag:** Rule
**Type:** Equipment

To craft a nonmagical item, you need tools, raw materials, and time, each of which is detailed below. If you meet the requirements, you make the item, and you can use it or sell it at its normal price.

**Tools**

The “Tools” section of “Equipment” lists which tools are required to make certain items. The GM assigns required tools for items not listed there.

You must use the required tool to make an item and have proficiency with that tool. Anyone who helps you must also have proficiency with it.

**Raw Materials**

To make an item, you need raw materials worth half its purchase cost (round down). For example, you need 750 GP of raw materials to make Plate Armor, which sells for 1,500 GP. The GM determines whether appropriate raw materials are available.

**Time**

To determine how many days (working 8 hours a day) it takes to make an item, divide its purchase cost in GP by 10 (round a fraction up to a day). For example, you need 5 days to make a Heavy Crossbow, which sells for 50 GP.

If an item requires multiple days, the days needn’t be consecutive.

Characters can combine their efforts to shorten the crafting time. Divide the time needed to create an item by the number of characters working on it. Normally, only one other character can assist you, but the GM might allow more assistants.

#### Brewing Potions of Healing
**Tag:** Rule
**Type:** Equipment

A character who has proficiency with the Herbalism Kit can create a *Potion of Healing*. Doing so requires using that kit and 25 GP of raw material over the course of 1 day (8 hours of work).

#### Scribing Spell Scrolls
**Tag:** Rule
**Type:** Equipment

A spellcaster can transfer a spell to a scroll and create a *Spell Scroll*, using the rules below.

**Time and Cost**

Scribing a scroll takes an amount of time and money based on the level of the spell, as shown in the Spell Scroll Costs table. For each day of inscription, you must work for 8 hours. If a scroll requires multiple days, those days needn’t be consecutive.

**Prerequisites for the Scribe**

To scribe a scroll, you must have proficiency in the Arcana skill or with Calligrapher’s Supplies and have the spell prepared on each day of the inscription. You must also have at hand any Material components required by the spell; if the spell consumes its Material components, they are consumed only when you complete the scroll. The scroll’s spell uses your spell save DC and spell attack bonus.

**Cantrips**

If the scribed spell is a cantrip, the version on the scroll works as if the caster were your level.

**Spell Scroll Costs**

| Spell Level | Time | Cost |
|---|---|---|
| Cantrip | 1 day | 15 GP |
| 1 | 1 day | 25 GP |
| 2 | 3 days | 100 GP |
| 3 | 5 days | 150 GP |
| 4 | 10 days | 1,000 GP |
| 5 | 25 days | 1,500 GP |
| 6 | 40 days | 10,000 GP |
| 7 | 50 days | 12,500 GP |
| 8 | 60 days | 15,000 GP |
| 9 | 120 days | 50,000 GP |


## Gameplay Toolbox

From the “Gameplay Toolbox” chapter of the SRD 5.2.1 (attribution statement under “Rules Glossary” above).

#### Creating a Background
**Tag:** Rule
**Type:** Gameplay Toolbox

A character’s background represents what the character did prior to becoming an adventurer. Creating a unique background or customizing an existing one can reflect the particular theme of your campaign or elements of your world. You can also create a background to help a player craft the story they have in mind for their character.

This section describes, step by step, how you can create backgrounds tailored for your world and the heroes in it.

**1: Choose Abilities**

Choose three abilities that seem appropriate for the background:

**Strength or Dexterity.** These abilities are ideal for a background involving physical exertion.

**Constitution.** This ability is ideal for a background that involves endurance or long hours of activity.

**Travel Terrain**

| Terrain | Maximum Pace | Encounter Distance | Foraging DC | Navigation DC | Search DC |
|---|---|---|---|---|---|
| Arctic | Fast* | 6d6 × 10 feet | 20 | 10 | 10 |
| Coastal | Normal | 2d10 × 10 feet | 10 | 5 | 15 |
| Desert | Normal | 6d6 × 10 feet | 20 | 10 | 10 |
| Forest | Normal | 2d8 × 10 feet | 10 | 15 | 15 |
| Grassland | Fast | 6d6 × 10 feet | 15 | 5 | 15 |
| Hill | Normal | 2d10 × 10 feet | 15 | 10 | 15 |
| Mountain | Slow | 4d10 × 10 feet | 20 | 15 | 20 |
| Swamp | Slow | 2d8 × 10 feet | 10 | 15 | 20 |
| Underdark | Normal | 2d6 × 10 feet | 20 | 10 | 20 |
| Urban | Normal | 2d6 × 10 feet | 20 | 15 | 15 |
| Waterborne | Special† | 6d6 × 10 feet | 15 | 10 | 15 |

*Appropriate equipment (such as skis) is necessary to keep up a Fast pace in Arctic terrain.

†Characters’ rate of travel while waterborne depends on the vehicle carrying them; see “Vehicles.”

**Intelligence or Wisdom.** One or both abilities are ideal for a background that focuses on cerebral or spiritual matters.

**Charisma.** This ability is ideal for a background that involves performance or social interaction.

**2: Choose a Feat**

Choose one feat from the Origin category. See “Origin Feats” for examples of Origin feats.

**3: Choose Skill Proficiencies**

Choose two skills appropriate for the background. There needn’t be a relationship between the skill proficiencies a background grants and the ability scores it increases.

**4: Choose a Tool Proficiency**

Choose one tool used in the practice of the background or often associated with it.

**5: Choose Equipment**

Assemble a package of equipment worth 50 GP (including unspent gold). Don’t include Martial weapons or armor, as characters get them from their class choices.

#### Curses and Magical Contagions
**Tag:** Rule
**Type:** Gameplay Toolbox

A curse is a magical burden that lasts for a specified time or until it is ended by some means. A magical contagion is an adverse effect of magical origin that is contagious by definition.

The following sections discuss curses and magical contagions in detail.

#### Magical Contagions
**Tag:** Rule
**Type:** Curses and Magical Contagions

Alchemists, potion brewers, and areas of wild magic are credited with creating the first magical contagions. An outbreak of such a contagion can form the basis of an adventure as characters search for a cure and try to stop the contagion’s spread.

**Rest and Recuperation**

If a creature infected with a magical contagion spends 3 days recuperating—engaging in no activities that would interrupt a Long Rest—the creature makes a DC 15 Constitution saving throw at the end of the recuperation period. On a successful save, the creature has Advantage on saving throws to fight off the magical contagion for the next 24 hours.

**Example Contagions**

The following examples show how magical contagions can work. Feel free to alter the saving throw DCs, effects, and other characteristics of these contagions to suit your campaign.

**Cackle Fever**

*Magical Contagion* Cheaply made potions and elixirs are sometimes tainted by Cackle Fever, which affects Humanoids only (gnomes are strangely immune). A creature suffers the following effects 1d4 days after infection:

**Fever.** The creature gains 1 Exhaustion level, which lasts until the contagion ends on the creature.

**Uncontrollable Laughter.** While the creature has the Exhaustion condition, the creature makes a DC 13 Constitution saving throw each time it takes damage other than Psychic damage. On a failed save, the creature takes 5 (1d10) Psychic damage and has the Incapacitated condition as it laughs uncontrollably. At the end of each of its turns, the creature repeats the save, ending the effect on itself on a success. After 1 minute, it succeeds automatically. **Fighting the Contagion.** At the end of each Long Rest, an infected creature makes a DC 13 Constitution saving throw. After the creature succeeds on three of these saves, the contagion ends on it, and the creature is immune to Cackle Fever for 1 year.

**Spreading the Contagion.** Any Humanoid (other than a gnome) that starts its turn within a 10-foot Emanation originating from a creature infected with Cackle Fever must succeed on a DC 10 Constitution saving throw or also become infected with the contagion. On a successful save, the Humanoid can’t catch the contagion from that particular infected creature for the next 24 hours.

**Sewer Plague**

*Magical Contagion* Fouled potions and alchemical waste can give rise to Sewer Plague, which incubates in sewers and refuse heaps and is sometimes transmitted by creatures that dwell in such areas, including otyughs and rats. Any Humanoid that is wounded by a creature that carries the contagion or that comes into contact with contaminated filth or offal must succeed on a DC 11 Constitution saving throw or become infected with Sewer Plague. A creature suffers the following effects 1d4 days after infection:

**Fatigue.** The creature gains 1 Exhaustion level.

**Weakness.** While the creature has any Exhaustion levels, it regains only half the normal number of Hit Points from spending Hit Point Dice.

**Restlessness.** While the creature has any Exhaustion levels, finishing a Long Rest neither restores lost Hit Points nor reduces the creature’s Exhaustion level. **Fighting the Contagion.** Daily at dawn, an infected creature makes a DC 11 Constitution saving throw. On a failed save, the creature gains 1 Exhaustion level as its fatigue worsens. On a successful save, the creature’s Exhaustion level decreases by 1. If the creature’s Exhaustion level is reduced to 0, the contagion ends on the creature.

**Sight Rot**

*Magical Contagion* Any Beast or Humanoid that drinks water tainted by Sight Rot must succeed on a DC 15 Constitution saving throw or have the Blinded condition until the contagion ends.

**Fighting the Contagion.** Magic such as a *Heal* or *Lesser Restoration* spell ends the contagion immediately. A character who is proficient with an Herbalism Kit can use it to create one dose of nonmagical ointment, which takes 1 hour. When applied to the eyes of a creature suffering from Sight Rot, the ointment suppresses the contagion on that creature for 24 hours. If the contagion is suppressed in this way for a total of 72 hours (requiring three doses and applications of the ointment), the contagion ends on the creature.

**Spreading the Contagion.** Any Humanoid that makes skin contact with a creature infected with Sight Rot must succeed on a DC 15 Constitution saving throw or also become infected with the contagion. On a successful save, the Humanoid can’t catch the contagion from that particular infected creature for the next 24 hours.

#### Environmental Effects
**Tag:** Rule
**Type:** Gameplay Toolbox
**Also:** Environmental Effect

The following are environmental effects:

- Dead Magic Zone
- Deep Water
- Extreme Cold
- Extreme Heat
- Frigid Water
- Heavy Precipitation
- High Altitude
- Planar Effects
- Slippery Ice
- Strong Wind
- Thin Ice
- Wild Magic Zone

#### Deep Water
**Tag:** Rule
**Type:** Environmental Effects

Swimming through deep water (more than 100 feet deep) presents additional challenges because of the water’s pressure and cold temperature. After each hour of swimming in deep water, a creature that lacks a Swim Speed must succeed on a DC 10 Constitution saving throw or gain 1 Exhaustion level.

#### Extreme Cold
**Tag:** Rule
**Type:** Environmental Effects

When the temperature is 0 degrees Fahrenheit or lower, a creature exposed to the extreme cold must succeed on a DC 10 Constitution saving throw at the end of each hour or gain 1 Exhaustion level. Creatures that have Resistance or Immunity to Cold damage automatically succeed on the save.

#### Extreme Heat
**Tag:** Rule
**Type:** Environmental Effects

When the temperature is 100 degrees Fahrenheit or higher, a creature exposed to the extreme heat and without access to drinkable water must succeed on a Constitution saving throw at the end of each hour or gain 1 Exhaustion level. The DC is 5 for the first hour and increases by 1 for each additional hour. Creatures wearing Medium or Heavy armor have Disadvantage on the save. Creatures that have Resistance or Immunity to Fire damage automatically succeed on the save.

#### Frigid Water
**Tag:** Rule
**Type:** Environmental Effects

A creature can be immersed in frigid water for a number of minutes equal to its Constitution score before suffering any ill effects. Each additional minute spent in frigid water requires the creature to succeed on a DC 10 Constitution saving throw or gain 1 Exhaustion level. Creatures with Resistance or Immunity to Cold damage automatically succeed on the save, as do creatures that are naturally adapted to living in ice-cold water.

#### Heavy Precipitation
**Tag:** Rule
**Type:** Environmental Effects

Everything within an area of heavy rain or heavy snowfall is Lightly Obscured, and creatures in the area have Disadvantage on all Wisdom (Perception) checks. Heavy rain also extinguishes open flames.

#### High Altitude
**Tag:** Rule
**Type:** Environmental Effects

Traveling at altitudes of 10,000 feet or higher above sea level is taxing for most creatures because of the reduced amount of oxygen in the air. Each hour such a creature spends traveling at high altitude counts as 2 hours for the purpose of determining how long that creature can travel (see “Travel Pace”).

Creatures can become acclimated to a high altitude by spending 30 days or more at this elevation. Creatures can’t become acclimated to elevations above 20,000 feet unless they are native to such environments.

#### Slippery Ice
**Tag:** Rule
**Type:** Environmental Effects

Slippery ice is Difficult Terrain. A creature that moves onto slippery ice for the first time on a turn or starts its turn there must succeed on a DC 10 Dexterity saving throw or have the Prone condition.

#### Strong Wind
**Tag:** Rule
**Type:** Environmental Effects

Strong wind imposes Disadvantage on ranged attack rolls with weapons. It also extinguishes open flames and disperses fog. A flying creature in a strong wind must land at the end of its turn or fall.

A strong wind in a desert can create a sandstorm that imposes Disadvantage on Wisdom (Perception) checks.

#### Thin Ice
**Tag:** Rule
**Type:** Environmental Effects

Thin ice has a weight tolerance of 3d10 × 10 pounds per 10-foot-square area. Whenever the total weight on an area of thin ice exceeds its tolerance, the ice in that area breaks. All creatures on broken ice fall through. Below the ice is frigid water (see “Frigid Water” above).

#### Fear and Mental Stress
**Tag:** Rule
**Type:** Gameplay Toolbox

Due to the nature of their vocation, adventurers tend to be less susceptible to fear and mental stress than common folk. Whereas a farmer might flee in terror from a bear or an apparition, adventurers are made of sterner stuff. That said, certain creatures and game effects can terrify or fray the mind of even the most stalwart adventurer.

If you plan to use any of these rules, discuss them with your players at the start of the campaign.

**Fear Effects**

Whenever the characters encounter something that is supernaturally frightful, use the Frightened condition as the baseline effect. Fear effects typically require a Wisdom saving throw, with a save DC based on how terrifying the situation is. The Sample Fear DCs table provides some examples.

**Sample Fear DCs**

| Example | Save DC |
|---|---|
| When the characters open a sarcophagus, a harmless yet terrifying apparition appears. | 10 |
| A character triggers a magical trap that creates an illusory manifestation of that character’s worst fears, visible only to that character. | 15 |
| A portal to the Abyss opens, revealing a nightmarish realm of torment and slaughter. | 20 |

Typically, a Frightened creature repeats the saving throw at the end of each of its turns, ending the effect on itself on a success.

At your discretion, a Frightened creature might be subject to other effects as long as the Frightened condition lasts. Consider these examples:

- The Frightened creature must take the Dash action on each of its turns and uses its movement to get farther away from the source of its fear.
- Attack rolls against the Frightened creature have Advantage.

- The Frightened creature can do only one of the following on each of its turns: move, take an action, or take a Bonus Action.

**Mental Stress Effects**

When a character is subjected to an effect that causes intense mental stress, Psychic damage is the best way to emulate that effect.

The Sample Mental Stress Effects table provides a few examples of such effects, with suggested saving throw DCs and damage. Mental stress can usually be resisted with a successful Wisdom save, but sometimes an Intelligence or Charisma save is more appropriate. On a successful save, a character might take half as much damage instead of no damage, at your discretion.

**Sample Mental Stress Effects**

| Example | Save DC | Psychic Damage |
|---|---|---|
| A character ingests a hallucinogenic substance that distorts the character’s perception of reality. | 10 | 1d6 |
| A character touches a fiendish idol that tears at the character’s mind, threatening to shatter it. | 15 | 3d6 |
| A magical trap flings a character into the Far Realm until the end of that character’s next turn. | 20 | 9d6 |

**Prolonged Effects**

Exposure to mental stress can cause prolonged effects. Consider the following possibilities.

**Short-Term Effects.** The character has the Frightened, Incapacitated, or Stunned condition for 1d10 minutes. This condition might be accompanied by alarming behavior or hallucinations. These effects can be suppressed with the *Calm Emotions* spell or removed by the *Lesser Restoration* spell.

**Long-Term Effects.** The character has Disadvantage on some or all ability checks for 1d10 × 10 hours, stemming from an unwillingness or inability to exert a particular set of abilities. The character might feel enervated and unable to exert much Strength, for example, or become so suspicious of others that Charisma checks are more difficult. These effects can be suppressed with the *Calm Emotions* spell or removed by the *Lesser Restoration* spell.

**Indefinite Effects.** An indefinite effect is a long-term effect (see above) that lasts until removed by a *Greater Restoration* spell. It can be suppressed by a *Calm Emotions* spell.

#### Poison
**Tag:** Rule
**Type:** Gameplay Toolbox
**Link:** no

Given their insidious and deadly nature, poisons are a favorite tool among assassins and evil creatures.

Poisons come in the following four types:

**Contact.** Contact poison can be smeared on an object and remains potent until it is touched or washed off. A creature that touches contact poison with exposed skin suffers its effects.

**Ingested.** A creature must swallow an entire dose of ingested poison to suffer its effects. The dose can be delivered in food or a liquid. You may decide that a partial dose has a reduced effect, such as allowing Advantage on the saving throw or dealing only half as much damage on a failed save.

**Inhaled.** Poisonous powders and gases take effect when inhaled. Blowing the powder or releasing the gas subjects creatures in a 5-foot Cube to its effect. The resulting cloud dissipates immediately afterward. Holding one’s breath is ineffective against inhaled poisons, as they affect nasal membranes, tear ducts, and other parts of the body.

**Injury.** Injury poison can be applied as a Bonus Action to a weapon, a piece of ammunition, or similar object. The poison remains potent until delivered through a wound or washed off. A creature that takes Piercing or Slashing damage from an object coated with the poison is exposed to its effects.

**Purchasing Poison**

In some settings, laws prohibit the possession and use of poison, but an illicit dealer or unscrupulous apothecary might keep a hidden stash. Characters with criminal contacts might be able to acquire poison easily. Other characters might have to make extensive inquiries and pay bribes before they acquire the poison they seek.

**Harvesting Poison**

A character can attempt to harvest poison from a venomous creature that is dead or has the Incapacitated condition. The effort takes 1d6 minutes, after which the character makes a DC 20 Intelligence (Nature) check using a Poisoner’s Kit. On a successful check, the character harvests enough poison for a single dose, and no additional poison can be harvested from that creature. On a failed check, the character is unable to extract any poison. If the character fails the check by 5 or more, the character is subjected to the creature’s poison.

**Sample Poisons**

Example poisons are detailed here in alphabetical order. Each poison’s description includes the suggested price for a single dose of the poison, its type (contact, ingested, inhaled, or injury), and a description of the poison’s debilitating effects.

**Assassin’s Blood (150 GP)**

*Ingested Poison* A creature subjected to Assassin’s Blood makes a DC 10 Constitution saving throw. On a failed save, the creature takes 6 (1d12) Poison damage and has the Poisoned condition for 24 hours. On a successful save, the creature takes half as much damage only.

**Burnt Othur Fumes (500 GP)**

*Inhaled Poison* A creature subjected to Burnt Othur Fumes must succeed on a DC 13 Constitution saving throw or take 10 (3d6) Poison damage, and it must repeat the save at the start of each of its turns. On each successive failed save, the creature takes 3 (1d6) Poison damage. After three successful saves, the poison ends.

**Crawler Mucus (200 GP)**

*Contact Poison* A creature subjected to Crawler Mucus must succeed on a DC 13 Constitution saving throw or have the Poisoned condition for 1 minute. The creature also has the Paralyzed condition while Poisoned in this way. The creature repeats the save at the end of each of its turns, ending the effect on itself on a success.

**Essence of Ether (300 GP)**

*Inhaled Poison* A creature subjected to Essence of Ether must succeed on a DC 15 Constitution saving throw or have the Poisoned condition for 8 hours. The creature also has the Unconscious condition while Poisoned in this way. The creature wakes up if it takes damage or if another creature takes an action to shake it awake.

**Malice (250 GP)**

*Inhaled Poison* A creature subjected to Malice must succeed on a DC 15 Constitution saving throw or have the Poisoned condition for 1 hour. The creature also has the Blinded condition while Poisoned in this way.

**Midnight Tears (1,500 GP)**

*Ingested Poison* A creature that ingests Midnight Tears suffers no effect until the stroke of midnight. Any effect that ends the Poisoned condition neutralizes this poison. If the poison hasn’t been neutralized before midnight, the creature makes a DC 17 Constitution saving throw, taking 31 (9d6) Poison damage on a failed save or half as much damage on a successful one.

**Oil of Taggit (400 GP)**

*Contact Poison* A creature subjected to Oil of Taggit must succeed on a DC 13 Constitution saving throw or have the Poisoned condition for 24 hours. The creature also has the Unconscious condition while Poisoned in this way. It wakes up if it takes damage.

**Pale Tincture (250 GP)**

*Ingested Poison* A creature subjected to Pale Tincture must succeed on a DC 16 Constitution saving throw or take 3 (1d6) Poison damage and have the Poisoned condition. The Poisoned creature repeats the save every 24 hours, taking 3 (1d6) Poison damage on a failed save. The damage the poison deals can’t be healed by any means while the creature remains Poisoned. After seven successful saves against the poison, the creature is no longer Poisoned.

**Purple Worm Poison (2,000 GP)**

*Injury Poison* A creature subjected to Purple Worm Poison makes a DC 21 Constitution saving throw, taking 35 (10d6) Poison damage on a failed save or half as much damage on a successful one.

**Serpent Venom (200 GP)**

*Injury Poison* A creature subjected to Serpent Venom must succeed on a DC 11 Constitution saving throw, taking 10 (3d6) Poison damage on a failed save or half as much damage on a successful one.

**Spider’s Sting (200 GP)**

*Injury Poison* A creature subjected to Spider’s Sting must succeed on a DC 13 Constitution saving throw or have the Poisoned condition for 1 hour. If the creature fails the save by 5 or more, the creature also has the Unconscious condition while Poisoned in this way. The creature wakes up if it takes damage or if another creature takes an action to shake it awake.

**Torpor (600 GP)**

*Ingested Poison* A creature subjected to Torpor poison must succeed on a DC 15 Constitution saving throw or have the Poisoned condition for 4d6 hours. The creature’s Speed is halved while the creature is Poisoned in this way.

**Truth Serum (150 GP)**

*Ingested Poison* A creature subjected to Truth Serum must succeed on a DC 11 Constitution saving throw or have the Poisoned condition for 1 hour. The Poisoned creature can’t knowingly communicate a lie.

**Wyvern Poison (1,200 GP)**

*Injury Poison* A creature subjected to Wyvern Poison makes a DC 14 Constitution saving throw, taking 24 (7d6) Poison damage on a failed save or half as much damage on a successful one.

#### Traps
**Tag:** Rule
**Type:** Gameplay Toolbox
**Link:** no

Traps should be used sparingly, lest they lose their charm. A hidden pit can be a fun surprise, but too many traps in an adventure can lead players to become overly cautious, which slows down the game.

The best traps are fleeting distractions that skilled characters can overcome in a short amount of time or deadly puzzles that require quick thinking and teamwork to overcome. Traps that are undetectable and inescapable are rarely fun.

**Parts of a Trap**

The description of a trap includes the following parts after the trap’s name:

**Severity and Levels.** A trap is designated as a nuisance or as deadly for characters of certain levels. A nuisance trap is unlikely to seriously harm characters of the indicated levels, whereas a deadly trap can grievously damage characters of the indicated levels.

**Trigger.** Traps are often set to go off when a creature enters an area or touches an object. Examples of triggers include stepping on a pressure plate, crossing a trip wire, turning a doorknob, or using the wrong key in a lock.

**Duration.** Some traps have durations expressed in rounds, minutes, or hours. Others specify that their effects last until the trap is destroyed or dispelled. If a trap’s duration is instantaneous, its effect is resolved instantly. If a trap resets after activating, that fact is noted in this entry. A trap is otherwise inert after activation.

Use caution when introducing a trap to characters of a level lower than the trap’s level range. A trap that is a nuisance at one level range could be deadly to characters of a lower level range.

**Example Traps**

Traps are presented in alphabetical order.

**Collapsing Roof**

*Deadly Trap (Levels 1–4)*

**Trigger:** A creature crosses a trip wire

**Duration:** Instantaneous

This trap uses a trip wire to collapse an unstable section of ceiling. The trip wire is 3 inches off the ground and stretches between two weak supports that topple when the trip wire is pulled.

The first creature that crosses the trip wire causes the supports to topple and the unstable section of ceiling to collapse. Each creature beneath the unstable section of ceiling must succeed on a DC 13 Dexterity saving throw, taking 11 (2d10) Bludgeoning damage on a failed save or half as much damage on a successful one. Rubble from the collapse turns the trapped area into Difficult Terrain.

**Detect and Disarm.** As a Search action, a creature can examine the trapped area and make a DC 11 Wisdom (Perception) check, detecting the trip wire and the unstable section of ceiling on a successful check. Once detected, the trip wire can be easily cut or avoided (no ability check required).

**At Higher Levels.** You can scale the trap for higher levels by increasing the damage and the save DC, as shown in the following table.

| Levels | Bludgeoning Damage | Save DC |
|---|---|---|
| 5–10 | 22 (4d10) | 15 |
| 11–16 | 55 (10d10) | 17 |
| 17–20 | 99 (18d10) | 19 |

**Falling Net**

*Nuisance Trap (Levels 1–4)*

**Trigger:** A creature crosses a trip wire

**Duration:** Instantaneous

A falling net trap uses a trip wire to release a weighted, 10-foot-square Net suspended from the ceiling. The trip wire is 3 inches off the ground and stretches between two columns or trees.

The first creature that crosses the trip wire causes the Net to fall on it. The target must succeed on a DC 10 Dexterity saving throw or have the Restrained condition until it escapes. The target succeeds automatically if it’s Huge or larger. A creature can take an action to make a DC 10 Strength (Athletics) check, freeing itself or another creature within its reach from the Net on a successful check.

**Detect and Disarm.** As a Search action, a creature can examine the trapped area and make a DC 11 Wisdom (Perception) check, detecting the trip wire and the suspended Net on a successful check. Once detected, the trip wire can be easily cut or avoided (no ability check required).

**Destroy the Net.** Reducing the Net to 0 Hit Points frees any creature trapped in it (see “Adventuring Gear” for the Net’s statistics).

**Set the Trap.** A creature that has Thieves’ Tools and all the trap’s components (including a Net) can try to set a falling net trap, doing so with a successful DC 13 Dexterity (Sleight of Hand) check. Each attempt to set this trap takes 10 minutes.

**At Higher Levels.** You can scale the trap for higher levels by increasing the weight of the Net, which increases the save DC and the DC of the Strength (Athletics) check as follows: DC 12 at levels 5–10, DC 14 at levels 11–16, or DC 16 at levels 17–20.

**Fire-Casting Statue**

*Deadly Trap (Levels 1–4)*

**Trigger:** A creature moves onto a pressure plate

**Duration:** Instantaneous, and the trap resets at the start of the next turn

When a creature moves onto this trap’s pressure plate for the first time on a turn or starts its turn there, a nearby statue exhales a 15-foot Cone of magical flame. The statue can look like anything, such as a dragon or a wizard. Each creature in the Cone must succeed on a DC 15 Dexterity saving throw, taking 11 (2d10) Fire damage on a failed save or half as much damage on a successful one.

**Detect and Disarm.** A *Detect Magic* spell reveals an aura of Evocation magic around the statue. As a Search action, a creature within 5 feet of the statue can examine it and make a DC 10 Wisdom (Perception) check, detecting a tiny glyph on the statue on a successful check. Once the glyph is found, a character can take a Study action to examine it and make a DC 15 Intelligence (Arcana) check, ascertaining that the glyph means “fire” on a successful check. As an action, a character can use a sharp tool to deface the glyph, which disarms the trap.

As a Search action, a creature can examine the section of floor that forms the pressure plate and make a DC 15 Wisdom (Perception) check, detecting the pressure plate on a successful check. Wedging an Iron Spike or similar object under the pressure plate prevents the trap from triggering.

**At Higher Levels.** You can scale the trap for higher levels by increasing the damage and the area of effect, as shown in the following table.

| Levels | Fire Damage | Area of Effect |
|---|---|---|
| 5–10 | 22 (4d10) | 30-foot Cone |
| 11–16 | 55 (10d10) | 60-foot Cone |
| 17–20 | 99 (18d10) | 120-foot Cone |

**Hidden Pit**

*Nuisance Trap (Levels 1–4)*

**Trigger:** A creature moves onto the pit’s lid

**Duration:** Instantaneous

This 10-foot-deep pit has a hinged lid constructed from material identical to the surrounding floor. When a creature moves onto the lid, it swings open like a trapdoor, causing the creature to fall into the pit. The lid remains open thereafter.

A creature that falls into the pit takes 3 (1d6) Bludgeoning damage from the fall.

**Detect and Disarm.** As a Study action, a creature can examine the section of floor that forms the pit’s lid and make a DC 15 Intelligence (Investigation) check, detecting the pit on a successful check. Once the pit is detected, an Iron Spike or a similar object can be wedged between the pit’s lid and the surrounding floor to prevent the lid from opening, thereby making it safe to cross. The cover can also be held shut using *Arcane Lock* or similar magic. **Escape.** A creature needs a Climb Speed, climbing gear, or magic such as *Spider Climb* to scale the pit’s smooth walls. You can make the pit easier to escape by adding cracks in the walls big enough to serve as handholds and footholds.

**At Higher Levels.** You can scale the trap for higher levels by increasing the pit’s depth and damage, as shown in the following table.

| Levels | Pit Depth | Bludgeoning Damage |
|---|---|---|
| 5–10 | 30 feet | 10 (3d6) |
| 11–16 | 60 feet | 21 (6d6) |
| 17–20 | 120 feet | 42 (12d6) |

**Poisoned Darts**

*Deadly Trap (Levels 1–4)*

**Trigger:** A creature moves onto a pressure plate

**Duration:** Instantaneous, and the trap resets at the start of the next turn if it has activated fewer than three times

When a creature moves onto this trap’s pressure plate for the first time on a turn, poisoned darts shoot from tubes embedded in the surrounding walls. The holes that house these tubes are obscured by dust and cobwebs or skillfully hidden amid bas-reliefs, murals, or frescoes.

Each creature in the darts’ path must succeed on a DC 13 Dexterity saving throw or be struck by 1d3 darts, taking 3 (1d6) Poison damage per dart.

**Detect and Disarm.** As a Search action, a creature can examine the walls and make a DC 15 Wisdom (Perception) check, detecting the holes on a successful check. Plugging all the holes with wax, cloth, or detritus prevents the darts from firing.

As a Search action, a creature can examine the section of floor that forms the pressure plate and make a DC 15 Wisdom (Perception) check, detecting the pressure plate on a successful check. Wedging an Iron Spike or a similar object under the pressure plate prevents the trap from triggering.

**At Higher Levels.** You can scale the trap for higher levels by increasing each dart’s Poison damage as follows: 7 (2d6) at levels 5–10, 14 (4d6) at levels 11–16, or 24 (7d6) at levels 17–20.

**Poisoned Needle**

*Nuisance Trap (Levels 1–4)*

**Trigger:** A creature opens the trap’s lock improperly or fails to disarm the trap

**Duration:** Instantaneous

A poisoned needle is hidden in a lock. When a creature opens the lock with any object other than the proper key, the needle springs out and stabs the creature. The creature makes a DC 11 Constitution saving throw. On a failed save, the creature takes 5 (1d10) Poison damage and has the Poisoned condition for 1 hour. On a successful save, the creature takes half as much damage only.

**Avoid.** The trap doesn’t trigger if the lock is opened using a *Knock* spell or similar magic.

**Detect and Disarm.** As a Search action, a creature can examine the trapped lock and make a DC 15 Wisdom (Perception) check, detecting the needle on a successful check. Once the trap is detected, a character can take an action to try to disarm the trap, doing so with a successful DC 15 Dexterity (Sleight of Hand) check. On a failed check, the creature triggers the trap.

**At Higher Levels.** You can scale the trap for higher levels by increasing the damage and the save DC, as shown in the following table.

| Levels | Poison Damage | Save DC |
|---|---|---|
| 5–10 | 11 (2d10) | 13 |
| 11–16 | 22 (4d10) | 15 |
| 17–20 | 55 (10d10) | 17 |

**Rolling Stone**

*Deadly Trap (Levels 11–16) or Nuisance Trap (Levels 17–20)*

**Trigger:** A creature moves onto a pressure plate

**Duration:** Until the stone stops rolling

When a creature moves onto a hidden pressure plate, a 5-foot-radius orb of solid stone is released from a secret compartment and begins to roll. The stone and all creatures nearby roll Initiative; the stone gets a +8 bonus on its Initiative roll.

On its turn, the stone moves 60 feet in one direction, changing course if redirected by an obstacle. The stone can move through creatures’ spaces, and creatures can move through the stone’s space, treating it as Difficult Terrain. Whenever the stone enters a creature’s space for the first time on a turn or a creature enters the stone’s space while the stone is rolling, that creature must succeed on a DC 15 Dexterity saving throw or take 55 (10d10) Bludgeoning damage and have the Prone condition.

The stone stops when it hits a wall or similar barrier. It can’t go around corners, but creative dungeon builders incorporate curving turns into nearby passages that allow the stone to keep moving.

**Detect and Disarm.** As a Study action, a creature can examine the section of floor that forms the pressure plate and make a DC 15 Intelligence (Investigation) check, deducing the pressure plate’s function on a successful check. Wedging an Iron Spike or a similar object under the pressure plate prevents the trap from triggering. **Destroy the Stone.** The stone is a Large object that has AC 17, HP 100, a Damage Threshold of 10, and Immunity to Poison and Psychic damage.

**Slow the Stone.** As an action, a creature can try to slow down the stone with a DC 20 Strength (Athletics) check. If the check is successful, the distance the stone moves on its turn is reduced by 15 feet. If that distance drops to 0, it stops moving and is no longer a threat.

**Spiked Pit**

*Deadly Trap (Levels 1–4)*

**Trigger:** A creature moves onto the pit’s lid

**Duration:** Instantaneous

A 10-foot-deep pit has a hinged lid constructed from material identical to the surrounding floor. When a creature moves onto the lid, it swings open like a trapdoor, causing the creature to fall into the pit, which has sharpened wooden or metal spikes at the bottom. The lid remains open thereafter.

A creature that falls into the pit lands at the bottom and takes 3 (1d6) Bludgeoning damage from the fall plus 9 (2d8) Piercing damage from the spikes.

**Detect and Disarm.** As a Study action, a creature can examine the section of floor that forms the pit’s lid and make a DC 15 Intelligence (Investigation) check, detecting the pit on a successful check. Once the hidden pit is detected, an Iron Spike or a similar object can be wedged between the pit’s lid and the surrounding floor to prevent the lid from opening, thereby making it safe to cross. The cover can also be held shut using an *Arcane Lock* spell or similar magic.

**Escape.** A creature needs a Climb Speed, climbing gear, or magic such as a *Spider Climb* spell to scale the pit’s smooth walls. You can make the pit easier to escape by adding cracks in the walls big enough to serve as handholds and footholds.

**At Higher Levels.** You can scale the trap for higher levels by increasing the pit’s depth and damage, as shown in the following table.

| Levels | Pit Depth | Damage |
|---|---|---|
| 5–10 | 30 feet | 10 (3d6) Bludgeoning plus 13 (3d8) Piercing |
| 11–16 | 60 feet | 21 (6d6) Bludgeoning plus 36 (8d8) Piercing |
| 17–20 | 120 feet | 42 (12d6) Bludgeoning plus 57 (13d8) Piercing |

#### Combat Encounters
**Tag:** Rule
**Type:** Gameplay Toolbox
**Link:** no

The following features can make a combat encounter more interesting or challenging:

**Changes in Elevation.** Terrain features that provide a change of elevation (such as stacks of empty crates, ledges, and balconies) reward clever positioning and encourage characters to jump, climb, fly, or teleport.

**Defensive Positions.** Enemies in hard-to-reach locations or defensive positions force characters who normally attack at range to move around.

**Mixed Monster Groups.** When different types of monsters work together, they can combine their abilities—just like characters with different classes and origins. A diverse force is more powerful.

**Reasons to Move.** Use features that encourage characters and their enemies to move around, such as chandeliers, kegs of gunpowder or oil, and rolling stone traps.

**Combat Encounter Difficulty**

Use the following guidelines to create a combat encounter of a desired level of difficulty.

**Step 1: Choose a Difficulty**

Three categories describe the range of encounter difficulty:

**Low Difficulty.** An encounter of low difficulty is likely to have one or two scary moments for the players, but their characters should emerge victorious with no casualties. One or more of them might need to use healing resources, however. As a rough guideline, a single monster generally presents a low-difficulty challenge for a party of four characters whose level equals the monster’s Challenge Rating.

**Moderate Difficulty.** Absent healing and other resources, an encounter of moderate difficulty could go badly for the adventurers. Weaker characters might get taken out of the fight, and there’s a slim chance that one or more characters might die.

**High Difficulty.** A high-difficulty encounter could be lethal for one or more characters. To survive it, the characters will need smart tactics, quick thinking, and maybe even a little luck.

**Step 2: Determine Your XP Budget**

Using the XP Budget per Character table, cross-reference the party’s level with the desired encounter difficulty. Multiply the number in the table by the number of characters in the party to get your XP budget for the encounter.

**XP Budget per Character**

| Party’s Level | Low | Moderate | High |
|---|---|---|---|
| 1 | 50 | 75 | 100 |
| 2 | 100 | 150 | 200 |
| 3 | 150 | 225 | 400 |
| 4 | 250 | 375 | 500 |
| 5 | 500 | 750 | 1,100 |
| 6 | 600 | 1,000 | 1,400 |
| 7 | 750 | 1,300 | 1,700 |
| 8 | 1,000 | 1,700 | 2,100 |
| 9 | 1,300 | 2,000 | 2,600 |
| 10 | 1,600 | 2,300 | 3,100 |
| 11 | 1,900 | 2,900 | 4,100 |
| 12 | 2,200 | 3,700 | 4,700 |
| 13 | 2,600 | 4,200 | 5,400 |
| 14 | 2,900 | 4,900 | 6,200 |
| 15 | 3,300 | 5,400 | 7,800 |
| 16 | 3,800 | 6,100 | 9,800 |
| 17 | 4,500 | 7,200 | 11,700 |
| 18 | 5,000 | 8,700 | 14,200 |
| 19 | 5,500 | 10,700 | 17,200 |
| 20 | 6,400 | 13,200 | 22,000 |

**Step 3: Spend Your Budget**

Every creature has an XP value in its stat block. When you add a creature to your combat encounter, deduct its XP from your XP budget to determine how many XP you have left to spend. Spend as much of your XP budget as you can without going over. It’s OK if you have a few unspent XP left over. Examples are given below:

**Example 1.** A low-difficulty encounter for four level 1 characters has an XP budget of 50 × 4, for a total of 200 XP. With that, you could build any of the following encounters:

- 1 **Bugbear Warrior** (200 XP)
- 2 **Giant Wasps** (100 XP each), for 200 XP total

- 6 **Giant Rats** (25 XP each), for 150 XP total

**Example 2.** A moderate-difficulty encounter for five level 3 characters has an XP budget of 225 × 5, for a total of 1,125 XP. With that, you could build either of these encounters:

- 2 **Druids** (450 XP each) and 9 **Stirges** (25 XP each), for 1,125 XP total
- 1 **Wight** (700 XP), 1 **Warhorse Skeleton** (100 XP), and 6 **Skeletons** (50 XP each), for 1,100 XP total

**Example 3.** A high-difficulty encounter for six level 15 characters has an XP budget of 7,800 × 6, for a total of 46,800 XP. With that, you could build this encounter:

- 2 **Adult Red Dragons** (18,000 XP each) and 2 **Fire Giants** (5,000 XP each), for 46,000 XP total

**Troubleshooting**

When creating and running combat encounters, keep the following in mind.

**Many Creatures**

The more creatures in an encounter, the higher the risk that a lucky streak on their part could deal more damage to the characters than you expect. If your encounter includes more than two creatures per character, include fragile creatures that can be defeated quickly. This guideline is especially important for characters of level 1 or 2.

**Adjustments**

A player’s absence might warrant removing creatures from an encounter to keep it at the intended difficulty. Also, die rolls and other factors can result in an encounter being easier or harder than intended. You can adjust an encounter on the fly, such as by having creatures flee (making the encounter easier) or adding reinforcements (making the encounter harder).

**CR 0 Creatures**

Creatures that have a CR of 0, particularly ones that are worth 0 XP, should be used sparingly. If you want to include many CR 0 critters in an encounter, use swarms instead.

**Number of Stat Blocks**

The best combat encounters often pair one kind of creature with another, such as fire giants paired with hell hounds. Be mindful of the number of stat blocks you need to run the encounter. Referencing more than two or three stat blocks for a single encounter can be daunting, particularly if the creatures are complex.

**Powerful Creatures**

If your combat encounter includes a creature whose CR is higher than the party’s level, be aware that such a creature might deal enough damage with a single action to take out one or more characters. For example, an **Ogre** (CR 2) can kill a level 1 Wizard with a single blow.

**Unusual Features**

If a monster has a feature that lower-level characters can’t easily overcome, consider not adding that monster to an encounter for characters whose level is lower than the monster’s Challenge Rating.

## Dungeon Master’s Guide (2024)

From the Dungeon Master’s Guide (2024). This material is not part of the SRD 5.2.1.

#### Brown Mold
**Tag:** Rule
**Type:** Hazard
**Source:** DMG'24 p76

*Deadly Hazard (Levels 5–10) or Nuisance Hazard (Levels 11–16)*

Brown mold resembles a furry, light-brown carpet. This fungus feeds on warmth, drawing heat from anything around itself. One patch of brown mold covers a 10-foot square, and the temperature within 30 feet of it is always frigid.

When a creature enters a space within 5 feet of the mold for the first time on a turn or starts its turn there, the creature makes a DC 12 Constitution saving throw, taking 22 (4d10) Cold damage on a failed save or half as much damage on a successful one.

Brown mold has Immunity to Fire damage, and any source of fire brought within 5 feet of it causes the mold to instantly expand across a surface and toward the fire, creating a new patch that covers a 10-foot square. A patch of brown mold exposed to an effect that deals any amount of Cold damage is destroyed instantly.

#### Dead Magic Zone
**Tag:** Rule
**Type:** Environmental Effects
**Source:** DMG'24 p68

A dead magic zone is an area where the fabric of magic is torn. The effect is the same as the Antimagic Field spell, except that it is permanent and typically covers an area no more than 300 feet in diameter.

#### Fireball Fungus
**Tag:** Rule
**Type:** Hazard
**Source:** DMG'24 p76

*Deadly Hazard (Levels 5–10)*

A fireball fungus is a Small, inanimate mushroom that can grow anywhere fungi are found in abundance. Its luminous, orange cap sheds Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.

A fireball fungus has AC 10, HP 6, and Immunity to Psychic damage. When it drops to 0 Hit Points, the fungus explodes as if a Fireball spell (save DC 15) had been centered on it.

**At Higher Levels.** The explosion of a fireball fungus causes other fireball fungi in the area of effect to explode as well. You can scale the hazard for higher levels by adding one additional fungus at levels 11–16 or three additional fungi at levels 17–20.

#### Foraging
**Tag:** Rule
**Type:** Exploration
**Link:** no
**Source:** DMG'24 p40

Characters without water and Rations can stave off dehydration and malnutrition by gathering food and water as they travel. A foraging character makes a Wisdom (Survival) check once per journey stage (or once per day if a stage is shorter than a day). The DC is determined by the abundance of food and water in the region, as shown in the Foraging DC column of the Travel Terrain table. If multiple characters forage, each character makes a separate check.

A foraging character finds nothing on a failed check. On a successful check, roll 1d6 and add the character’s Wisdom modifier to determine how much food (in pounds) the character finds per day of the journey stage, then repeat the roll for water (in gallons).

#### Green Slime
**Tag:** Rule
**Type:** Hazard
**Source:** DMG'24 p76

*Nuisance Hazard (Levels 1–4)*

Acidic green slime devours flesh, organic material, and metal on contact. Bright green, wet, and sticky, it clings to walls, floors, and ceilings in patches.

One patch of green slime covers a 5-foot square. Green slime has Blindsight with a range of 30 feet, and it drops from walls and ceilings when it detects movement below itself. Beyond that, it can’t move. A creature aware of the slime’s presence can avoid being struck by it with a successful DC 10 Dexterity saving throw.

A creature that comes in contact with green slime takes 5 (1d10) Acid damage. The creature takes the damage again at the start of each of its turns until the slime is scraped off (requiring an action) or destroyed. Against wood or metal, green slime deals 11 (2d10) Acid damage each round, and any nonmagical wood or metal item used to scrape off the green slime is destroyed.

Direct sunlight or any amount of Cold, Fire, or Radiant damage destroys a patch of green slime.

#### Inferno
**Tag:** Rule
**Type:** Hazard
**Link:** no
**Source:** DMG'24 p76

*Deadly Hazard (Levels 5–10) or Nuisance Hazard (Levels 11–16)*

Whenever an uncontrolled fire spreads, it can create an inferno that quickly engulfs creatures, objects, and vegetation.

An inferno consists of at least four contiguous 10-foot Cubes of fire. Each of the inferno’s 10-foot Cubes can be doused with 10 gallons of water. Exposure to a strong wind for 1 minute causes the inferno to grow, adding 1d4 new 10-foot Cubes to its volume. An inferno deprived of fuel burns itself out after 1d10 minutes.

An inferno damages any vegetation or object that isn’t being worn or carried that it touches, dealing 22 (4d10) Fire damage immediately and again at the end of each minute. Any creature that enters the inferno for the first time on a turn or starts its turn there takes 22 (4d10) Fire damage and is burning.

#### Navigation
**Tag:** Rule
**Type:** Exploration
**Link:** no
**Source:** DMG'24 p40

If the characters aren’t following an established path or traveling with a landmark in sight, they risk getting lost. Here are some circumstances that can cause a group to lose its way:

- Branching passages underground
- Horizon-obscuring terrain, such as dense forest
- Obscuring weather, such as heavy rain or fog
- Traveling at night
- Traveling at sea while unable to see the sky or any familiar land

Let the players know when the characters are at risk of getting lost, then have the characters choose one of their number to make a Wisdom (Survival) check against a DC appropriate to the terrain, as shown in the Navigation DC column of the Travel Terrain table. Another member of the group can take the Help action to assist this check as normal.

If the check fails, the party goes off course. You decide what this looks like: they might follow the wrong branch of a river, orient themselves to the wrong mountain peak on the horizon, or get turned around in the forest. As a baseline, assume that getting lost extends the length of the current journey stage by 1d6 × 10 percent. It might also affect subsequent stages of the journey.

#### Perception and Encounters
**Tag:** Rule
**Type:** Exploration
**Source:** DMG'24 p34

If the characters encounter another group of creatures and neither side is being stealthy, the two groups automatically notice each other once they are within sight or hearing range of one another. The Audible Distance table can help you determine the hearing range, and the following sections address visibility. If one group tries to hide from the other, use the rules in the Player’s Handbook.

**Audible Distance**

| Noise | Distance |
|---|---|
| Trying to be quiet | 2d6 × 5 feet |
| Normal noise level | 2d6 × 10 feet |
| Very loud | 2d6 × 50 feet |

**Visibility Outdoors.** When traveling outdoors, most characters can see about 2 miles in any direction on a clear day, except where obstructions block their view. That range increases to 40 miles if they are atop a mountain or a tall hill or are otherwise able to look down on the area from a height. Lightly Obscured conditions reduce visibility: rain reduces maximum visibility to 1 mile, and fog reduces it to between 100 and 300 feet.

Outdoor terrain determines the distance at which characters encounter other creatures. The Travel Terrain table (see “Travel” below) gives suggested encounter distances for different types of terrain.

**Visibility at Sea.** From a ship’s crow’s nest, a lookout can see things up to 10 miles away, assuming clear skies and a relatively calm sea. Overcast skies reduce that distance by half. Lightly Obscured conditions reduce visibility just as they do on land.

**Visibility Underwater.** Visibility underwater depends on water clarity and the available light. Use the Underwater Encounter Distance table to determine the encounter distances underwater.

**Underwater Encounter Distance**

| Visibility | Encounter Distance |
|---|---|
| Clear water, Bright Light | 60 feet |
| Clear water, Dim Light | 30 feet |
| Murky water or Darkness | 10 feet |

#### Planar Effects
**Tag:** Rule
**Type:** Environmental Effects
**Source:** DMG'24 p69

Certain planes of existence—and areas on the Material Plane affected by them—have supernatural effects on creatures within them. Several examples are presented below. See chapter 6 for more information about the planes of existence.

**Acheronian Bloodlust.** The plane of Acheron rewards a creature for harming other creatures by imbuing it with the strength to keep fighting. While in Acheron or a region under its influence, a creature gains Temporary Hit Points equal to half its Hit Point maximum whenever it reduces another creature to 0 Hit Points.

**Arcadian Vitality.** On the plane of Arcadia and in regions where its influence is felt, creatures benefit from supernatural vitality, which grants them Immunity the Frightened and Poisoned conditions.

**Blessed Beneficence.** On the plane of Mount Celestia and in regions where its influence is felt, creatures are blessed by the pervasive beneficence of the plane. Creatures other than Fiends and Undead gain the benefit of the Bless spell as long as they remain in an area of blessed beneficence. In addition, such a creature that finishes a Long Rest in the area gains the benefit of a Lesser Restoration spell.

**Gehennan Cruelty.** On the plane of Gehenna and in regions where its influence is felt, creatures are driven to loathe helping one another. Whenever a creature subject to Gehennan cruelty casts a spell, including a spell that restores Hit Points or removes a condition other than Invisible, the caster must succeed on a DC 10 Charisma saving throw, or the spell fails and is wasted.

**Winds of Pandemonium.** The winds of Pandemonium are common in Pandemonium and regions where its influence is felt, including parts of the Underdark. A creature makes a DC 10 Wisdom saving throw after each hour spent among the howling winds. On a failed save, the creature gains 1 Exhaustion level. The winds can’t increase a creature’s Exhaustion level above 3. Finishing a Long Rest doesn’t reduce a creature’s Exhaustion level unless the creature can somehow escape the winds.

#### Poisonous Gas
**Tag:** Rule
**Type:** Hazard
**Source:** DMG'24 p77

*Nuisance Hazard (Levels 1–4)*

Poisonous gas is usually encountered in an enclosed space, such as a sewer or sealed tomb. The gas fills as much space as it can, up to a maximum of ten 10-foot Cubes. The transparent gas carries a foul odor. The gas is continuously or periodically replenished by some natural or magical source, though a strong wind disperses the gas for 1 minute.

Any creature that enters poisonous gas for the first time on a turn or starts its turn there makes a DC 12 Constitution saving throw, taking 5 (1d10) Poison damage on a failed save or half as much damage on a successful one. Creatures in the gas also have Disadvantage on Death Saving Throws.

**At Higher Levels.** You can scale the hazard for higher levels by increasing the Poison damage and the save DC, as shown in the following table.

| Levels | Poison Damage | Save DC |
|---|---|---|
| 5–10 | 11 (2d10) | 14 |
| 11–16 | 22 (4d10) | 16 |
| 17–20 | 55 (10d10) | 18 |

#### Quicksand Pit
**Tag:** Rule
**Type:** Hazard
**Source:** DMG'24 p77

*Nuisance Hazard (Levels 1–4)*

A quicksand pit is 10 feet deep and covers the ground in a 10-foot square. A creature that enters the area sinks 1d4 + 1 feet into the quicksand and has the Restrained condition. At the start of each of the creature’s turns, it sinks another 1d4 feet. As long as the creature isn’t completely submerged in quicksand, it can take an action to try to escape, doing so with a successful Strength (Athletics) check (DC 10 plus the number of feet the creature has sunk into the quicksand). A creature that is completely submerged in quicksand has Total Cover and the Blinded condition and risks suffocation.

A creature can pull another creature within its reach out of a quicksand pit by taking an action and succeeding on a Strength (Athletics) check (DC 5 plus the number of feet the creature has sunk into the quicksand).

**At Higher Levels.** You can scale this hazard for higher levels by making the pit deeper and increasing the number of feet a creature sinks at the start of each of its turns, as shown in the following table.

| Levels | Pit Depth | Sinking Rate |
|---|---|---|
| 5–10 | 15 feet | 1d6 feet |
| 11–16 | 20 feet | 1d8 feet |
| 17–20 | 30 feet | 1d10 feet |

#### Razorvine
**Tag:** Rule
**Type:** Hazard
**Source:** DMG'24 p78

*Nuisance Hazard (Levels 1–4)*

Razorvine is a plant that grows in wild tangles and hedges. It also clings to the sides of buildings and other surfaces as ivy does. A 10-foot-high, 10-foot-wide, 5-foot-thick wall or hedge of razorvine has AC 11; HP 25; and Immunity to Bludgeoning, Piercing, and Psychic damage.

When a creature comes into contact with razorvine for the first time on a turn, the creature must succeed on a DC 10 Dexterity saving throw or take 5 (1d10) Slashing damage from the bladelike thorns.

#### River Styx
**Tag:** Rule
**Type:** Hazard
**Source:** DMG'24 p78

*Nuisance Hazard (Levels 11–16)*

The River Styx courses through the Lower Planes. Tasting or touching its waters can shatter a creature’s intellect and personality, as well as strip away its memories. Certain Fiends are immune to the river’s effects.

Unless immune to the river’s effects, a creature that drinks from the Styx, enters the river, or starts its turn in the river makes a DC 20 Intelligence saving throw. On a failed save, the creature takes 19 (3d12) Psychic damage and can’t cast spells or take the Magic action for 30 days. An affected creature can drink from the Styx and swim in its waters without suffering any additional effects.

The effect can be ended only by the Greater Restoration, Heal, or Wish spell. If the effect isn’t ended after 30 days, the effect becomes permanent and the creature loses all its memories. At that point, nothing short of a Wish spell or divine intervention can undo the effect.

Water taken from the River Styx loses its potency after 24 hours, becoming a harmless, foul-tasting liquid. Arcanaloths, night hags, and other fell creatures might know rituals that can prolong the water’s potency, at your discretion.

#### Rockslide
**Tag:** Rule
**Type:** Hazard
**Source:** DMG'24 p78

*Deadly Hazard (Levels 1–4)*

When a rockslide occurs, every creature in its path makes a DC 15 Dexterity saving throw. On a failed save, a creature takes 11 (2d10) Bludgeoning damage, has the Prone condition, and moves with the rockslide. On a successful save, a creature takes half as much damage only.

When the rockslide stops, its space becomes Difficult Terrain, and all Prone creatures in its space are buried under rocks and debris. A creature buried in this way has the Restrained condition and has Total Cover. As an action, a creature can try to crawl out from under the rock pile. If the creature succeeds on a DC 15 Strength (Athletics) check, it is no longer Restrained; instead, it has the Prone condition and is atop the rock pile. If the check fails, the creature remains buried and gains 1 Exhaustion level.

A creature that has neither the Incapacitated nor the Restrained condition can spend 1 minute freeing another creature buried by the rockslide.

**At Higher Levels.** You can scale this hazard for higher levels by increasing the Bludgeoning damage as follows: 22 (4d10) at levels 5–10, 55 (10d10) at levels 11–16, and 99 (18d10) at levels 17–20.

#### Tracking
**Tag:** Rule
**Type:** Exploration
**Link:** no
**Source:** DMG'24 p41

A specific instance of searching on a journey is when adventurers choose their path by following the tracks of other creatures. To track, one or more trackers must succeed on a Wisdom (Survival) check. You might require trackers to make a new check in any of the following circumstances:

- **Resting.** The trackers resume tracking after finishing a Short or Long Rest.
- **Shifting Weather or Terrain.** The weather or terrain changes in a way that makes tracking harder.
- **Terrain Obstacle.** The trail crosses a river or similar obstacle that allows no tracks.

The DC for the check depends on how well the ground shows signs of a creature’s passage. No roll is necessary in situations where the tracks are obvious, such as following an army along a muddy road. Spotting tracks on bare rock is more challenging unless the creature being tracked leaves a distinct trail. Additionally, the passage of time often makes tracks harder to follow. In a situation where there is no trail to follow, you can rule that tracking is impossible.

Use the Search DC column of the Travel Terrain table as a starting point for setting the DC for tracking. If you prefer, you can choose a DC based on your assessment of the difficulty—higher if days have elapsed since the creature passed, lower if the creature is leaving an obvious trail such as blood. You can also grant Advantage on the check if there’s more than one set of tracks to follow or Disadvantage if the trail passes through a busy area.

On a failed check, the character loses the trail but can attempt to find it again by carefully searching the area. It takes 10 minutes to find a trail in a confined area, such as a series of caverns, or 1 hour outdoors.

#### Vicious Vine
**Tag:** Rule
**Type:** Hazard
**Source:** DMG'24 p78

*Nuisance Hazard (Levels 1–4)*

Vicious vines are animated by magic. They often cling to doorways, archways, walls, and statuary. Until a vicious vine moves, there’s nothing to distinguish it from an inanimate vine.

Each vicious vine has AC 11; HP 16; and Immunity to Bludgeoning, Piercing, and Psychic damage. When a creature enters a space within 5 feet of the vine for the first time on a turn or starts its turn there, the vine tries to coil around that creature. The target must succeed on a DC 12 Dexterity saving throw or have the Grappled condition (escape DC 12). While Grappled in this way, the target takes 5 (1d10) Necrotic damage from the vine’s life-draining thorns at the start of each of the target’s turns. The vine can grapple only one creature at a time.

As an Influence action, a character under the effect of a Speak with Plants spell or similar magic can try to persuade the vine to release its victim, doing so with a successful DC 10 Charisma (Persuasion) check. A creature released by the vine in this way won’t be attacked by that vine again for the next 24 hours.

**At Higher Levels.** You can scale the hazard for higher levels by increasing the Necrotic damage, the save DC, and the escape DC, as shown in the following table.

| Levels | Necrotic Damage | Save/Escape DC |
|---|---|---|
| 5–10 | 11 (2d10) | 14 |
| 11–16 | 22 (4d10) | 16 |
| 17–20 | 55 (10d10) | 18 |

#### Weather
**Tag:** Rule
**Type:** Exploration
**Link:** no
**Source:** DMG'24 p38

During each stage of the characters’ journey, you can determine what the weather is like by rolling on the Weather table, adjusting for the terrain and season as appropriate. Roll 1d20 three times to determine the temperature, the wind, and the precipitation.

Weather has no significant game effect most of the time, but see “Environmental Effects” in chapter 3 for the effects of extreme weather. Adding weather details to your descriptions of the characters’ journey can make it more memorable.

**Weather**

| 1d20 | Temperature | Wind | Precipitation |
|---|---|---|---|
| 1-14 | Normal for the season | None | None |
| 15-17 | 1d4 × 10 degrees Fahrenheit colder | Light | Light rain or light snowfall |
| 18-20 | 1d4 × 10 degrees Fahrenheit hotter | Strong | Heavy rain or heavy snowfall |

#### Webs
**Tag:** Rule
**Type:** Hazard
**Link:** no
**Source:** DMG'24 p79

*Nuisance Hazard (Levels 1–4)*

Giant spiders weave thick, sticky webs across passages and at the bottom of pits to snare prey. These web-filled areas are Difficult Terrain.

A creature that enters a web-filled area for the first time on a turn or starts its turn there must succeed on a DC 12 Dexterity saving throw or have the Restrained condition. As an action, a creature Restrained by the webs can try to escape from them, doing so with a successful DC 12 Strength (Athletics) or Dexterity (Acrobatics) check.

Each 10-foot Cube of webs has AC 10; HP 15; Vulnerability to Fire damage; and Immunity to Piercing, Poison, and Psychic damage.

#### Wild Magic Zone
**Tag:** Rule
**Type:** Environmental Effects
**Source:** DMG'24 p69

A past magical disaster or uncontrolled surge of power in a particular place can cause the fabric of magic to unravel, creating a wild magic zone. In such an area, which is typically no more than 300 feet in diameter, magic behaves unpredictably.

Whenever a creature expends a spell slot to cast a spell in a wild magic zone, roll 1d20. If you roll a 20 on the die, roll on the Wild Magic Surge table in the Player’s Handbook to create a magical effect.

Fear and Mental Stress
p70
Due to the nature of their vocation, adventurers tend to be less susceptible to fear and mental stress than common folk. Whereas a farmer might flee in terror from a bear or an apparition, adventurers are made of sterner stuff. That said, certain creatures and game effects can terrify or fray the mind of even the most stalwart adventurer.

If you plan to use any of these rules, discuss them with your players at the start of the campaign. See “Ensuring Fun for All” in chapter 1.

Fear Effects
p70
Whenever the characters encounter something that is supernaturally frightful, use the Frightened condition as the baseline effect. Fear effects typically require a Wisdom saving throw, with a save DC set based on how terrifying the situation is. The Sample Fear DCs table provides some examples.

Sample Fear DCs

| Example | Save DC |
|---|---|
| When the characters open a sarcophagus, a harmless yet terrifying apparition appears. | 10 |
| A character triggers a magical trap that creates an illusory manifestation of that character’s worst fears, visible only to that character. | 15 |
| A portal to the Abyss opens, revealing a nightmarish realm of torment and slaughter. | 20 |

Typically, a Frightened creature repeats the saving throw at the end of each of its turns, ending the effect on itself on a success.

At your discretion, a Frightened creature might be subject to other effects as long as the Frightened condition lasts. Consider these examples:

The Frightened creature must take the Dash action on each of its turns and uses its movement to get farther away from the source of its fear.
Attack rolls against the Frightened creature have Advantage.
The Frightened creature can do only one of the following on each of its turns: move, take an action, or take a Bonus Action.
Mental Stress Effects
p70
When a character is subjected to an effect that causes intense mental stress, Psychic damage is the best way to emulate that effect.

The Sample Mental Stress Effects table provides a few examples of such effects, with suggested saving throw DCs and damage. Mental stress can usually be resisted with a successful Wisdom save, but sometimes an Intelligence or Charisma save is more appropriate. On a successful save, a character might take half as much damage instead of no damage, at your discretion.

Sample Mental Stress Effects

| Example | Save DC | Psychic Damage |
|---|---|---|
| A character ingests a hallucinogenic substance that distorts the character’s perception of reality. | 10 | 1d6 |
| A character touches a fiendish idol that tears at the character’s mind, threatening to shatter it. | 15 | 3d6 |
| A magical trap flings a character into the Far Realm until the end of that character’s next turn. | 20 | 9d6 |

Prolonged Effects
p70
Exposure to mental stress can cause prolonged effects. Consider the following possibilities.

Short-Term Effects. The character has the Frightened, Incapacitated, or Stunned condition for 1d10 minutes. This condition might be accompanied by alarming behavior or hallucinations. These effects can be suppressed with the Calm Emotions spell or removed by the Lesser Restoration spell.

Long-Term Effects. The character has Disadvantage on some or all ability checks for 1d10 × 10 hours, stemming from an unwillingness or inability to exert a particular set of abilities. The character might feel enervated and unable to exert much Strength, for example, or become so suspicious of others that Charisma checks are more difficult. These effects can be suppressed with the Calm Emotions spell or removed by the Lesser Restoration spell.

Indefinite Effects. An indefinite effect is a long-term effect (see above) that lasts until removed by a Greater Restoration spell. It can be suppressed by a Calm Emotions spell.

#### Yellow Mold
**Tag:** Rule
**Type:** Hazard
**Source:** DMG'24 p79

*Deadly Hazard (Levels 1–4) or Nuisance Hazard (Levels 5–10)*

Yellow mold grows in dark places, and one patch covers a 5-foot square. If touched, the mold ejects a cloud of spores that fills a 10-foot Cube. Any creature in that area must succeed on a DC 15 Constitution saving throw or take 11 (2d10) Poison damage and have the Poisoned condition for 1 minute. While Poisoned in this way, the creature takes 5 (1d10) Poison damage at the start of each of its turns. The creature repeats the save at the end of each of its turns, ending the effect on itself on a success.

Direct sunlight or any amount of Fire damage destroys a patch of yellow mold.

## Magic Items

From the “Magic Items” chapter of the SRD 5.2.1 (attribution statement under “Rules Glossary” above).

#### Magic Item Categories
**Tag:** Rule
**Type:** Magic Items

Every magic item belongs to a category. The Magic Item Categories table lists the nine categories and provides examples. Rules for the categories appear after the table.

**Magic Item Categories**

| Category | Examples |
|---|---|
| Armor | +1 Leather Armor, +1 Shield |
| Potions | Potion of Healing |
| Rings | Ring of Invisibility |
| Rods | Immovable Rod |
| Scrolls | Spell Scroll |
| Staffs | Staff of Striking |
| Wands | Wand of Fireballs |
| Weapons | +1 Ammunition, +1 Longsword |
| Wondrous Items | Bag of Holding, Boots of Elvenkind |

**Armor**

An item in the Armor category is typically a magical version of armor from “Equipment.” Unless an armor’s description notes otherwise, the armor must be worn for its magic to function.

Some suits of magic armor specify the type of armor they are, such as Chain Mail or Plate Armor. If no type is specified, choose the type or determine it randomly.

**Potions**

An item in the Potion category might be a magical brew that must be imbibed or an oil that must be applied to a creature or an object. A typical potion consists of 1 ounce of liquid in a vial.

**Using a Potion.** Potions are consumable items. Drinking a potion or administering it to another creature requires a Bonus Action. Applying an oil might take longer as specified in its description. Once used, a potion takes effect immediately, and it is used up.

**Mixing Potions.** A character might drink one potion while still under the effects of another or pour several potions into a single container. The strange ingredients used in creating potions can result in unpredictable interactions. When a character mixes two potions together, roll on the Potion Miscibility table. If more than two are combined, roll again for each subsequent potion, combining the results. Unless the effects are immediately obvious, reveal them only when they become evident.

**Potion Miscibility**

| 1d100 | Result |
|---|---|
| 01 | Both potions lose their effects, and the mixture creates a magical explosion in a 5-foot-radius Sphere centered on itself. Each creature in that area takes 4d10 Force damage. |
| 02–08 | Both potions lose their effects, and the mixture becomes an ingested poison of your choice (see “Poison” in “Gameplay Toolbox”). |
| 09–15 | Both potions lose their effects. |
| 16–25 | One potion loses its effect. |
| 26–35 | Both potions work, but with their numerical effects and durations halved. If a potion has no numerical effect and no duration, it instead loses its effect. |
| 36–90 | Both potions work normally. |
| 91–99 | Both potions work, but the numerical effects and duration of one potion are doubled. If neither potion has anything to double in this way, they work normally. |
| 00 | Only one potion works, but its effects are permanent. Choose the simplest effect to make permanent or the one that seems the most fun. For example, a Potion of Healing might increase the drinker’s Hit Point maximum by 2d4 + 2, or a Potion of Invisibility might give the drinker the Invisible condition indefinitely. At your discretion, a Dispel Magic spell or similar magic might end this lasting effect. |

**Rings**

For its magic to function, an item in the Ring category must be worn on a finger or a similar digit unless its description notes otherwise.

**Rods**

An item in the Rod category is a scepter usually made of metal, wood, or bone. A typical rod weighs 2 to 5 pounds.

Unless its description notes otherwise, a rod can be used as an Arcane Focus.

**Scrolls**

An item in the Scroll category is a roll of paper or parchment, sometimes attached to wooden rods and typically kept safe in a tube of ivory, jade, leather, metal, or wood. The most prevalent scroll is the *Spell Scroll*, a spell stored in written form.

**Using a Scroll.** Scrolls are consumable items. Unleashing the magic in a scroll requires the user to read the scroll. When its magic has been invoked, the scroll can’t be used again. Its words fade, or it crumbles into dust.

Any creature that can understand a written language can read a scroll and attempt to activate it unless its description notes otherwise.

**Staffs**

Items in the Staff category vary widely in appearance: some are of nearly equal diameter throughout and smooth, others are gnarled and twisted, some are made of wood, and others are composed of polished metal or crystal. A staff weighs between 2 and 7 pounds and serves well as a walking stick or cane.

Unless its description notes otherwise, a staff can be used as a nonmagical Quarterstaff and an Arcane Focus.

**Wands**

An item in the Wand category is typically 12 to 15 inches long and crafted of metal, bone, or wood. It is tipped with metal, crystal, stone, or some other material.

Unless its description notes otherwise, a wand can be used as an Arcane Focus.

**Weapons**

A magic weapon is typically a magical version of a weapon from “Equipment.” Some magic weapons specify the type of weapon they are in their descriptions, such as a Longsword or Longbow. If no weapon type is specified, you may choose the type or determine it randomly.

**Ammunition.** If a magic weapon has the Ammunition property, ammunition fired from it is considered magical for the purpose of any rule that cares whether a weapon is magical or not.

**Wondrous Items**

Wondrous Items include wearable items such as boots, belts, capes, amulets, brooches, and circlets. Bags, carpets, figurines, horns, musical instruments, and more also fall into this category.

#### Magic Item Rules
**Tag:** Rule
**Type:** Magic Items

Rules for identifying, attuning to, and using magic items appear in “Equipment.” Additional rules are presented below.

**Attunement Prerequisites.** If a magic item has a class prerequisite, a creature must be a member of that class to attune to the item. If a creature must be a spellcaster to attune to an item, the creature qualifies if it can cast at least one spell using its traits or features, not by using a magic item or the like.

**Items Made for Specific Creatures.** Magic items that are meant to be worn tend to magically adjust themselves to the wearer. However, you can decide that a magic item doesn’t adjust its size to fit any wearer. For example, a particular armorer might make items usable only by folk who are sized and shaped like dwarves.

**Unusual Anatomy.** Use your discretion to decide whether a creature can wear an item not made for its anatomy. A ring placed on a tentacle might work, but a yuan-ti with a snakelike tail instead of legs can’t wear magic boots.

**Paired Items.** You can allow exceptions to the rule that paired items must both be worn. For example, a character with only one arm might be able to use a single *Glove of Missile Snaring* so long as the matching glove is on their person.

#### Magic Item Rarity
**Tag:** Rule
**Type:** Magic Items

Every magic item has a rarity, which provides a rough measure of an item’s power relative to other magic items. The rarities are shown in the Magic Item Rarities and Values table.

Common magic items, such as a *Potion of Healing*, are the most plentiful. Artifacts, such as the *Dragon Orb*, are priceless, unique, and difficult to acquire.

**Magic Item Values by Rarity**

Common magic items can often be bought in a town or city. Uncommon and Rare magic items are usually found only in cities, and rarer magic items might be sold only in wondrous locations, such as a city on another plane of existence. If you allow characters to buy and sell magic items in your campaign, rarity can help you set prices for those items. Gold Piece values are provided in the Magic Item Rarities and Values table, though a seller might ask for a service rather than coin as payment.

If a magic item incorporates an item that has a purchase cost in “Equipment” (such as a weapon or a suit of armor), add that item’s cost to the magic item’s value. For example, *+1 Armor* (Plate Armor) has a value of 5,500 GP, which is the sum of a Rare magic item’s value (4,000 GP) and the cost of Plate Armor (1,500 GP).

**Magic Item Rarities and Values**

| Rarity | Value* |
|---|---|
| Common | 100 GP |
| Uncommon | 400 GP |
| Rare | 4,000 GP |
| Very Rare | 40,000 GP |
| Legendary | 200,000 GP |
| Artifact | Priceless |

(*) Halve the value for a consumable item other than a Spell Scroll. The value of a Spell Scroll is double what it costs to scribe the scroll (as specified in the “Scribing Spell Scrolls” section of “Equipment”).

#### Activating a Magic Item
**Tag:** Rule
**Type:** Magic Items

It usually takes a Magic action to activate a magic item. The item’s user might also need to do something special. The description of each item category or individual item details how an item is activated. Certain items use the following rules for their activation.

**Command Word**

A command word is a word or short phrase that must be spoken or signed for an item to work. Spoken command words must be audible and fail to work in areas where all sound is suppressed, as in the area of the *Silence* spell.

**Consumable Items**

Some items are consumed—used up, in other words—when they are activated. A *Potion of Healing* must be swallowed, for example, while the writing vanishes from a scroll when it is read. Once used, a consumable item loses its magic.

**Spells Cast from Items**

Some magic items allow the user to cast a spell from the item. The spell is cast at the lowest possible spell and caster level, doesn’t expend any of the user’s spell slots, and requires no components unless the item’s description notes otherwise. The spell uses its normal casting time, range, and duration, and the user of the item must concentrate if the spell requires Concentration. Many items, such as Potions, bypass the casting of a spell and confer the spell’s effects with its usual duration. Certain items make exceptions to these rules, changing the casting time, duration, or other parts of a spell.

A magic item may require the user to use their own spellcasting ability when casting a spell from the item. If the user has more than one spellcasting ability, the user chooses which one to use with the item. If the user doesn’t have a spellcasting ability, their spellcasting ability modifier is +0 for the item, and the user’s Proficiency Bonus applies.

**Charges**

Some magic items have charges that must be expended to activate their properties. The number of charges an item has remaining is revealed when the *Identify* spell is cast on it. A creature attuned to an item knows how many charges the item has and how many it regains.

#### The Next Dawn
**Tag:** Rule
**Type:** Magic Items

Magic items often have charges or properties that recharge at the next dawn or some other specified time. If such an item is on a world or plane of existence where the specified event doesn’t occur, the GM determines when the item recharges.

#### Cursed Items
**Tag:** Rule
**Type:** Magic Items
**Also:** Cursed Item

A magic item’s description specifies whether it bears a curse. Most methods of identifying items, including the *Identify* spell, fail to reveal such a curse.

Attunement to a cursed item can’t be ended voluntarily unless the curse is broken first, such as with a *Remove Curse* spell.

#### Magic Item Resilience
**Tag:** Rule
**Type:** Magic Items

A magic item is at least as durable as a nonmagical item of its kind. Most magic items, other than Potions and Scrolls, have Resistance to all damage.

An Artifact can be destroyed only in some special way. Otherwise, it is impervious to damage. Learning how to destroy an Artifact usually requires research or the completion of a quest.

#### Crafting Magic Items
**Tag:** Rule
**Type:** Magic Items

“Equipment” contains rules on brewing *Potions of Healing* and scribing *Spell Scrolls*. To create other magic items, follow the rules below. In these rules, “you” refers to the character crafting the magic item.

**Arcana Proficiency**

To craft a magic item, you and any assistants must have proficiency in the Arcana skill.

**Tools**

The Magic Item Tools table lists which tool is required to make a magic item of each category. You must use the required tool to make an item and have proficiency with that tool. Any assistants must also have proficiency with it. For more information on the tools, see “Equipment.”

**Magic Item Tools**

| Item Category | Required Tool |
|---|---|
| Armor | Leatherworker’s Tools, Smith’s Tools, or Weaver’s Tools depending on the kind of armor as noted in the tools’ descriptions |
| Potion | Alchemist’s Supplies or Herbalism Kit |
| Ring | Jeweler’s Tools |
| Rod | Woodcarver’s Tools |
| Scroll | Calligrapher’s Supplies |
| Staff | Woodcarver’s Tools |
| Wand | Woodcarver’s Tools |
| Weapon | Leatherworker’s Tools, Smith’s Tools, or Woodcarver’s Tools depending on the kind of weapon as noted in the tools’ descriptions |
| Wondrous Item | Tinker’s Tools or the tool required to make the nonmagical item on which the magic item is based |

**Spells**

If a magic item allows its user to cast any spells from it, you must have all those spells prepared every day you spend crafting the item.

**Time and Cost**

Crafting a magic item takes an amount of time and money based on the item’s rarity as shown in the Magic Item Crafting Time and Cost table.

**Work per Day.** For each day of crafting, you must work for 8 hours. If an item requires multiple days, those days needn’t be consecutive.

**Assistants.** Characters can combine their efforts to shorten the crafting time. Divide the time needed to create an item by the number of characters working on it. Normally, only one other character can assist you, but the GM might allow more assistants.

**Raw Materials.** The cost in the table represents the raw materials needed to make a magic item. The GM determines whether appropriate raw materials are available. In a city, there is a 75 percent chance that the materials are available, and in any other settlement, that chance is 25 percent. If materials aren’t available, you must wait at least 7 days before checking on the availability again.

If a magic item incorporates an item that has a purchase cost (such as a weapon or a suit of armor), you must also pay that entire cost or craft that item using the rules in “Equipment.” For example, to make *+1 Armor* (Plate Armor), you must pay 3,500 GP or pay 2,000 GP and craft the armor.

**Magic Item Crafting Time and Cost**

| Item Rarity | Time* | Cost* |
|---|---|---|
| Common | 5 days | 50 GP |
| Uncommon | 10 days | 200 GP |
| Rare | 50 days | 2,000 GP |
| Very Rare | 125 days | 20,000 GP |
| Legendary | 250 days | 100,000 GP |

(*) The time and cost are halved for a consumable item other than a Spell Scroll, whose crafting time and cost are given in “Equipment.”

#### Sentient Magic Items
**Tag:** Rule
**Type:** Magic Items
**Also:** Sentient Magic Item, Sentient Item, Sentient Items

Some magic items have sentience and personality. Such an item might be possessed, haunted by the spirit of a previous owner, or self-aware thanks to the magic used to create it. A sentient item might be a cherished ally to its wielder or a continual thorn in the side.

Most sentient items are weapons, but other kinds of items can manifest sentience. Single-use items such as potions and scrolls are never sentient.

The GM controls sentient magic items and their activated properties. A bearer who maintains a good relationship with the item can access those properties. If the relationship is strained, a conflict can ensue (see “Conflict” below).

**Sentient Magic Item Traits**

When you make a sentient magic item, you create the item’s persona much as you would create an NPC, with these exceptions.

**Abilities**

A sentient magic item has Intelligence, Wisdom, and Charisma scores. Choose the item’s abilities, or determine them randomly as follows: roll 4d6 for each one, dropping the lowest roll and totaling the rest.

**Alignment**

A sentient magic item has an alignment. Its creator or nature might suggest an alignment. Otherwise, pick an alignment or roll on the Sentient Item’s Alignment table.

**Communication**

A sentient item communicates by sharing its emotions, broadcasting its thoughts telepathically, or speaking aloud. You can choose how it communicates or roll on the Sentient Item’s Communication table.

**Senses**

A sentient item can perceive its surroundings out to a limited range. You can choose its senses or roll on the Sentient Item’s Senses table.

**Special Purpose**

You can give a sentient item an objective it pursues, perhaps to the exclusion of all else. As long as the wielder’s use of the item aligns with that special purpose, the item remains cooperative. Deviating from this course might cause conflict between the wielder and the item (see “Conflict” below). You can pick a special purpose or roll on the Sentient Item’s Special Purpose table.

**Sentient Item’s Alignment**

| 1d100 | Alignment |
|---|---|
| 01–15 | Lawful Good |
| 16–35 | Neutral Good |
| 36–50 | Chaotic Good |
| 51–63 | Lawful Neutral |
| 64–73 | Neutral |
| 74–85 | Chaotic Neutral |
| 86–89 | Lawful Evil |
| 90–96 | Neutral Evil |
| 97–00 | Chaotic Evil |

**Sentient Item’s Communication**

| 1d10 | Communication |
|---|---|
| 1–6 | The item communicates by transmitting emotion to the creature carrying or wielding it. |
| 7–9 | The item speaks one or more languages. |
| 10 | The item speaks one or more languages. In addition, the item can communicate telepathically with any creature that carries or wields it. |

**Sentient Item’s Senses**

| 1d4 | Senses |
|---|---|
| 1 | Hearing and standard vision out to 30 feet |
| 2 | Hearing and standard vision out to 60 feet |
| 3 | Hearing and standard vision out to 120 feet |
| 4 | Hearing and Darkvision out to 120 feet |

**Sentient Item’s Special Purpose**

| 1d10 | Special Purpose |
|---|---|
| 1 | **Aligned.** The item seeks to defeat or destroy those of a diametrically opposed alignment. Such an item is never Neutral. |
| 2 | **Bane.** The item seeks to thwart or destroy creatures of a particular type, such as Constructs, Fiends, or Undead. |
| 3 | **Creator Seeker.** The item seeks its creator and wants to understand why it was created. |
| 4 | **Destiny Seeker.** The item believes it and its bearer have key roles to play in future events. |
| 5 | **Destroyer.** The item craves destruction and goads its user to fight arbitrarily. |
| 6 | **Glory Seeker.** The item seeks renown as the greatest magic item in the world by winning fame or notoriety for its user. |
| 7 | **Lore Seeker.** The item craves knowledge or is determined to solve a mystery, learn a secret, or unravel a cryptic prophecy. |
| 8 | **Protector.** The item seeks to defend a particular kind of creature, such as elves or werewolves. |
| 9 | **Soulmate Seeker.** The item seeks another sentient magic item, perhaps one that is similar to itself. |
| 10 | **Templar.** The item seeks to defend the servants and interests of a particular deity. |

**Conflict**

When the bearer of a sentient item acts in a manner opposed to the item’s alignment or purpose, conflict can arise. When such a conflict occurs, the item’s bearer makes a Charisma saving throw (DC 12 plus the item’s Charisma modifier). On a failed save, the item makes one or more of the following demands:

**Chase My Dreams.** The item demands that its bearer pursue the item’s goals to the exclusion of all other goals.

**Get Rid of It.** The item demands that its bearer dispose of anything the item finds repugnant.

**It’s Time for a Change.** The item demands to be given to someone else.

**Keep Me Close.** The item insists on being carried or worn at all times.

If its bearer refuses to comply with the item’s demands, the item can do any of the following:

- Make it impossible for its bearer to attune to it.
- Suppress one or more of its activated properties.

- Attempt to take control of its bearer, whereupon the bearer makes a Charisma saving throw (DC 12 plus the item’s Charisma modifier). On a failed save, the bearer has the Charmed condition for 1d12 hours. While Charmed in this way, the bearer must try to follow the item’s commands. If the bearer takes damage, it repeats the save, ending the effect on a success. Whether or not the attempt to control its bearer succeeds, the item can’t use this power again until the next dawn.
