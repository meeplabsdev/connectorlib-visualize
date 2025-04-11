function get_snapshot(uri, callback) {
	eel.get_snapshot(uri)(callback);
}

get_snapshot("ws://localhost:3000", (result) => console.log(result));
