const announcementTimeline = [
	{
		eventName: 'Girlscript Contributors Week',
		eventDescription: `It is a meetup where everyone who are a part of Girlscript will gather and share their
							experience.`,
		eventDate: 'June 20, 2020',
		eventPageLink: './event1.html'
	},
	{
		eventName: 'Code Camp',
		eventDescription: `It is a coding camp where everyone can participate and learn about different technologies.`,
		eventDate: 'May 20, 2020',
		eventPageLink: './event1.html'
	},
	{
		eventName: 'Code Camp',
		eventDescription: `It is a coding camp where everyone can participate and learn about different technologies.`,
		eventDate: 'May 20, 2020',
		eventPageLink: './event1.html'
	}
];

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

const generateTimelineCard = (timelineDetail, position) => {
	const { eventName, eventDescription, eventDate, eventPageLink } = timelineDetail;

	const dateType = position === 'right' ? 'time-2' : 'time-1';

	const timeline = `<div class="timeline-container ${position}">
						<div class="timeline-content">
							<h3>${eventName}</h3>
							<hr class="mw-100 line1" />
							<p class="description">
								${eventDescription}
							</p>
							<div class="time ${dateType}">
								<h5>${eventDate}</h5>
							</div>
							<div class="card-stats">
								<a href="${eventPageLink}" class="btn card-btn card1-text" target="__blank">Read More</a>
							</div>
						</div>
					</div>`;

	const timelineSection = document.getElementById('timeline');
	timelineSection.innerHTML += timeline;
};

const generateEventsCard = (eventDetail, fixClassIndex) => {
	const { coverImage, eventName, eventModal, altName, eventDescription, referencePage } = eventDetail;
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
							<a href="${referencePage}" class="btn card-btn card1-text card-btn2"  data-toggle="modal" data-target="#${eventModal}"> Read More</a>
						</div>
					</div>`;

	const recentEventsSection = document.getElementById('eventCards');
	recentEventsSection.innerHTML += eventCard;
};
const generateEventsModal = (eventDetail) => {
	const { coverImage, eventName, altName, eventModal, eventDescription, referencePage } = eventDetail;
	
	const EventModal = `<div class="modal fade" id="${eventModal}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   							<div class="modal-dialog" role="document">
    							<div class="modal-content">
     	 							<div class="modal-header">
        								<h5 class="modal-title" id="exampleModalLabel">${eventName}</h5>
        								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
          									<span aria-hidden="true">&times;</span>
        								</button>
      								</div>
      								<div class="modal-body">
									  <p class="pt-1 event-body">
									  ${eventDescription}
								  </p>  
									</div>
      								<div class="modal-footer">
        								<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        								<button type="button" class="btn btn-primary">Send message</button>
      								</div>
    							</div>
  							</div>
						</div>`;

	const recentEventsSection = document.getElementById('eventModals');
	recentEventsSection.innerHTML += EventModal;
};

const insertAnnouncementTimeline = () => {
	// position of events on timeline will be judged automatically
	announcementTimeline.forEach((details, index) => {
		const position = index % 2 === 0 ? 'left' : 'right';
		generateTimelineCard(details, position);
	});
};
const insertEventCards = () => {
	recentEventsDetails.forEach((detail, index) => {
		generateEventsCard(detail, index + 1);
	});
};

const insertEventModals = () => {
	recentEventsDetails.forEach((detail) => {
		generateEventsModal(detail);
	});
};

insertAnnouncementTimeline();
insertEventCards();
insertEventModals();
