  .. role:: python(code)
    :language: python

Home Page
===================

This is the landing page of our website which includes the introduction, goals, achievement etc.
The home page is divided into various sections which are as follows :

1. **Carousel**: A carousel is a set of rotating banners, or a slideshow, that displays on the homepage of your store. It allows you to display up to five slides consisting of images and text, which can be linked to specific products or pages. The image will change every few seconds. We have added the background image to the moving slides, and the display text above it is "WELCOME TO GIRLSCRIPT CHENNAI".

.. image:: ./images/homepage/carousel.JPG
  :width: 600
  :align: center
  :alt: Alternative text

If you want to make changes in this section, carry out the following changes in code:

* To change the background image - Go to file  `style.css <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/css/style.css>`__  and search :python:`.slide1` in the url change the link to a different image. You can add new image in the :python:`../assets/Images/carousel/image_name` and then add this link in the url. Similarly you can search for :python:`.slide2` and modfify it. 

- To change the carousel content - Go to file `index.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/index.html>`__ and search :python:`carousel-content`, you will see <h1> and <h2> tag where you can modify your content accordingly. 

* To change the color of the carousel content - Go to file  `style.css <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/css/style.css>`__  and search :python:`.main-head` or :python:`.sub-head` where you will see the color field and you can change it there.
   

2. **About**: About section describes about the Girlscript Foundation and their goals.

.. image:: ./images/homepage/aboutus.png
  :width: 600
  :align: center
  :alt: Alternative text

If you want to make changes in this section, carry out the following changes in code:

* To change the content - Go to file `index.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/index.html>`__ and search :python:`about-para` where you can change it. |

- To change the color of the heading and that of inner content part - Go to file `style.css <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/css/style.css>`__ and search :python:`.heading` where you can modify it. Similarly you can search :python:`.about-para`, you will see <p> tag where you can modify your content accordingly.

* To add or modify the points in the Goals section - Go to file `index.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/index.html>`__ and search :python:`Goals`, you will see <li> tag (which is used for those black dots) within which you can change it's content accordingly.

- To change the image - Go to file `index.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/index.html>`__ and search :python:`.img-logo`, you will see the <img> tag and in src you can change the image.

* To change the box-shadow of the card - Go to file `style.css <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/css/style.css>`__ and search :python:`.myDiv` where you can change the box-shadow by giving appropriate size and color to it.



3. **Parallax**: Parallax scrolling is when the website layout sees the background of the web page moving at a slower rate to the foreground, creating a 3D effect as you scroll. Used sparingly it can provide a nice, subtle element of depth that results in a distinctive and memorable website.

.. image:: ./images/homepage/parallax.JPG
  :width: 600
  :align: center
  :alt: Alternative text

-  For changing the image - Go to file `style.css <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/css/style.css>`__  and search :python:`.parallax1` and change the url. 

.. note::
   There are three Parallax in the home page.


4. **Our Initiatives**:  This section describes about the different initiatives taken by your GirlScript Chapter.

.. image:: ./images/homepage/initiatives.png
  :width: 600
  :align: center
  :alt: Alternative text

If you want to make changes in this section, carry out the following changes in code:

- To make changes in the content of the heading - Go to file `index.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/index.html>`__ and search :python:`INITIATIVES`, you will see <h2> tag where you can make changes.

* To make changes in the heading and icon present on the cards - Go to file `index.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/index.html>`__ and search :python:`flip-card-head`, you will see <h5> tag where you can make changes and to change the icon search :python:`flip-card-img` and replace the svg version of the image there.

- To make changes in the card description - Go to file `index.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/index.html>`__ and search :python:`flip-card-detail`, you will see <p> tag where you can make changes.

* To change the designing of the card - Go to file `style.css <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/css/style.css>`__ and search :python:`.flip-card-front` and do the desired changes.

 
5. **Our Achievements**: This section describes the achievements taken by your GirlScript Chapter. It is a card which is divided into 3 parts.

.. image:: ./images/homepage/achievements.png
  :width: 600
  :align: center
  :alt: Alternative text

If you want to make changes in the left part, carry out the following changes in code:

- To make changes in the content - Go to file `index.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/index.html>`__ and search :python:`achieve-content`, and make changes in the <h3> tag.

* To make changes in the path of button - Go to file `index.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/index.html>`__ and search :python:`achieve-content` , you will see <a> tag where in href you can give the path of the file.

- To make changes in the CSS of the button -  Go to file `style.css <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/css/style.css>`__ and search :python:`.center-btn-settings` or :python:`.center-btn-settings2` and do the desired changes. 

If you want to make changes in the right part, carry out the following changes in code:

- To make changes in the number count - Go to file `index.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/index.html>`__ and search :python:`ci-number`, and make changes inside the div container and similarly for other number count also.

* To make changes in the heading and content - Go to file `index.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/index.html>`__ and search :python:`ci-text`, for heading <h4> tag and for content <p> tag and then do the desired changes accordingly.

- To make changes in the box shadow of the container - Go to file `style.css <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/css/style.css>`__ and search :python:`.myDiv` where you can change the box-shadow by giving appropriate size and color to it.

To modify the animation effect of the whole section - Go to file `index.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/index.html>`__ and search :python:`sparkley` or :python:`sparkle-canvas`, do your desired changes whether you want or not or any style.



6. **Various Trends**: This section covers various trends upon which contributions have been made.

.. image:: ./images/homepage/trends.png
  :width: 600
  :align: center
  :alt: Alternative text

If you want to make changes in this section, carry out the following changes in code:

- To make changes in the heading and the content - Go to file `index.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/index.html>`__ and search :python:`WE CREATE TRENDS` or :python:`join-us`, you will see <h2> tag or <h3> tag where changes can be done.

* To make changes in the card images - Go to file `index.html <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/index.html>`__ and search :python:`ih-item circle effect`, you will see <img> tag where you can change the path of the image according to your image. And accordingly you can change the other images also.

- To make changes in the box shadow of the images - Go to file `style.css <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/css/style.css>`__ and search :python:`.ih-item.circle.effect` where you can change the box-shadow by giving appropriate size and color to it.  

* To make changes in the CSS of the button -  Go to file `style.css <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/css/style.css>`__ and search :python:`.center-btn-settings` or :python:`.center-btn-settings2` and do the desired changes. 

.. note::
   - In visual code studio, To search for a word, press *ctrl + f* and for a file, press *ctrl + p* .

   - To change the color in style.css use `Color Picker <https://www.w3schools.com/colors/colors_picker.asp>`__ .

   - For futhur references check `here <https://www.w3schools.com/>`__ (best for beginners).

