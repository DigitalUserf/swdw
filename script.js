let promp = prompt();
let prompTo = prompt()
let products = [
	{
		id: Math.random(),
		model: "air",
		name: "Mac",
		color: "space grey",
		price: 1200,
	},
	{
		id: Math.random(),
		model: "aspire",
		name: "acer",
		color: "white",
		price: 900,
	},
	{
		id: Math.random(),
		model: "swift",
		name: "asus",
		color: "gold",
		price: 1600,
	},
	{
		id: Math.random(),
		model: "povilion",
		name: "hp",
		color: "green",
		price: 1500,
	},
	{
		id: Math.random(),
		model: "tuf",
		name: "asus",
		color: "black",
		price: 2000,
	},
	{
		id: Math.random(),
		model: "air",
		name: "mackbook",
		color: "space grey",
		price: 1300,
	},
	{
		id: Math.random(),
		model: "aspire",
		name: "acer",
		color: "black",
		price: 800,
	},
	{
		id: Math.random(),
		model: "swift",
		name: "asus",
		color: "gold",
		price: 1100,
	},
	{
		id: Math.random(),
		model: "povilion",
		name: "hp",
		color: "green",
		price: 1000,
	},
	{
		id: Math.random(),
		model: "tuf",
		name: "asus",
		color: "black",
		price: 2100,
	},
];
let ShowProducts = products.price[promp];
alert(ShowProducts);
let Ask = confirm("хотите лы вы купить это?");
if (Ask == "yes") {
	let Money = prompt("наличка или карта?");
	if (Money == "наличка") {
		alert("введите сумму");
	}
} else if (Ask == "No") {
	alert("можете выбрать другую");
} else {
	alert("в долг не дадимsw");
}
