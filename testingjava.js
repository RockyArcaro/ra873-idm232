// function toggleSize(element) {
//     element.classList.toggle('clicked');
  
//     if (element.classList.contains('clicked')) {
//       element.style.transform = 'scale(1)';
//     } else {
//       element.style.transform = 'scale(1)';
//     }
//   }
  
function toggleDropdown() {
  var dropdown = document.getElementById("dropdown");
  dropdown.style.opacity = (dropdown.style.opacity === "1") ? "0" : "1";
  if (dropdown.style.opacity === "0") {
    setTimeout(function() {
      dropdown.style.display = "none";
    }, 6000); // Set display to none after the fade-out effect
  } else {
    dropdown.style.display = "block";
  }
}

  function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
  }
  function showDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.add("show");
  }
  
  function hideDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.remove("show");
  }



  function toggleSize(element) {
    element.classList.toggle('clicked');
  }


//////////////////////////////////////////////////////////
//Working Code


document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.getElementById('playButton');

playButton.addEventListener('mouseenter', function() {
  this.style.transform = 'translate(-50%, -50%) scale(1.1)';
});

playButton.addEventListener('mouseleave', function() {
  this.style.transform = 'translate(-50%, -50%) scale(1)';
});

playButton.addEventListener('mousedown', function() {
  this.style.transform = 'translate(-50%, -50%) scale(1)';
});

playButton.addEventListener('mouseup', function() {
  this.style.transform = 'translate(-50%, -50%) scale(1.1)';
});
});

  ///////////////////////////////////////////////////////////////
  //Heart Icon Change
  function toggleHeart(button) {
    var heartIcon = document.getElementById('heartIcon');
    if (heartIcon.src.includes('HeartIcon.png')) {
        heartIcon.src = 'Pictures/HeartIconFilled.png';
    } else {
        heartIcon.src = 'Pictures/HeartIcon.png';
    }

    // Your other functionality here...
    // For example, toggling the dropdown, etc.
    // toggleDropdown(); // Call your dropdown toggle function
}

//ThumbsUp Icon Change

function toggleThumbsUp(button) {
  var thumbsUpIcon = document.getElementById('thumbsUpIcon');
  if (thumbsUpIcon.src.includes('ThumbsUpIcon.png')) {
      thumbsUpIcon.src = 'Pictures/ThumbsUpIconFilled.png';
  } else {
      thumbsUpIcon.src = 'Pictures/ThumbsUpIcon.png';
  }

  // Your other functionality here...
  // For example, toggling the dropdown, etc.
  // toggleDropdown(); // Call your dropdown toggle function
}

// ThumbsDown Icon Change

function toggleThumbsDown(button) {
  var thumbsDownIcon = document.getElementById('thumbsDownIcon');
  if (thumbsDownIcon.src.includes('ThumbsDownIcon.png')) {
      thumbsDownIcon.src = 'Pictures/ThumbsDownIconFilled.png';
  } else {
      thumbsDownIcon.src = 'Pictures/ThumbsDownIcon.png';
  }

  // Your other functionality here...
  // For example, toggling the dropdown, etc.
  // toggleDropdown(); // Call your dropdown toggle function
}