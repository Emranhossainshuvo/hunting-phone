const showPhone = async (phone) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phone}`)
    const data = await res.json();
    phoneManager(data.data);
}



const phoneContainer = document.getElementById('card-container');
const phoneManager = (phones) => {
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-5/6 bg-gray-200 mt-4 shadow-xl`;
        phoneCard.innerHTML = `
                    <figure class="px-10 pt-10">
                        <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title mt-2">${phone.phone_name}</h2>
                        <div class="card-actions">
                            <button class="btn mt-2 btn-primary">Buy Now</button>
                        </div>
                    </div>
         `;
            phoneContainer.appendChild(phoneCard);
    }); if(phoneContainer.childNodes.length > 1){
        const searchFieldContainer = document.getElementById('search-field-container');
        searchFieldContainer.classList.remove('mb-96')
    }
    console.log(phoneContainer.childNodes.length)
}


document.getElementById('search-button').addEventListener('click', function(){
    const searchElement = document.getElementById('search-field');
    const searchValue = searchElement.value;
    showPhone(searchValue);
    searchElement.value = '';
})

showPhone();