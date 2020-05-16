'use strict';

const favClassesDataSet = {
	linkedIn: 'fa fa-linkedin',
	twitter: 'fa fa-twitter',
	github: 'fa fa-github',
	dribble: 'fa fa-dribble',
	facebook: 'fa fa-facebook'
};

const mapProfileLinksToFavClasses = profileName => {
	return favClassesDataSet[profileName];
};

const teamData = [
	{
		name: 'Smaranjit Ghose',
		position: 'The Board',
		linkedIn: 'https://www.linkedin.com/in/smaranjitghose/',
		github: 'https://github.com/smaranjitghose',
		image: 'smaranjit_ghose.jpg'
	},

	{
		name: 'Anush Bhatia',
		position: 'The Board',
		linkedIn: 'https://www.linkedin.com/in/anush-bhatia-aa500a158/',
		github: 'https://github.com/anushbhatia',
		image: 'anush_bhatia.jpg'
	},

	{
		name: 'Saswat Nayak',
		position: 'The Board',
		linkedIn: 'https://www.linkedin.com/in/saswat-nayak-a41212166/',
		github: 'https://github.com/swat1998',
		image: 'saswat_nayak.jpg'
	},

	{
		name: 'Ousnik Polley',
		position: 'The Board',
		linkedIn: 'https://www.linkedin.com/in/ousnikpolley/',
		github: 'https://github.com/ousnik',
		image: 'ousnik_polley.jpg'
	},

	{
		name: 'Sukkrit Sharma',
		position: 'The Board',
		linkedIn: 'https://www.linkedin.com/in/sukkritsharma/',
		github: 'https://github.com/sukkritsharmaofficial',
		image: 'sukkrit_sharma.jpg'
	},

	{
		name: 'Suhrid Datta',
		position: 'Technical Team',
		linkedIn: 'https://www.linkedin.com/in/suhrid-datta-834863157/',
		github: 'https://github.com/suhriddatta',
		image: 'suhrid_datta.jpg'
	},

	{
		name: 'Bidisha Mukherjee',
		position: 'Technical Team',
		linkedIn: ' ',
		github: ' ',
		image: 'bidisha_mukherjea.jpg'
	},

	{
		name: 'Ambarish Dattar',
		position: 'Technical Team',
		linkedIn: ' ',
		github: ' ',
		image: 'ambarish_datar.jpg'
	},

	{
		name: 'Apoorva Gupta',
		position: 'Technical Team',
		linkedIn: 'https://www.linkedin.com/in/apoorvagupta30/',
		github: ' ',
		image: 'apoorva_gupta.jpg'
	},

	{
		name: 'Rishabh Verma',
		position: 'Technical Team',
		linkedIn: '',
		github: ' ',
		image: 'Rishabh_Verma.jpg'
	},

	{
		name: 'Arnab Dutta Purkayastha',
		position: 'Creatives Team',
		linkedIn: '',
		github: ' ',
		image: 'arnab_dutta.jpg'
	},

	{
		name: 'Suryanshi Kaushik',
		position: 'Creatives Team',
		linkedIn: 'https://www.linkedin.com/in/suryanshi-kaushik-206433182/',
		github: ' ',
		image: 'suryanshi_kaushik.jpg'
	},

	{
		name: 'Ritik Rajput',
		position: 'Creatives Team',
		linkedIn: ' ',
		github: ' ',
		image: 'ritik_rajput.jpg'
	},

	{
		name: 'Ram Maheshwari',
		position: 'Management Team',
		linkedIn: '',
		github: ' ',
		image: 'ram_maheshwari.jpg'
	},

	{
		name: 'Jasprit Kaur',
		position: 'Publicity Team',
		linkedIn: 'https://www.linkedin.com/in/kaurjasprit/',
		github: ' ',
		image: 'jasprit_kaur.jpg'
	},

	{
		name: 'Sriyash',
		position: 'Management Team',
		linkedIn: ' ',
		github: ' ',
		image: 'sriyash.jpg'
	},

	{
		name: 'Rahul Sarvadevabhatla',
		position: 'Management Team',
		linkedIn: 'https://www.linkedin.com/in/sarvadevabhatla-rahul-9419981a2/',
		github: ' ',
		image: 'rahul_sarvadevabhatla.jpg'
	}
];

const generateCards = cardDetail => {
	const { name, position, linkedIn, github, image } = cardDetail;

	const teamCard = `<div class="cardwrapper">
					<div class="customcard">
						<div class="card-image">
							<img src="/assets/Images/team/${image}"
								alt="${name}" aria-label="${name}">
						</div>
						<div class="socials">
							<li><a href="${linkedIn}" target="__blank">
								<i class="fa fa-linkedin"></i></a>
							</li>
							<li><a href="${github}" target="__blank">
								<i class="fa fa-github"></i></a>
							</li>
						</div>
						<div class="details">
							<h2>${name}<br>
								<span class="job-title">${position}</span>
							</h2>
						</div>
				
					</div>
				</div>`
	
	let teamCardInjectionSpace = document.getElementById('inject-cards');
	teamCardInjectionSpace.innerHTML += teamCard;
};

const injectCardsToPage = () => {
	teamData.forEach(teamCard => {
		generateCards(teamCard);
	});
};

injectCardsToPage();
