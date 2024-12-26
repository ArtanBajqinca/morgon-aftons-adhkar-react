import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type CheckboxKey = 'arabic' | 'translation' | 'transliteration';

type CheckboxStates = {
  [key in CheckboxKey]: boolean;
};

const defaultStates: CheckboxStates = {
  arabic: true,
  translation: true,
  transliteration: true,
};

const checkboxOptions = [
  { key: 'arabic' as const, label: 'Arabiska' },
  { key: 'translation' as const, label: 'Svenska' },
  { key: 'transliteration' as const, label: 'Transkribering' },
];

export default function useCheckboxStates() {
  const [checkboxStates, setCheckboxStates] =
    useState<CheckboxStates>(defaultStates);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      AsyncStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
    }
  }, [checkboxStates, isLoading]);

  const loadSavedStates = async () => {
    try {
      const savedStates = await AsyncStorage.getItem('checkboxStates');
      if (savedStates) {
        setCheckboxStates(JSON.parse(savedStates));
      }
    } catch (error) {
      console.error('Error loading checkbox states:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSavedStates();
  }, []);

  const toggleCheckbox = (key: CheckboxKey) => {
    setCheckboxStates((prevState) => {
      const newState = { ...prevState, [key]: !prevState[key] };
      const checkedCount = Object.values(newState).filter(Boolean).length;

      // Prevent unchecking the last checked box
      if (checkedCount === 0) return prevState;

      return newState;
    });
  };

  return {
    checkboxStates,
    toggleCheckbox,
    checkboxOptions,
    isLoading,
  };
}
