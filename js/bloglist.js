const removeCard = (card) => {
	const delCard = document.getElementById(card);
	delCard.parentNode.removeChild(delCard);
}

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