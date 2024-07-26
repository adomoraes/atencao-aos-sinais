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
		basename: "/atencao-aos-sinais",
	}
)
