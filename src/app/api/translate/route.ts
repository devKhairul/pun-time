import { NextResponse } from "next/server";

/**
 * Handles the POST request to translate text using the DeepL API.
 *
 * @param request - The incoming request object containing JSON data with `text` to be translated and `targetLang` as the target language code.
 * @returns {Promise<NextResponse>} A promise that resolves to a NextResponse with the translated text data, or an error message if the translation fails.
 * @throws {Error} Throws an error if the DeepL API request fails.
 */
export async function POST(request: Request) {
  const { text, targetLang } = await request.json();

  try {
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
      throw new Error(`DeepL API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json(
      { message: "Error translating text" },
      { status: 500 }
    );
  }
}
