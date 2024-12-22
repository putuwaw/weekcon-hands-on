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
    'name': 'M. Jabir Habibie Batubara',
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
    'linkedin': 'www.linkedin.com/in/allycia-joan-micheline',
    'instagram': 'www.instagram.com/ajm_cia'
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
    'linkedin': 'www.linkedin.com/in/azhar-anas',
    'instagram': 'https://www.instagram.com/dyo_sch/'
},
{
    'name': 'Mukhammad Iskhaq Khakim',
    'university': 'State University of Surabaya',
    'image': 'https://lh3.googleusercontent.com/d/1-pOwhrr5QPEZiQXKstbG7ZV04X_wCY1K',
    'linkedin': 'https://www.linkedin.com/in/mukhammad-iskhaq-khakim-3797ab246',
    'instagram': 'https://www.instagram.com/saka_ishaq/'
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
                <h5 class="mb-1 text-xl font-medium text-center text-gray-900">${profile.name}</h5>
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
