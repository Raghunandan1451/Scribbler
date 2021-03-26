const openPost = (author, heading, content) => {
	const url = `../html/post.html?heading=${
		encodeURIComponent(heading.innerText)
	}&author=${
		encodeURIComponent(author.innerText)
	}&content=${
		encodeURIComponent(content.innerText)
	}`;

	location.href = url;
}