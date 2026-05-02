const scroll = document.getElementById("scroll_img");

setInterval(()=>{
    scroll.scrollBy({left : 700 , behavior : "smooth"});

    if(scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth - 1){
        scroll.scrollTo({ left: 0, behavior: 'smooth' });
    }

}, 4000);




const searchForm = document.getElementById('form');
const searchInput = document.getElementById('search');

searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();

    const filteredData = Data_of_person.filter(person =>
        person.name.toLowerCase().includes(searchValue)
    );

    renderData(filteredData);
});


const show_card = document.getElementById("display");
const Data_of_person = [
    {name:"Øēň Pÿ ",facebook:"https://web.facebook.com/enpy.2025",profilePicture:".." , university:"..."},
    {name:"កុម្ភៈ កំពត",facebook:"https://web.facebook.com/l8hmm6e7ur",profilePicture:"pictures/pheak.jpg" , university:"..." },
    {name:"Bouy Ban",facebook:"https://web.facebook.com/bros.ban.402313",profilePicture:"pictures/ban.jpg" , university:"..." },
    {name:"Chhay Ponler (ពន្លឺ)",facebook:"https://web.facebook.com/chhay.ponler.5",profilePicture:"pictures/ler.jpg" , university:"..." },
    {name:"Sevatra Sao (សៅ សិររត្រា)",facebook:"https://web.facebook.com/sevatra.sao",profilePicture:"pictures/sevatra.jpg" , university:"..." },
    {name:"Kola (កូឡា)",facebook:"https://web.facebook.com/KOLATUNHNAS/photos",profilePicture:"pictures/kola.jpg" , university:"..." },
    {name:"Phoeun Ponlork (ពន្លក)",facebook:"https://web.facebook.com/phoeunponlork",profilePicture:"pictures/Phoeun Ponlork.jpg" , university:"RUPP" },
    {name:"Vibol Chhorn (វិបុល)",facebook:"https://web.facebook.com/bollaurn",profilePicture:"pictures/bol.jpg" , university:"..." },
    {name:"Thong Akihiko (ថុង)",facebook:"https://web.facebook.com/thong.thong.390112",profilePicture:"pictures/tong.jpg" , university:"..." },
    {name:"Thorn Lü Zihao (ជ ថន)",facebook:"https://web.facebook.com/bro.thon.7165",profilePicture:"pictures/ton.jpg" , university:"..." },
]

Data_of_person.forEach(person =>{
    const create_box = document.createElement("div");
    create_box.classList.add("card");
    create_box.innerHTML =`
    <div class="container">
    <div  class="card">
        <div ><img class="profile-img" src="${person.profilePicture}" alt=""></div>
        <h3 class="name">Name : <span>${person.name}</span></h3>
        <p class="university">🎓 University: <span>${person.university}</span></p>
        <button class="fb-btn" onclick="window.open('${person.facebook}', '_blank')">Facebook</button>
    </div>

    </div>
    `
    show_card.addEventListener("click" , ()=>{
        alert(`You has been to click the ${person.name}`);
    })
    show_card.appendChild(create_box);
})

// ---------------form input --------------
const show_form = document.getElementById("fixe_form");
const btn_uplote = document.getElementById("btn_uplote");
const close = document.getElementById("btn_close");
const form = document.getElementById("form");
const btn_add = document.getElementById("btn_add");

// --- Show Form Logic ---
if (btn_uplote) {
    btn_uplote.addEventListener("click", () => {
        show_form.style.display = "block";
    });
}

// --- Close Form Logic ---
close.addEventListener("click", () => {
    show_form.style.display = "none";
});

// --- Add Data Logic ---
btn_add.addEventListener("click", (event) => {
    
    event.preventDefault(); 

    
    const userNameValue = document.getElementById("UserName_input").value;
    const schoolValue = document.getElementById("school_input").value;
    const imageInput = document.getElementById("input_image");

    
    if (userNameValue.trim() === "" || schoolValue.trim() === "") {
        alert("Please enter both Name and University!");
        return;
    }

    console.log("User Name:", userNameValue);
    console.log("University:", schoolValue);
    
    if (imageInput.files.length > 0) {
        console.log("File uploaded:", imageInput.files[0].name);
    }

    form.reset();
    show_form.style.display = "none";
});