import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Post from "./components/Post"

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/post/:postId",
			element: <Post />,
		},
	],
	{
		basename: "/atencao-aos-sinais", // Substitua 'nome-do-repositorio' pelo nome do seu repositório GitHub
	}
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
