import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/index.js";
import "load-google-maps-api";
const homeStyles = "";
const Map_svelte_svelte_type_style_lang = "";
const css = {
  code: "#map.svelte-xsyr8q{width:100%;height:300px}",
  map: null
};
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="map" class="svelte-xsyr8q"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let about;
  let menu;
  let gallery;
  let hours;
  let contact;
  let navContainer;
  let time = /* @__PURE__ */ new Date();
  let openStatus = "Something is Wrong";
  let inverse = "Something is Wrong";
  let statusColor = "black";
  let displayHours = 0;
  let displayMinutes = 0;
  let hoverImg = "landingLogo.png";
  let menuIndex = 0;
  let imgBlend = "multiply";
  const menuTitles = [
    "INDIAN STREET FOOD",
    "HANDMADE PUNJABI SAMOSAS",
    "TIKKAS & KABAABS",
    "#BADMAASHLA FAVES",
    "TRADITIONAL INDIAN SELECTIONS",
    "INDIAN CONDIMENTS, FRESH BREADS & SIDES"
  ];
  let fullMenu = [
    [
      {
        name: "Indian Pickles (gharwalla achaar)",
        disc: "seasonal veggies pickled in house with indian spices & aromatics",
        price: 4,
        hover: false,
        image: "A0.png"
      },
      {
        name: "Onion Fritters (onion bhajjia)",
        disc: "dredged in a spiced chickpea batter - fried golden brown - served with tamarind chutney",
        price: 4,
        hover: false,
        image: "A1.png"
      },
      {
        name: "Punjabi Fish-Fry (machhi amritsari)",
        disc: "flaky catfish fried crisp in chickpea batter spiced with carom seed, paprika & dried mango dust",
        price: 4,
        hover: false,
        image: "A2.png"
      }
    ],
    [
      {
        name: "The Traditional",
        disc: "potato & sweet peas with coriander seeds, roasted cumin & ginger",
        price: 4,
        hover: false,
        image: "B0.png"
      },
      {
        name: "Butter Chicken",
        disc: "the most popular punjabi curry in deep fried-awesomeness",
        price: 4,
        hover: false,
        image: "B1.png"
      }
    ],
    [
      {
        name: "Badass Chicken Tikka",
        disc: "traditional “dhaba style” preparation with yogurt ginger, dried fenugreek & mustard oil",
        price: 4,
        hover: false,
        image: "C0.png"
      },
      {
        name: "Market Vegetables",
        disc: "seasonal vegetables marinated with garlic, turmeric & tandoori spices - served with a smoked tomato chutney",
        price: 4,
        hover: false,
        image: "C1.png"
      }
    ],
    [
      {
        name: "Badmaash Fried Chicken",
        disc: "spice-battered chicken double-fried & dusted with paprika masala - served with serrano-cream sauce",
        price: 4,
        hover: false,
        image: "D0.png"
      },
      {
        name: "Chicken Tikka Poutine",
        disc: "canadian eh!? masala fries topped with cheese curds, doused in piping hot beef gravy, all topped with tandoori chicken tikka & cilantro",
        price: 4,
        hover: false,
        image: "D1.png"
      },
      {
        name: "Channa Masala Poutine",
        disc: "masala fries topped with cheese curds, and smothered with our Punjabi chickpeas - all topped with pickled onion & cilantro (ask for it vegan without the cheese)",
        price: 4,
        hover: false,
        image: "D2.png"
      },
      {
        name: "Slow Cooked Beef Short Rib",
        disc: "grass-fed & hormone-free, cooked ‘slow & low’ in a curry of caramelized onion, turmeric, cumin & red wine",
        price: 4,
        hover: false,
        image: "D3.png"
      }
    ],
    [
      {
        name: "Butter Chicken (murgh makhani)",
        disc: "indian wedding classic; 48-hour marinade of yogurt & spices, charred in the tandoor then finished in a creamy tomato curry flavored with fenugreek",
        price: 4,
        hover: false,
        image: "E0.png"
      },
      {
        name: "Chicken Tikka Masala",
        disc: "charred tandoori chicken sauteed with red onion, green & red peppers sauteed in a tomato curry spiced with serrano chilies, fresh ginger & cilantro",
        price: 4,
        hover: false,
        image: "E1.png"
      },
      {
        name: "Goan Pork Curry",
        disc: "sweet, sour, spicy! pork shoulder slow braised with fenugreek seeds, jaggery & fresh tamarind",
        price: 4,
        hover: false,
        image: "E2.png"
      },
      {
        name: "Ghost Chili Lamb Vindaloo",
        disc: "SPICY!! - juicy lamb & potato slow braised in a spicy curry of ‘bhoot jolokia’, serrano & red chilies",
        price: 4,
        hover: false,
        image: "E3.png"
      }
    ]
  ];
  JSON.stringify(fullMenu);
  time.getDay();
  time.getHours();
  time.getMinutes();
  return `<div class="homeDiv">
    <div class="navContainer"${add_attribute("this", navContainer, 0)}><div class="navItem"><a href="/"><img src="logo.png" alt="Logo"></a></div>
        <div class="navItem"><a href="#">About</a></div>
        <div class="navItem"><a href="#">Menu</a></div>
        <div class="navItem"><a href="#">Gallery</a></div>
        <div class="navItem"><a href="#">Hours</a></div>
        <div class="navItem"><a href="#">Contact</a></div></div>
    

    
    <div class="homeTextContainer"><img src="/landingLogo.png" alt="Landing Logo" class="landingLogo">

        <div class="homeText"><p id="homeText1">A taste of India in the heart of LA</p></div>
        </div></div>



<div class="aboutDiv"${add_attribute("this", about, 0)}><div class="heritageTitleDiv"><h1 class="heritageTitle">Our Heritage</h1></div>
    <div class="heritageTextDiv"><p class="heritageText">At Badmaash, we are proud of our Indian heritage. We
            believe that Indian cuisine is one of the most diverse and
            delicious in the world, and we are committed to sharing that
            with our guests. Our menu features a wide variety of dishes from
            all over India, each with its own unique flavor profile.</p></div>
    <div class="heritageImageDiv"><img class="heritageImage" src="/heritageImage.jpeg" alt="Heritage"></div>
    <div class="ownersTitleDiv"><h1 class="ownersTitleText">A Culinary Journey Through Generations.</h1></div>
    <div class="ownersImageContainer"><div class="ownersImageDiv"><img class="ownersImage" src="/nakulMahendro.png" alt="Nakul Mahendro">
            <p class="ownersName">NAKUL<br>MAHENDRO</p></div>
        <div class="ownersImageDiv"><img class="ownersImage" src="/pawanMahendro.png" alt="Pawan Mahendro">
            <p class="ownersName">PAWAN<br>MAHENDRO</p></div>
        <div class="ownersImageDiv"><img class="ownersImage" src="/arjunMahendro.png" alt="Arjun Mahendro">
            <p class="ownersName">ARJUN<br>MAHENDRO</p></div></div>
    <div class="quoteTextDiv"><p class="quoteText">“If Gandhi were our age today, he’d totally be
            a hipster. He’s like ‘peace, love, nonviolence,
            eat healthy, be good...’&quot;</p></div>
    <div class="quoteAuthorDiv"><p class="quoteAuthorText">- Nakul Mahendro</p></div></div>




<div class="menuDiv"${add_attribute("this", menu, 0)}><div class="menuTitleDiv"><h1 class="menuTitle">Menu</h1></div>
    <div class="menuContainer"><div class="swipeDiv"><button class="swipeButton"><img class="swipeImage" src="/leftArrow.png" alt="Swipe Left"></button></div>
        <div class="menuContent"><p class="menuTypeText">${escape(menuTitles[menuIndex])}</p>
            ${each(fullMenu[menuIndex], (item, i) => {
    return `<p class="menuText"><b>${escape(item.name)}</b><br><span class="itemDisc">${escape(item.disc)}</span><br></p>`;
  })}
        <div class="hoverImageDiv"><img class="hoverImage"${add_attribute("src", hoverImg, 0)} alt="Hover" style="${"mix-blend-mode: " + escape(imgBlend, true) + ";"}"></div></div>
        <div class="swipeDiv"><button class="swipeButton"><img class="swipeImage" src="/rightArrow.png" alt="Swipe Right"></button></div></div></div>





<div class="galleryDiv"${add_attribute("this", gallery, 0)}><div class="galleryTitleDiv"><h1 class="galleryTitle">Gallery</h1></div>
    <div class="galleryImagesContainer"><div class="galleryImagesRight"><div><img class="galleryImage" src="/galleryImage1.png" alt="Gallery 1"></div>
            <div><img class="galleryImage" src="/galleryImage2.png" alt="Gallery 1"></div>
            <div><img class="galleryImage" src="/galleryImage3.png" alt="Gallery 1"></div>
            <div><img class="galleryImage" src="/galleryImage4.png" alt="Gallery 1"></div></div>
        <div class="galleryImagesLeft"><div><img class="galleryImage" src="/galleryImage5.png" alt="Gallery 1"></div>
            <div><img class="galleryImage" src="/galleryImage6.png" alt="Gallery 1"></div>
            <div><img class="galleryImage" src="/galleryImage7.png" alt="Gallery 1"></div></div></div></div>




<div class="hoursDiv"${add_attribute("this", hours, 0)}><div class="hoursTitleDiv"><h1 class="hoursTitle">Hours</h1></div>
    <div class="openDiv"><p class="openText">We are currently <span style="${"color: " + escape(statusColor, true)}">${escape(openStatus)}</span></p></div>
    <div class="closingTimeDiv"><p class="closingTimeText">We ${escape(inverse)} in ${escape(displayHours)} hours and ${escape(displayMinutes)} minutes</p></div>
    <div class="hoursMainContainer"><div class="listedHours"><h3 class="hoursListTitle">Hours</h3>
            <div class="hoursListDiv"><div class="dayDiv"><p class="hoursDay">MONDAY</p>
            <p class="hoursListItem">CLOSED</p></div></div>
            <div class="hoursListDiv"><div class="dayDiv"><p class="hoursDay">TUESDAY</p>
            <p class="hoursListItem">11:30AM - 3PM <br> 5PM - 10PM</p></div>
            <div class="dayDiv"><p class="hoursDay">WEDNESDAY</p>
            <p class="hoursListItem">11:30AM - 3PM <br> 5PM - 10PM</p></div></div>
            <div class="hoursListDiv"><div class="dayDiv"><p class="hoursDay">THURSDAY</p>
            <p class="hoursListItem">11:30AM - 3PM <br> 5PM - 10PM</p></div>
            <div class="dayDiv"><p class="hoursDay">FRIDAY</p>
            <p class="hoursListItem">11:30AM - 3PM <br> 5PM - 10PM</p></div></div>
            <div class="hoursListDiv"><div class="dayDiv"><p class="hoursDay">SATURDAY</p>
            <p class="hoursListItem">5PM - 10PM</p></div>
            <div class="dayDiv"><p class="hoursDay">SUNDAY</p>
            <p class="hoursListItem">5PM - 10PM</p></div></div></div>
        <div class="reservationDiv"><a class="reservationButton" target="_blank" href="https://www.opentable.com/restref/client/?rid=104173&restref=104173&partysize=2&datetime=2023-04-22T19%3A00&lang=en-US&r3uid=GHFjTIxnu&color=1&corrid=4248193b-4765-4d6a-a98d-5416075ff1af">Book A Table</a></div></div>
    <div class="locationDiv"><h3 class="locationTitle">Location</h3>
        <p class="locationText">108 W. 2nd Street, Downtown Los Angeles</p>
        <div class="map">${validate_component(Map, "Map").$$render($$result, {}, {}, {})}</div></div></div>




<div class="contactDiv"${add_attribute("this", contact, 0)}><div class="contactContainer"><div class="contactFormDiv"><h1 class="contactTitle">Contact</h1>
            <form class="formDiv"><input class="contactInput" type="text" placeholder="Your Name">
                <input class="contactInput" type="email" placeholder="Your Email">
                <textarea class="contactMessageInput" placeholder="Your Message"></textarea>
                <button class="submitButton">Send</button></form></div>
        <div class="socialsDiv"><div class="contactBox"><h3 class="socialsTitle">SOCIALS</h3>
                <div class="contactRow"><a class="iconButtons" href="tel:213221766" target="_blank"><img class="contactIcon" src="/phoneIcon.png" alt="Phone Icon"></a>
                    <p class="contactInfoText">(213) 221 - 7466</p></div>
                <div class="contactRow"><a class="iconButtons" href="https://www.instagram.com/badmaashla/" target="_blank"><img class="contactIcon" src="/instagramIcon.png" alt="Instagram Icon"></a>
                    <p class="contactInfoText">@badmaashla</p></div>
                <div class="contactRow"><a class="iconButtons" href="mailto:info@badmaashla.com" target="_blank"><img class="contactIcon" src="/emailIcon.png" alt="Email Icon"></a>
                    <p class="contactInfoText">info@badmaashla.com</p></div>
                <div class="contactRow"><a class="iconButtons" href="https://twitter.com/BadmaashLA" target="_blank"><img class="contactIcon" src="/twitterIcon.png" alt="Twitter Icon"></a>
                    <p class="contactInfoText">@BadmaashLA</p></div></div></div></div></div>




`;
});
export {
  Page as default
};
