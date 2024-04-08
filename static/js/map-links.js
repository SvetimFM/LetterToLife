// Apple Maps link
const appleMapLink = document.getElementById('appleMapLink');
const appleMapURL = `http://maps.apple.com/?q=Slide+Art+Gallery,+2307+1st+Ave,+WA+98121`;

appleMapLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.open(appleMapURL, '_blank');
});

// Google Maps link
const googleMapLink = document.getElementById('googleMapLink');
const googleMapURL = `https://www.google.com/maps/search/?api=1&query=Slide+Art+Gallery,+2307+1st+Ave,+WA+98121`;

googleMapLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.open(googleMapURL, '_blank');
});