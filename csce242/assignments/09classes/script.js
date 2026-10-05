// Vacation 
class Vacation {
    constructor(title, type, description, thingsToDo, imageFile, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.imageFile = imageFile;
        this.mapSrc = mapSrc;
    }

    getCard(onSelect) {
        const card = document.createElement('div');
        card.classList.add('vacation-card');

        const header = document.createElement('div');
        header.classList.add('card-header');

        const title = document.createElement('h3');
        title.textContent = this.title;

        const subtitle = document.createElement('p');
        subtitle.textContent = `${this.type} Vacation`;

        header.appendChild(title);
        header.appendChild(subtitle);

        const img = document.createElement('img');
        img.src = this.imageFile;
        img.alt = this.title;

        card.appendChild(header);
        card.appendChild(img);

        card.addEventListener('click', () => {
            onSelect(this);
        });

        return card;
    }
}

// Array of 8 Vacation Spots
const VACATIONS = [
    new Vacation(
        'Asheville',
        'Mountain',
        'A vibrant mountain city known for its art scene, historic architecture, and mountain views.',
        'Visit the Biltmore Estate, explore the River Arts District, hike in Pisgah National Forest.',
        'images/asheville.jpg',
        'https://maps.google.com/maps?q=Asheville,NC&t=&z=13&ie=UTF8&iwloc=&output=embed'
    ),
    new Vacation(
        'Boone',
        'Mountain',
        'A scenic college town in the Blue Ridge Mountains with beautiful hiking and skiing.',
        'Go skiing, visit Appalachian State University, hike Grandfather Mountain.',
        'images/boone.jpg',
        'https://maps.google.com/maps?q=Boone,NC&t=&z=13&ie=UTF8&iwloc=&output=embed'
    ),
    new Vacation(
        'Hot Springs',
        'Mountain',
        'A small riverside town famous for its natural mineral hot springs and Appalachian Trail access.',
        'Soak in the mineral hot springs, hike a stretch of the Appalachian Trail, go whitewater rafting.',
        'images/hot_springs.jpg',
        'https://maps.google.com/maps?q=Hot+Springs,NC&t=&z=13&ie=UTF8&iwloc=&output=embed'
    ),
    new Vacation(
        'Table Rock',
        'Mountain',
        'A dramatic granite mountain in the Blue Ridge Escarpment with sweeping views of the Upstate.',
        'Hike to the summit, camp at Table Rock State Park, paddle on Lake Oolenoy.',
        'images/table_rock.jpg',
        'https://maps.google.com/maps?q=Table+Rock+State+Park,SC&t=&z=13&ie=UTF8&iwloc=&output=embed'
    ),
    new Vacation(
        'Sunset Beach',
        'Beach',
        'A quiet barrier island beach town known for its long fishing pier and relaxed pace.',
        'Walk the Sunset Beach Pier, watch the sunset over the water, visit Bird Island.',
        'images/sunset_beach.jpg',
        'https://maps.google.com/maps?q=Sunset+Beach,NC&t=&z=13&ie=UTF8&iwloc=&output=embed'
    ),
    new Vacation(
        'Edisto Beach',
        'Beach',
        'A low-key sea island beach community surrounded by maritime forest and salt marsh.',
        'Explore Edisto Beach State Park, go shelling, kayak through the salt marsh.',
        'images/edisto_beach.jpg',
        'https://maps.google.com/maps?q=Edisto+Beach,SC&t=&z=13&ie=UTF8&iwloc=&output=embed'
    ),
    new Vacation(
        'Oak Island',
        'Beach',
        "A family-friendly beach town on North Carolina's southern coast with wide, quiet beaches.",
        'Relax on the beach, fish off the pier, visit the Oak Island Lighthouse.',
        'images/oak_island.jpg',
        'https://maps.google.com/maps?q=Oak+Island,NC&t=&z=13&ie=UTF8&iwloc=&output=embed'
    ),
    new Vacation(
        'Pawleys Island',
        'Beach',
        'One of the oldest resort towns on the East Coast, known for its rustic charm and dunes.',
        'Walk the beach at sunrise, visit Brookgreen Gardens, explore the historic marsh walk.',
        'images/pawleys_island.jpg',
        'https://maps.google.com/maps?q=Pawleys+Island,SC&t=&z=13&ie=UTF8&iwloc=&output=embed'
    )
];

// Adds all vacation cards
const loadGallery = (vacations, galleryEl, onSelect) => {
    galleryEl.innerHTML = '';
    vacations.forEach((vacation) => {
        const card = vacation.getCard(onSelect);
        galleryEl.appendChild(card);
    });
};

const showVacationModal = (vacation, modalEl) => {
    document.getElementById('modal-map').src = vacation.mapSrc;
    document.getElementById('modal-title').textContent = vacation.title;
    document.getElementById('modal-type').textContent = vacation.type;
    document.getElementById('modal-description').textContent = vacation.description;
    document.getElementById('modal-things').textContent = vacation.thingsToDo;

    modalEl.style.display = 'block';
};

const closeVacationModal = (modalEl) => {
    modalEl.style.display = 'none';
    document.getElementById('modal-map').src = '';
};

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('vacation-modal');
    const closeBtn = document.getElementById('modal-close');

    // Render gallery
    loadGallery(VACATIONS, gallery, (vacation) => {
        showVacationModal(vacation, modal);
    });

    closeBtn.addEventListener('click', () => {
        closeVacationModal(modal);
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeVacationModal(modal);
        }
    });
});