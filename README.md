# intro-html-css-js
Introductory presentation project to learn some Html, CSS, and JavaScript


# Workshop Steps

This workshop is intended to compliment an in-person Nexul Academy mentor demo.

Each step of the workshop is contained in commits to this repository, so you can see the exact lines of code that changed. You can see all the commit steps or follow the links in each step.

[All commits](https://github.com/NexulAcademy/intro-html-css-js/commits/master)

## Step 1: Starter Html file

Web pages are defined with Html for content and CSS for style.  Start by creating a file with the 'html' extension. Then build the most basic of documents with a single
heading (use the 'h1' tag) and a paragraph element (use the 'p' tag).  Refer to the instructor demo.

Compare your answer to commit ['Step001'](https://github.com/NexulAcademy/intro-html-css-js/commit/e259740c3a094ed0b9569d1bba78a3ed3969d024).

## Step 2: Html 'Inline' style

Styles include colors, borders, shadows and much more. The most basic way to add styling to an HTML document is with 'inline' styles, using the 'style' attribute on the element to be styled.  Add a color of red to the paragraph, referring to the instructor demo.

Compare your answer to commit ['Step002'](https://github.com/NexulAcademy/intro-html-css-js/commit/950439915d46f5d12729f028a534d4670379dc46).

## Step 3: Style in Html 'head'

Style can quickly complicate an Html file if applied on many elements using the Style attribute. Move the style to the 'head' of the document using a 'style' element. The style is similar to the following:

    p {
      //your style here
    }
    otherElement {
      //some other style
    }

Compare your answer to commit ['Step003'](https://github.com/NexulAcademy/intro-html-css-js/commit/611fef14330130fdb4e5a8050d6514d43979f766).

## Step 4: Narrow style to element 'id' selector

Usually, styling all elements of a specific type in the same way is undesirable. The other extreme is styling a single element by referencing an 'id' attribute on the element.  Add an id attribute to the paragraph.

    <p id="special">
    
Now a #special selector is available for use in your css.  Update the selector and then compare your answer to commit ['Step004'](https://github.com/NexulAcademy/intro-html-css-js/commit/84306924f922464c0b7614862cbf387b8fb21957).

## Step 5: Narrow style to class selector

A balance is needed to target many instances of an element type, but not all of them.  A common way to do this is using the class selector.  First apply a class attribute value to the element (instead of an id).  Then use the class selector syntax to style the paragraph.

    .special {}
    
Compare your answer to commit ['Step005'](https://github.com/NexulAcademy/intro-html-css-js/commit/3facf52792bc12cdf203ba5f52bf4f739ea25708).

## Step 6: Narrow style to a specific hierarchy

Usually context matters, such as a paragraph in a sidenav area may be treated differently than a paragraph in the main content area of the page.  CSS rules can target specific element hierarchies for custom rules.

Place a paragraph inside of a div element and another leave as a direct child of the body.  A CSS rule targeting a hierarchy contains both parent and descendent selectors with a space between them.

    selector1 selector2 { }

To target only direct children of a parent element, use a greater than sign between the selectors.

    selector1 > directChildSelector { }

Use these rules to style only the paragraph inside of the div. Compare your answer to commit ['Step006'](https://github.com/NexulAcademy/intro-html-css-js/commit/d47f5544a0b3164cd0ee74fa4df88e50e5606932).

Using a combination of these selector types can conflict with one another. If multiple selectors change different attribute values, then all rules win and will be applied. When two styles affect the same attribute of an element, only one can win. 'Specificity' rules determine the winner. Refer to the Specificity diagram in the Resources section below for details.

## Step 7: Style moved to separate file

Adding numerous styles to an html document can lead to harder to maintain code and prevents sharing the same style code between html pages.  Style is preferably defined in separate CSS files and then referenced by the HTML file. Create a file with the '.css' extension in the same folder as the html file.

Import css into an html file using the style tag in the document header.

    <style rel="stylesheet" href="...">

Compare your answer to commit ['Step007'](https://github.com/NexulAcademy/intro-html-css-js/commit/d15cf4fe604dc721f6fbee3409a7dfcaacf22055).

## Step 8: Introducing the 'Bootstrap' style framework

You can leverage one of many CSS frameworks in your page by linking to them with a style tag.  Download the Bootstrap library from the references section below, place it into the same folder as the html file and import it similar to the last step.

Compare your answer to commit ['Step008'](https://github.com/NexulAcademy/intro-html-css-js/commit/1d37de61203880f65cd837b09e8a0bb410917115).

## Step 9: Creating a Bootstrap grid layout

Bootstrap is a CSS framework that includes a grid layout system and numerous widgets, with extensions by the development community. Refer to the Bootstrap grid system documentation to build a row of content containing two equally sized side-by-side sections (columns). You will need to place the header in a row above the content row.

Compare your answer to commit ['Step009'](https://github.com/NexulAcademy/intro-html-css-js/commit/01e8ec3be4de40343f0fb0d82cb42911e63d5c74).

## Step 10: Bootstrap 'card' widget

Bootstrap has many widgets, one of which is a card. Refer to the Bootstrap cards documentation in the Resources section below.

Replace the two equally sized side-by-side columns content with a card in each, with each card containing the paragraph that was already in each column.

Compare your answer to commit ['Step010'](https://github.com/NexulAcademy/intro-html-css-js/commit/f454b0321707574258f55350d049e8e716939dce).

## Step 11: Introducing JavaScript

JavaScript is the logic of the application. JavaScript can be added to the head of a document with the 'script' tag, or it can be referenced from an external file.  Let's begin with some code in the html document. 

The most simple JavaScript code to write shows an alert message on the screen.

    alert('Hello World!');

Compare your answer to commit ['Step011'](https://github.com/NexulAcademy/intro-html-css-js/commit/98121ba4f54f8a96fa50497621308faa14730bcd).

## Step 12: Grabbing elements from JavaScript

A common task in JavaScript is to grab an element and do something with it.  You can do this with the 'document.getElementById()' function.  Give a new element on the page html with id of 'dynamic', then using JavaScript grab it and write it the the debug console.

Compare your answer to commit ['Step012'](https://github.com/NexulAcademy/intro-html-css-js/commit/b887f1a9aa4ed3edff3627e5d7d98953db5a8041) and ['Step012b](https://github.com/NexulAcademy/intro-html-css-js/commit/e1613f781ad2fbb962872227f288c4cbcb5e8c5f).

## Step 13: Defering execution until Html is loaded

Compare your answer to commit ['Step013'](https://github.com/NexulAcademy/intro-html-css-js/commit/5763a16882e44eb76ecf109dec7d84473424188a).

## Step 14: JavaScript moved to separate file

Compare your answer to commit ['Step014'](https://github.com/NexulAcademy/intro-html-css-js/commit/d42b6e7b28d4e78880cdf407fe638436a7b7b528).

## Step 15: JavaScript simplified with jQuery

Compare your answer to commit ['Step015'](https://github.com/NexulAcademy/intro-html-css-js/commit/9e4fcfbbcc472ecdb33d74c1905d9ce64cd07d99).

## Step 16: Changing a card when selected (jQuery, CSS)

Refer to the jQuery documentation link in the Resources section below for help using  DOM navigation capabilities.

Compare your answer to commit ['Step016'](https://github.com/NexulAcademy/intro-html-css-js/commit/4410b9e29b0e775d7517bd148bc69469e6984b5f).

## Step 17: Using user Click events

Compare your answer to commit ['Step017'](https://github.com/NexulAcademy/intro-html-css-js/commit/12d8ef75e555d49179185d6e2ddd6398fd26af54).

# Resources
These resources will help while implementing steps in this walkthrough.

CSS Specificity rules illustration
http://www.standardista.com/wp-content/uploads/2012/01/specificity3.pdf

Bootstrap Cards documentation
https://getbootstrap.com/docs/4.0/components/card/

jQuery documentation : parents() function
https://api.jquery.com/parents/


## Presentation Survey
If you've watched the presentation live with an instructor, then 
please let us know what you think:

https://nexulacademy.typeform.com/to/ArpufM
