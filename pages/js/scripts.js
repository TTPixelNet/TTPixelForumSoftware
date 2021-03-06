$(document).ready(function(){
    $.firefly();

    $.ajax({
        url: "pages/js/player_count.txt",
        success: function(result) {
            $("h1").html(result + " players are <span class='online'>online</span>");
        },
        error: function() {
            $("h1").html("Could not fetch online players");
        }
    });
    jQuery.get('config.txt', function(data) {
        var lines = data.split('\n');
        $('h3').html(lines[0]);
    });
});

function toggleMenu(x){
    var panel = document.getElementById(x);
    if(panel.style.display == "none"){
        panel.style.display = "inline";
    } else {
        panel.style.display = "none";
    }
}

function closeMenu(x) {
    var panel = document.getElementById(x);
    panel.style.display = "none";
}

new Clipboard('#serverip');
