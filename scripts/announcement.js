const recentEventsDetails = [
	{
		coverImage: 'assets/Images/announcement/producthunt.png',
		eventName: 'Product Hunt',
		altName: 'Product Hunt Logo',
		eventDescription: `We are feeling much happy to announce Product Hunt as out official In-Kind partner.
                                Thankyou for being with Girlscript and helping it make a success.`,
		referencePage: '#!'
	},
    {
        coverImage: 'assets/Images/announcement/contributors.png',
        eventName: 'Contributions',
        altName: 'Contributors Illustration',
        eventDescription: `We are extremely elated to see so many participants coming up with different skills and
								new ways of approaching solution and contribute to the project.`,
        referencePage: '#!'
    },
    {
        coverImage: 'assets/Images/announcement/DU-Express.png',
        eventName: 'DU Express',
        altName: 'DU Express Logo',
        eventDescription: `We would like to thank DU Express (@DuExpress) to be our Media Partner for GirlScript
								Summer Of Code 2020.`,
        referencePage: '#!'
    }
];


const generateEventsCard = (eventDetail,fixClassIndex) => {
    const { coverImage, eventName, altName, eventDescription, referencePage } = eventDetail;
    const eventCard = `<div class="card r-events-card">
						<div class="card-image">
							<img
								src="${coverImage}"
								alt="${altName}"
								aria-label="${altName}"
							/>
						</div>
						<div class="card-text">
							<h2 class="rh${fixClassIndex}">${eventName}</h2>
							<p class="pt-1 event-body">
								${eventDescription}
							</p>
						</div>
						<div class="card-stats">
							<a href="${referencePage}" class="btn card-btn card1-text card-btn2"> Read More</a>
						</div>
					</div>`;
    console.log(eventCard)
    const recentEventsSection = document.getElementById('eventCards');
    recentEventsSection.innerHTML += eventCard;
}

const insertEventCards = () => {
    recentEventsDetails.forEach((detail,index) => {
        generateEventsCard(detail,index+1);
    });
}

insertEventCards();