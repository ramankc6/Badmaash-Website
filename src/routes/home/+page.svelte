
<script lang = 'js'>

// Imports
import "./homeStyles.css"
import { onMount } from "svelte"

//Declare Variables
let userWidth
let y = 0
let about
let menu
let gallery
let hours
let contact
let navContainer
let time = new Date();
$: day = time.getDay();
$: hour = time.getHours();
$: minutes = time.getMinutes();

let hoursTillOpen = 0
let minutesTillOpen = 0

let openStatus = 'Something is Wrong'
let inverse = 'Something is Wrong'
let statusColor = 'black'
let displayHours = 0
let displayMinutes = 0


//onMount Functions (Runs when page is loaded)
onMount(async () => {
    pageScroll()
    timeTillClose()
})

//Functions

//Figure Out The Time Till Close
function timeTillClose () {
    if (day == 0) {
        // Sunday
        if (hour >= 17 && hour < 22) {
            openStatus = 'OPEN'
            hoursTillOpen = (22 - hour) - 1
            minutesTillOpen = 60 - minutes
        } else if (hour >= 22) {
            openStatus = 'CLOSED'
            hoursTillOpen = 24 - hour + 11
            minutesTillOpen = minutes - 30
            if (minutesTillOpen < 0) {
                minutesTillOpen = 60 + minutesTillOpen
                hoursTillOpen = hoursTillOpen - 1
            }
            hoursTillOpen = hoursTillOpen + 24
        } else if (hour < 17) {
            openStatus = 'CLOSED'
            hoursTillOpen = 17 - hour - 1
            minutesTillOpen = 60 - minutes
            if (minutesTillOpen < 0) {
                minutesTillOpen = 60 + minutesTillOpen
                hoursTillOpen = hoursTillOpen - 1
            }
        }
    } else if (day == 1) {
        // Monday
        openStatus = 'CLOSED'
        hoursTillOpen = 24 - hour + 11
        minutesTillOpen = minutes - 30
        if (minutesTillOpen < 0) {
            minutesTillOpen = 60 + minutesTillOpen
            hoursTillOpen = hoursTillOpen - 1
        }
    } else if (day >= 2 && day <= 5) {
        // Tuesday - Friday
        if (hour >= 11 && hour < 15) {
            openStatus = 'OPEN';
            hoursTillOpen = (15 - hour) - 1;
            minutesTillOpen = 60 - minutes;
        } else if (hour >= 17 && hour < 22) {
            openStatus = 'OPEN';
            hoursTillOpen = (22 - hour) - 1;
            minutesTillOpen = 60 - minutes;
        } else if (hour >= 15 && hour < 17) {
            openStatus = 'CLOSED';
            hoursTillOpen = 17 - hour - 1;
            minutesTillOpen = 60 - minutes;
        } else if (hour < 11) {
            openStatus = 'CLOSED';
            hoursTillOpen = 11 - hour - 1;
            minutesTillOpen = 30 - minutes;
        } else {
            openStatus = 'CLOSED';
            hoursTillOpen = 24 - hour + 11;
            minutesTillOpen = 30 - minutes;
        }
    } else if (day == 6) {
        // Saturday
        if (hour >= 17 && hour < 22) {
            openStatus = 'OPEN';
            hoursTillOpen = (22 - hour) - 1;
            minutesTillOpen = 60 - minutes;
        } else {
            openStatus = 'CLOSED';
            hoursTillOpen = 17 - hour - 1;
            minutesTillOpen = 60 - minutes;
        }
    }
    if (minutesTillOpen < 0) {
        minutesTillOpen = 60 + minutesTillOpen;
        hoursTillOpen = hoursTillOpen - 1;
    }

    if (openStatus == 'OPEN') {
        inverse = 'close'
        statusColor = 'green'
    } else {
        inverse = 'open'
        statusColor = 'red'
    }
    displayHours = hoursTillOpen
    displayMinutes = minutesTillOpen
    setTimeout(timeTillClose, 0);
}

//Nav Bar
function navigator (buttonPressed) {
    if (buttonPressed == 'about') {
        requestAnimationFrame(() => {
            window.scrollTo({
            top: about.offsetTop,
            behavior: 'smooth'
        })})
    } else if (buttonPressed == 'menu') {
        requestAnimationFrame(() => {
            window.scrollTo({
            top: menu.offsetTop,
            behavior: 'smooth'
        })})
    } else if (buttonPressed == 'gallery') {
        requestAnimationFrame(() => {
            window.scrollTo({
            top: gallery.offsetTop,
            behavior: 'smooth'
        })})
    } else if (buttonPressed == 'hours') {
        requestAnimationFrame(() => {
            window.scrollTo({
            top: hours.offsetTop,
            behavior: 'smooth'
        })})
    } else if (buttonPressed == 'contact') {
        requestAnimationFrame(() => {
            window.scrollTo({
            top: contact.offsetTop,
            behavior: 'smooth'
        })})
    }
}

//Scrolling
function pageScroll() {
    if (y < about.offsetTop) {
        navContainer.style.backgroundColor = '#F97B22'
    } else if (y > about.offsetTop && y < menu.offsetTop) {
        navContainer.style.backgroundColor = '#F3DEBA'
    } else if (y > menu.offsetTop) {
        navContainer.style.backgroundColor = '#675D50'
    }
    setTimeout(pageScroll, 0);

}
</script>

<style>

</style>


<div class = 'homeDiv'>
    <!-- Nav Bar-->
    <div class = 'navContainer' bind:this = '{navContainer}'>
        <div class = 'navItem'>
            <a href = '/'><img src = 'logo.png' alt = 'Logo'></a>
        </div>
        <div class = 'navItem'>
            <a href="#" on:click={() => navigator('about')}>About</a>
        </div>
        <div class = 'navItem'>
            <a href="#" on:click={() => navigator('menu')}>Menu</a>
        </div>
        <div class = 'navItem'>
            <a href="#" on:click={() => navigator('gallery')}>Gallery</a>
        </div>
        <div class = 'navItem'>
            <a href="#" on:click={() => navigator('hours')}>Hours</a>
        </div>
        <div class = 'navItem'>
            <a href="#" on:click={() => navigator('contact')}>Contact</a>
        </div>
    </div>
    <!-- End Nav Bar-->

    <!--Home-->
    <div class = 'homeTextContainer'>
        <img src = '/landingLogo.png' alt = 'Landing Logo' class = 'landingLogo'>

        <div class = 'homeText'>
        <p id = 'homeText1'>A taste of India in the heart of LA</p>
        </div>
        <!-- <div class = 'homeText'>
        <p id = 'homeText2'>in the</p>
        </div>
        <div class = 'homeText'>
        <h1  id = 'homeText3'>heart of LA</h1>
        </div> -->
    </div>
</div>
<!--End Home-->

<!--About-->
<div class = 'aboutDiv' bind:this = '{about}'>
    <div class = 'heritageTitleDiv'>
        <h1 class = 'heritageTitle'>Our Heritage</h1>
    </div>
    <div class = 'heritageTextDiv'>
        <p class = 'heritageText'>At Badmaash, we are proud of our Indian heritage. We
            believe that Indian cuisine is one of the most diverse and
            delicious in the world, and we are committed to sharing that
            with our guests. Our menu features a wide variety of dishes from
            all over India, each with its own unique flavor profile.</p>
    </div>
    <div class = 'heritageImageDiv'>
        <img class = 'heritageImage' src = '/heritageImage.jpeg' alt = 'Heritage'>
    </div>
    <div class = 'ownersTitleDiv'>
        <h1 class = 'ownersTitleText'>A Culinary Journey Through Generations.</h1>
    </div>
    <div class = 'ownersImageContainer'>
        <div class = 'ownersImageDiv'>
            <img class = 'ownersImage' src = '/nakulMahendro.png' alt = 'Nakul Mahendro'>
            <p class = 'ownersName'>NAKUL MAHENDRO</p>
        </div>
        <div class = 'ownersImageDiv'>
            <img class = 'ownersImage' src = '/pawanMahendro.png' alt = 'Pawan Mahendro'>
            <p class = 'ownersName'>PAWAN MAHENDRO</p>
        </div>
        <div class = 'ownersImageDiv'>
            <img class = 'ownersImage' src = '/arjunMahendro.png' alt = 'Arjun Mahendro'>
            <p class = 'ownersName'>ARJUN MAHENDRO</p>
        </div>
    </div>
    <div class = 'quoteTextDiv'>
        <p class = 'quoteText'>“If Gandhi were our age today, he’d totally be
            a hipster. He’s like ‘peace, love, nonviolence,
            eat healthy, be good...’“</p>
    </div>
    <div class = 'quoteAuthorDiv'>
        <p class = 'quoteAuthorText'>- Nakul Mahendro</p>
    </div>
</div>

<!--End About-->

<!--Menu-->
<div class = 'menuDiv'  bind:this = '{menu}'>
    <div  class = 'menuTitleDiv'>
        <h1 class = 'menuTitle'>Menu</h1>
    </div>
    <div class = 'menuContainer'>
        <div class = 'swipeDiv'>
            <img class = 'swipeImage' src = '/leftArrow.png' alt = 'Swipe Left'>
        </div>
        <div class = 'menuContent'>
            <p class = 'menuTypeText'>INDIAN STREET FOOD</p>
            <p class = 'menuText'><b>Indian Pickles (gharwalla achaar)</b><br><span class = 'itemDisc'>seasonal veggies pickled in house with indian spices & aromatics</span><br><br>
            <b>Onion Fritters (onion bhajjia)</b><br><span class = 'itemDisc'>dredged in a spiced chickpea batter - fried golden brown - served with tamarind chutney</span><br><br>
            <b>Punjabi Fish-Fry (machhi amritsari)</b><br><span class = 'itemDisc'>flaky catfish fried crisp in chickpea batter spiced with carom seed, paprika & dried mango dust</span><br><br></p>
        </div>
        <div class = 'swipeDiv'>
            <img class = 'swipeImage' src = '/rightArrow.png' alt = 'Swipe Left'>
        </div>
    </div>
</div>

<!--End Menu-->

<!--Gallery-->

<div class = 'galleryDiv'  bind:this = '{gallery}'>
    <div class = 'galleryTitleDiv'>
        <h1 class = 'galleryTitle'>Gallery</h1>
    </div>
    <div class = 'galleryImagesContainer'>
        <div class = 'galleryImagesRight'>
            <div>
                <img class = 'galleryImage' src = '/galleryImage1.png' alt = 'Gallery 1'>
            </div>
            <div>
                <img class = 'galleryImage' src = '/galleryImage2.png' alt = 'Gallery 1'>
            </div>
            <div>
                <img class = 'galleryImage' src = '/galleryImage3.png' alt = 'Gallery 1'>
            </div>
            <div>
                <img class = 'galleryImage' src = '/galleryImage4.png' alt = 'Gallery 1'>
            </div>
        </div>
        <div class = 'galleryImagesLeft'>
            <div>
                <img class = 'galleryImage' src = '/galleryImage5.png' alt = 'Gallery 1'>
            </div>
            <div>
                <img class = 'galleryImage' src = '/galleryImage6.png' alt = 'Gallery 1'>
            </div>
            <div>
                <img class = 'galleryImage' src = '/galleryImage7.png' alt = 'Gallery 1'>
            </div>
        </div>
    </div>
</div>

<!--End Gallery-->

<!--Hours-->
<div class = 'hoursDiv'  bind:this = '{hours}'>
    <div class = 'hoursTitleDiv'>
        <h1 class = 'hoursTitle'>Hours</h1>
    </div>
    <div class = 'openDiv'>
        <p class = 'openText'>We are currently <span style = 'color: {statusColor}'>{openStatus}</span></p>
    </div>
    <div class = 'closingTimeDiv'>
        <p class = 'closingTimeText'>We {inverse} in {displayHours} hours and {displayMinutes} minutes</p>
    </div>
    <div class = 'hoursMainContainer'>
        <div class = 'listedHours'>
            <h3 class = 'hoursListTitle'>Hours</h3>
            <p class = 'hoursListItem'>MONDAY CLOSED</p>
            <p class = 'hoursListItem'>TUESDAY 11:30AM - 3PM • 5PM - 10PM</p>
            <p class = 'hoursListItem'>WEDNESDAY 11:30AM - 3PM • 5PM - 10PM</p>
            <p class = 'hoursListItem'>THURSDAY 11:30AM - 3PM • 5PM - 10PM</p>
            <p class = 'hoursListItem'>FRIDAY 11:30AM - 3PM • 5PM - 10PM</p>
            <p class = 'hoursListItem'>SATURDAY 5PM - 10PMSUNDAY 5PM - 10PM</p>
        </div>
        <div class = 'reservationDiv'>
            <a class = 'reservationButton' target="_blank" href = 'https://www.opentable.com/restref/client/?rid=104173&restref=104173&partysize=2&datetime=2023-04-22T19%3A00&lang=en-US&r3uid=GHFjTIxnu&color=1&corrid=4248193b-4765-4d6a-a98d-5416075ff1af'>Book A Table</a>
        </div>
    </div>
    <div class = 'locationDiv'>
        <h3 class = 'locationTitle'>Location</h3>
        <p class = 'locationText'>108 W. 2nd Street, Downtown Los Angeles</p>
    </div>
</div>

<!--End Hours-->

<!--Contact-->
<div class = 'contactDiv'  bind:this = '{contact}'>
    <div class = 'contactContainer'>
        <div class = 'contactFormDiv'>
            <h1 class = 'contactTitle'>Contact</h1>
            <form class = 'formDiv'>
                <input class = 'contactInput' type = 'text' placeholder = 'Your Name'>
                <input class = 'contactInput' type = 'email' placeholder = 'Your Email'>
                <textarea class = 'contactMessageInput' placeholder = 'Your Message'></textarea>
                <button class = 'submitButton'>Send</button>
            </form>
        </div>
        <div class = 'socialsDiv'>
            <div class = 'contactBox'>
                <h3 class = 'socialsTitle'>SOCIALS</h3>
                <div class = 'contactRow'>
                    <img class = 'contactIcon' src = '/phoneIcon.png' alt = 'Phone Icon'>
                    <p class = 'contactInfoText'>(213) 221 - 7466</p>
                </div>
                <div class = 'contactRow'>
                    <img class = 'contactIcon' src = '/instagramIcon.png' alt = 'Instagram Icon'>
                    <p class = 'contactInfoText'>@badmaashla</p>
                </div>
                <div class = 'contactRow'>
                    <img class = 'contactIcon' src = '/emailIcon.png' alt = 'Email Icon'>
                    <p class = 'contactInfoText'>info@badmaashla.com</p>
                </div>
                <div class = 'contactRow'>
                    <img class = 'contactIcon' src = '/twitterIcon.png' alt = 'Twitter Icon'>
                    <p class = 'contactInfoText'>@BadmaashLA</p>
                </div>
            </div>
        </div>
    </div>
</div>

<!--End Contact-->


<svelte:window bind:scrollY={y} bind:innerWidth={userWidth} />