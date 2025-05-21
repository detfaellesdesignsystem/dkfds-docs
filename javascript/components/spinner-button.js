document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('button-spinner-interactive').addEventListener('click', function(e) {
        if (this.classList.contains('spinner-active')) {
            e.preventDefault();
        }
        else {
            this.classList.add('spinner-active');
            this.querySelector('span').classList.add('text-hidden');
            this.setAttribute('aria-disabled', true);

            document.getElementById('button-spinner-interactive-message').textContent = 'Gemmer';

            let spinner = document.createElement('span');
            spinner.classList.add('spinner', 'spinner-small', 'spinner-light');
            this.prepend(spinner);

            setTimeout(() => {
                this.classList.remove('spinner-active');
                this.querySelector('.spinner').remove();
                this.querySelector('span').classList.remove('text-hidden');
                this.removeAttribute('aria-disabled');
                document.getElementById('button-spinner-interactive-message').textContent = 'Gemt';
            }, 3000);
        }
    });
});