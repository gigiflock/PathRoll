// -------------------------- The Function --------------------------

function randomAll() {

    charAncestry = new randomAncestry();
    charBackground = new randomBackground();
    randomClasse();

    const finalStats = [];
    for (let i = 0; i < charAncestry.stat.initialStats.length; i++) {
        const soma = charAncestry.stat.initialStats[i] + charBackground.stat.boostStats[i] + charClasse.stat.boostStats[i];
        finalStats.push(soma);
    }
    const [str, dex, con, int, wis, cha] = finalStats;

    const fichaGrid = document.getElementById('ficha');
    fichaGrid.classList.add('fichaGrid');

    // ----------------------- HTML FICHA ------------------------

    document.getElementById('a').innerHTML = (
        charAncestry.name + '<br>' + charAncestry.heritage.name
    );
    document.getElementById('bc').innerHTML = (
        'Background - ' + charBackground.name + 
        '<br>Class: ' + charClasse.name
    );
    document.getElementById('life').innerHTML = (
        'HP: ' + (charAncestry.hp + charClasse.hp) +
        '<br>AC:'
    );
    document.getElementById('trained').innerHTML = (
        'Trained: '
    );
    document.getElementById('languages').innerHTML = (
        'Languages: ' + charAncestry.language
    );
    document.getElementById('ab').innerHTML = (
        'Abilities: <br>'
    );
    document.getElementById('ft').innerHTML = (
        'Feats: <br>' + charAncestry.feat
    );
    document.getElementById('st').innerHTML = (
        'Reflexes: <br>' + 
        'Fortitude: <br>' + 
        'Will: <br>'
    );
    document.getElementById('s').innerHTML = (
        'Perception: ' +
        '<br>Size: ' + charAncestry.size +
        '<br>Speed: ' + charAncestry.speed +
        '<br>Senses: ' + charAncestry.senses
    );
    document.getElementById('dc').innerHTML = (
        'Class DC: '
    );
    document.getElementById('stats').innerHTML = (
        'Strength = ' + str +
        ' | Dexterity = ' + dex +
        ' | Constitution = ' + con +
        ' | Intelligence = ' + int +
        ' | Wisdom = ' + wis +
        ' | Charisma = ' + cha
    );
    document.getElementById('skills').innerHTML = (
        'Skills: <br>'
    );
    document.getElementById('notes').innerHTML = (
        'Notes: <br>'
    );
    document.getElementById('magic').innerHTML = (
        'Magic: <br>'
    );
}

// -------------------------- Stats --------------------------
class Stats {
    constructor() {
        this.initialStats = [this.str = 10, this.dex = 10, this.con = 10, this.int = 10, this.wis = 10, this.cha = 10];

        this.boostStats = [this.str = 0, this.dex = 0, this.con = 0, this.int = 0, this.wis = 0, this.cha = 0];
    }
}
// -------------------------- Feats --------------------------
const featDwarf = ['Dwarven Lore', 'Dwarven Weapon Familiarity', 'Rock Runner', 'Stonecunning', 'Unburdened Iron', 'Vengeful Hatred'];

const featElf = ['Elven Lore', 'Elven Weapon Familiarity', 'Forlorn', 'Nimble Elf', 'Otherwordly Magic', 'Unwavering Mien', 'Ancestral Longevity'];

const featGnome = ['Animal Accomplice', 'Burrow Elocutionist', 'Fey Fellowship', 'First World Magic', 'Gnome Obsession', 'Gnome Weapon Familiarity', 'Illusion Sense'];

const featGoblin = ['Burn It!', 'City Scavenger', 'Goblin Lore', 'Goblin Scuttle', 'Goblin Song', 'Goblin Weapon Familiarity', 'Junk Tinker', 'Rough Rider', 'Very Sneaky'];

const featHalfling = ['Distracting Shadows', 'Halfling Lore', 'Halfling Lore', 'Halfling Weapon Familiarity', 'Sure Feet', 'Titan Slinger', 'Unfettered Halfling', 'Watchful Halfling'];

const featHuman = ['Cooperative Nature', 'General training', 'Haughty Obstinacy', 'Natural Ambition', 'Natural Skill', 'Unconventional Weaponry', 'Adapted Cantrip'];

const featOrc = ['Monstrous Peacemaker', 'Orc Ferosity', 'Orc Superstition', 'Orc Weapon Familiarity'];

// -------------------------- Ancestry Function --------------------------

function randomAncestry (){

    const ancestry = [Dwarf, Elf, Gnome, Goblin, Halfling, Human];

    const charAncestry = new ancestry[Math.floor(Math.random() * ancestry.length)];

    if(charAncestry.feat == 'Ancestral Longevity'){
        document.getElementById('notes').innerHTML = ('Character is at least 100 years old.');
    } else {
        document.getElementById('notes').innerHTML = ('');
    }

    return(charAncestry);
}
// -------------------------- Background Function --------------------------

function randomBackground (){

    const background = [Acolyte, Acrobat, AnimalWhisperer, Artisan, Artist, Barkeeper, Barrister, BountyHunter, Charlatan, Criminal, Detective, Emissary, Entertainer, Farmhand, FieldMedic, FortuneTeller, Gambler, Gladiator, Guard, Herbalist, Hermit, Hunter, Laborer, MartialDiscipleAcrobatics, MartialDiscipleAthletics, Merchant, Miner, Noble, Nomad, Prisoner, Sailor, Scholar, Scout, StreetUrchin, Tinker, Warrior];

    const charBackground = new background[Math.floor(Math.random() * background.length)];
    return(charBackground);
}
// -------------------------- Classe Function --------------------------

function randomClasse (){

    const classe = [Alchemist, Barbarian, Bard, Champion, Cleric, Druid, Fighter, Monk, Ranger, Rogue, Sorcerer, Wizard];
    const classeCaster = [Bard, Cleric, Druid, Sorcerer, Wizard];

    if(charAncestry.feat == 'Adapted Cantrip'){
        this.charClasse = new classeCaster[Math.floor(Math.random() * classeCaster.length)];
    } else{
        this.charClasse = new classe[Math.floor(Math.random() * classe.length)];
    }
}
// -------------------------- Ancestries --------------------------
class Dwarf {
    constructor() {
        this.name = 'Dwarf';
        this.hp = 10;
        this.speed = 20;
        this.size = 'Medium';
        this.senses = 'Darkvision ';
        this.language = '<br>Common ' + '<br>Dwarven ';

        this.stat = new Stats();

        const boost = (freeBoost) => {

            do {
                freeBoost = Math.floor(Math.random() * this.stat.initialStats.length);
            } while (freeBoost === 2 || freeBoost === 4);

            this.stat.initialStats[freeBoost] += 2;
            this.stat.initialStats[2] += 2;
            this.stat.initialStats[4] += 2;
            this.stat.initialStats[5] -= 2;
        }
        boost();

        const heritageDwarf = [
            {name: 'Ancient-Blooded Dwarf', ability: "Call on Ancient Blood - Reaction"}, 
            {name: 'Death Warden Dwarf', ability: "success on saving throw against necromancy effect = critical success"},
            {name: 'Forge Dwarf', ability: "fire resistance equal to half of level (minimum 1). Treat environmental heat effects as if they were one step less extreme"},
            {name: 'Rock Dwarf', ability: "+2 circumstance bonus to Fortitude or Reflex DC against Shove or Trip. Also to saving throws against spells or effects that attempt to knock you prone. If forced to move 10 feet or more, move half the distance"},
            {name: 'Strong-Blooded Dwarf', ability: "gain poison resistance equal to half of level (minimum 1). Each successful saving throws against poison affliction reduces its stage by 2, or by 1 for a virulent poison. Each critical success against ongoing poison reduces its stage by 3, or by 2 for a virulent poison."}
        ];
        this.heritage = heritageDwarf[Math.floor(Math.random() * heritageDwarf.length)];

        this.feat = featDwarf[Math.floor(Math.random() * featDwarf.length)];
    }
}
class Elf {
    constructor() {
        this.name = 'Elf'
        this.hp = 6;
        this.speed = 30;
        this.size = 'Medium';
        this.senses = 'Low-Light Vision ';
        this.language = '<br>Common ' + '<br>Elven ';

        this.stat = new Stats();

        const boost = (freeBoost) => {

            do {
                freeBoost = Math.floor(Math.random() * this.stat.initialStats.length);
            } while (freeBoost === 1 || freeBoost === 3);

            this.stat.initialStats[freeBoost] += 2;
            this.stat.initialStats[1] += 2;
            this.stat.initialStats[3] += 2;
            this.stat.initialStats[2] -= 2;
        }
        boost();

        const heritageElf = [
            {name: 'Arctic Elf' , ability: "cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme"},
            {name: 'Cavern Elf' , ability: "you were born or spent many years in underground tunnels or caverns where light is scarce. You gain darkvision."}, 
            {name: 'Seer Elf' , ability: "you can cast the detect magic cantrip as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. In addition, you gain a +1 circumstance bonus to checks to Identify Magic and to Decipher Writing of a magical nature."}, 
            {name: 'Whisper Elf' , ability: "you gain a +2 circumstance bonus when using the Seek action to find hidden or undetected creatures within 30 feet of you. When you target an opponent that is concealed from you or hidden from you, reduce the DC of the flat check to 3 for a concealed target or 9 for a hidden one. This benefit doesn't apply if you can't hear or if the creature is incapable of making sound"}, 
            {name: 'Woodland Elf' , ability: "When Climbing trees, vines, and other foliage, you move at half your Speed on a success and at full Speed on a critical success. This doesn't affect you if you're using a climb Speed. You can always use the Take Cover action when you are within forest terrain to gain cover, even if you're not next to an obstacle you can Take Cover behind."}
        ];
        this.heritage = heritageElf[Math.floor(Math.random() * heritageElf.length)];

        this.feat = featElf[Math.floor(Math.random() * featElf.length)];

    }
} class Gnome {
    constructor() {
        this.name = 'Gnome'
        this.hp = 8;
        this.speed = 25;
        this.size = 'Small';
        this.senses = 'Low-Light Vision ';
        this.language = '<br>Common' + '<br>Gnomish' + '<br>Sylvan';

        this.stat = new Stats();

        const boost = (freeBoost) => {
            do {
                freeBoost = Math.floor(Math.random() * this.stat.initialStats.length);
            } while (freeBoost === 2 || freeBoost === 5);

            this.stat.initialStats[freeBoost] += 2;
            this.stat.initialStats[2] += 2;
            this.stat.initialStats[5] += 2;
            this.stat.initialStats[0] -= 2;
        }
        boost();

        const heritageGnome = [
            {name: 'Chameleon Gnome' , ability: "the color of your hair and skin is mutable, possibly due to latent magic from First World influences or lingering illusion effects. It takes a single action for minor localized shifts and up to an hour for dramatic shifts throughout your body. While you're asleep, the colors shift on their own in tune with your dreams, giving you an unusual coloration each morning. When you're in an area where your coloration is roughly similar to the environment you can use the single action to make minor localized shifts designed to help you blend into your surroundings. This grants you a +2 circumstance bonus to Stealth checks until your surroundings shift in coloration or pattern."}, 
            {name: 'Fey-Touched Gnome' , ability: "you gain the fey trait, in addition to the gnome and humanoid traits. You can cast one primal cantrip as a primal innate spell at will. It is heightened to a spell rank equal to half your level rounded up. You can change this cantrip to a different one from the same list once per day by meditating to realign yourself with the First World; this is a 10-minute activity that has the concentrate trait."}, 
            {name: 'Sensate Gnome' , ability: "you gain a special sense: imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine the exact location of a creature.In addition, you gain a +2 circumstance bonus to Perception checks whenever you're trying to locate an undetected creature that is within the range of your scent."}, 
            {name: 'Umbral Gnome' , ability: "you gain darkvision."}, 
            {name: 'Wellspring Gnome' , ability: "you gain one cantrip spell. You can cast this spell as an innate spell at will, as a spell of your chosen tradition. A cantrip is heightened to a spell rank equal to half your level rounded up. Whenever you gain a primal innate spell from a gnome ancestry feat, change its tradition from primal to your chosen tradition."}
        ];
        this.heritage = heritageGnome[Math.floor(Math.random() * heritageGnome.length)];

        this.feat = featGnome[Math.floor(Math.random() * featGnome.length)];
    }
}
class Goblin {
    constructor() {
        this.name = 'Goblin'
        this.hp = 6;
        this.speed = 25;
        this.size = 'Small';
        this.senses = 'Darkvision ';
        this.language = '<br>Common' + '<br>Goblin';

        this.stat = new Stats();

        const boost = (freeBoost) => {
            do {
                freeBoost = Math.floor(Math.random() * this.stat.initialStats.length);
            } while (freeBoost === 1 || freeBoost === 5);

            this.stat.initialStats[freeBoost] += 2;
            this.stat.initialStats[1] += 2;
            this.stat.initialStats[5] += 2;
            this.stat.initialStats[4] -= 2;
        }
        boost();

        const heritageGoblin = [
            {name: 'Charhide Goblin' , ability: "you gain fire resistance equal to half your level (minimum 1). Your flat check to remove persistent fire damage is DC 10 instead of DC 15, which is reduced to DC 5 if another creature uses a particularly appropriate action to help."},
            {name: 'Irongut Goblin' , ability: "you can keep yourself fed with poor meals in a settlement as long as garbage is readily available, without using the Subsist downtime activity. You can eat and drink things when you are sickened. You gain a +2 circumstance bonus to saving throws against afflictions, against gaining the sickened condition, and to remove the sickened condition. When you roll a success on a Fortitude save affected by this bonus, you get a critical success instead. All these benefits apply only when the affliction or condition resulted from something you ingested."}, 
            {name: 'Razortooth Goblin' , ability: "you gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme"}, 
            {name: 'Snow Goblin' , ability: "---"}, 
            {name: 'Unbreakable Goblin' , ability: "you gain 10 Hit Points from your ancestry instead of 6. When you fall, reduce the falling damage you take as though you had fallen half the distance."}
        ];
        this.heritage = heritageGoblin[Math.floor(Math.random() * heritageGoblin.length)];

        this.feat = featGoblin[Math.floor(Math.random() * featGoblin.length)];
    }
}
class Halfling {
    constructor() {
        this.name = 'Halfling'
        this.hp = 6;
        this.speed = 25;
        this.size = 'Small';
        this.senses = 'Normal Vision ' + 'Keen Eyes ';
        this.language = '<br>Common' + '<br>Halfling';

        this.stat = new Stats();

        const boost = (freeBoost) => {
            do {
                freeBoost = Math.floor(Math.random() * this.stat.initialStats.length);
            } while (freeBoost === 1 || freeBoost === 4);

            this.stat.initialStats[freeBoost] += 2;
            this.stat.initialStats[1] += 2;
            this.stat.initialStats[4] += 2;
            this.stat.initialStats[0] -= 2;
        }
        boost();

        const heritageHalfling = [
            {name: 'Gusty Halfling' , ability: "when you roll a success on a saving throw against an emotion effect, you get a critical success instead."}, 
            {name: 'Hillock Halfling' , ability: "when you regain Hit Points overnight, add your level to the Hit Points regained. When anyone uses the Medicine skill to Treat your Wounds, you can eat a snack to add your level to the Hit Points you regain from their treatment."}, 
            {name: 'Nomadic Halfing' , ability: "you gain two additional languages of your choice, chosen from among the common and uncommon languages available to you, and every time you take the Multilingual feat, you gain another new language."}, 
            {name: 'Twilight Halfling' , ability: "you gain low-light vision."}, 
            {name: 'Wildwood Halfling' , ability: "you ignore any difficult terrain caused by plants and fungi, such as bushes, vines, and undergrowth."}
        ];
        this.heritage = heritageHalfling[Math.floor(Math.random() * heritageHalfling.length)];

        this.feat = featHalfling[Math.floor(Math.random() * featHalfling.length)];
    }
}
class Human {
    constructor() {
        this.name = 'Human'
        this.hp = 8
        this.speed = 25;
        this.size = 'Medium';
        this.senses = 'Normal Vision ';
        this.language = '<br>Common';

        this.stat = new Stats();

        const boost = (freeBoost, freeBoostTwo) => {

            freeBoost = Math.floor(Math.random() * this.stat.initialStats.length);

            do {
                freeBoostTwo = Math.floor(Math.random() * this.stat.initialStats.length);
            } while (freeBoostTwo == freeBoost);

            this.stat.initialStats[freeBoost] += 2;
            this.stat.initialStats[freeBoostTwo] += 2;
        }
        boost();

        const heritageHuman = [
            {name: 'Half-Elf Human' , ability: "---"}, 
        {name: 'Half-Orc Human' , ability: "---"}, 
            {name: 'Skilled Human' , ability: "you become trained in one skill. At 5th level, you become an expert in the chosen skill."}, 
            {name: 'Versatile Human' , ability: "you gain a general feat."}
        ];
        this.heritage = heritageHuman[Math.floor(Math.random() * heritageHuman.length)];

        let featHumanElf = featElf.concat(featHuman);
        let featHumanOrc = featOrc.concat(featHuman);

        if(this.heritage == 'Half-Elf Human'){
            this.feat = featHumanElf[Math.floor(Math.random() * featHuman.length)];
        } else if(this.heritage == 'Half-Orc Human'){
            this.feat = featHumanOrc[Math.floor(Math.random() * featHuman.length)];
        } else{
        this.feat = featHuman[Math.floor(Math.random() * featHuman.length)];
        }
    }
}
// -------------------------- Background -------------------------- 
class Acolyte {
    constructor() {
        this.name = 'Acolyte';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 3 || bgBoost === 4));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Acrobat {
    constructor() {
        this.name = 'Acrobat';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 0 || bgBoost === 1));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class AnimalWhisperer {
    constructor() {
        this.name = 'Animal Whisperer';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 4 || bgBoost === 5));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Artisan {
    constructor() {
        this.name = 'Artisan';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 0 || bgBoost === 3));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Artist {
    constructor() {
        this.name = 'Artist';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 1 || bgBoost === 5));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Barkeeper {
    constructor() {
        this.name = 'Barkeeper';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 2 || bgBoost === 5));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Barrister {
    constructor() {
        this.name = 'Barrister';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 3 || bgBoost === 5));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class BountyHunter {
    constructor() {
        this.name = 'Bounty Hunter';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 0 || bgBoost === 4));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Charlatan {
    constructor() {
        this.name = 'Charlatan';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 3 || bgBoost === 5));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Criminal {
    constructor() {
        this.name = 'Criminal';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 1 || bgBoost === 3));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Detective {
    constructor() {
        this.name = 'Detective';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 3 || bgBoost === 4));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Emissary {
    constructor() {
        this.name = 'Emissary';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 3 || bgBoost === 5));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Entertainer {
    constructor() {
        this.name = 'Entertainer';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 1 || bgBoost === 5));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Farmhand {
    constructor() {
        this.name = 'Farmhand';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 2 || bgBoost === 4));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class FieldMedic {
    constructor() {
        this.name = 'Field Medic';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 2 || bgBoost === 4));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class FortuneTeller {
    constructor() {
        this.name = 'Fortune Teller';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 3 || bgBoost === 5));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Gambler {
    constructor() {
        this.name = 'Gambler';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 1 || bgBoost === 5));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Gladiator {
    constructor() {

        this.name = 'Gladiator';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 0 || bgBoost === 5));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Guard {
    constructor() {
        this.name = 'Guard';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 0 || bgBoost === 5));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Herbalist {
    constructor() {
        this.name = 'Herbalist';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 2 || bgBoost === 4));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Hermit {
    constructor() {
        this.name = 'Hermit';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 2 || bgBoost === 3));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Hunter {
    constructor() {
        this.name = 'Hunter';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 1 || bgBoost === 4));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Laborer {
    constructor() {
        this.name = 'Laborer';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 0 || bgBoost === 2));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class MartialDiscipleAcrobatics {
    constructor() {
        this.name = 'Martial Disciple - Acrobatics';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 0 || bgBoost === 1));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class MartialDiscipleAthletics {
    constructor() {
        this.name = 'Martial Disciple - Athletics';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 0 || bgBoost === 1));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Merchant {
    constructor() {
        this.name = 'Merchant';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 1 || bgBoost === 5));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Miner {
    constructor() {
        this.name = 'Miner';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 0 || bgBoost === 4));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Noble {
    constructor() {
        this.name = 'Noble';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 3 || bgBoost === 5));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Nomad {
    constructor() {
        this.name = 'Nomad';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 2 || bgBoost === 4));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Prisoner {
    constructor() {
        this.name = 'Prisoner';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 0 || bgBoost === 2));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Sailor {
    constructor() {
        this.name = 'Sailor';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 0 || bgBoost === 1));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Scholar {
    constructor() {
        this.name = 'Scholar';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 1 || bgBoost === 4));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Scout {
    constructor() {
        this.name = 'Scout';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 1 || bgBoost === 4));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class StreetUrchin {
    constructor() {
        this.name = 'Street Urchin';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 1 || bgBoost === 2));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Tinker {
    constructor() {
        this.name = 'Tinker';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 1 || bgBoost === 3));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
class Warrior {
    constructor() {
        this.name = 'Warrior';
        this.stat = new Stats();

        const boost = (bgBoost, freeBoost) => {

            do {
                bgBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (!(bgBoost === 0 || bgBoost === 2));

            do {
                freeBoost = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (freeBoost === bgBoost);

            this.stat.boostStats[bgBoost] += 2;
            this.stat.boostStats[freeBoost] += 2;
        }
        boost();
    }
}
// -------------------------- Classe -------------------------- 
class Alchemist {
    constructor() {
        this.name = 'Alchemist';
        this.hp = 8;

        this.stat = new Stats();
        const boost = (noBoost, noBoostTwo) => {

            noBoost = Math.floor(Math.random() * this.stat.boostStats.length);

            do {
                noBoostTwo = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (noBoostTwo === noBoost);

            for(let i = 0; i < this.stat.boostStats.length; i++) {
                if (i !== noBoost && i !== noBoostTwo) {
                    this.stat.boostStats[i] +=2;
                }
            }
        }
        boost();
    }
}
class Barbarian {
    constructor() {
        this.name = 'Barbarian';
        this.hp = 12;

        this.stat = new Stats();
        const boost = (noBoost, noBoostTwo) => {

            noBoost = Math.floor(Math.random() * this.stat.boostStats.length);

            do {
                noBoostTwo = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (noBoostTwo === noBoost);

            for(let i = 0; i < this.stat.boostStats.length; i++) {
                if (i !== noBoost && i !== noBoostTwo) {
                    this.stat.boostStats[i] +=2;
                }
            }
        }
        boost();
    }
}
class Bard {
    constructor() {
        this.name = 'Bard';
        this.hp = 8;
        
        this.stat = new Stats();
        const boost = (noBoost, noBoostTwo) => {

            noBoost = Math.floor(Math.random() * this.stat.boostStats.length);

            do {
                noBoostTwo = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (noBoostTwo === noBoost);

            for(let i = 0; i < this.stat.boostStats.length; i++) {
                if (i !== noBoost && i !== noBoostTwo) {
                    this.stat.boostStats[i] +=2;
                }
            }
        }
        boost();
    }
}
class Champion {
    constructor() {
        this.name = 'Champion';
        this.hp = 10;

        this.stat = new Stats();
        const boost = (noBoost, noBoostTwo) => {

            noBoost = Math.floor(Math.random() * this.stat.boostStats.length);

            do {
                noBoostTwo = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (noBoostTwo === noBoost);

            for(let i = 0; i < this.stat.boostStats.length; i++) {
                if (i !== noBoost && i !== noBoostTwo) {
                    this.stat.boostStats[i] +=2;
                }
            }
        }
        boost();
    }
}
class Cleric {
    constructor() {
        this.name = 'Cleric';
        this.hp = 8;

        this.stat = new Stats();
        const boost = (noBoost, noBoostTwo) => {

            noBoost = Math.floor(Math.random() * this.stat.boostStats.length);

            do {
                noBoostTwo = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (noBoostTwo === noBoost);

            for(let i = 0; i < this.stat.boostStats.length; i++) {
                if (i !== noBoost && i !== noBoostTwo) {
                    this.stat.boostStats[i] +=2;
                }
            }
        }
        boost();
    }
}
class Druid {
    constructor() {
        this.name = 'Druid';
        this.hp = 8;

        this.stat = new Stats();
        const boost = (noBoost, noBoostTwo) => {

            noBoost = Math.floor(Math.random() * this.stat.boostStats.length);

            do {
                noBoostTwo = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (noBoostTwo === noBoost);

            for(let i = 0; i < this.stat.boostStats.length; i++) {
                if (i !== noBoost && i !== noBoostTwo) {
                    this.stat.boostStats[i] +=2;
                }
            }
        }
        boost();
    }
}
class Fighter {
    constructor() {
        this.name = 'Fighter';
        this.hp = 10;

        this.stat = new Stats();
        const boost = (noBoost, noBoostTwo) => {

            noBoost = Math.floor(Math.random() * this.stat.boostStats.length);

            do {
                noBoostTwo = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (noBoostTwo === noBoost);

            for(let i = 0; i < this.stat.boostStats.length; i++) {
                if (i !== noBoost && i !== noBoostTwo) {
                    this.stat.boostStats[i] +=2;
                }
            }
        }
        boost();
    }
}
class Monk {
    constructor() {
        this.name = 'Monk';
        this.hp = 10;

        this.stat = new Stats();
        const boost = (noBoost, noBoostTwo) => {

            noBoost = Math.floor(Math.random() * this.stat.boostStats.length);

            do {
                noBoostTwo = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (noBoostTwo === noBoost);

            for(let i = 0; i < this.stat.boostStats.length; i++) {
                if (i !== noBoost && i !== noBoostTwo) {
                    this.stat.boostStats[i] +=2;
                }
            }
        }
        boost();
    }
}
class Ranger {
    constructor() {
        this.name = 'Ranger';
        this.hp = 10;

        this.stat = new Stats();
        const boost = (noBoost, noBoostTwo) => {

            noBoost = Math.floor(Math.random() * this.stat.boostStats.length);

            do {
                noBoostTwo = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (noBoostTwo === noBoost);

            for(let i = 0; i < this.stat.boostStats.length; i++) {
                if (i !== noBoost && i !== noBoostTwo) {
                    this.stat.boostStats[i] +=2;
                }
            }
        }
        boost();
    }
}
class Rogue {
    constructor() {
        this.name = 'Rogue';
        this.hp = 8;

        this.stat = new Stats();
        const boost = (noBoost, noBoostTwo) => {

            noBoost = Math.floor(Math.random() * this.stat.boostStats.length);

            do {
                noBoostTwo = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (noBoostTwo === noBoost);

            for(let i = 0; i < this.stat.boostStats.length; i++) {
                if (i !== noBoost && i !== noBoostTwo) {
                    this.stat.boostStats[i] +=2;
                }
            }
        }
        boost();
    }
}
class Sorcerer {
    constructor() {
        this.name = 'Sorcerer';
        this.hp = 6;

        this.stat = new Stats();
        const boost = (noBoost, noBoostTwo) => {

            noBoost = Math.floor(Math.random() * this.stat.boostStats.length);

            do {
                noBoostTwo = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (noBoostTwo === noBoost);

            for(let i = 0; i < this.stat.boostStats.length; i++) {
                if (i !== noBoost && i !== noBoostTwo) {
                    this.stat.boostStats[i] +=2;
                }
            }
        }
        boost();
    }
}
class Wizard {
    constructor() {
        this.name = 'Wizard';
        this.hp = 6;

        this.stat = new Stats();
        const boost = (noBoost, noBoostTwo) => {

            noBoost = Math.floor(Math.random() * this.stat.boostStats.length);

            do {
                noBoostTwo = Math.floor(Math.random() * this.stat.boostStats.length);
            } while (noBoostTwo === noBoost);

            for(let i = 0; i < this.stat.boostStats.length; i++) {
                if (i !== noBoost && i !== noBoostTwo) {
                    this.stat.boostStats[i] +=2;
                }
            }
        }
        boost();
    }
}