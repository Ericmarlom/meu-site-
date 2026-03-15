body{
font-family:Arial;
margin:0;
background:#e9e9e9;
}

/* topo */

header{
background:black;
color:white;
padding:15px;
}

.topo{
display:flex;
justify-content:space-between;
align-items:center;
max-width:1200px;
margin:auto;
flex-wrap:wrap;
}

.loja{
font-size:22px;
font-weight:bold;
letter-spacing:2px;
}

.oferta{
color:#ff3b3b;
font-weight:bold;
animation:piscando 1s infinite;
}

/* animação */

@keyframes piscando{
0%{opacity:1;}
50%{opacity:0.3;}
100%{opacity:1;}
}

/* produto */

.produto{
max-width:1200px;
margin:auto;
display:flex;
flex-wrap:wrap;
gap:40px;
padding:30px;
justify-content:center;
align-items:center;
}

.galeria{
max-width:450px;
width:100%;
}

#imagemPrincipal{
width:100%;
border-radius:10px;
}

.miniaturas{
display:flex;
gap:10px;
margin-top:10px;
flex-wrap:wrap;
}

.miniaturas img{
width:70px;
cursor:pointer;
border-radius:6px;
}

.info{
max-width:450px;
width:100%;
}

.descricao{
color:#555;
}

.precos{
margin:20px 0;
}

.antigo{
text-decoration:line-through;
color:#777;
font-size:18px;
}

.novo{
font-size:45px;
color:#00c853;
font-weight:bold;
margin-left:10px;
}

.estoque{
color:red;
font-weight:bold;
}

.tamanhos{
margin:20px 0;
display:flex;
flex-wrap:wrap;
gap:10px;
}

.tamanhos button{
padding:14px 20px;
font-size:16px;
border:1px solid #ccc;
background:white;
cursor:pointer;
border-radius:5px;
}

/* botão comprar */

.comprar{
display:block;
background:#00c853;
color:white;
text-align:center;
padding:18px;
font-size:22px;
font-weight:bold;
text-decoration:none;
border-radius:8px;
margin-top:20px;
transition:0.3s;
}

.comprar:hover{
transform:scale(1.05);
}

.garantias{
margin-top:20px;
color:#555;
}

/* benefícios */

.beneficios{
background:#f7f7f7;
padding:40px 20px;
text-align:center;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,200px);
gap:20px;
justify-content:center;
}

.card{
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 5px 10px rgba(0,0,0,0.1);
font-weight:bold;
}

footer{
text-align:center;
padding:20px;
background:black;
color:white;
}

/* RESPONSIVO CELULAR */

@media (max-width:768px){

.produto{
flex-direction:column;
padding:20px;
}

.topo{
flex-direction:column;
gap:10px;
text-align:center;
}

.loja{
font-size:20px;
}

.oferta{
font-size:18px;
}

.novo{
font-size:40px;
}

.comprar{
font-size:20px;
padding:20px;
}

.miniaturas img{
width:60px;
}
function trocarImagem(img){

document.getElementById("imagemPrincipal").src = img.src;

}

function selecionar(btn){

document.querySelectorAll(".tamanhos button").forEach(b=>{
b.style.background="white"
b.style.color="black"
})

btn.style.background="black"
btn.style.color="white"

}
}

