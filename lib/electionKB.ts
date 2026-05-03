// Offline election knowledge base with multilingual keyword matching
// No API key needed - runs 100% in the browser

export interface QA {
  keywords: string[];
  answer: { en: string; hi: string; default: string };
}

export const knowledgeBase: QA[] = [
  {
    keywords: ['nota', 'none of the above', 'इनमें से कोई नहीं', 'कोई नहीं'],
    answer: {
      en: '🗳️ **NOTA** stands for "None of the Above." It\'s a button on the EVM that lets you reject all candidates. Even if NOTA gets the most votes, the candidate with the next highest votes still wins. It records your dissatisfaction.',
      hi: '🗳️ **NOTA** का मतलब है "इनमें से कोई नहीं।" यह EVM पर एक बटन है जो आपको सभी उम्मीदवारों को अस्वीकार करने देता है। अगर NOTA को सबसे ज़्यादा वोट मिलें, तो भी दूसरे सबसे अधिक वोट वाले उम्मीदवार की जीत होती है।',
      default: '🗳️ NOTA = "None of the Above" — a button on EVM to reject all candidates. Even if NOTA wins, the second-highest candidate takes the seat.'
    }
  },
  {
    keywords: ['evm', 'electronic voting', 'इलेक्ट्रॉनिक वोटिंग मशीन', 'voting machine', 'मशीन'],
    answer: {
      en: '🖥️ **EVM** (Electronic Voting Machine) is a standalone device used to cast votes electronically. It has NO WiFi, Bluetooth, or internet connection — making it tamper-proof. You press a button next to your candidate\'s symbol to vote.',
      hi: '🖥️ **EVM** (इलेक्ट्रॉनिक वोटिंग मशीन) एक स्वतंत्र उपकरण है जिससे इलेक्ट्रॉनिक रूप से वोट डाला जाता है। इसमें WiFi, Bluetooth या इंटरनेट नहीं होता — इसलिए यह सुरक्षित है।',
      default: '🖥️ EVM = Electronic Voting Machine. Standalone device, no WiFi/internet. Press the button next to your candidate\'s symbol to vote.'
    }
  },
  {
    keywords: ['vvpat', 'paper slip', 'verify vote', 'verification', 'पेपर स्लिप', 'सत्यापन'],
    answer: {
      en: '🧾 **VVPAT** (Voter Verifiable Paper Audit Trail) is a machine attached to the EVM. After you vote, it shows a paper slip for 7 seconds displaying your candidate\'s name and symbol — so you can verify your vote was recorded correctly.',
      hi: '🧾 **VVPAT** EVM से जुड़ी एक मशीन है। वोट देने के बाद, यह 7 सेकंड के लिए एक पेपर स्लिप दिखाती है जिसमें आपके उम्मीदवार का नाम और चुनाव चिन्ह होता है।',
      default: '🧾 VVPAT shows a paper slip for 7 seconds after you vote, displaying your candidate — so you can verify your vote.'
    }
  },
  {
    keywords: ['register', 'registration', 'new voter', 'form 6', 'पंजीकरण', 'नया मतदाता', 'फॉर्म'],
    answer: {
      en: '✅ To register as a new voter:\n1. Go to voters.eci.gov.in\n2. Fill **Form 6** online\n3. Upload your photo + age/address proof\n4. Track your application with the reference number\n5. Download your e-EPIC (digital Voter ID) once approved\n\nYou must be 18+ years old.',
      hi: '✅ नए मतदाता के रूप में पंजीकरण करने के लिए:\n1. voters.eci.gov.in पर जाएं\n2. **फॉर्म 6** ऑनलाइन भरें\n3. फोटो और आयु/पता प्रमाण अपलोड करें\n4. संदर्भ संख्या से आवेदन ट्रैक करें\n5. स्वीकृत होने पर e-EPIC डाउनलोड करें\n\nआपकी आयु 18+ होनी चाहिए।',
      default: '✅ Register at voters.eci.gov.in → Fill Form 6 → Upload photo + proof of age/address → Track with reference number → Download e-EPIC.'
    }
  },
  {
    keywords: ['age', 'eligible', 'minimum age', 'how old', 'उम्र', 'आयु', 'कितने साल'],
    answer: {
      en: '🎂 You must be **18 years or older** as of January 1st of the election year to be eligible to vote in India.',
      hi: '🎂 भारत में मतदान के लिए आपकी आयु चुनाव वर्ष की 1 जनवरी को **18 वर्ष या उससे अधिक** होनी चाहिए।',
      default: '🎂 Minimum voting age in India is **18 years** (as of January 1st of the election year).'
    }
  },
  {
    keywords: ['voter id', 'epic', 'id card', 'identity', 'document', 'मतदाता पहचान', 'पहचान पत्र', 'e-epic'],
    answer: {
      en: '🪪 **Voter ID (EPIC)** is your primary ID for voting. But you can also use:\n• Aadhaar Card\n• PAN Card\n• Driving Licence\n• Passport\n• Bank/Post Office Passbook with photo\n• MNREGA Job Card\n• Smart Card issued by RGI\n\nAny ONE of these is enough if your name is on the voter list.',
      hi: '🪪 **मतदाता पहचान पत्र (EPIC)** मतदान के लिए आपका प्राथमिक ID है। लेकिन आप ये भी दे सकते हैं:\n• आधार कार्ड\n• पैन कार्ड\n• ड्राइविंग लाइसेंस\n• पासपोर्ट\n• फोटो सहित बैंक पासबुक\n\nइनमें से कोई एक पर्याप्त है।',
      default: '🪪 Show Voter ID OR any of: Aadhaar, PAN, Driving Licence, Passport, Bank Passbook with photo. One is enough if your name is on the voter list.'
    }
  },
  {
    keywords: ['polling booth', 'booth', 'where to vote', 'polling station', 'मतदान केंद्र', 'बूथ', 'कहाँ वोट'],
    answer: {
      en: '📍 To find your polling booth:\n1. Visit **electoralsearch.eci.gov.in**\n2. Download the **Voter Helpline App** (Android/iOS)\n3. Call **1950** (National Voter Helpline)\n4. Your booth number is also printed on your Voter ID slip.',
      hi: '📍 अपना मतदान केंद्र खोजने के लिए:\n1. **electoralsearch.eci.gov.in** पर जाएं\n2. **Voter Helpline App** डाउनलोड करें\n3. **1950** पर कॉल करें\n4. आपके मतदान केंद्र का नंबर आपकी मतदाता पर्ची पर भी होता है।',
      default: '📍 Find booth at electoralsearch.eci.gov.in, Voter Helpline App, or call 1950.'
    }
  },
  {
    keywords: ['how to vote', 'voting process', 'steps', 'procedure', 'vote kaise', 'वोट कैसे', 'प्रक्रिया'],
    answer: {
      en: '🗳️ **How to vote:**\n1. Go to your assigned polling booth\n2. Show your ID to the polling officer\n3. Get indelible ink mark on left index finger\n4. Sign/thumbprint on voter register\n5. Enter the voting compartment\n6. Press the blue button next to your candidate\n7. See the VVPAT slip for 7 seconds to verify\n✅ Done!',
      hi: '🗳️ **वोट कैसे दें:**\n1. अपने मतदान केंद्र पर जाएं\n2. मतदान अधिकारी को ID दिखाएं\n3. बाईं तर्जनी पर अमिट स्याही लगवाएं\n4. मतदाता रजिस्टर पर हस्ताक्षर करें\n5. वोटिंग कंपार्टमेंट में जाएं\n6. अपने उम्मीदवार के आगे नीला बटन दबाएं\n7. VVPAT स्लिप 7 सेकंड देखकर सत्यापित करें\n✅ हो गया!',
      default: '🗳️ Go to booth → Show ID → Get ink mark → Press blue button on EVM → Verify VVPAT slip for 7 seconds. Done!'
    }
  },
  {
    keywords: ['model code', 'mcc', 'आचार संहिता', 'conduct', 'rules during election'],
    answer: {
      en: '📋 The **Model Code of Conduct (MCC)** is a set of rules that all political parties and candidates must follow once elections are announced. It restricts:\n• Use of government resources for campaigns\n• Distribution of cash/gifts to voters\n• Inflammatory speeches\n\nIt stays in effect until results are declared.',
      hi: '📋 **आदर्श आचार संहिता (MCC)** नियमों का एक समूह है जिसका सभी राजनीतिक दल और उम्मीदवारों को चुनाव घोषणा के बाद पालन करना होता है। यह प्रतिबंध लगाती है:\n• अभियान के लिए सरकारी संसाधनों का उपयोग\n• मतदाताओं को नकद/उपहार वितरण\n• भड़काऊ भाषण',
      default: '📋 MCC (Model Code of Conduct) applies after election announcement — restricts use of government resources, cash distribution, and inflammatory speeches.'
    }
  },
  {
    keywords: ['lok sabha', 'parliament', 'mp', 'member of parliament', 'लोकसभा', 'संसद', 'सांसद'],
    answer: {
      en: '🏛️ **Lok Sabha** is the lower house of Parliament with **543 seats**. MPs are directly elected by citizens for a 5-year term. The party/coalition with 272+ seats forms the government and its leader becomes the Prime Minister.',
      hi: '🏛️ **लोकसभा** संसद का निचला सदन है जिसमें **543 सीटें** हैं। सांसद (MPs) नागरिकों द्वारा सीधे 5 साल के लिए चुने जाते हैं। 272+ सीट पाने वाली पार्टी/गठबंधन सरकार बनाती है।',
      default: '🏛️ Lok Sabha = 543 seats, lower house of Parliament. 272+ seats needed to form government. MPs directly elected by citizens for 5 years.'
    }
  },
  {
    keywords: ['rajya sabha', 'upper house', 'राज्यसभा', 'council of states'],
    answer: {
      en: '🏟️ **Rajya Sabha** is the upper house of Parliament with **245 seats**. Unlike Lok Sabha, it\'s permanent — never dissolved. Members are elected by State MLAs (not directly by citizens) for 6-year terms. 1/3rd retire every 2 years.',
      hi: '🏟️ **राज्यसभा** संसद का ऊपरी सदन है जिसमें **245 सीटें** हैं। यह स्थायी सदन है — कभी भंग नहीं होता। सदस्य राज्य विधायकों द्वारा 6 साल के लिए चुने जाते हैं।',
      default: '🏟️ Rajya Sabha = 245 seats, upper house, permanent (never dissolved). Elected by State MLAs for 6 years. 1/3 retire every 2 years.'
    }
  },
  {
    keywords: ['eci', 'election commission', 'निर्वाचन आयोग', 'who conducts'],
    answer: {
      en: '⚖️ The **Election Commission of India (ECI)** is a constitutional body that conducts all elections in India — Lok Sabha, Rajya Sabha, and State Assemblies. It is fully independent of the government. The Chief Election Commissioner heads it.',
      hi: '⚖️ **भारत निर्वाचन आयोग (ECI)** एक संवैधानिक संस्था है जो भारत में सभी चुनाव कराती है — लोकसभा, राज्यसभा और राज्य विधानसभाएं। यह सरकार से पूरी तरह स्वतंत्र है।',
      default: '⚖️ ECI (Election Commission of India) is a constitutional body that conducts all elections. Fully independent. Headed by Chief Election Commissioner.'
    }
  },
  {
    keywords: ['helpline', '1950', 'phone', 'contact', 'हेल्पलाइन', 'संपर्क'],
    answer: {
      en: '📞 **National Voter Helpline: 1950**\nCall from any phone in India — available in multiple languages.\nYou can also use:\n• Voter Helpline App (Android/iOS)\n• voters.eci.gov.in\n• SMS: EPIC to 1950',
      hi: '📞 **राष्ट्रीय मतदाता हेल्पलाइन: 1950**\nभारत में किसी भी फोन से कॉल करें — कई भाषाओं में उपलब्ध।\nआप यह भी उपयोग कर सकते हैं:\n• Voter Helpline App\n• voters.eci.gov.in',
      default: '📞 Call 1950 (National Voter Helpline) from any phone. Also: Voter Helpline App or voters.eci.gov.in.'
    }
  },
  {
    keywords: ['ink', 'indelible', 'finger', 'mark', 'स्याही', 'उंगली', 'निशान'],
    answer: {
      en: '🖊️ **Indelible ink** is applied to the left index finger of every voter before they vote. It lasts 2-3 weeks and cannot be washed off — preventing people from voting twice. It is manufactured in Mysuru, Karnataka.',
      hi: '🖊️ **अमिट स्याही** हर मतदाता की बाईं तर्जनी पर वोट देने से पहले लगाई जाती है। यह 2-3 सप्ताह तक रहती है और धुलती नहीं — दोबारा वोट देने से रोकती है। इसे मैसूर, कर्नाटक में बनाया जाता है।',
      default: '🖊️ Indelible ink is applied to left index finger before voting. Lasts 2-3 weeks to prevent double voting. Made in Mysuru, Karnataka.'
    }
  },
  {
    keywords: ['compulsory', 'mandatory', 'must vote', 'obligation', 'अनिवार्य', 'ज़रूरी'],
    answer: {
      en: '❓ **No, voting is NOT compulsory in India.** It is a democratic right and civic duty, but not a legal obligation. You will not face any penalty for not voting.',
      hi: '❓ **नहीं, भारत में मतदान अनिवार्य नहीं है।** यह एक लोकतांत्रिक अधिकार और नागरिक कर्तव्य है, लेकिन कानूनी दायित्व नहीं। वोट न देने पर कोई दंड नहीं है।',
      default: '❓ Voting is NOT compulsory in India. It\'s a right and duty, but not legally required. No penalty for not voting.'
    }
  },
  {
    keywords: ['wrong button', 'mistake', 'change vote', 'cancel', 'गलत बटन', 'गलती'],
    answer: {
      en: '⚠️ Once you press a button on the EVM and hear the **beep**, your vote is **final and cannot be changed.** Take your time to confirm the correct candidate symbol before pressing. There is no "undo" option.',
      hi: '⚠️ EVM पर बटन दबाने और **बीप** सुनने के बाद, आपका वोट **अंतिम है और बदला नहीं जा सकता।** बटन दबाने से पहले सही उम्मीदवार का चिन्ह ध्यान से देखें।',
      default: '⚠️ Once you press EVM and hear beep, vote is final — cannot be changed. Always confirm the symbol before pressing!'
    }
  },
  {
    keywords: ['deposit', 'security', 'candidate fee', 'जमानत', 'शुल्क', 'फीस'],
    answer: {
      en: '💰 Candidates must deposit:\n• **₹25,000** for Lok Sabha election\n• **₹10,000** for Vidhan Sabha election\n\nSC/ST candidates pay half. The deposit is returned if they get more than 1/6th of the valid votes cast in the constituency.',
      hi: '💰 उम्मीदवारों को जमा करना होता है:\n• लोकसभा: **₹25,000**\n• विधानसभा: **₹10,000**\n\nSC/ST उम्मीदवार आधा जमा करते हैं। अगर वे 1/6 से ज़्यादा वोट पाते हैं तो जमानत वापस मिलती है।',
      default: '💰 Lok Sabha deposit = ₹25,000. Vidhan Sabha = ₹10,000. SC/ST pays half. Returned if candidate gets 1/6th+ of total votes.'
    }
  },
  {
    keywords: ['constituency', 'area', 'ward', 'निर्वाचन क्षेत्र', 'क्षेत्र'],
    answer: {
      en: '🗺️ A **constituency** is a specific geographic area that elects one representative to Parliament or State Assembly. India has 543 Lok Sabha constituencies. Each is divided into Assembly constituencies (Vidhan Sabha segments).',
      hi: '🗺️ **निर्वाचन क्षेत्र** एक विशेष भौगोलिक क्षेत्र है जो संसद या राज्य विधानसभा में एक प्रतिनिधि चुनता है। भारत में 543 लोकसभा क्षेत्र हैं।',
      default: '🗺️ A constituency = geographic area that elects one MP/MLA. India has 543 Lok Sabha constituencies, each divided into Assembly segments.'
    }
  },
  {
    keywords: ['moved city', 'transfer', 'new city', 'shifted', 'form 8', 'नए शहर', 'स्थानांतरण'],
    answer: {
      en: '🏙️ If you moved to a new city/constituency, fill **Form 8** at voters.eci.gov.in to transfer your vote. Until transferred, you can still vote in your OLD constituency. NRIs can now also vote by proxy.',
      hi: '🏙️ अगर आप नए शहर में गए हैं, तो voters.eci.gov.in पर **फॉर्म 8** भरें। स्थानांतरण होने तक आप अपने पुराने निर्वाचन क्षेत्र में वोट दे सकते हैं।',
      default: '🏙️ Moved to a new city? Fill Form 8 at voters.eci.gov.in to transfer your vote. Until then, vote in old constituency.'
    }
  },
  {
    keywords: ['lost voter id', 'lost id', 'missing id', 'खो गया', 'गुम'],
    answer: {
      en: '😟 Lost your Voter ID? No problem!\n1. You can vote with any alternate ID (Aadhaar, PAN, Passport, etc.)\n2. Download your **e-EPIC** (digital Voter ID) from voters.eci.gov.in for free\n3. Apply for a duplicate physical card through Form 002 on NVSP',
      hi: '😟 मतदाता ID खो गई? कोई बात नहीं!\n1. किसी भी वैकल्पिक ID से वोट दे सकते हैं (आधार, पैन, पासपोर्ट आदि)\n2. voters.eci.gov.in से **e-EPIC** (डिजिटल वोटर ID) मुफ्त में डाउनलोड करें\n3. NVSP पर Form 002 से डुप्लीकेट कार्ड के लिए आवेदन करें',
      default: '😟 Lost Voter ID? Vote with Aadhaar/PAN/Passport. Download free e-EPIC from voters.eci.gov.in. Apply for duplicate via Form 002 on NVSP.'
    }
  },
  {
    keywords: ['hello', 'hi', 'namaste', 'नमस्ते', 'हेलो', 'helo', 'start', 'help'],
    answer: {
      en: '🙏 Namaste! I am **VoteSaathi**, your offline election guide.\n\nI can answer questions about:\n• How to vote 🗳️\n• EVM & VVPAT\n• Voter registration\n• NOTA\n• Polling booth\n• Voter ID & documents\n• Election Commission\n\nAsk me anything! (Hindi & English supported)',
      hi: '🙏 नमस्ते! मैं **VoteSaathi** हूं, आपका चुनाव गाइड।\n\nमैं इन विषयों पर जवाब दे सकता हूं:\n• वोट कैसे दें 🗳️\n• EVM और VVPAT\n• मतदाता पंजीकरण\n• NOTA\n• मतदान केंद्र\n• मतदाता ID और दस्तावेज़\n\nकुछ भी पूछें!',
      default: '🙏 Namaste! I\'m VoteSaathi — ask me about voting, EVM, NOTA, registration, or anything about Indian elections!'
    }
  }
];

// Detect if text is primarily Hindi/Devanagari
export function detectLanguage(text: string): 'hi' | 'en' {
  const devanagariChars = text.match(/[\u0900-\u097F]/g);
  return devanagariChars && devanagariChars.length > 2 ? 'hi' : 'en';
}

// Find best matching answer using keyword scoring
export function findAnswer(query: string): string {
  const q = query.toLowerCase();
  const lang = detectLanguage(query);

  let bestScore = 0;
  let bestAnswer = '';

  for (const qa of knowledgeBase) {
    let score = 0;
    for (const kw of qa.keywords) {
      if (q.includes(kw.toLowerCase())) {
        score += kw.length; // longer matches score higher
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = lang === 'hi' ? qa.answer.hi : qa.answer.en;
    }
  }

  if (bestScore === 0) {
    if (lang === 'hi') {
      return '🤔 मुझे खेद है, मुझे इस प्रश्न का उत्तर नहीं पता। कृपया चुनाव, EVM, NOTA, मतदाता पंजीकरण, या मतदान प्रक्रिया के बारे में पूछें। आप 1950 पर भी कॉल कर सकते हैं।';
    }
    return '🤔 I\'m not sure about that. I can help with: EVM, NOTA, voter registration, how to vote, polling booth, voter ID, or the Election Commission. Try asking one of those!';
  }

  return bestAnswer;
}
