var pagemap = {
	home:{
		template:['home.html'],
		js:['page/home.js']
	},
	
	testpage:{
		template:['header.html', 'test.page.html'],
		script:['page/test.page.js']
	}
};

var template = new TemplateManager(pagemap);

window.onload = function() {
	template.goto('home');
}