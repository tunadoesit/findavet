export const vets = [
  {slug:'paws-and-care-kypseli',name:'Paws & Care',area:'Kypseli',rating:4.9,reviews:128,price:'€25–35',metro:'Victoria · 8 min',parking:'Street parking',languages:['Greek','English'],tags:['Cat-friendly','Dental'],emoji:'🐕',tone:'peach',open:true},
  {slug:'athens-vet-centre',name:'Athens Vet Centre',area:'Pangrati',rating:4.8,reviews:214,price:'From €30',metro:'Evangelismos · 11 min',parking:'Private parking',languages:['Greek','English','French'],tags:['Emergency','Surgery'],emoji:'🐈',tone:'mint',open:true},
  {slug:'urban-pets-clinic',name:'Urban Pets Clinic',area:'Koukaki',rating:4.7,reviews:96,price:'€25–40',metro:'Syngrou-Fix · 4 min',parking:'Limited street parking',languages:['Greek','English'],tags:['Exotic pets','Dental'],emoji:'🦜',tone:'lilac',open:false},
  {slug:'north-paws',name:'North Paws',area:'Chalandri',rating:4.9,reviews:172,price:'From €35',metro:'Chalandri · 7 min',parking:'Free parking',languages:['Greek','English','German'],tags:['Imaging','Wheelchair accessible'],emoji:'🐾',tone:'blue',open:true},
  {slug:'seaside-vet',name:'Seaside Vet',area:'Palaio Faliro',rating:4.8,reviews:143,price:'€30–45',metro:'Trokadero tram · 5 min',parking:'Street parking',languages:['Greek','English'],tags:['Emergency','Cat-friendly'],emoji:'🐶',tone:'sand',open:true},
  {slug:'little-creatures',name:'Little Creatures',area:'Neos Kosmos',rating:4.9,reviews:81,price:'From €25',metro:'Neos Kosmos · 3 min',parking:'Paid parking nearby',languages:['Greek','English'],tags:['Rabbits','Exotic pets'],emoji:'🐇',tone:'rose',open:false},
];

export function getVet(slug){return vets.find(v=>v.slug===slug)}
