<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Unit 1</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&family=Roboto:wght@100&display=swap" rel="stylesheet">
    
    <style>
        /* Loader Styles */
        #preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }

        .spinner {
            width: 70px;
            height: 70px;
            border: 10px solid #f3f3f3;
            border-top: 10px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <!-- Preloader -->
    <div id="preloader">
        <div class="spinner"></div>
        <p>...Đang tải tài nguyên...</p>
    </div>

    <main class="container">
        <section class="main-video">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="https://kademy-software.github.io/handtalker/">HandTalker</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <button class="btn btn-primary" id="complete-lesson-btn" role="button">Hoàn thành bài học</button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="https://kademy-software.github.io/handtalker/">Trang chủ</a>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Tìm kiếm từ vựng" aria-label="Tìm kiếm từ vựng">
                      <a class="btn btn-primary" href="https://kademy-software.github.io/tu-dien-ngon-ngu-ki-hieu/" role="button">Tìm</a> <br>
                    </form>
                  </div>
                </div>
              </nav>
              <div class="main-video">
                  <video src="videos/l1.mp4" controls preload="metadata"></video>
                  <div class="title">A</div>
                  <div class="mota"></div>
                 
              </div>
        </section>

        <section class="video-playlist">
            <h3 class="title">Danh sách video trong chủ đề</h3>
            <p>27 chữ cái &nbsp;</p>
            <div class="videos">
                <!-- Video elements will be inserted here by JavaScript -->
            </div>
        </section>
    </main>
    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const preloader = document.getElementById('preloader');
            const mainVideo = document.querySelector('.main-video video');
            
            // Quản lý preloader
            function checkVideoLoaded() {
                if (mainVideo.readyState > 0) {
                    preloader.style.opacity = '0';
                    setTimeout(() => {
                        preloader.style.display = 'none';
                    }, 500);
                } else {
                    mainVideo.addEventListener('loadedmetadata', () => {
                        preloader.style.opacity = '0';
                        setTimeout(() => {
                            preloader.style.display = 'none';
                        }, 500);
                    });
                }
            }

            // Gọi hàm kiểm tra video
            checkVideoLoaded();
        });

        // Sự kiện nút hoàn thành bài học (giữ nguyên)
        document.getElementById('complete-lesson-btn').addEventListener('click', function () {
            fetch('connection.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'lesson_id=bai04'
            })
            .then(response => response.text())
            .then(data => alert(data))
            .catch(error => console.error('Error:', error));
        });
    </script>
</body>
</html>
