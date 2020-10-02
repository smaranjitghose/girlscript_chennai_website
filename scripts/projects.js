'use strict';

const basicCards = document.getElementById('basicCards');
const moreCards = document.getElementById('moreCards');

const projectDetails = [
	{
		coverImage: 'smile_please.jpg',
		projectName: 'SmilePlease',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `Wondering, if you could build the spell behind Apple's FaceID or perhaps even something better?But where, to start from..?Well, Python has your back for this as you craft your first script that detects a face to your attempt to reach the state-of-the-artzap
		`,
		githubLink: 'https://github.com/smaranjitghose/SmilePlease',
		alternateName: 'Smileplease Project'
	},
	{
		coverImage: 'chrome_profiler.jpg',
		projectName: 'Profile Chrome Extension',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `Tried of having all your favorite links cluttered and messed in yur bookmarks? Then we might a solution for you! Check out our simple chrome extension for keeping all your social media profiles under the same roof right by your side at all times!`,
		githubLink: 'https://github.com/smaranjitghose/profile_chrome_extension',
		alternateName: 'Profile extension'
	},
	{
		coverImage: 'Anonymizer.jpg',
		projectName: 'Face Anonymizer',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `A python project that uses facial recognition to anonymize your face.`,
		githubLink: 'https://github.com/smaranjitghose/incognitopy',
		alternateName: 'Face Anonymizer Project'
	}
];

const addditionalProjects = [
	{
		coverImage: 'invisibility.jpg',
		projectName: 'Cloak of Invisibility',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `Ever wondered how Harry Potter used to become invisible using the cloak of invisibility.Now its your turn to do the same cuz python's here to help you experience magic in real life..!`,
		githubLink: 'https://github.com/smaranjitghose/PyDeceive/',
		alternateName: 'Cloak of Invisibility Project'
	},
	{
		coverImage: 'doc2pen.jpg',
		projectName: 'Doc2Pen',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `A student's savior to submit those assignments by just typing them out and getting it hand written on the go!`,
		githubLink: 'https://github.com/smaranjitghose/doc2pen',
		alternateName: 'Doc2Pen'
	},
	{
		coverImage: 'sketch.jpg',
		projectName: 'sketchPy',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `The python friend of our's who takes your creativity to next level! Convert all your images to a sketch with the use of this simple spplication`,
		githubLink: 'https://github.com/smaranjitghose/sketchPy',
		alternateName: 'Doc2Pen'
	},
	{
		coverImage: 'pomodoro.jpg',
		projectName: 'PyPomodoro',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `The ancient technique to boost your productivity just took a form in Python! The Pomodoro application that boosts you work by 10x guaranteed!`,
		githubLink: 'https://github.com/smaranjitghose/PyPomodoro',
		alternateName: 'PyPomodoro'
	},
	{
		coverImage: 'portfolio.jpg',
		projectName: 'Awesome Portfolio Websites',
		projectAuthor: 'Smaranjit Ghose',
		projectDescription: `Showcase your skills with the rest of the world through our beautifully created portfolio websites.`,
		githubLink: 'https://github.com/smaranjitghose/PyPomodoro',
		alternateName: 'Awesome Portfolio Websites'
	}
];

const memberUpToCardsDetails = [
	{
		coverImage: './assets/Images/achievement/ach1.jpg',
		altName: 'forbes30_under_30',
		cardTitle: 'Forbes 30 under 30',
		description: `Congratulations to our founding director, Anubha Maneshwar for making it to
						Forbes under 30 list of class 2020. 300 Entrepreneurs made it to the list in 10
						categories.`,
		referencePage: 'https://www.forbes.com/profile/anubha-maneshwar/#125d5f1321a8'
	},
	{
		coverImage: './assets/Images/achievement/ach2.jpg',
		altName: 'education outreach',
		cardTitle: 'Education Outreach',
		description: `GirlScript Foundation are here with Education Outreach Scholarship under which
					first 1000 students will get Scholarship in 5 different courses.`,
		referencePage: 'https://www.girlscript.tech/events'
	},
	{
		coverImage: './assets/Images/achievement/ach3.jpg',
		altName: 'APAC 2020 Scholarship',
		cardTitle: 'APAC 2020 Scholarship',
		description: `Women Techmakers Scholars Program APAC 2020 Scholarship is an opportunity for
										all undergraduate women to get a great exposure in the field of Compsc. by
										encouraging women to excel.`,
		referencePage: 'https://www.womentechmakers.com/scholars'
	}
];

const countDownDetails = [
	{
		text: 'Events Conducted',
		countFrom: 50,
		iconClasses: 'afab fa fa-laptop fa-3x'
	},
	{
		text: 'Projects Undertaken',
		countFrom: 15,
		iconClasses: 'afab fa fa-trophy fa-3x'
	},
	{
		text: 'People Impacted',
		countFrom: 1500,
		iconClasses: 'afab fa fa-user fa-3x'
	}
];

const produceProjectCards = (cardDetails, mode = 'extra') => {
	const { coverImage, projectName, projectAuthor, projectDescription, githubLink, alternateName } = cardDetails;
	console.log(githubLink)
	const projectCard = `<div class="project-card" onclick="displayCard(this)">
						<div class="project-image-holder">
							<img
								class="project-image"
								src="/assets/Images/projects/${coverImage}"
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
									<a onclick="window.open('${githubLink}','_blank')" href=${githubLink} class="btn btn-github"
										>Link to GitHub Repository</a
									>
								</div>
							</div>
						</div>
					</div>`;
	if (mode === 'basic') {
		basicCards.innerHTML += projectCard;
	} else {
		moreCards.innerHTML += projectCard;
	}
};

const produceUpToCards = (cardDetail, cardNumberFix) => {
	const { coverImage, altName, cardTitle, description, referencePage } = cardDetail;
	const uptoCard = `<div class="col-xl-4 col-lg-6 col-md-6 card--${cardNumberFix}">
							<div class="card shadow p-3 mb-5 rounded card-${cardNumberFix}">
								<img
									src="${coverImage}"
									alt="${altName}"
									class="card-img-top"
									aria-label="${altName}"
								/>
								<div class="card-body">
									<h5 class="card-title rh${cardNumberFix}">${cardTitle}</h5>
									<p class="card-text ct${cardNumberFix}">
										${description}
									</p>
									<a href="${referencePage}" class="card-link rbt${cardNumberFix}"
										>Read full story

										<i class="fa fa-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>`;

	const UpToCardsParent = document.getElementById('upToCards');
	UpToCardsParent.innerHTML += uptoCard;
};

const produceCountDownComponent = counDownCard => {
	const { text, countFrom, iconClasses } = counDownCard;

	const countCard = `<div class="col-md-4 col-sm-4">
								<div class="stat-items">
									<i class="${iconClasses}"></i>
									<h2><span class="counter text-center">${countFrom}</span></h2>
									<p class="counter-text">${text}</p>
								</div>
					</div>`;

	const countDownSection = document.getElementById('countDown');
	countDownSection.innerHTML += countCard;
};

const injectProjectCards = () => {
	projectDetails.forEach(cardDetail => {
		produceProjectCards(cardDetail, 'basic');
	});
	addditionalProjects.forEach(cardDetail => {
		produceProjectCards(cardDetail);
	});
};

const injectUpToCards = () => {
	memberUpToCardsDetails.forEach((cardDetail, index) => {
		produceUpToCards(cardDetail, index + 1);
	});
};

const injectCountDownCards = () => {
	countDownDetails.forEach(cardDetail => {
		produceCountDownComponent(cardDetail);
	});
}

injectCountDownCards();
injectProjectCards();
injectUpToCards();
