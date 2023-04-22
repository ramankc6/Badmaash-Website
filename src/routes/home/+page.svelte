
<script>
    import "./homeStyles.css"
</script>

<style>
    .homeBody {
    background-color: #DCD260;
    height: 100%;
    width: 100%;
    }
</style>


<body class = 'homeBody'>
    <!-- Nav Bar-->
    <div class = 'navContainer'>
        <div class = 'navItem'>
            <a href = '/'><img src = 'logo.png' alt = 'Logo'></a>
        </div>
        <div class = 'navItem'>
            <a href = '/about'>About</a>
        </div>
        <div class = 'navItem'>
            <a href = '/menu'>Menu</a>
        </div>
        <div class = 'navItem'>
            <a href = '/gallery'>Gallery</a>
        </div>
        <div class = 'navItem'>
            <a href = '/hours'>Hours</a>
        </div>
        <div class = 'navItem'>
            <a href = '/contact'>Contact</a>
        </div>
    </div>
    <!-- End Nav Bar-->

    <!--Home Text-->
    <div class = 'homeTextContainer'>
        <div class = 'homeText'>
        <p id = 'homeText1'>A taste of India</p>
        </div>
        <div class = 'homeText'>
        <p id = 'homeText2'>in the</p>
        </div>
        <div class = 'homeText'>
        <h1  id = 'homeText3'>heart of LA</h1>
        </div>
    </div>
    <!--End Home Text-->
    <div class = 'homeImageContainer'>
        <img class = 'homeImage' src = '/homeFood.png' alt = 'Home Food'>
    </div>
</body>