import langdetect from 'langdetect';

const removeSpecialCharacters = (text) => {
    return text.replace(/[^\w\s]/gi, '');
  };

const checkText = async (text) => {
  try {
    const cleanedText = removeSpecialCharacters(text);
    const detectedLanguage = langdetect.detect(cleanedText);
    if (detectedLanguage === 'vi' || detectedLanguage === 'en-US') {
      return cleanedText; 
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export default checkText ;