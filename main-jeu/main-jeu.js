new Vue({
    el: '#mainPage',
    data: {
        mainTitre: 'Le Culture Quizz',
        msg: 'JE JOUE !'
    },
    methods: {
        shownCarre: function (id) {
            document.getElementById(id).style.opacity = 1;
        },
        shownCarreOut: function (id) {
            document.getElementById(id).style.opacity = 0.6;
        }
    }
})

