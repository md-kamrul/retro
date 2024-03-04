const markAsRead = async (title, view_count) => {
    let markAsReadNumber = document.getElementById("markAsReadNumber");
    let markAsReadContainer = document.getElementById("markAsReadContainer");
    let number = parseInt(markAsReadNumber.innerText);
    markAsReadNumber.innerText = number + 1;

    // markAsReadNumber.innerText = markAsReadNumber;

    const markAsReadDiv = document.createElement("div");
    markAsReadDiv.classList.add("bg-white", "p-5", "rounded-2xl", "grid", "grid-cols-6", "mt-4");
    markAsReadDiv.innerHTML = `
                            <div class="col-span-5 md:col-span-4 text-[#12132D] font-semibold">
                                ${title}
                            </div>
                            <div class="col-span-1 md:col-span-2">
                                <div class="flex gap-1">
                                    <img src="./assets/icons/watch-post.svg" alt="">
                                    <p>
                                        ${view_count}
                                    </p>
                                </div>
                            </div>
    `;

    markAsReadContainer.appendChild(markAsReadDiv);
}

setTimeout(discussSection = async (searchValue) => {
    const discuss = document.getElementById("discuss");
    discuss.innerHTML = "";

    const discussLoading = document.getElementById("discussLoading");
    discussLoading.classList.remove("flex");
    discussLoading.classList.add("hidden");

    let discussAPI;

    if (searchValue) {
        discussAPI = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchValue}`);
    }
    else { 
        discussAPI = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    }
    
    const discussAPIData = await discussAPI.json();

    discussAPIData.posts.forEach(element => {
        const discussCard = document.createElement("div");
        discussCard.classList.add("card", "card-side", "bg-[#F3F3F5]", "hover:bg-[#797DFC1A]", "border-2", "border-transparent", "hover:border-[#797dfc9d]", "inter-font");
        discussCard.innerHTML = `
                            <div class="stat flex">
    
                                <!-- avatar design -->
                                <div class="text-secondary mt-5 ml-5">
                                    <div class="avatar ${element.isActive ? "online" : "offline"}">
                                        <div class="w-[72px] h-[72px] rounded-2xl">
                                            <img src="${element.image}"
                                                alt="Movie" />
                                        </div>
                                    </div>
                                </div>
    
                                <!-- card body -->
                                <div class="card-body ml-[-20px] mt-[-10px] w-[80%] md:w-full">
                                    <div class="flex gap-5 text-[#12132DCC] font-medium text-[14px]">
                                        <div>
                                            <p>
                                                #
                                                <span>
                                                    ${element.category}
                                                </span>
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                Author :
                                                <span>
                                                    ${element.author.name}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
    
                                    <h3 class="mulish-font font-bold text-xl text-[#12132D] w-[90%]">
                                        ${element.title}
                                    </h3>
    
                                    <p class="font-normal w-full text-[#12132D99]">
                                    ${element.description}
                                    </p>
    
                                    <hr class="border-2 border-dashed border-[#12132D40] my-6">
    
                                    <div class="flex justify-between text-[#12132D99] font-normal">
    
                                        <div class="flex gap-6">
                                            <div class="flex gap-1">
                                                <img src="./assets/icons/comment-post.svg" alt="">
                                                <p>
                                                ${element.comment_count}
                                                </p>
                                            </div>
    
                                            <div class="flex gap-1">
                                                <img src="./assets/icons/watch-post.svg" alt="">
                                                <p>
                                                ${element.view_count}
                                                </p>
                                            </div>
    
                                            <div class="flex gap-1">
                                                <img src="./assets/icons/reading-time.svg" alt="">
                                                <p>
                                                ${element.posted_time} min
                                                </p>
                                            </div>
                                        </div>
    
                                        <img onclick="markAsRead('${element.title}', '${element.view_count}')" class="cursor-pointer" src="./assets/icons/mark-as-read.svg" alt="">
    
                                    </div>
                                </div>
                            </div>
            `;

        discuss.appendChild(discussCard);
    });
}, 2000);

setTimeout(lastestPost = async () => {
    const lastestPostAPI = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const lastestPostData = await lastestPostAPI.json();

    const lastesPostCards = document.getElementById("lastesPostCards");

    const latestPostLoading = document.getElementById("latestPostLoading");
    latestPostLoading.classList.remove("flex");
    latestPostLoading.classList.add("hidden");

    lastesPostCards.classList.remove("none");
    lastesPostCards.classList.add("flex");

    lastestPostData.forEach(element => {

        const card = document.createElement("div");
        card.classList.add("card", "w-96", "p-6", "border-2", "borader-[#12132D0D]");
        card.innerHTML = `
                    <figure>
                        <img class="rounded-lg"
                            src="${element.cover_image}" alt="Shoes" />
                    </figure>
                    <div class="mt-4">

                        <div class="flex gap-2 mb-3">
                            <div>
                                <img src="./assets/icons/publish-date.svg" alt="">
                            </div>
                            <div>
                                <p class="text-[#12132D99]">
                                ${element.author.posted_date ? element.author.posted_date : "No publish date"}
                                </p>
                            </div>
                        </div>

                        <div class="font-extrabold text-[18px] text-[#12132D] mb-3">
                            <p>
                                ${element.title}
                            </p>
                        </div>

                        <div class="text-[#12132D99] mb-3">
                            <p>
                            ${element.description}
                            </p>
                        </div>

                        <div class="flex gap-3 items-center">
                            <div>
                                <img class="w-11 h-11 rounded-full" src="${element.profile_image}" alt="">
                            </div>
                            <div>
                                <p class="text-[#12132D]">
                                ${element.author.name}
                                </p>
                                <p class="text-[#12132D99] text-[14px]">
                                ${element.author.designation ? element.author.designation : "Unknown"}
                                </p>
                            </div>
                        </div>

                    </div>
        `;

        lastesPostCards.appendChild(card);
    });
}, 2000);

setTimeout(normal = async () => {

}, 2000);

const serachBtn = document.getElementById("serachBtn");
serachBtn.addEventListener("click", function () {
    const search = document.getElementById("search");
    const searchValue = search.value;
    discussSection(searchValue);
    search.value = "";
});