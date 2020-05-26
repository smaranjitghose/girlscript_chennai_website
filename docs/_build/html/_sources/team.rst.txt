.. role:: python(code)
    :language: python

Team Page
**************

This page consists of the member which are working behind the project so that all the contributors can work on it smoothely.

.. image:: ./images/teampage/teamimage.PNG
  :width: 600
  :align: center
  :alt: Alternative text

If you want to make changes in this section, carry out the following changes in code:

- To make changes in the main heading - Go to `team.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/team.html>`__ and search :python:`teamHeading`, you will see <h1> tag where you can make changes.

* To make changes in the subheading - Go to `team.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/team.html>`__ and search :python:`team-description`, you will see <h4> tag where you can make changes.

- To make changes in the team heading -  Go to `team.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/team.html>`__ and search :python:`team-center-heading`, you will see <h1> tag where you can make changes.

.. image:: ./images/teampage/cardimage.png
  :width: 250
  :align: center
  :alt: Alternative text30

- To modify the images in the card - Go to `team.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/team.js>`__ and search :python:`const teamData`, you will see an array of object within which under :python:`image` you can add the image name with its extension.

* To modify the name in the card - Go to `team.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/team.js>`__ and search :python:`const teamData`, you will see an array of object within which under :python:`name` you can add the name of the team member.

- To modify the position in the card - Go to `team.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/team.js>`__ and search :python:`const teamData`, you will see an array of object within which under :python:`position` you can add the position of the team member.

* To make changes in the social links in the card - Go to `team.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/team.js>`__ and search :python:`const teamData`, you will see an array of object within which under :python:`profiles` you can change the links accordingly.

- To add an additional social link in the card - Go to `team.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/team.js>`__ and search :python:`const teamData`, you will see an array of object within which under :python:`profiles` you can add the name of that profile and their link to it accordingly.

* To add an additional team member -  Go to `team.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/team.js>`__ and search :python:`const teamData`, you will see an array of object within which you can create a new object and make the changes accordingly.


.. note::
   
   - There are four arrays named as teamdata with their categories i.e Board, Technical, Creatives and Management. So, make your changes according to the position of your team member.

   - Here, the team cards are inserted dynamically.


.. note::
   
   - In order to get different icons for your social media, you can prefer `this <https://fontawesome.com/v4.7.0/icons/>`__  where you can search and copy the html code of that icon to your code.