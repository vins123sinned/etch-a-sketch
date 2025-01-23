# etch-a-sketch
A project using DOM manipulation to create a grid that simulates something between a sketchpad and etch-a-sketch. A project done according to The Odin Project.

This project mainly focuses on Document Object Model (DOM) manipulation which I have learned recently. The goal of this project is to create a number x number square grid with 16x16 being the default grid. The user can be prompted to choose any number that they want as long as it is under 100 (for performance reasons) and the square will be created using DOM methods alone. As for the styling, this project will utilize FlexBox instead of CSS Grid in order to gain some more practice and understanding of FlexBox and how the layout works.

When the grid is created, each individual square will have a mouseover event listener that when activated leaves a pixelated trail through the grid like what happens when you move the pen around when sketching or playing around with the etch-a-sketch.

By the end of the project, I will have become more comfortable with using the DOM methods and manipulation and also reinforce my knowledge of FlexBox as a powerful way to layout my page in CSS. This is also a great way to practice writing good commits and writing pseudocode which are great practices for efficiency and clean code. Doing the extra credits with git branches will also help me get familiar with branching and merging, two of the most common git commands that are used by coders and programmers today.

CreateGrid pseudoCode:
When function is called, take in number as a parameter
For each number
  Create a container for the squares in a row
  Create number amount of squares in a column
  Add mouseOver event listener which will invoke the squareHovered function
Append to grid container

squareHover pseudocode when mouseover on square:
Add square-colored class to square

