/*************************************
	DATA
**************************************/
// Create Object Literal that holds
//    thumb and lightbox information

var gallery = [
	{
		image: "01",
		title: "Hay Bales",
		description: "I love hay bales. Took this snap on a drive through the countryside past some straw &nbsp;ields.",
		type: "image",
		vsrc: ""
	},
	{
		image: "02",
		title: "Lake",
		description: "The lake was so calm today. We had a great view of the snow on the mountains from&nbsp;here.",
		type: "image",
		vsrc: ""
	},
	{
		image: "03",
		title: "Canyon",
		description: "I hiked to the top of the mountain and got this picture of the canyon and trees&nbsp;below.",
		type: "image",
		vsrc: ""
	},
	{
		image: "04",
		title: "Iceberg",
		description: "It was amazing to see an iceberg up close, it was so cold but didn’t snow&nbsp;today.",
		type: "image",
		vsrc: ""
	},
	{
		image: "05",
		title: "Desert",
		description: "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the&nbsp;canyons.",
		type: "image",
		vsrc: ""
	},
	{
		image: "06",
		title: "Fall",
		description: "Fall is coming, I love when the leaves on the trees start to change&nbsp;color.",
		type: "image",
		vsrc: ""
	},
	{
		image: "07",
		title: "Plantation",
		description: "I drove past this plantation yesterday, everything is so&nbsp;green!",
		type: "image",
		vsrc: ""
	},
	{
		image: "08",
		title: "Dunes",
		description: "My summer vacation to the Oregon Coast. I love the sandy&nbsp;dunes!",
		type: "image",
		vsrc: ""
	},
	{
		image: "09",
		title: "Countryside Lane",
		description: "We enjoyed a quiet stroll down this countryside&nbsp;lane.",
		type: "image",
		vsrc: ""
	},
	{
		image: "10",
		title: "Sunset",
		description: "Sunset at the coast! The sky turned a lovely shade of&nbsp;orange.",
		type: "image",
		vsrc: ""
	},
	{
		image: "11",
		title: "Cave",
		description: "I did a tour of a cave today and the view of the landscape below was&nbsp;breathtaking.",
		type: "image",
		vsrc: ""
	},
	{
		image: "12",
		title: "Bluebells",
		description: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came&nbsp;in.",
		type: "image",
		vsrc: ""
	},
	{
		image: "13",
		title: "Travel Love",
		description: "This is Travel Footage from eight countries.",
		type: "video",
		vsrc: "https://player.vimeo.com/video/71319358"
	},
	{
		image: "14",
		title: "Hyper Travel",
		description: "This film is a HDR hyperlapse postcard that will take you to a journey through Georgia.",
		type: "video",
		vsrc: "https://player.vimeo.com/video/72131557"
	},
	{
		image: "15",
		title: "Travel",
		description: "A mix of memories from past years adventures for my travelblog on ✈ flysleepy.com.",
		type: "video",
		vsrc: "https://player.vimeo.com/video/52742614"
	}
];


/*************************************
	INITIATE
**************************************/
buildThumbGallery();

/*************************************
	VARIABLES
**************************************/
var imageLink = document.getElementsByClassName("image-link");
var overlay = document.getElementById("overlay");
var wrapper = document.getElementById("wrapper");
var searchBox = document.getElementById("searchbox");
var reset = document.getElementById("reset");
var rightArrow = document.getElementById("arrow-right");
var leftArrow = document.getElementById("arrow-left");
var currentImage;
var dynamicGallery;

/*************************************
	VARIABLES: FUNCTION EXPRESSIONS
**************************************/

/*  Create Lightbox  */
var createLightBox = function(info) {

	// Append Overlay with image data

	//    Create img and paragraph
	var realImg = document.createElement("img");
	var realIFrame = document.createElement("iframe");
	var realText = document.createElement("p");

	if ( gallery[info].type === "image" ) {

		//    Create image src attribute & add value
		var imgAttr = document.createAttribute("src");
		imgAttr.value = 'images/photos/' + gallery[info].image + '.jpg';

		//    Create iframe src attribute & add blank
		var iframeAttr = document.createAttribute("src");
		iframeAttr.value = '';

	} else {
		
		//    Create src attribute & add value
		var imgAttr = document.createAttribute("src");
		imgAttr.value = '';

		//    Create iframe src attribute & add blank
		var iframeAttr = document.createAttribute("src");
		iframeAttr.value = gallery[info].vsrc;

	}
	//    Set src attribute into realImg and realIFrame
	realImg.setAttributeNode(imgAttr);
	realIFrame.setAttributeNode(iframeAttr);

	//    Add caption to Paragraph
	var caption = "<strong>" + gallery[info].title + "</strong>";
	caption+= ": " + gallery[info].description;

	realText.innerHTML = caption;

	//    Add id to realImg and realIFrame
	realImg.id = "real-img";
	realIFrame.id = "real-iframe";
	realText.id = "real-text";

	// Append realImg to Overlay as child
	overlay.appendChild(realImg);
	overlay.appendChild(realIFrame);
	overlay.appendChild(realText);

	// Display image or video
	if ( gallery[info].type === "image" ) {
		realImg.style.display = "block";
		realIFrame.style.display = "none";
	} else {
		realImg.style.display = "none";
		realIFrame.style.display = "block";
	}

	// Display arrows
	rightArrow.style.display = "block";
	leftArrow.style.display = "block";

	// Display overlay
	overlay.classList.add("show-overlay");
}; // ~end create Lightbox

/*  Hide Lightbox  */
var hideLightBox = function(){

	//Remove all nodes from overlay
	while (overlay.hasChildNodes()) {
    	overlay.removeChild(overlay.lastChild);
	}	

	// Hide overlay
	overlay.classList.remove("show-overlay");

	// Hide arrows
	rightArrow.style.display = "none";
	leftArrow.style.display = "none";

};// ~end Hide Lightbox

// On thumb hover show title and caption
var onThumbHover = function(e){
	e.preventDefault();
	this.getElementsByClassName("caption-info")[0].classList.add("show-info");
};// ~end on thumb hover, show title and caption

// On thumb hover remove title and caption
var onThumbUnHover = function(e){
	e.preventDefault();
	this.getElementsByClassName("caption-info")[0].classList.remove("show-info");
};// ~end on thumb hover, remove and title caption

// On thumb click prepare to open light box
var onThumbClick = function(e) {

	// prevent browser default
	e.preventDefault();

	// invoke data with info
	var data = this.getAttribute("data-index");
	var initHref = this.getAttribute("href");

	// create Lightbox
	createLightBox(data);


	// Find clicked thumb in new dynamicGallery
	//    and set new current Image
	for ( var position in dynamicGallery ) {
		if ( initHref.indexOf(dynamicGallery[position].image) !== -1 ) {
			currentImage = parseInt(position);
		}
	}

}; // ~end Open lightbox on thumb click

/*  Filter Gallery  */
var filterGallery = function(e) {

	// prevent natural browser behavior
	if ( typeof e !== "undefined") {
		e.preventDefault();
	}

	// assign search box value to variable
	var searchBoxValueMessage = searchBox.value;
	var searchBoxValue = searchBox.value.toUpperCase();

	// other variables
	var filteredGalleryIndex = [];
	var galleryDOM = document.getElementById("gallery").children;
	var response = document.getElementById("response");
	dynamicGallery = [];

	// Filter:
	// Create "for...in" loop for gallery object 
	for ( var info in gallery ) {

		// assign title and description to variable
		var galleryTitleandCaption = gallery[info].title + " " + gallery[info].description;
		galleryTitleandCaption = galleryTitleandCaption.toUpperCase();

		// filter
		if ( galleryTitleandCaption.indexOf(searchBoxValue) !== -1 ) {
			// Build Array 
			filteredGalleryIndex.push(info);
		} 
	}

	// Hide what I don't need

	// Transformed array into a searchable string
	filteredGalleryIndex = filteredGalleryIndex.join(" ");

	// Loop through gallery childeren, hiding what 
	//     I don't need and showing what I do

	// Count my active divs
	var liveCount = 0;
	var totalLiveCount = 0;
	var liveMarker = 0;

	for (var i = 0; i < galleryDOM.length; i++ ) {

		if ( filteredGalleryIndex.indexOf(i) === -1 ) { 
			totalLiveCount++;

			// Fade out filtered-out thumbs
			function fadeOut(el){

				el.style.opacity = 1;

				(function fade() {
					if ((el.style.opacity -= 0.2) < 0) {
						el.style.display = 'none';
					} else {
						window.requestAnimationFrame(fade);
					}
				})();
			}

			if (typeof galleryDOM[i] !== "undefined") {
				fadeOut(galleryDOM[i]);
			}
				galleryDOM[i].classList.remove("live");
				galleryDOM[i].classList.remove("zero-right");

		} else {
			// Call buildDynamicGallery
			buildDynamicGallery(i);

			// Fade in filtered-in thumbs
			function fadeIn(el, display) {
				el.style.opacity = 0;
				el.style.display = display || "inline-block";

				// Add one to liveCount
				liveCount++;
				totalLiveCount++;
				liveMarker = totalLiveCount;
				// Add classes to deal with unhidden divs

				el.classList.add("live");
				// Tempting. But, need to reset zero-right before query
				el.classList.remove("zero-right");

				// For every 4th live div margin-right should be zero
				if( liveCount === 4 ) {
					el.classList.add("zero-right");

					// reset liveCount
					liveCount = 0;
				}

				(function fade() {
					var val = parseFloat(el.style.opacity);
					if( !((val += 0.1) > 1) ) {
						el.style.opacity = val;
						requestAnimationFrame(fade);
					}
				})();
			}

			// Call fade-in
			if ( typeof galleryDOM[i] !== "undefined" ) {
				fadeIn(galleryDOM[i]);
			}
		}
	}
			
	// For the last live div, margin should be zero
	if ( typeof galleryDOM[liveMarker-1] !== "undefined") {
		galleryDOM[liveMarker-1].classList.add("zero-right");
		// Delete "No Results Message"
		response.style.display = "none";
		response.innerHTML = "";
	} else {
		// Add "No Results Message"
		response.style.display = "inline-block";
		response.innerHTML = "No Results for " + searchBoxValueMessage;
		
	}

};// ~end Filter Gallery

// Advance Image or Video
var AdvImage = function(direction) {

	// new current Image
	if ( direction < 0) {
		currentImage = dynamicGallery.length - 1;
	} else if (direction > dynamicGallery.length - 1) {
		currentImage = 0;
	} else {
		currentImage = direction;
	}
	
	// Select New Image or Video
	var realImg = document.getElementById("real-img");
	var realIFrame = document.getElementById("real-iframe");
	var realText = document.getElementById("real-text");

	// Show Text
	realText.innerHTML = "<strong>" + dynamicGallery[currentImage].title + "</strong>";
	realText.innerHTML += ": " + dynamicGallery[currentImage].description;

	if (  dynamicGallery[currentImage].type === "image" ) {
		// Show Image
		realImg.setAttribute("src", 'images/photos/' + dynamicGallery[currentImage].image + '.jpg');
		realImg.style.display = "block";

		// Hide iFrame
		realIFrame.setAttribute("src", dynamicGallery[currentImage].vsrc);
		realIFrame.style.display = "none";
		// 

	} else {
		// Show Iframe
		realIFrame.setAttribute("src", dynamicGallery[currentImage].vsrc);
		realIFrame.style.display = "block";
		//

		// Hide Image
		realImg.setAttribute("src", '');
		realImg.style.display = "none";
	}
};

// Fwd Advance Image on Arrow Click
var nextImg = function() {
	// Next Image
	var nextImage = currentImage + 1;

	// Call AdvImg
	AdvImage(nextImage);
};

// Back Advance Image on Arrow Click
var prevImg = function() {
	// Prev Image
	var prevImage = currentImage - 1;

	// Call AdvImg
	AdvImage(prevImage);
};

// Reset Search Box 
var resetSearch = function(e) {

	// Prevent browser's natural behavior
	e.preventDefault();

	// Set browsers's search value to empty
	searchBox.value = "";

	// Call filterGallery function
	filterGallery();

}; // ~end Reset Search Box
/*************************************
	FUNCTION DECLARATIONS
**************************************/
/*  Build Dynamic Gallery  */
function buildDynamicGallery(index) {
	dynamicGallery.push({
		image: gallery[index].image,
		title: gallery[index].title,
		description: gallery[index].description,
		type: gallery[index].type,
		vsrc: gallery[index].vsrc
	});
}
// Build Thumb Gallery
function buildThumbGallery(thumbIndex) { 
	dynamicGallery = [];

	// Add margin-zero class to 4th div
	var fourthDiv = 0;

	/*   Load data to DOM  */
	if ( typeof thumbIndex === "undefined" ) {
		thumbIndex = "";
	} else {
		thumbIndex = thumbIndex.join(" | ");
	}

	// Create var for DOM HTML
	var HTML = "";

	// target #gallery
	var galleryContainer = document.getElementById("gallery");

	// Loop through object and build HTML
	for ( var i=0 ; i < gallery.length; i++ ) {
		// Call buildDynamicGallery
		buildDynamicGallery(i);

		// Add one to fourthDiv
		fourthDiv++;
			if ( fourthDiv === 4 ){
				HTML += '<div class="col live zero-right">';
				// reset fourthDiv to zero
				fourthDiv = 0;
			} else {
				HTML += '<div class="col live">';
			}
		    HTML += '<a href="images/photos/'+ gallery[i].image +'.jpg"';
		    HTML += 'data-index="'+ i +'"';
		    HTML += 'class="image-link '+ gallery[i].type +'">';
		    HTML += '<img src="images/thumbs/'+ gallery[i].image +'.jpg"';
		    HTML += 'alt="'+ gallery[i].description +'"';
		    HTML += 'title="'+ gallery[i].title +'" class="image" />';
		    HTML += '<span class="caption-info">';
		    HTML += '<span class="caption-style">'+gallery[i].title+'</span>';
		    HTML += '<br />'+ gallery[i].description +'</span>';
		    HTML += '</a></div>';

	}

	galleryContainer.innerHTML = HTML;
    
} // ~end buildThumbGallery

/*************************************
	EVENT LISTENERS
**************************************/

// On thumb hover invoke on hover and on click
for( var i = 0; i < imageLink.length; i++ ) {

	// on hover
	imageLink[i].onmouseover = onThumbHover;
	imageLink[i].onmouseout = onThumbUnHover;

	// on click
	imageLink[i].onclick = onThumbClick;
}

// On Overlay Click invoke hideLightBox
overlay.onclick = hideLightBox;

// Overlay Navigation Click
rightArrow.onclick = nextImg;

leftArrow.onclick = prevImg;

// On Search box keydown filter images
searchBox.onkeyup = filterGallery;

// On Search box keydown filter images
reset.onclick = resetSearch;

/*************************************
	ACCESSIBILITY
**************************************/




















