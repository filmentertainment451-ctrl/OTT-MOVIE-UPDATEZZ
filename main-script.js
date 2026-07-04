<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Updates</title>
    <style>
        /* (Same CSS as before, keep it as is) */
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #121212;
            color: #fff;
        }
        nav {
            background: rgba(18, 18, 18, 0.9);
            position: fixed;
            width: 100%;
            top: 0;
            display: flex;
            justify-content: space-between;
            padding: 1rem 2rem;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }
        nav a {
            color: #fff;
            text-decoration: none;
            margin: 0 1rem;
            font-weight: bold;
        }
        nav a:hover {
            color: #ff0000;
        }
        .hero {
            background: url('hero-image.jpg') no-repeat center center/cover;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        .hero h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
        }
        .hero p {
            font-size: 1.5rem;
            max-width: 600px;
        }
        .updates {
            padding: 4rem 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        .movie {
            background: #1e1e1e;
            padding: 1rem;
            border-radius: 8px;
            text-align: center;
        }
        .movie img {
            width: 100%;
            border-radius: 8px;
        }
        .movie h3 {
            margin: 1rem 0;
        }
        .movie p {
            font-size: 0.9rem;
            color: #ccc;
        }
        footer {
            background: #0d0d0d;
            text-align: center;
            padding: 2rem;
            margin-top: 2rem;
        }
        /* Scroll to top button styles */
        #scrollTopBtn {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: #ff0000;
            color: #fff;
            border: none;
            padding: 1rem;
            border-radius: 50%;
            cursor: pointer;
            font-size: 2rem;
            display: none;
            z-index: 100;
        }
    </style>
</head>
<body>
    <nav>
        <div class="logo">MovieUpdates</div>
        <div>
            <a href="#">Home</a>
            <a href="#">Genres</a>
            <a href="#">Trending</a>
            <a href="#">Contact</a>
        </div>
    </nav>
    <section class="hero">
        <div>
            <h1>Welcome to Movie Updates</h1>
            <p>Your daily source of the latest movies and trends.</p>
        </div>
    </section>
    <section class="updates">
        <div class="movie">
            <img src="movie1.jpg" alt="Movie 1">
            <h3>Movie Title 1</h3>
            <p>Brief description of the movie goes here.</p>
        </div>
        <div class="movie">
            <img src="movie2.jpg" alt="Movie 2">
            <h3>Movie Title 2</h3>
            <p>Brief description of the movie goes here.</p>
        </div>
        <div class="movie">
            <img src="movie3.jpg" alt="Movie 3">
            <h3>Movie Title 3</h3>
            <p>Brief description of the movie goes here.</p>
        </div>
    </section>
    <button id="scrollTopBtn" title="Go to top">↑</button>

    <footer>
        &copy; 2026 Movie Updates. All rights reserved.
    </footer>

    <script>
        // Scroll to top button logic
        const scrollBtn = document.getElementById("scrollTopBtn");
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        };
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Dynamic updates
