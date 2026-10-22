var ham = document.getElementById('ham-menu');
        var nav = document.getElementById('nav');
        var ham = document.getElementById('ham-menu');
        var exit = document.getElementById('cross');
        var header = document.getElementById('header');

        ham.addEventListener('click',function(e){
            nav.classList.remove('hide-mobile');
            header.classList.add('hide-mobile')
        });
        cross.addEventListener('click',function(e){
            nav.classList.add('hide-mobile');
            header.classList.remove('hide-mobile');
        });