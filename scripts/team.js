$(function () {
	const boardBtn = document.querySelector(".boardBtn")
		, techBtn = document.querySelector(".techBtn"),
		manageBtn = document.querySelector(".manageBtn");
	document.querySelector(".boardBtn").addEventListener("click", function (e) {
		let t = document.querySelector(".boardList").classList;
		"Show All" === boardBtn.value ? (boardBtn.value = "Show Less", t.remove("boardRowHide"), t.add("boardRowShow")) : (boardBtn.value = "Show All", t.remove("boardRowShow"), t.add("boardRowHide")), e.preventDefault()
	}), document.querySelector(".techBtn").addEventListener("click", function (e) {
		let t = document.querySelector(".techList").classList;
		"Show All" === techBtn.value ? (techBtn.value = "Show Less", t.remove("techRowHide"), t.add("techRowShow")) : (techBtn.value = "Show All", t.remove("techRowShow"), t.add("techRowHide")), e.preventDefault()
	}), document.querySelector(".manageBtn").addEventListener("click", function (e) {
		let t = document.querySelector(".manageList").classList;
		"Show All" === manageBtn.value ? (manageBtn.value = "Show Less", t.remove("techRowHide"), t.add("techRowShow")) : (manageBtn.value = "Show All", t.remove("techRowShow"), t.add("techRowHide")), e.preventDefault()
	});
})