<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Emma & Tony 2022</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Sacramento&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <style>
            body {
                background-color: mistyrose;
                /*font-family: 'Nunito';*/
                /*font-family: 'Parisienne';*/
                /*font-family: 'Sacramento';*/
                padding-top: 40px;
            }
            #registry {
                width: 100%;
            }
            #donation-track {
                border-bottom: 2px dashed #ddd;
                width: 400px;
                margin: auto;
            }
            #donation-plane {
                width: 40px;
                height: 40px;
                background: url('airplane.png') white;
                background-size: contain;
                transform: rotate(45deg);
                position: relative;
                top: 20px;
                left: 0;
                transition: all ease 4s;
            }
            #donation-plane.half {
                left: 360px;
            }
            .large {
                font-family: 'Parisienne';
                color: mistyrose;
                filter: brightness(65%);
                text-align: center;
                font-size: 60px;
            }
        </style>
        <script>
            // document.addEventListener('keypress', (e) => {
            //     if (e.code === 'Space') {
            //         document.getElementById('donation-plane').classList.toggle('half');
            //     }
            // });
        </script>
    </head>
    <body>
{{--        <div id="registry">--}}
{{--            <div id="donation-container">--}}
{{--                <div id="donation-track">--}}
{{--                    <div id="donation-plane"></div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
        <p class="large">Emma & Tony</p>
        <p class="large"></p>
        <p class="large">Wedding website coming soon...</p>
        <p class="large">Watch this space!</p>
    </body>
</html>
