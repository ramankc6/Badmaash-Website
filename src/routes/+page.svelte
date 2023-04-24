
<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    let index = 0.0
    let bgBody
    let gray = 0
    let black = 0


    onMount(() => {
        loadingFunc()
    });

    function loadingFunc() {
        index += 0.01
        black = index * 100
        if (index < 1) {
            setTimeout(loadingFunc, 100 * index);
        }
        else {
            setTimeout(() => goto('/home'), 500);
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Proza+Libre:wght@400;700&display=swap');
    .imgDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        z-index: 100;
        position: fixed;
        width: 100%;
        flex-direction: column;
    }
    img {
        width: 100%;
        max-width: 500px;
    }
    .mainDiv {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: flex-end;
        position: fixed;
        background-color: #000000;
        top: 0;
        left: 0;
    }

    .square {
        width: 100%;
        height: 0%;
        background-color: #2D2727;
        position: fixed;
        z-index: 0;
    }
    .pertLoaded {
        font-size: 5rem;
        color: white;
        margin-top: 1rem;
        font-family: 'Proza Libre', sans-serif;
    }
    .warningText {
        font-size: 2rem;
        color: white;
        margin-top: 1rem;
        font-family: 'Proza Libre', sans-serif;
    }
    /* body {
        background-image: linear-gradient(#000000 50%, gray 50%);
    } */

</style>
{#key gray}
<div class = 'mainDiv'>
    <div class = 'square' style="height: {black}%;"></div>
</div>
{/key}
<div class = 'imgDiv'>
    <a href = '/home'><img src = 'logo.png' alt = 'Logo'></a>
    <p class = 'pertLoaded'>{Math.round(index * 100)}%</p>
    <p class = 'warningText'>This is an Unoffical Website.</p>
</div>