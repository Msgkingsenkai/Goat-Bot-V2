module.exports = {
	config: {
			name: "Jaden",
			version: "1.0",
			author: "Kïng Msg lë sënkaï",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "Kïng") return message.reply("Kïng Msg lë sënkaï es trop intelligent 🤗");
}
};
