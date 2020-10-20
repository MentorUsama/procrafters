/* ======================= Required Classes ================================================*/
function w3AddClass(element, name) 
{
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
}  
function w3RemoveClass(element, name) 
{
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
}
/* ==========================Required Classes Ends =============================================*/ 





/* ========================== Filter Method Goes Here =================================================*/
filterSelection("all",'initial');

function filterSelection(classes,clickedID)
{
  var x, i;

  // Getting classes of all containers
  x = document.getElementsByClassName("us-gal-container");

  if (classes == "all") 
  {
    classes = "";
  }

  for (i = 0; i < x.length; i++) 
  {
    w3RemoveClass(x[i], "us-show");
    if (x[i].className.indexOf(classes) > -1) // if class found then add show in it
    {
        w3AddClass(x[i], "us-show");
    }
  }

  filterGalleryActive(clickedID);


}

function filterGalleryActive(clickedID)
{
    var i,btn_container,btn_container_elements,clicked;
    if(clickedID=="initial")
    {
        return;
    }

    // Getting classes of all the buttons
    btn_container =document.getElementById("us-gal-button-container");
    btn_container_elements=btn_container.getElementsByClassName("us-gal-link");
    clicked=document.getElementById(clickedID);

    for (i = 0; i < btn_container_elements.length ;i++) 
    {
        w3RemoveClass(btn_container_elements[i], "us-gal-link-active");
    }

    w3AddClass(clicked,"us-gal-link-active");
    
}
/* ========================== Filter Method Ends Here =================================================*/





    // Owl-carousel
    $('.owl-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      dots: true,
      responsive: {
          0: {
              items: 1
          },
          560: {
              items: 2
          }
      }
  });


      // sticky navigation menu

      let nav_offset_top = $('#us-navigation').height() + 50;
      function navbarFixed() {
          if ($('#us-navigation').length) 
          {
              $(window).scroll(function () 
              {
                  let scroll = $(window).scrollTop();
                  if (scroll >= nav_offset_top) {
                      $('#us-navigation .navbar').addClass('us-sticky');
                  } 
                  
                  else
                  {
                      $('#us-navigation .navbar').removeClass('us-sticky');
                  }
              })
          }
      }
      navbarFixed();



    //   Additional height us-additional