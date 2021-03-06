///********************TP1 */
// On crée l'élément conteneur
var mainDiv = document.createElement('div');
mainDiv.id = 'divTP1';

// On crée tous les nœuds textuels, pour plus de facilité
var textNodes = [
    document.createTextNode('Le '),
    document.createTextNode('World Wide Web Consortium'),
    document.createTextNode(', abrégé par le sigle '),
    document.createTextNode('W3C'),
    document.createTextNode(', est un '),
    document.createTextNode('organisme de standardisation'),
    document.createTextNode(' à but non-lucratif chargé de promouvoir la compatibilité des technologies du '),
    document.createTextNode('World Wide Web'),
    document.createTextNode('.')
];

// On crée les deux <strong> et les deux <a>
var w3cStrong1 = document.createElement('strong');
var w3cStrong2 = document.createElement('strong');

w3cStrong1.appendChild(textNodes[1]);
w3cStrong2.appendChild(textNodes[3]);

var orgLink = document.createElement('a');
var wwwLink = document.createElement('a');

orgLink.href = 'http://fr.wikipedia.org/wiki/Organisme_de_normalisation';
orgLink.title = 'Organisme de normalisation';
orgLink.appendChild(textNodes[5]);

wwwLink.href = 'http://fr.wikipedia.org/wiki/World_Wide_Web';
wwwLink.title = 'World Wide Web';
wwwLink.appendChild(textNodes[7]);

// On insère le tout dans mainDiv
mainDiv.appendChild(textNodes[0]);
mainDiv.appendChild(w3cStrong1);
mainDiv.appendChild(textNodes[2]);
mainDiv.appendChild(w3cStrong2);
mainDiv.appendChild(textNodes[4]);
mainDiv.appendChild(orgLink);
mainDiv.appendChild(textNodes[6]);
mainDiv.appendChild(wwwLink);
mainDiv.appendChild(textNodes[8]);

// On insère mainDiv dans le <body>
document.body.appendChild(mainDiv);

//////// ***************** TP 2  *********

// On crée l'élément conteneur
var mainDiv = document.createElement('div');
mainDiv.id = 'divTP2';

// On crée tous les nœuds textuels, pour plus de facilité
var languages = [
    document.createTextNode('JavaScript'),
    document.createTextNode('JScript'),
    document.createTextNode('ActionScript'),
    document.createTextNode('EX4')
];

// On crée le paragraphe
var paragraph = document.createElement('p');
var paragraphText = document.createTextNode('Langages basés sur ECMAScript :');
paragraph.appendChild(paragraphText);


// On crée la liste, et on boucle pour ajouter chaque item
var uList = document.createElement('ul'),
    uItem;

for (var i = 0, c = languages.length; i < c; i++) {
    uItem = document.createElement('li');

    uItem.appendChild(languages[i]);
    uList.appendChild(uItem);
}

// On insère le tout dans mainDiv
mainDiv.appendChild(paragraph);
mainDiv.appendChild(uList);

// On insère mainDiv dans le <body>
document.body.appendChild(mainDiv);
///////////// ***********  TP3 * ********* */

// On crée l'élément conteneur
var mainDiv = document.createElement('div');
mainDiv.id = 'divTP3';

// On place le texte dans des objets, eux-mêmes placés dans un tableau
// Par facilité, la création des nœuds textuels se fera dans la boucle
var languages = [{
    t: 'JavaScript',
    d: 'JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi coté serveur.'
}, {
    t: 'JScript',
    d: 'JScript est le nom générique de plusieurs implémentations d\'ECMAScript 3 créées par Microsoft.'
}, {
    t: 'ActionScript',
    d: 'ActionScript est le langage de programmation utilisé au sein d\'applications clientes (Adobe Flash, Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator).'
}, {
    t: 'EX4',
    d: 'ECMAScript for XML (E4X) est une extension XML au langage ECMAScript.'
}];

// On crée le paragraphe
var paragraph = document.createElement('p');
var paragraphText = document.createTextNode('Langages basés sur ECMAScript :');
paragraph.appendChild(paragraphText);


// On crée la liste, et on boucle pour ajouter chaque item
var defList = document.createElement('dl'),
    defTerm, defTermText,
    defDefn, defDefnText;

for (var i = 0, c = languages.length; i < c; i++) {
    defTerm = document.createElement('dt');
    defDefn = document.createElement('dd');

    defTermText = document.createTextNode(languages[i].t);
    defDefnText = document.createTextNode(languages[i].d);

    defTerm.appendChild(defTermText);
    defDefn.appendChild(defDefnText);

    defList.appendChild(defTerm);
    defList.appendChild(defDefn);
}

// On insère le tout dans mainDiv
mainDiv.appendChild(paragraph);
mainDiv.appendChild(defList);

// On insère mainDiv dans le <body>
document.body.appendChild(mainDiv);

/////////////////////  TP4 *************************** / 
// On crée l'élément conteneur
var mainDiv = document.createElement('div');
mainDiv.id = 'divTP4';

// Création de la structure du formulaire
var form = document.createElement('form');
var fieldset = document.createElement('fieldset');
var legend = document.createElement('legend'),
    legendText = document.createTextNode('Uploader une image');
var center = document.createElement('div');

form.action = 'upload.php';
form.enctype = 'multipart/form-data';
form.method = 'post';

center.setAttribute('style', 'text-align: center');

legend.appendChild(legendText);

fieldset.appendChild(legend);
fieldset.appendChild(center);

form.appendChild(fieldset);

// Création des champs
var label = document.createElement('label'),
    labelText = document.createTextNode('Image à uploader :');
var input = document.createElement('input');
var br = document.createElement('br');
var submit = document.createElement('input');

input.type = 'file';
input.id = 'inputUpload';
input.name = input.id;

submit.type = 'submit';
submit.value = 'Envoyer';

label.htmlFor = 'inputUpload';
label.appendChild(labelText);

center.appendChild(label);
center.appendChild(input);
center.appendChild(br);
center.appendChild(br.cloneNode(false)); // On clone, pour mettre un deuxième <br />
center.appendChild(submit);

// On insère le formulaire dans mainDiv
mainDiv.appendChild(form);

// On insère mainDiv dans le <body>
document.body.appendChild(mainDiv);
///////// **************
var zozor = document.getElementById('mascot');

if (zozor) {
    var figure = document.createElement('figure');
    var img = document.createElement('img');
    var figcaption = document.createElement('figcaption');

    img.src = 'data/zozor-happy.png';
    img.alt = figcaption.innerHTML = 'Photo de Zozor';

    figure.appendChild(img);
    figure.appendChild(figcaption);

    zozor.parentNode.replaceChild(figure, zozor);
}
//////////// ************
var output = document.getElementById('output');
var brs = output.getElementsByTagName('br');

for (var i = brs.length; i > 0; i--) {
    brs[i - 1].parentNode.removeChild(brs[i - 1]);
}