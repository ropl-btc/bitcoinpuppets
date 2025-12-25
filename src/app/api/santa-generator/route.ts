import { generateWithGemini } from "@/app/santa-generator/providers/gemini";
import { generateWithOpenAI } from "@/app/santa-generator/providers/openai";

const PROMPT =
  "Add the exact Santa hat from the reference image onto the character. If the character already has headwear, replace the headwear with the Santa hat. Do not stylize, redraw, reshape, or reinterpret the hat—keep its exact silhouette, colors, texture, and proportions from the reference. Do not change anything but the headwear.";
const SANTA_HAT_PATH = "/assets/puppets-santa-hat.png";

const getProvider = () => {
  const provider = process.env.IMAGE_PROVIDER?.toLowerCase().trim();
  if (provider === "openai") return generateWithOpenAI;
  if (provider === "gemini") return generateWithGemini;
  return generateWithGemini;
};

const jsonResponse = (payload: object, init?: ResponseInit) =>
  new Response(JSON.stringify(payload), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

export async function POST(request: Request) {
  const formData = await request.formData();
  const puppet = formData.get("puppet");

  if (!(puppet instanceof File)) {
    return jsonResponse(
      { error: "Missing puppet image upload." },
      { status: 400 }
    );
  }

  if (!puppet.type.startsWith("image/")) {
    return jsonResponse(
      { error: "Upload must be an image file." },
      { status: 400 }
    );
  }

  const hatUrl = new URL(SANTA_HAT_PATH, request.url);
  const hatResponse = await fetch(hatUrl);
  if (!hatResponse.ok) {
    return jsonResponse(
      { error: "Failed to load the Santa hat reference image." },
      { status: 500 }
    );
  }

  const hatBlob = await hatResponse.blob();
  const hatFile = new File([hatBlob], "puppets-santa-hat.png", {
    type: hatBlob.type || "image/png",
  });

  try {
    const provider = getProvider();
    const { imageBase64 } = await provider({
      puppet,
      santaHat: hatFile,
      prompt: PROMPT,
    });

    return jsonResponse({ imageBase64 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Image generation failed.";
    return jsonResponse({ error: message }, { status: 502 });
  }
}
