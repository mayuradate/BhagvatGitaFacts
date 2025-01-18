const factsData = {
    "Jnana Yoga": {
        "facts": [
            "<h4>आत्मज्ञानं परं सत्यं, आत्मनः ब्रह्मणः एकत्वम्। </h4>\n Self-Realization: Jnana Yoga focuses on the pursuit of knowledge and wisdom to achieve self-realization and understand the true nature of the self (Atman) and its unity with the ultimate reality (Brahman).",
            "<h4>विवेकं कुरुते योगी, सत्यं मिथ्यां च भेदयेत्। </h4>\n Discrimination: Practitioners of Jnana Yoga engage in the process of discrimination (Viveka) to distinguish between the real and the unreal, the eternal and the transient.",
            "<h4>ध्यानं च चिन्तनं च, आत्मज्ञानाय साधनम्। </h4>\n Meditation and Contemplation: This path emphasizes meditation and deep contemplation as tools to gain insight into the nature of existence and to transcend the ego.",
            "<h4>शास्त्राध्ययनं ज्ञानाय, उपनिषदां गीता च। </h4>\n Scriptural Study: Jnana Yoga involves the study of sacred texts and scriptures, such as the Upanishads and the Bhagavad Gita, to gain intellectual understanding and spiritual wisdom."
        ]
    },
    "Bhakti Yoga": {
        "facts": [
            "<h4>प्रेम भक्तिः परमं ध्येयम्, ईश्वरस्य च भावनम्। </h4>\nLove and Devotion: Bhakti Yoga is centered around love and devotion to a personal deity or the divine, fostering a deep emotional connection with God.",
            "<h4>अहंकारं समर्प्य, ईश्वराय श्रद्धां कुरु। </h4>\nSurrender: Practitioners of Bhakti Yoga emphasize surrendering the ego and personal desires to the divine will, trusting in the guidance and grace of the deity.",
            "<h4>पूजाः प्रार्थनाः च जपः, भक्तेः साधनं भवेत्। </h4>\nRituals and Worship: This path often involves engaging in rituals, prayers, chanting, and singing hymns as expressions of devotion and means to cultivate a loving relationship with the divine.",
            "<h4>सर्वेषां प्रति प्रेम, ईश्वरस्य दर्शनम्। </h4>\nUniversal Love: Bhakti Yoga teaches the importance of cultivating love and compassion for all beings, seeing them as manifestations of the divine."

            
        ]
    },
    "Karma Yoga": {
        "facts": [
            "<h4>निष्कामं कर्म कुर्वन्ति, सेवा परमं धर्मः। </h4>\nSelfless Service: Karma Yoga emphasizes performing actions selflessly, without attachment to the outcomes, as a form of service to others and the divine.",
            "<h4>धर्मं कर्तव्यं कुरुते, लाभालाभं न चिन्तयेत्। </h4>\nDuty and Righteousness: Practitioners of Karma Yoga focus on fulfilling their duties (dharma) with integrity and righteousness, regardless of personal gain or loss.",
            "<h4>कर्मफलात् विरक्तः स्यात्, शान्तिं प्राप्नोति योगवित्। </h4>\nDetachment from Results: A key principle of Karma Yoga is detachment from the fruits of one's actions, which helps in reducing ego and fostering inner peace.",
            "<h4>नित्यकर्मसु योगं, मोक्षमार्गं समाचरेत्। </h4>\nIntegration with Daily Life: Karma Yoga encourages integrating spiritual practice with daily activities, transforming ordinary actions into opportunities for spiritual growth and liberation."

            
        ]
    }
    
        
    
    
};

const colors = ['#FFD700']; // Golden color
const borderColor = '#FF8C00'; // Orange border
const textColor = '#8B4513'; // Brown text

let currentFactIndex = 0;
let currentYogaTypeIndex = 0;
const yogaTypes = Object.keys(factsData);

function displayFact() {
    const factsContainer = document.getElementById('facts-container');
    factsContainer.innerHTML = ''; // Clear previous fact

    const yogaType = yogaTypes[currentYogaTypeIndex];
    const fact = factsData[yogaType].facts[currentFactIndex];

    const factElement = document.createElement('div');
    factElement.className = 'tile';
    factElement.style.backgroundColor = colors[0];
    factElement.style.border = `2px solid ${borderColor}`;
    factElement.style.color = textColor;
    factElement.innerHTML = `
        <p class="shloka">${fact}</p>
    `;
    factsContainer.appendChild(factElement);

    // Update indices for next fact
    currentFactIndex++;
    if (currentFactIndex >= factsData[yogaType].facts.length) {
        currentFactIndex = 0;
        currentYogaTypeIndex = (currentYogaTypeIndex + 1) % yogaTypes.length;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayFact();
    document.getElementById('new-fact-button').addEventListener('click', displayFact);
});
