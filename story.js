const gallery = document.getElementById("gallery");
const Infortion_sophal = [
    {
        name: "Sophal" ,
        image:"pictures/sophal.jpg"
    },
    
    {
        name: "Sophal and sokarh" ,
        image:"pictures/sophal1.jpg"
    },
    {
        name: "Sophal  veasna and vanna" ,
        image:"pictures/sophal2.jpg"
    },
    {
        name: "Sophal and veasna" ,
        image:"pictures/sophal4.jpg"
    },
    {
        name: "Sophal" ,
        image:"pictures/sophal5.jpg"
    },
    {
        name: "Sophal" ,
        image:"pictures/sophal6.jpg"
    },
    {
        name: "Sophal and veasna" ,
        image:"pictures/sophal9.jpg"
    },
    {
        name: "Sophal and veasna" ,
        image:"pictures/sophal10.jpg"
    },
    {
        name: "video " ,
        video:"pictures/V_sophal.mp4"
    },
    
];
// for photo
Infortion_sophal.forEach(person => {
    const mediaItem = document.createElement("div");
    mediaItem.classList.add("media-item");
    mediaItem.innerHTML = `
        <img src="${person.image}" alt="${person.name}">
        <div class="media-info">
            <h4>${person.name}</h4>
        </div>
    `;
    gallery.appendChild(mediaItem);
});
// for video
Infortion_sophal.forEach(person => {
    if (person.video) {
        const mediaItem = document.createElement("div");
        mediaItem.classList.add("media-item");

        mediaItem.innerHTML = `
            <video width="100%" controls>
                <source src="${person.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="media-info">
                <h4>${person.name}</h4>
            </div>
        `;
        
        gallery.appendChild(mediaItem);
    }
});

const gallery_rith = document.getElementById("Rith");
const Information_rith =[
    {
        name : "Rith and kola" ,
        image : "pictures/rith1.jpg",
    },
    {
        name : "Rith" ,
        image : "pictures/rith2.jpg",
    },
    {
        name : "Rith and dog" ,
        image : "pictures/rith3.jpg",
    },
    {
        name : "Rith" ,
        image : "pictures/rith4.jpg",
    },
    {
        name : "Rith" ,
        image : "pictures/rith5.jpg",
    },
    {
        name : "Rith" ,
        image : "pictures/rith6.jpg",
    },
    {
        name : "Rith" ,
        image : "pictures/rith7.jpg",
    },
    {
        name : "Rith" ,
        image : "pictures/rith8.jpg",
    },
    {
        name : "Rith" ,
        image : "pictures/rith9.jpg",
    },
    {
        name : "Rith" ,
        image : "pictures/rith10.jpg",
    },
    {
        name : "Rith" ,
        image : "pictures/rith11.jpg",
    },
    {
        name : "Rith" ,
        image : "pictures/rith12.jpg",
    },
    {
        name : "Rith" ,
        image : "pictures/rith13.jpg",
    },
    
]

console.log("Photo");
for(let i = 0 ; i < Information_rith.length ; i++){
    console.log(Information_rith[i]);
}

const Information_rith_V = [
    {
        V_name : "Rith" ,
        video : "pictures/V_rith1.mp4",
    },
    {
        V_name : "Rith" ,
        video : "pictures/V_rith2.mp4",
    },
    {
        V_name : "Rith" ,
        video : "pictures/V_rith3.mp4",
    },
    {
        V_name : "Rith" ,
        video : "pictures/V_rith4.mp4",
    },
]
console.log("video");
for(let i = 0 ; i < Information_rith.length ; i++){
    console.log(Information_rith_V[i]);
}
// for photo
Information_rith.forEach(person => {
    const mediaItem = document.createElement("div");
    mediaItem.classList.add("media-item");
    mediaItem.innerHTML = `
        <img src="${person.image}" alt="${person.name}">
    `;
    gallery_rith.appendChild(mediaItem);
}); 
// for video
Information_rith_V.forEach(person => {
    if (person.video) {
        const mediaItem = document.createElement("div");
        mediaItem.classList.add("media-item");

        mediaItem.innerHTML = `
            <video width="100%" controls>
                <source src="${person.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            
        `;
        
        gallery_rith.appendChild(mediaItem);
    }
});

// for list name
const result = document.getElementById("list");

const name_person = [
    { name: "Rith" },
    { name: "Sophal" },
    { name: "vanna(លីសុវណ្ណា)" },
    { name: "Pisey(សុខពីសី)" },
    { name: "Øēň Pÿ" },
    { name: "កុម្ភៈ" },
    { name: "Chhay Ponler (ពន្លឺ)" },
];

name_person.forEach(person => {
    const boxName = document.createElement("div");
    boxName.classList.add("box");

    boxName.innerHTML = `
        <div style="cursor:pointer" class="box_name">
            <p>Name :</p>
            <p>${person.name}</p>
        </div>
        </br>
    `;
// scroll when click
     boxName.addEventListener("click", () => {
            const target = document.getElementById(person.name.toLowerCase());

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });

    result.appendChild(boxName);
});


const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();

        const filtered = name_person.filter(person =>
            person.name.toLowerCase().includes(value)
        );

        displayNames(filtered);
    });
