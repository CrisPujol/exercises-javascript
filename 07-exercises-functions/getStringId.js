



	function getStringId(n){

		var StringId = "";
		var caractersList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";


		for ( var i =0; i<n; i++){

			StringId += caractersList.charAt(Math.random()*caractersList.length);

		}

		return StringId

	}