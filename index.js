
function rand(min, max) {
	return Math.random() * (max - min) + min;
}

function arra(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function sharp(str) {
	let stra = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] == "#") {
			stra += "%23";
		} else {
			stra += str[i];
		}
	}

	return stra;
}

function gen() {
	const one = ["ラーメン", "アイスクリーム", "運転", "お月様", "ゲーム", "エイプリールフール", "富士山", "Misskey", "イーロンマスク", "AI絵師", "再共有", "バグ", "改悪", "ゴッド", "吐き気", "石鹸", "スガキヤ", "埼玉", "レターパック", "宅配便", "湖池屋"];
	const two = ["を食べてた", "してた", "を見てた", "を壊した", "を舐めた", "がキモかった", "かと思った", "を感じた", "を見つけた", "がした", "に逃げた", "で反省した", "で現金送った", "に喧嘩売った"];
	const thr = ["臆病", "味付き", "コンセント", "index", "ふすま", "群馬帝国", "最悪", "山梨", "さかな", "青だぬき", "偽物", "本物", "Google", "マジもん", "詐欺", "68円", "虫歯"];

	const ans = `${arra(one)}${arra(two)}ら～、\n\n${arra(thr)}でした～。\n\nチクショー！！　#いつでもチクショー`;

	// alert(ans);
	document.getElementById('ret').textContent = ans;
}

function tweet() {
	let text = document.getElementById('ret');
	text = encodeURI(text.value);
	text = sharp(text);
	window.location.href = `https://twitter.com/intent/tweet?text=${text}`;
}

function copy() {
	let text = document.getElementById('ret');
	navigator.clipboard.writeText(text.value).then(
		() => {
			alert("コピーしました!");
		},
		() => {
			alert("コピーに失敗しました");
		}
	);
}
