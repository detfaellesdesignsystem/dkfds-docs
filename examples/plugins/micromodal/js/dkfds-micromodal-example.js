import $ from "jquery";
window.$ = window.jQuery = $;
import MicroModal from 'micromodal';

$(document).ready(function() {
    MicroModal.init({
        onShow: function(){
            document.getElementsByTagName('body')[0].classList.add('modal-active');
        },
        onClose: function(){
            document.getElementsByTagName('body')[0].classList.remove('modal-active');
        }
    }); //init all modals
});
