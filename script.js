let slideIndex = 0;
showSlides();


function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#datepicker", {
        dateFormat: "Y-m-d",
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const inputDatePlaceholder = document.getElementById('bday-placeholder');
    const inputDate = document.getElementById('bday');
    const validitySpan = document.querySelector('.validity');

    inputDate.style.display = 'none';

    inputDatePlaceholder.addEventListener('click', function () {
        inputDate.style.display = 'block';
        inputDatePlaceholder.style.display = 'none';
        inputDate.focus();
    });

    inputDate.addEventListener('change', function () {
        inputDatePlaceholder.value = inputDate.value;
    });

    inputDate.addEventListener('input', function () {
        const dateValue = inputDate.value;

        const today = new Date().toISOString().split('T')[0];
    });
});

var destinations = ["New York", "Los Angeles", "Chicago", "Miami", "Boston", "Las Vegas"];

function populateDropdowns() {
    var leaveFromDropdown = document.getElementById("leaveFrom");
    var toDropdown = document.getElementById("to");

    for (var i = 0; i < destinations.length; i++) {
        var option = document.createElement("option");
        option.text = destinations[i];
        leaveFromDropdown.add(option);
        toDropdown.add(option.cloneNode(true));
    }
}

window.onload = function () {
    populateDropdowns();
};

const imageCardsData = [
    {
        title: "Hotel 1",
        imageUrl: "images/img1.jpeg",
        hoverImageUrl: "images/img2.jpeg",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Image by...",
        link: "#"
    },
    {
        title: "Hotel 2",
        imageUrl: "images/img3.jpeg",
        hoverImageUrl: "images/img4.jpeg",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Image by...",
        link: "#"
    },
    {
        title: "Hotel 3",
        imageUrl: "images/img6.jpeg",
        hoverImageUrl: "images/img5.jpeg",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Image by...",
        link: "#"
    },
    {
        title: "Hotel 4",
        imageUrl: "images/img7.jpeg",
        hoverImageUrl: "images/img8.jpeg",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Image by...",
        link: "#"
    },
    {
        title: "Hotel 5",
        imageUrl: "images/img9.jpeg",
        hoverImageUrl: "images/img10.jpeg",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Image by...",
        link: "#"
    }

];

const imageCardsContainer = document.getElementById("image-cards-container");
const imageCardsList = document.getElementById("image-cards-list");


function handleImageChange(cardElement, imageUrl, hoverImageUrl) {
    cardElement.addEventListener("mouseenter", () => {
        const imageElement = cardElement.querySelector(".card-image img");
        imageElement.src = hoverImageUrl;
    });

    cardElement.addEventListener("mouseleave", () => {
        const imageElement = cardElement.querySelector(".card-image img");
        imageElement.src = imageUrl;
    });
}


function shuffleArray(array) {
    for (let i = 0; i < array.length; i++) {
        const j = Math.floor(Math.random() * i );
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayImageCards() {
    const imageCardsContainer = document.getElementById("image-cards-list");

    imageCardsContainer.innerHTML = "";

    imageCardsData.forEach((data) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("img-card", "iCard-style2");

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const cardImage = document.createElement("div");
        cardImage.classList.add("card-image");

        const image = document.createElement("img");
        image.src = data.imageUrl;
        image.alt = data.title;

        const cardTitle = document.createElement("span");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = data.title;

        const cardText = document.createElement("div");
        cardText.classList.add("card-text");
        cardText.innerHTML = `<p>${data.text}</p>`;

        const cardLink = document.createElement("div");
        cardLink.classList.add("card-link");


        const link = document.createElement("a");
        link.href = data.link;
        link.title = "Read Full";
        link.innerHTML = "<span>Read Full</span>";

        handleImageChange(cardElement, data.imageUrl, data.hoverImageUrl);

        cardImage.appendChild(image);
        cardContent.appendChild(cardImage);
        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardText);
        cardLink.appendChild(link);
        cardContent.appendChild(cardLink);
        cardElement.appendChild(cardContent);

        const cardItem = document.createElement("li");
        cardItem.appendChild(cardElement);
        imageCardsContainer.appendChild(cardItem);
    });
}


function displayShuffledImageCards() {

    shuffleArray(imageCardsData);
    displayImageCards();
}


document.addEventListener('DOMContentLoaded', function () {

    displayImageCards();

    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", displayShuffledImageCards);
});
