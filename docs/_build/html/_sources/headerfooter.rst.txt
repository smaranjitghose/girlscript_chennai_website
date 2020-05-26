  .. role:: python(code)
    :language: python

Header and Footer Section
***************************
This section contains the navbar and header of the GirlScript website.

Header
=========

This section contains the navbar that has the links to other sections of the website.

There are 2 sections within the navbar :-

Navbar (Laptop View)
~~~~~~~~~~~~~~~~~~~~~~

.. image:: ./images/headerfooter/headerlaptop.JPG
  :width: 600
  :align: center
  :alt: Alternative text

If you want to make changes in this section, carry out the following changes in code:

- To change the logo :  Go to file `app.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/app.js>`__ and search :python:`navbar-brand`, you will see  <img> tag where in src you can set the path of the new image.

* To modify the navbar items : Go to file `app.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/app.js>`__ and search :python:`nav-link`, you will see <span> tag where you can make changes.

- To change the link of navbar items : Go to file `app.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/app.js>`__ and search :python:`nav-link`, you will see <a> tag where in href you can make changes.

* To append an additional navbar item : Go to file `app.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/app.js>`__ and search :python:`nav-item`, where you can copy the <li> tag and make the changes accordingly.

Full Screen Navigation (Responsive View) 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: ./images/headerfooter/headerfullnav.JPG
  :width: 600
  :align: center
  :alt: Alternative text

If you want to make changes in this section, carry out the following changes in code:

- To change the svg image :  Go to file `app.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/app.js>`__ and search :python:`svg-img`, you will see  <svg> tag where you can modify it.

* To modify the navbar items : Go to file `app.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/app.js>`__ and search :python:`navigation-content`, you will see <a> tag where you can make changes.

- To change the link of navbar items : Go to file `app.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/app.js>`__ and search :python:`navigation-content`, you will see <a> tag where in href you can make changes.

* To append an additional navbar item : Go to file `app.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/app.js>`__ and search :python:`navigation-content`, where you can copy the <a> tag and make the changes accordingly.


.. note::

   - You can refer `this <https://fontawesome.com/v4.7.0/icons/>`__  where you can get different icons according to your requirement and you can copy the html code of that icon and add it into your code and do the further designing.

   
Footer
=========

The bottom section of a webpage is called as a footer. This area typically contains the name of the company or organization that publishes the website, along with relevant copyright information and some links to their profiles.

.. image:: ./images/headerfooter/footer.PNG
  :width: 600
  :align: center
  :alt: Alternative text

If you want to make changes in this section, carry out the following changes in code:

- To make changes in the heading present in the right section : Go to `app.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/app.js>`__ and search :python:`footer-h` and :python:`footer-p`, you will see <h3> and <p> tag where you can make changes accordingly.

* To change the logo image : Go to file  `app.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/app.js>`__  and search :python:`footer-logo` in the dats-src change the link to a different image. You can add new image in the :python:`../assets/Images/logo/image_name` and then add the link to it.

- To change the last line of the footer : Go to file  `app.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/app.js>`__  and search :python:`footer-h3`,  you will see <h3> tag where you can make changes.

* To change the link of the profiles : Go to file  `app.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/app.js>`__  and search :python:`social-media`, you will see <a> tag where in href you can add the link.

- To add any other profiles : Go to file  `app.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/app.js>`__  and search :python:`social-media`, you will see <a> tag where you can add the html code of the image and the link to the profiles.

* To add or change the wave animation : Go to file  `app.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/app.js>`__  and search :python:`waves`, you will see <div> tag where you can add the svg of the animation.

.. note::
   
   * **There is a button on the right of the footer which redirects to the top of the page.**

   - **To change the theme of the website, you can toggle the button which is present in the right side of the navbar.**