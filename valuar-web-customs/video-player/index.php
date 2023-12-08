<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,700;0,900;1,100;1,400;1,700;1,900&display=swap" rel="stylesheet" />
    <title>Valuar video player</title>
    <style>
      body {
        font-family: "Poppins", sans-serif;
      }
      .content-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        gap: 3rem;
      }
      .content-wrapper .video-player iframe {
        width: 100%;
        height: 400px;
      }
      .content-wrapper .video-list p {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0;
        padding: 1rem;
        border-top: 1px solid #e6e6e6;
        cursor: pointer;
      }
      .content-wrapper .video-list p:last-child {
        border-bottom: 1px solid #e6e6e6;
      }
      .content-wrapper .video-list p:hover,
      .content-wrapper .video-list p.active {
        background-color: #f1f3f5;
      }
      .content-wrapper .video-list p::before {
        content: "";
        display: block;
        background: url("play.svg") no-repeat;
        min-width: 20px;
        min-height: 20px;
      }
      @media screen and (min-width: 992px) {
        .content-wrapper {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    </style>
  </head>
  <body>
    <div class="content-wrapper">
      <div class="video-player" id="video-player"><p>Cargando...</p></div>
      <div class="video-selector">
        <div class="video-list" id="video-list"></div>
      </div>
    </div>
  </body>
  <script src="script.js"></script>
</html>