var Demo = React.createClass({
	render: function(){
		return(
			<div id="backgroundContainer"> 

			</div>
			<div id="matte">
				<div id="container">
					<h2>make your key</h2>
					<form action="userIndex.html"/>
						<input type="text" name="name" placeholder="your name"/>
						<input type="text" name="password" placeholder="your password"/>
						<input type="submit" value="Unlock" id="unlock"/>
					</form>
				</div>
			</div>
			);
	}
})