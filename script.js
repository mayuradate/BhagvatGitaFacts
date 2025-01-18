const factsData = {
    "Jnana Yoga": {
        "facts": [
            "ज्ञान योग : \nआत्मज्ञानं परं सत्यं, आत्मनः ब्रह्मणः एकत्वम्।",
            "ज्ञान योग : \nविवेकं कुरुते योगी, सत्यं मिथ्यां च भेदयेत्।",
            "ज्ञान योग : \nध्यानं च चिन्तनं च, आत्मज्ञानाय साधनम्।",
            
        ]
    },
    "Bhakti Yoga": {
        "facts": [
            "भक्ति योग : \nप्रेम भक्तिः परमं ध्येयम्, ईश्वरस्य च भावनम्।",
            "भक्ति योग : \nअहंकारं समर्प्य, ईश्वराय श्रद्धां कुरु।",
            "भक्ति योग : \nपूजाः प्रार्थनाः च जपः, भक्तेः साधनं भवेत्।",
            
        ]
    },
    "Karma Yoga": {
        "facts": [
            "कर्म योग : \nनिष्कामं कर्म कुर्वन्ति, सेवा परमं धर्मः।",
            "कर्म योग : \nधर्मं कर्तव्यं कुरुते, लाभालाभं न चिन्तयेत्।",
            "कर्म योग : \nकर्मफलात् विरक्तः स्यात्, शान्तिं प्राप्नोति योगवित्।",
            
        ]
    }
};

function displayFacts() {
    const factsContainer = document.getElementById('facts-container');
    factsContainer.className = 'tile-container';

    for (const [yogaType, data] of Object.entries(factsData)) {
        data.facts.forEach(fact => {
            const factElement = document.createElement('div');
            factElement.className = 'tile';
            factElement.style.backgroundColor = '#FFD700'; // Golden color
            factElement.style.border = '2px solid #FFA500'; // Orange border
            factElement.style.color = '#8B4513'; // Brown text
            factElement.innerHTML = `
                <p class="shloka">${fact}</p>
            `;
            factsContainer.appendChild(factElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', displayFacts);
