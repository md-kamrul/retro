const discussSection = async () => {
    const discuss = document.getElementById("discuss");

    const discussAPI = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const discussAPIData = await discussAPI.json();

    discussAPIData.posts.forEach(element => {
        const discussCard = document.createElement("div");
        discussCard.classList.add("card", "card-side", "bg-[#F3F3F5]", "hover:bg-[#797DFC1A]", "border-2", "border-transparent", "hover:border-[#797dfc9d]", "inter-font");
        discussCard.innerHTML = `
                        <div class="stat flex">

                            <!-- avatar design -->
                            <div class="text-secondary mt-5 ml-5">
                                <div class="avatar ${element.isActive?"online":"offline"}">
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

                                    <img class="cursor-pointer" src="./assets/icons/mark-as-read.svg" alt="">

                                </div>
                            </div>
                        </div>
        `;

        discuss.appendChild(discussCard);
        console.log(element.author.name);
    });
}

const lastestPost = async () => {
    const lastestPostAPI = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const lastestPostData = await lastestPostAPI.json();

    const lastesPostCards = document.getElementById("lastesPostCards");

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
}

discussSection();

lastestPost();