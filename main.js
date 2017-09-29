/**
    Author: Brandon Lammey
    Date Last Updated: 24 September 2017
    File Name: main.js
    Description: Set of functions to complete 3 tasks
    1) Validate a password
    2) Scroll forward and back through 5 pictures
    4) Manipulate the CSS of a text box
*/


/**
*	Public method that takes no arguments returns a message.
*	Details: Compares two strings and checks that they're at least a length of 8.
*/
function validate()
{
    let pass1 = document.getElementById("first").value;
    let pass2 = document.getElementById("second").value;

    if(pass1.length < 8 || pass2.length < 8)
    {
        alert("Error: Please enter at least 8 characters.");
    }
    else if(pass1 != pass2)
    {
        alert("Error: Passwords do not match.");
    }
    else
    {
        alert("Passwords Match.");
        
        document.getElementById("first").value = "";
        document.getElementById("second").value = "";
    }
}

/**
*	Public method that takes no arguments returns a picture.
*	Details: Moves to the next image in a series of 5 pictures.
*/
function nextPic()
{
    let imgSource = document.getElementById("initialImage").src;//current image

    //determine next image
    for(let i=imgSource.length-1; i>0; i--)
    {

        if(document.getElementById("initialImage").src.charAt(i) == 1)
        {
            document.getElementById("initialImage").src = "ex2_img/img2.jpg";
            break;
        }
        else if(document.getElementById("initialImage").src.charAt(i) == 2)
        {
            document.getElementById("initialImage").src = "ex2_img/img3.jpg";
            break;
        }
        else if(document.getElementById("initialImage").src.charAt(i) == 3)
        {
            document.getElementById("initialImage").src = "ex2_img/img4.jpg";
            break;
        }
        else if(document.getElementById("initialImage").src.charAt(i) == 4)
        {
            document.getElementById("initialImage").src = "ex2_img/img5.jpg";
            break;
        }
        else if(document.getElementById("initialImage").src.charAt(i) == 5)
        {
            document.getElementById("initialImage").src = "ex2_img/img1.jpg";
            break;
        }
    }
}

/**
*	Public method that takes no arguments returns a picture.
*	Details: Moves to the previous image in a series of 5 pictures.
*/
function prevPic()
{
    let imgSource = document.getElementById("initialImage").src;//current image

    //determine previous image
    for(let i=imgSource.length-1; i>0; i--)
    {
        if(document.getElementById("initialImage").src.charAt(i) == 1)
        {
            document.getElementById("initialImage").src = "ex2_img/img5.jpg";
            break;
        }
        else if(document.getElementById("initialImage").src.charAt(i) == 2)
        {
            document.getElementById("initialImage").src = "ex2_img/img1.jpg";
            break;
        }
        else if(document.getElementById("initialImage").src.charAt(i) == 3)
        {
            document.getElementById("initialImage").src = "ex2_img/img2.jpg";
            break;
        }
        else if(document.getElementById("initialImage").src.charAt(i) == 4)
        {
            document.getElementById("initialImage").src = "ex2_img/img3.jpg";
            break;
        }
        else if(document.getElementById("initialImage").src.charAt(i) == 5)
        {
            document.getElementById("initialImage").src = "ex2_img/img4.jpg";
            break;
        }
    }
}

/**
*	Public method that takes no arguments cahnges CSS.
*	Details: Takes a user value for background color and border width and color and modifies CSS.
*/
function manipulateText()
{
    //retrieving values
    let borderValue = parseInt(document.getElementById("borderWidth").value);
    let redBorder = parseInt(document.getElementById("borderRed").value);
    let greenBorder = parseInt(document.getElementById("borderGreen").value);
    let blueBorder = parseInt(document.getElementById("borderBlue").value);

    let redBack = parseInt(document.getElementById("backgroundRed").value);
    let greenBack = parseInt(document.getElementById("backgroundGreen").value);
    let blueBack = parseInt(document.getElementById("backgroundBlue").value);

    let preview = document.getElementById("editText");

    //Checking user input
    if(isNaN(borderValue) || isNaN(redBorder) || isNaN(greenBorder) || isNaN(blueBorder))
    {
        alert("Error. Invalid values for the border. Please enter a number.");
    }
    else if(redBorder < 0 || redBorder > 255 || greenBorder < 0 || greenBorder > 255 || blueBorder < 0 || blueBorder > 255)
    {
        alert("Error. Number out of range. Please enter within 0-255.");
    }
    else if(isNaN(redBack) || isNaN(greenBack) || isNaN(blueBack))
    {
        alert("Error. Invalid values for the background. Please enter a number.");
    }
    else if(redBack < 0 || redBack > 255 || greenBack < 0 || greenBack > 255 || blueBack < 0 || blueBack > 255)
    {
        alert("Error. Number out of range. Please enter within 0-255.");
    }
    else
    {
        preview.style.borderWidth = borderValue + "px";
        preview.style.borderColor = "rgb(" + redBorder + "," + greenBorder + "," + blueBorder + ")";
        preview.style.backgroundColor = "rgb(" + redBack + "," + greenBack + "," + blueBack + ")";
    }
}
