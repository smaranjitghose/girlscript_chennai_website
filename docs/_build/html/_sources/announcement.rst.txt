.. role:: python(code)
    :language: python

Announcement Page
*******************

This page consists of the announcements about upcoming events and recent events by your Girlscript Chapter.
It consists of 2 sections which are as follows:


Upcoming events
===================

This section consists of the upcoming events in a timeline format.

.. image:: ./images/announcementpage/upcomingevent.JPG
  :width: 600
  :align: center
  :alt: Alternative text

If you want to make changes in this section, carry out the following changes in code:

* To make changes in the heading of the section - Go to `announcements.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/announcements.html>`__ and search :python:`Upcoming`, you will see <h2> tag where you can make changes.

- To make changes in the heading of the event  - Go to `announcement.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/announcement.js>`__ and search :python:`const announcementTimeline`, you will see an array of object within which under :python:`eventName` you can make changes.

* To make changes in the content of the event - Go to `announcement.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/announcement.js>`__ and search :python:`const announcementTimeline`, you will see an array of object within which under :python:`eventDescription` you can make changes.

- To change the link page of the button - Go to `announcement.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/announcement.js>`__ and search :python:`const announcementTimeline`, you will see an array of object within which under :python:`eventPageLink` you can add the path of the desired page.

* To add the time of the event - Go to `announcement.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/announcement.js>`__ and search :python:`const announcementTimeline`, you will see an array of object within which under :python:`eventDate` you can make changes.

- To add an additional event - Go to `announcement.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/announcement.js>`__ and search :python:`const announcementTimeline`,  you will see an array of object within which you can create a new object and make the changes accordingly.


Recent event
===============

This section consists of the  recent events that are being conducted by your GirlScript Chapter.

.. image:: ./images/announcementpage/recentevent.PNG
  :width: 600
  :align: center
  :alt: Alternative text

If you want to make changes in this section, carry out the following changes in code:

*  To make changes in the heading - Go to `announcements.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/announcements.html>`__ and search :python:`Recent`, you will see <h2> tag where you can make changes.

- To make changes in the heading of the card - Go to `announcement.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/announcement.js>`__ and search :python:`const recentEventsDetails`, you will see an array of object within which under :python:`eventName` you can make changes.

* To modify the images in the card - Go to `announcement.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/announcement.js>`__ and search :python:`const recentEventsDetails`, you will see an array of object within which under :python:`coverImage` you can add the image name with its extension.

- To modify the content of the card -  Go to `announcement.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/announcement.js>`__ and search :python:`const recentEventsDetails`, you will see an array of object within which under :python:`eventDescription` you can make changes.

* To change the link page of the button - Go to `announcement.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/announcement.js>`__ and search :python:`const recentEventsDetails`, you will see an array of object within which under :python:`referencePage` you can add the path of the desired page.

- To add an additional event - Go to `announcement.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/announcement.js>`__ and search :python:`const recentEventsDetails`,  you will see an array of object within which you can create a new object and make the changes accordingly.


.. note::
   
      - To search images with better quality, you can refer `this <https://unsplash.com/>`__ .
