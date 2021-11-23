const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const cont = document.querySelector(".container");
createCard("all");
        // name: 'cat',
		// prefix: 'fa-',
		// type: 'animal',
		// family: 'fas',
		// color: 'orange'

const filtro = document.getElementById("tipo");

filtro.addEventListener('change', function(){
    const selezione = document.getElementById("tipo").value;
    createCard(selezione);
});

function createCard(selezione){
    console.log(selezione);
    cont.innerHTML = "";
    for(let i = 0; i < icone.length; i++){
        if(selezione == "all"){
            cont.innerHTML += 
            `<div class="card">
                <i style="color:${icone[i].color};" class="${icone[i].family} ${icone[i].prefix}${icone[i].name}"></i>
                <span>${icone[i].name}</span>
            </div>`
        }
        else if(icone[i].type == selezione){
            cont.innerHTML += 
            `<div class="card">
                <i style="color:${icone[i].color};" class="${icone[i].family} ${icone[i].prefix}${icone[i].name}"></i>
                <span>${icone[i].name}</span>
            </div>`
        }
        else i++;
    }
}