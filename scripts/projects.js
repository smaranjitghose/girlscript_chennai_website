const basicCards = document.getElementById('basicCards');
const moreCards = document.getElementById('moreCards');

const projectDetails = [
	{
		coverImage: 'https://source.unsplash.com/300x225/?wave',
		projectName: 'DeepPixel',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `Create a Python package📦 for plug in and play😎 different image processing and deep
								learning tasks without having to know about its working and the scary math that follows 😱.`,
		githubLink: 'https://github.com/smaranjitghose/DeepPixel',
		alternateName: 'Wave'
	},
	{
		coverImage: 'https://source.unsplash.com/300x225/?beach',
		projectName: 'Notepy',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `Who doesn't the remember the legend👑 of notepad! Before there was VSCODE,Sublime,Atom
								or PyCharm, notepad was your defacto text editor⚡`,
		githubLink: 'https://github.com/smaranjitghose/smaransnotepy',
		alternateName: 'Beach'
	},
	{
		coverImage: 'https://source.unsplash.com/300x225/?mountain',
		projectName: 'AutoPromPicker',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `"Nah! That's just a fairytale scenario", if this is your thought about prom then maybe
								python 🐍can do some magic do ensure that we can pair all of our mates in a manner they
								never break up`,
		githubLink: 'https://https://github.com/smaranjitghose/AutoPromPicker',
		alternateName: 'Mountain'
	}
];

const addditionalProjects = [
	{
		coverImage: 'https://source.unsplash.com/300x225/?field',
		projectName: 'SmilePlease sketchPy',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `Your face 😍is an incredible thing that you possess. From granting you an unique
								identity to bringing out your charisma😎 to share with the world, the human face holds a
								lot of information.`,
		githubLink: 'https://github.com/smaranjitghose/SmilePlease',
		alternateName: 'Field'
	},
	{
		coverImage: 'https://source.unsplash.com/300x225/?water',
		projectName: 'sketchPy',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `Ever wondered where that artist in you 👨‍🎨 got lost in the turmoil of career pursuits 👨‍💼?
								Yes! That creative mind of yours 🧠🔥 which used draw potraits of anything you saw asap.
								Well, pass a smile 😊 because python🐍 has your back now with another magic spell!`,
		githubLink: 'https://github.com/smaranjitghose/sketchPy',
		alternateName: 'Water'
	},
	{
		coverImage: 'https://source.unsplash.com/300x225/?river',
		projectName: 'Floodater',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `The romantic atmosphere, chilling effect, those evening savouries and the very sound of
								rain itself is mesmerizing to most of us. While being proporous in many cases like
								farming the rains can cause havoc too if it happens continuously in excess`,
		githubLink: 'https://github.com/smaranjitghose/floodater',
		alternateName: 'River'
	}
];

const produceProjectCards = (cardDetails,mode='extra') => {
	const { coverImage, projectName, projectAuthor, projectDescription, githubLink, alternateName } = cardDetails;
	const projectCard = `<div class="project-card" onclick="displayCard(this)">
						<div class="project-image-holder">
							<img
								class="project-image"
								src=${coverImage}
								alt=${alternateName}
								aria-label=${alternateName}
							/>
						</div>
						<div class="project-title">
							<a href="#" class="toggle-info">
								<i class="fa fa-chevron-down"></i>
							</a>
							<h2 class="card-title">
								${projectName}
								<small>- ${projectAuthor}</small>
							</h2>
						</div>
						<div class="card-flap flap1">
							<div class="card-description">
								${projectDescription}
							</div>
							<div class="card-flap flap2">
								<div class="card-actions">
									<a href=${githubLink} class="btn btn-github"
										>Link to GitHub Repository</a
									>
								</div>
							</div>
						</div>
					</div>`;
	if (mode === 'basic') {
		basicCards.innerHTML += projectCard;

	}
	else {
		moreCards.innerHTML += projectCard;
	}
};


const injectProjectCards =  () => {
	projectDetails.forEach((cardDetail) => {
		produceProjectCards(cardDetail, 'basic')
	});
	addditionalProjects.forEach((cardDetail) => {
		produceProjectCards(cardDetail)
	});
}


injectProjectCards();

