//adding loding features

let loadingContaner = (isloading) => {
  if (isloading) {
    document.getElementById("loading-spinner").classList.remove("hidden");
  } else {
    document.getElementById("loading-spinner").classList.add("hidden");
  }
};

//adding spinner here
let phoneDataLoad = async (searchText='samsung') => {
  loadingContaner(true);
  let res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  let data = await res.json();
  let phones = data.data;
  showPhone(phones);
};

//now make sure it clear the div
// let div = document.createElement("div");

// container.innerText='';

let showPhone = (phones) => {
  let container = document.getElementById("phone-container");
  container.innerHTML = "";

  //addin show all button hiding features
  let showAllButtion = document.getElementById("showall");
  if (phones.length > 9) {
    showAllButtion.classList.remove("hidden");
  } else {
    showAllButtion.classList.add("hidden");
  }

  //slice ling the phones result to show only first 9 phone
  let device = phones.slice(0, 9);

  device.forEach((phone) => {
    console.log(phone);

    let div = document.createElement("div");
    div.innerHTML = `
    <div class="card card-compact w-96  bg-base-100 mt-2 shadow-xl">
                <figure>
                    <img src="${phone.image}" alt="iphone" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>



<label for="my_modal_6" onclick="showoptions('${phone.slug}')" class="btn btn-primary">Show more details</label>





                </div>
            </div>

    `;
    container.appendChild(div);
  });

  loadingContaner(false);
};

// modal show option features adding here

let showoptions = (id) => {
  console.log("its working", id);
};

function phonesearch() {
  let search = document.getElementById("searchInput");
  let searchText = search.value;
  console.log(searchText);
  phoneDataLoad(searchText);
}

//defalut phone load
// phoneDataLoad(searchText)
// phonesearch();
phoneDataLoad();


