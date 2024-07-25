import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchPosts } from "../hooks/fetchData"
import References from "./References"
import Header from "./Header"

export default function Post() {
	const { postId } = useParams()
	const [post, setPost] = useState(null)

	useEffect(() => {
		async function loadPost() {
			try {
				const posts = await fetchPosts()
				setPost(posts[postId])
			} catch (error) {
				console.error("Error fetching post:", error)
			}
		}

		loadPost()
	}, [postId])

	if (!post) {
		return <div>Loading...</div>
	}

	return (
		<>
			<Header />
			<div className='bg-primary gap-5 p-4 lg:px-28 grid-cols-1 sm:grid-cols-2 grid'>
				<div className='md:shrink-0'>
					<img
						className='h-full w-full object-cover md:h-full md:w-full'
						src={post.image}
						alt='Modern building architecture'
					/>
				</div>
				<div className='order-2 text-primary'>
					<div className='p-2 mb-3 w-max text-2xl tracking-wide text-white bg-pink-700 font-semibold'>
						{post.title}
					</div>
					<div
						className='mt-2'
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
				</div>
			</div>
			<References />
		</>
	)
}
