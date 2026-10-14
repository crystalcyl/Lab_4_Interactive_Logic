function analyzeSituation() {
    // Store the user's input in variables
    const situation = document.getElementById("situation").value.trim();
    const emotion = document.getElementById("emotion").value;
    const reaction = document.getElementById("reaction").value;

    // Get the result elements
    const result = document.getElementById("result");
    const resultTitle = document.getElementById("resultTitle");
    const resultMessage = document.getElementById("resultMessage");
    const resultTip = document.getElementById("resultTip");

    // Check whether all required fields are completed
    if (situation === "" || emotion === "" || reaction === "") {
        alert("Please describe your situation and select your feelings and reaction.");
        return;
    }

    // Conditional logic determines the personalized outcome
    if (emotion === "angry" && reaction === "argue") {
        resultTitle.textContent = "🛑 Pause Before Responding";
        resultMessage.textContent =
            "You're feeling angry and want to respond immediately. Acting while angry can make the situation worse.";
        resultTip.textContent =
            "Try this: Take five deep breaths and give yourself time to cool down before speaking.";

    } else if (emotion === "sad" && reaction === "avoid") {
        resultTitle.textContent = "💙 Give Yourself Space";
        resultMessage.textContent =
            "You may need time to process your feelings. Taking a break is okay, but avoiding the problem forever may not help.";
        resultTip.textContent =
            "Try this: Write down how you feel, then consider talking to someone you trust.";

    } else if (emotion === "stressed") {
        resultTitle.textContent = "🌿 Reduce the Pressure";
        resultMessage.textContent =
            "Stress can make it harder to think clearly. You don't have to solve everything at once.";
        resultTip.textContent =
            "Try this: Step away briefly, breathe slowly, and identify one small action you can take.";

    } else if (emotion === "confused" || reaction === "think") {
        resultTitle.textContent = "🤔 Reflect Before Deciding";
        resultMessage.textContent =
            "Taking time to understand the situation can help you make a better decision.";
        resultTip.textContent =
            "Try this: Ask yourself what happened, what you know for sure, and what outcome you want.";

    } else if (reaction === "talk" && emotion === "calm") {
        resultTitle.textContent = "🌟 Communicate Clearly";
        resultMessage.textContent =
            "You're feeling calm and willing to communicate. This is a good opportunity to understand the other person's perspective.";
        resultTip.textContent =
            'Try this: Use "I feel..." statements, listen carefully, and focus on finding a solution.';

    } else if (reaction === "avoid") {
        resultTitle.textContent = "⏳ Take a Break, Then Revisit";
        resultMessage.textContent =
            "Stepping away can help you regain perspective, but consider returning to the issue when you're ready.";
        resultTip.textContent =
            "Try this: Set aside some time to think and decide what you want to do next.";

    } else {
        resultTitle.textContent = "💡 Choose Your Next Step";
        resultMessage.textContent =
            "Every situation is different. You can acknowledge your feelings without letting them control your response.";
        resultTip.textContent =
            "Try this: Consider the possible consequences of your actions and choose a response that supports your goals.";
    }

    // Personalize the result using the situation description
    resultMessage.textContent +=
        "\n\nYour situation: " + situation;

    // Show the result and update the page state
    result.classList.remove("hidden");

    // Bring the result into view
    result.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

function resetForm() {
    // Reset the inputs
    document.getElementById("situation").value = "";
    document.getElementById("emotion").value = "";
    document.getElementById("reaction").value = "";

    // Hide the previous result
    document.getElementById("result").classList.add("hidden");
}