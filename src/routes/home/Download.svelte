<script lang="ts">
    const download = async () => {

        const response = await fetch(`/gros/home`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        })

        const blob = await response.blob()
        const url = window.URL || window.webkitURL
        const link = url.createObjectURL(blob)

        const a = document.createElement("a")
        a.setAttribute("download", `gros.css.zip`)
        a.setAttribute("href", link)
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
</script>



<button onclick={download} class="btn">
    <i class="micon s24">file_download</i>
    <span>CSS</span>
</button>



<style>
    button{background:var(--primary);color:#fff;padding:12px 24px;font-size:20px;}
    button:hover{background:var(--primary-darken);}
    button i{margin-right:8px;}
    /* button span{font-family:Gros;} */
</style>