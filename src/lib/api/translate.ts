// lib/api/translate.ts
export async function translateText(text: string, targetLang: string) {
	const response = await fetch("https://api-free.deepl.com/v2/translate", {
		method: "POST",
		headers: {
			Authorization: `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			text: [text],
			target_lang: targetLang,
		}),
	});

	if (!response.ok) {
		throw new Error("Translation failed");
	}

	const data = await response.json();
	return data.translations[0].text;
}
