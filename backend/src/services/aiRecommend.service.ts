import { recommendService } from "./cat.service.js";
import { generateAIResponse } from "./gemini.service.js";

export const aiRecommendService = async (
  kidsFriendly: boolean,
  apartmentFriendly: boolean,
) => {
  const matchCatsFromDB = await recommendService(
    kidsFriendly,
    apartmentFriendly,
  );

  const prompt = `
You are a professional cat expert and adoption advisor.

You have access to a database containing multiple cats. Your task is to help the user find the cats that best match their preferences.

USER PREFERENCES:
- Kids Friendly: ${kidsFriendly}
- Apartment Friendly: ${apartmentFriendly}

Analyze the available cats from the database and determine which cats are the best match for the user's preferences.

For every cat, evaluate:
1. Whether the cat is suitable for children based on its kidsFriendly value.
2. Whether the cat is suitable for apartment living based on its apartmentFriendly value.
3. How well the cat matches the user's overall requirements.

Prioritize cats that match BOTH of the user's preferences.

If a cat matches only one preference, it may still be considered, but rank it lower than cats that match both.

If no cats match both preferences, clearly explain that there are no perfect matches and recommend the closest available options.

Provide a clear and helpful comparison of the matching cats.

For each recommended cat, include:
- Cat name
- Breed
- Kids Friendly
- Apartment Friendly
- Match level
- Short reason for the recommendation

At the end, provide:
- Best overall match
- Number of cats matching both preferences
- Number of cats matching only one preference
- A short recommendation for the user

IMPORTANT:
- Base your recommendations ONLY on the cat data available in the database.
- Do not invent or assume information about any cat.
- Give higher priority to cats matching both preferences.
- Be clear about why each cat was recommended.
- Keep the response concise and easy to understand.
`;

  const aiResponse = await generateAIResponse(prompt);

  return aiResponse;
};
