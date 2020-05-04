.. role:: python(code)
    :language: python

Announcement Page
==================

This page consists of the announcements about upcoming events and recent events by your Girlscript Chapter.
It consists of 2 sections which are as follows:

1. **Upcoming events**: This section consists of the upcoming events in a timeline format.

.. image:: ./images/announcementpage/upcomingevent.JPG
  :width: 600
  :align: center
  :alt: Alternative text

If you want to make changes in this section, carry out the following changes in code:

- To make changes in the heading - Go to `announcement.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/announcement.html>`__ and search :python:`recent`, you will see <h2> tag where you can make changes.

* To make changes in the styling of heading - Go to `announcement.css <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/css/announcement.css>`__ and search :python:`.recent` and do the desired changes.

- To make changes in the content of cards - Go to `announcement.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/announcement.html>`__ and search :python:`timeline-content`, you will see <h2> and <p> tags where you can make changes in the heading and the description respectively.

* To make changes in the styling of cards - Go to `announcement.css <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/css/announcement.css>`__ and search :python:`.timeline-content` and do the required changes.

- To make changes in the button - Go to `announcement.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/announcement.html>`__ and search :python:`card-stats`, you will see <a> tag where you can change the path in the href.

* To add an additional event - Go to `announcement.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/announcement.html>`__ and search :python:`timeline-container right` where you can copy the whole <div> and just replace the :python:`right` class with :python:`left` so that the added card is shown on the left hand side, then you can change it's heading and description of the event under <h3> and <p> pag respectively.

2. **Recent events**: