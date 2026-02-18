console.log('virgolette');

const containerRowEl = document.getElementById('con_row');


const personale = [
    {
        nome : 'Marco Bianchi',
        ruolo : 'Designer',
        foto : 'male1.png',
        mail: 'marcobianchi@team.com'
    },
    {
        nome : 'Laura Rossi',
        ruolo : 'Front-end developer',
        foto : 'female1.png',
        mail: 'laurarossi@team.com'
    },
    {
        nome : 'Giorio Verdi',
        ruolo : 'Back-end developer',
        foto : 'male2.png',
        mail: 'giorgioverdi@team.com'
    },
    {
        nome : 'Marta Rossi',
        ruolo : 'SEO specialist',
        foto : 'female2.png',
        mail: 'martarossi@team.com'
    },
    {
        nome : 'Roberto Lorem',
        ruolo : 'SEO specialist',
        foto : 'male3.png',
        mail:  'robertolorem@team.com'
    },
    {
        nome : 'Daniela Amet',
        ruolo : 'Analyst',
        foto : 'female3.png',
        mail: 'danielaamet@team.com'
    }
]

for (let index = 0; index < personale.length; index++) {
    const membro = personale[index];
    const {nome,ruolo,foto,mail}= membro;
    
const markup = `
<div class="col-lg-6 col-xxl-4">
<div class="card mb-3 bg-dark style="max-width: 540px;"">
  <div class="row g-0">
    <div class="col-3">
      <img src="img/${foto}" class="img-fluid">
    </div>
    <div class="col-9">
      <div class="card-body ps-4">
        <h5 class="card-title text-white"><strong>${nome}</strong></h5>
        <p class="card-text text-white">${ruolo}</p>
        <p class="card-text text-primary">${mail}</p>
      </div>
    </div>
  </div>
</div> 
</div>
`;
containerRowEl.innerHTML += markup    
    
}
