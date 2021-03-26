const queryString = new Array()
let editMode = false
let num = 0

let _head = document.querySelector('#title-edit')
let _text = document.querySelector('#content-edit')

const onEdit = () => {
	num += 1
	if (!editMode) {
		_head.style.borderWidth = '2px'
		_head.style.borderStyle = 'solid'
		_head.style.borderColor = 'red'

		_text.style.borderWidth = '2px'
		_text.style.borderStyle = 'solid'
		_text.style.borderColor = 'red'

		document.getElementById('edit-button').innerHTML = 'Save<i class="fa fa-save" style="padding-left: 4px"></i></button>'
		editMode = true
	} else {
		if (num === 2) {
			var temp = _head
			_head.innerHTML = `<span>UPDATED:</span>${temp.innerHTML}`

			var temp = _text
			_text.innerHTML = `<div>UPDATED:</div>${temp.innerHTML}`
		}

		_text.style.border = 'none'
		_head.style.border = 'none'

		document.querySelector('#edit-button').innerHTML = 'Edit<i class="fa fa-edit" style="padding-left: 4px"></i>'
		document.querySelector('#edit-button').disabled = true
	}
}

if (queryString.length == 0) {
	if (window.location.search.split('?').length > 1) {
		const params = window.location.search.split('?')[1].split('&')
		for (let i = 0; i < params.length; i++) {
			const key = params[i].split('=')[0]
			const value = decodeURIComponent(params[i].split('=')[1])
			queryString[key] = value
		}
	}
}
if (queryString.heading != null && queryString.author != null) {
	const { heading } = queryString
	const { author } = queryString
	const { content } = queryString
	document.getElementsByClassName('heading-content')[0].innerHTML = heading
	document.getElementsByClassName('author-name')[0].innerHTML = author
	document.getElementsByClassName('post-content')[0].innerHTML = content
}
document.getElementById('comments').style.visibility = 'hidden'

let count = 0
const countLikes = () => {
	count = parseInt(count) + parseInt(1)
	const divData = document.querySelector('#showCount')
	const likeButton = document.querySelector('#likeButton')
	likeButton.innerHTML = 'Liked'
	if (count == 1) {
		divData.innerHTML = `${count} person likes this !`
	} else {
		divData.innerHTML = `${count} people like this !`
	}
}

const comments = []

const addingComment = (item) => {
	const temp = document.getElementById('comments').innerHTML
	document.getElementById('comments').innerHTML = `<div class="comment">${item}</div>`
	document.getElementById('comments').innerHTML += `${temp}</br>`
	comments.pop()
}

const addComment = (comment) => {
	if (comment.value !== '') {
		document.getElementById('comments').style.visibility = 'visible'
		var comment = comment.value
		comments.unshift(comment)
		$('#comment').val('')
		comments.forEach(addingComment)
		$(document).scrollTop($(document).height())
	}
}