import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CheckboxKey = 'arabic' | 'translation' | 'transliteration';

interface CheckboxOption {
  key: CheckboxKey;
  label: string;
}

const useCheckboxStates = () => {
  const [checkboxStates, setCheckboxStates] = useState<
    Record<CheckboxKey, boolean>
  >({
    arabic: true,
    translation: true,
    transliteration: true,
  });

  // Load saved states from AsyncStorage on mount
  useEffect(() => {
    const loadSavedStates = async () => {
      try {
        const savedStates = await AsyncStorage.getItem('checkboxStates');
        if (savedStates) {
          setCheckboxStates(JSON.parse(savedStates));
        }
      } catch (error) {
        console.error('Error loading checkbox states:', error);
      }
    };
    loadSavedStates();
  }, []);

  const toggleCheckbox = async (key: CheckboxKey) => {
    setCheckboxStates((prevState) => {
      const newState = { ...prevState, [key]: !prevState[key] };
      const checkedCount = Object.values(newState).filter(Boolean).length;

      // Prevent unchecking the last checked box
      if (checkedCount === 0) return prevState;

      AsyncStorage.setItem('checkboxStates', JSON.stringify(newState));
      return newState;
    });
  };

  const checkboxOptions: CheckboxOption[] = [
    { key: 'arabic', label: 'Arabiska' },
    { key: 'translation', label: 'Översättning' },
    { key: 'transliteration', label: 'Transliteration' },
  ];

  return { checkboxStates, toggleCheckbox, checkboxOptions };
};

export default useCheckboxStates;
