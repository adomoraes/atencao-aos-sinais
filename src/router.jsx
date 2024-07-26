import { createBrowserRouter } from "react-router-dom"
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

export default router
