//dokumen siap
$(document).ready(function() {
    $("#tampil_data").load('page/home.html');
    //jika home diklik
    $("#home").click(function(e) {
        e.preventDefault();
        $("#tampil_data").load('page/home.html');
    });

    $("#pribadi").click(function(e) {
        e.preventDefault();
        $("#tampil_data").load('page/pribadi.html');
    });

    $("#pendidikan").click(function(e) {
        e.preventDefault();
        $("#tampil_data").load('page/pendidikan.html');
    });

    $("#skill").click(function(e) {
        e.preventDefault();
        $("#tampil_data").load('page/skill.html');
    });

    $("#project").click(function(e) {
        e.preventDefault();
        $("#tampil_data").load('page/project.html');
    });

});
