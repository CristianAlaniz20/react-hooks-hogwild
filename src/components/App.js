import React from "react";
import Nav from "./Nav";
import PorkerTiles from "./PorkerTiles";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<PorkerTiles hogs={hogs} />
		</div>
	);
}

export default App;
