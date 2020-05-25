.. role:: python(code)
    :language: python

Register Page
******************

This section consists of the registration form where the complete information of the candidate will be stored in the profile till the end of this program.

.. image:: ./images/registerpage/register1.JPG
  :width: 600
  :align: center
  :alt: Alternative text

If you want to make changes in this section, carry out the following changes in code:

- To make changes in the placeholder :  Go to `registratons.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/registrations.js>`__ and search :python:`var questions`, you will see an array of object where in question you can modify it.

* To add an additional input box :  Go to `registratons.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/registrations.js>`__ and search :python:`var questions`, you will see an array of object where you can add the question and modify it accordingly.

- To modify the validation of the input field : Go to `registratons.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/registrations.js>`__ and search :python:`var questions`, you will see an array of object where you in the pattern/type you can add the appropriate regex.

* To change the welcome text : Go to `registratons.js <https://github.com/smaranjitghose/girlscript_chennai_website/blob/master/scripts/registrations.js>`__ and search :python:`Welcome`, you will see <h1> child where you can make changes.

After all the information is entered it redirects to the Welcome Page!

.. image:: ./images/registerpage/register2.JPG
  :width: 600
  :align: center
  :alt: Alternative text

.. note::

   * To study about various input types in form refer `this <https://www.w3schools.com/html/html_form_input_types.asp>`__ .
   
   - You can refer `this <https://www.w3schools.com/tags/att_input_pattern.asp>`__ for adding the regex to the input field.



