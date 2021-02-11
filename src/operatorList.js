// WIP File, not in use.

const operatorList = [
        {
            name: 'Aruni',
            speed: 2,
            armor: 2,
            difficulty: null,
            roles: [
                'Secure',
                'Intel Gatherer',
                'Anchor'
            ],
            primary: [
                'P10 Roni',
                'Mk 14 EBR'
            ],
            secondary: [
                'PRB92'
            ],
            gadget: [
                'Bulletproof Camera',
                'Barbed Wire'
            ],
            unique: 'Surya Gate',
            bio: {
                name: 'Apha Tawanroong',
                birth: 'Aug 9th',
                age: 42,
                origin: 'Ta Phraya District, Thailand'
            } 
        },
		{
            name: 'Melusi',
            speed: 3,
            armor: 1,
            difficulty: 1,
            roles: [
                'Crowd Control',
                'Intel Gatherer',
                'Secure'
            ],
            primary: [
                'MP5',
                'Super 90'
            ],
            secondary: [
                'RG15'
            ],
            gadget: [
                'Impact Grenade',
                'Nitro Cell'
            ],
            unique: 'Banshee Sonic Defense',
            bio: {
                name: 'Thandiwe Ndlovu',
                birth: 'Jun 16th',
                age: 32,
                origin: 'Louwsburg, South Africa'
            } 
        },
		{
            name: 'Oryx',
            speed: 2,
            armor: 2,
            difficulty: 2,
            roles: [
                'Roam',
                'Soft Breach'
            ],
            primary: [
                'SPAS-12',
                'T-5 SMG'
            ],
            secondary: [
                'Bailiff 410',
                'USP40'
            ],
            gadget: [
                'Barbed Wire',
                'Proximity Alarm'
            ],
            unique: 'Remah Dash',
            bio: {
                name: 'Saif Al Hadid',
                birth: 'Jul 3rd',
                age: 45,
                origin: 'Azraq, Jordan'
            } 
        },
		{
            name: 'Wamai',
            speed: 2,
            armor: 2,
            difficulty: 2,
            roles: [
                'Anchor',
                'Secure'
            ],
            primary: [
                'AUG A2',
                'MP5K'
            ],
            secondary: [
                'D-40',
                'P12'
            ],
            gadget: [
                'Proximity Alarm',
                'Impact Grenade'
            ],
            unique: 'Mag-Net System',
            bio: {
                name: 'Ngũgĩ Muchoki Furaha',
                birth: 'Jun 1st',
                age: 28,
                origin: 'Lamu, Kenya'
            } 
        },
		{
            name: 'Goyo',
            speed: 2,
            armor: 2,
            difficulty: 2,
            roles: [
                'Area Denial',
                'Secure'
            ],
            primary: [
                'Vector .45 ACP',
                'TCSG12'
            ],
            secondary: [
                'P229 RC'
            ],
            gadget: [
                'Proximity Alarm',
                'Nitro Cell'
            ],
            unique: 'Volcan Shield',
            bio: {
                name: 'César Ruiz Hernández',
                birth: 'Jun 20th',
                age: 31,
                origin: 'Culiacán Rosales, Mexico'
            } 
        },
		{
            name: 'Warden',
            speed: 2,
            armor: 2,
            difficulty: 2,
            roles: [
                'Anchor',
                'Intel Denier'
            ],
            primary: [
                'M590A1',
                'MPX'
            ],
            secondary: [
                'P-10C',
                'SMG-12'
            ],
            gadget: [
                'Deployable Shield',
                'Nitro Cell'
            ],
            unique: 'Glance Smart Glasses',
            bio: {
                name: 'Collinn McKinley',
                birth: 'Mar 18th',
                age: 48,
                origin: 'Louisville, Kentucky'
            } 
        },
		{
            name: 'Mozzie',
            speed: 2,
            armor: 2,
            difficulty: 2,
            roles: [
                'Intel Gatherer',
                'Intel Denier',
                'Secure'
            ],
            primary: [
                'Commando 9',
                'P10 Roni'
            ],
            secondary: [
                'SDP 9mm'
            ],
            gadget: [
                'Barbed Wire',
                'Nitro Cell'
            ],
            unique: 'Pest Launcher',
            bio: {
                name: 'Max Goose',
                birth: 'Feb 15th',
                age: 35,
                origin: 'Portland, Australia'
            } 
        },
		{
            name: 'Kaid',
            speed: 1,
            armor: 3,
            difficulty: 2,
            roles: [
                'Anchor',
                'Anti Hard Breach',
                'Secure'
            ],
            primary: [
                'AUG A3',
                'TCSG12'
            ],
            secondary: [
                '.44 Mag Semi-Auto',
                'LFP586'
            ],
            gadget: [
                'Barbed Wire',
                'Nitro Cell'
            ],
            unique: 'Rtila Electroclaw',
            bio: {
                name: 'Jalal El Fassi',
                birth: 'Jun 26th',
                age: 58,
                origin: 'Aroumd, Morocco'
            } 
        },
		{
            name: 'Clash',
            speed: 1,
            armor: 3,
            difficulty: 3,
            roles: [
                'Crowd Control',
                'Intel Gatherer',
                'Secure',
                'Shield'
            ],
            primary: [
                'CCE Shield'
            ],
            secondary: [
                'P-10C',
                'SPSMG9'
            ],
            gadget: [
                'Barbed Wire',
                'Impact Grenade'
            ],
            unique: 'CCE Shield',
            bio: {
                name: 'Morowa Evans',
                birth: 'Jun 7th',
                age: 35,
                origin: 'London, England'
            } 
        },
		{
            name: 'Maestro',
            speed: 1,
            armor: 3,
            difficulty: 2,
            roles: [
                'Anchor',
                'Area Denial',
                'Intel Gatherer',
                'Secure'
            ],
            primary: [
                'Alda 5.56',
                'ACS12'
            ],
            secondary: [
                'Keratos .357',
                'Bailiff 410'
            ],
            gadget: [
                'Barbed Wire',
                'Impact Grenade'
            ],
            unique: 'Evil Eye',
            bio: {
                name: 'Adriano Martello',
                birth: 'Apr 13th',
                age: 45,
                origin: 'Rome, Italy'
            } 
        },
		{
            name: 'Alibi',
            speed: 3,
            armor: 1,
            difficulty: 3,
            roles: [
                'Intel Gatherer',
                'Intel Denier',
                'Roam',
                'Trap'
            ],
            primary: [
                'Mx4 Storm',
                'ACS12'
            ],
            secondary: [
                'Keratos .357',
                'Bailiff 410'
            ],
            gadget: [
                'Impact Grenade',
                'Deployable Shield'
            ],
            unique: 'Prisma',
            bio: {
                name: 'Aria de Luca',
                birth: 'Dec 15th',
                age: 37,
                origin: 'Tripoli, Libya'
            } 
        },
		{
            name: 'Vigil',
            speed: 3,
            armor: 1,
            difficulty: 3,
            roles: [
                'Roam',
                'Intel Denier'
            ],
            primary: [
                'K1A',
                'BOSG.12.2'
            ],
            secondary: [
                'C75 Auto',
                'SMG-12'
            ],
            gadget: [
                'Bulletproof Camera',
                'Impact Grenade'
            ],
            unique: 'ERC-7',
            bio: {
                name: 'Chul Kyung Hwa',
                birth: 'Jan 17th',
                age: 34,
                origin: '[REDACTED]'
            } 
        },
		{
            name: 'Ela',
            speed: 3,
            armor: 1,
            difficulty: 1,
            roles: [
                'Crowd Control',
                'Roam',
                'Trap'
            ],
            primary: [
                'Scorpion Evo 3 A1',
                'FO-12'
            ],
            secondary: [
                'RG15'
            ],
            gadget: [
                'Barbed Wire',
                'Deployable Shield'
            ],
            unique: 'Grzmot Mine',
            bio: {
                name: 'Elżbieta Bosak',
                birth: 'Nov 8th',
                age: 31,
                origin: 'Wrocław, Poland'
            } 
        },
		{
            name: 'Lesion',
            speed: 2,
            armor: 2,
            difficulty: 1,
            roles: [
                'Crowd Control',
                'Anchor',
                'Intel Gatherer',
                'Roam',
                'Trap'
            ],
            primary: [
                'SIX12 SD',
                'T-5 SMG'
            ],
            secondary: [
                'Q-929'
            ],
            gadget: [
                'Impact Grenade',
                'Bulletproof Camera'
            ],
            unique: 'Gu Mines',
            bio: {
                name: 'Liu Tze Long',
                birth: 'Jul 2nd',
                age: 44,
                origin: 'Hong Kong, Junk Bay (Tseung Kwan O)'
            } 
        },
		{
            name: 'Mira',
            speed: 1,
            armor: 3,
            difficulty: 3,
            roles: [
                'Anchor',
                'Intel Gatherer',
                'Secure'
            ],
            primary: [
                'Vector .45 ACP',
                'ITA12L'
            ],
            secondary: [
                'USP40',
                'ITA12S'
            ],
            gadget: [
                'Proximity Alarm',
                'Nitro Cell'
            ],
            unique: 'Black Mirror',
            bio: {
                name: 'Elena María Álvarez',
                birth: 'Nov 18th',
                age: 39,
                origin: 'Madrid, Spain'
            } 
        },
		{
            name: 'Echo',
            speed: 1,
            armor: 3,
            difficulty: 3,
            roles: [
                'Anchor',
                'Crowd Control',
                'Intel Gatherer',
                'Secure'
            ],
            primary: [
                'MP5SD',
                'Supernova'
            ],
            secondary: [
                'P229 RC',
                'Bearing 9'
            ],
            gadget: [
                'Impact Grenade',
                'Deployable Shield'
            ],
            unique: 'Yokai',
            bio: {
                name: 'Masaru Enatsu',
                birth: 'Oct 31st',
                age: 36,
                origin: 'Tokyo, Japan (Suginami-ku)'
            } 
        },
		{
            name: 'Caveira',
            speed: 3,
            armor: 1,
            difficulty: 3,
            roles: [
                'Intel Denier',
                'Intel Gatherer',
                'Roam'
            ],
            primary: [
                'M12',
                'SPAS-15'
            ],
            secondary: [
                'Luison'
            ],
            gadget: [
                'Proximity Alarm',
                'Impact Grenade'
            ],
            unique: 'Silent Step',
            bio: {
                name: 'Taina Pereira',
                birth: 'Oct 15th',
                age: 27,
                origin: 'Rinópolis, Brazil'
            } 
        },
		{
            name: 'Valkyrie',
            speed: 2,
            armor: 2,
            difficulty: 2,
            roles: [
                'Intel Gatherer',
                'Roam'
            ],
            primary: [
                'MPX',
                'SPAS-12'
            ],
            secondary: [
                'D-50'
            ],
            gadget: [
                'Nitro Cell',
                'Impact Grenade'
            ],
            unique: 'Black Eye',
            bio: {
                name: 'Meghan J. Castellano',
                birth: 'Jul 21st',
                age: 31,
                origin: 'Oceanside, California'
            } 
        },
		{
            name: 'Frost',
            speed: 2,
            armor: 2,
            difficulty: 1,
            roles: [
                'Crowd Control',
                'Trap'
            ],
            primary: [
                'Super 90',
                '9mm C1'
            ],
            secondary: [
                'Mk1 9mm',
                'ITA12S'
            ],
            gadget: [
                'Bulletproof Camera',
                'Deployable Shield'
            ],
            unique: 'Welcome Mat',
            bio: {
                name: 'Tina Lin Tsang',
                birth: 'May 4th',
                age: 32,
                origin: 'Vancouver, British Columbia'
            } 
        },
		{
            name: 'Mute',
            speed: 2,
            armor: 2,
            difficulty: 1,
            roles: [
                'Intel Denier',
                'Secure',
                'Anti Hard Breach'
            ],
            primary: [
                'MP5K',
                'M590A1'
            ],
            secondary: [
                'P226 Mk 25',
                'SMG-11'
            ],
            gadget: [
                'Nitro Cell',
                'Bulletproof Camera'
            ],
            unique: 'Signal Disruptor',
            bio: {
                name: 'Mark R. Chandar',
                birth: 'Oct 11th',
                age: 25,
                origin: 'York, England'
            } 
        },
		{
            name: 'Smoke',
            speed: 2,
            armor: 2,
            difficulty: 2,
            roles: [
                'Anchor',
                'Secure',
                'Area Denial'
            ],
            primary: [
                'FMG-9',
                'M590A1'
            ],
            secondary: [
                'P226 Mk 25',
                'SMG-11'
            ],
            gadget: [
                'Deployable Shield',
                'Barbed Wire'
            ],
            unique: 'Remote Gas Grenade',
            bio: {
                name: 'James Porter',
                birth: 'May 14th',
                age: 36,
                origin: 'London, England (King\'s Cross)'
            } 
        },
		{
            name: 'Castle',
            speed: 2,
            armor: 2,
            difficulty: 2,
            roles: [
                'Anchor',
                'Secure'
            ],
            primary: [
                'UMP45',
                'M1014'
            ],
            secondary: [
                '5.7 USG',
                'Super Shorty'
            ],
            gadget: [
                'Proximity Alarm',
                'Impact Grenade'
            ],
            unique: 'Armor Panel',
            bio: {
                name: 'Miles Campbell',
                birth: 'Sep 20th',
                age: 36,
                origin: 'Sherman Oaks, California'
            } 
        },
		{
            name: 'Pulse',
            speed: 3,
            armor: 1,
            difficulty: 3,
            roles: [
                'Intel Gatherer',
                'Roam'
            ],
            primary: [
                'UMP45',
                'M1014'
            ],
            secondary: [
                '5.7 USG',
                'M45 Meusoc'
            ],
            gadget: [
                'Barbed Wire',
                'Nitro Cell'
            ],
            unique: 'Heartbeat Sensor',
            bio: {
                name: 'Jack Estrada',
                birth: 'Oct 11th',
                age: 32,
                origin: 'Goldsboro, North Carolina'
            } 
        },
		{
            name: 'Doc',
            speed: 1,
            armor: 3,
            difficulty: 1,
            roles: [
                'Anchor',
                'Buff'
            ],
            primary: [
                'MP5',
                'P90',
                'SG-CQB'
            ],
            secondary: [
                'P9',
                'LFP586'
            ],
            gadget: [
                'Barbed Wire',
                'Bulletproof Camera'
            ],
            unique: 'Stim Pistol',
            bio: {
                name: 'Gustave Kateb',
                birth: 'Sep 16th',
                age: 39,
                origin: 'Paris, France'
            } 
        },
		{
            name: 'Rook',
            speed: 1,
            armor: 3,
            difficulty: 1,
            roles: [
                'Anchor',
                'Buff'
            ],
            primary: [
                'MP5',
                'P90',
                'SG-CQB'
            ],
            secondary: [
                'P9',
                'LFP586'
            ],
            gadget: [
                'Proximity Alarm',
                'Impact Grenade'
            ],
            unique: 'Armor Pack',
            bio: {
                name: 'Julien Nizan',
                birth: 'Jan 6th',
                age: 27,
                origin: 'Tours, France'
            } 
        },
		{
            name: 'Jager',
            speed: 2,
            armor: 2,
            difficulty: 2,
            roles: [
                'Roam',
                'Secure'
            ],
            primary: [
                'M870',
                '416-C Carbine'
            ],
            secondary: [
                'P12'
            ],
            gadget: [
                'Barbed Wire',
                'Bulletproof Camera'
            ],
            unique: 'Active Defense System',
            bio: {
                name: 'Marius Streicher',
                birth: 'Mar 9th',
                age: 39,
                origin: 'Düsseldorf, Germany'
            } 
        },
		{
            name: 'Bandit',
            speed: 3,
            armor: 1,
            difficulty: 1,
            roles: [
                'Anti Hard Breach',
                'Roam',
                'Secure'
            ],
            primary: [
                'MP7',
                'M870'
            ],
            secondary: [
                'P12'
            ],
            gadget: [
                'Barbed Wire',
                'Nitro Cell'
            ],
            unique: 'Shock Wire',
            bio: {
                name: 'Dominic Brunsmeier',
                birth: 'Aug 13th',
                age: 42,
                origin: 'Berlin, Germany'
            } 
        },
		{
            name: 'Tachanka',
            speed: 1,
            armor: 3,
            difficulty: 1,
            roles: [
                'Anchor',
                'Covering Fire',
                'Shield'
            ],
            primary: [
                'DP27',
                '9X19VSN'
            ],
            secondary: [
                'PMM',
                'GSH-18'
            ],
            gadget: [
                'Barbed Wire',
                'Proximity Alarm'
            ],
            unique: 'Shumikha Launcher',
            bio: {
                name: 'Alexsandr Senaviev',
                birth: 'Nov 3rd',
                age: 48,
                origin: 'Saint Petersburg, Russia'
            } 
        },
		{
            name: 'Kapkan',
            speed: 2,
            armor: 2,
            difficulty: 1,
            roles: [
                'Trap'
            ],
            primary: [
                '9X19VSN',
                'SASG-12'
            ],
            secondary: [
                'PMM',
                'GSH-18'
            ],
            gadget: [
                'Impact Grenade',
                'Nitro Cell'
            ],
            unique: 'Entry Denial Device',
            bio: {
                name: 'Maxim Basuda',
                birth: 'May 14th',
                age: 38,
                origin: 'Kovrov, Russia'
            } 
        },
        {
            name: 'Zero',
            speed: 2,
            armor: 2,
            difficulty: null,
            roles: [
                'Intel Denier',
                'Intel Gatherer'
            ],
            primary: [
                'SC3000K',
                'MP7'
            ],
            secondary: [
                '5.7 USG'
            ],
            gadget: [
                'Claymore',
                'Breaching Charge'
            ],
            unique: 'Argus Launcher',
            bio: {
                name: 'Samuel Leo Fisher',
                birth: 'Aug 8th',
                age: 63,
                origin: 'Baltimore, Maryland'
            } 
        },
		{
            name: 'Ace',
            speed: 2,
            armor: 2,
            difficulty: 1,
            roles: [
                'Front Line',
                'Hard Breach'
            ],
            primary: [
                'AK-12',
                'M1014'
            ],
            secondary: [
                'P9'
            ],
            gadget: [
                'Smoke Grenade',
                'Breaching Charge'
            ],
            unique: 'S.E.L.M.A Aqua Breacher',
            bio: {
                name: 'Håvard Haugland',
                birth: 'Mar 15th',
                age: 33,
                origin: 'Lærdalsøyri, Norway'
            } 
        },
		{
            name: 'Iana',
            speed: 2,
            armor: 2,
            difficulty: 1,
            roles: [
                'Intel Denier',
                'Intel Gatherer'
            ],
            primary: [
                'ARX200',
                'G36C'
            ],
            secondary: [
                'Mk1 9mm'
            ],
            gadget: [
                'Smoke Grenade',
                'Frag Grenade'
            ],
            unique: 'Gemini Replicator',
            bio: {
                name: 'Nienke Meijer',
                birth: 'Aug 27th',
                age: 35,
                origin: 'Katwijk, the Netherlands'
            } 
        },
		{
            name: 'Kali',
            speed: 2,
            armor: 2,
            difficulty: 2,
            roles: [
                'Back Line',
                'Covering Fire',
                'Disable'
            ],
            primary: [
                'CSRX 300'
            ],
            secondary: [
                'SPSMG9',
                'C75 Auto'
            ],
            gadget: [
                'Breaching Charge',
                'Claymore'
            ],
            unique: 'LV Explosive Lance',
            bio: {
                name: 'Jaimini Kalimohan Shah',
                birth: 'Aug 21st',
                age: 34,
                origin: 'Amreli, India'
            } 
        },
		{
            name: 'Amaru',
            speed: 2,
            armor: 2,
            difficulty: 2,
            roles: [
                'Flank',
                'Front Line'
            ],
            primary: [
                'G8A1',
                'Supernova'
            ],
            secondary: [
                'ITA12S',
                'SMG-11'
            ],
            gadget: [
                'Stun Grenade',
                'Hard Breaching Charge'
            ],
            unique: 'Garra Hook',
            bio: {
                name: 'Azucena Rocío Quispe',
                birth: 'May 6th',
                age: 48,
                origin: 'Cojata, Peru'
            } 
        },
		{
            name: 'Nokk',
            speed: 2,
            armor: 2,
            difficulty: 3,
            roles: [
                'Flank',
                'Intel Denier'
            ],
            primary: [
                'FMG-9',
                'SIX12 SD'
            ],
            secondary: [
                '5.7 USG',
                'D-50'
            ],
            gadget: [
                'Frag Grenade',
                'Hard Breaching Charge'
            ],
            unique: 'Hel Presence Reduction',
            bio: {
                name: '[REDACTED]',
                birth: '[REDACTED]',
                age: '[REDACTED]',
                origin: '[REDACTED]'
            } 
        },
		{
            name: 'Gridlock',
            speed: 1,
            armor: 3,
            difficulty: 1,
            roles: [
                'Anti Roam',
                'Area Denial',
                'Crowd Control'
            ],
            primary: [
                'F90',
                'M249 SAW'
            ],
            secondary: [
                'Super Shorty',
                'SDP 9mm'
            ],
            gadget: [
                'Smoke Grenade',
                'Breaching Charge'
            ],
            unique: 'Trax Stingers',
            bio: {
                name: 'Tori Tallyo Fairous',
                birth: 'Aug 5th',
                age: 36,
                origin: 'Longreach, Central Queensland, Australia'
            } 
        },
		{
            name: 'Nomad',
            speed: 2,
            armor: 2,
            difficulty: 3,
            roles: [
                'Anti Roam',
                'Crowd Control',
                'Trap'
            ],
            primary: [
                'AK-74M',
                'ARX200'
            ],
            secondary: [
                'PRB92',
                '.44 Mag Semi-Auto'
            ],
            gadget: [
                'Stun Grenade',
                'Breaching Charge'
            ],
            unique: 'Airjab Launcher',
            bio: {
                name: 'Sanaa El Maktoub',
                birth: 'Jul 27th',
                age: 39,
                origin: 'Marrakesh, Morocco'
            } 
        },
		{
            name: 'Maverick',
            speed: 3,
            armor: 1,
            difficulty: 2,
            roles: [
                'Flank',
                'Back Line',
                'Disable',
                'Hard Breach'
            ],
            primary: [
                'AR-15.50',
                'M4 GS'
            ],
            secondary: [
                '1911 Tacops'
            ],
            gadget: [
                'Frag Grenade',
                'Claymore'
            ],
            unique: 'Breaching Torch',
            bio: {
                name: 'Erik Thorn',
                birth: 'Apr 20th',
                age: 36,
                origin: 'Boston, Massachusetts'
            } 
        },
		{
            name: 'Lion',
            speed: 2,
            armor: 2,
            difficulty: 1,
            roles: [
                'Anti Roam',
                'Back Line',
                'Crowd Control',
                'Intel Gatherer'
            ],
            primary: [
                'V308',
                '417',
                'SG-CQB'
            ],
            secondary: [
                'P9',
                'LFP586'
            ],
            gadget: [
                'Stun Grenade',
                'Claymore'
            ],
            unique: 'EE-ONE-D',
            bio: {
                name: 'Olivier Flament',
                birth: 'Aug 29th',
                age: 31,
                origin: 'Toulouse, France'
            } 
        },
        {
            name: 'Finka',
            speed: 2,
            armor: 2,
            difficulty: 1,
            roles: [
                'Buff',
                'Back Line'
            ],
            primary: [
                'Spear .308',
                '6P41',
                'SASG-12'
            ],
            secondary: [
                'PMM',
                'GSH-18'
            ],
            gadget: [
                'Frag Grenade',
                'Hard Breaching Charge'
            ],
            unique: 'Adrenal Surge',
            bio: {
                name: 'Lera Melnikova',
                birth: 'Jun 7th',
                age: 27,
                origin: 'Gomel, Belarus'
            } 
        },
        {
            name: 'Dokkaebi',
            speed: 2,
            armor: 2,
            difficulty: 2,
            roles: [
                'Flank',
                'Anti Roam',
                'Intel Denier',
                'Intel Gatherer'
            ],
            primary: [
                'Mk 14 EBR',
                'BOSG.12.2'
            ],
            secondary: [
                'C75 Auto',
                'SMG-12'
            ],
            gadget: [
                'Smoke Grenade',
                'Frag Grenade'
            ],
            unique: 'Logic Bomb',
            bio: {
                name: 'Grace Nam',
                birth: 'Feb 2nd',
                age: 29,
                origin: 'Seoul, South Korea'
            } 
        },
        {
            name: 'Zofia',
            speed: 2,
            armor: 2,
            difficulty: 1,
            roles: [
                'Anti Roam',
                'Crowd Control',
                'Disable',
                'Flank',
                'Soft Breach'
            ],
            primary: [
                'LMG-E',
                'M762'
            ],
            secondary: [
                'RG15'
            ],
            gadget: [
                'Claymore',
                'Breaching Charge'
            ],
            unique: 'KS79 Lifeline',
            bio: {
                name: 'Zofia Bosak',
                birth: 'Jan 28th',
                age: 36,
                origin: 'Wrocław, Poland'
            } 
        },
        {
            name: 'Ying',
            speed: 2,
            armor: 2,
            difficulty: 2,
            roles: [
                'Front Line',
                'Crowd Control'
            ],
            primary: [
                'T-95 LSW',
                'SIX12'
            ],
            secondary: [
                'Q-929'
            ],
            gadget: [
                'Smoke Grenade',
                'Hard Breaching Charge'
            ],
            unique: 'Candela',
            bio: {
                name: 'Siu Mei Lin',
                birth: 'May 12th',
                age: 33,
                origin: 'Hong Kong, Central'
            } 
        },
        {
            name: 'Jackal',
            speed: 2,
            armor: 2,
            difficulty: 3,
            roles: [
                'Anti Roam',
                'Intel Gatherer'
            ],
            primary: [
                'C7E',
                'PDW9',
                'ITA12L'
            ],
            secondary: [
                'USP40',
                'ITA12S'
            ],
            gadget: [
                'Claymore',
                'Smoke Grenade'
            ],
            unique: 'Eyenox Model III',
            bio: {
                name: 'Ryad Ramírez Al-Hassar',
                birth: 'Feb 29th',
                age: 49,
                origin: 'Ceuta, Spain'
            } 
        },
        {
            name: 'Hibana',
            speed: 3,
            armor: 1,
            difficulty: 1,
            roles: [
                'Back Line',
                'Front Line',
                'Hard Breach'
            ],
            primary: [
                'Type-89',
                'Supernova'
            ],
            secondary: [
                'P229 RC',
                'Bearing 9'
            ],
            gadget: [
                'Breaching Charge',
                'Stun Grenade'
            ],
            unique: 'X-Kairos',
            bio: {
                name: 'Yumiko Imagawa',
                birth: 'Jul 12th',
                age: 34,
                origin: 'Nagoya, Japan'
            } 
        },
        {
            name: 'Capitao',
            speed: 3,
            armor: 1,
            difficulty: 2,
            roles: [
                'Area Denial',
                'Flank',
                'Front Line'
            ],
            primary: [
                'Para-308',
                'M249'
            ],
            secondary: [
                'PRB92'
            ],
            gadget: [
                'Claymore',
                'Hard Breaching Charge'
            ],
            unique: 'Tactical Crossbow',
            bio: {
                name: 'Vicente Souza',
                birth: 'Nov 17th',
                age: 49,
                origin: 'Rio de Janeiro, Brazil (Nova Iguacu)'
            } 
        },
        {
            name: 'Blackbeard',
            speed: 2,
            armor: 2,
            difficulty: 1,
            roles: [
                'Back Line',
                'Covering Fire',
                'Shield'
            ],
            primary: [
                'Mk17 CQB',
                'SR-25'
            ],
            secondary: [
                'D-50'
            ],
            gadget: [
                'Breaching Charge',
                'Stun Grenade'
            ],
            unique: 'Rifle Shield',
            bio: {
                name: 'Craig Jenson',
                birth: 'Mar 12th',
                age: 32,
                origin: 'Bellevue, Washington'
            } 
        },
        {
            name: 'Buck',
            speed: 2,
            armor: 2,
            difficulty: 1,
            roles: [
                'Flank',
                'Soft Breach'
            ],
            primary: [
                'C8-SFW',
                'CAMRS'
            ],
            secondary: [
                'Mk1 9mm'
            ],
            gadget: [
                'Claymore',
                'Stun Grenade'
            ],
            unique: 'Skeleton Key',
            bio: {
                name: 'Sebastien Côté',
                birth: 'Aug 20th',
                age: 36,
                origin: 'Montreal, QC'
            } 
        },
        {
            name: 'Sledge',
            speed: 2,
            armor: 2,
            difficulty: 1,
            roles: [
                'Flank',
                'Soft Breach'
            ],
            primary: [
                'L85A2',
                'M590A1'
            ],
            secondary: [
                'P226 Mk 25',
                'SMG-11'
            ],
            gadget: [
                'Frag Grenade',
                'Stun Grenade'
            ],
            unique: 'Tactical Breaching Hammer',
            bio: {
                name: 'Seamus Cowden',
                birth: 'Apr 2nd',
                age: 35,
                origin: 'John O\'Groats, Scotland'
            } 
        },
        {
            name: 'Thatcher',
            speed: 2,
            armor: 2,
            difficulty: 1,
            roles: [
                'Back Line',
                'Disable'
            ],
            primary: [
                'AR33',
                'L85A2',
                'M590A1'
            ],
            secondary: [
                'P226 Mk 25'
            ],
            gadget: [
                'Breaching Charge',
                'Claymore'
            ],
            unique: 'EMP Grenade',
            bio: {
                name: 'Mike Baker',
                birth: 'June 22nd',
                age: 56,
                origin: 'Bideford, England'
            } 
        },
        {
            name: 'Ash',
            speed: 3,
            armor: 1,
            difficulty: 2,
            roles: [
                'Flank',
                'Disable',
                'Front Line',
                'Soft Breach'
            ],
            primary: [
                'G36C',
                'R4-C'
            ],
            secondary: [
                '5.7 USG',
                'M45 Meusoc'
            ],
            gadget: [
                'Breaching Charge',
                'Claymore'
            ],
            unique: 'Breaching Rounds',
            bio: {
                name: 'Eliza Cohen',
                birth: 'Dec 24th',
                age: 33,
                origin: 'Jerusalem, Israel'
            } 
        },
        {
            name: 'Thermite',
            speed: 2,
            armor: 2,
            difficulty: 1,
            roles: [
                'Back Line',
                'Hard Breach'
            ],
            primary: [
                'M1014',
                '556XI'
            ],
            secondary: [
                '5.7 USG',
                'M45 Meusoc'
            ],
            gadget: [
                'Claymore',
                'Stun Grenade'
            ],
            unique: 'Exothermic Charge',
            bio: {
                name: 'Jordan Trace',
                birth: 'Mar 14th',
                age: 35,
                origin: 'Plano, Texas'
            } 
        },
        {
            name: 'Montagne',
            speed: 1,
            armor: 3,
            difficulty: 3,
            roles: [
                'Shield'
            ],
            primary: [
                'Extendable Shield'
            ],
            secondary: [
                'P9',
                'LFP586'
            ],
            gadget: [
                'Smoke Grenade',
                'Hard Breaching Charge'
            ],
            unique: 'Extendable Shield',
            bio: {
                name: 'Gilles Touré',
                birth: 'Oct 11th',
                age: 48,
                origin: 'Bordeaux, France'
            } 
        },
        {
            name: 'Twitch',
            speed: 2,
            armor: 2,
            difficulty: 2,
            roles: [
                'Back Line',
                'Disable',
                'Front Line',
                'Intel Gatherer'
            ],
            primary: [
                'F2',
                '417',
                'SG-CQB'
            ],
            secondary: [
                'P9',
                'LFP586'
            ],
            gadget: [
                'Stun Grenade',
                'Claymore'
            ],
            unique: 'Shock Drones',
            bio: {
                name: 'Emmanuelle Pichon',
                birth: 'Oct 12th',
                age: 28,
                origin: 'Nancy, France'
            } 
        },
        {
            name: 'Blitz',
            speed: 2,
            armor: 2,
            difficulty: 3,
            roles: [
                'Anti Roam',
                'Crowd Control',
                'Front Line',
                'Shield'
            ],
            primary: [
                'G52-Tactical Shield'
            ],
            secondary: [
                'P12'
            ],
            gadget: [
                'Smoke Grenade',
                'Breaching Charge'
            ],
            unique: 'Flash Shield',
            bio: {
                name: 'Elias Kötz',
                birth: 'Apr 2nd',
                age: 37,
                origin: 'Bremen, Germany'
            } 
        },
        {
            name: 'Iq',
            speed: 3,
            armor: 1,
            difficulty: 3,
            roles: [
                'Disable',
                'Flank',
                'Front Line',
                'Intel Gatherer'
            ],
            primary: [
                'AUG A2',
                '552 Commando',
                'G8A1'
            ],
            secondary: [
                'P12'
            ],
            gadget: [
                'Claymore',
                'Breaching Charge'
            ],
            unique: 'Electronics Detector',
            bio: {
                name: 'Monika Weiss',
                birth: 'Aug 1st',
                age: 38,
                origin: 'Leipzig, Germany'
            } 
        },
        {
            name: 'Fuze',
            speed: 1,
            armor: 3,
            difficulty: 1,
            roles: [
                'Area Denial',
                'Disable',
                'Flank'
            ],
            primary: [
                'AK-12',
                '6P41',
                'Ballistic Shield'
            ],
            secondary: [
                'PMM',
                'GSH-18'
            ],
            gadget: [
                'Hard Breaching Charge',
                'Breaching Charge'
            ],
            unique: 'Cluster Charge',
            bio: {
                name: 'Shuhrat Kessikbayev',
                birth: 'Oct 12th',
                age: 34,
                origin: 'Samarkand, Uzbekistan'
            } 
        },
        {
            name: 'Glaz',
            speed: 2,
            armor: 2,
            difficulty: 1,
            roles: [
                'Back Line',
                'Covering Fire',
                'Soft Breach'
            ],
            primary: [
                'OTS-03'
            ],
            secondary: [
                'PMM',
                'GSH-18'
            ],
            gadget: [
                'Smoke Grenade',
                'Frag Grenade'
            ],
            unique: 'Flip Sight',
            bio: {
                name: 'Timur Glazkov',
                birth: 'Jul 2nd',
                age: 30,
                origin: 'Vladivostok, Russia'
            } 
        }
];

module.exports = operatorList