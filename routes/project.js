exports.viewProject = function(req, res){
	var naame = req.params.name;
	console.log("The project name is: " + naame);
	res.render('project', {
		"projectName": naame
	});
};