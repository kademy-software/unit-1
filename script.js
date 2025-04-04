document.addEventListener('DOMContentLoaded', function() {
    const main_video = document.querySelector('.main-video video');
    const main_video_title = document.querySelector('.main-video .title');
    const video_playlist = document.querySelector('.video-playlist .videos');
    const video_mota = document.querySelector('.main-video .mota');

  
let data = [
    {
        'id': 'a1',
        'title': 'Introduce',
        'name': 'l1.mp4',
        'duration': '',
        'mota': 'No note.'
    },
    {
        'id': 'a2',
        'title': 'Number 1 - 10 ',
        'name': 'l2.mp4',
        'duration': '',
        'mota': 'No note.'
    },
    {
        'id': 'a3',
        'title': 'Reading Sign',
        'name': 'l3.mp4',
        'duration': '',
        'mota': 'Understanding sign language requires attention to facial expressions and body language, not just hand signs. Observing the entire body helps in grasping the intended message. As vocabulary increases, confidence in interpreting signs improves. It is essential to focus on the complete picture, combining gestures, facial expressions, and signs for better comprehension _ Understanding sign language goes beyond just the signs themselves; it involves observing facial expressions and body language for better comprehension. This holistic approach enhances your confidence and understanding over time.'
    },

   
];

    data.forEach((video, i) => {
        let video_element = `
            <div class="video" data-id="${video.id}">
                <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                <h3 class="title">${video.title}</h3>
                <p class="time">${video.duration}</p>
            </div>
        `;
        video_playlist.innerHTML += video_element;
    });

    let videos = document.querySelectorAll('.video');
    videos[0].classList.add('active');

    function loadVideo(video) {
        main_video.src = 'videos/' + video.name;
        main_video_title.innerHTML = video.title;
    }

    videos.forEach(selected_video => {
        selected_video.onclick = () => {
            videos.forEach(video => video.classList.remove('active'));
            selected_video.classList.add('active');

            let match_video = data.find(video => video.id == selected_video.dataset.id);
            loadVideo(match_video);
        };
    });

    // Load the first video by default
    loadVideo(data[0]);
});
