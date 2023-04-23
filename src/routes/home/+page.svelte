
<script lang = 'js'>

// Imports
import "./homeStyles.css"
import { onMount } from "svelte"
import { fade } from "svelte/transition"

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

let menuIndex = 0

//Menu Declares
const menuTitles = ['INDIAN STREET FOOD', 'HANDMADE PUNJABI SAMOSAS', 'TIKKAS & KABAABS', '#BADMAASHLA FAVES', 'TRADITIONAL INDIAN SELECTIONS', 'INDIAN CONDIMENTS, FRESH BREADS & SIDES']
const fullMenu = [[
    {name: 'Indian Pickles (gharwalla achaar)', disc: 'seasonal veggies pickled in house with indian spices & aromatics'},
    {name: 'Onion Fritters (onion bhajjia)', disc: 'dredged in a spiced chickpea batter - fried golden brown - served with tamarind chutney'},
    {name: 'Punjabi Fish-Fry (machhi amritsari)', disc: 'flaky catfish fried crisp in chickpea batter spiced with carom seed, paprika & dried mango dust'}
],[
    {name: 'The Traditional', disc: 'potato & sweet peas with coriander seeds, roasted cumin & ginger'},
    {name: 'Butter Chicken', disc: 'the most popular punjabi curry in deep fried-awesomeness'}
],[
    {name: 'Badass Chicken Tikka', disc: 'traditional “dhaba style” preparation with yogurt ginger, dried fenugreek & mustard oil'},
    {name: 'Market Vegetables', disc: 'seasonal vegetables marinated with garlic, turmeric & tandoori spices - served with a smoked tomato chutney'}
],[
    {name: 'Badmaash Fried Chicken', disc: 'spice-battered chicken double-fried & dusted with paprika masala - served with serrano-cream sauce'},
    {name: 'Chicken Tikka Poutine', disc: 'canadian eh!? masala fries topped with cheese curds, doused in piping hot beef gravy, all topped with tandoori chicken tikka & cilantro'},
    {name: 'Channa Masala Poutine', disc: 'masala fries topped with cheese curds, and smothered with our Punjabi chickpeas - all topped with pickled onion & cilantro (ask for it vegan without the cheese)'},
    {name: 'Slow Cooked Beef Short Rib', disc: 'grass-fed & hormone-free, cooked ‘slow & low’ in a curry of caramelized onion, turmeric, cumin & red wine'},
    {name: 'Badmaash Broccolini', disc: 'marinated with mustard oil, garlic & chili, dusted with spiced chickpea flour & roasted until crispy'},
    {name: 'Chili Cheese Naan', disc: 'our naan dough stuffed with strong white cheddar, serrano chilies & cilantro - cooked in the tandoor'},
    {name: 'Masala Potato Fries', disc: 'with parpika spiced mayo'}
],[
    {name: 'Butter Chicken (murgh makhani)', disc: 'indian wedding classic; 48-hour marinade of yogurt & spices, charred in the tandoor then finished in a creamy tomato curry flavored with fenugreek'},
    {name: 'Chicken Tikka Masala', disc: 'charred tandoori chicken sauteed with red onion, green & red peppers sauteed in a tomato curry spiced with serrano chilies, fresh ginger & cilantro'},
    {name: 'Goan Pork Curry', disc: 'sweet, sour, spicy! pork shoulder slow braised with fenugreek seeds, jaggery & fresh tamarind'},
    {name: 'Ghost Chili Lamb Vindaloo', disc: 'SPICY!! - juicy lamb & potato slow braised in a spicy curry of ‘bhoot jolokia’, serrano & red chilies'},
    {name: 'Good Ol’ Saag Paneer', disc: 'mom’s recipe of baby spinach sautéed with tomato, onion, ‘garam masala’ & indian paneer cheese'},
    {name: 'Homestyle Punjabi ’Sabzi’', disc: 'seasonal market vegetables cooked with homemade spice mixes & masalas - please ask your server'},
    {name: 'Punjabi Chickpeas (channa masala)', disc: 'garbanzo beans, tomato & onion - stewed in warm spices & aromatics - topped with pickled onion'},
    {name: 'Creamy Black Lentils (daal makhani)', disc: '24-hour slow cook; black lentils & kidney beans with ginger, garlic, plum tomato & butter'},
    {name: 'South Indian Fish Konkani', disc: 'market fresh fish stewed in a bright curry of tomato & coconut milk, spiced with mustard seed'},
    {name: 'Mixed Mushroom Vindaloo', disc: 'ghost chili! - field mushrooms, onions & potato cooked in a spicy curry of mixed chilies'}

],[
    {name: '5 Pepper Hot Sauce - “Boss Sauce”', disc: ''},
    {name: 'Spiced Mango Chutney', disc: ''},
    {name: 'Smoked Tomato Chutney', disc: ''},
    {name: '“OG” Masala Onions & Chilies', disc: ''},
    {name: 'Cucumber Yogurt Raita', disc: ''},
    {name: 'Rosemary Naan', disc: ''},
    {name: 'Tandoori Naan', disc: ''},
    {name: 'Tandoori Roti', disc: ''},
    {name: 'Basmati Pilaf', disc: ''}
]

]
//onMount Functions (Runs when page is loaded)
onMount(async () => {
    pageScroll()
    timeTillClose()
})

//Functions

// Menu Funtion

function swipe (direction) {
    if (direction == 'left') {
        if (menuIndex == 5) {
            menuIndex = 0
        } else {
            menuIndex = menuIndex + 1
        }
    } else if (direction == 'right') {
        if (menuIndex == 0) {
            menuIndex = 5
        } else {
            menuIndex = menuIndex - 1
        }
    }
}

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


<div class = 'homeDiv' in:fade="{{duration:600}}">
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
            <button class = 'swipeButton' on:click={() => swipe('right')}><img class = 'swipeImage' src = '/leftArrow.png' alt = 'Swipe Left'></button>
        </div>
        {#key menuTitles[menuIndex]}
        <div class = 'menuContent'>
            <p class = 'menuTypeText' in:fade>{menuTitles[menuIndex]}</p>
            {#each fullMenu[menuIndex] as item}
            <p class = 'menuText' in:fade><b>{item.name}</b><br><span class = 'itemDisc'>{item.disc}</span><br></p>
            {/each}
        </div>
        {/key}
        <div class = 'swipeDiv'>
            <button class = 'swipeButton' on:click={() => swipe('left')}><img class = 'swipeImage' src = '/rightArrow.png' alt = 'Swipe Right'></button>
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