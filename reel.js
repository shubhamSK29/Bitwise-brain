document.addEventListener("DOMContentLoaded", function() {
    const shortsContainer = document.querySelector(".shorts-container");
    const uploadInput = document.getElementById("uploadVideo");
    const uploadBtn = document.querySelector(".upload-btn");

    uploadBtn.addEventListener("click", () => uploadInput.click());

    uploadInput.addEventListener("change", function(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            const videoURL = URL.createObjectURL(file);

            const videoWrapper = document.createElement("div");
            videoWrapper.classList.add("video-wrapper");

            const video = document.createElement("video");
            video.src = videoURL;
            video.controls = true;
            video.loop = true;
            video.autoplay = true;
            video.muted = false;

            videoWrapper.appendChild(video);
            shortsContainer.appendChild(videoWrapper);
        }
    });

    function handleScroll() {
        const videos = document.querySelectorAll(".video-wrapper video");

        videos.forEach((video) => {
            const rect = video.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                video.play();
            } else {
                video.pause();
            }
        });
    }

    shortsContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);
});
