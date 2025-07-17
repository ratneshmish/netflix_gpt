const COHERE_API_KEY = process.env.REACT_APP_COHERE_KEY; // Make sure this is valid

export const callCohere = async ({ prompt }) => {
  try {
    const response = await fetch("https://api.cohere.ai/v1/generate", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${COHERE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command", 
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    // console.log("📦 Full Cohere API Response:", data);

    if (!response.ok) {
      throw new Error(data.message || `HTTP ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error("🚨 Cohere API Error:", error.message);
    return null;
  }
};
