import React, { useEffect, useState } from "react"
import { fetchPosts } from "../hooks/fetchData"

export default function Container() {
	const [posts, setPosts] = useState({})

	useEffect(() => {
		async function loadPosts() {
			try {
				const fetchedPosts = await fetchPosts()
				setPosts(fetchedPosts)
			} catch (error) {
				console.error("Error fetching posts:", error)
			}
		}

		loadPosts()
	}, [])

	const orders = [
		{ image: "order-1 sm:order-1", text: "order-2 sm:order-2" },
		{ image: "order-3 sm:order-4", text: "order-4 sm:order-3" },
		{ image: "order-5 sm:order-5", text: "order-5 sm:order-6" },
		{ image: "order-7 sm:order-8", text: "order-8 sm:order-7" },
	]

	return (
		<div className='bg-primary gap-5 p-4 lg:px-28 grid-cols-1 sm:grid-cols-2 grid-rows-3 grid'>
			{Object.keys(posts).map((key, index) => (
				<React.Fragment key={key}>
					<div className={`md:shrink-0 ${orders[index % orders.length].image}`}>
						<img
							className='h-full w-full object-cover md:h-full md:w-full'
							src={posts[key].image}
							alt={posts[key].title}
						/>
					</div>
					<div className={`text-primary ${orders[index % orders.length].text}`}>
						<div className='p-2 mb-3 w-max text-2xl tracking-wide text-white bg-pink-700 font-semibold'>
							{posts[key].title}
						</div>
						<div dangerouslySetInnerHTML={{ __html: posts[key].excerpt }} />
						<a
							href={`/post/${key}`}
							title='Saiba Mais'
							className='p-2 mt-3 block w-max uppercase text-md tracking-wide text-white bg-pink-700 font-semibold hover:underline'>
							Saiba Mais
						</a>
					</div>
				</React.Fragment>
			))}
		</div>
	)
}
