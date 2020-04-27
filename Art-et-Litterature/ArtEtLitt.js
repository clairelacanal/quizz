new Vue({
    el: '#artEtLitterature',
    data: {
        mainTitre: 'Le Culture Quizz',
        nomDeSection: 'Arts et Litterature',
        msg: 'SUIVANT',
        reponse: '',
        question: 'Question',
        msgValider: 'Valider',
        questionsEtReponses: [
            {
                question: 'Question',
                index: 1,
                poserQuestion: 'Quel artiste a peint : Les raboteurs de parquets?',
                reponsesPossibles: ['Pierre-Auguste Renoir', 'Gustave Caillebotte', 'Georges Seurat', ' Frédéric Bazille'],
                indexOfReponse: 1
            },

            {
                question: 'Question',
                index: 2,
                poserQuestion: 'Comment Auguste Rodin a-t-il baptisé son oeuvre ?',
                reponsesPossibles: ['Le Penseur', 'Le Songeur', 'La Méditation', ' Le Siffleur'],
                indexOfReponse: 0
            },

            {
                question: 'Question',
                index: 3,
                poserQuestion: 'Quel peintre représentant du mouvement américain du pop art a représenté Jackie Kennedy ?',
                reponsesPossibles: ['Tom Wesselmann', 'Roy Lichtenstein', 'Andy Warhol', ' Jean-Michel Basquiat'],
                indexOfReponse: 2
            },


            {
                question: 'Question',
                index: 4,
                poserQuestion: 'Parmi ces livres, lequel n\'a pas été écrit par François Rabelais ?',
                reponsesPossibles: ['Gargantua', 'Le Tiers Livre', 'Le Roman de Renart', ' Pantagruel'],
                indexOfReponse: 2
            },

            {
                question: 'Question',
                index: 5,
                poserQuestion: 'Parmi ces oeuvres de Pierre Corneille, laquelle a été écrite en première ?',
                reponsesPossibles: ['L\'illusion comique', 'Polyeucte', 'Le Cid', ' Horace'],
                indexOfReponse: 0
            },

            {
                question: 'Question',
                index: 6,
                poserQuestion: 'Parmi les auteurs ci-dessous, lequel ne fait pas partie du mouvement littéraire du Romantisme ?',
                reponsesPossibles: ['Gustave Flaubert', 'Les Frères Grimm', 'Chateaubriand', ' Victor Hugo'],
                indexOfReponse: 1
            },

            {
                question: 'Question',
                index: 7,
                poserQuestion: 'Quel peintre fit scandale avec "L\'Origine du Monde", peint en 1866 ?',
                reponsesPossibles: ['Gustave Courbet', 'Edouard Manet', 'André Derain', ' Georges Seurat'],
                indexOfReponse: 0
            },

            {
                question: 'Question',
                index: 8,
                poserQuestion: 'Quelle est l\'origine de "Rococo", le nom d\'un mouvement artistique du XVIIIème siècle ?',
                reponsesPossibles: [' Du chant du coq', 'Du nom d\'un peintre italien', "Du mot 'rocaille'", 'Du nom d\'un chien'],
                indexOfReponse: 2
            },

            {
                question: 'Question',
                index: 9,
                poserQuestion: 'Parmi ces livres, lequel n\'a pas été écrit par Charles Dickens ?',
                reponsesPossibles: [' David Copperfield', 'La ferme des animaux', 'Un chant de Noël', ' Oliver Twist'],
                indexOfReponse: 1
            },

            {
                question: 'Question',
                index: 10,
                poserQuestion: 'Quel poème de Lamartine contient les vers suivants : Ô temps ! suspends ton vol, et vous, heures propices !/ Suspendez votre cours',
                reponsesPossibles: [' L\'Horloge', ' Le Papillon', 'Le Lac', ' La Marée'],
                indexOfReponse: 2
            },

            {
                question: 'Question',
                index: 11,
                poserQuestion: 'Quel romancier a créé le personnage "Eugène de Rastignac" ?',
                reponsesPossibles: [' François Mauriac', ' Honoré de Balzac', 'Gérard de Nerval', ' Alfred de Musset'],
                indexOfReponse: 1
            },

            {
                question: 'Question',
                index: 12,
                poserQuestion: 'Dans les années 60, les temples égyptiens d\'Abou Simbel ont été déplacés. Pourquoi ?',
                reponsesPossibles: [' Pour éviter l\'ensablement', 'Pour éviter leur inondation par le Nil', 'A cause de la construction du barrage d\'Assouan', ' A cause d\'un virus'],
                indexOfReponse: 1
            },

            {
                question: 'Question',
                index: 13,
                poserQuestion: 'En 1974, dans quel pays les archéologues ont-ils découvert une armée de milliers de statues en terre cuite ?',
                reponsesPossibles: ['En Chine', 'Au Japon', 'En Mongolie', 'Au Laos'],
                indexOfReponse: 0
            },

            {
                question: 'Question',
                index: 14,
                poserQuestion: 'De quelle nationalité est l\'écrivain Paulo Coelho ?',
                reponsesPossibles: ['Italienne', 'Espagnole', 'Bresilienne', 'Portugaise'],
                indexOfReponse: 2
            },

            {
                question: 'Question',
                index: 15,
                poserQuestion: 'Où Harry Potter et ses amis vont-ils pour libérer Sirius Black qui serait emprisonné par Voldemort ?',
                reponsesPossibles: ['La forêt interdite', 'La salle sur demande', 'Le chemin de Travers', 'Le ministère de la magie'],
                indexOfReponse: 3
            },

            {
                question: 'Question',
                index: 16,
                poserQuestion: 'A quelle déesse était dédié le Temple d\'Ephèse qui constitue la quatrième merveille du monde antique ?',
                reponsesPossibles: ['Athéna', 'Hygie', '  Artémis', ' Aphrodite'],
                indexOfReponse: 2
            },

            {
                question: 'Question',
                index: 17,
                poserQuestion: 'Qu\'est-ce qu\'un polyptique ?',
                reponsesPossibles: ['Une pièce de porcelaine', 'Une peinture à l\'huile', 'Un tableau à plusieurs volets', 'Un dessin gravé sur la pierre'],
                indexOfReponse: 2
            },

            {
                question: 'Question',
                index: 18,
                poserQuestion: 'Dali avait une obsession pour un animal, lequel ?',
                reponsesPossibles: ['Le lézard', 'La mouche', 'Le scarabé', 'La fourmi'],
                indexOfReponse: 3
            },

            {
                question: 'Question',
                index: 19,
                poserQuestion: 'De quel roman "Julien Sorel" est-il le personnage principal ?',
                reponsesPossibles: ['"Des souris et des hommes" de  John Steinbeck', '"Bel-Ami" de Guy de Maupassant', 'Le Rouge et le Noir" de Stendhal', ' "La Dame de chez Maxim" de Georges Feydeau'],
                indexOfReponse: 2
            },

            {
                question: 'Question',
                index: 20,
                poserQuestion: 'Dans le poème « Voyelles » de quelle couleur est le A?',
                reponsesPossibles: ['Gris', 'Noir', 'Blanc', 'Bleu'],
                indexOfReponse: 1
            },

        ],
    },
    methods: {

        clickReponse: function (choixQuestion, choixReponse) {
            let questionReponseChoisie = this.questionsEtReponses[choixQuestion];
            let bonneReponse = questionReponseChoisie.reponsesPossibles[questionReponseChoisie.indexOfReponse];
            if (bonneReponse == choixReponse) {
                this.reponse = 'Bravo.' + " " + 'C\'est la bonne réponse !';
                document.getElementById("reponseFinale").style.color = '#27ae60';
                document.getElementById("reponseFinale").style.fontWeight = 'bold';
            } else {
                this.reponse = 'Perdu !' + " " + "La bonne réponse était " + bonneReponse;
                document.getElementById("reponseFinale").style.color = '#e74c3c';
                document.getElementById("reponseFinale").style.fontWeight = 'bold';

            }

        }

    }

})

let counter = {};
window.addEventListener("load", function () {
    //COUNTDOWN IN SECONDS
    counter.end = 31;

    //Mon container
    counter.div = document.getElementById("compteur-numero");

    //Start if no past end date
    if (counter.end > 0) {
        counter.ticker = setInterval(function () {
            //Stop if passed end time
            counter.end--;
            if (counter.end <= 0) {
                clearInterval(counter.ticker);
                counter.end = 0;
            }

            //Calculate remaining time
            let count = counter.end;

            //Update HTML
            counter.div.innerHTML = counter.end;
        }, 1000);
    }
})

