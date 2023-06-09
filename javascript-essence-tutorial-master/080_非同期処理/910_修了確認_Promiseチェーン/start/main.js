/**
 * 問題：
 * myFetch関数を使って以下の「データ取得の流れ」の通り、
 * 順次JSONを取得し、取得したデータを加工して、
 * 以下のメッセージをコンソールに表示してください。
 * 
 * --Bob's timeline--
 * Tim says: waiting at station.
 * Sun says: go shopping?
 * John says: how's it going?
 * Sun says: drink?
 *
 ******************************   
 * データ取得の流れ
 * １．"user1.json"を取得（Bobのユーザー情報取得）
 * 
 * ２．"user1.json"のidの項目を元に
 *     `friendsOf${id}.json`でフレンド一覧を取得
 * 
 * ３．取得したフレンドのID（ユーザーID）を元に、
 * 　　`user${id}.json`で各ユーザーの情報を取得
 * 
 * ４．各ユーザー情報のlatestMsgIdが最後に投稿した
 * 　　メッセージのIDになりますので、そのidを用いて
 * 　　`message${friend.latestMsgId}.json`
 * 　　を取得。
 * 
 * １～４で取得したデータをもとにコンソールログに
 * タイムラインの文字列を作成してください。
 * 
 * ※await/asyncで記述してみてください。
 */
async function myFetch(fileName) {
	const response = await fetch(`../json/${fileName}`);
	const json = await response.json();
	return json;
}

// async function createTL() {
// 	const response = await myFetch("user1.json");
// 	const id = response.id
// 	const friends = await myFetch(`friendsOf${id}.json`)
// 	let res = []
// 	for (const id of friends.friendIds) {
// 		const friend = await myFetch(`user${id}.json`)
// 		const latestMsg = await myFetch(`message${friend.latestMsgId}.json`)
// 		res.push(latestMsg)
// 	}
// 	for (const mg of res) {
// 		const id = mg.userId
// 		friend = await myFetch(`user${id}.json`)
// 		friendName = friend.name
// 		const msg = await myFetch(`message${friend.latestMsgId}.json`)
// 		console.log(`${friendName} says: ${msg.message}`)
// 	}
// }

// createTL();
(async function() {
	const me = await myFetch('user1.json');
	console.log(`--${me.name}'s timeline--`);

	const friendList = await myFetch(`friendsOf${me.id}.json`);

	friendIds = new Set();
	for(const id of friendList.friendIds) {
		friendIds.add(myFetch(`user${id}.json`))
	}
	console.log(friendIds)
	const friends = await Promise.all(friendIds);
	console.log(friends)
})();
