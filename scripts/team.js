const teamData = [
	{
		name: 'Smaranjit Ghose',
		position: 'The Board',
		linkedIn: 'https://www.linkedin.com/in/smaranjitghose/',
		github: 'https://github.com/smaranjitghose',
		cssClass: 'board',
		image: 'assets/Images/team/smaranjit_ghose.jpg'
	},

	{
		name: 'Anush Bhatia',
		position: 'The Board',
		linkedIn: 'https://www.linkedin.com/in/anush-bhatia-aa500a158/',
		github: 'https://github.com/anushbhatia',
		cssClass: 'board',
		image: 'assets/Images/team/anush_bhatia.jpg'
	},

	{
		name: 'Saswat Nayak',
		position: 'The Board',
		linkedIn: 'https://www.linkedin.com/in/saswat-nayak-a41212166/',
		github: 'https://github.com/swat1998',
		cssClass: 'board',
		image: 'assets/Images/team/saswat_nayak.jpg'
	},

	{
		name: 'Ousnik Polley',
		position: 'The Board',
		linkedIn: 'https://www.linkedin.com/in/ousnikpolley/',
		github: 'https://github.com/ousnik',
		cssClass: 'board',
		image: 'assets/Images/team/ousnik_polley.jpg'
	},

	{
		name: 'Sukkrit Sharma',
		position: 'The Board',
		linkedIn: 'https://www.linkedin.com/in/sukkritsharma/',
		github: 'https://github.com/sukkritsharmaofficial',
		cssClass: 'board',
		image: 'assets/Images/team/sukkrit_sharma.jpg'
	},

	{
		name: 'Suhrid Datta',
		position: 'Technical Team',
		linkedIn: 'https://www.linkedin.com/in/suhrid-datta-834863157/',
		github: 'https://github.com/suhriddatta',
		cssClass: 'tech',
		image: 'assets/Images/team/suhrid_datta.jpg'
	},

	{
		name: 'Bidisha Mukherjee',
		position: 'Technical Team',
		linkedIn: ' ',
		github: ' ',
		cssClass: 'tech',
		image: 'assets/Images/team/bidisha_mukherjea.jpg'
	},

	{
		name: 'Ambarish Dattar',
		position: 'Technical Team',
		linkedIn: ' ',
		github: ' ',
		cssClass: 'tech',
		image: 'assets/Images/team/ambarish_datar.jpg'
	},

	{
		name: 'Apoorva Gupta',
		position: 'Technical Team',
		linkedIn: 'https://www.linkedin.com/in/apoorvagupta30/',
		github: ' ',
		cssClass: 'tech',
		image: 'assets/Images/team/apoorva_gupta.jpg'
	},

	{
		name: 'Rishabh Verma',
		position: 'Technical Team',
		linkedIn: '',
		github: ' ',
		cssClass: 'tech',
		image: 'assets/Images/team/Rishabh_Verma.jpg'
	},

	{
		name: 'Arnab Dutta Purkayastha',
		position: 'Creatives Team',
		linkedIn: '',
		github: ' ',
		cssClass: 'mang',
		image: 'assets/Images/team/arnab_dutta.jpg'
	},

	{
		name: 'Suryanshi Kaushik',
		position: 'Creatives Team',
		linkedIn: 'https://www.linkedin.com/in/suryanshi-kaushik-206433182/',
		github: ' ',
		cssClass: 'mang',
		image: 'assets/Images/team/suryanshi_kaushik.jpg'
	},

	{
		name: 'Ritik Rajput',
		position: 'Creatives Team',
		linkedIn: ' ',
		github: ' ',
		cssClass: 'mang',
		image: 'assets/Images/team/ritik_rajput.jpg'
	},

	{
		name: 'Ram Maheshwari',
		position: 'Management Team',
		linkedIn: '',
		github: ' ',
		cssClass: 'mang',
		image: 'assets/Images/team/ram_maheshwari.jpg'
	},

	{
		name: 'Jasprit Kaur',
		position: 'Publicity Team',
		linkedIn: 'https://www.linkedin.com/in/kaurjasprit/',
		github: ' ',
		cssClass: 'mang',
		image: 'assets/Images/team/jasprit_kaur.jpg'
	},

	{
		name: 'Sriyash',
		position: 'Management Team',
		linkedIn: ' ',
		github: ' ',
		cssClass: 'mang',
		image: 'assets/Images/team/sriyash.jpg'
	},

	{
		name: 'Rahul Sarvadevabhatla',
		position: 'Management Team',
		linkedIn: 'https://www.linkedin.com/in/sarvadevabhatla-rahul-9419981a2/',
		github: ' ',
		cssClass: 'mang',
		image: 'assets/Images/team/rahul_sarvadevabhatla.jpg'
	}
];

const generateCards = cardDetail => {
	const { name, position, linkedIn, github, image, cssClass } = cardDetail;
	const teamCard = `
		
		<div class="col-12 " style="width:600px; height: 400px;">
		<div class="our-team">
			<div class="picture">
				<img class="img-fluid" 
					class="lazy"
					src=${image}
					alt=${name}-${position}
					aria-label=${name}-${position}
				>
			</div>
			<div class="team-content">
				<h3 class="name">
					<div class="gs-fullname">${name}</div>
				</h3>
				<h4 class="title">
					<div class="gs-position">${position}</div>
				</h4>
			</div>
			<ul class="social">
				<li><a 
					href=${github} 
					class="fa fa-github" 
					aria-hidden="true" 
					target="_blank">
					</a></li>

				<li><a 
					href=${linkedIn} 
					class="fa fa-linkedin" 
					aria-hidden="true" 
					target="_blank">
					</a></li>
			</ul>
			</div>
		</div>
	`;
	// const teamCard = `
	// <div class="gs-team-member gs-team--${cssClass}" data-tilt >
    //   	<div class="gs-team-member-image">
	// 		<img
    //             class="lazy"
    //             src=${image}
    //             alt=${name}-${position}
    //             aria-label=${name}-${position}
    //         />
    //     </div>
    //     <div class="gs-team-member-info">
    //           <div class="gs-fullname">${name}</div>
    //           <div class="gs-position">${position}</div>
    //     </div>
    //     <div class="gs-team-member-social">
    //         <a href=${github} target="_blank">
    //             <i class="fab fa-github"></i>
    //         </a>
    //         <a
    //           href=${linkedIn}
    //           target="_blank"
    //         >
    //         <i class="fab fa-linkedin"></i>
    //         </a>
    //         </div>
	// 	</div>`;

	let teamCardInjectionSpace = document.getElementById('inject-cards');
	teamCardInjectionSpace.innerHTML += teamCard;
};

const injectCardsToPage = () => {
	teamData.forEach(teamCard => {
		generateCards(teamCard);
	});
};

injectCardsToPage();
