// Les éléments à manipuler dans le DOM
const input_commune = document.querySelector("#Commune");
const input_rayon = document.querySelector("#Rayon");
const select_metier = document.querySelector("#metier");
const button_valider = document.querySelector("#valider");
const section_description = document.querySelector("#description");
const section_message = document.querySelector("#message");
const section_propositions = document.querySelector("#propositions");
const section_offres = document.querySelector("#offres");
const button_minus = document.querySelector("#minus");
const button_plus = document.querySelector("#plus");

// Description des métiers
const metiers = {
    "M1802":{
        "titre":"Expertise et support en systèmes d'information",
        "desc":[
            "Conseille la direction informatique, télécoms de l'entreprise sur des évolutions et solutions en techniques nouvelles (choix de logiciel, matériel, réseau, ...), dans un objectif d'optimisation et d'adéquation entre les moyens informatiques et télécoms et les besoins des utilisateurs",
            "Assure un rôle de support (sécurité, qualité, méthode, ...) et d'assistance technique auprès des équipes informatiques ou télécoms (production, développement) de l'entreprise, des utilisateurs, des clients",
            "Veille au respect des normes et des procédures de qualité et de sécurité",
            "Peut intervenir directement sur tout ou partie d'un projet qui relève de son domaine d'expertise"
        ],
        "url":"https://candidat.pole-emploi.fr/marche-du-travail/fichemetierrome?metier=M1802"
    },
    "M1803":{
        "titre":"Direction des systèmes d'information",
        "desc":[
            "Dirige une organisation, des services, des structures informatiques, télécoms et fixe les évolutions des systèmes d'information et de télécommunications, selon les besoins fonctionnels et la stratégie de l'entreprise",
            "Supervise la conception, la mise en oeuvre et le maintien opérationnel (qualité, sécurité, fiabilité, coûts, délais) des prestations informatiques produites et des systèmes d'information et télécoms",
            "Supervise et pilote des projets en systèmes d'information"
        ],
        "url":"https://candidat.pole-emploi.fr/marche-du-travail/fichemetierrome?metier=M1803"
    },
    "M1805":{
        "titre":"Études et développement informatique",
        "desc":[
            "Conçoit, développe et met au point un projet d'application informatique, de la phase d'étude à son intégration, pour un client ou une entreprise selon des besoins fonctionnels et un cahier des charges",
            "Peut conduire des projets de développement",
            "Peut coordonner une équipe"
        ],
        "url":"https://candidat.pole-emploi.fr/marche-du-travail/fichemetierrome?metier=M1805"
    },
    "M1806":{
        "titre":"Conseil et maîtrise d'ouvrage en systèmes d'information",
        "desc":[
            "Traduit les besoins fonctionnels d'un système d'information d'un commanditaire, selon les objectifs du domaine métier (comptable, ressources humaines, logistique, commercial, production...) et les contraintes économiques et logistiques",
            "Négocie avec les informaticiens les composantes d'une application et d'un outil logiciel, tout au long de la conception et de la réalisation, dans l'intérêt de l'entreprise et des utilisateurs finaux",
            "Assiste la maîtrise d'ouvrage dans la définition des besoins, des solutions à mettre en oeuvre et leurs intégrations dans le système d'information de l'entreprise. Participe à des projets de mise en oeuvre de système d'information (implémentation)",
            "Peut superviser un projet maîtrise d'ouvrage"
        ],
        "url":"https://candidat.pole-emploi.fr/marche-du-travail/fichemetierrome?metier=M1806"
    },
};

// Affichage des descriptions des métiers dans l'application
select_metier.addEventListener("change", function(){
    section_description.innerHTML = "";
    document.querySelector("#arrow").innerHTML = "";
    if (Object.keys(metiers).includes(select_metier.value)){
        document.querySelector("#arrow").innerHTML = "<i class=\"ms-5 mt-5 pt-4 fa-2x fa-solid fa-angles-right\"></i>";
        let codeHTMLDesc = "<article class=\"card text-white mb-3\">" 
        + "<div class=\"card-header\" id=\"cardHeader\"><i class=\"fa-solid fa-briefcase text-light\"></i> Description du métier</div>" 
        + "<div class=\"cardBodyFooter card-body\">" 
        + "<h5 class=\"card-title\">" + metiers[select_metier.value]["titre"] + " (Code ROME " + select_metier.value + ")"
        + "</h5>"
        + "</div>"
        + "<ul class=\"card-text list-group list-group-flush\">";
        for(const d of metiers[select_metier.value]["desc"]){
            codeHTMLDesc += "<li class=\"list-group-item\">" + d + "</li>";
        }
        codeHTMLDesc += "</ul>"
        + "<div class=\"card-body\">"
        + "<a href=\"" + metiers[select_metier.value]["url"] + "\" class=\"card-link\">Plus de détails ...</a>"
        + "</div>"
        + "</article>";    
        section_description.innerHTML = codeHTMLDesc;
    }
});

// Liste des communes dans les départements d'outre-mer à exclure des recherches
const codesInseeOutreMer = [];
for(let i = 97101; i <= 97122; i++)     codesInseeOutreMer.push("" + i);
for(let i = 97124; i <= 97126; i++)     codesInseeOutreMer.push("" + i);
for(let i = 97128; i <= 97134; i++)     codesInseeOutreMer.push("" + i);
for(let i = 97201; i <= 97234; i++)     codesInseeOutreMer.push("" + i);
for(let i = 97301; i <= 97314; i++)     codesInseeOutreMer.push("" + i);
for(let i = 97352; i <= 97358; i++)     codesInseeOutreMer.push("" + i);
for(let i = 97360; i <= 97362; i++)     codesInseeOutreMer.push("" + i);
for(let i = 97401; i <= 97424; i++)     codesInseeOutreMer.push("" + i);
for(let i = 97501; i <= 97502; i++)     codesInseeOutreMer.push("" + i);
for(let i = 97601; i <= 97617; i++)     codesInseeOutreMer.push("" + i);
codesInseeOutreMer.push("97701");
codesInseeOutreMer.push("97801");
for(let i = 98611; i <= 98613; i++)     codesInseeOutreMer.push("" + i);
for(let i = 98711; i <= 98758; i++)     codesInseeOutreMer.push("" + i);
for(let i = 98801; i <= 98833; i++)     codesInseeOutreMer.push("" + i);
codesInseeOutreMer.push("98901");
codesInseeOutreMer.push("99138");

// Définition des comportements des boutons + et -
// Si on clique une seule fois sur les boutons : incrémente/décrémente le rayon de 1
// Si on maintien les boutons enfoncés : incrémente/décrémente de 1 chaque 110 millisecondes le rayon
// Si on relâche le clic sur les boutons : arrêt de l'incrémentation/décrémentation 

button_minus.addEventListener("mousedown", function(){
    let bool = true;
    const timer = setInterval(function(){
        if (input_rayon.value > 0)      input_rayon.value --;
    }, 110);
    button_minus.addEventListener("mouseup", function(){
        if (bool === true){
            clearInterval(timer);
            bool = false;
        }  
    });
});

button_plus.addEventListener("mousedown", function(){
    let bool = true;
    const timer = setInterval(function(){
        if (input_rayon.value < 100)      input_rayon.value ++;
    }, 110);
    button_plus.addEventListener("mouseup", function(){
        if (bool === true){
            clearInterval(timer);
            bool = false;
        }
    });
});

let url_verif_commune_base = "https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_hexasmal&rows=10000";
for(const code of codesInseeOutreMer){
    url_verif_commune_base += "&exclude.code_commune_insee=" + code;     
}
button_valider.addEventListener("click", function(e){
    e.preventDefault();
    section_offres.innerHTML = "";
    section_message.innerHTML = "";
    section_propositions.innerHTML = "";
    if (input_commune.value === "" || select_metier.value === "") {
        section_message.innerHTML = "<div class=\"alert alert-danger alert-dismissible\" role=\"alert\">"
        + "Veuillez saisir le <strong>nom de la commune</strong> et choisir le <strong>code ROME</strong>"
        + "<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>"
        + "</div>";
    } 
    
    else {
        const val_commune = input_commune.value.toUpperCase();
        const val_code_rome = select_metier.value;
        const nom_metier = select_metier.selectedOptions[0].innerHTML;
        // Requête à l'API de La Poste (sous la licence Open License v2.0) pour récupérer les infos concernant les communes
        const xhr_verif_commune = new XMLHttpRequest();
        const url_verif_commune = url_verif_commune_base + "&q=" + val_commune;
        xhr_verif_commune.open("get", url_verif_commune);
        xhr_verif_commune.onreadystatechange = function() {
            if (xhr_verif_commune.readyState === 4 && xhr_verif_commune.status === 200) {
                const answer_verif_commune = JSON.parse(xhr_verif_commune.responseText);
                let codeInseeSelec = "";
                let latitudeSelec = "";
                let longitudeSelec = "";
                const communes = {
                    "codesInsee" : [],
                    "nomCommunes" : [],
                    "latitudes" : [],
                    "longitudes" : []
                };
                // récupérer toutes les infos sur les communes qui matchent avec le texte qu'a saisi l'utilisateur 
                //(sans doublons des noms ni des codes INSEE)
                for (const com of answer_verif_commune.records){
                    if ( (! communes.codesInsee.includes(com.fields.code_commune_insee) )
                        && ( (com.fields.libelle_d_acheminement === val_commune)
                            || ( val_commune === com.fields.nom_de_la_commune) 
                        )
                    ) { 
                        communes.nomCommunes.push(com.fields.nom_de_la_commune);
                        communes.codesInsee.push(com.fields.code_commune_insee);
                        communes.latitudes.push(com.fields.coordonnees_gps[0]);
                        communes.longitudes.push(com.fields.coordonnees_gps[1]);
                    }
                }
                if (communes.codesInsee.length === 0){  // si aucune correspondance
                    section_message.innerHTML = "<div class=\"alert alert-danger alert-dismissible\" role=\"alert\">"
                    + "La commune <strong>" + val_commune + "</strong> n'existe pas. "
                    + "</div>";
                    const propositions = [];
                    // vérifier si certains noms de communes contiennent le texte saisi
                    for (const com of answer_verif_commune.records) {
                        if ( (! propositions.includes(com.fields.nom_de_la_commune))
                           && (com.fields.nom_de_la_commune.includes(val_commune))
                        ){
                            propositions.push(com.fields.nom_de_la_commune);
                        }
                    }
                    if (propositions.length === 0){     // Si aucune correspondance -> la commune n'existe pas 
                        section_message.querySelector("div").innerHTML += "<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>";
                    }
                    else {      // Sinon -> afficher les noms de communes ayant des correspondances avec le texte saisi
                        propositions.sort();
                        section_message.querySelector("div").innerHTML += "Voici des propositions"
                        + "<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>";
                        section_propositions.innerHTML += "<select class=\"form-select mt-3 border-dark border-2\">"
                        + "<option class=\"bg-dark text-light\" value=\"\">Choisir un nom de commune</option>"
                        + "</select>"; 
                        const select = section_propositions.querySelector("select");
                        for (const p of propositions){
                            select.innerHTML += "<option class=\"text-light bg-dark\" value=\"" + p + "\">" + p + "</option>";
                        }
                        select.addEventListener("change", function(e){
                            input_commune.value = e.currentTarget.value;
                        });
                    }

                } else if(communes.codesInsee.length === 1){    // S'il n'y a qu'une seule correspondance -> c'est bien une commune
                    codeInseeSelec = communes.codesInsee[0];
                    latitudeSelec = communes.latitudes[0];
                    longitudeSelec = communes.longitudes[0];

                } else{   // S'il y a plusieurs correspondances -> il y a plusieurs communes portant le nom saisi par l'utilisateur ->
                    // afficher toutes les correspondances
                    section_message.innerHTML = "<div class=\"alert alert-danger alert-dismissible\" role=\"alert\">"
                    + "Plusieurs communes portent le nom <strong>" + val_commune + "</strong>. Veuillez choisir parmi cette liste"
                    + "<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>"
                    + "</div>";
                    const propositions = [];
                    for (const com of communes.nomCommunes){
                        propositions.push(com);
                    }

                    propositions.sort();
                    section_propositions.innerHTML += "<select class=\"form-select mt-3 border-dark border-2\">"
                    + "<option class=\"text-light bg-dark\" value=\"\">Choisir un nom de commune</option>"
                    + "</select>"; 
                    const select = section_propositions.querySelector("select");
                    for (const p of propositions){
                        select.innerHTML += "<option class=\"text-light bg-dark\" value=\"" + p + "\">" + p + "</option>";
                    }
                    select.addEventListener("change", function(e){
                        input_commune.value = e.currentTarget.value;
                    });
                }

                if(section_message.innerHTML === ""){
                    const val_rayon = (input_rayon.value === "0")?"1":input_rayon.value;
                    // Requête à l'API Alternance du gouvernement (sous la licence Etalab v2.0) pour récupérer les infos concernant les offres d'alternance
                const xhr_offres = new XMLHttpRequest();
                const url_offres = "https://labonnealternance.apprentissage.beta.gouv.fr/api/V1/jobs?romes=" + val_code_rome
                + "&insee=" + codeInseeSelec
                + "&latitude=" + latitudeSelec + "&longitude=" + longitudeSelec
                + "&radius=" + val_rayon
                + "&sources=offres&caller=vivien.andriampenomalaza%40etu.univ-tlse2.fr";
                xhr_offres.open("get", url_offres);
                xhr_offres.onreadystatechange = function() {
                    if (xhr_offres.readyState === 4 && xhr_offres.status === 200) {
                        const answer_offres = JSON.parse(xhr_offres.responseText);
                        let code_HTML_offres = "";
                        if(answer_offres.peJobs.results.length == 0) {  // aucun résultat pour la commune choisie
                            section_message.innerHTML = "<div class=\"alert alert-info alert-dismissible\" role=\"alert\">"
                            + "Aucune offre d'alternance pour le métier de </br><strong>" + nom_metier + "</strong> </br>dans la commune de <strong>" + val_commune + "</strong>"
                            + "<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>"
                            + "</div>";
                        } else {    
                            section_offres.innerHTML = "<h5 class=\"text-dark\">Résultats des recherches</h5>";
                            let cpt = 1;
                            for (const offre of answer_offres.peJobs.results){
                                // entreprise, contrat, durée et contact peuvent ne pas être précisés dans certaines offres
                                const entreprise = ( (offre.company === null || offre.company.name === undefined)?"":("Entreprise : <strong>" + offre.company.name + "</strong></br>") );
                                const contrat = ( (offre.contractDescription === null || offre.contractDescription === undefined)?"":("Type de contrat : <strong>" + offre.contractDescription + "</strong></br>") );
                                const duree = ( (offre.duration === null || offre.duration === undefined)?"":("Durée : <strong>" + offre.duration + "</strong></br>") );
                                const contact = ( ( (offre.contact === null) || ( offre.contact.name === undefined || offre.contact.info === undefined) )
                                ?"":("Contact : " + offre.contact.name + "</br>" + offre.contact.info) + "</br>"); 
                                const descMissions = offre.job.description.replaceAll("\n", "</br>") + "</br>";
                                const ville = offre.place.city + "</br>";
                                const url = "<a href=\"" + offre.url + "\">Plus de détails ...</a>";
                                code_HTML_offres += "<article class=\"accordion-item\">"    
                                + "<h2 class=\"accordion-header\" id=\"heading" + cpt + "\" >" 
                                + "<button class=\"accordion-button accordionHeader bg-light text-dark\" type=\"button\" data-bs-toggle=\"collapse\""
                                + " data-bs-target=\"#collapse" + cpt + "\" aria-expanded=\"true\">"
                                + offre.title
                                + "</button>"
                                + "</h2>"
                                + "<div id=\"collapse" + cpt + "\" class=\"collapse\" aria-labelledby=\"heading" + cpt + "\" data-bs-parent=\"#offres\">"
                                + "<div class=\"accordion-body bg-dark text-light\">"
                                + entreprise
                                + contrat
                                + duree
                                + ville
                                + descMissions
                                + contact
                                + url
                                + "</div>"
                                + "</div>"
                                + "</article>";
                                cpt++;
                            }
                            section_offres.innerHTML += code_HTML_offres;
                        }
                    }
                };
                xhr_offres.send();
                }
            }
        };
        xhr_verif_commune.send();
    }
});