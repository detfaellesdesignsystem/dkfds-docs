document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('button-spinner-interactive').addEventListener('click', function(e) {
        if (this.classList.contains('spinner-active')) {
            e.preventDefault();
        }
        else {
            this.classList.add('spinner-active');
            this.innerHTML = '<span class="spinner spinner-small spinner-light mr-3"></span>Gemmer...';
            setTimeout(() => {
                this.classList.remove('spinner-active');
                this.innerHTML = 'Gem';
            }, 3000);
        }
    });
});