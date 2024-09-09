

<section class="flex">
    <div class="z-depth-1">.z-depth-1</div>
    <div class="z-depth-1-half">.z-depth-1-half</div>
    <div class="z-depth-2">.z-depth-2</div>
    <div class="z-depth-3">.z-depth-3</div>
    <div class="z-depth-4">.z-depth-4</div>
    <div class="z-depth-5">.z-depth-5</div>
</section>


<style>
    section {
        border-radius: 8px;
        border: 1px solid var(--grey);
        background: var(--bg);
        flex-wrap: wrap;
        padding: 16px;
    }

    div {
        width: 120px;
        height: 120px;
        background :var(--bg-darken);
        margin: 24px;
        display:flex; justify-content: space-around; align-items: center;
        color: var(--secondary);
        border-radius: 4px;
        font-family: JetBrains;
        font-size: 11px;
    }
</style>