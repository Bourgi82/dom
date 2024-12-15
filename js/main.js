
var produit=document.getElementsByClassName("box")
for(let i=0;i<produit.length;i++){
   let bntPlus=produit[i].children[4].children[2]
   let bntMoins=produit[i].children[4].children[0]
   let nombre=produit[i].children[4].children[1]
   let prixU=produit[i].children[2].children[1]
   let total=produit[i].children[3].children[1]
   let qty=parseInt(nombre.innerText)
   let prixUnitaire=parseInt(prixU.innerText)
   let bnttrash=produit[i].children[5].children[1].children[0]
   let bntlike=produit[i].children[5].children[0].children[0]
 
    
    bntPlus.addEventListener("click",function(){
        
        qty++
        nombre.innerText=qty
        total.innerText=prixUnitaire*qty
        somme()
    })
    
   bntMoins.addEventListener("click",function(){
       qty--
    if (qty < 1){
        qty = 0
    }
    nombre.innerText=qty
    total.innerText=prixUnitaire*qty
    somme()

   })
    bnttrash.addEventListener("click",function(){
        produit[i].remove();
    })
    const bntheart= document.querySelectorAll('.fa-heart');
    bntheart.forEach(button=>{
        button.addEventListener('click', function(){
            this.classList.toggle('liked');
        });
    });
   
    
}
let total=document.getElementById("tyu")
function somme () {
    let sum=0
    let tota1=document.getElementsByClassName("price")
    for(let i=0;i<tota1.length;i++){
        let totat2=parseInt(tota1[i].innerText) 
        sum=sum+totat2
        console.log(sum);
    }
    total.innerText=sum
}
