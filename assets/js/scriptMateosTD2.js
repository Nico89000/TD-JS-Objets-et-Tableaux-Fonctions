/**
 * Created by canals on 25/01/2017.
 */
 'use strict'

 /* TD 2 */
 /* Exercice 1 - Tableaux */

// Q2 A Q7 pour exo 1 et pour exo 2 Q1 a Q10


/* Question 1 */
function range(a,b){
  let tab = [];
  let mini = (a < b)? a : b;
  let maxi = (a > b)? a : b; 

  for (var i = mini; i <= maxi; i++){
   tab.push(i);
 }

 return tab;
}
let tab1 = range(1,4);
let tab2 = range(12,5);
console.log(tab1);
console.log(tab2);

/* Question 2 */
/* Somme FOR */
function sommeFor(tableau){
  var somme = 0;
  var i;
  for (i=0 ; i<tableau.length; i++){
   somme += tableau[i];
 } 
 return somme;
}



/* Somme ForEach */
function sommeForEach(tableau){
  var somme = 0;
  tableau.forEach( (e) => { 
   somme += e;
 });
  return somme;
}

/* Somme Reduce */
function sommeReduce(tableau){
  let sum = ( acc, elem ) => acc + elem ;
  let result = tableau.reduce(sum, 0) ;

  return result;

}

/* Question 3 */
/* MoyenneFor */
function MoyenneFor(tableau){
  let somme = 0;
  let i;
  for (i=0 ; i<tableau.length; i++){
   somme += tableau[i];
 } 
 return somme/i;
}


/* Moyenne ForEach */
function MoyenneForEach(tableau){
  let somme = 0;
  let count = 0;
  tableau.forEach( (e) => { 
   somme += e;
   count++;
 });
  return somme/count;
}
/* Moyenne Reduce */
function MoyenneReduce(tableau){
  let sum = ( acc, elem ) => acc + elem ;
  let result = tableau.reduce(sum, 0) ;

  return result/tableau.length;

}


/* Question 4 */
function Patterns(t,pattern){
  let res = [];
  t.forEach ((string) => { 
    if(string.indexOf(pattern) != (-1)){
      res.push(string.toUpperCase());
    }
  });
  return res;
}


let resultatPat1 = Patterns(['jorzez','dsfqfqsd','lalaez','plus'],'ez');

// function testFnct(text,pattern){
//   return text.includes(pattern);
// }

// function transFnct(text){
//   return text.toUpperCase();
// }

// /* Question 5 */
// function Patterns2(t,testFnct,transFnct,pattern){
//   let res = [];
//   t.forEach(value => {
//     if (testFnct(value,pattern)) 
//      res.push(transFnct(value));
//   });
//    return res;
// }

// let resultatPat2 = Patterns2(['jorzez','dsfqfqsd','lalaez','plus'],'ez');

/* Question 6 */

function RePattern(t,pattern){
  let res = [];
  let Filres = (string) => string.toUpperCase();
  let resultfil = t.filter(Filres);
  let resultmap = t.map(Filres);

  return res;
}

let resultatRePattern = RePattern(['jorzez','dsfqfqsd','lalaez','plus'],'ez');


/* Question 7 */

function Catalogue(tableauproduits){
  let res = [];
  let a = 'http://www.cata.log/products/ref=';
  tableauproduits.forEach((reference) => {
    res.push(a+reference);
  });
  return res;
}
let produits = Catalogue(['ref1','ref2','ref3','ref4']);

/* Question 8 */

function CatalogueComplet(tableauproduits){
  let res = [];
  let debuthtml = "<div class='cata'><ul>";
  let finhtml = "</ul></div>";
  res.push(debuthtml);
  tableauproduits.forEach((reference) => {
    res.push('<li><a href = "url"'+reference+'</li>');
  });
  res.push(finhtml);
  return res;
}
let produits2 = CatalogueComplet(['a123u','da22S','ux59p','u23ab']);


/* Exercice 2 - Objets */


/* Question 1 */
function objet1(tab){

  let count = 0;
  let moy;
  let somme = 0;
  tab.forEach((objet) => count += 1);
  tab.forEach((objet) => somme += objet);
  moy = somme/count;
  let object = {
    nbelements : count,
    sommeelements : somme,
    moyenne : moy
  };
  return object;
}

let tableau = [5,7,15,16,22];
let tableau2 = [125,11255,165,1235,0.2,12];

/* Question 2 */


let etudiant = {
  numero : 2000145,
  nom : "MATEOS",
  prenom : "Nicolas",
  dateNaiss : new Date('1997-02-20'),
  // autre test ('1997-05-20') renvoie 21;
  mail : "nicolas@gmail.com",
  notes : [],


  /* Question 3 */
  age : function(){
    let today = new Date();
    let differenceAnnee = today.getFullYear() - this.dateNaiss.getFullYear();
    let differenceMois =  today.getMonth() - this.dateNaiss.getMonth();
    let differenceJour =  today.getDate() - this.dateNaiss.getDate();
    if (differenceMois < 0 || (differenceJour < 0 && differenceMois === 0)) {
      differenceAnnee--;
    } 

    return differenceAnnee;
  },


  affiche : function(){
    console.log(this.nom.toUpperCase());
    console.log(this.prenom);
    console.log(this.dateNaiss.getDate()+"-"+(this.dateNaiss.getMonth()+1)+"-"+(this.dateNaiss.getFullYear()));
  },

  /* Question 4 */
  ajoutNote : function(m,n){

   let note = {    
     matiere : m,
     note : n 
   };
   this.notes.push(note);
   return this.notes;
 },

 /* Question 5 */
 calculeMoyenne : function(){
  let somme = 0;
  this.notes.forEach((moyenne) => {somme += moyenne.note;
  }
  );
  return somme/this.notes.length;
}
}
let tableauNotes = [9,12,15,16,18];
let tableauNotes2 = [10,2,15.5,11,-2.5];
let tableauNotes3 = [10,2.5,17.5,11.5];
let tableauNotes4 = [2.5,17.5,11.5];


/* Question 6 */
function Etudiant(numero,nom,prenom,dateNaiss,mail,notes){
  this.numero = numero;
  this.nom = nom;
  this.prenom = prenom;
  this.dateNaiss = dateNaiss;
  this.mail = mail;
  this.notes = notes;
}


Etudiant.prototype.age = function() {
  let today = new Date();
  let differenceAnnee = today.getFullYear() - this.dateNaiss.getFullYear();
  let differenceMois =  today.getMonth() - this.dateNaiss.getMonth();
  let differenceJour =  today.getDate() - this.dateNaiss.getDate();
  if (differenceMois < 0 || (differenceJour < 0 && differenceMois === 0)) {
    differenceAnnee--;
  } 

  return differenceAnnee;
};

Etudiant.prototype.affiche = function() {
  console.log(this.nom.toUpperCase());
  console.log(this.prenom);
  console.log(this.dateNaiss.getDate()+"-"+(this.dateNaiss.getMonth()+1)+"-"+(this.dateNaiss.getFullYear()));
};


Etudiant.prototype.ajoutNote = function(m,n) {
  let note = {    
   matiere : m,
   note : n 
 };
 this.notes.push(note);
 return this.notes;
};

Etudiant.prototype.calculeMoyenne = function() {
 let somme = 0;
 this.notes.forEach((moyenne) => {somme += moyenne.note;
 }
 );
 return somme/this.notes.length;
};


var jean = new Etudiant(1001,"michel","jean",new Date('1980-09-25'),"jeanmichel@gmail.com",tableauNotes);
var emile = new Etudiant(1002,"joli","emile",new Date('1995-09-18'),"emilejoli@gmail.com",tableauNotes2);
var edouard = new Etudiant(1003,"phillipe","edouard",new Date('1975-02-18'),"edouardphilippe@gmail.com",tableauNotes3);
var marie = new Etudiant(1003,"jeanne","marie",new Date('1975-02-18'),"mariejeanne@gmail.com",tableauNotes4);

var tableauEtud = [jean,emile,edouard];

/*Question 7*/

function affichetabetudiants(tableau,numeroMois){
  let tabEtudiant = [];
  tableau.forEach ((e) => { 
    if(e.dateNaiss.getMonth()+1 === numeroMois){
      tabEtudiant.push(e);
    }
  });
  return tabEtudiant;
}

/* Question 8 */ 
function listeetu(liste,agepersonne){
  let listeetudiants = [];
  liste.forEach ((e) => { 
    if(e.age() > agepersonne){
      listeetudiants.push(e);
    }
  });
  return listeetudiants;
} 

/*Question 9 */

function GroupeEtudiant(name,form,liste,annee){
  this.nomgr = name;
  this.formation = form;
  this.list = liste;
  this.AnneedeFormation = annee;
}

var groupeEtudiant1 = new GroupeEtudiant("groupe1","DROIT",tableauEtud,2018);

/* Question 10 */
GroupeEtudiant.prototype.ajoutEtudiant = function(etu){
 this.list.push(etu);  
};

GroupeEtudiant.prototype.compterEtudiant = function(etu){
  console.log(etu.length);
};

GroupeEtudiant.prototype.calculerMoyenneGenerale = function(etu){
  // let somme = 0;
  // this.notes.forEach((moyenne) => {somme += moyenne.note;
  // }
  // );
  // return somme/this.notes.length; 
};


console.log(sommeReduce(tab1));
console.log(sommeReduce(tab2));
console.log(MoyenneFor(tab1));
console.log(MoyenneFor(tab2));
console.log(MoyenneForEach(tab1));
console.log(MoyenneForEach(tab2));
console.log(MoyenneReduce(tab1));
console.log(MoyenneReduce(tab2));
console.log(resultatPat1);
// console.log(resultatPat2);
// console.log(Patterns2(t,testFnct,transFnct,pattern));
console.log(resultatRePattern);
console.log(Catalogue(produits));
console.log(CatalogueComplet(produits2));
console.log(objet1(tableau));
console.log(objet1(tableau2));
console.log(etudiant);
console.log(etudiant.age());
etudiant.affiche();
etudiant.ajoutNote('Mathématiques',15);
etudiant.ajoutNote('Francais',12.75);
etudiant.ajoutNote('Anglais',18.25);
etudiant.ajoutNote('Histoire',10.5);
console.log(etudiant.notes);
console.log('Moyenne de l\'etudiant = '+etudiant.calculeMoyenne());
console.log(affichetabetudiants(tableauEtud,9));
console.log(listeetu(tableauEtud,30));
console.log(listeetu(tableauEtud,20));
groupeEtudiant1.ajoutEtudiant(marie);
console.log(tableauEtud);
console.log('Compter les etudiants:')+groupeEtudiant1.compterEtudiant(tableauEtud);
groupeEtudiant1.calculerMoyenneGenerale(tableauEtud);