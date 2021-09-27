function updateNavbarLanguage() {

	let language = (localStorage.getItem('language') == 'en') ? englishData : hindiData

	$('#Learn').text(language.Learn);
	$('#Types_of_chemical_reactions').text(language.Types_of_chemical_reactions);
	$('#Balance_the_chemical_reactions').text(language.Balance_the_chemical_reactions);
	$('#View_periodic_table').text(language.View_periodic_table);
	$('#Tips_to_remember_periodic_table').text(language.Tips_to_remember_periodic_table);
	$('#Play').text(language.Play);
	$('#molequilizer_chemical_reactions_game').text(language.molequilizer_chemical_reactions_game);
	$('#memperiodica_Periodic_table_game').text(language.memperiodica_Periodic_table_game);
	$('#Join-In-Trigger-Button').text(language.Join_in);
}