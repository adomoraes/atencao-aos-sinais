// src/fetchData.js
export async function fetchPosts() {
	const response = await fetch("./atencao-aos-sinais/database.json")
	if (!response.ok) {
		throw new Error("Network response was not ok")
	}
	const data = await response.json()
	return data.posts
}
