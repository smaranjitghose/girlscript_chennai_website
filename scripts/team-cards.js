'use strict';

const favClassesDataSet = {
  linkedIn: 'fa fa-linkedin',
  twitter: 'fa fa-twitter',
  github: 'fa fa-github',
  facebook: 'fa fa-facebook'
};

const mapProfileLinksToFavClasses = profileName => {
	return favClassesDataSet[profileName];
};

const teamDetails = [
	{
		name: 'Smaranjit Ghose',
		position: 'The Board',
		image: 'smaranjit_ghose.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/smaranjitghose/',
				github: 'https://github.com/smaranjitghose',
				twitter: '#!'
			}
		]
	},

	{
		name: 'Anush Bhatia',
		position: 'The Board',
		image: 'anush_bhatia.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/anush-bhatia-aa500a158/',
				github: 'https://github.com/anushbhatia',
				twitter: '#!'
			}
		]
	},

	{
		name: 'Saswat Nayak',
		position: 'The Board',
		image: 'saswat_nayak.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/saswat-nayak-a41212166/',
				github: 'https://github.com/swat1998',
				twitter: '#!'
			}
		]
	},

	{
		name: 'Ousnik Polley',
		position: 'The Board',
		image: 'ousnik_polley.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/ousnikpolley/',
				github: 'https://github.com/ousnik'
			}
		]
	},

	{
		name: 'Suhrid Datta',
		position: 'Technical Team',
		image: 'suhrid_datta.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/suhrid-datta-834863157/',
				github: 'https://github.com/suhriddatta'
			}
		]
	},

	{
		name: 'Bidisha Mukherjee',
		position: 'Technical Team',
		image: 'bidisha_mukherjea.jpg',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!'
			}
		]
	},

	{
		name: 'Ambarish Dattar',
		position: 'Technical Team',
		image: 'ambarish_datar.jpg',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!'
			}
		]
	},

	{
		name: 'Apoorva Gupta',
		position: 'Technical Team',
		image: 'apoorva_gupta.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/apoorvagupta30/',
				github: '#!'
			}
		]
	},

	{
		name: 'Rishabh Verma',
		position: 'Technical Team',
		image: 'Rishabh_Verma.jpg',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!'
			}
		]
	},
	{
		name: 'Arnab Dutta Purkayastha',
		position: 'Creatives Team',
		image: 'arnab_dutta.jpg',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!'
			}
		]
	},

	{
		name: 'Suryanshi Kaushik',
		position: 'Creatives Team',
		image: 'suryanshi_kaushik.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/suryanshi-kaushik-206433182/',
				github: '#!'
			}
		]
	},

	{
		name: 'Ritik Rajput',
		position: 'Creatives Team',
		image: 'ritik_rajput.jpg',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!'
			}
		]
	},
	{
		name: 'Ram Maheshwari',
		position: 'Management Team',
		image: 'ram_maheshwari.jpg',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!'
			}
		]
	},

	{
		name: 'Jasprit Kaur',
		position: 'Management Team',
		image: 'jasprit_kaur.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/kaurjasprit/',
				github: '#!'
			}
		]
	},

	{
		name: 'Sriyash',
		position: 'Management Team',
		image: 'sriyash.jpg',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!'
			}
		]
	},

	{
		name: 'Rahul Sarvadevabhatla',
		position: 'Management Team',
		image: 'rahul_sarvadevabhatla.jpg',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/sarvadevabhatla-rahul-9419981a2/',
				github: '#!'
			}
		]
	}
];

const generateProfileLinks = profileObject => {
	let result = [];
	for (let profile in profileObject) {
		const classtoAdd = mapProfileLinksToFavClasses(profile);
		const listItem = `
              <a href="${profileObject[profile]}" target="__blank">
                <i class="${classtoAdd}"></i>
              </a>`;
		result.push(listItem);
	}
	return result.join(' ');
};

const mapPositionToHtmlId = position => {
	const mappingSet = {
		The_Board: 'board',
		Technical_Team: 'technical',
		Creatives_Team: 'creatives',
		Management_Team: 'management'
	};

	return mappingSet[position];
};

// Generates HTML for each team members from array
const generateCards = cardDetail => {
	const { name, position, image, profiles } = cardDetail;

	const getProfilesLinksDynamic = generateProfileLinks(profiles[0]);

	const teamCard = `
  <card data-image="./assets/Images/team/${image}">
    <h1 slot="header">${name}</h1>
    <p slot="content">
        ${getProfilesLinksDynamic}
        <br><br>
        <span>${position}</span>
    </p>
  </card>`;

	const mappingID = position.replace(' ', '_');

	const injectingPoint = document.getElementById(mapPositionToHtmlId(mappingID));
	injectingPoint.innerHTML += teamCard;
};

const injectCardsToPage = () => {
	teamDetails.forEach(teamMember => {
		generateCards(teamMember);
	});
};

injectCardsToPage();
