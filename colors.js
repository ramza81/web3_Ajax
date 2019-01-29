var Body = {
    setColor: function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css("color", color);
    },

    setBodyBackroundColor: function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css("backgroundColor", color);
    }

}

var ATag = {
    setColor: function (color) {
        $('a').css("color", color);

        // var links = document.querySelectorAll('a');

        // links.forEach(el => {
        //     el.style.color = color;
        // });
    }            
}

// function setAColor(color) {
//     var links = document.querySelectorAll('a');

//     links.forEach(el => {
//         el.style.color = color;
//     });

//     // var i = 0;
//     // while (i < links.length){
//     //     links[i].style.color = color;
//     //     i = i + 1;
//     // }            
// }

// function setBodyColor(color) {
//     var target = document.querySelector('body');
//     target.style.color = color;
// }

// function setBodyBackroundColor(color) {
//     var target = document.querySelector('body');
//     target.style.backgroundColor = color;
// }

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        Body.setBodyBackroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        ATag.setColor('white');

    } else {
        Body.setBodyBackroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        ATag.setColor('blue');
    }
}