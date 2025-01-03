const profiles = [{
    'name': 'Muhammad Ali Yahya',
    'university': 'Universitas Bina Sarana Informatika',
    'image': 'https://lh3.googleusercontent.com/d/1WDjITwfTQlN1OxL54JFJgI47v3rE0yk-',
    'linkedin': 'https://github.com/Muhammad-Ali-Yahya',
    'instagram': 'https://www.instagram.com/mhmmdaliyhy/'
},
{
    'name': 'Hamas Baja Sahik Al-Jaman',
    'university': 'Universitas Airlangga',
    'image': 'https://lh3.googleusercontent.com/d/1aEvpGnpd4pg1jqnEJdDH7Hq9PynOcCt5',
    'linkedin': 'https://www.linkedin.com/in/hamasbajasahikaljaman/',
    'instagram': 'https://www.instagram.com/al_sahik'
},
{
    'name': 'Muhammad Jabir Habibie Batubara',
    'university': 'Universitas Muhammadiyah Kalimantan Timur',
    'image': 'https://lh3.googleusercontent.com/d/1iXmi6b54B7DmEgG8ZRVrloDJshOEqknA',
    'linkedin': 'https://www.linkedin.com/in/muhammadjabirhabibie',
    'instagram': 'https://www.instagram.com/habibiieee_'
},
{
    'name': 'Nicholas Febrian Liswanto',
    'university': 'Universitas Bunda Mulia',
    'image': 'https://lh3.googleusercontent.com/d/15iXPqgTa4dHth2tO7Om3-ZYW395fLEME',
    'linkedin': 'https://www.linkedin.com/in/nicholas-febrian-325146306/',
    'instagram': 'https://www.instagram.com/nich.17/'
},
{
    'name': 'Allycia Joan Micheline',
    'university': 'Universitas Pradita',
    'image': 'https://lh3.googleusercontent.com/d/1X9dp23dyK8-7Gx7UeMx_HmB410yug5iD',
    'linkedin': 'https://www.linkedin.com/in/allycia-joan-micheline',
    'instagram': 'https://www.instagram.com/ajm_cia'
},
{
    'name': 'Indah Wahyuni',
    'university': 'Universitas Riau',
    'image': 'https://lh3.googleusercontent.com/d/1DLo_ynpuTzOAwZvfRTjtV9N-JQwYRbSs',
    'linkedin': 'https://www.linkedin.com/in/indah-wahyuni-55b7572b4',
    'instagram': 'https://www.instagram.com/indahwhy._?igsh=dGh3bjJmNnB3bGN4'
},
{
    'name': 'Azhar Anas',
    'university': 'Universitas Mercu Buana',
    'image': 'https://lh3.googleusercontent.com/d/1B8EAyjahEm8xzNh56YwCR2Sablxd1QAb',
    'linkedin': 'https://www.linkedin.com/in/azhar-anas',
    'instagram': 'https://www.instagram.com/dyo_sch/'
},
{
    'name': 'Mukhammad Iskhaq Khakim',
    'university': 'State University of Surabaya',
    'image': 'https://lh3.googleusercontent.com/d/1-pOwhrr5QPEZiQXKstbG7ZV04X_wCY1K',
    'linkedin': 'https://www.linkedin.com/in/mukhammad-iskhaq-khakim-3797ab246',
    'instagram': 'https://www.instagram.com/saka_ishaq/'
},
{
    "name": "Raden Mohamad Adrian Ramadhan Hendar Wibawa",
    "university": "Universitas Indonesia",
    'image': 'https://lh3.googleusercontent.com/d/1ALVal4ml8z36qS0HFcn7GHQgfEE5unje',
    "linkedin": "https://www.linkedin.com/in/adrian-voiz/",
    "instagram": "https://www.instagram.com/adrian_voiz/"
},
{
    "name": "Reyhanssan Islamey",
    "university": "Universitas Ahmad Dahlan",
    'image': 'https://lh3.googleusercontent.com/d/1-2oI1QVz4IX9qAPa_XNwhg7WXQJky1h5',
    "linkedin": "https://www.linkedin.com/in/reyhanssan-islamey/",
    "instagram": "https://www.instagram.com/erzetarey_/"
},
{
    "name": "Ahmad Ardiansyah",
    "university": "IPB University",
    'image': 'https://lh3.googleusercontent.com/d/1LiVjJAsmtmATIgJT7Vnn34xctZwIzwpj',
    "linkedin": "https://www.linkedin.com/in/ahmad-ardiansyah-a521441a4/",
    "instagram": "https://www.instagram.com/ardiansyahmadz/"
},
{
    "name": "Fadhil Yusuf",
    "university": "Universitas Sebelas Maret",
    'image': 'https://lh3.googleusercontent.com/d/1_9CKDYBOqGoBHzLzZu910kievGhAIUIK',
    "linkedin": "https://www.linkedin.com/in/fadhil-yusuf/",
    "instagram": "https://www.instagram.com/fadilmusawa/"
},
{
    "name": "Fina Shafirna Mustaqiem",
    "university": "IPB University",
    'image': 'https://lh3.googleusercontent.com/d/1k8XlyNYkSxchw1o7YVJF6v5soVFTYG4c',
    "linkedin": "https://www.linkedin.com/in/fina-shafirna-mustaqiem-4051b7215/",
    "instagram": "https://www.instagram.com/fkh.073"
},
{
    "name": "Dian Maharani",
    "university": "Universitas Pembangunan Nasional Veteran Jawa Timur",
    'image': 'https://lh3.googleusercontent.com/d/1_R3xYWwBENXyYd8YQI0BvH9sY2HafffL',
    "linkedin": "https://www.linkedin.com/in/dian-maharani-97399a2b8",
    "instagram": "https://www.instagram.com/xdianary/"
}]



function createProfileCards(profiles) {
    const mainContainer = document.querySelector('main');

    profiles = profiles.sort(() => Math.random() - 0.5);

    profiles.forEach(profile => {
        const card = document.createElement('div');
        card.className = "w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 hover:-translate-y-2 duration-300";

        card.innerHTML = `
            <div class="flex flex-col items-center py-4">
                <img
                    class="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
                    src="${profile.image}"
                    alt="${profile.name} image"
                />
                <h5 class="mb-1 text-xl font-medium text-center text-gray-900 md:px-2">${profile.name}</h5>
                <span class="text-sm px-2 text-gray-500 text-center">${profile.university}</span>
                <div class="flex flex-wrap justify-center mt-4 md:mt-6 gap-2">
                    <a href="${profile.linkedin}" target="_blank"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 max-w-xs">
                        <i class="fa-brands fa-linkedin me-2"></i>LinkedIn
                    </a>
                    <a href="${profile.instagram}" target="_blank"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 max-w-xs">
                        <i class="fa-brands fa-instagram me-2"></i>Instagram
                    </a>
                </div>
            </div>
        `;

        mainContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createProfileCards(profiles);
});
