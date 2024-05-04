document.addEventListener("DOMContentLoaded",(event)=>{

    setTimeout(()=>{
        document.querySelector("#load-iframe-map").innerHTML = `<iframe class="contact__iframe"
        frameborder="0"
        scrolling="none"
        marginheight="0"
        marginwidth="0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.818566342606!2d-3.9373863235869146!3d40.69999333834996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4170452e7804eb%3A0x3dbfa27ce0e39b59!2sCerceda-C%C2%BABoalo!5e0!3m2!1ses!2ses!4v1713473574268!5m2!1ses!2ses"
    ></iframe>`;
    },1000);
});