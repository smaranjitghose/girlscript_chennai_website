"use strict";

const basicCards = document.getElementById('basicCards');
const moreCards = document.getElementById('moreCards');

const projectDetails = [
	{
		coverImage: 'https://static.toiimg.com/photo/msid-70093419,width-300,height-225.cms',
		projectName: 'SmilePlease',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `Wondering, if you could build the spell behind Apple's FaceID or perhaps even something better?But where, to start from..?Well, Python has your back for this as you craft your first script that detects a face to your attempt to reach the state-of-the-artzap
		`,
		githubLink: 'https://github.com/smaranjitghose/SmilePlease',
		alternateName: 'Smileplease'
	},
	{
		coverImage: 'https://cdn.eu.tz.nl/wp-content/uploads/2020/01/browser-extensies-1216x856.jpg',
		projectName: 'Profile Chrome Extension',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `A simple chrome extension for keeping all your social media profiles under the same roof `,
		githubLink: 'https://github.com/smaranjitghose/profile_chrome_extension',
		alternateName: 'Profile extension'
	},
	{
		coverImage: 'https://joeldavidsonyr1.files.wordpress.com/2012/11/new-picture-2.jpg',
		projectName: 'Face Anonymizer',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `A python project that uses facial recognition to anonymize your face.`,
		githubLink: 'https://github.com/smaranjitghose/incognitopy',
		alternateName: 'face blurr'
	}
];

const addditionalProjects = [
	{
		coverImage: 'https://secure.i.telegraph.co.uk/multimedia/archive/03448/133033_3448972b.jpg',
		projectName: 'Cloak of Invisibility',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `Ever wondered how Harry Potter used to become invisible using the cloak of invisibility.Now its your turn to do the same cuz python's here to help you experience magic in real life..!`,
		githubLink: 'https://github.com/smaranjitghose/PyDeceive/tree/master',
		alternateName: 'Field'
	}

];

const produceProjectCards = (cardDetails, mode = 'extra') => {
	const { coverImage, projectName, projectAuthor, projectDescription, githubLink, alternateName } = cardDetails;
	const projectCard = `<div class="project-card" onclick="displayCard(this)">
						<div class="project-image-holder">
							<img
								class="project-image"
								src=${coverImage}
								alt=${alternateName}
								aria-label=${alternateName}
								height="225" width="300"
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


const injectProjectCards = () => {
	projectDetails.forEach((cardDetail) => {
		produceProjectCards(cardDetail, 'basic')
	});
	addditionalProjects.forEach((cardDetail) => {
		produceProjectCards(cardDetail)
	});
}


injectProjectCards();

