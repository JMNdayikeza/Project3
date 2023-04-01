const xhr = new XMLHttpRequest();
xhr.open("get", "https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr-esr-principaux-diplomes-et-formations-prepares-etablissements-publics&q=&rows=6100&refine.discipline_lib=Sciences+fondamentales+et+applications&refine.annee_universitaire=2020-21");
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const ans = JSON.parse(xhr.responseText);
        const labels = [];
        for (const r of ans.records) {
            const discipline = r.fields.sect_disciplinaire_lib;
            if ( !(labels.indexOf(discipline) in labels) ){
                labels.push(discipline);
            }
        }
        labels.sort();
        
        const colors = Array(labels.length);
        colors.fill("#2372A7");
        colors[labels.indexOf("Informatique")] = "#9BAE1C";
        const dataset = Array(labels.length);
        dataset.fill(0);
        for (const r of ans.records) {
            const discipline = r.fields.sect_disciplinaire_lib;
            const index = labels.indexOf(discipline);
            dataset[index] ++;
        };
        const data = {
            labels: labels,
            datasets: [{
            backgroundColor: colors,
            borderColor: "black",
            data: dataset,
            }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                scales:{
                    x:{
                        title:{
                            display : true,
                            text: "Secteur disciplinaire",
                            font: {
                                weight: "bold"
                            }
                        }
                    },
                    y:{
                        title:{
                            display : true,
                            text: "Nombres de formations",
                            font: {
                                weight: "bold"
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display : true,
                        text : "Les formations en informatique comparées aux autres formations en sciences fondamentales et application",
                    },
                    legend:{
                        display : false
                    }
                }
            }
        };

        const chart1 = new Chart(
            document.querySelector("#graphique1"),
            config
        );
    };
};
xhr.send();

const xhr2 = new XMLHttpRequest();
xhr2.open("get", "https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr-esr-principaux-diplomes-et-formations-prepares-etablissements-publics&q=&rows=6100&facet=sect_disciplinaire_lib&facet=annee_universitaire&refine.discipline_lib=Sciences+fondamentales+et+applications&refine.etablissement_type=%C3%89cole");
xhr2.onreadystatechange = function () {
    if(xhr2.readyState === 4 && xhr2.status === 200) {
        const ans = JSON.parse(xhr2.responseText);
        const annees = [];
        for (const a of ans.facet_groups[1].facets) {
            annees.push(a.name);
        }

        annees.sort();

        const secteurs_disc = [];
        for (const r of ans.records) {
            const discipline = r.fields.sect_disciplinaire_lib;
            if ( !(secteurs_disc.indexOf(discipline) in secteurs_disc) ){
                secteurs_disc.push(discipline);
            }
        }
        secteurs_disc.sort();

        const allData = {}
        for (const a of annees){
            allData[a] = {}
            for (const s of secteurs_disc) {
                allData[a][s] = {
                    "femmes" : 0,
                    "hommes" : 0
                }
            }
        }

        for (const r of ans.records) {
            if (typeof(r["fields"]["hommes"]) == "number") { 
                allData[r["fields"]["annee_universitaire"]][r["fields"]["sect_disciplinaire_lib"]]["hommes"] += r["fields"]["hommes"];
            } 
            if (typeof(r["fields"]["femmes"]) == "number") { 
                allData[r["fields"]["annee_universitaire"]][r["fields"]["sect_disciplinaire_lib"]]["femmes"] += r["fields"]["femmes"];
            }
        }

        const dataHommesInfo = [];
        const dataFemmesInfo = [];
        const dataAutresSecteursFemmes = [];
        const dataAutresSecteursHommes = [];
        
        for (const a in allData) { 
            dataHommesInfo.push(allData[a]["Informatique"]["hommes"]);
            dataFemmesInfo.push(allData[a]["Informatique"]["femmes"]);
            let totalAutresSecteursFemmes = 0;
            let totalAutresSecteursHommes = 0;
            
            for (const s in allData[a]) {
                if (s !== "Informatique") {
                    totalAutresSecteursFemmes += allData[a][s]["femmes"];
                    totalAutresSecteursHommes += allData[a][s]["hommes"]; 
                }
            }

            dataAutresSecteursFemmes.push(totalAutresSecteursFemmes);
            dataAutresSecteursHommes.push(totalAutresSecteursHommes);
        }
        
        const data2 = {
            labels: annees,
            datasets: [{
            borderColor: "#CA3C66",
            data: dataFemmesInfo,
            }]
        };

        const config2 = {
            type: 'line',
            data: data2,
            options: {
                scales:{
                    x:{
                        title:{
                            display : true,
                            text: "Année universitaire",
                            font: {
                                weight: "bold"
                            }
                        }
                    },
                    y:{
                        title:{
                            display : true,
                            text: "Effectif",
                            font: {
                                weight: "bold"
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display : true,
                        text : "L'évolution des effectifs des femmes en informatique dans les Ecoles",
                    },
                    legend:{
                        display : false
                    }
                }
            }
        };

        const chart2 = new Chart(
            document.querySelector("#graphique2"),
            config2
        );
        
        const data3 = {
            labels: annees,
            datasets: [{
            borderColor: "#26474E",
            data: dataHommesInfo,
            }]
        };

        const config3 = {
            type: 'line',
            data: data3,
            options: {
                scales:{
                    x:{
                        title:{
                            display : true,
                            text: "Année universitaire",
                            font: {
                                weight: "bold"
                            }
                        }
                    },
                    y:{
                        title:{
                            display : true,
                            text: "Effectif",
                            font: {
                                weight: "bold"
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display : true,
                        text : "L'évolution des effectifs des hommes en informatique dans les Ecoles",
                    },
                    legend:{
                        display : false
                    }
                }
            }
        };

        const chart3 = new Chart(
            document.querySelector("#graphique3"),
            config3
        );

        const data4 = {
            labels: annees,
            datasets: [{
            borderColor: "#EBACA2",
            data: dataAutresSecteursFemmes,
            }]
        };

        const config4 = {
            type: 'line',
            data: data4,
            options: {
                scales:{
                    x:{
                        title:{
                            display : true,
                            text: "Année universitaire",
                            font: {
                                weight: "bold"
                            }
                        }
                    },
                    y:{
                        title:{
                            display : true,
                            text: "Effectif",
                            font: {
                                weight: "bold"
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display : true,
                        text : "L'évolution des effectifs des femmes dans les autres secteurs des sciences fondamentales et application dans les Ecoles",
                    },
                    legend:{
                        display : false
                    }
                }
            }
        };

        const chart4 = new Chart(
            document.querySelector("#graphique4"),
            config4
        );

        const data5 = {
            labels: annees,
            datasets: [{
            borderColor: "#9AC8EB",
            data: dataAutresSecteursHommes,
            }]
        };

        const config5 = {
            type: 'line',
            data: data5,
            options: {
                scales:{
                    x:{
                        title:{
                            display : true,
                            text: "Année universitaire",
                            font: {
                                weight: "bold"
                            }
                        }
                    },
                    y:{
                        title:{
                            display : true,
                            text: "Effectif",
                            font: {
                                weight: "bold"
                            }
                        }
                    },
                },
                plugins: {
                    title: {
                        display : true,
                        text : "L'évolution des effectifs des hommes dans les autres secteurs des sciences fondamentales et application dans les Ecoles",
                    },
                    legend:{
                        display : false
                    }
                }
            }
        };

        const chart5 = new Chart(
            document.querySelector("#graphique5"),
            config5
        );
    };
};
xhr2.send();