const APP = {};

var listnerfunctions = {};

window.onload = function()
{
    SetEventHandlers();

    APP.periodictable = new PeriodicTable();

    APP.display = new PeriodicTableDisplay(APP.periodictable, "periodictable", "infoboxbackground", "infobox");

    APP.filterinputs =
	{
		name: document.getElementById("namefilter"),
		atomicnumber: document.getElementById("atomicnumberfilter"),
		symbol: document.getElementById("symbolfilter"),
		category : "",
		group: document.getElementById("groupfilter"),
		period: document.getElementById("periodfilter"),
		block : ""
	};
	ColorByCategory()
	console.log(listnerfunctions)
    
}



function SetEventHandlers()
{
    document.getElementById("btnApplyFilter").onclick = ApplyFilter;
    document.getElementById("btnClearFilter").onclick = ClearFilter;

    document.getElementById("colorblock").onclick = ColorByBlock;
    document.getElementById("colorcategory").onclick = ColorByCategory;
}

function removeAttributes(element, ...attrs) {
	attrs.forEach(attr => element.removeAttribute(attr))
}

function toggleColorByCategory(action){
	let currentcell = null;
	if(action == 'remove'){
		for(let element of APP.periodictable._categoryCellData){
			currentcell = document.querySelector(`[data-row='${element.tablerow18col}'][data-column='${element.tablecolumn18col}']`);
			currentcell.innerHTML = '';
			removeAttributes(currentcell , 'class');
			currentcell.removeEventListener('mouseover' , listnerfunctions[element.category]);
			currentcell.removeEventListener('mouseout' , applycategory)
		}
	}
	else {
		for(let element of APP.periodictable._categoryCellData)
		{
			currentcell = document.querySelector(`[data-row='${element.tablerow18col}'][data-column='${element.tablecolumn18col}']`);

			currentcell.innerHTML = `
				${element.category}<br />`;
			currentcell.classList.add("categorycell");
			listnerfunctions[element.category] = () => applycategory(element.category)
			currentcell.addEventListener('mouseover' , listnerfunctions[element.category])
			currentcell.addEventListener('mouseout' , applycategory)
			APP.display.ColorByCategory(APP.display._periodictable._categoryCellData)
		}
	}
}

function applycategory(cat = ''){
	APP.filterinputs.category = cat
	ApplyFilter()	
}


function toggleBlockByCategory(action){
	let currentcell = null;
	
	if(action == 'remove'){
		for(let element of APP.periodictable._blockCellData){
			currentcell = document.querySelector(`[data-row='${element.tablerow18col}'][data-column='${element.tablecolumn18col}']`);
			currentcell.innerHTML = '';
			currentcell.removeEventListener('mouseover' , listnerfunctions[element.block]);
			currentcell.removeEventListener('mouseout' , applyblock)
			removeAttributes(currentcell , 'class')
		}
	}
	else {
		for(let element of APP.periodictable._blockCellData)
		{
			currentcell = document.querySelector(`[data-row='${element.tablerow18col}'][data-column='${element.tablecolumn18col}']`);

			currentcell.innerHTML = `
				${element.block}<br />`;

			currentcell.classList.add("blockcell");
			listnerfunctions[element.block] = ()=>applyblock(element.block)
			currentcell.addEventListener('mouseover' , listnerfunctions[element.block]);
			currentcell.addEventListener('mouseout' , applyblock);
			APP.display.ColorByBlock(APP.display._periodictable._blockCellData)
		}
	}
}

function applyblock(block = ''){
	APP.filterinputs.block = block
	ApplyFilter()
}


function ColorByBlock()
{
    this.blur();
	toggleColorByCategory('remove')
	toggleBlockByCategory('add')
    APP.display.ColorByBlock();
}



function ColorByCategory()
{
    this.blur();
    toggleBlockByCategory('remove');
	toggleColorByCategory('add');
    APP.display.ColorByCategory();
}


function ApplyFilter()
{
    filtercriteria =
    {
        name: APP.filterinputs.name.value,
        atomicnumber: APP.filterinputs.atomicnumber.value,
        symbol: APP.filterinputs.symbol.value,
        category: APP.filterinputs.category,
        group: APP.filterinputs.group.value,
        period: APP.filterinputs.period.value,
        block: APP.filterinputs.block
    };

    APP.periodictable.ApplyFilter(filtercriteria)
}


function ClearFilter()
{
    APP.filterinputs.name.value = "";
    APP.filterinputs.atomicnumber.value = "";
    APP.filterinputs.symbol.value = "";
    APP.filterinputs.category.value = "";
    APP.filterinputs.group.value = "";
    APP.filterinputs.period.value = "";
    APP.filterinputs.block.value = "";

    APP.periodictable.ClearFilter();
}
