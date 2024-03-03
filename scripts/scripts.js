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

lastestPost();